"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9859],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={slug:"css-animation-timer",authors:"xiongtao",date:new Date("2022-09-15T00:00:00.000Z"),tags:["CSS","\u52a8\u753b","\u5b9a\u65f6\u5668","\u795e\u6765\u4e4b\u7b14"]},i=void 0,l={permalink:"/blog/css-animation-timer",editUrl:"https://github.com/LastKnightCoder/lastknightcoder/tree/master/blog/2022-09-15-\u4f7f\u7528CSS\u52a8\u753b\u53d6\u4ee3\u5b9a\u65f6\u5668.mdx",source:"@site/blog/2022-09-15-\u4f7f\u7528CSS\u52a8\u753b\u53d6\u4ee3\u5b9a\u65f6\u5668.mdx",title:"\u4f7f\u7528CSS\u52a8\u753b\u53d6\u4ee3\u5b9a\u65f6\u5668",description:"\u8be5\u7b14\u8bb0\u662f\u6765\u6e90\u4e8e\u516c\u4f17\u53f7\u6587\u7ae0\u8fd8\u5728\u7528\u5b9a\u65f6\u5668\u5417\uff1f\u501f\u52a9 CSS \u6765\u76d1\u542c\u4e8b\u4ef6\u3002",date:"2022-09-15T00:00:00.000Z",formattedDate:"2022\u5e749\u670815\u65e5",tags:[{label:"CSS",permalink:"/blog/tags/css"},{label:"\u52a8\u753b",permalink:"/blog/tags/\u52a8\u753b"},{label:"\u5b9a\u65f6\u5668",permalink:"/blog/tags/\u5b9a\u65f6\u5668"},{label:"\u795e\u6765\u4e4b\u7b14",permalink:"/blog/tags/\u795e\u6765\u4e4b\u7b14"}],readingTime:2.305,hasTruncateMarker:!0,authors:[{name:"\u718a\u6ed4",title:"\u524d\u7aef\u5de5\u7a0b\u5e08 @ \u963f\u91cc\u5df4\u5df4",url:"https://github.com/LastKnightCoder",imageURL:"https://cdn.staticaly.com/gh/LastKnightCoder/ImgHosting3@master/wallhaven-8opwwy.3cbn7rc981c0.webp",key:"xiongtao"}],frontMatter:{slug:"css-animation-timer",authors:"xiongtao",date:"2022-09-15T00:00:00.000Z",tags:["CSS","\u52a8\u753b","\u5b9a\u65f6\u5668","\u795e\u6765\u4e4b\u7b14"]},prevItem:{title:"Selection\u4e0eRange",permalink:"/blog/selection-and-range"},nextItem:{title:"encodeURI\u4e0eencodeURIComponent",permalink:"/blog/encodeURI\u4e0eencodeURIComponent"}},s={authorsImageUrls:[void 0]},c=[{value:"hover\u5ef6\u65f6\u89e6\u53d1",id:"hover\u5ef6\u65f6\u89e6\u53d1",level:2},{value:"\u4e00\u822c\u65b9\u6cd5",id:"\u4e00\u822c\u65b9\u6cd5",level:3},{value:"\u5229\u7528\u52a8\u753b\u7ed3\u675f\u4e8b\u4ef6",id:"\u5229\u7528\u52a8\u753b\u7ed3\u675f\u4e8b\u4ef6",level:3},{value:"\u957f\u6309\u89e6\u53d1",id:"\u957f\u6309\u89e6\u53d1",level:2},{value:"\u4e00\u822c\u65b9\u6cd5",id:"\u4e00\u822c\u65b9\u6cd5-1",level:3},{value:"\u5229\u7528\u52a8\u753b\u7ed3\u675f\u4e8b\u4ef6",id:"\u5229\u7528\u52a8\u753b\u7ed3\u675f\u4e8b\u4ef6-1",level:3},{value:"\u8f6e\u64ad\u548c\u6682\u505c",id:"\u8f6e\u64ad\u548c\u6682\u505c",level:2},{value:"\u4e00\u822c\u65b9\u6cd5",id:"\u4e00\u822c\u65b9\u6cd5-2",level:3},{value:"animationiteration \u4e8b\u4ef6",id:"animationiteration-\u4e8b\u4ef6",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u8be5\u7b14\u8bb0\u662f\u6765\u6e90\u4e8e\u516c\u4f17\u53f7\u6587\u7ae0",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/N25KcGneKPgvBa8zBownlw"},"\u8fd8\u5728\u7528\u5b9a\u65f6\u5668\u5417\uff1f\u501f\u52a9 CSS \u6765\u76d1\u542c\u4e8b\u4ef6"),"\u3002")),(0,r.kt)("h2",{id:"hover\u5ef6\u65f6\u89e6\u53d1"},"hover\u5ef6\u65f6\u89e6\u53d1"),(0,r.kt)("h3",{id:"\u4e00\u822c\u65b9\u6cd5"},"\u4e00\u822c\u65b9\u6cd5"),(0,r.kt)("p",null,"\u9f20\u6807\u8fdb\u5165\u65f6\u5f00\u59cb\u5b9a\u65f6\u5668"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var timer = null\nel.addEventListener('mouseover', () => {\n  timer && clearTimeout(timer)\n  timer = setTimeout(() => {\n    // \u5177\u4f53\u903b\u8f91\n  }, 1000)\n})\n")),(0,r.kt)("p",null,"\u9f20\u6807\u79bb\u5f00\u65f6\u53d6\u6d88\u5b9a\u65f6\u5668"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"el.addEventListener('mouseout', () => {\n  timer && clearTimeout(timer)\n})\n")),(0,r.kt)("h3",{id:"\u5229\u7528\u52a8\u753b\u7ed3\u675f\u4e8b\u4ef6"},"\u5229\u7528\u52a8\u753b\u7ed3\u675f\u4e8b\u4ef6"),(0,r.kt)("p",null,"\u4e3a\u5143\u7d20\u6dfb\u52a0\u5ef6\u65f6\u52a8\u753b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"button:hover{\n  opacity: 0.999; /*\u65e0\u5173\u7d27\u8981\u7684\u6837\u5f0f*/\n  transition: 0s 1s opacity; /*\u5ef6\u65f6 1s */\n}\n")),(0,r.kt)("p",null,"\u76d1\u542c\u52a8\u753b\u7ed3\u675f\u4e8b\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"el.addEventListener('transitionend', () => {\n  // \u5177\u4f53\u903b\u8f91\n})\n")),(0,r.kt)("p",null,"\u65e0\u9700\u5b9a\u65f6\u5668\uff0c\u4e5f\u65e0\u9700\u53d6\u6d88\uff0c\u66f4\u65e0\u9700\u8003\u8651 dom \u7ed3\u6784\uff0c\u5b8c\u7f8e\u5b9e\u73b0\u3002"),(0,r.kt)("h2",{id:"\u957f\u6309\u89e6\u53d1"},"\u957f\u6309\u89e6\u53d1"),(0,r.kt)("h3",{id:"\u4e00\u822c\u65b9\u6cd5-1"},"\u4e00\u822c\u65b9\u6cd5"),(0,r.kt)("p",null,"\u501f\u52a9\u5b9a\u65f6\u5668\uff0c\u6309\u4e0b\u65f6\u5f00\u542f\u5b9a\u65f6\u5668\uff0c\u79bb\u5f00\u65f6\u53d6\u6d88\u5b9a\u65f6\u5668"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"\nel.onmousedown = function(){\n    this.timer && clearTimeout(this.timer);\n    this.timer = settimeout(function(){\n        //\u4e1a\u52a1\u4ee3\u7801\n    },1000)\n}\nel.onmouseup = function(){\n    this.timer && clearTimeout(this.timer);\n}\n")),(0,r.kt)("h3",{id:"\u5229\u7528\u52a8\u753b\u7ed3\u675f\u4e8b\u4ef6-1"},"\u5229\u7528\u52a8\u753b\u7ed3\u675f\u4e8b\u4ef6"),(0,r.kt)("p",null,"\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},":active")," \u4f2a\u7c7b\u6dfb\u52a0\u5ef6\u65f6\u52a8\u753b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"button:hover:active{\n  opacity: .999; /*\u65e0\u5173\u7d27\u8981\u7684\u6837\u5f0f*/\n  transition: opacity 1s; /*\u5ef6\u65f6 1s */\n}\n")),(0,r.kt)("p",null,"\u7136\u540e\u518d\u76d1\u542c ",(0,r.kt)("inlineCode",{parentName:"p"},"transitionend")," \u4e8b\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"el.addEventListener('transitionend', () => {\n  // \u5177\u4f53\u903b\u8f91\n})\n")),(0,r.kt)("h2",{id:"\u8f6e\u64ad\u548c\u6682\u505c"},"\u8f6e\u64ad\u548c\u6682\u505c"),(0,r.kt)("h3",{id:"\u4e00\u822c\u65b9\u6cd5-2"},"\u4e00\u822c\u65b9\u6cd5"),(0,r.kt)("p",null,"\u9f20\u6807\u653e\u4e0a\u53bb\u65f6\u6682\u505c\uff0c\u9f20\u6807\u79bb\u5f00\u65f6\u81ea\u52a8\u6eda\u52a8\uff0c\u501f\u52a9\u5b9a\u65f6\u5668 ",(0,r.kt)("inlineCode",{parentName:"p"},"setInterveal")," \u8fdb\u884c\u8f6e\u64ad\uff0c\u9f20\u6807\u653e\u4e0a\u53bb\u65f6\u6e05\u9664\u5b9a\u65f6\u5668\uff0c\u9f20\u6807\u79bb\u5f00\u65f6\u65b0\u5efa\u5b9a\u65f6\u5668"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function autoPlay(){\n  timer && clearInterval(timer)\n  timer = setInterval(function(){\n    // \u8f6e\u64ad\u903b\u8f91\n  }, 1000)\n}\nautoPlay()\nview.onmouseover = function(){\n    timer && clearInterval(timer)\n}\nel.onmouseout = function(){\n    autoPlay()\n}\n")),(0,r.kt)("h2",{id:"animationiteration-\u4e8b\u4ef6"},"animationiteration \u4e8b\u4ef6"),(0,r.kt)("p",null,"\u8bbe\u7f6e\u52a8\u753b\u4e3a\u65e0\u9650\u6b21\u6570\uff0c\u6bcf\u6b21\u52a8\u753b\u5f00\u59cb\u65f6\u90fd\u4f1a\u89e6\u53d1 animationiteration \u4e8b\u4ef6\uff0c\u9f20\u6807\u653e\u4e0a\u53bb\u65f6\u52a8\u753b\u6682\u505c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".view {\n  animation: scroll 1s infinite; /*\u6bcf1s\u52a8\u753b\uff0c\u65e0\u9650\u5faa\u73af*/\n}\n.view:hover{\n  animation-play-state: paused; /*hover\u6682\u505c*/\n}\n@keyframes scroll {\n  to {\n    transform: translateZ(.1px); /*\u65e0\u5173\u7d27\u8981\u7684\u6837\u5f0f*/\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'\nview.addEventListener("animationiteration", () => {\n  // \u8f6e\u64ad\u903b\u8f91\n})\n')))}m.isMDXComponent=!0}}]);