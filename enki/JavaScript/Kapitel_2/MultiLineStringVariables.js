"use strict";

function show(input) {
    console.log(input);
}

// Stings in mehreren Linien
let stringOfHTML = "<div>" +
    " this is a bad example." +
"</div>";

let stringOfHTML2 = `This is a
multi-line
string in ES6`;

// Statt .join() einen String zu erweitern sollte das "+" verwendet werden
// -> Dieser optimiert den Sting intern

// String lassen sich durch RegEx testen
let sampleString = "Hallo mein Name ist David";
let sampleRegEx = /shool/i;
//show(sampleRegEx.test(sampleString));