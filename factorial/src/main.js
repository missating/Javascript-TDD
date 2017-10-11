"use strict";

module.exports = {

    // factorial of an integer
    computeFactorial: (value) => {

        if(typeof(value) != 'number') {
            return 'undefined';
        } else if(value < 0) {
            return 'undefined';
        } else {
            let factorial = 1;
            for(let i = value; i >= 1; i--){
                factorial = factorial * i;
            }

            return factorial;
        }
    }
};



