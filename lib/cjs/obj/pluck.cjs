"use strict";const e=require("../type-checks/isPlainObject.cjs"),r=require("../type-checks/isFunction.cjs"),t=require("../type-checks/isArray.cjs"),c=require("../type-checks/isString.cjs");module.exports=(s,i)=>{if(e(s)){let e=null;if(c(i)&&(e=e=>{let[r]=e;return r===i}),t(i)&&(e=e=>{let[r]=e;return i.includes(r)}),r(i)&&(e=e=>{let[r,t]=e;return i(t,r,s)}),null!==e)return Object.fromEntries(Object.entries(s).filter(e))}return{}};
//# sourceMappingURL=pluck.cjs.map