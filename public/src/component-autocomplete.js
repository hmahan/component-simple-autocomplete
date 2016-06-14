'use strict'

import $ from 'jquery';
const Autocomplete = require('../../dist/js/component-autocomplete');

$(function() {

  const $formElement = $('.autocomplete-form'),
        $formInput = $('[data-component="autocomplete"]'),
        formData = $formInput.data(),
        options = {
          "form" : $formElement,
          "input" : $formInput,
          "type" : formData['componentType'],
          "userSubhead" : formData['componentUserSubhead'],
          "autocompleteUrl" : formData['componentAutocompleteUrl'],
          "locale" : formData['componentLocale'],
          "includeShadyGigs" : formData['componentIncludeShadyGigs'],
          "urlPrefix" : formData['componentUrlPrefix'],
          "gigSearchUrl" : formData['componentGigSearchUrl'],
          "userSearchUrl" : formData['componentUserSearchUrl'],
          "searchActionParams" : formData['componentSearchActionParams'],
          "alternativeSearchPrefix" : formData['componentAlternativeSearchPrefix']
        };

  let autocomplete;

  autocomplete = new Autocomplete(options);
  autocomplete.init();
});