"use strict";const e=require("../type-checks/isString.cjs"),t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},s=/[&<>"']/g;module.exports=c=>e(c)?c.replace(s,(e=>t[e])):"";
//# sourceMappingURL=escapeHTML.cjs.map
