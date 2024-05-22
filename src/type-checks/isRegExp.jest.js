/**
 * Type check tests
 * @group type-checks
 */
import { describe } from "@jest/globals";
import isRegExp from "./isRegExp.js";
import { expectTypeToBe } from "#jest-helpers";

describe( "isRegExp", () => {

    expectTypeToBe( isRegExp, {
        argRegExp: true
    }, false );

} );