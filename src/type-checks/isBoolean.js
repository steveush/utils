import toString from "../str/toString.js";
import isNonNullable from "./isNonNullable.js";

const isBoolean = value => value === true || value === false || ( isNonNullable( value ) && toString( value ) === "[object Boolean]" );

export default isBoolean;