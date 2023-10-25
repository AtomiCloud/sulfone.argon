import type { UserResp } from "$lib/api/core/data-contracts";
import type { PageLoad } from "./$types";
import { toResult } from "$lib/utility";
import type { ProblemDetails } from "../../errors/problem_details";
import { NewApi } from "../../store";
import jwtDecode from "jwt-decode";
import type { JWT } from "@auth/core/jwt";

export const load = (async ({
  fetch,
  parent,
}): Promise<{
  result: ["err", ProblemDetails] | ["ok", UserResp];
}> => {
  const data = await parent();
  const api = NewApi({ data, fetch });
  const s = (jwtDecode(data.session?.access_token ?? "") as JWT).sub ?? "";
  const r = await toResult(
    () => api.vUserDetail2(s, "1"),
    "Fail to get user",
  ).serial();
  return {
    result: r,
  };
}) satisfies PageLoad;
