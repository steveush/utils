/**
 * Type check tests
 * @group type-checks
 */
import { describe } from "@jest/globals";
import isSymbol from "./isSymbol.js";
import { expectTypeToBe } from "#jest-helpers";

describe( "isSymbol", () => {

    expectTypeToBe( isSymbol, {
        argSymbol: true
    }, false );

} );