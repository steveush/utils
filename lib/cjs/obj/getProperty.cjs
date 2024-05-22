"use strict";const e=require("../str/propertyPath.cjs"),r=require("../str/bisect.cjs"),s=require("../type-checks/isArray.cjs"),c=require("../type-checks/isPlainObject.cjs"),t=require("../type-checks/isString.cjs"),i=(u,o)=>{if(s(u)||c(u)){const j=e(o),[n,p]=r(j,".");if(t(n,!0)){const e=u[n];return t(p,!0)?s(e)||c(e)?i(e,p):void 0:e}}};module.exports=i;
//# sourceMappingURL=getProperty.cjs.map
