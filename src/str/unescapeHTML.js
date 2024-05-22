import isString from "../type-checks/isString.js";

const ENTITY_TO_CHAR_MAP = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&#039;': "'" // alternate single quote
};

const ENTITY_REGEX = /&(?:amp|lt|gt|quot|#(0+)?39);/g;

const unescapeHTML = str => isString( str ) ? str.replace( ENTITY_REGEX, entity => ENTITY_TO_CHAR_MAP[ entity ] ) : "";

export default unescapeHTML;