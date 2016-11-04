'use strict'

import $ from 'jquery';
import Autocomplete from '../../dist/js/component-autocomplete';

$(function() {

    const $el = $('[data-component="autocomplete"]');
    const model = require('../../models/component-autocomplete');

    // if an appendTo is in the model, paste the suggestions there. Otherwise put it on the parent of the input.
    model.appendTo = (model.appendTo) ? model.appendTo : $('.' + model.inputName + '-autocomplete');

    let autocomplete = new Autocomplete($el, model);
});