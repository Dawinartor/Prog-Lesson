// Funktionen deklarieren
 function add(x, y) {
     //return x + y;
     console.log(x + y);

     // Ohne die Verwendung von "return"
     // -> Kommt ein "undefined" zurueck
 }

 // add(1, 2);

 //? Was ist "Pass by value"
 //! Es werden nicht die originalen Daten verabeitet sondern eine Kopie dieser
 //-> Gilt jedoch nur fuer "primitive" Datentypen wie Strings oder integers

 //? Wenn wir ein "Pass by value" Objekt manipulieren was kommt dann beim original zurueck?
function changeValue(value) {
    return value = 1000;
}

var a1 = 5;
console.log(changeValue(a1));
console.log(a1); //! Es wird nur eine Kopie des Wertes verwendet, damit bleibt der urspruengliche Wert immer erhalten.

//? Was ist "Pass by reference"
//! Es wird statt einer Kopie der originale Wert verwendet bzw. die Referenz des Wertes verwnedet.

function changeObj(object) {
    object.name = "Apple";
}

let obj = {name: "Enki"};
changeObj(obj);
console.log(obj.name);
//-> Gilt jedoch nur bei nicht "primitiven" Datentypen wie Objekten oder Arrays

