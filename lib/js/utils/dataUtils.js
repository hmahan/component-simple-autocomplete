const utils = {
  pluginUtils: require('./pluginUtils')
};

function getAutocompleteOptions(self) {
  const options = {};

  options.minChars = 2;
  options.appendTo = self.$form;
  options.serviceUrl = ((self) => {
    return getServiceUrl(self);
  })(self);
  options.deferRequestBy = 100;    
  options.dataType = 'jsonp';
  options.transformResult = utils.pluginUtils.handleAjaxResults;
  options.beforeRender = utils.pluginUtils.handleBeforeRender;
  options.onSelect = self.handleAutocompleteItemSelect;

  return options;
};

function getServiceUrl(self) {

  const isOmnibox = (self.type === 'omnibox') ? true : false,
        includeShadyGigs = (self.includeShadyGigs) ? true : false,
        protocol = "https://fiverr.com",
        omniboxUrlPrefix = '/search/omnibox',
        searchUrlPrefix = '/search/autocomplete',
        autoCompleteUrlPrefix = (isOmnibox) ? omniboxUrlPrefix : searchUrlPrefix,
        shadyGigsParam = (includeShadyGigs) ? '&shady_gigs=true' : '',
        serviceUrl = `${protocol}${autoCompleteUrlPrefix}?locale=${self.locale}${shadyGigsParam}`;

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