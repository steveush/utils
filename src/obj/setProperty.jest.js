/**
 * Object Tests
 * @group obj
 */
import { describe, expect, jest, test } from "@jest/globals";
import setProperty from "./setProperty.js";

describe( "setProperty", () => {

    test( "expect no parameters to not throw", () => {
        expect( () => setProperty() ).not.toThrow();
    } );

    test( "expect existing object paths to be set", () => {
        const obj = {
            prop: "prop",
            child: {
                prop: "child.prop",
                child: {
                    prop: "child.child.prop"
                }
            }
        };
        setProperty( obj, "prop", "updated" );
        expect( obj.prop ).toBe( "updated" );
        setProperty( obj, "never", "never" );
        expect( obj.never ).toBeUndefined();

        setProperty( obj, "child.prop", "updated" );
        expect( obj.child.prop ).toBe( "updated" );
        setProperty( obj, "child.never", "never" );
        expect( obj.child.never ).toBeUndefined();

        setProperty( obj, "child.child.prop", "updated" );
        expect( obj.child.child.prop ).toBe( "updated" );
        setProperty( obj, "child.child.never", "never" );
        expect( obj.child.child.never ).toBeUndefined();
    } );

    test( "expect missing object paths to be created", () => {
        const obj = {};
        setProperty( obj, "prop", "yes", true );
        expect( obj[ "prop" ] ).toBe( "yes" );
        const obj_value = { created: "yes" };
        setProperty( obj, "obj_prop", obj_value, true );
        expect( obj[ "obj_prop" ] ).toBe( obj_value );
        setProperty( obj, "child.prop", "yes", true );
        expect( obj[ "child" ] ).toEqual( { prop: "yes" } );
    } );

} );