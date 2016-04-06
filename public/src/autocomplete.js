'use strict'

import $ from 'jquery';
const Autocomplete = require('../../dist/js/autocomplete');

$(function() {

  const $formElement = $('.autocomplete-form'),
        $formInput = $('[data-component="autocomplete"]'),
        formData = $formInput.data(),
        options = {
          "form" : $formElement,
          "input" : $formInput,
          "type" : formData['componentType'],
          "autocompleteUrl" : formData['componentAutocompleteUrl'],
          "locale" : formData['componentLocale'],
          "includeShadyGigs" : formData['componentIncludeShadyGigs'],
          "urlPrefix" : formData['componentUrlPrefix'],
          "gigSearchUrl" : formData['componentGigSearchUrl'],
          "userSearchUrl" : formData['componentUserSearchUrl'],
          "searchActionParams" : formData['componentSearchActionParams']
        };

  let autocomplete;
  
  autocomplete = new Autocomplete(options);
  autocomplete.init();
});