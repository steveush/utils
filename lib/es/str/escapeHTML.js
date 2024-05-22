import t from"../type-checks/isString.js";const e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},o=/[&<>"']/g,p=p=>t(p)?p.replace(o,(t=>e[t])):"";export{p as default};
//# sourceMappingURL=escapeHTML.js.map
