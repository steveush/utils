/**
 * String Tests
 * @group str
 */
import { describe, test, expect } from "@jest/globals";
import format from "./format.js";

describe( "format", () => {

    test( "expect no parameters to return an empty string", () => {
        expect( format() ).toEqual( "" );
    } );

    test( "expect invalid str values to return an empty string", () => {
        expect( format( undefined, "ph" ) ).toEqual( "" );
        expect( format( null, "ph" ) ).toEqual( "" );
        expect( format( 1, "ph" ) ).toEqual( "" );
        expect( format( false, "ph" ) ).toEqual( "" );
    } );

    test( "expect non-string replacements to be coerced to strings", () => {
        expect( format( "{0}", false ) ).toEqual( "false" );
        expect( format( "{0}", undefined ) ).toEqual( "undefined" );
        expect( format( "{0}", 0 ) ).toEqual( "0" );
        expect( format( "{0}", [ true, 0 ] ) ).toEqual( "true,0" );
        expect( format( "{one},{two}", { one: true, two: 0 } ) ).toEqual( "true,0" );
        expect( format( "{one},{two}", { one: [ true, false ], two: 0 } ) ).toEqual( "true,false,0" );
        expect( format( "{one},{two}", { one: {}, two: 0 } ) ).toEqual( "[object Object],0" );
        expect( format( "{one},{two}", { one: { toString: () => "weo" }, two: 0 } ) ).toEqual( "weo,0" );
    } );

    test( "expect index placeholders to be replaced", () => {
        expect( format( "{0}", [ "one", "two" ] ) ).toEqual( "one,two" );
        expect( format( "{0}, {1}", "one", "two" ) ).toEqual( "one, two" );
        expect( format( "{0}, {1}", false, true ) ).toEqual( "false, true" );
    } );

    test( "expect named placeholders to be replaced", () => {
        expect( format( "{one}, {two}", { one: "1", two: "2" } ) ).toEqual( "1, 2" );
    } );
} );