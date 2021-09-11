import { validate } from '../validate.js';
import chai from 'chai';

var assert = chai.assert;
var expectedValues = {
    validate: true,
    input: "H3ll0#"
};

console.log(expectedValue)

let expectedValue = {expectedValues[validate] , expectedValues.input};
//! WHAT is wrong here?
assert.equal(validate("H3ll0#", [5, 13], 1), expectedValue, "Test case successfull TROLLOLOLOLO");
assert.equal(validate("H3ll0#", [5, 13], 1), expectedValue, "Test case successfull TROLLOLOLOLO");

