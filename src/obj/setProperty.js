import isUndefined from "../type-checks/isUndefined.js";
import propertyPath from "../str/propertyPath.js";
import bisect from "../str/bisect.js";
import isArray from "../type-checks/isArray.js";
import isPlainObject from "../type-checks/isPlainObject.js";
import isString from "../type-checks/isString.js";

const CREATE_ARRAY_REGEX = /^\d+($|\.)/;

const setProperty = ( target, path, value, create = false ) => {
    if ( isArray( target ) || isPlainObject( target ) ) {
        const normalized = propertyPath( path );
        const [ prop, remainder ] = bisect( normalized, "." );
        if ( isString( prop, true ) ) {
            if ( isString( remainder, true ) ) {
                if ( create && isUndefined( target[ prop ] ) ) {
                    // check if we should create an array or object by testing the remainder.
                    // if the remainder starts with a number then create an array
                    target[ prop ] = CREATE_ARRAY_REGEX.test( remainder ) ? [] : {};
                }
                if ( isArray( target[ prop ] ) || isPlainObject( target[ prop ] ) ) {
                    setProperty( target[ prop ], remainder, value, create );
                }
                return;
            }
            if ( create || !isUndefined( target[ prop ] ) )
                target[ prop ] = value;
        }
    }
};

export default setProperty;