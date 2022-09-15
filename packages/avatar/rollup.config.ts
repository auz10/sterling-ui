import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";

export default {
  input: "src/avatar.ts",
  output: [
    {
      file: pkg.module,
      format: "es",
    },
  ],
  plugins: [typescript()],
};
