# @steveush/utils

Utility methods and classes

**NOTE**

Any version below 1.0.0 is considered experimental and is subject to change.

This package was created for my personal use, and so is provided as is.

## Install

```shell
npm i @steveush/utils --save-dev
```

## Usage

### ESM

Import the entire package and make use of features. This is not recommended as you may lose the benefit of tree-shaking.

```js
import * as utils from "@steveush/utils";
```

Instead, import the specific util.

```js
import { isString } from "@steveush/utils";
```

### CJS

Import the entire package and make use of features.

```js
const utils = require( "@steveush/utils" );
```

Import a specific util.

```js
const { isString } = require( "@steveush/utils" );
```

## Number Helpers

<details>
<summary><code>clamp( value: number, min?: number, max?: number ): number</code></summary>

Clamp a number value within a given range.

_**Params**_

* _**value:**_ `any`  
  The number to clamp. If the value supplied is not a number, the `min` value is returned.

* _**min:**_ `number` _optional_  
  The minimum allowed value for the number. If not supplied `Number.MIN_SAFE_INTEGER` is used.

* _**max:**_ `number` _optional_  
  The maximum allowed value for the number. If not supplied `Number.MAX_SAFE_INTEGER` is used.

_**Returns**_

* `number`  
  The number clamped between the `min` and `max` values. If the number was smaller than the `min` or larger than the `max`, their respective values are instead returned.

_**Example**_

```javascript
clamp( -1, 0, 2 ); // => 0
clamp( 0, 0, 2 ); // => 0
clamp( 1, 0, 2 ); // => 1
clamp( 2, 0, 2 ); // => 2
clamp( 3, 0, 2 ); // => 2
```

</details>

<details>
<summary><code>isNumberNotZero( value: string | number ): boolean</code></summary>

Check if a value is a number and not zero.

_**Params**_

* _**value:**_ `any`  
  The value to check. If a string is supplied it is first parsed to a number using the `parseFloat` method.

_**Returns**_

* `boolean`  
  `true` if the value is a number and not zero, otherwise `false`.

_**Example**_

```javascript
isNumberNotZero( 0 ); // => false
isNumberNotZero( 1 ); // => true
isNumberNotZero( "0px" ); // => false
isNumberNotZero( "1px" ); // => true
isNumberNotZero( "0.0em" ); // => false
isNumberNotZero( "0.1em" ); // => true
```

</details>

<details>
<summary><code>isNumberWithin( value: number, min: number, max: number ): boolean</code></summary>

Check if a value is a number within the inclusive range of min to max.

_**Params**_

* _**value:**_ `any`  
  The value to check.

* _**min:**_ `number`  
  The inclusive minimum value for the range.

* _**max:**_ `number`  
  The inclusive maximum value for the range.

_**Returns**_

* `boolean`  
  `true` if the value is a number within the specified range, otherwise `false`.

_**Example**_

```javascript
isNumberWithin( -1, 0, 2 ); // => false
isNumberWithin( 0, 0, 2 ); // => true
isNumberWithin( 1, 0, 2 ); // => true
isNumberWithin( 2, 0, 2 ); // => true
isNumberWithin( 3, 0, 2 ); // => false
```

</details>


## Object Helpers

<details>
<summary><code>cleanObject( value: object | any ): object | undefined</code></summary>

Clean an object by removing any keys explicitly set to `undefined`.

If after cleaning the object is empty, `undefined` itself is returned.

_**Params**_

* _**value:**_ `object | any`  
  The object to clean. If a non-object value is supplied, `undefined` will be returned.

_**Returns**_

* `object | undefined`  
  An object containing all keys with defined values, otherwise `undefined`.

_**Example**_

```javascript
cleanObject( {} ); // => undefined
cleanObject( { empty: undefined } ); // => undefined
cleanObject( { empty: undefined, notEmpty: true } ); // => { notEmpty: true }
```

</details>

<details>
<summary><code>clone( target: any ): any</code></summary>

Creates a clone of the supplied target.

**Note**: This method will clone arrays and plain objects, all other types are set by reference.

_**Params**_

* _**target:**_ `any`  
  The target value to clone.

_**Returns**_

* `any`  
  A clone of the supplied target.

</details>

<details>
<summary><code>combine( arr1: any[], arr2: any[], comparator?: ( ( a: any, b: any ) => boolean ) ): any[]</code></summary>

