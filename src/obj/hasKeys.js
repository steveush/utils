import isPlainObject from "../type-checks/isPlainObject.js";
import isUndefined from "../type-checks/isUndefined.js";
import isArray from "../type-checks/isArray.js";
import isFunction from "../type-checks/isFunction.js";
import isString from "../type-checks/isString.js";

const hasKeys = ( target, keys ) => {
    if ( isPlainObject( target ) ) {
        const targetKeys = Object.keys( target );
        if ( isUndefined( keys ) ) return targetKeys.length > 0;
        if ( isString( keys ) ) return targetKeys.includes( keys );
        if ( isArray( keys ) ) return keys.every( key => targetKeys.includes( key ) );
        if ( isPlainObject( keys ) ) {
            return Object.entries( keys ).every( ( [ key, callback ] ) => {
                if ( targetKeys.includes( key ) && isFunction( callback ) ) {
                    return callback( target[ key ] );
                }
                return false;
            } );
        }
    }
    return false;
};

export default hasKeys;