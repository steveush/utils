/**
 * Number Tests
 * @group num
 */
import { describe, test, expect } from "@jest/globals";
import isNumberNotZero from "./isNumberNotZero.js";

describe( "isNumberNotZero", () => {

    test( "expect invalid parameters to return false", () => {
        expect( isNumberNotZero() ).toBe( false );
        expect( isNumberNotZero( undefined ) ).toBe( false );
        expect( isNumberNotZero( null ) ).toBe( false );
        expect( isNumberNotZero( false ) ).toBe( false );
        expect( isNumberNotZero( Symbol.toStringTag ) ).toBe( false );
        expect( isNumberNotZero( [] ) ).toBe( false );
        expect( isNumberNotZero( {} ) ).toBe( false );
    } );

    test( "expect zero values to return false", () => {
        expect( isNumberNotZero( 0 ) ).toBe( false );
        expect( isNumberNotZero( "0" ) ).toBe( false );
        expect( isNumberNotZero( "0px" ) ).toBe( false );
        expect( isNumberNotZero( "0.0em" ) ).toBe( false );
    } );

    test( "expect non-zero values to return true", () => {
        expect( isNumberNotZero( 1 ) ).toBe( true );
        expect( isNumberNotZero( "1" ) ).toBe( true );
        expect( isNumberNotZero( "1px" ) ).toBe( true );
        expect( isNumberNotZero( "0.1em" ) ).toBe( true );
    } );

} );