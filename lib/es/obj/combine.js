import s from"../type-checks/isArray.js";import e from"../type-checks/isFunction.js";const t=(t,r,c)=>{c=e(c)?c:(s,e)=>s===e;const o=s(t),i=s(r);return o||i?o?i?[...t,...r.filter((s=>!t.some((e=>c(e,s)))))]:t.slice():r.slice():[]};export{t as default};
//# sourceMappingURL=combine.js.map
