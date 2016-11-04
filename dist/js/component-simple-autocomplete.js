'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _viewUtils = require('./utils/viewUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Autocomplete = function () {
    function Autocomplete($el, model) {
        _classCallCheck(this, Autocomplete);

        this.$el = this.attachAutocompletePlugin($el, model);
    }

    _createClass(Autocomplete, [{
        key: 'attachAutocompletePlugin',
        value: function attachAutocompletePlugin($el, model) {
            var jqAutocomplete = require('devbridge-autocomplete'),
                options = (0, _viewUtils.getAutocompleteOptions)(model);

            return $el.autocomplete(options);
        }
    }]);

    return Autocomplete;
}();

;

exports.default = Autocomplete;