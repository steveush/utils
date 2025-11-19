/**
 * Clamp a number value within a given range.
 *
 * @param {any} value - The number to clamp. If the value supplied is not a number, the `min` value is returned.
 * @param {number} [min] - Optional. The minimum allowed value for the number. If not supplied `Number.MIN_SAFE_INTEGER` is used.
 * @param {number} [max] - Optional. The maximum allowed value for the number. If not supplied `Number.MAX_SAFE_INTEGER` is used.
 * @returns {number} - The number clamped between the `min` and `max` values. If the number was smaller than the `min` or larger than the `max`, their respective values are instead returned.
 */
export default function clamp( value: any, min: number = Number.MIN_SAFE_INTEGER, max: number = Number.MAX_SAFE_INTEGER ): number;