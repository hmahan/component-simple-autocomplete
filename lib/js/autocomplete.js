const $ = require('jquery');
const utils = require('./utils');

function Autocomplete(options) {

  this.init = () => {
    this.$form = options.form;
    this.type = options.type;
    this.locale = options.locale;
    this.userSubhead = options.userSubhead;
    this.includeShadyGigs = options.includeShadyGigs;
    this.url = options.autocompleteUrl;
    this.urlPrefix = options.urlPrefix || "";
    this.gigSearchUrl = `${this.urlPrefix}${options.gigSearchUrl}`;
    this.userSearchUrl = `${this.urlPrefix}${options.userSearchUrl}`;
    this.searchActionParams = options.searchActionParams;

    utils.pluginUtils.setSearchType(this.type);
    utils.pluginUtils.setAlternativeSearchPrefix(options.alternativeSearchPrefix);

    this.$container = this.setContainer(this.$form);
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

  this.setContainer = ($form) => {
    return $form.find('.autocomplete-container');
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

    setTimeout(() => {
      this.$dropdown.hide();
    }, 100)
  };

  this.handleItemSelect = (suggestion) => {

    const action = utils.pluginUtils.getFormAction(this, suggestion);

    if (suggestion.isUserQuery) {
      this.$input.val(suggestion.queryTerm);
    }

    this
      .$form
      .attr('action', action)
      .submit();
  };

};

module.exports = Autocomplete;