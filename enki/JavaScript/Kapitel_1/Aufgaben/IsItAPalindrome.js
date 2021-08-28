"use strict";

// Pruefe ob ein String ein Palindrome ist oder nicht
let palindrome = "Was it a car or a cat I saw";
let nonPalindrom = "Hey how are you";

//? Was ist ein Palindrome
//! Eine Anreihung von Wörtern die von hinten nach vorner und andersherum den selben Satz ergeben

function changeWordOrder(word) {
    let output = [];
    let changeCount = word.length - 1;

    for(let letter in word) {
        if(changeCount >= 0) {
            output.push(word[changeCount]);
            --changeCount;
        }
    }
    return output;
}

//* TODO: Split sentence in words and words in letters. Pust them in seperate array an check if sentence as 
//*       splittet array is equal to second array

function isItAPalindrome(input=palindrome) {
    /**
     * Split sentence in words and words in letters. 
     * Put them in seperate array an check if sentence as splittet array is equal to second array
     */
    let A = changeWordOrder(input.split(" ").join("").toString().toLowerCase()).toString().replaceAll(",", "");
    let B = input.split(" ").join("").toLowerCase();
    return A == B;
}

//console.log(isItAPalindrome("Lagerregal"));

