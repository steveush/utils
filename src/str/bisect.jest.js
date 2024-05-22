/**
 * String Tests
 * @group str
 */
import { describe, test, expect } from "@jest/globals";
import bisect from "./bisect.js";

describe( "bisect", () => {

    test( "expect no parameters to return a tuple containing 2 empty strings", () => {
        expect( bisect() ).toEqual( [ "", "" ] );
    } );

    test( "expect invalid values to return a tuple containing 2 empty strings", () => {
        expect( bisect( undefined, "sep" ) ).toEqual( [ "", "" ] );
        expect( bisect( null, "sep" ) ).toEqual( [ "", "" ] );
        expect( bisect( 1, "sep" ) ).toEqual( [ "", "" ] );
        expect( bisect( false, "sep" ) ).toEqual( [ "", "" ] );
    } );

    test( "expect an invalid searchString to return the original value and undefined.", () => {
        expect( bisect( "search", undefined ) ).toEqual( [ "search", "" ] );
        expect( bisect( "search", null ) ).toEqual( [ "search", "" ] );
        expect( bisect( "search", 1 ) ).toEqual( [ "search", "" ] );
        expect( bisect( "search", false ) ).toEqual( [ "search", "" ] );
        expect( bisect( "search", "" ) ).toEqual( [ "search", "" ] );
    } );

    test( "expect the original value and undefined to be returned if no searchString found", () => {
        expect( bisect( "", "sep" ) ).toEqual( [ "", "" ] );
        expect( bisect( "search", "Z" ) ).toEqual( [ "search", "" ] );
    } );

    test( "expect the value to be split on the first occurrence of the searchString", () => {
        expect( bisect( "one two three", "two" ) ).toEqual( [ "one ", " three" ] );
        expect( bisect( "one two three", "two", true ) ).toEqual( [ "one", "three" ] );
        expect( bisect( "one two three", "three" ) ).toEqual( [ "one two ", "" ] );
        expect( bisect( "one two three", "three", true ) ).toEqual( [ "one two", "" ] );
        expect( bisect( "one two three", "one" ) ).toEqual( [ "", " two three" ] );
        expect( bisect( "one two three", "one", true ) ).toEqual( [ "", "two three" ] );

        expect( bisect( "one two three", " " ) ).toEqual( [ "one", "two three" ] );
        expect( bisect( "one/two/three", "/" ) ).toEqual( [ "one", "two/three" ] );
        expect( bisect( "one.two.three", "." ) ).toEqual( [ "one", "two.three" ] );
    } );
} );