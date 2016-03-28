'use strict'

import $ from 'jquery';
const Autocomplete = require('../../lib/js/autocomplete');

$(function() {
  const $formElement = $('.autocomplete-form'),
        $formInput = $('[data-component="autocomplete"]'),
        autocomplete = new Autocomplete({
          "form" : $formElement,
          "input" : $formInput
        });

  autocomplete.init();
});