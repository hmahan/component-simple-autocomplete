'use strict';

const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

const pluginUtils = require('../dist/js/utils/pluginUtils');
const defaultOptions = { type: "omnibox", locale: "en", includeShadyGigs: true };

describe('pluginUtils', () => {

  describe('setSearchType()', () => {

    it('should be a function', () => {
      pluginUtils.setSearchType.should.be.a('function');
    });

    it('should set the outer scopes var "searchType"', () => {
      // set the variable
      pluginUtils.setSearchType(defaultOptions.type);

      // test that it's been set properly
      pluginUtils.getSearchType().should.equal(defaultOptions.type);
    });

  });

  describe('getSearchType()', () => {

    pluginUtils.setSearchType('heroSearch');

    it('should be a function', () => {
      pluginUtils.getSearchType.should.be.a('function');
    });

    it('should return a string', () => {
      pluginUtils.getSearchType().should.be.a('string');
    });

    it('should return the outer function scopes "searchType" value', () => {
      pluginUtils.getSearchType('heroSearch');
    });
  });

  describe('getFormAction()', () => {
    const self = {
      gigSearchUrl: "http://fiverr.com/search/gigs",
      userSearchUrl: "http://fiverr.com/search/users",
      urlPrefix: "http://fiverr.com"
    };

    const gigSuggestion = {
      value: "logo design",
      data: "suggest",
      queryTerm: "desig"
    };

    const userSuggestions = [
      {
        value: "kinza_designer",
        data: "user_suggest",
        queryTerm: "desig",
        isUserQuery: true
      },
      {
        value: "kinza_designer",
        data: "user_suggest",
        queryTerm: "desig"
      }
    ];

    it('should return a gig search action url', () => {
      pluginUtils.getFormAction(self, gigSuggestion).should.equal("http://fiverr.com/search/gigs");
    });

    it('should return a user search action url', () => {
      pluginUtils.getFormAction(self, userSuggestions[0]).should.equal("http://fiverr.com/search/users");
      pluginUtils.getFormAction(self, userSuggestions[1]).should.equal("http://fiverr.com/kinza_designer");
    });

  });

  describe('handleAjaxResults', () => {

    const typeArray = ['omnibox', 'heroSearch', 'simple'],
          typeArrLen = typeArray.length,
          simpleDesignQueryResults = '{"query":"design","suggestions":[{"value":"logo design","data":"suggest"},{"value":"website design","data":"suggest"},{"value":"graphic design","data":"suggest"},{"value":"web design","data":"suggest"},{"value":"t shirt design","data":"suggest"},{"value":"flyer design","data":"suggest"},{"value":"design","data":"user"}]}',
          simpleTranslateQueryResults = '{"query":"translat","suggestions":[{"value":"translation","data":"suggest"},{"value":"spanish translation","data":"suggest"},{"value":"french translation","data":"suggest"},{"value":"german translation","data":"suggest"},{"value":"chinese translation","data":"suggest"},{"value":"translate english to german","data":"suggest"},{"value":"translat","data":"user"}]}',
          simpleDesignQueryJson = JSON.parse(simpleDesignQueryResults),
          simpleTranslateQueryJson = JSON.parse(simpleTranslateQueryResults),
          omniboxDesignQueryResults = '{"suggestions":[{"value":"logo design","data":"suggest","queryTerm":"design"},{"value":"website design","data":"suggest","queryTerm":"design"},{"value":"graphic design","data":"suggest","queryTerm":"design"},{"value":"web design","data":"suggest","queryTerm":"design"},{"value":"t shirt design","data":"suggest","queryTerm":"design"},{"value":"flyer design","data":"suggest","queryTerm":"design"}],"users_suggestions":[{"value":"iffi_designs","data":"user_suggest","queryTerm":"design"},{"value":"design_line36","data":"user_suggest","queryTerm":"design"},{"value":"kinza_designer","data":"user_suggest","queryTerm":"design"}]}',
          omniboxTranslateQueryResults = '{"suggestions":[{"value":"translation","data":"suggest","queryTerm":"translate"},{"value":"spanish translation","data":"suggest","queryTerm":"translate"},{"value":"french translation","data":"suggest","queryTerm":"translate"},{"value":"german translation","data":"suggest","queryTerm":"translate"},{"value":"chinese translation","data":"suggest","queryTerm":"translate"},{"value":"translate english to german","data":"suggest","queryTerm":"translate"}],"users_suggestions":[]}',
          omniboxDesignQueryJson = JSON.parse(omniboxDesignQueryResults),
          omniboxTranslateQueryJson = JSON.parse(omniboxTranslateQueryResults);


    let i = 0,
        type;

    for (; i < typeArrLen; i++) {

      type = typeArray[i];
      pluginUtils.setSearchType(type);

      if (type === 'omnibox') {
        it('should return an object', () => {
          pluginUtils.handleAjaxResults(omniboxDesignQueryJson, 'design').should.be.an('object');
        });

        it('contains a "suggestions" array', () => {
          pluginUtils.handleAjaxResults(omniboxDesignQueryJson, 'design').should.have.property('suggestions');
          pluginUtils.handleAjaxResults(omniboxDesignQueryJson, 'design').suggestions.should.be.an('array');
        });

        it('has two types of suggestions', () => {

          // set up tests!
          const suggestions = pluginUtils.handleAjaxResults(omniboxDesignQueryJson, 'design').suggestions;
          let types = [],
              j = 0,
              suggestion,
              suggestionType;

          for (; j < suggestions.length; j++) {
            suggestion = suggestions[j];
            suggestionType = suggestion.data;

            if (types.indexOf(suggestionType) === -1 && suggestionType !== 'user_search') {
              types.push(suggestionType);
            };
          }

          // test that there are two different types!
          types.length.should.equal(2);

        });

      } else {

        it('should return an object for simple and heroSearch', () => {
          pluginUtils.setSearchType(type);
          pluginUtils.handleAjaxResults(simpleDesignQueryJson, 'design').should.be.an('object');
        });

        it('should contain the original query term', () => {
          pluginUtils.handleAjaxResults(simpleDesignQueryJson, 'design').query.should.equal('design');
        });

        it('contains a "suggestions" array', () => {
          pluginUtils.handleAjaxResults(simpleDesignQueryJson, 'design').suggestions.should.be.an('array');
        });

      }

    }

  });

  describe('handleBeforeRender', () => {

    it('should be a function', () => {
      pluginUtils.handleBeforeRender.should.be.a('function');
    });

    it('should return what is passed in', () => {
      pluginUtils.handleBeforeRender('this is a string').should.be.a('string');
      pluginUtils.handleBeforeRender(24).should.be.a('number');
      pluginUtils.handleBeforeRender(function() {}).should.be.a('function');
      pluginUtils.handleBeforeRender({}).should.be.an('object');
    });

  });


});