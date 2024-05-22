import isString from "../type-checks/isString.js";
import isArray from "../type-checks/isArray.js";
import toPartsLowerCase from "./toPartsLowerCase.js";

const toPascalCase = ( str, uppercase = [] ) => {
    if ( isString( str ) ) {
        uppercase = isArray( uppercase, true, a => isString( a ) ) ? uppercase : [];
        return toPartsLowerCase( str ).map( ( part, i ) => {
            if ( uppercase.some( a => a.toLocaleLowerCase() === part ) ) {
                return part.toLocaleUpperCase();
            }
            return part.charAt( 0 ).toLocaleUpperCase() + part.substring( 1 );
        } ).join( "" );
    }
    return "";
};

export default toPascalCase;