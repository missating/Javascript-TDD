"use strict";

module.exports = {

    computeFizzbuzz: (num) => {

        if(num < 0) {
            return 'undefined';
        }


        if(num % 5 === 0 && num % 3 === 0) {
            return "fizzBuzz";
        } else if (num % 5 === 0) {
            return "Buzz";
        } else if (num % 3 === 0) {
            return "Fizz";
        } else {
            return num;
        }
    }

};
