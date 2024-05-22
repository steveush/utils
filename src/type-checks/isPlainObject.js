import isNonNullable from "./isNonNullable.js";
import isFunction from "./isFunction.js";

const isPlainObject = ( value, notEmpty = false, predicate ) => {
    if ( isNonNullable( value ) ) {
        const proto = Object.getPrototypeOf( value );
        if ( proto === null || proto.constructor === Object ) {
            const entries = Object.entries( value );
            if ( !notEmpty || ( notEmpty && entries.length > 0 ) ) {
                return isFunction( predicate )
                    ? entries.every( ( [ key, val ] ) => predicate( val, key, value ) )
                    : true;
            }
        }
    }
    return false;
};

export default isPlainObject;