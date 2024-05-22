/**
 * Check if a value is a string.
 *
 * @param {any} value - The value to check.
 * @param {boolean} [notEmpty] - Optional. If `true` the string must not be empty. Defaults to `false`.
 * @returns {boolean} - `true` if the value is a string and satisfies the optional check, otherwise `false`.
 *
 * @category Type Checks
 */
export default function isString( value: any, notEmpty?: boolean ): value is string;