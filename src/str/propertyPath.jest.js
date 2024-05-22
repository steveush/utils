/**
 * String Tests
 * @group str
 */
import { describe, test, expect } from "@jest/globals";
import propertyPath from "./propertyPath.js";

describe( "propertyPath", () => {

    test( "expect no parameters to return an empty string", () => {
        expect( propertyPath() ).toEqual( "" );
    } );

    test( "expect paths with no array notation to remain unchanged", () => {
        const path1 = "prop";
        expect( propertyPath( path1 ) ).toEqual( path1 );
        const path2 = "prop.child";
        expect( propertyPath( path2 ) ).toEqual( path2 );
        const path3 = "prop.0with.num3";
        expect( propertyPath( path3 ) ).toEqual( path3 );
    } );

    test( "expect paths with array notation to be changed", () => {
        expect( propertyPath( "[0]" ) ).toEqual( "0" );
        expect( propertyPath( "[0].prop" ) ).toEqual( "0.prop" );
        expect( propertyPath( "prop[0]" ) ).toEqual( "prop.0" );
        expect( propertyPath( "prop[0].child" ) ).toEqual( "prop.0.child" );
        expect( propertyPath( "prop[0].child[1]" ) ).toEqual( "prop.0.child.1" );
    } );

} );