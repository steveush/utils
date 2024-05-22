/**
 * Type check tests
 * @group type-checks
 */
import { describe } from "@jest/globals";
import isNull from "./isNull.js";
import { expectTypeToBe } from "#jest-helpers";

describe( "isNull", () => {

    expectTypeToBe( isNull, {
        argNull: true
    }, false );

} );