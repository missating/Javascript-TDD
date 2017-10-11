const assert = require('chai').assert;
const myApp = require('../src/main.js');


describe("primeNumber", function(){
    
    describe("handle valid input", function(){
        it("should return true because 2 is a prime number", function(){
            assert.equal(myApp.computePrimeNumbers(2), true);
        });

        it("should return true because 3 is a prime number", function(){
            assert.equal(myApp.computePrimeNumbers(3), true);
        });

        it("should return true because 5 is a prime number", function(){
            assert.equal(myApp.computePrimeNumbers(5), true);
        });

        it("should return true because 7 is a prime number", function(){
            assert.equal(myApp.computePrimeNumbers(7), true);
        });
    });

    describe("handle invalid input", function(){
        it("should return undefined because 1 is not a prime number", function(){
            assert.equal(myApp.computePrimeNumbers(1), 'undefined');
        });

        it("should return undefined because -5 is not a prime number", function(){
            assert.equal(myApp.computePrimeNumbers(-5), 'undefined');
        });

        it("should return false because 4 is not a prime number", function(){
            assert.equal(myApp.computePrimeNumbers(4), false);
        });
    });
});