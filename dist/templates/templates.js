this["autocomplete"] = {"1":function(depth0,helpers,partials,data) {
    var helper;

  return "      <input type=\"submit\" value=\""
    + this.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" />\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda, buffer = 
  "\n<form class=\"autocomplete-form autocomplete-"
    + alias3(((helper = (helper = helpers.autocompleteType || (depth0 != null ? depth0.autocompleteType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"autocompleteType","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"autocomplete-container\">\n    <input \n        type=\"text\"\n        class=\"autocomplete-component\"\n        data-component=\"autocomplete\"\n        max-length=\""
    + alias3(((helper = (helper = helpers.maxLength || (depth0 != null ? depth0.maxLength : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"maxLength","hash":{},"data":data}) : helper)))
    + "\"\n        name=\""
    + alias3(((helper = (helper = helpers.inputName || (depth0 != null ? depth0.inputName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"inputName","hash":{},"data":data}) : helper)))
    + "\"\n        placeholder=\""
    + alias3(((helper = (helper = helpers.inputPlaceholder || (depth0 != null ? depth0.inputPlaceholder : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"inputPlaceholder","hash":{},"data":data}) : helper)))
    + "\"\n        data-component-type=\""
    + alias3(((helper = (helper = helpers.autocompleteType || (depth0 != null ? depth0.autocompleteType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"autocompleteType","hash":{},"data":data}) : helper)))
    + "\"\n        data-component-locale=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.autocompleteUrl : depth0)) != null ? stack1.locale : stack1), depth0))
    + "\"\n        data-component-include-shady-gigs=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.autocompleteUrl : depth0)) != null ? stack1.includeShadyGigs : stack1), depth0))
    + "\"\n        data-component-autocomplete-url=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.autocompleteUrl : depth0)) != null ? stack1.url : stack1), depth0))
    + "\"\n        data-component-url-prefix=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.searchUrl : depth0)) != null ? stack1.urlPrefix : stack1), depth0))
    + "\"\n        data-component-user-search-url=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.searchUrl : depth0)) != null ? stack1.userSearch : stack1), depth0))
    + "\"\n        data-component-gig-search-url=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.searchUrl : depth0)) != null ? stack1.gigSearch : stack1), depth0))
    + "\"\n        data-component-search-action-params=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.searchUrl : depth0)) != null ? stack1.searchActionParams : stack1), depth0))
    + "\"\n    >\n\n";
  stack1 = ((helper = (helper = helpers.submitButton || (depth0 != null ? depth0.submitButton : depth0)) != null ? helper : alias1),(options={"name":"submitButton","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.submitButton) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </div>\n</form>";
},"useData":true};