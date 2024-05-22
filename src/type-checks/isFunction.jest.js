/**
 * Type check tests
 * @group type-checks
 */
import { describe } from "@jest/globals";
import isFunction from "./isFunction.js";
import { expectTypeToBe } from "#jest-helpers";

describe( "isFunction", () => {

    expectTypeToBe( isFunction, {
        argFunction: true
    }, false );

} );