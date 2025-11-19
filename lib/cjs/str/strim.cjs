"use strict";const e=require("../type-checks/isString.cjs"),s=require("../type-checks/isRegExp.cjs");module.exports=(t,i)=>e(t)&&(e(i)||s(i))?t.split(i).map((e=>e.trim())).filter(Boolean):[];
//# sourceMappingURL=strim.cjs.map