Combine two arrays and return a new array containing no duplicate elements.

_**Params**_

* _**arr1:**_ `any[]`  
  The first array to combine.

* _**arr2:**_ `any[]`  
  The second array to combine.

* _**comparator:**_ `( a: any, b: any ) => boolean` _optional_  
  The function used to determine element equality when removing duplicates. Defaults to a strict equality
  check (`a === b`).

_**Returns**_

* `any[]`  
  The combined array, even if one or both parameters are not arrays an array is returned.

If both `arr1` and `arr2` are not arrays an empty array is returned.  
If `arr1` is not an array a shallow copy of `arr2` is returned.  
If `arr2` is not an array a shallow copy of `arr1` is returned.  
If both `arr1` and `arr2` are arrays they are combined and a new array containing distinct elements is returned.

_**Example**_

```javascript
combine(
    [ 1, 2 ],
    [ 2, 3 ]
); // => [ 1, 2, 3 ]

combine(
    [ { id: 1 }, { id: 2 } ],
    [ { id: 2 }, { id: 3 } ]
); // => [ { id: 1 }, { id: 2 }, { id: 2 }, { id: 3 } ]

combine(
    [ { id: 1 }, { id: 2 } ],
    [ { id: 2 }, { id: 3 } ],
    ( a, b ) => a.id === b.id
); // => [ { id: 1 }, { id: 2 }, { id: 3 } ]
```

</details>

<details>
<summary><code>distinct( array: any[] ): any[]</code></summary>

Return the distinct elements of an array.

_**Params**_

* _**array:**_ `any[]`  
  The array to pluck elements from.

_**Returns**_

* `any[]`  
  A new array containing the distinct elements.

_**Example**_

```javascript
distinct( [ 1, 2, 2, 3 ] ); // => [ 1, 2, 3 ]
```

</details>

<details>
<summary><code>getProperty( target: object, path: string ): any</code></summary>

Get a property value from an object using a path string (`"child.prop"`).

_**Params**_

* _**target:**_ `object`  
  The array or object to get the value from.

* _**path:**_ `string`  
  The path on the target where the value will be fetched from.

_**Returns**_

* `any`  
  The value found using the _path_, otherwise `undefined`.

_**Example**_

Passing an object as the target.

```javascript
const obj = {
    name: "root",
    child: {
        name: "child"
    },
    children: [
        { name: "first" },
        { name: "second" }
    ]
};

getProperty( obj, "name" ); // => "root"
getProperty( obj, "child.name" ); // => "child"
getProperty( obj, "children[0].name" ); // => "first"
getProperty( obj, "children.0.name" ); // => "first"
getProperty( obj, "children[1].name" ); // => "second"
getProperty( obj, "children.1.name" ); // => "second"
```

Passing an array as the target.

```javascript
const arr = [
    { name: "first" },
    { name: "second" }
];

getProperty( arr, "[0].name" ); // => "first"
getProperty( arr, "0.name" ); // => "first"
getProperty( arr, "[1].name" ); // => "second"
getProperty( arr, "1.name" ); // => "second"
```

</details>

<details>
<summary><code>hasKeys( target: object, keys?: string | string[] | Record&lt;string, ( ( value: any ) => boolean )&gt; ): boolean</code></summary>

Check if an object has keys.

_**Params**_

* _**target:**_ `object`  
  The object to check.

* _**keys:**_ `string | string[] | Record<string, ( ( value: any ) => boolean )>` _optional_  
  A string key name, string array of key names, or an object containing key names to type check methods. If not supplied
  and the _target_ contains any keys, `true` is returned.

_**Returns**_

* `boolean`  
  `true` if the target has all the _keys_, otherwise `false`.

_**Example**_

```javascript
const obj = {
    name: "string",
    checked: true
};

hasKeys( obj ); // => true
hasKeys( obj, "name" ); // => true
hasKeys( obj, "never" ); // => false
hasKeys( obj, [ "name", "checked" ] ); // => true
hasKeys( obj, [ "name", "checked", "never" ] ); // => false
hasKeys( obj, { name: isString, checked: isBoolean } ); // => true
hasKeys( obj, { name: isString, checked: isString } ); // => false
```

</details>

<details>
<summary><code>merge( target: object, ...source: object[] ): object</code></summary>

Recursively merge the properties of multiple source objects into the target.

