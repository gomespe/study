const expect = require('chai').expect;
const stack = require('../lib/stack.js');

describe('stack#pop', function (){
    before(function() {
        expected = [1,2];
    })
    // it('should return error when not using array', function() {
    //     expect(() => stack.pop({})).to.throw('Data provided is not an array')
    // })
    it('should return error when pop empty array', function() {
        expect(() => stack.pop([])).to.throw('Cannot pop empty array')
    })

    it('should return the same array without the last element', function() {
        current = Array(1,2,3);
        stack.pop(current);
        expect(current).to.have.lengthOf(expected.length);
        for(let i=0; i<3; i++){
            expect(current[i]).to.equal(expected[i]);
        }       
    })
})

describe('stack#push', function (){
    before( function() {
        expected = [1,2,3];
    })
    it('should return error when not using array', function() {
        expect(() => stack.push({a:1})).to.throw('Data provided is not an array')
    })

    it('should return same array with additional element that was pushed', function(){
        current = [1,2];
        stack.push(current,3);
        expect(current).to.have.lengthOf(expected.length)
        for(let i=0;i<expected.length;i++){
            expect(current[i]).to.equal(expected[i]);
        }
    })
})

describe('stack#top', function (){
    it('should return error when not using array', function() {
        expect(() => stack.top({a:1})).to.throw('Data provided is not an array')
    })
    it('shoul return null when the array is empty', function() {
        expect(stack.top([])).to.equal(null)
        
    })
    it('should return the last element of the array', function() {
        let current = stack.top(Array(1,2));
        let expected = 2;
        expect(current).to.equal(expected);
    })
})

describe('stack#size', function (){
    it('should return error when not using array', function() {
        expect(() => stack.size({a:1})).to.throw('Data provided is not an array')
    })
    it('should return the size of the array', function() {
        let expected = 3;
        let current = stack.size(Array(1,2,3));
        expect(current).to.equal(expected);
    })    
})