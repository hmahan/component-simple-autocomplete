import $ from 'jquery';
import {getAutocompleteOptions} from './utils/viewUtils';

class Autocomplete {

    constructor($el, model) {
        this.$el = this.attachAutocompletePlugin($el, model);

        console.log('in constructor');
    };

    attachAutocompletePlugin($el, model) {
      	const jqAutocomplete = require('devbridge-autocomplete'),
              options = getAutocompleteOptions(model);

      	return $el.autocomplete(options);
    };
};

export default Autocomplete;