**Note**: This method does not merge arrays. Any array properties of the target are replaced with shallow copies from
the sources.

_**Params**_

* _**target:**_ `object`  
  The object to receive the properties.

* _**...source:**_ `object[]`    
  Any number of source objects to merge into the _target_.

_**Returns**_

* `object`  
  The _target_ object is returned merged with the properties of all source objects.

_**Example**_

```javascript
merge(
    { prop1: "one", prop2: false },
    { prop2: true, prop3: 2 },
    { prop1: "three", prop3: 3 }
); // => { prop1: "three", prop2: true, prop3: 3 }
```

If the _target_ is not a plain object a new object is created.

```javascript
merge(); // => {}

merge( undefined, { prop1: "one" } ); // => { prop1: "one" }
```

If a _source_ is not a plain object it is ignored.

```javascript
merge( { prop1: "one" }, undefined ); // => { prop1: "one" }
merge( { prop1: "one" }, "oops" ); // => { prop1: "one" }
merge( { prop1: "one" }, undefined, { prop2: "two" } ); // => { prop1: "one", prop2: "two" }
```

</details>

<details>
<summary><code>pluck( target: object, keys: string | string[] | ( ( value: any, key: string: iter: object ) => boolean ) ): object</code></summary>

Pluck key-value pairs from one object into a new object.

_**Params**_

* _**target:**_ `object`  
  The object to pluck key-value pairs from.

* _**keys:**_ `string | string[] | ( ( value: any, key: string: iter: object ) => boolean )`  
  A string key name, string array of key names, or a predicate that determines if the key-value pair should be plucked.

_**Returns**_

* `object`  
  A new object containing all matching key-value pairs.

_**Example**_

```javascript
const obj = {
    prop1: "string1",
    prop2: true,
    prop3: 3,
    prop4: "string2"
};

pluck( obj, "prop1" ); // => { prop1: "string1" }

pluck( obj, [ "prop2", "prop3" ] ); // => { prop2: true, prop3: 3 }

pluck( obj, value => isString( value ) ); // => { prop1: "string1", prop4: "string2" }
```

</details>

<details>
<summary><code>setProperty( target: object, path: string, value: any, create?: boolean ): void</code></summary>

Set a value of an object using a path string (`"child.prop"`).

_**Params**_

* _**target:**_ `object`  
  The array or object to set the value on.

* _**path:**_ `string`  
  The path on the _target_ where the value will be set.

* _**value:**_ `any`  
  The value to assign to the _path_.

* _**create:**_ `boolean` _optional_  
  Whether to create the _path_ on the _target_ if it does not exist. Defaults to `false`.

_**Example**_

Given the following object:

```javascript
const obj = {
    name: "root",
    child: {
        name: "child"
    },
    children: [
        { name: "first" },
        { name: "second" }
    ]
};
```

We can change the value of various existing properties.

```javascript
setProperty( obj, "name", "update_root" );
// obj => {
//   name: "update_root",
//   child: {
//     name: "child"
//   },
//   children: [
//     { name: "first" },
//     { name: "second" }
//   ]
// }
```

```javascript
setProperty( obj, "child.name", "update_child" );
// obj => {
//   name: "root",
//   child: {
//     name: "update_child"
//   },
//   children: [
//     { name: "first" },
//     { name: "second" }
//   ]
// }
```

```javascript
setProperty( obj, "children[0].name", "update_children_first" );
// obj => {
//   name: "root",
//   child: {
//     name: "child"
//   },
//   children: [
//     { name: "update_children_first" },
//     { name: "second" }
//   ]
// }
```

**_Note_**: By default, if the _path_ does not exist on the _target_, no property is set.

```javascript
setProperty( {}, "newProp", "never" );
// obj => {}
```

If you want to change this behavior and allow new properties to be created, then you must pass `true` for the _create_
parameter.

```javascript
setProperty( obj, "newProp", "created", true );
// obj => { newProp: "created" }
```

</details>

<details>
<summary><code>someKeys( target: object, keys?: string | string[] | Record&lt;string, ( ( value: any ) => boolean )&gt; ): boolean</code></summary>

Check if an object has some keys.

_**Params**_

* _**target:**_ `object`  
  The object to check.

* _**keys:**_ `string | string[] | Record<string, ( ( value: any ) => boolean )>` _optional_  
  A string key name, string array of key names, or an object containing key names to type check methods. If not supplied
  and the _target_ contains any keys, `true` is returned.

