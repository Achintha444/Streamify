import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tsdocPlugin from 'eslint-plugin-tsdoc';
import globals from 'globals';
import * as tseslint from 'typescript-eslint';

// Define line padding rules
const LINE_PADDING_RULES = [
    { blankLine: "always", prev: "*", next: "return" },
    { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
    { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] }
];

export default tseslint.config(
    { ignores: ['dist'] },
    ...tseslint.configs.recommended,
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            'react-refresh': reactRefresh,
            import: importPlugin,
            react: reactPlugin,
            "react-hooks": reactHooks,
            tsdoc: tsdocPlugin
        },
        rules: {
            // General Rules
            "array-bracket-spacing": [1, "always"],
            "comma-dangle": ["warn", "never"],
            "eol-last": "error",
            "import/order": [
                "warn",
                {
                    alphabetize: {
                        caseInsensitive: true,
                        order: "asc"
                    },
                    groups: ["builtin", "external", "index", "sibling", "parent", "internal"]
                }
            ],
            indent: [1, 4, { SwitchCase: 1 }],
            "jsx-quotes": ["warn", "prefer-double"],
            "lines-between-class-members": [
                1,
                "always",
                { exceptAfterSingleLine: true }
            ],
            "max-len": ["warn", { code: 120 }],
            "no-alert": 1,
            "no-console": "warn",
            "no-duplicate-imports": "warn",
            "no-trailing-spaces": "warn",
            "no-unreachable": "error",
            "object-curly-spacing": ["warn", "always"],
            "padding-line-between-statements": ["warn", ...LINE_PADDING_RULES],
            quotes: ["warn", "double"],
            semi: 1,
            "sort-imports": [
                "warn",
                {
                    ignoreCase: false,
                    ignoreDeclarationSort: true,
                    ignoreMemberSort: false
                }
            ],
            "sort-keys": [
                "warn",
                "asc",
                {
                    caseSensitive: true,
                    minKeys: 2,
                    natural: false
                }
            ],
            "tsdoc/syntax": "warn",

            // React Rules
            "react-hooks/exhaustive-deps": ["off"],
            "react/display-name": 0,
            "react/jsx-curly-spacing": [
                "warn",
                {
                    allowMultiline: true,
                    children: { when: "always" },
                    spacing: { objectLiterals: "always" },
                    when: "always"
                }
            ],
            "react/jsx-first-prop-new-line": [1, "multiline"],
            "react/jsx-max-props-per-line": [1, { maximum: 1, when: "multiline" }],
            "react/jsx-wrap-multilines": [
                "warn",
                {
                    arrow: "parens",
                    assignment: "parens",
                    condition: "parens",
                    declaration: "parens",
                    logical: "parens",
                    prop: "parens",
                    return: "parens"
                }
            ],
            "react/no-children-prop": 0,
            "react/no-danger": 2,
            "react/prop-types": 1
        }
    }
);