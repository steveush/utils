/**
 * Get a property value from an object using a path string (`"child.prop"`).
 *
 * @param {any[]|object} target - The array or object to get the value from.
 * @param {string} path - The path on the target where the value will be fetched from.
 * @returns {any} - The value found using the `path`, otherwise `undefined`.
 *
 * @category Object Helpers
 */
export default function getProperty( target: any[] | Record<string, any>, path: string ): any;