/**
 * Object Tests
 * @group obj
 */
import { describe, test, expect } from "@jest/globals";
import combine from "./combine.js";

describe( 'combine', () => {

    test( "expect no parameters to return an empty array", () => {
        expect( combine() ).toEqual( [] );
    } );

    test( "expect 1 parameter to return a shallow copy of that parameter", () => {
        const arr1_in = [ "one" ];
        const arr1_out = combine( arr1_in, null );

        expect( arr1_out ).toEqual( arr1_in ); // elements are the same
        expect( arr1_out ).not.toBe( arr1_in ); // but it is a shallow copy

        const arr2_in = [ "two" ];
        const arr2_out = combine( null, arr2_in );

        expect( arr2_out ).toEqual( arr2_in ); // elements are the same
        expect( arr2_out ).not.toBe( arr2_in ); // but it is a shallow copy
    } );

    test( "expect arrays to be merged", () => {
        expect( combine( [ "one" ], [ "two" ] ) ).toEqual( [ "one", "two" ] );
        expect( combine( [ 1 ], [ 2 ] ) ).toEqual( [ 1, 2 ] );
    } );

    test( "expect duplicates to be removed", () => {
        expect( combine( [ "one", "two" ], [ "two", "three" ] ) ).toEqual( [ "one", "two", "three" ] );
        expect( combine( [ 1, 2 ], [ 2, 3 ] ) ).toEqual( [ 1, 2, 3 ] );
        expect( combine( [ { id: 1 }, { id: 2 } ], [ { id: 2 }, { id: 3 } ], ( a, b) => a.id === b.id ) ).toEqual( [ { id: 1 }, { id: 2 }, { id: 3 } ] );
    } );

} );