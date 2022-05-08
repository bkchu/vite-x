module.exports = {
  // normally prettier-plugins work by default without specifying,
  // but for pnpm, had to manually add plugin
  // reference - https://github.com/trivago/prettier-plugin-sort-imports/issues/51#issuecomment-1018985805
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  // import sorting plugin - `@trivago/prettier-plugin-sort-imports`
  // see more here: https://github.com/trivago/prettier-plugin-sort-imports
  importOrder: [
    // react
    '^react$',

    // any other third party packages
    '<THIRD_PARTY_MODULES>',

    // relative imports
    '^[./]'
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,

  // default prettier settings
  semi: true,
  trailingComma: 'none',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always'
};
