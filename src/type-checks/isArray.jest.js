/**
 * Type check tests
 * @group type-checks
 */
import { describe, expect, test, jest, beforeEach } from "@jest/globals";
import isArray from "./isArray.js";
import { expectTypeToBe } from "#jest-helpers";

describe( "isArray", () => {

    expectTypeToBe( isArray, {
        argArray: true,
        argArrayNotEmpty: true
    } );

} );

describe( "isArray:notEmpty", () => {

    expectTypeToBe( value => isArray( value, true ), {
        argArrayNotEmpty: true
    } );

} );

describe( "isArray:predicate", () => {

    const mockFalse = jest.fn( ( value, key, iter ) => false );
    const mockTrue = jest.fn( ( value, key, iter ) => true );

    beforeEach( () => {
        mockFalse.mockClear();
        mockTrue.mockClear();
    } );

    test( "expect an empty array to never execute the callback", () => {

        const result1 = isArray( [], false, mockFalse );
        expect( result1 ).toBe( true );
        expect( mockFalse ).not.toBeCalled();

        const result2 = isArray( [], true, mockTrue );
        expect( result2 ).toBe( false );
        expect( mockTrue ).not.toBeCalled();

    } );

    test( "expect the callback to be executed once per array entry until complete or false is returned", () => {

        const arr = [ "one", "two", "three" ];
        const result1 = isArray( arr, true, mockFalse );
        expect( result1 ).toBe( false );
        expect( mockFalse ).toHaveBeenCalledTimes( 1 );
        expect( mockFalse ).toHaveBeenNthCalledWith( 1, "one", 0, arr );

        const result2 = isArray( arr, true, mockTrue );
        expect( result2 ).toBe( true );
        expect( mockTrue ).toHaveBeenCalledTimes( 3 );
        expect( mockTrue ).toHaveBeenNthCalledWith( 1, "one", 0, arr );
        expect( mockTrue ).toHaveBeenNthCalledWith( 2, "two", 1, arr );
        expect( mockTrue ).toHaveBeenNthCalledWith( 3, "three", 2, arr );

    } );

} );