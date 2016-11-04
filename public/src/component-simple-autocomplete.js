'use strict'

import $ from 'jquery';
const Autocomplete = require('../../dist/js/component-simple-autocomplete');

$(function() {

    const $el = $('[data-component="simple-autocomplete"]');
    const model = require('../../models/component-simple-autocomplete');

    model.appendTo = (model.appendTo) ? model.appendTo : $('.country-list-autocomplete');

    console.log(model.appendTo);

    let autocomplete;

    autocomplete = new Autocomplete($el, model);
    autocomplete.init();
});