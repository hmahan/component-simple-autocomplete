const $ = require('jquery');
const utils = require('./utils/viewUtils');

function Autocomplete($el, model) {

    this.init = () => {
        this.$el = this.attachAutocompletePlugin($el, model);
    }

    this.attachAutocompletePlugin = ($el, model) => {
      	const jqAutocomplete = require('devbridge-autocomplete'),
              options = utils.getAutocompleteOptions(model);

      	console.log(model);

      	return $el.autocomplete(options);
    };
};

module.exports = Autocomplete;