"use strict";const e=require("../type-checks/isString.cjs"),r=require("../type-checks/isPlainObject.cjs");module.exports=function(t,c){if(e(t)){for(var s=arguments.length,i=new Array(s>2?s-2:0),n=2;n<s;n++)i[n-2]=arguments[n];let e=i;return r(c)?e=c:e.unshift(c),Object.entries(e).forEach((e=>{let[r,c]=e;t=t.replaceAll(`{${r}}`,c+"")})),t}return""};
//# sourceMappingURL=format.cjs.map
