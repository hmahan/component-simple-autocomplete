const $ = require('jquery');
let searchType,
    searchResults;

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

  return formAction;
};

function handleAjaxResults(response, term) {

  searchResults = [];

  if (searchType !== 'omnibox') {
    return response;
  }

  for (let key in response) {

    response[key].map(obj => obj.queryTerm = term);

    searchResults = searchResults.concat(response[key]);
  }

  return { suggestions: searchResults };
};

function handleBeforeRender($container) {

  if (getSearchType() !== 'omnibox') {
    return;
  }

  const $suggestions = $container.find('.autocomplete-suggestion');

  let suggestionType,
      suggestionData,
      suggestionDataIndex,
      $suggestion;

  $suggestions.each(function() {
    $suggestion = $(this);
    suggestionDataIndex = $suggestion.data('index');
    suggestionData = searchResults[suggestionDataIndex];
    suggestionType = suggestionData.data;

    $suggestion.addClass(suggestionType);
  });

  return $container;
};

module.exports = {
  handleAjaxResults: handleAjaxResults,
  handleBeforeRender: handleBeforeRender,
  setSearchType: setSearchType,
  getSearchType: getSearchType,
  getFormAction: getFormAction
}