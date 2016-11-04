'use strict';

var $ = require('jquery');
var utils = require('./utils/viewUtils');

function Autocomplete($el, model) {
    var _this = this;

    this.init = function () {
        _this.$el = _this.attachAutocompletePlugin($el, model);
    };

    this.attachAutocompletePlugin = function ($el, model) {
        var jqAutocomplete = require('devbridge-autocomplete'),
            options = utils.getAutocompleteOptions(model);

        console.log(model);

        return $el.autocomplete(options);
    };
};

module.exports = Autocomplete;