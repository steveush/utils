/**
 * Type check tests
 * @group type-checks
 */
import { describe } from "@jest/globals";
import isString from "./isString.js";
import { expectTypeToBe } from "#jest-helpers";

describe( "isString", () => {

    expectTypeToBe( isString, {
        argString: true,
        argStringNotEmpty: true
    }, false );

} );

describe( "isString:notEmpty", () => {

    expectTypeToBe( value => isString( value, true ), {
        argStringNotEmpty: true
    }, false );

} );