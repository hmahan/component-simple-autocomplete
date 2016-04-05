const $ = require('jquery');
let searchType;

function setSearchType(type) {
  searchType = type;
};

function getSearchType() {
  return searchType;
};

function handleAjaxResults(response, term) {

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
  getSearchType: getSearchType
}