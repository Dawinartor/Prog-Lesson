'use strict';

// Fuere fuer jedes Element bestimmte Funktionen aus:
let setOfNumbers = [1,2,3,4,5];
console.log(setOfNumbers.map(x => x * 2));

// Alles kann mit Mapper-Funktionen bearbeitet werden
let setOfNames = ["David", "Hanna", "Bella", "Martin", "Bob", "Joe"];
setOfNames.map(name => console.log(`Hello ${name}`));

// Elemente eines Arrays filtern
let usedNames = setOfNames.filter(
    function has5Letters(name) {
        if(name.length < 5) {
            return false;
        } else {
            return true;
        }
    }
);

console.log(usedNames);

// Zwei Arrays zusammen nehmen
let setOfNumbersAndNames = setOfNumbers.concat(setOfNames); // Neues Array ist Kopie der beiden
console.log(setOfNumbersAndNames); // erstes Array + zweites Array wird aneinandergereiht.

//Alternativ das
console.log(setOfNumbers.push(...setOfNames));

let arr = [4,3,4,78,32,45,33,1];
console.log(arr.sort((a, b) => {
    console.log(Math.random() - 0.5);
}));

