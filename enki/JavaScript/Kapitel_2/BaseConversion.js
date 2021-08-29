"use strict";

function show(input) {
    console.log(input);
}

// Ein eingebauter umrecher zwischen den Zahlenformaten
let number = 144;
let binary = number.toString(2);
let octet = number.toString(8);
let Hexa = number.toString(8*2); // String

// Gleiches Spiel zum Int zurueck
//show(parseInt(binary, 2));
//show(parseInt(octet, 8));
//show(parseInt(Hexa, 16)); // Int

(90).toString(8); // Diese Schreibweise geht auch

//show(.1 + .2);

// NaN ist eine Nummer welche sich von anderen abhebt
let otherNumber = NaN;
//show(Number.isNaN(NaN));

// "===" statt Number.isNaN() zu verwenden liefert falsche Werte
