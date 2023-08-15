import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import PeerDepsExternalPlugin from 'rollup-plugin-peer-deps-external'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import del from 'rollup-plugin-delete'

import packageJson from "./package.json" assert {type: 'json'}

export default [
    {
      input: "src/index.ts",
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
          del({ targets: 'dist/*' }),
          peerDepsExternal(),
          PeerDepsExternalPlugin(),             
          resolve(),
          commonjs({
              include: ['node_modules/**'],
          }),
          typescript({ tsconfig: "./tsconfig.json" }),
      ],
      external: ["@material-ui/core","@mui/icons-material","@mui/material","@mui/styled-engine","@mui/styled-engine-sc"],
  },
  {
      input: "src/index.ts",
      output: [{ file: "dist/index.d.ts", format: "esm"}],
      plugins: [dts.default()],
  },
];
