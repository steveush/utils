import isString from "../type-checks/isString.js";

const bisect = ( str, searchString, trim = false ) => {
    if ( isString( str ) ) {
        if ( isString( searchString ) && searchString.length > 0 ) {
            const i = str.indexOf( searchString );
            if ( i !== -1 ) {
                let part1 = str.substring( 0, i ),
                    part2 = str.substring( i + searchString.length );
                if ( trim ) {
                    part1 = part1.trim();
                    part2 = part2.trim();
                }
                return [ part1, part2 ];
            }
        }
        return trim ? [ str.trim(), "" ] : [ str, "" ];
    }
    return [ "", "" ];
};

export default bisect;