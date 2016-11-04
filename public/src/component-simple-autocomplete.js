'use strict'

import $ from 'jquery';
import Autocomplete from '../../dist/js/component-simple-autocomplete';

$(function() {

    const $el = $('[data-component="simple-autocomplete"]');
    const model = require('../../models/component-simple-autocomplete');

    model.appendTo = (model.appendTo) ? model.appendTo : $('.country-list-autocomplete');

    // console.log(model.appendTo);

    let autocomplete = new Autocomplete($el, model);
});