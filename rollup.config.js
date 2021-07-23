import typescript from 'rollup-plugin-typescript2'

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
        typescript()
    ]
}
