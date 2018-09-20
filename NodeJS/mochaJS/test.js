var assert = require('assert');
var expected, current;
before(function(){
    expected = ['a', 'b', 'c'];
    // current = 'a,b,c'.split(',');
})
describe('String#split', function(){
    beforeEach(function(){
        current = 'a,b,c'.split(',');
    })
    it('should return an array', function(){
        assert(Array.isArray(current));
    });
    it('should return the same array', function(){
        assert.equal(expected.length, current.length, 'arrays have equal length');
        for (var i=0; i<expected.length; i++) {
            assert.equal(expected[i], current[i], i + 'element is equal');
        }
    })
    
})

describe('String#split2', function(){
    beforeEach(function(){
        // current = 'a,b,c'.split(',');
        current = {a:1}
    })
    it('should return an array', function(){
        assert(Array.isArray(current));
    });
    it('should return the same array', function(){
        assert.equal(expected.length, current.length, 'arrays have equal length');
        for (var i=0; i<expected.length; i++) {
            assert.equal(expected[i], current[i], i + 'element is equal');
        }
    })
    
})

