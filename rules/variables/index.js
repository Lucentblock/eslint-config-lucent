/**
 * @fileoverview This file defines a set of ESLint rules related to
 * variable declarations.
 * @author Junho Jin <jun@lucentblock.com>
 */


"use strict"


module.exports = {
  rules: {
    // disallow deleting variables
    "no-delete-var": "error",
    // disallow labels that share a name with a variable
    "no-label-var": "error",
    // disallow variable declarations from shadowing variables declared in the outer scope
    "no-shadow": [
      "error",
      {
        builtinGlobals: true,
        hoist: "all"
      }
    ],
    // disallow identifiers from shadowing restricted names
    "no-shadow-restricted-names": "error",
    // disallow the use of undeclared variables unless mentioned in `/*global */` comments
    "no-undef": [
      "error",
      { typeof: true }
    ],
    // disallow initializing variables to `undefined`
    "no-undef-init": "error",
    // disallow the use of `undefined` as an identifier
    "no-undefined": "error",
    // disallow unused variables
    "no-unused-vars": [
      "error",
      {
        args: "all",
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
        caughtErrors: "none"
      }
    ],
    // disallow the use of variables before they are defined
    "no-use-before-define": "error"
  }
}
