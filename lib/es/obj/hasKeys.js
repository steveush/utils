import e from"../type-checks/isPlainObject.js";import r from"../type-checks/isUndefined.js";import t from"../type-checks/isArray.js";import i from"../type-checks/isFunction.js";import s from"../type-checks/isString.js";const c=(c,n)=>{if(e(c)){const o=Object.keys(c);if(r(n))return o.length>0;if(s(n))return o.includes(n);if(t(n))return n.every((e=>o.includes(e)));if(e(n))return Object.entries(n).every((e=>{let[r,t]=e;return!(!o.includes(r)||!i(t))&&t(c[r])}))}return!1};export{c as default};
//# sourceMappingURL=hasKeys.js.map