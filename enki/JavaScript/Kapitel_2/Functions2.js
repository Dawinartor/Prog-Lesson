'use strict';

function naturalHalf(number) {
    if (number % 2 == 0) {
        return number / 2;
    }
    return;
}

// Wenn man unsicher ist ob eine Funktion vorhanden ist, laesst sich vorab pruefen ob diese exestiert
if (typeof naturalHalf === "function") {
    console.log(naturalHalf(2));   
}

// Unterschiedliche moeglichkeiten eine Funktion zu definieren
let multiply = new Function(
    'x', 'y', 'return x*y'
    );

console.log(multiply(5, 4));


function multiply2(x, y) {
    return x * y;
}

console.log(multiply2(5, 5));


let multiply3 = function(x, y) {
    return x * y;
}

console.log(multiply3(5, 6));


let multiply4 = function mult(x, y) {
    return x * y;
}