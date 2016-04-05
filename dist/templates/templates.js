this["autocomplete"] = {"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n<input \n    type=\"text\"\n    class=\"autocomplete-component\"\n    data-component=\"autocomplete\"\n    name=\""
    + alias3(((helper = (helper = helpers.inputName || (depth0 != null ? depth0.inputName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"inputName","hash":{},"data":data}) : helper)))
    + "\"\n    placeholder=\""
    + alias3(((helper = (helper = helpers.inputPlaceholder || (depth0 != null ? depth0.inputPlaceholder : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"inputPlaceholder","hash":{},"data":data}) : helper)))
    + "\"\n    data-component-type=\""
    + alias3(((helper = (helper = helpers.autocompleteType || (depth0 != null ? depth0.autocompleteType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"autocompleteType","hash":{},"data":data}) : helper)))
    + "\"\n    data-component-locale=\""
    + alias3(((helper = (helper = helpers.locale || (depth0 != null ? depth0.locale : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"locale","hash":{},"data":data}) : helper)))
    + "\"\n    data-component-include-shady-gigs=\""
    + alias3(((helper = (helper = helpers.includeShadyGigs || (depth0 != null ? depth0.includeShadyGigs : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"includeShadyGigs","hash":{},"data":data}) : helper)))
    + "\"\n>";
},"useData":true};