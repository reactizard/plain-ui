import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { watch } from 'rollup';
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
//import { terser } from 'rollup-plugin-terser';

const packageJson = require("./package.json");

const config = [
  {
    input: "./src/index.ts",
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
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),
      //terser()
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/],
  },
];

if (process.argv.includes('--watch')) {
  const watcher = watch({
    ...config, // Replace with your Rollup configuration object
  });

  watcher.on('event', event => {
    if (event.code === 'START') {
      console.log('Rollup is watching...');
    } else if (event.code === 'ERROR') {
      console.error('Error:', event.error);
    } else if (event.code === 'END') {
      console.log('Build completed successfully!');
    }
  });
}

export default config