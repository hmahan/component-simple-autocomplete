const utils = {
  pluginUtils: require('./pluginUtils')
};

function getAutocompleteOptions(self) {
  const options = {};

  options.minChars = 2;
  options.appendTo = self.$container;
  options.serviceUrl = ((self) => {
    return getServiceUrl(self);
  })(self);
  options.deferRequestBy = 100;
  options.maxHeight = 600;
  options.dataType = 'jsonp';
  options.transformResult = function(response, term) {
    return utils.pluginUtils.handleAjaxResults.call(self, response, term);
  };
  options.beforeRender = function(container) {
    return utils.pluginUtils.handleBeforeRender.call(self, container);
  };

  options.onSelect = self.handleItemSelect;
  options.triggerSelectOnValidInput = false;

  return options;
};

function getServiceUrl(self) {

  const includeShadyGigs = (self.includeShadyGigs) ? true : false,
        urlPrefix = self.url,
        shadyGigsParam = (includeShadyGigs) ? '&shady_gigs=true' : '',
        serviceUrl = `${urlPrefix}?locale=${self.locale}${shadyGigsParam}`;

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