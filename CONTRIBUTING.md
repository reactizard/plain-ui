Thanks for showing interest to contribute to PLAIN-UI 💖

## Description
All development workflow(project management, discussion, CI) of this project maintained in Github.
 
## How to contribute
#### Clone repo
Fork the plain-ui repository and clone your fork repository
#### Select issue 
You can find the planned features and fixes under the [project's](https://github.com/orgs/reactizard/projects/1/views/1) section. You can choose any ticket from the todo, feel free to discuss with any core contributor before working on it.

#### Create branch

Create a new branch out of the `main`  branch. We follow branch naming convention like `[user name]/[isue type]-[issue number]` eg: `LogicalAnt/feature-77` issue type can be `feature/feat`, `fix`, `docs`, `test`.

#### Commit changes

Commit the changes you made.

Please try to comply with [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/).
```
<type>: <relevent icon> <message>

[optional body]
```
eg:
> feat: :sparkles: add example component

You can use Conventional commit [vscode extension](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) if you'd like.

#### Create PR:

Push changes to your forked repository. Create a pull request from your working branch of the forked repo to the plain-ui repository.

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

>  **How to analyze the bundle size?**
>
> We use `Rollup plugin visualizer` to analyze the bundle size.
>
> run <span style="background:#dadadb">npm run build</span> which will create `stats.html` in project root. Open up the file with your desired browser and check file sizes from a treemap graph.

## Scripts

### Development
To startup the storybook development server `npm run storybook`
### Testing
Tests are written using **Jest** and **react-testing-library**

To run the entire test suite: `npm test`
To run specific tests: `npm test <test file name>`

Please ensure that the tests are passing when submitting a pull request. If you're adding new features, please include tests.
### Release

Releases will be maintained by one of a **core member** or **maintainer** of the project.
#### Storybook

```
$ npm run build-storybook
$ vercel
```

#### NPM
```
$ npm version major|minor|patch
$ npm run changelog -> commit changelog
$ git push origin HEAD --tags
$ npm run build
$ npm publish
```
## Core members
- [LogicalAnt](https://github.com/LogicalAnt)
