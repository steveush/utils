/**
 * Number Tests
 * @group num
 */
import { describe, test, expect } from "@jest/globals";
import isNumberWithin from "./isNumberWithin.js";

describe( "isNumberWithin", () => {

    test( "expect invalid parameters to return false", () => {
        expect( isNumberWithin() ).toBe( false );
        expect( isNumberWithin( undefined, undefined, undefined ) ).toBe( false );
        expect( isNumberWithin( 1, undefined, undefined ) ).toBe( false );
        expect( isNumberWithin( undefined, 1, undefined ) ).toBe( false );
        expect( isNumberWithin( undefined, 1, 1 ) ).toBe( false );
    } );

    test( "expect values outside the range to return false", () => {
        expect( isNumberWithin( -1, 0, 1 ) ).toBe( false );
        expect( isNumberWithin( 2, 0, 1 ) ).toBe( false );
    } );

    test( "expect values inside the range to return true", () => {
        expect( isNumberWithin( 0, 0, 1 ) ).toBe( true );
        expect( isNumberWithin( 1, 0, 1 ) ).toBe( true );
    } );

} );