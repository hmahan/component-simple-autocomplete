'use strict';

var utils = {
  pluginUtils: require('./pluginUtils')
};

function getAutocompleteOptions(self) {
  var options = {};

  options.minChars = 2;
  options.appendTo = self.$container;
  options.serviceUrl = function (self) {
    return getServiceUrl(self);
  }(self);
  options.deferRequestBy = 100;
  options.maxHeight = 600;
  options.dataType = 'jsonp';
  options.transformResult = utils.pluginUtils.handleAjaxResults;
  options.beforeRender = utils.pluginUtils.handleBeforeRender;
  options.onSelect = self.handleItemSelect;
  options.triggerSelectOnValidInput = false;

  return options;
};

function getServiceUrl(self) {

  var includeShadyGigs = self.includeShadyGigs ? true : false,
      urlPrefix = self.url,
      shadyGigsParam = includeShadyGigs ? '&shady_gigs=true' : '',
      serviceUrl = urlPrefix + '?locale=' + self.locale + shadyGigsParam;

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