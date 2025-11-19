"use strict";const e=require("../type-checks/isUndefined.cjs"),t=require("../type-checks/isObject.cjs");module.exports=r=>{if(t(r)){const t=Object.entries(r).filter((t=>{let[r,s]=t;return!e(s)}));if(t.length>0)return Object.fromEntries(t)}};
//# sourceMappingURL=cleanObject.cjs.map
