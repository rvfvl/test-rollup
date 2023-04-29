import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { visualizer } from "rollup-plugin-visualizer";
import json from "@rollup/plugin-json";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import image from "@rollup/plugin-image";

import packageJson from "./package.json" assert { type: "json" };

export default {
  input: "src/index.js",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions: [".js", ".jsx"] }),
    commonjs(),
    babel({
      extensions: [".js", ".jsx"],
      babelHelpers: "runtime",
      exclude: /node_modules/,
      presets: ["@babel/preset-env", "@babel/preset-react"],
      plugins: [
        "@babel/plugin-transform-runtime",
        "babel-plugin-styled-components",
      ],
    }),
    json(),
    url(),
    svgr(),
    //image(),
    visualizer(),
  ],
  external: (id) => id.includes("@babel/runtime"),
};
