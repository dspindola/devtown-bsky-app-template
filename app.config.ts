// @ts-nocheck
import {
  defineConfig,
  type TanStackStartInputConfig,
} from "@tanstack/start/config";
import tsconfigPaths from "vite-tsconfig-paths";

export const routers: TanStackStartInputConfig["routers"] = {
  client: {
    entry: "app/entry-client.tsx",
  },
  ssr: {
    entry: "app/entry-server.tsx",
  },
  api: {
    entry: "app/entry-api.ts",
  },
};

export const vite: TanStackStartInputConfig["vite"] = {
  plugins: [
    tsconfigPaths({
      projects: ["./tsconfig.json"],
    }),
  ],
};

export const tsr: TanStackStartInputConfig["tsr"] = {
  routeFileIgnorePattern: ".((const|macro|server|client|api|bun).(ts|sh))",
};

export const server: TanStackStartInputConfig["server"] = {
  srcDir: "apsp/",
};

export default defineConfig({
  routers,
  vite,
  tsr,
  server,
});
