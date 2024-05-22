/**
 * Check if a value is not `null` or `undefined`.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} - `true` if the value is not `null` or `undefined`, otherwise `false`.
 *
 * @category Type Checks
 */
export default function isNonNullable( value: any ): value is NonNullable<any>;