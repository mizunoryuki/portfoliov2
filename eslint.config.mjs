import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";
import { dirname } from "path";
import tseslint from "typescript-eslint";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default tseslint.config([
  js.configs.recommended,
  ...compat.extends(
    "plugin:react/recommended",
    "next/core-web-vitals",
    "next/typescript",
  ),

  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    plugins: {
      "simple-import-sort": simpleImportSort,
      "jsx-a11y": jsxA11y,
      "unused-imports": unusedImports,
      unicorn,
    },
    rules: {
      "no-console": "warn",
      "prefer-const": "error",
      "no-unused-vars": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports" },
      ],
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/self-closing-comp": "warn",
      "@next/next/no-img-element": "warn",
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
      "import/first": "warn",
      "import/newline-after-import": "warn",
      "import/no-duplicates": "warn",
      "import/no-default-export": "warn",
      "react/jsx-no-duplicate-props": ["warn", { ignoreCase: true }],
      "no-dupe-keys": "warn",
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "unicorn/filename-case": [
        "warn",
        {
          cases: {
            kebabCase: true,
          },
        },
      ],
      complexity: ["warn", 10],
      "max-depth": ["warn", 3],
      "max-lines": [
        "warn",
        { max: 300, skipBlankLines: true, skipComments: true },
      ],

      "react/no-array-index-key": "warn",
      "react/jsx-pascal-case": "warn",

      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
      ...jsxA11y.configs.recommended.rules,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  {
    files: [
      "src/app/**/{page,layout,template,not-found,error,loading,route,default}.tsx",
      "next.config.mjs",
      "next.config.ts",
      "next.config.ts",
      "eslint.config.mjs",
    ],
    rules: {
      "import/no-default-export": "off",
    },
  },
  {
    files: ["src/app/**/opengraph-image.tsx"],
    rules: {
      "import/no-default-export": "off",
    },
  },
  eslintConfigPrettier,
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      ".vercel/**",
      "public/**",
      "next.config.ts",
    ],
  },
]);