_**Returns**_

* `boolean`  
  `true` if the target has any of the _keys_, otherwise `false`.

_**Example**_

```javascript
const obj = {
    name: "string",
    checked: true
};

someKeys( obj ); // => true
someKeys( obj, "name" ); // => true
someKeys( obj, "never" ); // => false
someKeys( obj, [ "name", "never" ] ); // => true
someKeys( obj, { name: isString, checked: isString } ); // => true
someKeys( obj, { name: isBoolean, checked: isString } ); // => false
```

</details>

## String Helpers

<details>
<summary><code>bisect( str: string, searchString: string, trim?: boolean ): [ string, string ]</code></summary>

Split a string on the first occurrence of the specified search string.

_**Params**_

* _**str:**_ `string`  
  The string to split.

* _**searchString:**_ `string`  
  The value used to split the string.

* _**trim:**_ `boolean` _optional_  
  Whether the resulting parts should be trimmed. Defaults to `false`.

_**Returns**_

* `[ string, string ]`  
  A tuple containing the result of the split.

The first element is the string value from before the `searchString`, or the original value if the `searchString` was
not found.  
The second element is the string value from after the `searchString`, or an empty string if the `searchString` was not
found.

_**Example**_

```javascript
bisect( "split on first space", " " ); // => [ "split", "on first space" ]
bisect( "split - on first - dash", "-" ); // => [ "split ", " on first - dash" ]
bisect( "split - on first - dash", "-", true ); // => [ "split", "on first - dash" ]
```

</details>

<details>
<summary><code>capitalize( str: string ): string</code></summary>

Capitalize the first character of a string.

_**Params**_

* _**str:**_ `string`  
  The string to capitalize.

_**Returns**_

* `string`  
  The capitalized string, otherwise an empty string if the value was not string.

_**Example**_

```javascript
capitalize(); // => ""
capitalize( "test" ); // => "Test"
capitalize( "TEST" ); // => "Test"
```

</details>

<details>
<summary><code>escapeHTML( str: string ): string</code></summary>

Convert the special characters `&`, `<`, `>`, `"`, and `'` in a string to HTML entities.

_**Params**_

* _**str:**_ `string`  
  The string to escape.

_**Returns**_

* `string`  
  The escaped string.

_**Example**_

```javascript
escapeHTML( `<img src="..." title="Jack's Pub" />` ); // => "&lt;img src=&quot;...&quot; title=&quot;Jack&#39;s Pub&quot; /&gt;"
```

</details>

<details>
<summary><code>propertyPath( path: string ): string</code></summary>

Convert an array notated property path to a dot notated one.

The only difference between array and dot notated paths is how array indexes are described. In array notation they are
encapsulated within square brackets, whilst in dot notation they are simply prefixed with a period like other
property names.

This method is used internally by the `getProperty`  and `setProperty` methods to normalize the supplied path parameter.

_**Params**_

* _**path:**_ `string`  
  The path string to convert.

_**Returns**_

* `string`  
  The result of the conversion.

_**Example**_

```javascript
propertyPath( "[0].name" ); // => "0.name"
propertyPath( "arr[0].name" ); // => "arr.0.name"
propertyPath( "arr[0]" ); // => "arr.0"
```

</details>

<details>
<summary><code>strim( str: string, separator: string | RegExp ): string[]</code></summary>

Split a string into an ordered list of trimmed, non-empty, substrings.

_**Params**_

* _**str:**_ `string`  
  The string to split.

* _**separator:**_ `string | RegExp`  
  The pattern describing where each split should occur.

_**Returns**_

* `string[]`  
  An array containing the trimmed, non-empty, substrings, split at each point where the separator occurs in the given string.

_**Example**_

```javascript
strim( "key1: value1; key2: value2;", ";" ); // => [ "key1: value1", "key2: value2" ]
```

</details>

<details>
<summary><code>toCamelCase( str: string, uppercase?: string[], force?: boolean ): string</code></summary>

Convert a string to camelCase.

_**Params**_

* _**str:**_ `string`  
  The string to convert.

* _**uppercase:**_ `string[]` _optional_  
  An array of strings to convert to uppercase. Defaults to `[]`.

* _**force:**_ `boolean` _optional_  
  Whether to allow _uppercase_ strings to appear at the start of a string. Defaults to `false`.

