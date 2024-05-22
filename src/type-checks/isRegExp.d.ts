/**
 * Check if a value is a regular expression.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} - `true` if the value is a regular expression, otherwise `false`.
 *
 * @category Type Checks
 */
export default function isRegExp( value: any ): value is RegExp;