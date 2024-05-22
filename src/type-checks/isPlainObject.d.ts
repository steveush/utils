/**
 * Check if a value is a plain old JavaScript object.
 *
 * @param {any} value - The value to check.
 * @param {boolean} [notEmpty] - Optional. If `true` the object must not be empty. Defaults to `false`.
 * @param {( value: any, key: string, iter: Record<string, any> ) => boolean} [predicate] - Optional. If supplied every entry in the object must satisfy this predicate.
 * @returns {boolean} - `true` if the value is a plain old JavaScript object and satisfies the optional checks, otherwise `false`.
 *
 * @category Type Checks
 */
export default function isPlainObject( value: any, notEmpty?: boolean, predicate?: ( value: any, key: string, iter: Record<string, any> ) => boolean ): value is Record<string, any>;