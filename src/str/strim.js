import isString from "../type-checks/isString.js";
import isRegExp from "../type-checks/isRegExp.js";

const strim = ( str, separator ) => {
    if ( isString( str ) && ( isString( separator ) || isRegExp( separator ) ) ) {
        return str.split( separator )
            .map( value => value.trim() )
            .filter( Boolean );
    }
    return [];
};

export default strim;