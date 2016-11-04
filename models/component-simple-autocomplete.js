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
          data: "US"
        },
        {
          value: "Israel",
          data: "IL"
        },
        {
          value: "Brazil",
          data: "BZ"
        }
    ],
    lookupFilter: function(suggestion, originalQuery, queryLowerCase) {
        var matcher = new RegExp('^' + queryLowerCase.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&'), 'i');

        console.log(suggestion);

        // get countries that match the name or the native_name and are not selected yet
        return matcher.test(suggestion.value);
    }
};