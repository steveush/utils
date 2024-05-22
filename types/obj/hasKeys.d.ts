/**
 * Check if an object has keys.
 *
 * @param {object} target - The object to check.
 * @param {string|string[]|Record<string,((value: any) => boolean)>} [keys] Optional. A string key name, string array of
 * key names, or an object containing key names to type check methods. If not supplied and the target contains any keys, `true` is returned.
 * @returns {boolean} - `true` if the target has all the keys, otherwise `false`.
 *
 * @category Object Helpers
 */
export default function hasKeys( target: Record<string, any>, keys?: ( string | string[] | Record<string, ( ( value: any ) => boolean )> ) ): boolean;