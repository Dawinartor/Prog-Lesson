'use strict';

/*
You will be given an array of drinks, with each drink being an object with two properties: name and price.
Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
*/

class Drink {
    constructor(name="Cola", price=0.99) {
        this.name = name;
        this.price = price;
    }
}

let moreDrinks = [
    new Drink("Pepsi", 1.15),
    new Drink("Fanta", 0.78),
    new Drink("Sprite", 0.89),
    new Drink()
    ];

class SortAutomat {
    constructor() {}
    sortByPrice(drinks=[]) {
        return drinks.sort((a, b) => a.price - b.price);
    }
}

let pfandAutomat = new SortAutomat().sortByPrice(moreDrinks);
console.log(pfandAutomat);


