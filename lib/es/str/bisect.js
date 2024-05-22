import t from"../type-checks/isString.js";const r=function(r,i){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t(r)){if(t(i)&&i.length>0){const t=r.indexOf(i);if(-1!==t){let e=r.substring(0,t),s=r.substring(t+i.length);return n&&(e=e.trim(),s=s.trim()),[e,s]}}return n?[r.trim(),""]:[r,""]}return["",""]};export{r as default};
//# sourceMappingURL=bisect.js.map
