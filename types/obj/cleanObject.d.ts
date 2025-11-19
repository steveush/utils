import { CleanObject } from "../types";

/**
 * Clean an object by removing any keys explicitly set to `undefined`.
 *
 * If after cleaning the object is empty, `undefined` itself is returned.
 *
 * @param {object|any} value - The object to clean. If a non-object value is supplied, `undefined` will be returned.
 * @returns {object} An object containing all keys with defined values, otherwise `undefined`.
 * @example
 * cleanObject( {} ); // => undefined
 * cleanObject( { empty: undefined } ); // => undefined
 * cleanObject( { empty: undefined, notEmpty: true } ); // => { notEmpty: true }
 */
export default function cleanObject<T>( value: T ): CleanObject<T>;