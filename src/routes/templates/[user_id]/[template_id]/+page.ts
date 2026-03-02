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

        // Resolve resolver principals
        if (vd.resolvers) {
          for (const resolverVersion of vd.resolvers) {
            if (resolverVersion.id) {
              const resolverResp = await toResult(
                () => api.vResolverVersionsDetail(resolverVersion.id!, '1'),
                'Fail to get resolver version',
              ).serial();
              if (resolverResp[0] === 'ok' && resolverResp[1].resolver) {
                resolvedDeps.resolvers.push(resolverResp[1].resolver);
              }
            }
          }
        }

        // Resolve plugin principals
        if (vd.plugins) {
          for (const pluginVersion of vd.plugins) {
            if (pluginVersion.id) {
              const pluginResp = await toResult(
                () => api.vPluginVersionsDetail(pluginVersion.id!, '1'),
                'Fail to get plugin version',
              ).serial();
              if (pluginResp[0] === 'ok' && pluginResp[1].plugin) {
                resolvedDeps.plugins.push(pluginResp[1].plugin);
              }
            }
          }
        }

        // Resolve processor principals
        if (vd.processors) {
          for (const processorVersion of vd.processors) {
            if (processorVersion.id) {
              const processorResp = await toResult(
                () => api.vProcessorVersionsDetail(processorVersion.id!, '1'),
                'Fail to get processor version',
              ).serial();
              if (processorResp[0] === 'ok' && processorResp[1].processor) {
                resolvedDeps.processors.push(processorResp[1].processor);
              }
            }
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
