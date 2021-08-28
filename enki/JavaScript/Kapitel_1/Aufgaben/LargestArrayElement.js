"use strict";

let numbers = [23, 81, 14, 5 ,33, 631, 47, 78, 99, 999,0, 247, 2459];
const pass = null;

function findLargestNumber(setOfNumbers=numbers) {
    /**
     * Sucht in einem Array nach der groesten Zahl.
     * 
     * @param {Array} let Array voller Zahlen
     * @return {int} Groeßte Zahl
     */

     let largestNumber = setOfNumbers[0];

     for(let number in setOfNumbers) {
         if(setOfNumbers[number] > largestNumber) {
            largestNumber = setOfNumbers[number];
          }
     }
     return largestNumber;
}

//console.log(findLargestNumber());
