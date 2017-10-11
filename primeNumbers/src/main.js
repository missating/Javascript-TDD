"use strict";

module.exports = {
    computePrimeNumbers: (num) => {
        
        if(num <= 1) {
            return 'undefined';
        } 

        for(let i = 2, j = Math.sqrt(num); i <= j; i++) {
            if(num % i === 0) {
                return false;
            }
        }
    return num !== 1;
    }
};
