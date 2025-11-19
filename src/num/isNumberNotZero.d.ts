/**
 * Check if a value is a number and not zero.
 *
 * @param {number|string} value - The value to check. If a string is supplied it is first parsed to a number using the `parseFloat` method.
 * @returns {boolean} - `true` if the value is a number and not zero, otherwise `false`.
 * @example
 * isNumberNotZero(); // => false
 * isNumberNotZero( 0 ); // => false
 * isNumberNotZero( 1 ); // => true
 * isNumberNotZero( "0px" ); // => false
 * isNumberNotZero( "1px" ); // => true
 *
 * @category Number Helpers
 */
export default function isNumberNotZero( value: number | string ): boolean;