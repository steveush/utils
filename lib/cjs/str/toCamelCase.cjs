"use strict";const e=require("../type-checks/isString.cjs"),r=require("../type-checks/isArray.cjs"),t=require("./toPartsLowerCase.cjs");module.exports=function(s){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],c=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(s)?(o=r(o,!0,(r=>e(r)))?o:[],t(s).map(((e,r)=>{const t=0===r;return t&&!c||!o.some((r=>r.toLocaleLowerCase()===e))?t?e:e.charAt(0).toLocaleUpperCase()+e.substring(1):e.toLocaleUpperCase()})).join("")):""};
//# sourceMappingURL=toCamelCase.cjs.map
