/**
 * Return the distinct elements of an array.
 *
 * @param {any[]} array - The array to pluck elements from.
 * @returns {any[]} - A new array containing the distinct elements.
 * @category Object Helpers
 */
export default function distinct<T extends Array<infer V>>( array: T ) : Array<V>;