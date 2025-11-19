import isArray from "../type-checks/isArray.js";
import isPlainObject from "../type-checks/isPlainObject.js";


const clone = target => {
    if ( isArray( target ) ) {
        return target.map( item => clone( item ) );
    }
    if ( isPlainObject( target ) ) {
        const result = {};
        for ( const [ key, value ] of Object.entries( target ) ) {
            result[ key ] = clone( value );
        }
        return result;
    }
    return target;
};

export default clone;