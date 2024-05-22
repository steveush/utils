import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import { clean, copy } from "@steveush/rollup-utils";

const isProduction = process.env.BUILD !== "develop";

export default [ {
    input: "src/index.js",
    output: {
        dir: "lib/cjs",
        format: "cjs",
        entryFileNames: "[name].cjs",
        generatedCode: "es2015",
        sourcemap: true,
        preserveModules: true
    },
    plugins: [
        clean([ "lib/cjs", "types" ]),
        babel( {
            presets: [ "@babel/preset-env" ],
            plugins: [ "@babel/plugin-transform-runtime" ],
            babelHelpers: "runtime"
        } ),
        isProduction && terser( { keep_classnames: true } ),
        copy( "src", "types", [ "**/*.d.ts" ] )
    ]
}, {
    input: "src/index.js",
    output: {
        dir: "lib/es",
        format: "es",
        entryFileNames: "[name].js",
        generatedCode: "es2015",
        sourcemap: true,
        preserveModules: true
    },
    plugins: [
        clean(),
        babel( {
            presets: [ [ "@babel/preset-env", { "modules": false } ] ],
            plugins: [ [ "@babel/plugin-transform-runtime", { "useESModules": true } ] ],
            babelHelpers: "runtime"
        } ),
        isProduction && terser( { keep_classnames: true } )
    ]
} ];