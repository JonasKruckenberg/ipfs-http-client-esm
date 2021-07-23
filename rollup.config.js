import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

const DEV = process.env.ROLLUP_WATCH === 'true'

export default {
    input: 'src/index.ts',
    output: [
        {
            dir: 'dist',
            format: 'cjs',
            sourcemap: true,
            preserveModules: true,
            entryFileNames: "[name].cjs",
            chunkFileNames: "[name].cjs"
        },
        {
            dir: 'dist',
            format: 'esm',
            sourcemap: true,
            preserveModules: true,
            entryFileNames: "[name].mjs",
            chunkFileNames: "[name].mjs"
        }
    ],
    plugins: [
        typescript(),
        !DEV && terser()
    ]
}