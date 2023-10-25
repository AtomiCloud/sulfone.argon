import { PUBLIC_LANDSCAPE } from "$env/static/public";
import type { IServerConfig } from "./config";
import lapras from "./lapras.config";
import pichu from "./pichu.config";

const reg: { [s: string]: IServerConfig } = {
  lapras,
  pichu,
};

const config: IServerConfig = reg[PUBLIC_LANDSCAPE];
export { config };
