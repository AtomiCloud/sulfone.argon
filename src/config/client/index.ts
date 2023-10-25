import { PUBLIC_LANDSCAPE } from "$env/static/public";
import type { IClientConfig } from "./config";
import lapras from "./lapras.config";
import pichu from "./pichu.config";

const reg: { [s: string]: IClientConfig } = {
  lapras,
  pichu,
};

const config: IClientConfig = reg[PUBLIC_LANDSCAPE];
export { config };
