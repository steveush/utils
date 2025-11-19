/**
 * Split a string into an ordered list of trimmed, non-empty, substrings.
 *
 * @param {string} str - The string to split.
 * @param {string | RegExp} separator - The pattern describing where each split should occur.
 * @returns {string[]} An array containing the trimmed, non-empty, substrings, split at each point where the separator
 * occurs in the given string.
 *
 * @category String Helpers
 */
export default function strim( str: string, separator: string | RegExp ): string[];