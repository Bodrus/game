module.exports = {
    'env': {
        es6: true,
        node: true,
        jest: true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'react-hooks'
    ],
    "rules": {
        indent: ['error', 2, { SwitchCase: 1 }],
        quotes: ['error', 'single', { avoidEscape: true }],
        'no-empty-function': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
