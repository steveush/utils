/**
 * Type check tests
 * @group type-checks
 */
import { describe } from "@jest/globals";
import isNumber from "./isNumber.js";
import { expectTypeToBe } from "#jest-helpers";

describe( "isNumber", () => {

    expectTypeToBe( isNumber, {
        argNumber: true
    }, false );

} );