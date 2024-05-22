/**
 * Object Tests
 * @group obj
 */
import { describe, test, expect } from "@jest/globals";
import merge from "./merge.js";

describe( 'merge', () => {

    test( "expect no parameters to not throw", () => {
        expect( () => merge() ).not.toThrow();
    } );

    test( "expect non-object target to return new empty object", () => {
        expect( merge( undefined ) ).toEqual({});
        expect( merge( null ) ).toEqual({});
        expect( merge( [] ) ).toEqual({});
        expect( merge( 1 ) ).toEqual({});
    } );

    test( "expect the original target to be returned", () => {
        const target1_in = { prop1: "" };
        const target1_out = merge( target1_in );

        expect( target1_out ).toBe( target1_in ); // original returned

        const target2_in = { prop1: "" };
        const source2_in = { prop2: 2 };
        const target2_out = merge( target2_in, source2_in );
        expect( target2_out ).toBe( target2_in ); // original returned
    } );

    test( "expect objects to be merged", () => {
        const target_in = { prop1: "", last: "target_in" };
        const source1_in = { prop2: 2, last: "source1_in" };
        const source2_in = { prop3: false, last: "source2_in" };
        const target_out = merge( target_in, source1_in, source2_in );
        expect( target_out ).toBe( target_in ); // original returned
        expect( target_out ).toEqual( { prop1: "", prop2: 2, prop3: false, last: "source2_in" } );
    } );

    test( "expect child objects to be merged", () => {
        const target_in = { prop1: "", child: { prop1: "", last: "target_in" } };
        const source1_in = { prop2: 2, child: { prop2: 2, last: "source1_in" } };
        const source2_in = { prop3: false, child: { prop3: false, last: "source2_in" } };
        const target_out = merge( target_in, source1_in, source2_in );
        expect( target_out ).toBe( target_in ); // original returned
        expect( target_out ).toEqual( { prop1: "", prop2: 2, prop3: false, child: { prop1: "", prop2: 2, prop3: false, last: "source2_in" } } );
    } );

    test( "expect child arrays to be replaced", () => {
        const target_in = { prop1: "", child: ["one","two"] };
        const source1_in = { prop2: "", child: ["two","three"] };
        const source2_in = { prop3: "", child: ["three","four"] };
        const target_out = merge( target_in, source1_in, source2_in );
        expect( target_in ).toBe( target_out ); // original returned
        expect( target_out ).toEqual( { prop1: "", prop2: "", prop3: "", child: ["three","four"] } );
    } );

} );