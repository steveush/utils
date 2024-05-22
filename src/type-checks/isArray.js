import isFunction from "./isFunction.js";

const isArray = ( value, notEmpty = false, predicate ) => {
    if ( Array.isArray( value ) && ( !notEmpty || ( notEmpty && value.length > 0 ) ) ) {
        return isFunction( predicate ) ? value.every( predicate ) : true;
    }
    return false;
};

export default isArray;