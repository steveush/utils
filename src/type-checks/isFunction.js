import toString from "../str/toString.js";
import isNonNullable from "./isNonNullable.js";

const isFunction = value => isNonNullable( value ) && ( toString( value ) === "[object Function]" || typeof value === "function" || value instanceof Function );

export default isFunction;