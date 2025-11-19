/**
 * Object Tests
 * @group obj
 */
import { describe, test, expect } from "@jest/globals";
import clone from "./clone.js";

describe( 'clone', () => {

    test( "expect no parameters to return undefined", () => {
        expect( clone() ).toBe( undefined );
    } );

    test( "expect primitive values to simply be returned", () => {
        expect( clone() ).toBe( undefined );
        expect( clone( undefined ) ).toBe( undefined );
        expect( clone( null ) ).toBe( null );
        expect( clone( 1 ) ).toBe( 1 );
        expect( clone( 1n ) ).toBe( 1n );
        expect( clone( false ) ).toBe( false );
        expect( clone( true ) ).toBe( true );
        expect( clone( Symbol.toStringTag ) ).toBe( Symbol.toStringTag );
    } );

    test( "expect arrays to be cloned", () => {
        const arr = [ "one", "two" ];
        expect( clone( arr ) ).toEqual( [ "one", "two" ] );
        expect( clone( arr ) ).not.toBe( arr );
    } );

    test( "expect plain objects to be cloned", () => {
        const obj = { prop1: 1, prop2: 2 };
        expect( clone( obj ) ).toEqual( { prop1: 1, prop2: 2 } );
        expect( clone( obj ) ).not.toBe( obj );
    } );

} );