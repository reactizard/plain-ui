Thanks for showing interest to contribute to PLAIN-UI 💖

## Description
All development workflow(project management, discussion, CI) of this project maintained in Github.
 
## How to contribute

## Adding new component
Use template.sh file to add new component. This will lead you to initial starting point of development of the UI.
eg: `template.sh ./src/components/atoms/ExampleComponent`
This will create all the initial files of `ExampleComponent` for you.
## Tooling
- [NPM](https://www.npmjs.com) Package and dependency management
- [Rollup](https://rollupjs.org) Module bundling
- [Storybook](https://storybook.js.org) UI testing and documenting
- [Jest](https://jestjs.io), [React testing library](https://testing-library.com/docs/react-testing-library/intro/) Testing components and functionalities
- [Rollup plugin visualizer](https://github.com/btd/rollup-plugin-visualizer) To analyze bundle to see which modules are taking up space.
- [Auto changelog](https://github.com/cookpete/auto-changelog) For automating changelog generation

## Scripts

### Development
To startup the storybook development server `npm run storybook`
### Testing
Tests are written using **Jest** and **react-testing-library**

To run the entire test suite: `npm test`
To run specific tests: `npm test <test file name>`

Please ensure that the tests are passing when submitting a pull request. If you're adding new features, please include tests.
### Release

## Commit convention
Please try to comply with [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/).
```
<type>: <relevent icon> <message>

[optional body]
```
eg:
feat: :sparkles: add example component

You can use Conventional commit [vscode extension](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) if you'd like.
## Core members
- [LogicalAnt](https://github.com/LogicalAnt)
