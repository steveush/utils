/**
 * Object Tests
 * @group obj
 */
import { describe, test, expect, jest, beforeEach } from "@jest/globals";
import pluck from "./pluck.js";

describe( 'pluck', () => {

    const mockFalse = jest.fn( ( value, key, obj ) => false );
    const mockTrue = jest.fn( ( value, key, obj ) => true );

    beforeEach( () => {
        mockFalse.mockClear();
        mockTrue.mockClear();
    } );

    test( "expect no parameters to return an empty object", () => {
        expect( pluck() ).toEqual( {} );
    } );

    test( "expect a non object target to return an empty object", () => {
        expect( pluck( undefined ) ).toEqual( {} );
        expect( pluck( null ) ).toEqual( {} );
        expect( pluck( 1 ) ).toEqual( {} );
        expect( pluck( "" ) ).toEqual( {} );
        expect( pluck( new Date() ) ).toEqual( {} );
    } );

    test( "expect an empty object to return an empty object", () => {
        expect( pluck( {}, mockTrue ) ).toEqual( {} );
        expect( mockTrue ).not.toBeCalled();
    } );

    test( "expect an empty object if no keys are supplied", () => {
        const target = { prop1: "string", prop2: true, prop3: 3 };
        expect( pluck( target ) ).toEqual( {} );
    } );

    test( "expect an empty object if the supplied keys string does not exist", () => {
        const target = { prop1: "string", prop2: true, prop3: 3 };
        expect( pluck( target, "" ) ).toEqual( {} );
        expect( pluck( target, "never" ) ).toEqual( {} );
    } );

    test( "expect a new object containing a single key-value pair if the supplied keys string exists", () => {
        const target = { prop1: "string", prop2: true, prop3: 3 };
        expect( pluck( target, "prop1" ) ).toEqual( { prop1: "string" } );
        expect( pluck( target, "prop2" ) ).toEqual( { prop2: true } );
        expect( pluck( target, "prop3" ) ).toEqual( { prop3: 3 } );
    } );

    test( "expect an empty object if the supplied keys array matched no properties", () => {
        const target = { prop1: "string", prop2: true, prop3: 3 };
        expect( pluck( target, [] ) ).toEqual( {} );
        expect( pluck( target, [ "never" ] ) ).toEqual( {} );
        expect( pluck( target, [ false ] ) ).toEqual( {} );
    } );

    test( "expect a new object containing key-value pairs that matched the supplied keys array", () => {
        const target = { prop1: "string", prop2: true, prop3: 3 };
        expect( pluck( target, [ "prop1" ] ) ).toEqual( { prop1: "string" } );
        expect( pluck( target, [ "prop1", "prop2" ] ) ).toEqual( { prop1: "string", prop2: true } );
        expect( pluck( target, [ "prop1", "prop3" ] ) ).toEqual( { prop1: "string", prop3: 3 } );
    } );

    test( "expect an empty object if the keys predicate matched no properties", () => {
        const target = { prop1: "string", prop2: true, prop3: 3 };
        expect( pluck( target, mockFalse ) ).toEqual( {} );
        expect( mockFalse ).toBeCalledTimes( 3 );
        expect( mockFalse ).toHaveBeenNthCalledWith( 1, "string", "prop1", target );
        expect( mockFalse ).toHaveBeenNthCalledWith( 2, true, "prop2", target );
        expect( mockFalse ).toHaveBeenNthCalledWith( 3, 3, "prop3", target );
    } );

    test( "expect a new object containing key-value pairs that matched the supplied keys predicate", () => {
        const target = { prop1: "string", prop2: true, prop3: 3 };
        const plucked = pluck( target, mockTrue );
        expect( plucked ).toEqual( { prop1: "string", prop2: true, prop3: 3 } );
        expect( plucked ).not.toBe( target );
        expect( mockTrue ).toBeCalledTimes( 3 );
        expect( mockTrue ).toHaveBeenNthCalledWith( 1, "string", "prop1", target );
        expect( mockTrue ).toHaveBeenNthCalledWith( 2, true, "prop2", target );
        expect( mockTrue ).toHaveBeenNthCalledWith( 3, 3, "prop3", target );
    } );

} );