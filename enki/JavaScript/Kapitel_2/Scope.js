//? What the F**K is Hoisting

var a = 1;
function go() { //Hoisting bedeutet: Alle Variablen werden ganz oben in der Datei definiert. 
    console.log(a); // Bis hier wurde a als Variable erst mit dem Wert "undefind" definiert.
    var a = 2;
}

go(); // undefined

// Was tatsächlich hier passiert:

var a;
a = 1;
function go() {
//    var a;    // Shadowing: a ist global verfuegbar, jedoch wird a erneut in neuem Scope definiert und damit bleibt unerreichbar.
    console.log(a);
    a = 2;
}

function show(x) {
    console.log(x);
}

show(a);

s = "enki"; // 2. Dann zugeviesen
console.log(s); // 3. Dann anzeigen
var s; // 1. Kommt hoch


let b = 1;

function foo() {
     if(true) {
         var b = 3; // Ich erhalte 3, weil "var" Werte im ganzen function "Scope" erreichbar sind.
     }              // Unabhaengig ob die Funktion weitere Scopes hat oder nicht.
     console.log(b);
}

foo();

// Scope & Strict Mode
function bar(foo) {
    foo = "hello";
    baz = "world";
    console.log(foo); // Ohne strict Modus is foo: Lokal & baz: Global
    console.log(baz);
}

bar();