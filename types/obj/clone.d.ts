/**
 * Creates a clone of the supplied target.
 *
 * @template T
 * @param {T} target - The value to clone.
 * @returns {T} A clone of the supplied value.
 * @remarks
 * This method will clone arrays and plain objects, all other types are set by reference.
 * @category Object Helpers
 */
export default function clone<T>( target: T ) : T;