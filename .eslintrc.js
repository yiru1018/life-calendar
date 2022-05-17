module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    indent: 'off',
    'react/jsx-filename-extension': [0],
    'import/extensions': 'off',
    'react/prop-types': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  // 'import/no-extraneous-dependencies': {
  //   root: true,
  //   indent: [
  //     'error',
  //     {
  //       devDependencies: false,
  //       optionalDependencies: false,
  //       peerDependencies: false,
  //     },
  //   ],
  // },
};
