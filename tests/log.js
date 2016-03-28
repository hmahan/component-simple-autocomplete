const chai = require('chai');
const assert = chai.assert;

const utils = require('../dist/js/utils/viewUtils');
const log = utils.log;

describe('Log function', () => {
    
    it ('exists and is a function', () => {
        assert.typeOf(log, 'function');
    });

    it('returns number of arguments provided', () => {
        assert.equal(log(), 0);
        assert.equal(log('first', 'second', 'third'), 3);
    });

});