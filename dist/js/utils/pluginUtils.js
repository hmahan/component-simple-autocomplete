'use strict';

var $ = require('jquery');
var searchType = void 0;

function setSearchType(type) {
  searchType = type;
};

function getSearchType() {
  return searchType;
};

function handleAjaxResults(response, term) {

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
  getSearchType: getSearchType
};