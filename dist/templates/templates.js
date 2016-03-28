this["autocomplete"] = {"1":function(depth0,helpers,partials,data) {
    return this.escapeExpression(this.lambda(depth0, depth0))
    + " ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"autocomplete-component\" data-component=\"autocomplete\">\n    <input type=\"text\" placeholder=\""
    + alias3(((helper = (helper = helpers.inputPlaceholder || (depth0 != null ? depth0.inputPlaceholder : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"inputPlaceholder","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + ((stack1 = (helpers.list || (depth0 && depth0.list) || alias1).call(depth0,(depth0 != null ? depth0.inputClasses : depth0),{"name":"list","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\" />\n    <div class=\"autocomplete-box "
    + alias3(((helper = (helper = helpers.autocompleteType || (depth0 != null ? depth0.autocompleteType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"autocompleteType","hash":{},"data":data}) : helper)))
    + "\"></div>\n</div>";
},"useData":true};