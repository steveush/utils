/**
 * Split a string on the first occurrence of the specified search string.
 *
 * @param {string} str - The string to split.
 * @param {string} searchString - The value used to split the string.
 * @param {boolean} [trim=false] - Optional. Whether the resulting parts should be trimmed. Defaults to `false`.
 * @returns {[string,string]} - A tuple containing the result of the split.
 * * The first element is the string value from before the `searchString`, or the original value if the `searchString` was not found.
 * * The second element is the string value from after the `searchString`, or an empty string if the `searchString` was not found.
 *
 * @category String Helpers
 */
export default function bisect( str: string, searchString: string, trim?: boolean ): [ string, string ];