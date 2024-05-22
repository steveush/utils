import isNonNullable from "./isNonNullable.js";
import isFunction from "./isFunction.js";

const isObject = ( value, notEmpty = false, predicate ) => {
    if ( isNonNullable( value ) && ( typeof value === "object" || typeof value === "function" ) ) {
        const entries = Object.entries( value );
        if ( !notEmpty || ( notEmpty && entries.length > 0 ) ) {
            return isFunction( predicate )
                ? entries.every( ( [ key, val ] ) => predicate( val, key, value ) )
                : true;
        }
    }
    return false;
};

export default isObject;