/**
 * String Tests
 * @group str
 */
import { describe, test, expect } from "@jest/globals";
import escapeHTML from "./escapeHTML.js";

const CONTAINS_SPECIAL = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\`1234567890-=~!@#$%^&*()_+[]{};':",./<>?`;
const ESCAPED_SPECIAL = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\`1234567890-=~!@#$%^&amp;*()_+[]{};&#39;:&quot;,./&lt;&gt;?`;
const WITHOUT_SPECIAL = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\`1234567890-=~!@#$%^*()_+[]{};:,./?`;

describe( "escapeHTML", () => {

    test( "expect no parameters to return an empty string", () => {
        expect( escapeHTML() ).toEqual( "" );
    } );

    test( "expect strings without special characters to remain unchanged", () => {
        expect( escapeHTML( WITHOUT_SPECIAL ) ).toEqual( WITHOUT_SPECIAL );
        const str = "This could be any string that does not contain any of the special characters.";
        expect( escapeHTML( str ) ).toEqual( str );
    } );

    test( "expect special characters in strings to be changed to entities", () => {
        expect( escapeHTML( CONTAINS_SPECIAL ) ).toEqual( ESCAPED_SPECIAL );
        const str = `This has special characters that need escaping like & and ", also a HTML <script src='https://xss.org/bad.js'></script>`;
        expect( escapeHTML( str ) ).toEqual( `This has special characters that need escaping like &amp; and &quot;, also a HTML &lt;script src=&#39;https://xss.org/bad.js&#39;&gt;&lt;/script&gt;` );
    } );

} );