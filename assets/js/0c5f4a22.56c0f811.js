"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5419],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f=n.createContext({}),u=function(e){var t=n.useContext(f),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(f.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,f=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(r),m=o,g=s["".concat(f,".").concat(m)]||s[m]||p[m]||l;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=s;var i={};for(var f in t)hasOwnProperty.call(t,f)&&(i[f]=t[f]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2628:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const l={slug:"Buffer",authors:"xiongtao",tags:["Node","Buffer"]},a=void 0,i={permalink:"/blog/Buffer",editUrl:"https://github.com/LastKnightCoder/lastknightcoder/tree/master/blog/2021-03-02-Buffer.mdx",source:"@site/blog/2021-03-02-Buffer.mdx",title:"Buffer",description:"Buffer \u662f Node.js \u7684\u5185\u7f6e\u7c7b\u578b\uff0c\u5b83\u662f\u7528\u6765\u8868\u793a\u5185\u5b58\u4e2d\u4e00\u5757\u533a\u57df\u7684\uff0c\u5b83\u4fdd\u5b58\u7684\u662f\u4e8c\u8fdb\u5236\u6570\u636e\uff0c\u53ef\u4ee5\u5c06\u5b83\u770b\u505a\u4e3a\u4e00\u4e2a\u4e8c\u8fdb\u5236\u6570\u7ec4\u3002",date:"2021-03-02T00:00:00.000Z",formattedDate:"2021\u5e743\u67082\u65e5",tags:[{label:"Node",permalink:"/blog/tags/node"},{label:"Buffer",permalink:"/blog/tags/buffer"}],readingTime:10.14,hasTruncateMarker:!0,authors:[{name:"\u718a\u6ed4",title:"\u524d\u7aef\u5de5\u7a0b\u5e08 @ \u963f\u91cc\u5df4\u5df4",url:"https://github.com/LastKnightCoder",imageURL:"https://cdn.staticaly.com/gh/LastKnightCoder/ImgHosting3@master/wallhaven-8opwwy.3cbn7rc981c0.webp",key:"xiongtao"}],frontMatter:{slug:"Buffer",authors:"xiongtao",tags:["Node","Buffer"]},prevItem:{title:"Stream",permalink:"/blog/2021/03/06/Stream"},nextItem:{title:"\u5b89\u5168\u7b97\u6cd5",permalink:"/blog/2020/11/05/\u5b89\u5168\u7b97\u6cd5"}},f={authorsImageUrls:[void 0]},u=[{value:"\u521b\u5efa Buffer \u5bf9\u8c61",id:"\u521b\u5efa-buffer-\u5bf9\u8c61",level:2},{value:"alloc",id:"alloc",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Buffer \u662f Node.js \u7684\u5185\u7f6e\u7c7b\u578b\uff0c\u5b83\u662f\u7528\u6765\u8868\u793a\u5185\u5b58\u4e2d\u4e00\u5757\u533a\u57df\u7684\uff0c\u5b83\u4fdd\u5b58\u7684\u662f\u4e8c\u8fdb\u5236\u6570\u636e\uff0c\u53ef\u4ee5\u5c06\u5b83\u770b\u505a\u4e3a\u4e00\u4e2a\u4e8c\u8fdb\u5236\u6570\u7ec4\u3002"),(0,o.kt)("p",null,"Buffer \u53ef\u4ee5\u7528\u6765\u8868\u793a\u56fe\u7247\u3001\u89c6\u9891\u8fd9\u6837\u7684\u4e8c\u8fdb\u5236\u6570\u636e\uff0c\u53e6\u5916\u6211\u4eec\u4ece\u6587\u4ef6\u4e2d\u8bfb\u53d6\u5230\u7684\u4e5f\u662f Buffer \u7c7b\u578b\u7684\u6570\u636e\uff0c\u4ece\u7f51\u7edc\u4e2d\u63a5\u6536\u7684\u6570\u636e\u4e5f\u662f Buffer \u7c7b\u578b\u7684\u6570\u636e\uff0c\u6240\u4ee5\u5b66\u4e60 Buffer \u8fd8\u662f\u5f88\u6709\u5fc5\u8981\u7684\u3002"),(0,o.kt)("p",null,"Buffer \u4f4d\u4e8e\u5168\u5c40\u4f5c\u7528\u57df\u4e2d\uff0c\u6240\u4ee5\u4e0d\u9700\u8981\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"require('buffer')")," \u6765\u5f15\u5165 Buffer\u3002"),(0,o.kt)("h2",{id:"\u521b\u5efa-buffer-\u5bf9\u8c61"},"\u521b\u5efa Buffer \u5bf9\u8c61"),(0,o.kt)("h3",{id:"alloc"},"alloc"),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"Buffer.alloc(size, [fill], [encoding])")," \u6765\u5206\u914d\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"size")," \u5b57\u8282\u5927\u5c0f\u7684\u5185\u5b58\uff0c\u8fd8\u53ef\u4ee5\u63a5\u6536\u4e24\u4e2a\u53ef\u9009\u53c2\u6570"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"fill\uff1a\u4f7f\u7528 fill \u6765\u586b\u5145 Buffer \u4e2d\u7684\u6bcf\u4e00\u4e2a\u5b57\u8282"),(0,o.kt)("li",{parentName:"ul"},"encoding\uff1a\u5982\u679c fill \u4e3a\u5b57\u7b26\u4e32\uff0c\u90a3\u4e48\u4f7f\u7528 encoding \u6765\u5bf9\u5b57\u7b26\u4e32\u8fdb\u884c\u7f16\u7801\u4e3a\u4e8c\u8fdb\u5236")),(0,o.kt)("p",null,"\u5f53\u4e0d\u6307\u5b9a fill \u53c2\u6570\uff0c\u9ed8\u8ba4\u4e3a\u586b\u5145 0\u3002"))}p.isMDXComponent=!0}}]);