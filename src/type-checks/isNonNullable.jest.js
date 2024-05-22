/**
 * Type check tests
 * @group type-checks
 */
import { describe } from "@jest/globals";
import isNonNullable from "./isNonNullable.js";
import { expectTypeToBe } from "#jest-helpers";

describe( "isNonNullable", () => {

    expectTypeToBe( isNonNullable, {
        argUndefined: false,
        argNull: false
    }, true );

} );