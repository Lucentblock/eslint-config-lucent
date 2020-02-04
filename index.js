/**
 * @fileoverview This file defines a set of ESLint rules that Lucentblock
 * is enforcing developers to follow as a unified style guide.
 * @author Junho Jin <jun@lucentblock.com>
 */


"use strict"


// Load rule set by traversing rules directory
const ruleSet = require("./rules")

module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  extends: [
    "eslint:recommended",
    "./rules"
  ],
  env: {
    commonjs: true,
    node: true,
    es6: true
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  rules: {
    // Possible Errors
    ...ruleSet.errors.rules,
    // Best Practices
    ...ruleSet.practices.rules,
    // Strict Mode
    ...ruleSet.strict.rules,
    // Variables
    ...ruleSet.variables.rules,
    // Node.js and CommonJS
    ...ruleSet.nodejs.rules,
    // Stylistic Issues
    ...ruleSet.styles.rules,
    // ECMAScript 6
    ...ruleSet.es6.rules
  }
}
