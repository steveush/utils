/**
 * Type check tests
 * @group type-checks
 */
import { beforeEach, describe, expect, jest, test } from "@jest/globals";
import isObject from "./isObject.js";
import { expectTypeToBe } from "#jest-helpers";

describe( "isObject", () => {

    expectTypeToBe( isObject, {
        argArray: true,
        argArrayNotEmpty: true,
        argFunction: true,
        argObject: true,
        argObjectNotEmpty: true,
        argPlain: true,
        argPlainNotEmpty: true,
        argRegExp: true
    }, false );

} );

describe( "isObject:notEmpty", () => {

    expectTypeToBe( value => isObject( value, true ), {
        argArrayNotEmpty: true,
        argObjectNotEmpty: true,
        argPlainNotEmpty: true
    }, false );

} );

describe( "isObject:predicate", () => {

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

        const result1 = isObject( {}, false, mockFalse );
        expect( result1 ).toBe( true );
        expect( mockFalse ).not.toBeCalled();

        const result2 = isObject( [], true, mockTrue );
        expect( result2 ).toBe( false );
        expect( mockTrue ).not.toBeCalled();

    } );

    test( "expect the predicate to be executed once per object entry until complete or false is returned", () => {

        const obj = { one: 1, two: 2, three: 3 };
        const result1 = isObject( obj, true, mockFalse );
        expect( result1 ).toBe( false );
        expect( mockFalse ).toHaveBeenCalledTimes( 1 );
        expect( mockFalse ).toHaveBeenNthCalledWith( 1, 1, "one", obj );

        const result2 = isObject( obj, true, mockTrue );
        expect( result2 ).toBe( true );
        expect( mockTrue ).toHaveBeenCalledTimes( 3 );
        expect( mockTrue ).toHaveBeenNthCalledWith( 1, 1, "one", obj );
        expect( mockTrue ).toHaveBeenNthCalledWith( 2, 2, "two", obj );
        expect( mockTrue ).toHaveBeenNthCalledWith( 3, 3, "three", obj );

    } );

    test( "expect the predicate to be executed once per array entry until complete or false is returned", () => {

        const arr = [ "one", "two", "three" ];
        const result1 = isObject( arr, true, mockFalse );
        expect( result1 ).toBe( false );
        expect( mockFalse ).toHaveBeenCalledTimes( 1 );
        expect( mockFalse ).toHaveBeenNthCalledWith( 1, "one", "0", arr );

        const result2 = isObject( arr, true, mockTrue );
        expect( result2 ).toBe( true );
        expect( mockTrue ).toHaveBeenCalledTimes( 3 );
        expect( mockTrue ).toHaveBeenNthCalledWith( 1, "one", "0", arr );
        expect( mockTrue ).toHaveBeenNthCalledWith( 2, "two", "1", arr );
        expect( mockTrue ).toHaveBeenNthCalledWith( 3, "three", "2", arr );

    } );

} );