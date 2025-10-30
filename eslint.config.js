import js from "@eslint/js";
import pluginImport from "eslint-plugin-import";
import prettierConfig from "eslint-config-prettier";

export default [
    js.configs.recommended,
    prettierConfig,
    {
        plugins: {
            import: pluginImport,
        },
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                process: "readonly",
                module: "readonly",
                require: "readonly",
                console: "readonly",
                __dirname: "readonly",
                jest: "readonly",
            },
        },
        rules: {
            "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
            "import/no-unresolved": "off",
        },
    },
];
