import isString from "../type-checks/isString.js";
import isPlainObject from "../type-checks/isPlainObject.js";

const format = ( format, arg, ...argN ) => {
    if ( isString( format ) ) {
        let args = argN;
        if ( isPlainObject( arg ) ) {
            args = arg;
        } else {
            args.unshift( arg );
        }
        Object.entries( args ).forEach(( [ key, value ] ) => {
            format = format.replaceAll( `{${key}}`, value + "" );
        });
        return format;
    }
    return "";
};

export default format;