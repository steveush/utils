"use strict";const e=require("../type-checks/isArray.cjs"),s=require("../type-checks/isFunction.cjs");module.exports=(c,r,t)=>{t=s(t)?t:(e,s)=>e===s;const i=e(c),o=e(r);return i||o?i?o?[...c,...r.filter((e=>!c.some((s=>t(s,e)))))]:c.slice():r.slice():[]};
//# sourceMappingURL=combine.cjs.map
