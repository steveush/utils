import r from"../type-checks/isArray.js";import t from"../type-checks/isPlainObject.js";const e=function(o){t(o)||(o={});for(var s=arguments.length,c=new Array(s>1?s-1:0),f=1;f<s;f++)c[f-1]=arguments[f];for(const s of c.filter((r=>t(r))))for(const[c,f]of Object.entries(s))t(f)?o[c]=e(o[c],f):r(f)?o[c]=f.slice():o[c]=f;return o};export{e as default};
//# sourceMappingURL=merge.js.map
