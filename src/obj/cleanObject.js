import isUndefined from "../type-checks/isUndefined.js";
import isObject from "../type-checks/isObject.js";

const cleanObject = value => {
    if ( isObject( value ) ) {
        const defined = Object.entries( value ).filter( ( [ _, value ] ) => !isUndefined( value ) );
        if ( defined.length > 0 ) {
            return Object.fromEntries( defined );
        }
    }
    return undefined;
};

export default cleanObject;