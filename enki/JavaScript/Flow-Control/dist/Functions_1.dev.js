"use strict";

// Funktionen deklarieren
function add(x, y) {
  //return x + y;
  console.log(x + y); // Ohne die Verwendung von "return"
  // -> Kommt ein "undefined" zurueck
}

add(1, 2); //? Was ist "Pass by value"
//! Es werden nicht die originalen Daten verabeitet sondern eine Kopie dieser
//? Wenn wir ein "Pass by value" Objekt manipulieren was kommt dann beim original zurueck?

var a1 = 5;
var b1 = 3;
add(a1, b1);
console.log(a1);
console.log(b1);