_**Returns**_

* `string`  
  The converted camelCase string.

_**Example**_

```javascript
toCamelCase( "camelCase" ); // => "camelCase"
toCamelCase( "PascalCase" ); // => "pascalCase"
toCamelCase( "kebab-case" ); // => "kebabCase"
toCamelCase( "snake_case" ); // => "snakeCase"
toCamelCase( "with spaces" ); // => "withSpaces"
```

If you need specific parts of the string to be uppercased you can supply them as the second parameter.

```javascript
toCamelCase( "camelCase", [ "case" ] ); // => "camelCASE"
toCamelCase( "PascalCase", [ "case" ] ); // => "pascalCASE"
toCamelCase( "kebab-case", [ "case" ] ); // => "kebabCASE"
toCamelCase( "snake_case", [ "case" ] ); // => "snakeCASE"
```

If the string starts with one of the _uppercase_ strings, by default it is left as lowercase.

```javascript
toCamelCase( "case-at-start", [ "case" ] ); // => caseAtStart
```

However, this can be overridden by specifying the _force_ parameter as `true`.

```javascript
toCamelCase( "case-at-start", [ "case" ], true ); // => CASEAtStart
```

</details>

<details>
<summary><code>toKebabCase( str: string ): string</code></summary>

Convert a string to kebab-case.

_**Params**_

* _**str:**_ `string`  
  The string to be converted.

_**Returns**_

* `string`  
  The converted kebab-case string.

_**Example**_

```javascript
toKebabCase( "camelCase" ); // => "camel-case"
toKebabCase( "PascalCase" ); // => "pascal-case"
toKebabCase( "kebab-case" ); // => "kebab-case"
toKebabCase( "snake_case" ); // => "snake-case"
toKebabCase( "with spaces" ); // => "with-spaces"
```

</details>

<details>
<summary><code>toPascalCase( str: string, uppercase?: string[] ): string</code></summary>

Convert a string to PascalCase.

_**Params**_

* _**str:**_ `string`  
  The string to convert.

* _**uppercase:**_ `string[]` _optional_  
  An array of strings to convert to uppercase. Defaults to `[]`.

_**Returns**_

* `string`  
  The converted PascalCase string.

_**Example**_

```javascript
toPascalCase( "camelCase" ); // => "CamelCase"
toPascalCase( "PascalCase" ); // => "PascalCase"
toPascalCase( "kebab-case" ); // => "KebabCase"
toPascalCase( "snake_case" ); // => "SnakeCase"
toPascalCase( "with spaces" ); // => "WithSpaces"
```

If you need specific parts of the string to be uppercased you can supply them as the second parameter.

```javascript
toPascalCase( "camelCase", [ "case" ] ); // => "CamelCASE"
toPascalCase( "PascalCase", [ "case" ] ); // => "PascalCASE"
toPascalCase( "kebab-case", [ "case" ] ); // => "KebabCASE"
toPascalCase( "snake_case", [ "case" ] ); // => "SnakeCASE"
```

</details>

<details>
<summary><code>toSnakeCase( str: string ): string</code></summary>

Convert a string to snake_case.

_**Params**_

* _**str:**_ `string`  
  The string to be converted.

_**Returns**_

* `string`  
  The converted snake_case string.

_**Example**_

```javascript
toSnakeCase( "camelCase" ); // => "camel_case"
toSnakeCase( "PascalCase" ); // => "pascal_case"
toSnakeCase( "kebab-case" ); // => "kebab_case"
toSnakeCase( "snake_case" ); // => "snake_case"
toSnakeCase( "with spaces" ); // => "with_spaces"
```

</details>

<details>
<summary><code>toPartsLowerCase( str: string ): string[]</code></summary>

Convert a string into an array of its component parts.

Used to provide a consistent base for the various string case methods to work from.

* All punctuation is stripped.
* The string is split on capitalized characters, underscores, dashes and spaces.
* The parts from the split are trimmed and lowercased.

_**Params**_

* _**str:**_ `string`  
  The string to convert.

_**Returns**_

* `string[]`  
  An array containing the parts of the string.

_**Example**_

```javascript
toPartsLowerCase( "camelCase" ); // => [ "camel", "case" ]
toPartsLowerCase( "PascalCase" ); // => [ "pascal", "case" ]
toPartsLowerCase( "kebab-case" ); // => [ "kebab", "case" ]
toPartsLowerCase( "snake_case" ); // => [ "snake", "case" ]
toPartsLowerCase( "with spaces" ); // => [ "with", "spaces" ]
```

