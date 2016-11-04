"use strict";

function getAutocompleteOptions(m) {
  var options = {};

  options.minChars = 2;
  options.triggerSelectOnValidInput = false;
  options.lookup = m.predeterminedResultSet;
  options.appendTo = m.appendTo;

  return options;
};

module.exports = {
  getAutocompleteOptions: getAutocompleteOptions
};