const assert = require('chai').assert;
const myApp = require('../src/main.js');

describe("fizzbuzz", function() {
    
    describe("handle valid input", function() {
        it("should return fizz if the number is divisible by 3", function() {
            assert.equal(myApp.computeFizzbuzz(3), 'Fizz');
        });

        it("should return buzz if the number is divisible by 5", function() {
            assert.equal(myApp.computeFizzbuzz(5), 'Buzz');
        });

        it("should return fizzbuzz if the number is divisible by both 3 and 5", function() {
            assert.equal(myApp.computeFizzbuzz(15), 'fizzBuzz');
        });
    });

    describe("handle invalid input", function() {
        it("should return the number if not divisible by 3 or 5", function() {
            assert.equal(myApp.computeFizzbuzz(2), 2);
        });

        it("should return the number if not divisible by both 3 and 5", function() {
            assert.equal(myApp.computeFizzbuzz(14), 14);
        });

        it("should return undefined if number is less than 0", function() {
            assert.equal(myApp.computeFizzbuzz(-1), 'undefined');
        });
    });
});
