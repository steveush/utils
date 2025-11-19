import isNumber from "../type-checks/isNumber.js";


const isNumberWithin = ( value, min, max ) => isNumber( value ) && value >= min && value <= max;

export default isNumberWithin;