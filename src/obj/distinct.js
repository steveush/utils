/**
 * Return the distinct elements of an array.
 *
 * @param {any[]} arr - The array to pluck elements from.
 * @returns {any[]} - A new array containing the distinct elements.
 */
const distinct = ( arr ) => {
    return Array.isArray( arr ) ? [ ...new Set( arr ) ] : [];
};

export default distinct;