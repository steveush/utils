import isNull from "./isNull.js";
import isUndefined from "./isUndefined.js";

const isNonNullable = value => !isNull( value ) && !isUndefined( value );

export default isNonNullable;