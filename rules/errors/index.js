/**
 * @fileoverview This file defines a set of ESLint rules related to
 * possible syntax or logic errors in JavaScript code.
 * @author Junho Jin <jun@lucentblock.com>
 */


"use strict"


module.exports = {
  rules: {
    // enforce "for" loop update clause moving the counter in the right direction
    "for-direction": "error",
    // enforce `return` statements in getters
    "getter-return": [
      "error",
      {
        // Disallow returning implicit `undefined`
        // example)
        // get id() {
        //   return // it returns undefined implicitly
        // }
        allowImplicit: false
      }
    ],
    // disallow using an async function as a Promise executor
    "no-async-promise-executor": "error",
    // disallow comparing against -0
    "no-compare-neg-zero": "error",
    // disallow assignment operators in conditional expressions
    "no-cond-assign": "error",
    // disallow the use of `console`
    "no-console": "off",
    // disallow constant expressions in conditions
    "no-constant-condition": "error",
    // disallow control characters in regular expressions
    // For more about control chracters in regex, visit the following link:
    // https://www.ibm.com/support/knowledgecenter/SSFMBX/com.ibm.swg.im.dashdb.sql.ref.doc/doc/r0061533.html
    "no-control-regex": "error",
    // disallow the use of `debugger`
    "no-debugger": "error",
    // disallow duplicate arguments in `function` definitions
    "no-dupe-args": "error",
    // disallow duplicate conditions in if-else-if chains
    "no-dupe-else-if": "error",
    // disallow duplicate keys in object literals
    "no-dupe-keys": "error",
    // disallow duplicate case labels
    "no-duplicate-case": "error",
    // disallow empty block statements
    "no-empty": "error",
    // disallow empty character classes in regular expressions
    "no-empty-character-class": "error",
    // disallow reassigning exceptions in `catch` clauses
    "no-ex-assign": "error",
    // disallow unnecessary boolean casts
    "no-extra-boolean-cast": "error",
    // disallow unnecessary parentheses
    "no-extra-parens": [
      "error",
      "all",
      {
        nestedBinaryExpressions: false, // allow use of parenthesis in binary expressions
        enforceForArrowConditionals: false, // allow use of parenthesis in fat arrow functions
        enforceForNewInMemberExpressions: false // allow use of parenthesis in new operator
      }
    ],
    // disallow unnecessary semicolons
    "no-extra-semi": "error",
    // disallow reassigning `function` declarations
    "no-func-assign": "error",
    // disallow assigning to imported bindings
    "no-import-assign": "error",
    // disallow variable or `function` declarations in nested blocks
    "no-inner-declarations": "error",
    // disallow invalid regular expression strings in `RegExp` constructors
    "no-invalid-regexp": [
      "error",
      {
        allowConstructorFlags: [
          "u",
          "y"
        ]
      }
    ],
    // disallow irregular whitespace
    "no-irregular-whitespace": [
      "error",
      {
        skipStrings: true,
        skipTemplates: true
      }
    ],
    // disallow characters which are made with multiple code points in character class syntax
    "no-misleading-character-class": "error",
    // disallow calling global object properties as functions
    "no-obj-calls": "error",
    // disallow calling some `Object.prototype` methods directly on objects
    "no-prototype-builtins": "error",
    // disallow multiple spaces in regular expressions
    "no-regex-spaces": "warn",
    // disallow returning values from setters
    "no-setter-return": "error",
    // disallow sparse arrays
    "no-sparse-arrays": "error",
    // disallow template literal placeholder syntax in regular strings
    "no-template-curly-in-string": "warn",
    // disallow confusing multiline expressions
    "no-unexpected-multiline": "error",
    // disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
    "no-unreachable": "error",
    // disallow control flow statements in `finally` blocks
    "no-unsafe-finally": "error",
    // disallow negating the left operand of relational operators
    "no-unsafe-negation": [
      "error",
      {
        enforceForOrderingRelations: true
      }
    ],
    // disallow assignments that can lead to race conditions due to usage of `await` or `yield`
    "require-atomic-updates": "error",
    // require calls to `isNaN()` when checking for `NaN`
    "use-isnan": [
      "error",
      {
        enforceForSwitchCase: true,
        enforceForIndexOf: true
      }
    ],

    /**
     * Best Practices
     */

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
