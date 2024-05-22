import toPartsLowerCase from "./toPartsLowerCase.js";

const toKebabCase = str => toPartsLowerCase( str ).join( "-" );

export default toKebabCase;