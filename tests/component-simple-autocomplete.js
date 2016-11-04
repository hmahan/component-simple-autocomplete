const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

const SampleFunction = require('../dist/js/component-simple-autocomplete');

describe('SampleFunction', () => {

    it('should be a function', () => {
        SampleFunction.should.be.a('function');
    });
    
    it('should return an object', () => {
        new SampleFunction().should.be.an('object');
    });

    it('should have an init function', () => {
        new SampleFunction().init.should.exist;
        new SampleFunction().init.should.be.a('function');
    });

});

describe('init() function', () => {
    it('should return undefined', () => {
        expect(new SampleFunction().init()).to.be.undefined;
    });
});