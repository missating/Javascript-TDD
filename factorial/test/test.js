//import libraries needed for assertion
const assert = require('chai').assert;
//import the main file for test and save in a variable
const myApp = require('../src/main.js');

describe("factorial", function() {

    describe("handle valid input", function() {
        it("should return 6 as factorial for 3", function() {
            assert.equal(myApp.computeFactorial(3), 6);
        });

        it("should return 120 as factorial for 5", function(){
            assert.equal(myApp.computeFactorial(5), 120);
        });
    });


    describe("handle invalid input", function() {
        it("should return undefined as factorial for -5", function() {
            assert.equal(myApp.computeFactorial(-5), 'undefined');
        });

        it("should return undefined as factorial for 'demo'", function() {
            assert.equal(myApp.computeFactorial('demo'), 'undefined');
        });
    });
});