'use strict;'

function validate(input="", constraints=null, level=0) { // level is a local variable
/**
 * Validates input by given constraints depending on level
 * @param {string} input String which have to be validate
 * @param {array} [constraints] Array of strings with constraints to check for
 * @param {number} [level] Level of checking 
 */

    // checking level what have to be checked
    const ENUM = {
        characters: 1, // username is between x and y characters.
        starting: 2, // start with a letter.
        containing: 3, // contain letters, numbers, and the underscore character
        ending: 4, // cannot end with an underscore character.
        all: 5 // Check all those cases
    }

    // if validation is successful 'true' else 'false'
    let validate = false;

    // check level and act 
    switch(level) { // TODO: Use mochaJS to test this thing

        case ENUM.characters: // username is between x and y characters.

            if(constraints != null && (constraints[0] > 0 && constraints[1] < 65)) {
                var min = constraints[0]; 
                var max = constraints[1];
            } else { 
                //TODO: Add Exceptions insted of console logs
                console.log("Something went wrong with your constraints");
                return "Something went wrong with your constraints";
            }

            if(input.length > min || input.length < max) {
                validate = true;
                return {validate, input};
            }

        case ENUM.starting: //! start with a letter.

            const checkingPattern = /[a-z]/i;

            if(input[0].match(checkingPattern) == null) {
                console.log("Something went wrong with your input");
                return "Something went wrong with your input";
            } else {
                validate = true;
                return {validate, input};
            }
            
        case ENUM.containing: //! contain letters, numbers, and the underscore character
            // Check how many & which constrains
            // check input for constraints
        case ENUM.ending: //! cannot end with an underscore character.
            // Check how many & which constrains
            // check input for constraints
        case ENUM.all: //! Check all those cases
            // Check how many & which constrains
            // check input for constraints
        default:
            console.log("Something went wrong by parameter 'level'");
            return "Something went wrong by parameter 'level'";
    }
}

const unicorn = 9.9981;

// exporting the function
export { validate, unicorn };