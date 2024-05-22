"use strict";const t=require("../type-checks/isString.cjs"),e={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#039;":"'"},s=/&(?:amp|lt|gt|quot|#(0+)?39);/g;module.exports=c=>t(c)?c.replace(s,(t=>e[t])):"";
//# sourceMappingURL=unescapeHTML.cjs.map
