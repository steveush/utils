"use strict";const e=require("../type-checks/isNumber.cjs");module.exports=function(E){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MIN_SAFE_INTEGER,N=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Number.MAX_SAFE_INTEGER;return r=e(r)?r:Number.MIN_SAFE_INTEGER,N=e(N)?N:Number.MAX_SAFE_INTEGER,e(E)?E<r?r:E>N?N:E:r};
//# sourceMappingURL=clamp.cjs.map
