import { PUBLIC_LANDSCAPE } from "$env/static/public";
import type { ISharedConfig } from "./config";
import lapras from "./lapras.config";
import pichu from "./pichu.config";

const reg: { [s: string]: ISharedConfig } = {
  lapras,
  pichu,
};

const config: ISharedConfig = reg[PUBLIC_LANDSCAPE];
export { config };
