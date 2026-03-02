import type { ProblemDetails } from '../../../../errors/problem_details';
import type { ResolverResp } from '$lib/api/core/data-contracts';
import { NewApi } from '../../../../store';
import type { PageLoad } from './$types';
import { toResult } from '$lib/utility';

export const load = (async ({
  params,
  fetch,
  parent,
}): Promise<{
  result: ['err', ProblemDetails] | ['ok', ResolverResp];
}> => {
  const data = await parent();
  const api = NewApi({ data, fetch });

  const r = await toResult(
    () => api.vResolverIdDetail(params.user_id, params.resolver_id, '1'),
    'Fail to get resolver',
  ).serial();
  return {
    result: r,
  };
}) satisfies PageLoad;
