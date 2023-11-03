import type { ISharedConfig } from "./config";

const config: ISharedConfig = {
  app: {
    landscape: "raichu",
    platform: "sulfone",
    service: "argon",
    module: "webapp",
    version: "1.0.0",
  },
  errorPortal: {
    enabled: true,
    host: "error-portal.pages.dev",
    scheme: "https",
  },
  api: {
    domain: "api.zinc.sulfone.raichu.cluster.atomi.cloud",
    scheme: "https",
  },
};

export default config;
