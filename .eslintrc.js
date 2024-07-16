module.exports = {
    root: true,
    env: {
      node: true,
      browser: true,
      es2021: true,
    },
    extends: [
      'plugin:vue/essential',
      'eslint:recommended',
      'plugin:prettier/recommended',
      '@vue/prettier',
    ],
    parserOptions: {
      parser: 'babel-eslint',
      requireConfigFile: false, // <== ADD THIS
      ecmaVersion: 2024,
      sourceType: 'module',
    },
    rules: {
        'vue/multi-word-component-names': 'off',
        'vue/no-mutating-props': 'off', // aunque no se recomienda deshabilitar esta
        // otras reglas
      },
  };
  