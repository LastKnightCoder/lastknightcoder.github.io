"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7168],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,g=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(g,l(l({ref:t},s),{},{components:r})):n.createElement(g,l({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6715:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={slug:"node-event-loop",tags:["Node","Event Loop"],authors:"xiongtao"},l=void 0,i={permalink:"/blog/node-event-loop",editUrl:"https://github.com/LastKnightCoder/lastknightcoder/tree/master/blog/2021-02-17-Node \u4e8b\u4ef6\u5faa\u73af.mdx",source:"@site/blog/2021-02-17-Node \u4e8b\u4ef6\u5faa\u73af.mdx",title:"Node \u4e8b\u4ef6\u5faa\u73af",description:"Node.js \u662f\u5355\u7ebf\u7a0b\u7684\uff0c\u4f46\u662f\u5b83\u5374\u53ef\u4ee5\u5e94\u7528\u5728\u9ad8\u5e76\u53d1\u573a\u666f\uff0c\u539f\u56e0\u5c31\u662f\u5b83\u7684\u4e8b\u4ef6\u5faa\u73af\u673a\u5236\u3002\u6240\u4ee5\u672c\u7bc7\u6587\u7ae0\u6765\u4ecb\u7ecd Node.js \u7684\u4e8b\u4ef6\u5faa\u73af\u673a\u5236\u3002",date:"2021-02-17T00:00:00.000Z",formattedDate:"2021\u5e742\u670817\u65e5",tags:[{label:"Node",permalink:"/blog/tags/node"},{label:"Event Loop",permalink:"/blog/tags/event-loop"}],readingTime:13.61,hasTruncateMarker:!0,authors:[{name:"\u718a\u6ed4",title:"\u524d\u7aef\u5de5\u7a0b\u5e08 @ \u9ad8\u5fb7",url:"https://github.com/LastKnightCoder",imageURL:"https://cdn.staticaly.com/gh/LastKnightCoder/ImgHosting3@master/wallhaven-8opwwy.3cbn7rc981c0.webp",key:"xiongtao"}],frontMatter:{slug:"node-event-loop",tags:["Node","Event Loop"],authors:"xiongtao"},prevItem:{title:"Buffer",permalink:"/blog/Buffer"},nextItem:{title:"\u5b89\u5168\u7b97\u6cd5",permalink:"/blog/2020/11/05/\u5b89\u5168\u7b97\u6cd5"}},c={authorsImageUrls:[void 0]},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Node.js \u662f\u5355\u7ebf\u7a0b\u7684\uff0c\u4f46\u662f\u5b83\u5374\u53ef\u4ee5\u5e94\u7528\u5728\u9ad8\u5e76\u53d1\u573a\u666f\uff0c\u539f\u56e0\u5c31\u662f\u5b83\u7684\u4e8b\u4ef6\u5faa\u73af\u673a\u5236\u3002\u6240\u4ee5\u672c\u7bc7\u6587\u7ae0\u6765\u4ecb\u7ecd Node.js \u7684\u4e8b\u4ef6\u5faa\u73af\u673a\u5236\u3002"))}u.isMDXComponent=!0}}]);