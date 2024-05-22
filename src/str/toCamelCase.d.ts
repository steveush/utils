/**
 * Convert a string to camelCase.
 *
 * @param {string} str - The string to convert.
 * @param {string[]} [uppercase] - Optional. An array of strings to convert to uppercase. Defaults to `[]`.
 * @param {boolean} [force] - Optional. Whether to allow uppercase strings to appear at the start of a string. Defaults to `false`.
 * @returns {string} - The converted camelCase string.
 *
 * @category String Helpers
 */
export default function toCamelCase( str: string, uppercase?: string[], force?: boolean ): string;