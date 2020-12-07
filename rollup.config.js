import path from "path";
import ts from "@wessberg/rollup-plugin-ts";
import terser from "rollup-plugin-terser";
import banner from "rollup-plugin-banner";

export default {
  input: "./src/index.ts",
  output: [
    {
      file: "./lib/workbench-widget-api.js",
      format: "iife",
      name: "Semaphore",
    },
    {
      file: "./lib/workbench-widget-api.min.js",
      format: "iife",
      name: "Semaphore",
      plugins: [terser.terser()],
    },
    { file: "./lib/workbench-widget-api.mjs", format: "es" },
  ],
  plugins: [
    ts(),
    banner({
      file: path.join(__dirname, "banner.txt"),
      encoding: "utf-8",
    }),
  ],
};
