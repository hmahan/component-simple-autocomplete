module.exports = {
    "inputPlaceholder" : "Choose a country",
    "inputName" : "country-list",
    "maxLength" : 40,
    "initialValue" : "",
    "minChars": 1,
    "lookupLimit": 8,
    "noCache": true,
    "triggerSelectOnValidInput": false,
    "autoSelectFirst": true,
    "hiddenFields" : [
        {
            "name" : "user[invoice_attributes][country]",
            "id": "user_invoice_attributes_country",
            "value" : "United States"
        },
        {
            "name" : "user[invoice_attributes][country_code]",
            "id" : "user_invoice_attributes_country_code",
            "value" : "US"
        }
    ],
    "lookup" : [
        {
          value: "United States",
          key: "US"
        },
        {
          value: "Israel",
          key: "IL"
        },
        {
          value: "Brazil",
          key: "BZ"
        }
    ],
    lookupFilter: function(suggestion, originalQuery, queryLowerCase) {
        var matcher = new RegExp('^' + queryLowerCase.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&'), 'i');

        return matcher.test(suggestion.value);
    },
    formatResult: function(suggestion, currentValue) {
        return suggestion.value;
    },
    onSelect: function(suggestion) {

        console.log(suggestion.value);
        console.log(suggestion.key);
    }
};