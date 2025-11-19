"use strict";const e=require("../type-checks/isArray.cjs"),r=require("../type-checks/isPlainObject.cjs"),t=s=>{if(e(s))return s.map((e=>t(e)));if(r(s)){const e={};for(const[r,c]of Object.entries(s))e[r]=t(c);return e}return s};module.exports=t;
//# sourceMappingURL=clone.cjs.map
