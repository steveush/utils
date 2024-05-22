/**
 * Check if a value is an array.
 *
 * @param {any} value - The value to check.
 * @param {boolean} [notEmpty] - Optional. If `true` the array must not be empty. Defaults to `false`.
 * @param {( value: any, index: number, iter: any[] ) => boolean} [predicate] - Optional. If supplied every entry in the array must satisfy this predicate.
 * @returns {boolean} - `true` if the value is an array and satisfies the optional checks, otherwise `false`.
 *
 * @category Type Checks
 */
export default function isArray( value: any, notEmpty?: boolean, predicate?: ( value: any, index: number, iter: any[] ) => boolean ): value is any[];