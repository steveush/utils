import toString from "../str/toString.js";
import isNonNullable from "./isNonNullable.js";

const isNumber = value => isNonNullable( value ) && toString( value ) === "[object Number]" && !isNaN( value );

export default isNumber;