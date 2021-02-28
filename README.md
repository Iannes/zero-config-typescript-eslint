## Zero Config TS Eslint Prettier

This zero-config CLI is intended for React projects that are meant to add TypeScript &amp; ESLint support.

## Prerequisites

You will need to install the following VS Code plugins:

- [Prettier for VS Code]("https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint for VS Code]("https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint")

### Features

All features are optional, you choose what you want to add 👌

- Adds a `tscofig.json` file
- Adds an `.eslintrc.json` file
- Adds a `.vscode` folder with `autosave` feature
- Adds `.prettierrc` file

### Dependencies

The CLI will add the following dev dependencies to your project:

- prettier
- eslint
- typescript
- eslint-config-prettier
- eslint-plugin-prettier
- @typescript-eslint/parser
- @types/classnames
- @types/node
- @types/react
- @types/react-dom
- @types/react-helmet
- @typescript-eslint/eslint-plugin

## Installation

Run the following command to start the CLI:

```sh
npx zero-config-ts-eslint

```

## Assumptions

This project assumes that your project is built with [Gatsby]("https://www.gatsbyjs.com/)
