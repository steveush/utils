import e from"../type-checks/isString.js";import o from"../type-checks/isArray.js";import t from"./toPartsLowerCase.js";const r=function(r){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e(r)?(s=o(s,!0,(o=>e(o)))?s:[],t(r).map(((e,o)=>s.some((o=>o.toLocaleLowerCase()===e))?e.toLocaleUpperCase():e.charAt(0).toLocaleUpperCase()+e.substring(1))).join("")):""};export{r as default};
//# sourceMappingURL=toPascalCase.js.map