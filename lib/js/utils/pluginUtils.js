const $ = require('jquery');
let searchType,
    searchResults,
    alternativeSearchPrefix;

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
  const gigSearchUrl = `${self.gigSearchUrl}`,
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
    return $container;
  }

  addSuggestionClasses($container);
  addAlternativeSearch($container, this);

  return $container;
};

function addSuggestionClasses($container) {

  const $suggestions = $container.find('.autocomplete-suggestion');

  let suggestionType,
      suggestionData,
      suggestionDataIndex,
      $suggestion;

  $suggestions.each(function() {
    $suggestion = $(this);
    suggestionDataIndex = $suggestion.data('index');
    suggestionData = searchResults[suggestionDataIndex] || {};
    suggestionType = suggestionData.data || 'suggest';

    if (suggestionType === 'user_suggest') {
      $suggestion.prepend($('<i />', { 'class' : 'fa fa-user' }));
    }

    $suggestion.addClass(suggestionType);
  });
};

function addAlternativeSearch($container, self) {
  const query = searchResults[0].queryTerm,
        prefix = getAlternativeSearchPrefix(),
        $userSubhead = $('<div />', {
          'class' : 'autocomplete-title',
          'text' : self.userSubhead
        }),
        $userSection = $('<div />', {
          'class' : 'autocomplete-suggestion autocomplete-alternative-search'
        }),
        $icon = $('<i />', {
          'class' : 'fa fa-search'
        }),
        isOmnibox = (getSearchType() === 'omnibox'),
        omniboxString = `${prefix} <strong>${query}</strong>`,
        normalSearchString = `${prefix} '${query}'`,
        userSectionString = (isOmnibox) ? omniboxString : normalSearchString;


  console.info('userSubhead', $userSubhead, self.userSubhead);

  $userSection
    .html(userSectionString)
    .prepend($icon)
    .on('click', (e) => {
      e.preventDefault();

      self
        .$form
        .attr('action', self.userSearchUrl)
        .submit();
    });

  $container
    .find('.user_suggest')
    .eq(0)
    .before($userSubhead)
    .before($userSection);
};

module.exports = {
  handleAjaxResults: handleAjaxResults,
  handleBeforeRender: handleBeforeRender,
  setSearchType: setSearchType,
  getSearchType: getSearchType,
  getFormAction: getFormAction,
  setAlternativeSearchPrefix: setAlternativeSearchPrefix
}