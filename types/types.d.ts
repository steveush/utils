//region General

/**
 * A shortlist of common built-in types.
 *
 * @private
 * @ignore
 */
export type CommonBuiltIn = Date | Error | Generator | Node | RegExp;

/**
 * No-op function to expand complex TS types for better IDE readability.
 *
 * @private
 * @ignore
 */
export type Expand<T> = T extends infer U ? { [K in keyof U]: U[K] } : never;

/**
 * Construct a type consisting of the element types of `T`.
 *
 * @private
 * @ignore
 */
export type ArrayType<T extends any[]> = T extends ( infer U )[] ? U : never;

//endregion
// region Merge<T, S> - Result type of the merge() function

/**
 * Returns `true` if `T` is mergeable, otherwise `false`.
 *
 * `T` is determined to be mergeable if extends `Record<string, any>` but is not an array, function or one of the
 * common built-in types. This is an approximation of the JavaScript `isPlainObject` method.
 *
 * @template T - The type to check.
 *
 * @remarks Using just a check for `T extends Record<string, any>` can return an unexpected result. This is because
 * arrays, functions and various built-in types satisfy the check. To try and avoid this a second check is performed
 * to exclude these subtypes from the result.
 *
 * @private
 * @ignore
 */
export type IsMergeable<T> = T extends Record<string, any>
    ? T extends ( any[] | ( () => any ) | CommonBuiltIn )
        ? false
        : true
    : false;

/**
 * Check if both `T` and `S` are mergeable, otherwise return `false`.
 *
 * @private
 * @ignore
 */
export type CanMerge<T, S> =
    IsMergeable<T> extends true
        ? IsMergeable<S> extends true
            ? true
            : false
        : false;

/**
 * Returns `T` if it's mergeable, otherwise return `Record<string, unknown>`.
 *
 * @private
 * @ignore
 */
export type MergeTarget<T> =
    IsMergeable<T> extends true
        ? T
        : Record<string, any>;

/**
 * From `S`, merge all properties into `T`.
 *
 * @template T - The target to merge properties into.
 * @template S - The source to copy properties from.
 *
 * @private
 * @ignore
 */
export type Merged<T extends Record<string, any>, S extends Record<string, any>> =
    MergeTarget<T> extends infer T1
        ? Omit<T1, keyof S> & {
        [K in keyof S]: CanMerge<T1[K], S[K]> extends true
            ? Merge<T1[K], S[K]>
            : S[K];
    } : never;

/**
 * From all `S`, merge properties into `T`.
 *
 * @template T - The target to merge properties into.
 * @template S - Any number of sources to copy properties from.
 */
export type Merge<T extends Record<string, any>, S extends Record<string, any>[]> = Expand<S extends [ infer S1, ...infer S2 ]
    ? Merged<T, Merge<S1, S2>>
    : unknown>;

//endregion

// region Combine<T, S> - Result type of the combine() function

/**
 * Represents a union of two array types.
 *
 * @template T - The first array type.
 * @template S - The second array type.
 */
export type Combine<T extends any[], S extends any[]> = Expand<( ArrayType<T> | ArrayType<S> )[]>;

//endregion

//region NonUndefined<T> - Any value except undefined

type NonUndefined<T> = T extends undefined ? never : T;

//endregion

type CleanObject<T> = T extends {[key: string]: any} ? {
    [ P in keyof T ]: NonUndefined<T<P>>
} : undefined;