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
    var a;
    console.log(a);
    a = 2;
}