import { Combine } from "../types";

/**
 * Combine two arrays and return a new array containing no duplicate elements.
 *
 * @param {array} arr1 - The first array to merge.
 * @param {array} arr2 - The second array to merge.
 * @param {( a: any, b: any ) => boolean} [comparator] - Optional. The function used to determine element equality when removing duplicates.
 * @returns {array} - The combined array, even if one or both parameters are not arrays an array is returned.
 * * If both `arr1` and `arr2` are not arrays an empty array is returned.
 * * If `arr1` is not an array a shallow copy of `arr2` is returned.
 * * If `arr2` is not an array a shallow copy of `arr1` is returned.
 * * If both `arr1` and `arr2` are arrays they are combined and a new array containing distinct elements is returned.
 *
 * @category Object Helpers
 */
export default function combine<T extends any[], S extends any[]>( arr1: T, arr2: S, comparator?: ( a: any, b: any ) => boolean ): Combine<T, S>;