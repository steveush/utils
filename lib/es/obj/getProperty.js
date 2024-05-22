import t from"../str/propertyPath.js";import r from"../str/bisect.js";import s from"../type-checks/isArray.js";import o from"../type-checks/isPlainObject.js";import i from"../type-checks/isString.js";const e=(c,p)=>{if(s(c)||o(c)){const m=t(p),[f,j]=r(m,".");if(i(f,!0)){const t=c[f];return i(j,!0)?s(t)||o(t)?e(t,j):void 0:t}}};export{e as default};
//# sourceMappingURL=getProperty.js.map
