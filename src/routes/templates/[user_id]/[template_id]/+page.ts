import type { ProblemDetails } from "../../../../errors/problem_details";
import type { TemplateResp } from "$lib/api/core/data-contracts";
import { NewApi } from "../../../../store";
import type { PageLoad } from "./$types";
import { toResult } from "$lib/utility";

export const load = (async ({
  params,
  fetch,
  parent,
}): Promise<{
  result: ["err", ProblemDetails] | ["ok", TemplateResp];
}> => {
  const data = await parent();
  const api = NewApi({ data, fetch });

  const r = await toResult(
    () => api.vTemplateIdDetail(params.user_id, params.template_id, "1"),
    "Fail to get template",
  ).serial();
  return {
    result: r,
  };
}) satisfies PageLoad;
