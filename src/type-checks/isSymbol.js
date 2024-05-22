import toString from "../str/toString.js";
import isNonNullable from "./isNonNullable.js";

const isSymbol = value => isNonNullable( value ) && toString( value ) === "[object Symbol]";

export default isSymbol;