import { FlatCompat } from "@eslint/eslintrc";
import stylistic from "@stylistic/eslint-plugin";
import perfectionistPlugin from "eslint-plugin-perfectionist";
import tseslint from "typescript-eslint";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  ignores: [
    "./src/app/(payload)/admin/importMap.js",
    "src/app/(payload)/",
    "src/app/(payload)/admin/importMap.js",
    "./src/migrations",
    "src/migrations",
    ".next",
  ],
});

export default tseslint.config(
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: ["src/app/(payload)/", "src/app/(payload)/admin/importMap.js", "src/migrations", ".next"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "prettier/prettier": "warn",
    },
  },
  stylistic.configs["recommended"],
  perfectionistPlugin.configs["recommended-natural"],
  ...compat.extends("plugin:prettier/recommended"),
  {
    ignores: ["src/app/(payload)/", "src/app/(payload)/admin/importMap.js", "src/migrations", ".next"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "prettier/prettier": "warn",
    },
  },
);
