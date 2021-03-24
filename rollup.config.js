import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

const DEV = process.env.ROLLUP_WATCH === 'true'

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.cjs',
            format: 'cjs',
            sourcemap: true
        },
        {
            file: 'dist/index.mjs',
            format: 'esm',
            sourcemap: true
        }
    ],
    plugins: [
        typescript(),
        !DEV && terser()
    ]
}