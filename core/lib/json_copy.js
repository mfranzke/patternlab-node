"use strict";

const plutils = require('./utilities');
const json_copy = (data, callee) => {
  try {
    return JSON.parse(JSON.stringify(data));
  } catch (e) {
    //this is unlikely to be hit due to the passed in data already being loaded using JSON parsers
    plutils.warning(`JSON provided by ${callee} is invalid and cannot be copied`);
    throw (e);
  }
};

module.exports = json_copy;
