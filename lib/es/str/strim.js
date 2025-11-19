import t from"../type-checks/isString.js";import e from"../type-checks/isRegExp.js";const s=(s,i)=>t(s)&&(t(i)||e(i))?s.split(i).map((t=>t.trim())).filter(Boolean):[];export{s as default};
//# sourceMappingURL=strim.js.map
