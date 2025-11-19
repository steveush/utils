import isString from "../type-checks/isString.js";

const capitalize = str => {
    if ( isString( str ) && str.trim().length > 0 ) {
        const trimmed = str.trim();
        return trimmed.slice( 0, 1 ).toLocaleUpperCase() + trimmed.slice( 1 ).toLocaleLowerCase();
    }
    return '';
};

export default capitalize;