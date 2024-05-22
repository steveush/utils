/**
 * Convert a string into an array of its component parts.
 *
 * @param {string} str - The string to convert.
 * @returns {string[]} - An array containing the parts of the string.
 *
 * @remarks
 * Used to provide a consistent base for the various string case methods to work from.
 *
 * * All punctuation is stripped.
 * * The string is split on capitalized characters, underscores, dashes and spaces.
 * * The parts from the split are trimmed and lowercased.
 *
 * @category String Helpers
 */
export default function toPartsLowerCase( str: string ): string[];