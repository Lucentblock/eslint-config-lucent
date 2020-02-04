/**
 * @fileoverview This file defines a set of ESLint rules related to
 * code running in Node.js, or in browsers with CommonJS.
 * @author Junho Jin <jun@lucentblock.com>
 */


"use strict"


module.exports = {
  rules: {
    // require `require()` calls to be placed at top-level module scope
    "global-require": "error",
    // require error handling in callbacks
    "handle-callback-err": "warn",
    // disallow `require` calls to be mixed with regular variable declarations
    "no-mixed-requires": "error",
    // disallow the use of `process.env`
    "no-process-env": "error"
  }
}
