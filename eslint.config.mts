import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
  tseslint.configs.recommended,
  globalIgnores([
    "node_modules/",
    "dist/",
    "*.config.js",
    "/*.js,",
    "** / *. js",
    "build/",
    "/src/react-app-env.d.ts",
  ]),
]);
