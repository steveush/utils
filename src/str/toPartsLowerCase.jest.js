/**
 * String Tests
 * @group str
 */
import { describe, test, expect } from "@jest/globals";
import toPartsLowerCase from "./toPartsLowerCase.js";

describe( "toPartsLowerCase", () => {

    test( "expect no parameters to return an empty array", () => {
        expect( toPartsLowerCase() ).toEqual( [] );
    } );

    test( "expect strings to be split into component parts", () => {
        expect( toPartsLowerCase( "test-kebab-case" ) ).toEqual( [ "test", "kebab", "case" ] );
        expect( toPartsLowerCase( "testCamelCase" ) ).toEqual( [ "test", "camel", "case" ] );
        expect( toPartsLowerCase( "test_snake_case" ) ).toEqual( [ "test", "snake", "case" ] );
        expect( toPartsLowerCase( "TestPascalCase" ) ).toEqual( [ "test", "pascal", "case" ] );
    } );

    test( "expect abbreviations to be maintained", () => {
        expect( toPartsLowerCase( "prefixABBR" ) ).toEqual( [ "prefix", "abbr" ] );
        expect( toPartsLowerCase( "prefixABBRSuffix" ) ).toEqual( [ "prefix", "abbr", "suffix" ] );
        expect( toPartsLowerCase( "ABBRSuffix" ) ).toEqual( [ "abbr", "suffix" ] );
    } );

    test( "expect punctuation to be stripped", () => {
        expect( toPartsLowerCase( "no '!\"#$%&()*+,.\\/:;<=>?@\\[\\]^`{|}~ punctuation" ) ).toEqual( [ "no", "punctuation" ] );
    });

} );