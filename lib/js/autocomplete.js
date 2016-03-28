const $ = require('jquery');
const autocomplete = require('jquery-ui/autocomplete');

function Autocomplete(elems) {
 
  const self = this;
  
  function getInputVal() {
    return self.$input.val();
  };

  function getRelevantListItems() {
    return [
      {
        "label" : "item one",
        "value" : "http://google.com"
      },
      {
        "label" : "item two",
        "value" : "http://fiverr.com"
      }
    ]
  };

  function handleAutocompleteItemSelect(e) {
    if (e) e.preventDefault();

    self.$form.submit();
  };

  function showDropdown(e) {
    if (e) e.preventDefault();

    const inputVal = getInputVal();

    if (inputVal.length > 1) {
      self.$dropdown.show();
    }
  };

  function attachAutocompletePlugin() {
    self.$input
      .autocomplete({
        source: getRelevantListItems(),
        minLength: 2,
        appendTo: self.$form,
        messages: { 
          noResults : '',
          results: function() {}
        }
      });

    self.$dropdown = self.$form.find('.ui-autocomplete');
  }

  function bindEventListeners() {
    self.$input
      .on('focus', showDropdown);
      
    self.$dropdown
      .on('click', handleAutocompleteItemSelect);
  };

  return {
    
    init: () => {
      
      this.$form = elems.form;
      this.$input = elems.input;

      attachAutocompletePlugin();
      bindEventListeners();
    }

  };

};

module.exports = Autocomplete;
