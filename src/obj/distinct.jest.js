/**
 * Object Tests
 * @group obj
 */
import { describe, test, expect } from "@jest/globals";
import distinct from "./distinct.js";

describe( 'distinct', () => {

    test( "expect invalid parameters to return an empty array", () => {
        expect( distinct() ).toEqual( [] );
        expect( distinct( undefined ) ).toEqual( [] );
        expect( distinct( null ) ).toEqual( [] );
        expect( distinct( 1 ) ).toEqual( [] );
        expect( distinct( 1n ) ).toEqual( [] );
        expect( distinct( false ) ).toEqual( [] );
        expect( distinct( true ) ).toEqual( [] );
        expect( distinct( Symbol.toStringTag ) ).toEqual( [] );
        expect( distinct( {} ) ).toEqual( [] );
    } );

    test( "expect distinct values to be returned", () => {
        expect( distinct( [ "one", "one", "two" ] ) ).toEqual( [ "one", "two" ] );
        expect( distinct( [ 1, 1, 2 ] ) ).toEqual( [ 1, 2 ] );
        expect( distinct( [ undefined, undefined, undefined ] ) ).toEqual( [ undefined ] );
        expect( distinct( [ null, undefined, 1 ] ) ).toEqual( [ null, undefined, 1 ] );
    } );

} );