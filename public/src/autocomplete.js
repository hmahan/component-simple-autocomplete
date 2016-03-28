'use strict'

import $ from 'jquery';
const Autocomplete = require('../../lib/js/autocomplete');

$(function() {
    const autocomplete = new Autocomplete();

    autocomplete.init();
});