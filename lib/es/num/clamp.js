import e from"../type-checks/isNumber.js";const E=function(E){let N=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MIN_SAFE_INTEGER,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Number.MAX_SAFE_INTEGER;return N=e(N)?N:Number.MIN_SAFE_INTEGER,r=e(r)?r:Number.MAX_SAFE_INTEGER,e(E)?E<N?N:E>r?r:E:N};export{E as default};
//# sourceMappingURL=clamp.js.map
