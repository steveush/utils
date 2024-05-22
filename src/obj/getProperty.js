import propertyPath from "../str/propertyPath.js";
import bisect from "../str/bisect.js";
import isArray from "../type-checks/isArray.js";
import isPlainObject from "../type-checks/isPlainObject.js";
import isString from "../type-checks/isString.js";

const getProperty = ( target, path ) => {
    if ( isArray( target ) || isPlainObject( target ) ) {
        const normalized = propertyPath( path );
        const [ prop, remainder ] = bisect( normalized, "." );
        if ( isString( prop, true ) ) {
            const value = target[ prop ];
            if ( isString( remainder, true ) ) {
                if ( isArray( value ) || isPlainObject( value ) ) {
                    return getProperty( value, remainder );
                }
                return;
            }
            return value;
        }
    }
};

export default getProperty;