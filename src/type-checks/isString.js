import toString from "../str/toString.js";
import isNonNullable from "./isNonNullable.js";

const isString = ( value, notEmpty = false ) => isNonNullable( value )
    && ( typeof value === "string" || toString( value ) === "[object String]" )
    && ( !notEmpty || ( notEmpty && value.trim().length > 0 ) );

export default isString;