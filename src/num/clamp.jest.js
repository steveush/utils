/**
 * Number Tests
 * @group num
 */
import { describe, test, expect } from "@jest/globals";
import clamp from "./clamp.js";

describe( "clamp", () => {

    test( "expect invalid parameters to return the min value", () => {
        expect( clamp() ).toBe( Number.MIN_SAFE_INTEGER );
        expect( clamp( undefined, undefined ) ).toBe( Number.MIN_SAFE_INTEGER );
        expect( clamp( undefined, false ) ).toBe( Number.MIN_SAFE_INTEGER );
    } );

    test( "expect values outside the range to return either the min or max value", () => {
        expect( clamp( -1, 0, 1 ) ).toBe( 0 );
        expect( clamp( 2, 0, 1 ) ).toBe( 1 );
    } );

} );