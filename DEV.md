# Getting Started

This is developer documentation for this package itself and simply goes over the setup and configuration to develop 
this package locally. In short this is an ESM module package, it's tested with [Jest](https://jestjs.io/) and built 
with [Rollup](https://rollupjs.org/) to allow tree-shaking.

Once checked out the project should only require running `npm install` to get things up and running.

## Configuration

### `package.json`

This is primarily an ESM module and the package is configured as such with the `"type"` and `"module"` properties.
See [Node documentation](https://nodejs.org/dist/latest-v20.x/docs/api/esm.html) for enabling ESM.

```json
{
  "type": "module",
  "module": "lib/es/index.js"
}
```

To support CommonJS modules the `"main"` property is also supplied. This allows this package to be included using the 
CommonJS `require()` syntax. See [Rollup documentation](https://rollupjs.org/introduction/#publishing-es-modules) on 
publishing ESM modules. 

```json
{
  "main": "lib/cjs/index.cjs"
}
```

To allow build tools like Rollup to perform tree-shaking the `"sideEffects"` property has also been set to `false` as 
we do not mutate any globals.

```json
{
  "sideEffects": false
}
```

There are also pre-defined scripts for building and testing the package.

```json
{
  "scripts": {
    "test": "node --experimental-vm-modules --no-warnings node_modules/jest/bin/jest.js",
    "build": "rollup -c",
    "develop": "rollup -c -w --environment BUILD:develop"
  }
}
```
---

#### `npm run test`

Runs [Jest](https://jestjs.io/) using the local `jest.config.js` which is set up to run all `*.jest.js` files found in 
the `src/` folder.

To get Jest to work with ESM modules we have to set the `--experimental-vm-modules` flag. 
See [the documentation](https://jestjs.io/docs/ecmascript-modules) for more information on configuring Jest with ESM 
modules.

To prevent node repeatedly logging `ExperimentalWarnings` for VM Modules each time a test suite runs we have set the 
`--no-warnings` flag.

Tests have also been grouped using the [jest-runner-groups](https://www.npmjs.com/package/jest-runner-groups) package
to allow for only specific subsets of the entire package to be tested. The below lists those groups:

| Group         | Description                                                   | Script                     |
|:--------------|:--------------------------------------------------------------|:---------------------------|
| `type-checks` | Contains the various type-check functions. e.g. `isUndefined` | `npm run test@type-checks` |
| `obj`         | Contains the various object functions. e.g. `merge`           | `npm run test@obj`         |
| `str`         | Contains the various string functions. e.g. `bisect`          | `npm run test@str`         |

You can also run any combination of groups, for example to run both the `type-checks` and `str` groups you could 
use the below.

```shell
# run multiple group tests
npm run test -- --group=type-checks --group=str
```

Note: The `--` before the `--group` arguments is required to forward those arguments onto Jest within the `test` script.

Alternatively you may want to run all tests except `type-checks`. You could accomplish that using 
[jest-runner-groups exclude groups](https://www.npmjs.com/package/jest-runner-groups#exclude-groups) syntax which is simply placing a minus (-) character before the group name:

```shell
# run all tests except the specified groups
npm run test -- --group=-type-checks
```
---

#### `npm run build`

Runs [Rollup](https://rollupjs.org/) using the local `rollup.config.js` which is set up to output both a CommonJS and
ESM package in the `lib/` folder.
---

#### `npm run develop`

The same as the build script however the output is not minified and the project rebuilds when a change is detected.