/**
 * Type check tests
 * @group type-checks
 */
import { describe } from "@jest/globals";
import isUndefined from "./isUndefined.js";
import { expectTypeToBe } from "#jest-helpers";

describe( "isUndefined", () => {

    expectTypeToBe( isUndefined, {
        argUndefined: true
    }, false );

} );