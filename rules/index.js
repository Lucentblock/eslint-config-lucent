/**
 * @fileoverview This file merges each rule set defined in sub-directories
 * and creates a single point to import from the outside.
 * @author Junho Jin <jun@lucentblock.com>
 */


"use strict"

const requireIndex = require("requireindex")

module.exports = requireIndex(__dirname)
