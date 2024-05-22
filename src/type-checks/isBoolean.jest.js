/**
 * @group type-checks
 */
import { describe } from "@jest/globals";
import isBoolean from "./isBoolean.js";
import { expectTypeToBe } from "#jest-helpers";

describe( "isBoolean", () => {

    expectTypeToBe( isBoolean, {
        argBoolean: true
    }, false );

} );