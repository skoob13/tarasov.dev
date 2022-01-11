const fs = require('fs');

const folders = fs
  .readdirSync('./', { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

module.exports = {
  extends: ['plugin:prettier/recommended', 'next/core-web-vitals'],
  plugins: ['simple-import-sort'],
  overrides: [
    {
      files: ['*.tsx', '*.ts', '*.js', '*.jsx', '*.mjs'],
      rules: {
        'react/display-name': 'off',
        'simple-import-sort/imports': [
          'warn',
          {
            groups: [['^\\u0000', '^react$', '^@?\\w'], [`^(${folders.join('|')})(/.*|$)`], ['^\\.'], ['^[^.]']].filter(
              (rule) => rule
            ),
          },
        ],
      },
    },
  ],
};
