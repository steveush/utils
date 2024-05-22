/**
 * String Tests
 * @group str
 */
import { describe, test, expect } from "@jest/globals";
import toPascalCase from "./toPascalCase.js";

describe( "toPascalCase", () => {

    test( "expect no parameters to return an empty string", () => {
        expect( toPascalCase() ).toEqual( "" );
    } );

    test( "expect PascalCase strings to remain unchanged", () => {
        const str1 = "TestPascalCase";
        expect( toPascalCase( str1 ) ).toEqual( str1 );
        const str2 = "SomeProp";
        expect( toPascalCase( str2 ) ).toEqual( str2 );
        const str3 = "PrefixCss";
        expect( toPascalCase( str3 ) ).toEqual( str3 );
        const str4 = "PrefixCssSuffix";
        expect( toPascalCase( str4 ) ).toEqual( str4 );
        const str5 = "CssSuffix";
        expect( toPascalCase( str5 ) ).toEqual( str5 );
        const str6 = "PrefixCSS";
        expect( toPascalCase( str6, [ "CSS" ] ) ).toEqual( str6 );
        const str7 = "PrefixCSSSuffix";
        expect( toPascalCase( str7, [ "CSS" ] ) ).toEqual( str7 );
        const str8 = "CSSSuffix";
        expect( toPascalCase( str8, [ "CSS" ] ) ).toEqual( str8 );
    } );

    test( "expect strings to be changed to PascalCase", () => {
        expect( toPascalCase( "test-pascal-case" ) ).toEqual( "TestPascalCase" );
        expect( toPascalCase( "some-prop" ) ).toEqual( "SomeProp" );
        expect( toPascalCase( "prefix-css" ) ).toEqual( "PrefixCss" );
        expect( toPascalCase( "prefix-css-suffix" ) ).toEqual( "PrefixCssSuffix" );
        expect( toPascalCase( "css-suffix" ) ).toEqual( "CssSuffix" );
    } );

    test( "expect strings with abbreviations to be changed correctly to PascalCase", () => {
        const abbreviations = [ "CSS" ];
        expect( toPascalCase( "prefix-css", abbreviations ) ).toEqual( "PrefixCSS" );
        expect( toPascalCase( "prefix-css-suffix", abbreviations ) ).toEqual( "PrefixCSSSuffix" );
        expect( toPascalCase( "css-suffix", abbreviations ) ).toEqual( "CSSSuffix" );
    } );

    test( "expect strings containing punctuation to be converted to PascalCase", () => {
        expect( toPascalCase( "This is a sentence" ) ).toEqual( "ThisIsASentence" );
        expect( toPascalCase( "This is a Sentence With,'@*!#$%.;' some punctuation!" ) ).toEqual( "ThisIsASentenceWithSomePunctuation" );
    } );

} );