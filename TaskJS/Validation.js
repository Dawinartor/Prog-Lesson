'use strict;'

function Validation(input="", constraints=null, level=0) {
/**
 * Validates input by given constraints depending on level
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

// check level and act 
switch(level) {
    case 0:
        // Check how many & which constrains
        // check input for constraints
    case 1:
        // Check how many & which constrains
        // check input for constraints
    case 2:
        // Check how many & which constrains
        // check input for constraints
    case 3:
        // Check how many & which constrains
        // check input for constraints
    case 4:
        // Check how many & which constrains
        // check input for constraints
    default:
        console.log("Something went wrong by parameter 'level'");
        return "Something went wrong by parameter 'level'";
}



}