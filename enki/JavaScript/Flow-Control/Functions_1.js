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

//? Was ist der Unterschied zwischen Parameter und Argument
//! 1. Ein Parameter witd als Eingabeplatzhalter bei Funktionen verwendet
//! 2. Ein Argument ist der Wert, welcher zur weiterverarbeitung, der funktion uebergeben wird.

//? Was ist ein pseudo-array?
//! Ein Objekt mit einer laenge, welches jedoch nicht die Funktionen eines Arrays in JS mitbringt.

function sortedArgs() {
    console.log(Array.isArray(arguments)); //-> false, weil es ein pseudo-Array ist.

    // Kopiere Inhalte aus Pseudo-Array in echtes Array
    let argList = Array.from(arguments);
    console.log(Array.isArray(argList)); //-> true.
}
//-> Ohne, dass Parameter erwartet werden kann auf diese mit "arguments" zugegriffen werden.
sortedArgs(5, 2, 7);

function myFunc() {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}
//-> Hier nochmal besser zu sehen
myFunc(5,4,3);

// Gebe ein Array mit uebergebenen Werten zurueck
function returnArgs() {
    return Array.from(arguments);
}

// Die Funktions deklaration wird stehts vor der verwendung geladen unabhängig von der Position im code
console.log(useBeforeDeclaration());
function useBeforeDeclaration() {
    return "Say hello to me";
}

/**
* Bei der Verwendung von Funktions Ausdruecken ist, dass jedoch nicht moeglich.
* Da lauft es von oben nach unten
*/ 
//!console.log(zeiger);
//!let zeiger = function() {return 'Ich Zeige dir den Weg';} //! Fehler

//? Wie verwendet man "short circuiting"?


