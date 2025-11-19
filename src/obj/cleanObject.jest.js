/**
 * Object Tests
 * @group obj
 */
import { describe, test, expect } from "@jest/globals";
import cleanObject from "./cleanObject.js";

describe( 'cleanObject', () => {

    test( "expect invalid parameters to return undefined", () => {
        expect( cleanObject() ).toBe( undefined );
        expect( cleanObject() ).toBe( undefined );
        expect( cleanObject( undefined ) ).toBe( undefined );
        expect( cleanObject( null ) ).toBe( undefined );
        expect( cleanObject( 1 ) ).toBe( undefined );
        expect( cleanObject( 1n ) ).toBe( undefined );
        expect( cleanObject( false ) ).toBe( undefined );
        expect( cleanObject( true ) ).toBe( undefined );
        expect( cleanObject( Symbol.toStringTag ) ).toBe( undefined );
    } );

    test( "expect empty objects to return undefined", () => {
        expect( cleanObject( {} ) ).toEqual( undefined );
        expect( cleanObject( { empty: undefined } ) ).toEqual( undefined );
    } );

    test( "expect only undefined keys to be removed", () => {
        const fn = () => {};
        expect( cleanObject( {
            empty: undefined,
            null: null,
            array: [],
            object: {},
            bool: false,
            func: fn,
            number: 1,
            bigint: 1n,
            string: '',
            symbol: Symbol.toStringTag
        } ) ).toEqual( {
            null: null,
            array: [],
            object: {},
            bool: false,
            func: fn,
            number: 1,
            bigint: 1n,
            string: '',
            symbol: Symbol.toStringTag
        } );
    } );

} );