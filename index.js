"use strict";

module.exports = {
  extends: [
    "defaults",
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
  plugins: ["react"]
};
