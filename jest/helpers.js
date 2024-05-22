import { describe, expect, test } from "@jest/globals";

/**
 * @template {boolean} T
 * @typedef {{argUndefined: T, argNull: T, argArray: T, argArrayNotEmpty: T, argBoolean: T, argFunction: T, argNumber: T, argObject: T, argObjectNotEmpty: T, argPlain: T, argPlainNotEmpty: T, argRegExp: T, argString: T, argStringNotEmpty: T, argSymbol: T}} TypeResults
 */

/**
 *
 * @template {boolean} T
 * @param {Partial<TypeResults<T>>} expected
 * @param {T} base
 * @return {TypeResults<T>}
 */
const typeResults = ( expected, base ) => {
    return Object.assign( {
        argUndefined: base,
        argNull: base,
        argArray: base,
        argArrayNotEmpty: base,
        argBoolean: base,
        argFunction: base,
        argNumber: base,
        argObject: base,
        argObjectNotEmpty: base,
        argPlain: base,
        argPlainNotEmpty: base,
        argRegExp: base,
        argString: base,
        argStringNotEmpty: base,
        argSymbol: base
    }, expected );
};

/**
 *
 * @template T
 * @param {TypeResults<T>} expected
 * @param {function(given: any, expected: T):void} callback
 * @param {function(type: string, expected: T):string} name
 */
const forEachType = ( expected, callback, name = ( type, expected ) => `to be ${ String( expected ) } given ${ type }` ) => {

    test( name( "undefined", expected.argUndefined ), () => {
        callback( undefined, expected.argUndefined );
    } );

    test( name( "null", expected.argNull ), () => {
        callback( null, expected.argNull );
    } );

    test( name( "an array", expected.argArray ), () => {
        callback( [], expected.argArray );
    } );

    test( name( "a non-empty array", expected.argArrayNotEmpty ), () => {
        callback( [1,2,3], expected.argArrayNotEmpty );
    } );

    test( name( "a boolean", expected.argBoolean ), () => {
        callback( false, expected.argBoolean );
        callback( Boolean( "" ), expected.argBoolean );
    } );

    test( name( "a function", expected.argFunction ), () => {
        callback( () => {
        }, expected.argFunction );
        callback( function() {
        }, expected.argFunction );
        const named1 = () => {
        };
        callback( named1, expected.argFunction );
        function named2() {
        }
        callback( named2, expected.argFunction );
    } );

    test( name( "a number", expected.argNumber ), () => {
        callback( 0, expected.argNumber );
        callback( Number( true ), expected.argNumber );
    } );

    test( name( "an object", expected.argObject ), () => {
        callback( new Error(), expected.argObject );
        callback( new Date(), expected.argObject );
    } );

    test( name( "a non-empty object", expected.argObjectNotEmpty ), () => {
        callback( document, expected.argObjectNotEmpty );
    } );

    test( name( "a plain object", expected.argPlain ), () => {
        callback( {}, expected.argPlain );
        callback( Object.create( null ), expected.argPlain );
    } );

    test( name( "a non-empty plain object", expected.argPlainNotEmpty ), () => {
        callback( { prop: "" }, expected.argPlainNotEmpty );
    } );

    test( name( "a regular expression", expected.argRegExp ), () => {
        callback( /inline/i, expected.argRegExp );
        callback( new RegExp("constructed", "i"), expected.argRegExp );
    } );

    test( name( "a string", expected.argString ), () => {
        callback( "", expected.argString );
        callback( String(), expected.argString );
    } );

    test( name( "a non-empty string", expected.argStringNotEmpty ), () => {
        callback( "value", expected.argStringNotEmpty );
        callback( String( false ), expected.argStringNotEmpty );
    } );

    test( name( "a symbol", expected.argSymbol ), () => {
        callback( Symbol.toStringTag, expected.argSymbol );
    } );

};

/**
 * Jest helper to run multiple tests, with a predefined set of inputs, against a single type-check function.
 * @param {function(value: any):boolean} typeCheckFn
 * @param {Partial<TypeResults<boolean>>} expected
 * @param {boolean} [base=false]
 */
export const expectTypeToBe = ( typeCheckFn, expected, base = false ) => {
    expected = typeResults( expected, base );
    describe( `Expected result...`, () => {
        forEachType( expected, ( given, expected ) => expect( typeCheckFn( given ) ).toBe( expected ) );
    } );
};