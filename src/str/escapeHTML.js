import isString from "../type-checks/isString.js";

const CHAR_TO_ENTITY_MAP = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
};

const CHAR_REGEX = /[&<>"']/g;

const escapeHTML = str => isString( str ) ? str.replace( CHAR_REGEX, char => CHAR_TO_ENTITY_MAP[ char ] ) : "";

export default escapeHTML;