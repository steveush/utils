/**
 * String Tests
 * @group str
 */
import { describe, test, expect } from "@jest/globals";
import capitalize from "./capitalize.js";

describe( "capitalize", () => {

    test( "expect invalid parameters to return an empty string", () => {
        expect( capitalize() ).toBe( '' );
        expect( capitalize( undefined ) ).toBe( '' );
        expect( capitalize( null ) ).toBe( '' );
        expect( capitalize( false ) ).toBe( '' );
        expect( capitalize( 1 ) ).toBe( '' );
    } );

    test( "expect strings to be all lowercase except for the first character", () => {
        expect( capitalize( "test" ) ).toBe( 'Test' );
        expect( capitalize( "TEST" ) ).toBe( 'Test' );
    } );

} );