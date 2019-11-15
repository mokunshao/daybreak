module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ["@typescript-eslint"],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['airbnb', 'airbnb/hooks', "plugin:@typescript-eslint/recommended"],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "react/no-array-index-key": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "no-unused-expressions": 0,
    "global-require": 0,
    "import/no-webpack-loader-syntax": 0,
    "import/no-unresolved": 0,
    "no-console": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off"
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
