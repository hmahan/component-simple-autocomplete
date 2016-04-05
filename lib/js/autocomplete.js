const $ = require('jquery');
const utils = require('./utils');

function Autocomplete(options) {
  
  this.init = () => {
    this.$form = options.form;
    this.type = options.type;
    this.locale = options.locale;
    this.includeShadyGigs = options.includeShadyGigs;

    utils.pluginUtils.setSearchType(this.type);

    this.$input = this.attachAutocompletePlugin(options.input);
    this.$dropdown = this.setDropdownContainer(options.form);
    this.bindEventListeners();
  };

  this.attachAutocompletePlugin = ($input) => {
    const jqAutocomplete = require('devbridge-autocomplete'),
          options = utils.dataUtils.getAutocompleteOptions(this);

    return $input.autocomplete(options);
  };

  this.setDropdownContainer = ($form) => {
    return $form.find('.autocomplete-suggestions');
  };

  this.bindEventListeners = () => {
    this.$input
      .on('focus', this.handleInputFocus)
      .on('blur', this.handleInputBlur);
  };

  this.handleInputFocus = (e) => {
    if (e) e.preventDefault();

    const inputVal = utils.dataUtils.getInputVal(this.$input);

    if (inputVal.length > 1) {
      this.$dropdown.show();
    }
  };

  this.handleInputBlur = (e) => {
    if (e) e.preventDefault();

    this.$dropdown.hide();
  };
};

module.exports = Autocomplete;