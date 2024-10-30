const { fixupConfigRules } = require('@eslint/compat');
const { FlatCompat } = require('@eslint/eslintrc');

const flatCompat = new FlatCompat();

module.exports = [
  ...fixupConfigRules(flatCompat.extends('next/core-web-vitals')),
  {
    ignores: ["node_modules", ".next", "out"],
  }
]