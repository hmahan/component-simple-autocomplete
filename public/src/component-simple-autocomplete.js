'use strict'

import $ from 'jquery';
import Autocomplete from '../../dist/js/component-simple-autocomplete';

$(function() {

    const $el = $('[data-component="simple-autocomplete"]');
    const model = require('../../models/component-simple-autocomplete');

    // if an appendTo is in the model, paste the suggestions there. Otherwise put it on the parent of the input.
    model.appendTo = (model.appendTo) ? model.appendTo : $('.' + model.inputName + '-autocomplete');

    let autocomplete = new Autocomplete($el, model);
});