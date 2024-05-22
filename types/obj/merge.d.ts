import { Merge } from "../types";

/**
 * Recursively merge the properties of multiple source objects into the target.
 *
 * @param {object} target - The object to receive the properties.
 * @param {...object} source - Any number of source objects to merge into the target.
 * @returns {object} - The target object is returned merged with the properties of all source objects.
 *
 * @remarks
 * This method does not merge arrays. Any array properties of the target are replaced with shallow copies from the sources.
 *
 * @category Object Helpers
 */
export default function merge<T extends Record<string, any>, S extends Record<string, any>[]>( target: T, ...source: S ): Merge<T, S>;