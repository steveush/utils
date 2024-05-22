/**
 * Object Tests
 * @group obj
 */
import { describe, test, expect } from "@jest/globals";
import hasKeys from "./hasKeys.js";
import isNumber from "../type-checks/isNumber.js";
import isString from "../type-checks/isString.js";

describe( 'hasKeys', () => {

    test( "expect no parameters to return false", () => {
        expect( hasKeys() ).toEqual( false );
    } );

    test( "expect a non record target to return false", () => {
        expect( hasKeys( undefined ) ).toEqual( false );
        expect( hasKeys( null ) ).toEqual( false );
        expect( hasKeys( 1 ) ).toEqual( false );
        expect( hasKeys( "" ) ).toEqual( false );
        expect( hasKeys( new Date() ) ).toEqual( false );
    } );

    test( "expect an empty record to return false", () => {
        expect( hasKeys( {} ) ).toEqual( false );
    } );

    test( "expect a record with any keys to return true", () => {
        const target = { prop: "" };
        expect( hasKeys( target ) ).toEqual( true );
    } );

    test( "expect invalid keys to return false", () => {
        const target = { prop: "" };
        expect( hasKeys( target, "doesNotExist" ) ).toEqual( false );
        expect( hasKeys( target, [ "doesNotExist" ] ) ).toEqual( false );
        expect( hasKeys( target, { prop: isNumber } ) ).toEqual( false );
    } );

    test( "expect valid keys to return true", () => {
        const target = { prop1: "", prop2: 1 };
        expect( hasKeys( target, "prop1" ) ).toEqual( true );
        expect( hasKeys( target, "prop2" ) ).toEqual( true );
        expect( hasKeys( target, [ "prop1" ] ) ).toEqual( true );
        expect( hasKeys( target, [ "prop2" ] ) ).toEqual( true );
        expect( hasKeys( target, [ "prop1", "prop2" ] ) ).toEqual( true );
        expect( hasKeys( target, { prop1: isString } ) ).toEqual( true );
        expect( hasKeys( target, { prop2: isNumber } ) ).toEqual( true );
        expect( hasKeys( target, { prop1: isString, prop2: isNumber } ) ).toEqual( true );
    } );

} );