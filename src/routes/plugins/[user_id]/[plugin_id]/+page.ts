import type { ProblemDetails } from "../../../../errors/problem_details";
import type { PluginResp } from "$lib/api/core/data-contracts";
import { NewApi } from "../../../../store";
import type { PageLoad } from "./$types";
import { toResult } from "$lib/utility";

export const load = (async ({
  params,
  fetch,
  parent,
}): Promise<{
  result: ["err", ProblemDetails] | ["ok", PluginResp];
}> => {
  const data = await parent();
  const api = NewApi({ data, fetch });

  const r = await toResult(
    () => api.vPluginIdDetail(params.user_id, params.plugin_id, "1"),
    "Fail to get plugin",
  ).serial();
  return {
    result: r,
  };
}) satisfies PageLoad;
