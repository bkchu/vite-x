# ViteX

_A simple, DX-focused Vite + ReactJS + TailwindCSS template to hit the ground running_

## Features

- Minimal setup needed (especially for smaller projects)
- Absolute imports so you can do things like
  - ```ts
    import { DarkModeSwitcher } from 'components';
    ```
- Code-formatting and linting out of the box on pre-commit
- Automatic import sorting via [this prettier plugin](https://github.com/trivago/prettier-plugin-sort-imports)
- Test runner `vitest`, alongside `react-testing-library`
- Styling via `tailwindcss`
- Pre-built dark mode logic and `<DarkModeSwitcher />` component
- Easy icons via `unplugin-icons`

## Tools/Packages

- [`pnpm`](https://pnpm.io/)
- [`vite`](https://vitejs.dev/)
- [`react`](https://reactjs.org/)
- [`typescript`](https://www.typescriptlang.org/)
- [`eslint`](https://eslint.org/) - using [Kent C Dodd's `eslint` config](https://github.com/kentcdodds/eslint-config-kentcdodds)
- [`prettier`](https://prettier.io/)
- [`husky`](https://typicode.github.io/husky/#/)
- [`lint-staged`](https://github.com/okonet/lint-staged)
- [`tailwindcss`](https://tailwindcss.com/)
- [`vitest`](https://vitest.dev/) - test runner for Vite
- [`react-testing-library`](https://testing-library.com/)
- [`unplugin-icons`](https://github.com/antfu/unplugin-icons)

## Usage

_Make sure pnpm is [installed](https://pnpm.io/installation)._

```bash
# clones the template
$ pnpm dlx degit bkchu/vite-x <custom-name>

# go into the project folder
$ cd <custom-name>

# this is necessary to install `husky`
$ git init

# similar to `npm install` or `yarn install`
$ pnpm i

# start server
$ pnpm dev
```
