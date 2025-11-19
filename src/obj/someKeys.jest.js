/**
 * Object Tests
 * @group obj
 */
import { describe, test, expect } from "@jest/globals";
import someKeys from "./someKeys.js";
import isNumber from "../type-checks/isNumber.js";
import isString from "../type-checks/isString.js";

describe( 'someKeys', () => {

    test( "expect no parameters to return false", () => {
        expect( someKeys() ).toEqual( false );
    } );

    test( "expect a non record target to return false", () => {
        expect( someKeys( undefined ) ).toEqual( false );
        expect( someKeys( null ) ).toEqual( false );
        expect( someKeys( 1 ) ).toEqual( false );
        expect( someKeys( "" ) ).toEqual( false );
        expect( someKeys( new Date() ) ).toEqual( false );
    } );

    test( "expect an empty record to return false", () => {
        expect( someKeys( {} ) ).toEqual( false );
    } );

    test( "expect a record with any keys to return true", () => {
        const target = { prop: "" };
        expect( someKeys( target ) ).toEqual( true );
    } );

    test( "expect invalid keys to return false", () => {
        const target = { prop: "" };
        expect( someKeys( target, "doesNotExist" ) ).toEqual( false );
        expect( someKeys( target, [ "doesNotExist" ] ) ).toEqual( false );
        expect( someKeys( target, { prop: isNumber } ) ).toEqual( false );
    } );

    test( "expect valid keys to return true", () => {
        const target = { prop1: "", prop2: 1 };
        expect( someKeys( target, "prop1" ) ).toEqual( true );
        expect( someKeys( target, "prop2" ) ).toEqual( true );
        expect( someKeys( target, [ "prop1" ] ) ).toEqual( true );
        expect( someKeys( target, [ "prop2" ] ) ).toEqual( true );
        expect( someKeys( target, [ "prop1", "prop2" ] ) ).toEqual( true );
        expect( someKeys( target, { prop1: isString } ) ).toEqual( true );
        expect( someKeys( target, { prop2: isNumber } ) ).toEqual( true );
        expect( someKeys( target, { prop1: isString, prop2: isNumber } ) ).toEqual( true );
    } );

    test( "testing partial", () => {
        const target = { topLeft: "with-value" };
        const keys = {
            topLeft: val => isString( val, true ),
            topRight: val => isString( val, true ),
            bottomRight: val => isString( val, true ),
            bottomLeft: val => isString( val, true )
        };
        expect( someKeys( target, keys ) ).toBe( true );
    } );

} );