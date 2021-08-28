"use strict";

let person = {
    name: "Albert Einstein",
    profession: "Theoretical physicist",
    language: ["Italian", "English"],
    equation: "c^2 = a^2 + b^2",
    quote: "Life is like riding a bicycle. To keep your balance you must keep moving."
};
//console.log(person);

person.language.push("German")
//console.log(person);

person.equation = "e = mc ^2";
//console.log(person);

person.nobelRecipient = true;
//console.log(person);
//
delete person.quote;
//console.log(JSON.stringify(person));

let nums = [22, 55, 34, 11];
//console.log(nums.pop());








