"use strict";const t=require("../type-checks/isString.cjs");module.exports=function(e,r){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t(e)){if(t(r)&&r.length>0){const t=e.indexOf(r);if(-1!==t){let n=e.substring(0,t),s=e.substring(t+r.length);return i&&(n=n.trim(),s=s.trim()),[n,s]}}return i?[e.trim(),""]:[e,""]}return["",""]};
//# sourceMappingURL=bisect.cjs.map
