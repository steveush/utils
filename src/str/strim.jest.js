/**
 * String Tests
 * @group str
 */
import { describe, test, expect } from "@jest/globals";
import strim from "./strim.js";

describe( "strim", () => {

    test( "expect invalid parameters to return an empty array", () => {
        expect( strim() ).toEqual( [] );
        expect( strim( null, null ) ).toEqual( [] );
        expect( strim( "", null ) ).toEqual( [] );
        expect( strim( null, "" ) ).toEqual( [] );
        expect( strim( null, /.*/i ) ).toEqual( [] );
    } );

    test( "expect strings to be split and trimmed", () => {
        expect( strim( "one: two", ":" ) ).toEqual( [ "one", "two" ] );
        expect( strim( "one: two", /:/i ) ).toEqual( [ "one", "two" ] );
    } );

} );