'use strict';

var $ = require('jquery');
var searchType = void 0;

function setSearchType(type) {
  searchType = type;
};

function getSearchType() {
  return searchType;
};

function getFormAction(self, suggestion) {
  var gigSearchUrl = '' + self.gigSearchUrl + self.searchActionParams,
      userSearchUrl = self.userSearchUrl,
      suggestionType = suggestion.data,
      isUserQuery = suggestion.isUserQuery || false,
      urlPrefix = self.urlPrefix || "";

  var userSearchAction = void 0,
      formAction = void 0;

  userSearchAction = !isUserQuery ? urlPrefix + '/' + suggestion.value : userSearchUrl;
  formAction = suggestionType === 'user_suggest' ? userSearchAction : gigSearchUrl;

  console.info('formaction', formAction);

  return formAction;
};

function handleAjaxResults(response, term) {

  console.info(response, searchType);

  var results = [];

  if (searchType !== 'omnibox') {
    return response;
  }

  for (var key in response) {

    response[key].map(function (obj) {
      return obj.queryTerm = term;
    });

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
};