'use strict';

var $ = require('jquery');
var autocomplete = require('jquery-ui/autocomplete');

function Autocomplete(elems) {
  var _this = this;

  var self = this;

  function getInputVal() {
    return self.$input.val();
  };

  function getRelevantListItems() {
    return [{
      "label": "item one",
      "value": "http://google.com"
    }, {
      "label": "item two",
      "value": "http://fiverr.com"
    }];
  };

  function handleAutocompleteItemSelect(e) {
    if (e) e.preventDefault();

    self.$form.submit();
  };

  function showDropdown(e) {
    if (e) e.preventDefault();

    var inputVal = getInputVal();

    if (inputVal.length > 1) {
      self.$dropdown.show();
    }
  };

  function attachAutocompletePlugin() {
    self.$input.autocomplete({
      source: getRelevantListItems(),
      minLength: 2,
      appendTo: self.$form,
      messages: {
        noResults: '',
        results: function results() {}
      }
    });

    self.$dropdown = self.$form.find('.ui-autocomplete');
  }

  function bindEventListeners() {
    self.$input.on('focus', showDropdown);

    self.$dropdown.on('click', handleAutocompleteItemSelect);
  };

  return {

    init: function init() {

      _this.$form = elems.form;
      _this.$input = elems.input;

      attachAutocompletePlugin();
      bindEventListeners();
    }

  };
};

module.exports = Autocomplete;