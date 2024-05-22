/**
 * Set a value of an object using a path string (`"child.prop"`).
 *
 * @param {any[]|object} target - The array or object to set the value on.
 * @param {string} path - The path on the target where the value will be set.
 * @param {any} value - The value to assign to the path.
 * @param {boolean} [create=false] Optional. Whether to create the path on the target if it does not exist. Defaults to `false`.
 *
 * @category Object Helpers
 */
export default function setProperty( target: any[] | Record<string, any>, path: string, value: any, create?: boolean ): void;