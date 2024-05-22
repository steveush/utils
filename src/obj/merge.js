import isArray from "../type-checks/isArray.js";
import isPlainObject from "../type-checks/isPlainObject.js";

const merge = ( target, ...source ) => {
    if ( !isPlainObject( target ) )
        target = {};

    for ( const src of source.filter( isPlainObject ) ) {
        for ( const [ key, value ] of Object.entries( src ) ) {
            if ( isPlainObject( value ) ) {
                target[ key ] = merge( target[ key ], value );
            } else if ( isArray( value ) ) {
                target[ key ] = value.slice();
            } else {
                target[ key ] = value;
            }
        }
    }
    return target;
};

export default merge;