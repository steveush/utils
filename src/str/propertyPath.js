import isString from "../type-checks/isString.js";

const ARR2DOT_REGEX = /\[(\d+)]/g;

const propertyPath = path => isString( path ) ? path.replaceAll( ARR2DOT_REGEX, ( match, p1, offset ) => ( offset === 0 ? p1 : "." + p1 ) ) : "";

export default propertyPath;