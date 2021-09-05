'use strict';

/*
Create the function that takes an array with objects and returns the sum of people's budgets.
*/

let guysWithMoney = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
];

function sumBudget(budgets=[]) {
    let sum = 0;
    for(let person in budgets) {
        sum += budgets[person].budget;
    }
    return sum;
}

console.log(sumBudget(guysWithMoney));

