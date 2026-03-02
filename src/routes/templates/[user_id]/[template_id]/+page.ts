import type { ProblemDetails } from '../../../../errors/problem_details';
import type {
  TemplateResp,
  ResolverPrincipalResp,
  PluginPrincipalResp,
  ProcessorPrincipalResp,
} from '$lib/api/core/data-contracts';
import { NewApi } from '../../../../store';
import type { PageLoad } from './$types';
import { toResult } from '$lib/utility';

export interface ResolvedDependencies {
  resolvers: ResolverPrincipalResp[];
  plugins: PluginPrincipalResp[];
  processors: ProcessorPrincipalResp[];
}

export const load = (async ({
  params,
  fetch,
  parent,
}): Promise<{
  result: ['err', ProblemDetails] | ['ok', TemplateResp];
  resolvedDeps: ResolvedDependencies;
}> => {
  const data = await parent();
  const api = NewApi({ data, fetch });

  const r = await toResult(
    () => api.vTemplateIdDetail(params.user_id, params.template_id, '1'),
    'Fail to get template',
  ).serial();

  // Fetch latest version dependencies if versions exist
  const resolvedDeps: ResolvedDependencies = {
    resolvers: [],
    plugins: [],
    processors: [],
  };

  if (r[0] === 'ok' && r[1].versions && r[1].versions.length > 0) {
    // Get the latest version (sorted by version number descending)
    const sortedVersions = [...r[1].versions].sort((a, b) => (b?.version ?? 0) - (a?.version ?? 0));
    const latestVersion = sortedVersions[0];
    if (latestVersion?.id) {
      const versionDeps = await toResult(
        () => api.vTemplateVersionsDetail(latestVersion.id!, '1'),
        'Fail to get template version dependencies',
      ).serial();

      // Resolve dependency principals from version IDs
      if (versionDeps[0] === 'ok' && versionDeps[1]) {
        const vd = versionDeps[1];

        // Collect all fetch promises for parallel execution
        const resolverPromises = (vd.resolvers ?? [])
          .filter(r => r.id)
          .map(r => toResult(() => api.vResolverVersionsDetail(r.id!, '1'), 'Fail to get resolver version').serial());

        const pluginPromises = (vd.plugins ?? [])
          .filter(p => p.id)
          .map(p => toResult(() => api.vPluginVersionsDetail(p.id!, '1'), 'Fail to get plugin version').serial());

        const processorPromises = (vd.processors ?? [])
          .filter(p => p.id)
          .map(p => toResult(() => api.vProcessorVersionsDetail(p.id!, '1'), 'Fail to get processor version').serial());

        // Execute all fetches in parallel
        const [resolverResults, pluginResults, processorResults] = await Promise.all([
          Promise.all(resolverPromises),
          Promise.all(pluginPromises),
          Promise.all(processorPromises),
        ]);

        // Filter out errors and collect principal results
        for (const result of resolverResults) {
          if (result[0] === 'ok' && result[1].resolver) {
            resolvedDeps.resolvers.push(result[1].resolver);
          }
        }
        for (const result of pluginResults) {
          if (result[0] === 'ok' && result[1].plugin) {
            resolvedDeps.plugins.push(result[1].plugin);
          }
        }
        for (const result of processorResults) {
          if (result[0] === 'ok' && result[1].processor) {
            resolvedDeps.processors.push(result[1].processor);
          }
        }
      }
    }
  }

  return {
    result: r,
    resolvedDeps,
  };
}) satisfies PageLoad;
