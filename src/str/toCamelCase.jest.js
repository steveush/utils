/**
 * String Tests
 * @group str
 */
import { describe, test, expect } from "@jest/globals";
import toCamelCase from "./toCamelCase.js";

describe( "toCamelCase", () => {

    test( "expect no parameters to return an empty string", () => {
        expect( toCamelCase() ).toEqual( "" );
    } );

    test( "expect camelCase strings to remain unchanged", () => {
        const str1 = "testCamelCase";
        expect( toCamelCase( str1 ) ).toEqual( str1 );
        const str2 = "someProp";
        expect( toCamelCase( str2 ) ).toEqual( str2 );
        const str3 = "prefixCss";
        expect( toCamelCase( str3 ) ).toEqual( str3 );
        const str4 = "prefixCssSuffix";
        expect( toCamelCase( str4 ) ).toEqual( str4 );
        const str5 = "cssSuffix";
        expect( toCamelCase( str5 ) ).toEqual( str5 );
        const str6 = "prefixCSS";
        expect( toCamelCase( str6, [ "CSS" ] ) ).toEqual( str6 );
        const str7 = "prefixCSSSuffix";
        expect( toCamelCase( str7, [ "CSS" ] ) ).toEqual( str7 );
        const str8 = "CSSSuffix";
        expect( toCamelCase( str8, [ "CSS" ], true ) ).toEqual( str8 );
        expect( toCamelCase( "CSSSuffix", [ "CSS" ] ) ).toEqual( "cssSuffix" );
    } );

    test( "expect strings to be changed to camelCase", () => {
        expect( toCamelCase( "test-camel-case" ) ).toEqual( "testCamelCase" );
        expect( toCamelCase( "some-prop" ) ).toEqual( "someProp" );
        expect( toCamelCase( "prefix-css" ) ).toEqual( "prefixCss" );
        expect( toCamelCase( "prefix-css-suffix" ) ).toEqual( "prefixCssSuffix" );
        expect( toCamelCase( "css-suffix" ) ).toEqual( "cssSuffix" );
    } );

    test( "expect strings with abbreviations to be changed correctly to camelCase", () => {
        const abbreviations = [ "CSS" ];
        expect( toCamelCase( "prefix-css", abbreviations ) ).toEqual( "prefixCSS" );
        expect( toCamelCase( "prefix-css-suffix", abbreviations ) ).toEqual( "prefixCSSSuffix" );
        expect( toCamelCase( "css-suffix", abbreviations ) ).toEqual( "cssSuffix" );
        expect( toCamelCase( "css-suffix", abbreviations, true ) ).toEqual( "CSSSuffix" );
    } );

    test( "expect strings containing punctuation to be converted to camelCase", () => {
        expect( toCamelCase( "This is a sentence" ) ).toEqual( "thisIsASentence" );
        expect( toCamelCase( "This is a Sentence With,'@*!#$%.;' some punctuation!" ) ).toEqual( "thisIsASentenceWithSomePunctuation" );
    } );

} );