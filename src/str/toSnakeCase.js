import toPartsLowerCase from "./toPartsLowerCase.js";

const toSnakeCase = str => toPartsLowerCase( str ).join( "_" );

export default toSnakeCase;