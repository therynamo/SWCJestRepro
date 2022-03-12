# SWCJestRepro
Repro Repo for https://github.com/swc-project/jest/issues/85

```
yarn install
yarn test

# see results
 FAIL  components/__tests__/EditScreenInfo.test.tsx
  ● Test suite failed to run

    error: Expected ',', got ':'

       |
    51 |   applyWithGuard<TArgs: $ReadOnlyArray<mixed>, TOut>(
       |                       ^



    Caused by:
        0: failed to process js file
        1: Syntax Error

      at Compiler.transformSync (node_modules/@swc/core/index.js:137:25)
      at transformSync (node_modules/@swc/core/index.js:217:21)
      at Object.process (node_modules/@swc/jest/index.js:55:45)
      at ScriptTransformer.transformSource (node_modules/@jest/transform/build/ScriptTransformer.js:464:35)
      at ScriptTransformer._transformAndBuildScript (node_modules/@jest/transform/build/ScriptTransformer.js:569:40)
      at ScriptTransformer.transform (node_modules/@jest/transform/build/ScriptTransformer.js:607:25)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.073 s
Ran all test suites.

Watch Usage
 › Press f to run only failed tests.
 › Press o to only run tests related to changed files.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.

✨  Done in 184.51s.
```
