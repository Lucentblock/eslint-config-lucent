/**
 * @fileoverview This file defines a set of ESLint rules related to
 * style guidelines.
 * @author Junho Jin <jun@lucentblock.com>
 */


"use strict"


module.exports = {
  rules: {
    // enforce linebreaks after opening and before closing array brackets
    "array-bracket-newline": [
      "error",
      "never"
    ],
    // enforce consistent spacing inside array brackets
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    // enforce line breaks after each array element
    "array-element-newline": [
      "error",
      "never"
    ],
    // disallow or enforce spaces inside of blocks after opening block and before closing block
    "block-spacing": "error",
    // enforce consistent brace style for blocks
    "brace-style": [
      "error",
      "1tbs"
    ],
    // enforce or disallow capitalization of the first letter of a comment
    "capitalized-comments": [
      "error",
      "always",
      {
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true
      }
    ],
    // require or disallow trailing commas
    "comma-dangle": [
      "error",
      "never"
    ],
    // enforce consistent spacing before and after commas
    "comma-spacing": "error",
    // enforce consistent spacing before and after commas
    "comma-style": "error",
    // enforce consistent spacing inside computed property brackets
    "computed-property-spacing": "warn",
    // require or disallow newline at the end of files
    "eol-last": [
      "error",
      "always"
    ],
    // require or disallow spacing between function identifiers and their invocations
    "func-call-spacing": "error",
    // enforce line breaks between arguments of a function call
    "function-call-argument-newline": [
      "warn",
      "consistent"
    ],
    // enforce the location of arrow function bodies
    "implicit-arrow-linebreak": "warn",
    // enforce consistent indentation
    "indent": [
      "error",
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: "first",
        FunctionDeclaration: {
          parameters: "first"
        },
        FunctionExpression: {
          parameters: "first"
        },
        CallExpression: {
          arguments: "first"
        },
        ArrayExpression: 1,
        ObjectExpression: "first",
        ImportDeclaration: "first"
      }
    ],
    // enforce consistent spacing between keys and values in object literal properties
    "key-spacing": [
      "error",
      {
        beforeColon: false,
        afterColon: true,
        mode: "strict"
      }
    ],
    // enforce consistent spacing before and after keywords
    "keyword-spacing": [
      "error",
      { before: true, after: true }
    ],
    // enforce position of line comments 
    "line-comment-position": [
      "error",
      { position: "above" }
    ],
    // enforce consistent linebreak style
    "linebreak-style": [
      "error",
      "unix"
    ],
    // require empty lines around comments
    "lines-around-comment": [
      "error",
      {
        beforeBlockComment: true,
        beforeLineComment: true,
        allowBlockStart: true,
        allowBlockEnd: false,
        allowClassStart: true,
        allowClassEnd: false,
        allowObjectStart: true,
        allowObjectEnd: false,
        allowArrayStart: true,
        allowArrayEnd: false
      }
    ],
    // require or disallow an empty line between class members
    "lines-between-class-members": [
      "error",
      "always"
    ],
    // enforce a maximum depth that blocks can be nested
    "max-depth": [
      "error",
      4
    ],
    // enforce a maximum line length
    "max-len": [
      "error",
      {
        code: 80,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignorePattern: true
      }
    ],
    // enforce a maximum depth that callbacks can be nested
    "max-nested-callbacks": [
      "warn",
      4
    ],
    // enforce a particular style for multiline comments
    "multiline-comment-style": [
      "error",
      "starred-block"
    ],
    // require constructor names to begin with a capital letter
    "new-cap": [
      "error",
      {
        newIsCap: true,
        capIsNew: true,
        properties: false
      }
    ],
    // enforce or disallow parentheses when invoking a constructor with no arguments
    "new-parens": [
      "error",
      "always"
    ],
    // require a newline after each call in a method chain
    "newline-per-chained-call": [
      "error",
      {
        ignoreChainWithDepth: 2
      }
    ],
    // disallow `Array` constructors
    "no-array-constructor": "error",
    // disallow `continue` statements
    "no-continue": "error",
    // disallow inline comments after code
    "no-inline-comments": "errorr",
    // disallow `if` statements as the only statement in `else` blocks
    "no-lonely-if": "error",
    // disallow mixed binary operators
    "no-mixed-operators": "error",
    // disallow mixed spaces and tabs for indentation
    "no-mixed-spaces-and-tabs": [
      "error",
      "smart-tabs"
    ],
    // disallow use of chained assignment expressions
    "no-multi-assign": "error",
    // disallow multiple empty lines
    "no-multiple-empty-lines": "off",
    // disallow nested ternary expressions
    "no-nested-ternary": "warn",
    // disallow nested ternary expressions
    "no-new-object": "error",
    // disallow all tabs
    "no-tabs": "error",
    // disallow trailing whitespace at the end of lines
    "no-trailing-spaces": "error",
    // disallow dangling underscores in identifiers
    "no-underscore-dangle": "error",
    // disallow ternary operators when simpler alternatives exist
    "no-unneeded-ternary": "error",
    // disallow whitespace before properties
    "no-whitespace-before-property": "error",
    // enforce consistent line breaks inside braces
    "object-curly-newline": [
      "error",
      {
        minProperties: 3,
        consistent: true
      }
    ],
    // enforce consistent spacing inside braces
    "object-curly-spacing": [
      "error",
      "always",
      {
        arraysInObjects: false,
        objectsInObjects: false
      }
    ],
    // enforce placing object properties on separate lines
    "object-property-newline": [
      "warn",
      {
        allowAllPropertiesOnSameLine: true
      }
    ],
    // enforce variables to be declared either together or separately in functions
    "one-var": [
      "error",
      "never"
    ],
    // require or disallow newlines around variable declarations
    "one-var-declaration-per-line": [
      "error",
      "always"
    ],
    // require or disallow assignment operator shorthand where possible
    "operator-assignment": [
      "error",
      "always"
    ],
    // enforce consistent linebreak style for operators
    "operator-linebreak": "off",
    // require or disallow padding within blocks
    "padded-blocks": [
      "error",
      "never"
    ],
    // require or disallow padding lines between statements
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "directive", next: "*" },
      { blankLine: "always", prev: "*", next: "return" }
    ],
    // disallow the use of `Math.pow` in favor of the `**` operator
    "prefer-exponentiation-operator": "error",
    // disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
    "prefer-object-spread": "error",
    // require quotes around object literal property names
    "quote-props": [
      "error",
      "as-needed"
    ],
    // enforce the consistent use of either backticks, double, or single quotes
    "quotes": [
      "error",
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    // require or disallow semicolons instead of ASI
    "semi": [
      "never",
      {
        beforeStatementContinuationChars: "always"
      }
    ],
    // enforce consistent spacing before and after semicolons
    "semi-spacing": [
      "error",
      { before: false, after: true }
    ],
    // require variables within the same declaration block to be sorted
    "sort-vars": "off",
    // enforce consistent spacing before blocks
    "space-before-blocks": [
      "error",
      "always"
    ],
    // enforce consistent spacing before `function` definition opening parenthesis
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always"
      }
    ],
    // enforce consistent spacing inside parentheses
    "space-in-parens": [
      "error",
      "never"
    ],
    // require spacing around infix operators
    "space-infix-ops": "error",
    // enforce consistent spacing before or after unary operators
    "space-unary-ops": [
      "error",
      { words: true, nonwords: false }
    ],
    // enforce consistent spacing after the `//` or `/*` in a comment
    "spaced-comment": [
      "error",
      "always",
      {
        line: {
          exceptions: ["-", "+", "*"],
          markers: ["=", "!"]
        },
        block: {
          exceptions: ["-", "+", "*"],
          markers: ["=", "!"],
          balanced: true
        }
      }
    ],
    // enforce spacing around colons of switch statements
    "switch-colon-spacing": [
      "error",
      { after: true, before: false }
    ],
    // require or disallow spacing between template tags and their literals
    "template-tag-spacing": "error"
  }
}
