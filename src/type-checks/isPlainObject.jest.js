/**
 * Type check tests
 * @group type-checks
 */
import { beforeEach, describe, expect, jest, test } from "@jest/globals";
import isPlainObject from "./isPlainObject.js";
import { expectTypeToBe } from "#jest-helpers";

describe( "isPlain", () => {

    expectTypeToBe( isPlainObject, {
        argPlain: true,
        argPlainNotEmpty: true
    }, false );

} );

describe( "isPlainObject:notEmpty", () => {

    expectTypeToBe( value => isPlainObject( value, true ), {
        argPlainNotEmpty: true
    }, false );

} );

describe( "isPlainObject:predicate", () => {

    const mockFalse = jest.fn( ( value, key, iter ) => {
        return false;
    } );

    const mockTrue = jest.fn( ( value, key, iter ) => {
        return true;
    } );

    beforeEach( () => {
        mockFalse.mockClear();
        mockTrue.mockClear();
    } );

    test( "expect an empty object to never execute the predicate", () => {

        const result1 = isPlainObject( {}, false, mockFalse );
        expect( result1 ).toBe( true );
        expect( mockFalse ).not.toBeCalled();

        const result2 = isPlainObject( {}, true, mockTrue );
        expect( result2 ).toBe( false );
        expect( mockTrue ).not.toBeCalled();

    } );

    test( "expect the predicate to be executed once per entry until complete or false is returned", () => {

        const obj = { one: 1, two: 2, three: 3 };
        const result1 = isPlainObject( obj, true, mockFalse );
        expect( result1 ).toBe( false );
        expect( mockFalse ).toHaveBeenCalledTimes( 1 );
        expect( mockFalse ).toHaveBeenNthCalledWith( 1, 1, "one", obj );

        const result2 = isPlainObject( obj, true, mockTrue );
        expect( result2 ).toBe( true );
        expect( mockTrue ).toHaveBeenCalledTimes( 3 );
        expect( mockTrue ).toHaveBeenNthCalledWith( 1, 1, "one", obj );
        expect( mockTrue ).toHaveBeenNthCalledWith( 2, 2, "two", obj );
        expect( mockTrue ).toHaveBeenNthCalledWith( 3, 3, "three", obj );

    } );

} );