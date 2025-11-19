import e from"../type-checks/isUndefined.js";import t from"../type-checks/isObject.js";const r=r=>{if(t(r)){const t=Object.entries(r).filter((t=>{let[r,s]=t;return!e(s)}));if(t.length>0)return Object.fromEntries(t)}};export{r as default};
//# sourceMappingURL=cleanObject.js.map
