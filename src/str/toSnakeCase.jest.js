/**
 * String Tests
 * @group str
 */
import { describe, test, expect } from "@jest/globals";
import toSnakeCase from "./toSnakeCase.js";

describe( "toSnakeCase", () => {

    test( "expect no parameters to return an empty string", () => {
        expect( toSnakeCase() ).toEqual( "" );
    } );

    test( "expect snake_case strings to remain unchanged", () => {
        const str1 = "test_camel_case";
        expect( toSnakeCase( str1 ) ).toEqual( str1 );
        const str2 = "some_prop";
        expect( toSnakeCase( str2 ) ).toEqual( str2 );
    } );

    test( "expect strings to be changed to snake_case", () => {
        expect( toSnakeCase( "testSnakeCase" ) ).toEqual( "test_snake_case" );
        expect( toSnakeCase( "someProp" ) ).toEqual( "some_prop" );
        expect( toSnakeCase( "prefixCSS" ) ).toEqual( "prefix_css" );
        expect( toSnakeCase( "prefixCSSSuffix" ) ).toEqual( "prefix_css_suffix" );
        expect( toSnakeCase( "CSSSuffix" ) ).toEqual( "css_suffix" );
    } );

    test( "expect strings containing punctuation to be converted to snake_case", () => {
        expect( toSnakeCase( "This is a sentence" ) ).toEqual( "this_is_a_sentence" );
        expect( toSnakeCase( "This is a Sentence's With,'@*!#$%.;' some punctuation!" ) ).toEqual( "this_is_a_sentences_with_some_punctuation" );
    } );

    test( "expect strings containing either possessive or contraction apostrophes to to be converted to snake_case", () => {
        expect( toSnakeCase( "The player's locker." ) ).toEqual( "the_players_locker" );
        expect( toSnakeCase( "The players' lockers." ) ).toEqual( "the_players_lockers" );
    } );

} );