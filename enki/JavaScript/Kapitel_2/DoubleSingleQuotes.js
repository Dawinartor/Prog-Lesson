"use strict";

// Ein Unterschied zwischen
let string1 = 'I\'m a string.';
let string2 = "I'm a string.";

console.log(string1);
console.log(string2);

// Schreibe Strings auf mehreren Linien
let string3 = "abc\ def\ ghiiiii";
console.log(string3);

// Ersetzte Teile eines Strings 
let aString = "Enki is the best!";
let newString = aString.replace("Enki","Summer");
console.log(newString);

// Auch mit RegEx verwendbar
let aString2 = "An example string for us";
console.log(aString2);
let newString2 = aString2.replace(/ /g, "");
console.log(newString2);