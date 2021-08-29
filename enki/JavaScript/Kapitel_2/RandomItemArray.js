"use strict"

function show(input) {
    console.log(input);
}

let food = ["Sushi", "Pizza", "Tacos"];
let statisticsFood = {
    Sushi: 0,
    Pizza: 0,
    Tacos: 0
};

for(let counter = 0; counter <= 500; counter++) {
    let randomItem = Math.floor(Math.random() * food.length);
    if(food[randomItem] == Object.keys(statisticsFood)[0]) {
        statisticsFood.Sushi++;
    } else if(food[randomItem] == Object.keys(statisticsFood)[1]) {
        statisticsFood.Pizza++;
    } else if(food[randomItem] == Object.keys(statisticsFood)[2]){
        statisticsFood.Tacos++;
    }    
}
show("Done: ");
show(statisticsFood);