import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable all @typescript-eslint rules
      ...Object.fromEntries(
        Object.keys(require("@typescript-eslint/eslint-plugin").rules).map(
          (rule) => [`@typescript-eslint/${rule}`, "off"]
        )
      ),
    },
  },
];

export default eslintConfig;
