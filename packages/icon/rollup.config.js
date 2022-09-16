import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";

export default {
  input: "src/icon.ts",
  output: [
    {
      file: pkg.module,
      format: "es",
    },
  ],
  plugins: [typescript()],
};
