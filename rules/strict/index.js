/**
 * @fileoverview This file defines a set of ESLint rules related to
 * strict mode directives.
 * @author Junho Jin <jun@lucentblock.com>
 */


"use strict"


module.exports = {
  rules: {
    // require or disallow strict mode directives
    "strict": [
      "error",
      "global"
    ]
  }
}
