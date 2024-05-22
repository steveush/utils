import e from"../type-checks/isString.js";import t from"../type-checks/isPlainObject.js";const r=function(r,n){if(e(r)){for(var c=arguments.length,i=new Array(c>2?c-2:0),s=2;s<c;s++)i[s-2]=arguments[s];let e=i;return t(n)?e=n:e.unshift(n),Object.entries(e).forEach((e=>{let[t,n]=e;r=r.replaceAll(`{${t}}`,n+"")})),r}return""};export{r as default};
//# sourceMappingURL=format.js.map
