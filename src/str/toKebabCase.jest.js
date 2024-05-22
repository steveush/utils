/**
 * String Tests
 * @group str
 */
import { describe, test, expect } from "@jest/globals";
import toKebabCase from "./toKebabCase.js";

describe( "toKebabCase", () => {

    test( "expect no parameters to return an empty string", () => {
        expect( toKebabCase() ).toEqual( "" );
    } );

    test( "expect kebab-case strings to remain unchanged", () => {
        const str1 = "test-camel-case";
        expect( toKebabCase( str1 ) ).toEqual( str1 );
        const str2 = "some-prop";
        expect( toKebabCase( str2 ) ).toEqual( str2 );
    } );

    test( "expect camelCase strings to be changed to kebab-case", () => {
        expect( toKebabCase( "testCamelCase" ) ).toEqual( "test-camel-case" );
        expect( toKebabCase( "someProp" ) ).toEqual( "some-prop" );
        expect( toKebabCase( "prefixCSS" ) ).toEqual( "prefix-css" );
        expect( toKebabCase( "prefixCSSSuffix" ) ).toEqual( "prefix-css-suffix" );
        expect( toKebabCase( "CSSSuffix" ) ).toEqual( "css-suffix" );
    } );

    test( "expect strings containing punctuation to be converted to kebab-case", () => {
        expect( toKebabCase( "This is a sentence" ) ).toEqual( "this-is-a-sentence" );
        expect( toKebabCase( "This is a Sentence's With,'@*!#$%.;' some punctuation!" ) ).toEqual( "this-is-a-sentences-with-some-punctuation" );
    } );

    test( "expect strings containing either possessive or contraction apostrophes to to be converted to kebab-case", () => {
        expect( toKebabCase( "The player's locker." ) ).toEqual( "the-players-locker" );
        expect( toKebabCase( "The players' lockers." ) ).toEqual( "the-players-lockers" );
    } );

} );