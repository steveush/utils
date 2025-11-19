"use strict";const e=require("../type-checks/isArray.cjs"),r=require("../type-checks/isPlainObject.cjs"),t=function(c){r(c)||(c={});for(var s=arguments.length,o=new Array(s>1?s-1:0),i=1;i<s;i++)o[i-1]=arguments[i];for(const s of o.filter((e=>r(e))))for(const[o,i]of Object.entries(s))r(i)?c[o]=t(c[o],i):e(i)?c[o]=i.slice():c[o]=i;return c};module.exports=t;
//# sourceMappingURL=merge.cjs.map
