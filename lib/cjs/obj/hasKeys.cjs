"use strict";const e=require("../type-checks/isPlainObject.cjs"),r=require("../type-checks/isUndefined.cjs"),c=require("../type-checks/isArray.cjs"),s=require("../type-checks/isFunction.cjs"),i=require("../type-checks/isString.cjs");module.exports=(t,n)=>{if(e(t)){const u=Object.keys(t);if(r(n))return u.length>0;if(i(n))return u.includes(n);if(c(n))return n.every((e=>u.includes(e)));if(e(n))return Object.entries(n).every((e=>{let[r,c]=e;return!(!u.includes(r)||!s(c))&&c(t[r])}))}return!1};
//# sourceMappingURL=hasKeys.cjs.map
