/**
 * Format a string using the supplied args.
 *
 * @param {string} format - The string containing placeholders.
 * @param {any | Record<string, any>} arg - The first value to format, if a plain old JavaScript object is supplied its entries are used to match named placeholders.
 * @param {...any} [argN] - Optional. Any number of additional values to format.
 *
 * @returns {string} - The formatted string.
 *
 * @remarks
 * If a replacement value is not a string it will be coerced into one. The only exception to this is if the first arg
 * is a plain old JavaScript object as it is used to match named placeholders.
 *
 * This method does not perform a simultaneous replacement of placeholders.
 *
 * @category String Helpers
 */
export default function format( format: string, arg: any | Record<string, any>, ...argN?: any[] ): string;