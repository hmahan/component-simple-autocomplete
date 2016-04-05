'use strict';

var utils = {
  pluginUtils: require('./pluginUtils')
};

function getAutocompleteOptions(self) {
  var options = {};

  options.minChars = 2;
  options.appendTo = self.$form;
  options.serviceUrl = function (self) {
    return getServiceUrl(self);
  }(self);
  options.deferRequestBy = 100;
  options.dataType = 'jsonp';
  options.transformResult = utils.pluginUtils.handleAjaxResults;
  options.beforeRender = utils.pluginUtils.handleBeforeRender;
  options.onSelect = self.handleAutocompleteItemSelect;

  return options;
};

function getServiceUrl(self) {

  var isOmnibox = self.type === 'omnibox' ? true : false,
      includeShadyGigs = self.includeShadyGigs ? true : false,
      protocol = "https://fiverr.com",
      omniboxUrlPrefix = '/search/omnibox',
      searchUrlPrefix = '/search/autocomplete',
      autoCompleteUrlPrefix = isOmnibox ? omniboxUrlPrefix : searchUrlPrefix,
      shadyGigsParam = includeShadyGigs ? '&shady_gigs=true' : '',
      serviceUrl = '' + protocol + autoCompleteUrlPrefix + '?locale=' + self.locale + shadyGigsParam;

  return serviceUrl;
};

function getInputVal($input) {
  return $input.val();
};

module.exports = {
  getAutocompleteOptions: getAutocompleteOptions,
  getServiceUrl: getServiceUrl,
  getInputVal: getInputVal
};