import isString from "../type-checks/isString.js";
import isArray from "../type-checks/isArray.js";
import toPartsLowerCase from "./toPartsLowerCase.js";

const toCamelCase = ( str, uppercase = [], force = false ) => {
    if ( isString( str ) ) {
        uppercase = isArray( uppercase, true, a => isString( a ) ) ? uppercase : [];
        return toPartsLowerCase( str ).map( ( part, i ) => {
            const first = i === 0;
            if ( ( !first || force ) && uppercase.some( a => a.toLocaleLowerCase() === part ) ) {
                return part.toLocaleUpperCase();
            }
            if ( !first ) {
                return part.charAt( 0 ).toLocaleUpperCase() + part.substring( 1 );
            }
            return part;
        } ).join( "" );
    }
    return "";
};

export default toCamelCase;