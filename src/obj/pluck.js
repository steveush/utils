import isFunction from "../type-checks/isFunction.js";
import isArray from "../type-checks/isArray.js";
import isString from "../type-checks/isString.js";
import isObject from "../type-checks/isObject.js";

const pluck = ( obj, keys ) => {
    if ( isObject( obj ) ) {
        let predicate = null;
        if ( isString( keys ) ) predicate = ( [ key ] ) => key === keys;
        if ( isArray( keys ) ) predicate = ( [ key ] ) => keys.includes( key );
        if ( isFunction( keys ) ) predicate = ( [ key, value ] ) => keys( value, key, obj );
        if ( predicate !== null ) {
            return Object.fromEntries( Object.entries( obj ).filter( predicate ) );
        }
    }
    return {};
};

export default pluck;