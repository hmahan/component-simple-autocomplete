'use strict';

const chai = require('chai');
const should = chai.should();

const utils = require('../dist/js/utils');

describe('utils', () => {

    it('should be an object', () => {
      utils.should.be.an('object');
    });

    describe('should have two properties', () => {
      
      it('should have "pluginUtils"', () => {
        utils.should.have.property('pluginUtils');
      });

      it('should have "dataUtils"', () => {
        utils.should.have.property('dataUtils');
      });

    });

});