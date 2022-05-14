# ViteX

_A simple, DX-focused Vite + ReactJS + TailwindCSS template to hit the ground running._

## Features

- `pnpm`
- `vite`
- `react`
- `typescript`
- `eslint` - using [Kent C Dodd's `eslint` config](https://github.com/kentcdodds/eslint-config-kentcdodds)
- `prettier`
  - including automatic import sorting using [this prettier plugin](https://github.com/trivago/prettier-plugin-sort-imports)
- `husky`
- `lint-staged`
- `tailwindcss`
- `vitest`
- `react-testing-library`

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
