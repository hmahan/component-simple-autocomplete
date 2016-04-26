'use strict';

const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

const Autocomplete = require('../dist/js/autocomplete');
const defaultOptions = { form: "<div></div>", type: "omnibox", locale: "en", includeShadyGigs: true };

describe('Autocomplete()', () => {
  let autocomplete = new Autocomplete(defaultOptions);

  it('should be a constructor function', () => {
    expect(autocomplete).to.be.an.instanceof(Autocomplete);
  });

  describe('other return functions', () => {

    it('should attachAutocompletePlugin', () => {
      autocomplete.attachAutocompletePlugin.should.exist;
    });

    it('should setDropdownContainer', () => {
      autocomplete.setDropdownContainer.should.exist;
    });

    it('should handleAutocompleteItemSelect', () => {
      autocomplete.handleAutocompleteItemSelect.should.exist;
    });

    it('should handleInputFocus', () => {
      autocomplete.handleInputFocus.should.exist;
    });

    describe('init()', () => {

      autocomplete = new Autocomplete(defaultOptions);

      // enable testing by disabling normal functions
      // after they've already been tested for existence
      autocomplete.attachAutocompletePlugin = function() { return true; };
      autocomplete.bindEventListeners = function() { return true; };
      autocomplete.setDropdownContainer = () => { return true; };
      autocomplete.handleAutocompleteItemSelect = () => { return true; };
      autocomplete.handleInputFocus = () => { return true; };
      autocomplete.handleInputBlur = () => { return true; };
      autocomplete.setContainer = () => { return true; };

      it('should exist', () => {
        autocomplete.init.should.exist;
        autocomplete.init();
      });

      it('should set a $form property', () => {
        autocomplete.$form.should.exist;
      });

      it('should set a type property', () => {
        autocomplete.type.should.exist;
      });

      it('should set a locale property', () => {
        autocomplete.locale.should.exist;
      });

      it('should set a includeShadyGigs property', () => {
        autocomplete.includeShadyGigs.should.exist;
      });

      it('should set a $input property', () => {
        autocomplete.$input.should.exist;
      });

      it('should set a $dropdown property', () => {
        autocomplete.$dropdown.should.exist;
      });

      it('should set a $container property', () => {
        autocomplete.$container.should.exist;
      });

    });

    describe('bindEventListeners()', () => {

      let events = {};
      autocomplete = new Autocomplete(defaultOptions);

      // enable testing by disabling normal functions
      // after they've already been tested for existence
      autocomplete.setDropdownContainer = () => { return true; };
      autocomplete.handleAutocompleteItemSelect = () => { return true; };
      autocomplete.handleInputFocus = () => { return true; };
      autocomplete.handleInputBlur = () => { return true; };
      autocomplete.setContainer = () => { return true; };

      autocomplete.setSubmitButton = () => {
        return {
          on: function() {}
        };
      };

      // set up fake on function
      autocomplete.attachAutocompletePlugin = () => {

        function recursiveOn() {
          return {
            on: (event, callback) => {
              events[event] = callback;

              return recursiveOn();
            }
          };
        };

        return recursiveOn();
      };

      // init the function so events are bound
      autocomplete.init();

      it('should exist as a function', () => {
        autocomplete.bindEventListeners.should.exist;
      });

      it('should have a focus listener', () => {
        events.focus.should.be.a('function');
      });

      it('should have a blur listener', () => {
        events.blur.should.be.a('function');
      });

    });

  });

});