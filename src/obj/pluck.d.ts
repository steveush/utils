/**
 * Pluck key-value pairs from one object into a new object.
 *
 * @param {object} obj - The object to pluck values from.
 * @param {string|string[]|((value: any, key: string, iter: object)=>boolean)} keys - A string key name, string array of key names, or a predicate that determines if the key-value pair should be plucked.
 * @returns {object} - A new object containing all matching key-value pairs.
 *
 * @category Object Helpers
 */
export default function pluck( obj: {
    [ key: string ]: any
}, keys: string | string[] | ( ( value: any, key: string, iter: object ) => boolean ) ): {
    [ key: string ]: any
};