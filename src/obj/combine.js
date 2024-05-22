import isArray from "../type-checks/isArray.js";
import isFunction from "../type-checks/isFunction.js";

const combine = ( arr1, arr2, comparator ) => {
    comparator = isFunction( comparator ) ? comparator : ( a, b ) => a === b;
    const is1 = isArray( arr1 ), is2 = isArray( arr2 );
    if ( !is1 && !is2 ) return [];
    if ( !is1 ) return arr2.slice();
    if ( !is2 ) return arr1.slice();
    return [ ...arr1, ...arr2.filter( b => !arr1.some( a => comparator( a, b ) ) ) ];
};

export default combine;