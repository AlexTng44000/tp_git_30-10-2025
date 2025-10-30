import js from "@eslint/js";
import pluginImport from "eslint-plugin-import";
import prettierConfig from "eslint-config-prettier";

export default [
    js.configs.recommended,
    pluginImport.configs.recommended,
    prettierConfig,
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
        },
        env: { node: true, es2022: true, jest: true },
        rules: {
            "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
            "import/no-unresolved": "off",
        },
    },
];
