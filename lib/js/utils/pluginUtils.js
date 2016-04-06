const $ = require('jquery');
let searchType;

function setSearchType(type) {
  searchType = type;
};

function getSearchType() {
  return searchType;
};

function getFormAction(self, suggestion) {
  const gigSearchUrl = `${self.gigSearchUrl}${self.searchActionParams}`,
        userSearchUrl = self.userSearchUrl,
        suggestionType = suggestion.data,
        isUserQuery = suggestion.isUserQuery || false,
        urlPrefix = self.urlPrefix || "";

  let userSearchAction,
      formAction;

  userSearchAction = (!isUserQuery) ? (`${urlPrefix}/${suggestion.value}`) : userSearchUrl;
  formAction = (suggestionType === 'user_suggest') ? userSearchAction : gigSearchUrl;

  console.info('formaction', formAction);

  return formAction;
};

function handleAjaxResults(response, term) {

  console.info(response, searchType);

  let results = [];

  if (searchType !== 'omnibox') {
    return response;
  }
  
  for (let key in response) {

    response[key].map(obj => obj.queryTerm = term);

    results = results.concat(response[key]);
  }

  return { suggestions: results };
};

function handleBeforeRender($container) {

  return $container;
};

module.exports = {
  handleAjaxResults: handleAjaxResults,
  handleBeforeRender: handleBeforeRender,
  setSearchType: setSearchType,
  getSearchType: getSearchType,
  getFormAction: getFormAction
}