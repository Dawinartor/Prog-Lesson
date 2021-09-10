import { validate } from '../validate.js';
import chai from 'chai';

var assert = chai.assert;
assert(validate("H3ll0#", [5, 13], 1) == [true, "H3ll0#"], "Test case failed LALALLALALAL");
