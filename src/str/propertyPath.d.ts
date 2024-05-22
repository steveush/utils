/**
 * Convert an array notated property path to a dot notated one.
 *
 * @param {string} path - The path string to convert.
 * @returns {string} - The result of the conversion.
 *
 * @remarks
 * The only difference between array and dot notated paths is how array indexes are described. In array notation they are
 * encapsulated within square brackets, whilst in dot notation they are simply prefixed with a period like other
 * property names.
 *
 * @example
 * propertyPath( "[0].name" ); // => "0.name"
 * propertyPath( "arr[0].name" ); // => "arr.0.name"
 * propertyPath( "arr[0]" ); // => "arr.0"
 *
 * @category String Helpers
 */
export default function propertyPath( path: string ): string;