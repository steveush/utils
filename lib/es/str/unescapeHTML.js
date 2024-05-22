import t from"../type-checks/isString.js";const e={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#039;":"'"},o=/&(?:amp|lt|gt|quot|#(0+)?39);/g,p=p=>t(p)?p.replace(o,(t=>e[t])):"";export{p as default};
//# sourceMappingURL=unescapeHTML.js.map
