import { DEFAULT_EXTENSIONS } from "@babel/core"
import { babel } from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import { watch } from "rollup"
import dts from "rollup-plugin-dts"
import external from "rollup-plugin-peer-deps-external"
import postcss from "rollup-plugin-postcss"
import { terser } from "rollup-plugin-terser"
import typescript from "rollup-plugin-typescript2"
import { visualizer } from "rollup-plugin-visualizer"
import packageJson from "./package.json"

const isProduction = process.env.BUILD === "production"

const config = [
  {
    input: "./src/index.ts",
    output: [
      // {
      //   file: packageJson.main,
      //   format: "cjs",
      //   sourcemap: !isProduction,
      // },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: !isProduction,
      },
    ],
    plugins: [
      external(),
      typescript({ tsconfig: "./tsconfig.json" }),
      resolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
      commonjs(),
      postcss(),
      babel({
        babelHelpers: "bundled",
        extensions: [...DEFAULT_EXTENSIONS, ".ts", ".tsx"],
      }),
      terser(),
      visualizer({ gzipSize: true }),
    ],
  },
  {
    input: "./src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/],
  },
]

if (process.argv.includes("--watch")) {
  const watcher = watch({
    ...config,
  })

  watcher.on("event", (event) => {
    if (event.code === "START") {
      console.log("Rollup is watching...")
    } else if (event.code === "ERROR") {
      console.error("Error:", event.error)
    } else if (event.code === "END") {
      console.log("Build completed successfully!")
    }
  })
}

export default config
