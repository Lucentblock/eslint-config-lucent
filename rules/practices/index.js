/**
 * @fileoverview This file defines a set of ESLint rules related to
 * better ways of doing things to help you avoid problems.
 * @author Junho Jin <jun@lucentblock.com>
 */


"use strict"


module.exports = {
  rules: {
    // enforce getter and setter pairs in objects and classes
    "accessor-pairs": [
      "error",
      {
        setWithoutGet: true,
        getWithoutSet: true,
        enforceForClassMembers: true
      }
    ],
    // enforce `return` statements in callbacks of array methods
    "array-callback-return": "error",
    // enforce the use of variables within the scope they are defined
    "block-scoped-var": "error",
    // require `return` statements to either always or never specify values
    "consistent-return": "warn",
    // enforce consistent brace style for all control statements
    "curly": [
      "error",
      "all"
    ],
    // require `default` cases in `switch` statements
    "default-case": "error",
    // enforce default parameters to be last
    "default-param-last": "error",
    // enforce consistent newlines before and after dots
    "dot-location": [
      "error",
      "object"
    ],
    // enforce dot notation whenever possible
    "dot-notation": [
      "error",
      {
        allowKeywords: false // avoiding dot notation for reserved word properties
      }
    ],
    // require the use of `===` and `!==`
    "eqeqeq": [
      "error",
      "always"
    ],
    // require grouped accessor pairs in object literals and classes
    "grouped-accessor-pairs": [
      "warn",
      "getBeforeSet"
    ],
    // require `for-in` loops to include an `if` statement
    "guard-for-in": "warn",
    // enforce a maximum number of classes per file
    "max-classes-per-file": [
      "warn",
      4
    ],
    // disallow the use of `alert`, `confirm`, and `prompt`
    "no-alert": "warn",
    // disallow the use of `arguments.caller` or `arguments.callee`
    "no-caller": "error",
    // disallow lexical declarations in case clauses
    // The reason is that the lexical declaration is visible in the entire switch block
    // but it only gets initialized when it is assigned, which will only happen if
    // the case where it is defined is reached
    "no-case-declarations": "warn",
    // disallow returning value from constructor
    "no-constructor-return": "error",
    // disallow empty functions
    "no-empty-function": "warn",
    // disallow empty destructuring patterns
    "no-empty-pattern": "error",
    // disallow `null` comparisons without type-checking operators
    "no-eq-null": "error",
    // disallow the use of `eval()`
    "no-eval": [
      "error",
      {
        allowIndirect: false
      }
    ],
    // disallow extending native types
    "no-extend-native": "error",
    // disallow unnecessary calls to `.bind()`
    "no-extra-bind": "warn",
    // disallow fallthrough of `case` statements
    "no-fallthrough": "warn",
    // disallow leading or trailing decimal points in numeric literals
    "no-floating-decimal": "error",
    // disallow assignments to native objects or read-only global variables
    "no-global-assign": "error",
    // disallow shorthand type conversions
    "no-implicit-coercion": "warn",
    // disallow the use of `eval()`-like methods
    "no-implied-eval": "warn",
    // disallow `this` keywords outside of classes or class-like objects
    "no-invalid-this": "error",
    // disallow labeled statements
    "no-labels": "error",
    // disallow unnecessary nested blocks
    "no-lone-blocks": "error",
    // disallow magic numbers
    "no-magic-numbers": "error",
    // disallow multiple spaces
    "no-multi-spaces": "error",
    // disallow `new` operators outside of assignments or comparisons
    "no-new": "error",
    // disallow octal literals
    "no-octal": "error",
    // disallow reassigning `function` parameters
    "no-param-reassign": "error",
    // disallow throwing literals as exceptions
    "no-throw-literal": "error",
    // disallow unused expressions
    "no-unused-expressions": "warn",
    // disallow redundant return statements
    "no-useless-return": "warn",
    // disallow `with` statements
    "no-with": "error",
    // require using Error objects as Promise rejection reasons
    "prefer-promise-reject-errors": "warn",
    // disallow async functions which have no `await` expression
    "require-await": "error",
    // require parentheses around immediate `function` invocations
    "wrap-iife": [
      "error",
      "inside"
    ]
  }
}
