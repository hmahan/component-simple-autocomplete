'use strict';

var $ = require('jquery');
var searchType = void 0,
    searchResults = void 0,
    alternativeSearchPrefix = void 0;

function setSearchType(type) {
  searchType = type;
  return searchType;
};

function getSearchType() {
  return searchType;
};

function setAlternativeSearchPrefix(phrase) {
  alternativeSearchPrefix = phrase;
  return alternativeSearchPrefix;
};

function getAlternativeSearchPrefix() {
  return alternativeSearchPrefix;
};

function getFormAction(self, suggestion) {
  var gigSearchUrl = '' + self.gigSearchUrl,
      userSearchUrl = self.userSearchUrl,
      suggestionType = suggestion.data,
      isUserQuery = suggestion.isUserQuery || false,
      urlPrefix = self.urlPrefix || "";

  var userSearchAction = void 0,
      formAction = void 0;

  userSearchAction = !isUserQuery ? urlPrefix + '/' + suggestion.value : userSearchUrl;
  formAction = suggestionType === 'user_suggest' || suggestionType === 'user_search' ? userSearchAction : gigSearchUrl;

  return formAction;
};

function handleAjaxResults(response, term) {

  searchResults = [];

  if (searchType !== 'omnibox') {
    return response;
  }

  for (var key in response) {

    response[key].map(function (obj) {
      return obj.queryTerm = term;
    });

    if (key === 'users_suggestions') {
      searchResults.push({
        'data': 'user_search',
        'isUserQuery': true,
        'queryTerm': term,
        'value': getAlternativeSearchPrefix() + ' ' + term
      });
    }

    searchResults = searchResults.concat(response[key]);
  }

  return { suggestions: searchResults };
};

function handleBeforeRender($container) {

  if (getSearchType() !== 'omnibox') {
    return $container;
  }

  addSuggestionClasses($container);
  addAlternativeSearchHeader($container, this);

  return $container;
};

function addSuggestionClasses($container) {

  var $suggestions = $container.find('.autocomplete-suggestion');

  var suggestionType = void 0,
      suggestionData = void 0,
      suggestionDataIndex = void 0,
      suggestionClass = void 0,
      $suggestion = void 0;

  $suggestions.each(function () {
    $suggestion = $(this);
    suggestionDataIndex = $suggestion.data('index');
    suggestionData = searchResults[suggestionDataIndex] || {};
    suggestionType = suggestionData.data || 'suggest';
    suggestionClass = suggestionType === 'user_suggest' ? 'fa-user' : '';
    suggestionClass = suggestionType === 'user_search' ? 'fa-search' : suggestionClass;

    if (suggestionClass) {
      $suggestion.prepend($('<i />', { 'class': 'fa ' + suggestionClass }));
    }

    $suggestion.addClass(suggestionType);
  });
};

function addAlternativeSearchHeader($container, self) {
  var query = searchResults[0].queryTerm,
      prefix = getAlternativeSearchPrefix(),
      $userSubhead = $('<div />', {
    'class': 'autocomplete-title',
    'text': self.userSubhead
  });

  $container.find('.user_search').before($userSubhead);
};

module.exports = {
  handleAjaxResults: handleAjaxResults,
  handleBeforeRender: handleBeforeRender,
  setSearchType: setSearchType,
  getSearchType: getSearchType,
  getFormAction: getFormAction,
  setAlternativeSearchPrefix: setAlternativeSearchPrefix
};