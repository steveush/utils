import isString from "../type-checks/isString.js";
import isNumber from "../type-checks/isNumber.js";

const isNumberNotZero = value => {
    if ( isString( value, true ) ) {
        value = parseFloat( value );
    }
    if ( isNumber( value ) ) {
        return !isNaN( value ) && value !== 0;
    }
    return false;
};

export default isNumberNotZero;