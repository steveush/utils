import r from"../type-checks/isArray.js";import t from"../type-checks/isPlainObject.js";const e=s=>{if(r(s))return s.map((r=>e(r)));if(t(s)){const r={};for(const[t,o]of Object.entries(s))r[t]=e(o);return r}return s};export{e as default};
//# sourceMappingURL=clone.js.map
