'use strict';

var $ = require('jquery');
var utils = require('./utils');

function Autocomplete(options) {
  var _this = this;

  this.init = function () {
    _this.$form = options.form;
    _this.type = options.type;
    _this.locale = options.locale;
    _this.includeShadyGigs = options.includeShadyGigs;
    _this.url = options.autocompleteUrl;
    _this.urlPrefix = options.urlPrefix || "";
    _this.gigSearchUrl = '' + _this.urlPrefix + options.gigSearchUrl;
    _this.userSearchUrl = '' + _this.urlPrefix + options.userSearchUrl;
    _this.searchActionParams = options.searchActionParams;

    utils.pluginUtils.setSearchType(_this.type);

    _this.$container = _this.setContainer(_this.$form);
    _this.$input = _this.attachAutocompletePlugin(options.input);
    _this.$dropdown = _this.setDropdownContainer(options.form);

    _this.bindEventListeners();
  };

  this.attachAutocompletePlugin = function ($input) {
    var jqAutocomplete = require('devbridge-autocomplete'),
        options = utils.dataUtils.getAutocompleteOptions(_this);

    return $input.autocomplete(options);
  };

  this.setDropdownContainer = function ($form) {
    return $form.find('.autocomplete-suggestions');
  };

  this.setContainer = function ($form) {
    return $form.find('.autocomplete-container');
  };

  this.bindEventListeners = function () {
    _this.$input.on('focus', _this.handleInputFocus).on('blur', _this.handleInputBlur);
  };

  this.handleInputFocus = function (e) {
    if (e) e.preventDefault();

    var inputVal = utils.dataUtils.getInputVal(_this.$input);

    if (inputVal.length > 1) {
      _this.$dropdown.show();
    }
  };

  this.handleInputBlur = function (e) {
    if (e) e.preventDefault();

    var self = _this;

    setTimeout(function () {
      self.$dropdown.hide();
    }, 100);
  };

  this.handleItemSelect = function (suggestion) {
    var action = utils.pluginUtils.getFormAction(_this, suggestion);

    _this.$form.attr('action', action).submit();
  };
};

module.exports = Autocomplete;