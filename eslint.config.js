import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginAstro from 'eslint-plugin-astro';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import fs from 'fs';

const folders = fs
  .readdirSync('./', { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

folders.push('contentlayer');

export default [
  ...eslintPluginAstro.configs['flat/recommended'],
  ...eslintPluginAstro.configs['flat/jsx-a11y-recommended'],
  eslintConfigPrettier,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [['^\\u0000', '^@?\\w'], [`^(${folders.join('|')})(/.*|$)`], ['^\\.'], ['^[^.]']].filter(
            (rule) => rule
          ),
        },
      ],
    },
  },
];
