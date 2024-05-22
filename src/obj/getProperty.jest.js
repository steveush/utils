/**
 * Object Tests
 * @group obj
 */
import { describe, expect, jest, test } from "@jest/globals";
import getProperty from "./getProperty.js";

describe( "getProperty", () => {

    test( "expect no parameters to not throw", () => {
        expect( () => getProperty() ).not.toThrow();
    } );

    test( "expect no parameters to return undefined", () => {
        expect( getProperty() ).toBeUndefined();
    } );

    test( "expect invalid parameters to return undefined", () => {
        expect( getProperty( null, null ) ).toBeUndefined();
    } );

    test( "expect non-existent path to return undefined", () => {
        expect( getProperty( {}, "never" ) ).toBeUndefined();
        expect( getProperty( [], "never" ) ).toBeUndefined();
    } );

    test( "expect valid object paths to return values", () => {
        const obj = {
            prop: "root.prop",
            child: {
                prop: "root.child.prop",
                child: {
                    prop: "root.child.child.prop"
                }
            }
        };
        expect( getProperty( obj, "prop" ) ).toBe( obj.prop );
        expect( getProperty( obj, "child" ) ).toBe( obj.child ); // same ref
        expect( getProperty( obj, "child.prop" ) ).toBe( obj.child.prop );
        expect( getProperty( obj, "child.child" ) ).toBe( obj.child.child ); // same ref
        expect( getProperty( obj, "child.child.prop" ) ).toBe( obj.child.child.prop );
    } );

    test( "expect valid array paths to return values", () => {
        const arr = [
            "[0]",
            [
                "[1][0]",
                [
                    "[1][1][0]"
                ]
            ]
        ]
        expect( getProperty( arr, "[0]" ) ).toBe( arr[ 0 ] );
        expect( getProperty( arr, "[1]" ) ).toBe( arr[ 1 ] ); // same ref
        expect( getProperty( arr, "[1][0]" ) ).toBe( arr[ 1 ][ 0 ] );
        expect( getProperty( arr, "[1][1]" ) ).toBe( arr[ 1 ][ 1 ] ); // same ref
        expect( getProperty( arr, "[1][1][0]" ) ).toBe( arr[ 1 ][ 1 ][ 0 ] );
    } );

    test( "expect a combination of valid object & array paths to return values", () => {
        // with array as root
        const children = [ {
            prop: "children[0].prop",
            children: [ {
                prop: "children[0].children[0].prop"
            } ]
        }, {
            prop: "children[1].prop",
            children: [ {
                prop: "children[1].children[0].prop"
            } ]
        } ];
        expect( getProperty( children, "[0].prop" ) ).toBe( children[ 0 ].prop );
        expect( getProperty( children, "[1].prop" ) ).toBe( children[ 1 ].prop );
        expect( getProperty( children, "[0].children" ) ).toBe( children[ 0 ].children );
        expect( getProperty( children, "[1].children" ) ).toBe( children[ 1 ].children );
        expect( getProperty( children, "[0].children[0]" ) ).toBe( children[ 0 ].children[ 0 ] );
        expect( getProperty( children, "[1].children[0]" ) ).toBe( children[ 1 ].children[ 0 ] );
        expect( getProperty( children, "[0].children[0].prop" ) ).toBe( children[ 0 ].children[ 0 ].prop );
        expect( getProperty( children, "[1].children[0].prop" ) ).toBe( children[ 1 ].children[ 0 ].prop );

        // with object as root
        const obj = {
            children: children
        };
        expect( getProperty( obj, "children" ) ).toBe( children );
        expect( getProperty( obj, "children[0].prop" ) ).toBe( children[ 0 ].prop );
        expect( getProperty( obj, "children[1].prop" ) ).toBe( children[ 1 ].prop );
        expect( getProperty( obj, "children[0].children" ) ).toBe( children[ 0 ].children );
        expect( getProperty( obj, "children[1].children" ) ).toBe( children[ 1 ].children );
        expect( getProperty( obj, "children[0].children[0]" ) ).toBe( children[ 0 ].children[ 0 ] );
        expect( getProperty( obj, "children[1].children[0]" ) ).toBe( children[ 1 ].children[ 0 ] );
        expect( getProperty( obj, "children[0].children[0].prop" ) ).toBe( children[ 0 ].children[ 0 ].prop );
        expect( getProperty( obj, "children[1].children[0].prop" ) ).toBe( children[ 1 ].children[ 0 ].prop );

    } );

} );