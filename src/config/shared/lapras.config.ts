import type { ISharedConfig } from "./config";

const config: ISharedConfig = {
  app: {
    landscape: "lapras",
    platform: "sulfone",
    service: "argon",
    module: "webapp",
    version: "1.0.0",
  },
  errorPortal: {
    enabled: true,
    host: "localhost:3000",
    scheme: "http",
  },
  api: {
    domain: "127.0.0.1:9001",
    scheme: "http",
  },
};

export default config;
