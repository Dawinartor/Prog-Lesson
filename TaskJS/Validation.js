function Validation(input="", constraints=null, level=0){
/**
 * Validates input by given array
 * @param {string} input String which have to be validate
 * @param {array.<string>} [constraints] Array of strings with constraints to check for
 * @param {number} [level] Level of checking 
 */

// checking level what have to be checked
const level = {
    characters: 0, // username is between 4 and 25 characters.
    starting: 1, // start with a letter.
    containing: 2, // contain letters, numbers, and the underscore character
    ending: 3, // cannot end with an underscore character.
    all: 4 //
}


}