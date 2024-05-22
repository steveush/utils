import isString from "../type-checks/isString.js";

const STRIP_REGEX = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,.\/:;<=>?@\[\]^`{|}~]+/g;
const SPLIT_REGEX = /([A-Z][a-z0-9]+)|([\-_\s]+)/g;
const INNER_SPLIT_REGEX = /([A-Z]+$)/g;

const partReducer = ( result, part ) => {
    if ( isString( part, true ) ) {
        part = part.trim();
        if ( part !== "-" && part !== "_" ) {
            const parts = part.split( INNER_SPLIT_REGEX )
                .map( p => p.trim().toLocaleLowerCase() )
                .filter( Boolean );
            result.push( ...parts );
        }
    }
    return result;
};

const toPartsLowerCase = str => {
    if ( isString( str ) ) {
        return str.replaceAll( STRIP_REGEX, "" )
            .split( SPLIT_REGEX )
            .reduce( partReducer, [] );
    }
    return [];
};

export default toPartsLowerCase;