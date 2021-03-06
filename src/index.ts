const config: object = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // These are already checked by Typescript
        'import/no-unresolved': 'off',
        'no-unused-vars': 'off',
        'react/prop-types': 'off',
      }
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/order': [
      'error',
      {
        'groups': [
          ['builtin', 'external'],
          ['sibling', 'parent', 'internal', 'index', 'unknown'],
        ],
        'newlines-between': 'always',
      },
    ],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'max-len': ['error', {
      code: 100,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
    }],
    'max-params': ['error', 3],
    'prefer-destructuring': ['error', {
      array: true,
      object: true,
    }, {
      enforceForRenamedProperties: false,
    }],
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/destructuring-assignment': ['error', 'always', { ignoreClassFields: true }],
    'react/forbid-prop-types': ['error', { forbid: ['any'] }],
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-sort-props': ['error'],
    'react/sort-comp': ['error', {
      order: [
        'type-annotations',
        'static-variables',
        'static-methods',
        'instance-variables',
        'lifecycle',
        'everything-else',
        'render',
      ],
    }],
    'react/state-in-constructor': 'off',
    'react/static-property-placement': ['error', 'static public field'],
  },
};

module.exports = config;
