'use strict';

const chai = require('chai');
const should = chai.should();

const dataUtils = require('../dist/js/utils/dataUtils');

describe('dataUtils', () => {

  describe('should return an object with three properties', () => {
    
    it('should have a property "getAutocompleteOptions"', () => {
      dataUtils.should.have.property('getAutocompleteOptions');
    });

    it('should have a property "getServiceUrl"', () => {
      dataUtils.should.have.property('getServiceUrl');
    });

    it('should have a property "getInputVal"', () => {
      dataUtils.should.have.property('getInputVal');
    });

  });

  describe('getAutocompleteOptions()', () => {

    const self = {
      $form: "",
      type: "omnibox",
      locale: "en",
      includeShadyGigs: true
    };
      
    it('should be a function', () => {
      dataUtils.getAutocompleteOptions.should.be.a('function');
    });

    it('should return an object', () => {
      dataUtils.getAutocompleteOptions(self).should.be.an('object');
    });

    it('should have several properties', () => {
      dataUtils.getAutocompleteOptions(self).should.have.property('minChars');
      dataUtils.getAutocompleteOptions(self).should.have.property('appendTo');
      dataUtils.getAutocompleteOptions(self).should.have.property('serviceUrl');
      dataUtils.getAutocompleteOptions(self).should.have.property('deferRequestBy');
      dataUtils.getAutocompleteOptions(self).should.have.property('dataType');
      dataUtils.getAutocompleteOptions(self).should.have.property('transformResult');
      dataUtils.getAutocompleteOptions(self).should.have.property('beforeRender');
      dataUtils.getAutocompleteOptions(self).should.have.property('onSelect');
    });

  });

  describe('getServiceUrl()', () => {

    it('should be a function', () => {
      dataUtils.getServiceUrl.should.be.a('function');
    });

  });

  describe('getInputVal()', () => {

    it('should be a function', () => {
      dataUtils.getInputVal.should.be.a('function');
    });

    it('should return the value of the input', () => {
      function Input (value) {
        this.value = value;
        this.val = () => {
          return this.value;
        }
      };

      dataUtils.getInputVal(new Input(25));
    });

  });

});