// Die Switch-Anweisung prueft immer auf "==="

// Aufgabe: Funktion die Tierbeine zählt:
function calcAnimalFeeds(animalName, numberOfAnimals) {
    /**
     * Zaelt die Tiere und berechnet die Beine des spezifischen Tieres
     * 
     * @param {String} var Name of animal
     * @param {int} var Animal count
     */
    switch(animalName) {
        case 'horse':
            return numberOfAnimals * 4;
        case 'monkey':
            return numberOfAnimals * 2;
        default:
            return NaN;
    }
}
//console.log(calcAnimalFeeds('horse', 50));


// Aufgabe: Weekend & Weekday Switch
function whichDay(day) {
    /**
     * Bekommt einen Tag als Eingabe 
     * und gibt einen Tag spezifischen 
     * Satz als String zurück
     * 
     * @param {String} var Week day name
     */

    day = day.toLowerCase();

    switch(day) {
        case 'monday':
            return "Start of the week";
        case 'tuesday':
            return "Second day of the week";
        case 'wednesday':
            return "Third day of the week";
        case 'thursday':
            return "One day before the weekend starts";
        case 'friday':
            return "I'M FAT, LET'S PARTY!";
        case 'saturday':
            return "MORE PARTY!";
        case 'sunday':
            return "Now, sleep!";
        default:
            return "something went wrong";
    }
}

console.log(whichDay("SUNDAY"));