</details>

<details>
<summary><code>toString( value: any ): string</code></summary>

Convert a value to a string using the `Object.prototype.toString()` method.

_**Params**_

* _**value:**_ `any`  
  The value to convert.

_**Returns**_

* `string`  
  The string representation of the value.

_**Example**_

```javascript
toString( "str" ); // => "[object String]"
toString( true ); // => "[object Boolean]"
toString( Symbol.toStringTag ); // => "[object Symbol]"
```

</details>

<details>
<summary><code>unescapeHTML( str: string ): string</code></summary>

Convert the HTML entities `&amp;`, `&lt;`, `&gt;`, `&quot;` and `&#39;` in a string back to their original characters.

_**Params**_

* _**str:**_ `string`  
  The string to unescape.

_**Returns**_

* `string`  
  The unescaped string.

_**Example**_

```javascript
escapeHTML( `&lt;img src=&quot;...&quot; title=&quot;Jack&#39;s Pub&quot; /&gt;` ); // => "<img src="..." title="Jack's Pub" />"
```

</details>

## Type Checks

<details>
<summary><code>isArray( value: any, notEmpty?: boolean, predicate?: ( value: any, index: number, iter: any[] ) => boolean ): boolean</code></summary>

Check if a value is an array.

_**Params**_

* _**value:**_ `any`  
  The value to check.

* _**notEmpty:**_ `boolean` _optional_  
  If `true` the array must not be empty. Defaults to `false`.

* _**predicate:**_ `( value: any, index: number, iter: any[] ) => boolean` _optional_  
  If supplied every entry in the array must satisfy this predicate.

_**Returns**_

* `boolean`  
  `true` if the value is an array and satisfies the optional checks, otherwise `false`.

_**Example**_

```javascript
isArray( [] ); // => true
isArray( [], true ); // => false
isArray( [ 1 ], true, value => isNumber( value ) ); // => true
isArray( [ 1, "2" ], true, value => isNumber( value ) ); // => false
```

</details>

<details>
<summary><code>isBoolean( value: any ): boolean</code></summary>

Check if a value is a boolean.

_**Params**_

* _**value:**_ `any`  
  The value to check.

_**Returns**_

* `boolean`  
  `true` if the value is a boolean, otherwise `false`.

</details>

<details>
<summary><code>isFunction( value: any ): boolean</code></summary>

Check if a value is a function.

_**Params**_

* _**value:**_ `any`  
  The value to check.

_**Returns**_

* `boolean`  
  `true` if the value is a function, otherwise `false`.

_**Example**_

```javascript
function named() {
}

isFunction( named ); // => true

const arrow = () => "returns";
isFunction( arrow ); // => true
```

</details>

<details>
<summary><code>isNonNullable( value: any ): boolean</code></summary>

Check if a value is not `null` or `undefined`.

_**Params**_

* _**value:**_ `any`  
  The value to check.

_**Returns**_

* `boolean`  
  `true` if the value is not `null` or `undefined`, otherwise `false`.

</details>

<details>
<summary><code>isNull( value: any ): boolean</code></summary>

Check if a value is `null`.

_**Params**_

* _**value:**_ `any`  
  The value to check.

_**Returns**_

* `boolean`  
  `true` if the value is `null`, otherwise `false`.

</details>

<details>
<summary><code>isNumber( value: any ): boolean</code></summary>

Check if a value is a number.

_**Params**_

* _**value:**_ `any`  
  The value to check.

_**Returns**_

* `boolean`  
  `true` if the value is a number, otherwise `false`.

</details>

<details>
<summary><code>isObject( value: any, notEmpty?: boolean, predicate?: ( ( value: any, key: string, iter: object ) => boolean ) ): boolean</code></summary>

Check if a value is an object.

This method returns `true` for arrays, functions, objects and classes like `Date`, `Error` and `RegExp`.  
If _notEmpty_ is `true` the value must return a non-empty array from a call to `Object.entries`.  
If a _predicate_ is supplied every entry in the object must satisfy it.

_**Params**_

* _**value:**_ `any`  
  The value to check.

* _**notEmpty:**_ `boolean` _optional_  
  If `true` the object must not be empty. Defaults to `false`.

* _**predicate:**_ `( value: any, key: string, iter: object ) => boolean` _optional_  
  If supplied every entry in the object must satisfy this predicate.

_**Returns**_

* `boolean`  
  `true` if the value is an object and satisfies the optional checks, otherwise `false`.

_**Example**_

```javascript
isObject( [] ); // => true
isObject( {} ); // => true
isObject( () => 'returns' ); // => true
```

Checking for empty values.

```javascript
isObject( [], true ); // => false
isObject( {}, true ); // => false
isObject( () => 'returns', true ); // => false

