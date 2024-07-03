import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import { fixupConfigRules } from '@eslint/compat';

export default [
  // Apply to all JavaScript files
  { files: ['**/*.{js,mjs,cjs,jsx}'] },

  // Enable JSX parsing
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },

  // Specify source type for CommonJS
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },

  // Enable browser globals
  { languageOptions: { globals: globals.browser } },

  // Enable Node.js globals
  { files: ['**/*.js'], languageOptions: { globals: globals.node } },

  // ESLint recommended settings for JavaScript
  pluginJs.configs.recommended,

  // ESLint recommended settings for React
  ...fixupConfigRules(pluginReactConfig),
];
