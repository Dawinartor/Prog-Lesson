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
function title(title) { // Diese Funktion als "short circuiting"
    if(!title) {
        t = "Undtitled";
    }
}

function titleSC(title) { //-> "short circuiting" ist die Verwendung von "||"
    title = title || "Untitled"; //! Pruefe ob parameter einen Wert hat, sonst wird Wert definiert.
    return title;
}

console.log(titleSC(""));

//! Eine bessere Praktik ist, dass setzten von standart Werten
function titleSCD(title = "Untitled") {
    return "parameter with default value";
}

//! Wenn "null" & "undefined" verhindert werden soll, jedoch alles andere erlaubt ist
function titleNew(title) {
    title = title ?? "Untitled" //-> Der "Nullish coalescing operator [??]"
    return title;   	        //-> Wenn Parameter "null" oder "undefined", dann "Untitled" als Rueckgabe.
}

console.log(titleNew(undefined));

//? Was ist der 'strict mode'
//! Der in diesem Modus achtet der Interpereter explizit ob gewisse Schluesselworter vorhanden sind.
//-> Der modus wird in bestimmten "scopes" definiert.

// Am Anfang eines Dokuments, um fuer das gesammte Script den Modus zu behalten
//'use strict';
// Innerhalb einer Funktion
function strictFunction() {
    'use strict';
    hello = {lo: "ol"}; 
    return hello; // Fehler
}

//console.log(strictFunction());

//? Wie arbeite ich mit Arrays
let myArray = [1, 2, 3];
let anotherArray = ["a", "b", "c"];

console.log(myArray[0]);
console.log(myArray[myArray.length - 1]);

//? Wie fuege ich Werte einem Array hinzu
myArray.push("4");
function bla() {
   return myArray[3] === "4" ? "True" : "False";
}

console.log(bla());

//? Wie entferne ich Werte aus einem Array
//console.log(myArray.pop());
//? Wie pruefe ob mein Element ein String ist
console.log(typeof myArray[3] === 'string');

//? Wie iteriere ich durch ein Array
for(let item of myArray) {
    console.log(item);
}

//? Setzte manuel die Array Laenge fest
let mySizedArray = ["one", "two", "three", "four"];
mySizedArray.length = 2;

for(let item of mySizedArray) {
    console.log(item); // Hat nur noch zwei Objekte
}

mySizedArray.length = 0;
console.log(mySizedArray); // Jetzt ist es ein leeres Array

//? Was macht die "spice" Funktion bei Arrays
let zarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(zarray.splice(2, 7, 11, 12)); // loeascht alle Elemente ab dem 3. & Fuegt 11 und 12 hinzu
console.log(zarray);

