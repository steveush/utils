import t from"../str/toString.js";import o from"./isNonNullable.js";const r=function(r){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return o(r)&&("string"==typeof r||"[object String]"===t(r))&&(!n||n&&r.trim().length>0)};export{r as default};
//# sourceMappingURL=isString.js.map