// note functions will only be not-empty if it has properties defined.
const fn = () => 'returns';
fn.prop = true;
isObject( fn, true ); // => true
```

Ensuring each key-value pair satisfies a condition.

```javascript
isObject( [ 1, 2, 3 ], true, value => isNumber( value ) ); // => true
isObject( [ 1, 2, 3 ], true, value => isString( value ) ); // => false
isObject( { prop1: 1, prop2: 2 }, true, value => isNumber( value ) ); // => true
isObject( { prop1: 1, prop2: 2 }, true, value => isString( value ) ); // => false
```

</details>

<details>
<summary><code>isPlainObject( value: any, notEmpty?: boolean, predicate?: ( ( value: any, key: string, iter: object ) => boolean ) ): boolean</code></summary>

Check if a value is a plain old JavaScript object.

_**Params**_

* _**value:**_ `any`  
  The value to check.

* _**notEmpty:**_ `boolean` _optional_  
  If `true` the object must not be empty. Defaults to `false`.

* _**predicate:**_ `( value: any, key: string, iter: object ) => boolean` _optional_  
  If supplied every entry in the object must satisfy this predicate.

_**Returns**_

* `boolean`  
  `true` if the value is a plain old JavaScript object and satisfies the optional checks, otherwise `false`.

_**Example**_

```javascript
isPlainObject( [] ); // => false
isPlainObject( {} ); // => true
isPlainObject( () => 'returns' ); // => false
```

Checking for empty values.

```javascript
isPlainObject( {}, true ); // => false
isPlainObject( { prop: 1 }, true ); // => true
```

Ensuring each key-value pair satisfies a condition.

```javascript
isPlainObject( { prop1: 1, prop2: 2 }, true, value => isNumber( value ) ); // => true
isPlainObject( { prop1: 1, prop2: 2 }, true, value => isString( value ) ); // => false
```

</details>

<details>
<summary><code>isRegExp( value: any ): boolean</code></summary>

Check if a value is a regular expression.

_**Params**_

* _**value:**_ `any`  
  The value to check.

_**Returns**_

* `boolean`  
  `true` if the value is a regular expression, otherwise `false`.

</details>

<details>
<summary><code>isString( value: any, notEmpty?: boolean ): boolean</code></summary>

Check if a value is a string.

A string is empty if it has a length of 0 or contains only whitespace.

_**Params**_

* _**value:**_ `any`  
  The value to check.

* _**notEmpty:**_ `boolean` _optional_  
  If `true` the string must not be empty. Defaults to `false`.

_**Returns**_

* `boolean`  
  `true` if the value is a string and satisfies the optional check, otherwise `false`.

</details>

<details>
<summary><code>isSymbol( value: any ): boolean</code></summary>

Check if a value is a symbol.

_**Params**_

* _**value:**_ `any`  
  The value to check.

_**Returns**_

* `boolean`  
  `true` if the value is a symbol, otherwise `false`.

</details>

<details>
<summary><code>isUndefined( value: any ): boolean</code></summary>

Check if a value is `undefined`.

_**Params**_

* _**value:**_ `any`  
  The value to check.

_**Returns**_

* `boolean`  
  `true` if the value is `undefined`, otherwise `false`.

</details>

## Development

To get the project up and running for development should just require running `npm install` and then `npm run develop`.
For more information on the configuration check out the [DEV.md](DEV.md) readme.

## Changelog

| Version | Description                                                                                                                                                                                                                                             |
|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0.0.1   | Initial release                                                                                                                                                                                                                                         |
| 0.0.2   | Relaxed the value checks for `hasKeys`, `someKeys` and `pluck` methods to allow any object instead of just plain objects. Added the `cleanObject`, `clone`, `distinct`, `clamp`, `isNumberNotZero`, `isNumberWithin`, `capitalize` and `strim` methods. |
