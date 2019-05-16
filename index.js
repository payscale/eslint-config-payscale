"use strict";

module.exports = {
  extends: [
    "payscale/rules/defaults/best-practices",
    "payscale/rules/defaults/errors",
    "payscale/rules/defaults/es6",
    "payscale/rules/defaults/node",
    "payscale/rules/defaults/strict",
    "payscale/rules/defaults/style",
    "payscale/rules/defaults/variables",
    "payscale/rules/best-practices",
    "payscale/rules/errors",
    "payscale/rules/es6",
    "payscale/rules/react",
    "payscale/rules/style",
    "payscale/rules/variables"
  ],
  parser: "babel-eslint",
  env: {
    amd: true,
    browser: true,
    jquery: true,
    node: true,
    es6: true,
    worker: true
  },
  plugins: ["react"],
  settings: {
    react: {
      "version": "detect"
    }
  }
};
