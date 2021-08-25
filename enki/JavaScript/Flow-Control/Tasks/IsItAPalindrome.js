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

function changeSentenceOrder(sentence) {
    let sentenceChangedOrder = [];

    for (let word in sentence) {
            console.log(changeWordOrder(sentence[word]));    
            sentenceChangedOrder.push(changeWordOrder(sentence[word]));
    }
     return sentenceChangedOrder;
}

function isItAPalindrome(input) {
    let sentence = input.split(" ");
    let resA = changeSentenceOrder(sentence);
    let resB = resA.join(" ");
    console.log(resB);
    console.log(sentence);
}

//isItAPalindrome(palindrome);

let A = palindrome.split(" ");
let C = [];

for(let word in A) {
    for(let letter in A[word]) {
        console.log(letter);
    }
    console.log(A[word].split(""));
}

//* TODO: Split sentence in words and words in letters. Pust them in seperate array an check if sentence as 
//*       splittet array is equal to second array






