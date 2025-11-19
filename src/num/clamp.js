import isNumber from "../type-checks/isNumber.js";

const clamp = ( value, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER ) => {
    min = isNumber( min ) ? min : Number.MIN_SAFE_INTEGER;
    max = isNumber( max ) ? max : Number.MAX_SAFE_INTEGER;
    if ( isNumber( value ) ) {
        if ( value < min ) return min;
        if ( value > max ) return max;
        return value;
    }
    return min;
};

export default clamp;