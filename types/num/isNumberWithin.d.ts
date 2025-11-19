/**
 * Check if a value is a number within the inclusive range of min to max.
 *
 * @param {any} value - The value to check.
 * @param {number} min - The inclusive minimum value for the range.
 * @param {number} max - The inclusive maximum value for the range.
 * @return {value is number} - `true` if the value is a number within the specified range, otherwise `false`.
 */
export default function isNumberWithin( value: number, min: number, max: number ): boolean;