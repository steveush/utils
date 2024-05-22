/**
 * Check if a value is an object.
 *
 * @param {any} value - The value to check.
 * @param {boolean} [notEmpty] - Optional. If `true` the object must not be empty. Defaults to `false`.
 * @param {( value: any, key: string, iter: object ) => boolean} [predicate] - Optional. If supplied every entry in the object must satisfy this predicate.
 * @returns {boolean} - `true` if the value is an object, otherwise `false`.
 *
 * @remarks
 * This method returns `true` for arrays, functions, objects and classes like `Date`, `Error` and `RegExp`.
 *
 * If notEmpty is specified the value must return a non-empty array from a call to `Object.entries`.
 *
 * If a predicate is supplied every entry in the object must satisfy it.
 *
 * @category Type Checks
 */
export default function isObject( value: any, notEmpty?: boolean, predicate?: ( value: any, key: string, iter: object ) => boolean ): value is NonNullable<object>;