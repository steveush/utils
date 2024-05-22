"use strict";const t=require("../str/toString.cjs"),e=require("./isNonNullable.cjs");module.exports=function(r){let i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e(r)&&("string"==typeof r||"[object String]"===t(r))&&(!i||i&&r.trim().length>0)};
//# sourceMappingURL=isString.cjs.map
