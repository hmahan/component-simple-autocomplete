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
          "locale" : formData['componentLocale'],
          "includeShadyGigs" : formData['componentIncludeShadyGigs']
        };

  let autocomplete;
  
  autocomplete = new Autocomplete(options);
  autocomplete.init();
});