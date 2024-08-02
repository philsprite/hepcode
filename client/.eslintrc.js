// .eslintrc.js
module.exports = {
    root: true,
    extends: [
        'react-app',
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    plugins: ['react'],
    env: {
        browser: true,
        es2021: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        // Ihre benutzerdefinierten Regeln
    },
};
