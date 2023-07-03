"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6713],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>s});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=m(a),s=l,d=c["".concat(o,".").concat(s)]||c[s]||k[s]||r;return a?n.createElement(d,i(i({ref:t},u),{},{components:a})):n.createElement(d,i({ref:t},u))}));function s(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4056:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var n=a(7462),l=(a(7294),a(3905));const r={slug:"how-to-read-tc39-spec",tags:["TC39"],authors:"xiongtao"},i=void 0,p={permalink:"/blog/how-to-read-tc39-spec",editUrl:"https://github.com/LastKnightCoder/lastknightcoder/tree/master/blog/2023-03-09-\u5982\u4f55\u8bfb\u61c2 TC39.mdx",source:"@site/blog/2023-03-09-\u5982\u4f55\u8bfb\u61c2 TC39.mdx",title:"\u5982\u4f55\u8bfb\u61c2 TC39",description:"TC39 \u662f\u4ec0\u4e48\uff1a\u662f\u4e00\u4e2a\u7531 JavaScript \u5f00\u53d1\u8005\u3001\u5b9e\u73b0\u8005\u3001\u5b66\u8005\u7b49\u7ec4\u6210\u7684\u56e2\u4f53\uff0c\u4e0e JavaScript \u793e\u533a\u5408\u4f5c\u7ef4\u62a4\u548c\u53d1\u5c55 JavaScript \u7684\u6807\u51c6\u3002",date:"2023-03-09T00:00:00.000Z",formattedDate:"2023\u5e743\u67089\u65e5",tags:[{label:"TC39",permalink:"/blog/tags/tc-39"}],readingTime:11.98,hasTruncateMarker:!0,authors:[{name:"\u718a\u6ed4",title:"\u524d\u7aef\u5de5\u7a0b\u5e08 @ \u9ad8\u5fb7",url:"https://github.com/LastKnightCoder",imageURL:"https://cdn.staticaly.com/gh/LastKnightCoder/ImgHosting3@master/wallhaven-8opwwy.3cbn7rc981c0.webp",key:"xiongtao"}],frontMatter:{slug:"how-to-read-tc39-spec",tags:["TC39"],authors:"xiongtao"},prevItem:{title:"\u5361\u7247\u7b14\u8bb0\u5199\u4f5c\u6cd5",permalink:"/blog/card-note"},nextItem:{title:"\u79fb\u52a8\u7aef\u6587\u5b57\u5782\u76f4\u5c45\u4e2d\u65b9\u6848",permalink:"/blog/mobile-text-middle"}},o={authorsImageUrls:[void 0]},m=[{value:"\u4e3a\u4ec0\u4e48\u9700\u8981\u8bfb\u89c4\u8303",id:"\u4e3a\u4ec0\u4e48\u9700\u8981\u8bfb\u89c4\u8303",level:2},{value:"\u53d1\u7248\u6d41\u7a0b",id:"\u53d1\u7248\u6d41\u7a0b",level:2},{value:"ECMA-262",id:"ecma-262",level:2},{value:"ECMA-402",id:"ecma-402",level:2},{value:"ECMA-404",id:"ecma-404",level:2},{value:"Objects",id:"objects",level:3},{value:"Arrays",id:"arrays",level:3},{value:"Numbers",id:"numbers",level:3},{value:"String",id:"string",level:3},{value:"ECMA-414",id:"ecma-414",level:2}],u={toc:m};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"TC39 \u662f\u4ec0\u4e48\uff1a\u662f\u4e00\u4e2a\u7531 JavaScript \u5f00\u53d1\u8005\u3001\u5b9e\u73b0\u8005\u3001\u5b66\u8005\u7b49\u7ec4\u6210\u7684\u56e2\u4f53\uff0c\u4e0e JavaScript \u793e\u533a\u5408\u4f5c",(0,l.kt)("strong",{parentName:"p"},"\u7ef4\u62a4\u548c\u53d1\u5c55 JavaScript \u7684\u6807\u51c6"),"\u3002"),(0,l.kt)("p",null,"TC39 \u5305\u542b\u56db\u4e2a\u89c4\u8303\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ECMA-262\uff1aECMAScript"),(0,l.kt)("li",{parentName:"ul"},"ECMA-402\uff1a\u56fd\u9645\u5316 API"),(0,l.kt)("li",{parentName:"ul"},"ECMA-404\uff1aJSON"),(0,l.kt)("li",{parentName:"ul"},"ECMA-414\uff1a\u89c4\u5b9a\u54ea\u4e9b\u89c4\u8303\u662f\u4e0e ECMAScript \u6709\u5173\u7684\uff0c\u76ee\u524d\u53ea\u6709 262\u3001402 \u548c 404")),(0,l.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981\u8bfb\u89c4\u8303"},"\u4e3a\u4ec0\u4e48\u9700\u8981\u8bfb\u89c4\u8303"),(0,l.kt)("p",null,"\u5173\u4e8e\u52a0\u6cd5\u8fd0\u7b97\u7b26\u4f60\u77e5\u9053\u591a\u5c11\uff1f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"[] + {} // '[object Object]'\n[] + [] // ''\n{} + [] // 0\n{} + {} // NaN\n[] + {} == {} + [] // true\n{} + [] != [] + {} // true\n")),(0,l.kt)("p",null,"\u4e3a\u4ec0\u4e48\u6709\u4e9b\u65b9\u6cd5\u5728\u539f\u578b\u4e0a\u5de5\u4f5c\uff0c\u6709\u4e9b\u4e0d\u884c\uff1f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"> Array.prototype.push(42)\n1\n> Array.prototype\n[ 42 ]\n> Array.isArray(Array.prototype)\ntrue\n> Set.prototype.add(42)\nTypeError: Method Set.prototype.add called on incompatible receiver #<Set>\n    at Set.add (<anonymous>)\n> Set.prototype\nSet {}\n")),(0,l.kt)("p",null,"\u4f60\u80fd\u56de\u7b54\u4e0a\u9762\u7684\u95ee\u9898\u5417\uff0c\u4e5f\u8bb8\u4f60\u4f1a\u53bb\u67e5\u9605 MDN \u6216\u8005\u4e00\u4e9b\u535a\u6587\uff0c\u4f46\u662f\u4e0a\u9762\u7ed9\u7684\u89e3\u91ca\u53ef\u80fd\u90fd\u662f\u542b\u7cca\u4e0d\u6e05\u6216\u8005\u4e92\u76f8\u77db\u76fe\u7684\uff0c\u8fd9\u4e2a\u65f6\u5019\u4f60\u5c31\u9700\u8981\u67e5\u770b\u89c4\u8303\u4e86\u3002"),(0,l.kt)("h2",{id:"\u53d1\u7248\u6d41\u7a0b"},"\u53d1\u7248\u6d41\u7a0b"),(0,l.kt)("p",null,"\u4ece ES5 \u5230 ES6 \u7ecf\u8fc7\u4e86\u5341\u5e74\uff0c\u4ece ES6 \u6765\u770b\uff0c\u53d1\u7248\u5468\u671f\u8fc7\u957f\u5b58\u5728 2 \u4e2a\u95ee\u9898\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7248\u672c\u4e4b\u95f4\u7684\u65f6\u95f4\u8de8\u5ea6\u592a\u957f\uff0c\u63d0\u65e9\u5b9a\u7a3f\u7684\u7279\u6027\u8981\u7b49\u5f85\u975e\u5e38\u957f\u7684\u65f6\u95f4\uff0c\u4e00\u76f4\u7b49\u5230\u89c4\u8303\u6b63\u5f0f\u53d1\u5e03\uff08\u624d\u80fd\u88ab\u5b9e\u73b0\u548c\u4f7f\u7528\uff09\uff0c\u800c\u9760\u540e\u7684\u7279\u6027\u5f80\u5f80\u8d76\u5728\u6700\u540e\u53d1\u7248\u671f\u9650\u4e4b\u524d\u624d\u5b9a\u7a3f\uff0c\u5b58\u5728\u98ce\u9669"),(0,l.kt)("li",{parentName:"ul"},"\u8bed\u8a00\u7279\u6027\u7684\u8bbe\u8ba1\u4e0e\u5b9e\u73b0\u548c\u4f7f\u7528\u76f8\u9694\u592a\u4e45\uff0c\u5728\u5b9e\u73b0\u548c\u4f7f\u7528\u9636\u6bb5\u624d\u53d1\u73b0\u8bbe\u8ba1\u7f3a\u9677\u4e3a\u65f6\u5df2\u665a")),(0,l.kt)("p",null,"\u4e3a\u6b64\uff0c",(0,l.kt)("a",{parentName:"p",href:"https://www.ecma-international.org/memento/tc39-m.htm"},"TC39"),"\uff08ECMA \u56fd\u9645\u7ec4\u7ec7\u7b2c 39 \u53f7\u6280\u672f\u59d4\u5458\u4f1a\uff09\u542f\u52a8\u4e86\u65b0\u7684\u6d41\u7a0b\uff0c\u4e00\u4efd\u63d0\u6848\u8981\u6210\u4e3a JavaScript \u6807\u51c6\uff0c\u8981\u7ecf\u8fc7",(0,l.kt)("a",{parentName:"p",href:"https://tc39.es/process-document/"},"\u4e94\u4e2a\u6d41\u7a0b"),"\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Stage 0\uff1a\u7a3b\u8349\u4eba\u9636\u6bb5\uff08strawman\uff09",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u63d0\u4ea4 pull request \u5230\xa0",(0,l.kt)("a",{parentName:"li",href:"https://github.com/tc39/ecma262"},"GitHub - tc39/ecma262: Status, process, and documents for ECMA262")),(0,l.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u662f\u4e00\u4e2a\u63d0\u8bae\uff0c\u60f3\u6cd5\uff0c\u521d\u6b65\u63cf\u8ff0"))),(0,l.kt)("li",{parentName:"ol"},"Stage 1\uff1a\u63d0\u6848\u9636\u6bb5\uff08proposal\uff09",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"TC39 \u6210\u5458\u4f5c\u4e3a champion"),(0,l.kt)("li",{parentName:"ol"},"TC39 \u5ba1\u9605\u901a\u8fc7"),(0,l.kt)("li",{parentName:"ol"},"\u6709\u5b9e\u73b0\u7684 Demo \u6216\u8005 Polyfill"),(0,l.kt)("li",{parentName:"ol"},"\u521d\u6b65\u63cf\u5199\u6807\u51c6\u7684\u8bed\u4e49\u8bed\u6cd5\uff0c\u7b97\u6cd5\u590d\u6742\u5ea6\uff0c\u89e3\u51b3\u7684\u95ee\u9898\u7b49"))),(0,l.kt)("li",{parentName:"ol"},"Stage 2\uff1a\u8349\u6848\u9636\u6bb5\uff08Draft\uff09",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u6709\u4e24\u4e2a\u6216\u4e24\u4e2a\u4ee5\u4e0a\u7684\u5b9e\u73b0\uff08\u5305\u62ec babel \u8fd9\u7c7b\u7684\u8f6c\u8bd1\u5b9e\u73b0\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u6b63\u5f0f\u7684\u8bed\u8a00\u63cf\u8ff0\u8be5\u8bed\u6cd5\uff0capi \u7b49"))),(0,l.kt)("li",{parentName:"ol"},"Stage 3\uff1a\u5019\u9009\u9636\u6bb5\uff08candidate\uff09",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u81f3\u5c11 2 \u4e2a\u5b9e\u73b0\uff0c\u53ef\u4ee5\u4e3a\u5b9e\u9a8c\u6027\u5b9e\u73b0"),(0,l.kt)("li",{parentName:"ol"},"ECMAScript spec editor \u901a\u8fc7\u5ba1\u6838"),(0,l.kt)("li",{parentName:"ol"},"TC39 review \u901a\u8fc7"),(0,l.kt)("li",{parentName:"ol"},"\u6587\u6863\u7f16\u5199\u5b8c\u6210"))),(0,l.kt)("li",{parentName:"ol"},"Stage 4\uff1a\u5b8c\u6210\u9636\u6bb5\uff08finished\uff09",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u7f16\u5199 test 262 \u6d4b\u8bd5\u7528\u4f8b"),(0,l.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u4e24\u4e2a\u5b9e\u73b0\u8be5\u7279\u6027\u7684\u5185\u6838\u6d4b\u8bd5"),(0,l.kt)("li",{parentName:"ol"},"ECMAScript spec editor \u901a\u8fc7\u5ba1\u6838"),(0,l.kt)("li",{parentName:"ol"},"\u5f00\u53d1\u8005\u8868\u793a\u652f\u6301\u548c\u8ba4\u53ef")))),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tc39/ecma262/"},"Github")," \u4e0a\u516c\u5e03\u4e86\u6240\u6709\u7684\u63d0\u6848\uff0c\u6bcf\u4e24\u4e2a\u6708\u8ba8\u8bba\u4e00\u6b21\u63d0\u6848\u3002"),(0,l.kt)("p",null,"TC39 \u6bcf\u5e74\u90fd\u4f1a\u9009\u53d6\u4e00\u4e2a\u65f6\u95f4\u70b9\uff0c\u5bf9\u89c4\u8303\u8fdb\u884c\u5feb\u7167\uff0c\u4f7f\u5176\u6210\u4e3a\u5f53\u5e74\u7684 ECMAScript \u8bed\u8a00\u6807\u51c6\uff0c\u5e76\u9644\u4e0a\u7248\u672c\u53f7\u3002"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u5176\u5b9e\u6211\u89c9\u5f97\u6211\u4eec\u73b0\u5728\u4e0d\u5fc5\u5173\u6ce8\u6bcf\u5e74\u53d1\u5e03\u4e86\u4ec0\u4e48\u7279\u6027\uff0c\u6bd4\u5982 ES2023 \u53d1\u5e03\u4e86\u4ec0\u4e48\u7279\u6027\uff0c\u800c\u53ea\u9700\u8981\u5173\u6ce8\u6709\u4ec0\u4e48\u63d0\u6848\u5b8c\u6210\u4e86\u5373\u53ef\uff0c\u5b98\u65b9\u6bcf\u5e74\u90fd\u63a8\u51fa\u4e00\u4e2a\u7248\u672c\u53ef\u80fd\u662f\u60f3\u8868\u793a\u6bcf\u5e74\u90fd\u6709\u4e00\u4e2a\u4ec0\u4e48\u6837\u7684\u8fdb\u5c55\u5427\uff0c\u4f46\u5176\u5b9e\u4e0d\u516c\u5e03\u4e5f\u6ca1\u4e8b\uff0c\u5177\u4f53\u843d\u5230\u5b9e\u5904\u7684\u8fd8\u662f\u770b\u6709\u4ec0\u4e48\u63d0\u6848\u5b8c\u6210\u4e86\uff0c\u50cf\u5176\u4ed6\u7684\u89c4\u8303\uff0c\u6bd4\u5982 CSS \u89c4\u8303\u5c31\u6ca1\u6709\u8981\u6bcf\u5e74\u53d1\u5e03\u4e00\u4e2a\u7248\u672c\uff0c\u751a\u81f3\u5df2\u7ecf\u6ca1\u6709\u7248\u672c\u7684\u6982\u5ff5\u4e86\uff0c\u867d\u7136\u4e00\u76f4\u8bf4\u7684\u662f CSS3\uff0c\u4f46\u662f\u5df2\u7ecf\u662f\u5212\u5206\u4e3a\u591a\u4e2a\u6a21\u5757\uff0c\u5404\u4e2a\u6a21\u5757\u72ec\u81ea\u53d1\u5c55\u3002 ")),(0,l.kt)("h2",{id:"ecma-262"},"ECMA-262"),(0,l.kt)("p",null,"ECMA-262 \u662f\u6709\u5173\u4e8e ECMAScript \u7684\u89c4\u8303\uff0c\u91cc\u9762\u63cf\u8ff0\u4e86\u8bed\u8a00\u7684\u6240\u6709\u7ec6\u8282\uff0c\u6d4f\u89c8\u5668\u548c Node.js \u5747\u662f\u4ee5\u6b64\u89c4\u8303\u800c\u8fdb\u884c\u5b9e\u73b0\u7684\u3002\u4f46\u662f\u9664\u6b64\u4e4b\u5916\uff0c\u6d4f\u89c8\u5668\u548c Node.js \u8fd8\u5b9e\u73b0\u4e86\u4e00\u4e9b\u5b83\u4eec\u7279\u6709\u7684\u4e1c\u897f\uff0c\u6211\u4eec\u6765\u770b\u4e0b\u54ea\u4e9b\u662f ECMAScript \u89c4\u8303\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u8bed\u6cd5\uff0c\u5982 for ... in"),(0,l.kt)("th",{parentName:"tr",align:null},"\u2705"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8bed\u4e49\uff0c\u5982 typeof null"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Object, Array, Function, Number, Math, Proxy, globalThis, ..."),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"console, setTimeout, setInterval, clearTimeout, clearInterval"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c \u8fd9\u4e9b\u4e1c\u897f\u5728\u6d4f\u89c8\u5668\u548c Node.js \u4e2d\u90fd\u6709\uff0c\u4f46\u90fd\u662f\u975e\u6807\u51c6\u7684\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Buffer, process, global"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c \u8fd9\u4e9b\u90fd\u662f\u53ea\u9488\u5bf9 Node.js \u7684 globals\uff0cglobalThis \u662f\u7531\u6807\u51c6\u5b9a\u4e49\u7684\uff0c\u5e76\u4e14\u6d4f\u89c8\u5668\u8fdb\u884c\u4e86\u5b9e\u73b0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"module, exports, require, ","_","_","dirname, ","_","_","filename"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c \u8fd9\u4e9b\u662f\u4ec5\u9002\u7528\u4e8e Node.js \u6a21\u5757\u7684\u5168\u5c40\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"window, alert, confirm, document, ..."),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c \u6d4f\u89c8\u5668\u72ec\u6709")))),(0,l.kt)("p",null,"\u7531\u4e8e\u8fd9\u662f\u4e00\u95e8\u89c4\u8303\uff0c\u4e8b\u65e0\u5de8\u7ec6\u7684\u5305\u542b\u4e86\u8bed\u8a00\u7684\u6240\u6709\u7ec6\u8282\uff0c\u56e0\u6b64\u4e0d\u4f1a\u6709\u4eba\u4ece\u5934\u5230\u5c3e\u8bfb\u4e00\u904d\u7684\uff0c\u76f8\u53cd\uff0c\u53ea\u770b\u4e0e\u4f60\u8bd5\u56fe\u5bfb\u627e\u7684\u4e1c\u897f\u76f8\u5bf9\u5e94\u7684\u90e8\u5206\uff0c\u5e76\u4e14\u5728\u8be5\u90e8\u5206\u53ea\u770b\u4f60\u9700\u8981\u7684\u4e1c\u897f\u3002"),(0,l.kt)("p",null,"\u8fd9\u91cc\u7ed9\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"String.prototype.substring")," \u4f8b\u5b50\u6765\u8bf4\u660e\u600e\u4e48\u770b\u89c4\u8303\u3002\u73b0\u5728\u5047\u8bbe\u6211\u6709\u4ee5\u4e0b\u7591\u95ee"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u4e0d\u8fd0\u884c\u4ee3\u7801\uff0c\u4e0b\u9762\u7684\u4ee3\u7801\u4f1a\u8fd4\u56de\u4ec0\u4e48\uff1a"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"String.prototype.substring.call(undefined, 2, 4);\n"))),(0,l.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u6709\u4e24\u79cd\u731c\u60f3\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},'\u5c06 undefined \u8f6c\u5316\u4e3a "undefined"\uff0c\u7136\u540e\u8fd4\u56de [2, 4) \u7684\u503c\uff0c\u5373 "de"'),(0,l.kt)("li",{parentName:"ol"},"\u62d2\u7edd\u5c06 undefined \u4f5c\u4e3a\u53c2\u6570\uff0c\u76f4\u63a5\u629b\u51fa\u9519\u8bef")),(0,l.kt)("p",null,"\u8fd9\u65f6\u4f60\u53bb\u641c ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring"},"MDN"),"\uff0c\u4f46\u662f MDN \u4e5f\u6ca1\u6709\u7ed9\u51fa\u8fd9\u79cd\u60c5\u51b5\u7684\u89e3\u91ca\uff0c\u8fd9\u4e2a\u65f6\u5019\u4f60\u5c31\u9700\u8981\u770b\u89c4\u8303\u4e86\u3002"),(0,l.kt)("p",null,"\u6253\u5f00 ",(0,l.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/"},"https://tc39.es/ecma262/")," \uff0c\u7136\u540e\u641c\u7d22 ",(0,l.kt)("inlineCode",{parentName:"p"},"String.prototype.substring")," \u53ef\u4ee5\u770b\u5230\u4e00\u6761\u8bb0\u5f55\uff0c\u8be6\u7ec6\u7684\u63cf\u8ff0\u4e86\u529f\u80fd\u548c\u6574\u4e2a\u7684\u7b97\u6cd5\u6d41\u7a0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.staticaly.com/gh/LastKnightCoder/image-for-2022@master/Pasted-image-20230305151212.7dp7c1zr1oo0.png",alt:null})),(0,l.kt)("p",null,"\u6211\u4eec\u770b\u7b2c\u4e00\u6b65\uff1a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Let\xa0O\xa0be ?\xa0",(0,l.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-requireobjectcoercible"},"RequireObjectCoercible")," (this\xa0value).")),(0,l.kt)("p",null,"\u9996\u5148\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," \u8fdb\u884c\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"RequireObjectCoercible")," \u62bd\u8c61\u64cd\u4f5c\uff0c\u5728\u8fd9\u4e2a\u62bd\u8c61\u64cd\u4f5c\u7684\u524d\u9762\u6709\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"?")," \u8868\u793a\u8fd9\u4e2a\u62bd\u8c61\u64cd\u4f5c\u53ef\u80fd\u629b\u51fa\u9519\u8bef\uff0c\u5982\u679c\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"!")," \u5c31\u8868\u793a\u4e0d\u4f1a\u629b\u51fa\u9519\u8bef\u3002\u63a5\u7740\u6211\u4eec\u770b\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"RequireObjectCoercible")," \u8fd9\u4e2a\u62bd\u8c61\u64cd\u4f5c\u505a\u4e86\u4ec0\u4e48\uff0c\u5b83\u8bd5\u56fe\u5c06\u503c\u8f6c\u5316\u4e3a\u5bf9\u8c61\uff0c\u5982\u679c\u4e0d\u80fd\u8f6c\u6362\uff0c\u5219\u629b\u51fa\u9519\u8bef\uff0c\u4ece\u8868\u4e2d\u53ef\u4ee5\u770b\u5230\uff0c\u5bf9\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," \u4f1a\u629b\u51fa\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"TypeError"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.staticaly.com/gh/LastKnightCoder/image-for-2022@master/Pasted-image-20230305151502.4qmhvgjbb4o0.png",alt:null})),(0,l.kt)("p",null,"\u4e0b\u56fe\u662f\u5728\u8c37\u6b4c\u6d4f\u89c8\u5668\u4e2d\u7684\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.staticaly.com/gh/LastKnightCoder/image-for-2022@master/Pasted-image-20230305151912.h4zplh7djog.png",alt:null})),(0,l.kt)("p",null,"\u63a8\u8350\u4e00\u7bc7\u6587\u7ae0\uff0c\u53ef\u4ee5\u5e2e\u52a9\u4f60\u66f4\u597d\u7684\u7406\u89e3\u6807\u51c6\u4e2d\u7684\u4e00\u4e9b\u7b80\u5199\u548c\u7b26\u53f7\uff0c\u5e76\u4e14\u4e5f\u7ed9\u51fa\u4e86\u4e00\u4e9b\u4f8b\u5b50\uff0c\u6559\u4f60\u5982\u4f55\u770b\u89c4\u8303\uff0c\u4e0a\u9762\u7684\u4f8b\u5b50\u5c31\u53d6\u81ea\u4e8e\u8fd9\u7bc7\u6587\u7ae0\uff1a ",(0,l.kt)("a",{parentName:"p",href:"https://timothygu.me/es-howto/"},"How to Read The ECMAScript Specification"),"\u3002"),(0,l.kt)("h2",{id:"ecma-402"},"ECMA-402"),(0,l.kt)("p",null,"\u63d0\u4f9b\u8bed\u8a00\u654f\u611f\u529f\u80fd\uff0c\u4f5c\u4e3a ECMAScript \u7684\u8865\u5145\uff0c\u652f\u6301\u9700\u8981\u9002\u5e94\u4e0d\u540c\u4eba\u7c7b\u8bed\u8a00\u548c\u56fd\u5bb6\u4f7f\u7528\u7684\u8bed\u8a00\u548c\u6587\u5316\u4e60\u60ef\u7684\u7a0b\u5e8f\u3002"),(0,l.kt)("p",null,"ECMAScript \u63d0\u4f9b\u4e86\u4e00\u4e9b\u672c\u5730\u5316\u7684\u51fd\u6570\uff0c\u4f46\u7528\u6237\u5bf9\u6b64\u6ca1\u6709\u63a7\u5236\u6743\uff0c\u5176\u884c\u4e3a\u7531\u5b9e\u73b0\u5b9a\u4e49\uff0c\u5982\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Array.prototype.toLocaleString"),(0,l.kt)("li",{parentName:"ul"},"String.prototype.localeCompare"),(0,l.kt)("li",{parentName:"ul"},"Date.prototype.toLocaleString"),(0,l.kt)("li",{parentName:"ul"},"...")),(0,l.kt)("p",null,"\u56fd\u9645\u5316 API \u63d0\u4f9b\u4e86\u51e0\u4e2a\u5173\u952e\u7684\u8bed\u8a00\u654f\u611f\u529f\u80fd\uff0c\u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b57\u7b26\u4e32\u6bd4\u8f83"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u5b57\u683c\u5f0f\u5316"),(0,l.kt)("li",{parentName:"ul"},"\u65e5\u671f\u548c\u65f6\u95f4\u683c\u5f0f\u5316"),(0,l.kt)("li",{parentName:"ul"},"\u76f8\u5bf9\u65f6\u95f4\u683c\u5f0f\u5316"),(0,l.kt)("li",{parentName:"ul"},"\u540d\u79f0\u663e\u793a"),(0,l.kt)("li",{parentName:"ul"},"\u5217\u8868\u683c\u5f0f\u5316"),(0,l.kt)("li",{parentName:"ul"},"\u5730\u57df\u9009\u62e9\u548c\u64cd\u4f5c"),(0,l.kt)("li",{parentName:"ul"},"\u590d\u6570\u89c4\u5219"),(0,l.kt)("li",{parentName:"ul"},"\u5927\u5c0f\u5199\u8f6c\u6362\u548c\u6587\u672c\u5206\u6bb5")),(0,l.kt)("p",null,"\u6240\u6709\u7684\u529f\u80fd\u90fd\u6253\u5305\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Intl")," \u5bf9\u8c61\u4e2d\uff0c\u4ee5\u514d\u547d\u540d\u51b2\u7a81\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Intl.Collator"),(0,l.kt)("li",{parentName:"ul"},"Intl.DateTimeFormat"),(0,l.kt)("li",{parentName:"ul"},"Intl.DisplayNames"),(0,l.kt)("li",{parentName:"ul"},"Intl.NumberFormat"),(0,l.kt)("li",{parentName:"ul"},"...")),(0,l.kt)("p",null,"\u672c\u5730\u5316\u5b57\u7b26\u6bd4\u8f83\uff0c\u6839\u636e\u62fc\u97f3\u6392\u5e8f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const username = [\n  "\u9648\u5764",\n  "\u9093\u8d85",\n  "\u675c\u6df3",\n  "\u51af\u7ecd\u5cf0",\n  "\u97e9\u5e9a",\n  "\u80e1\u6b4c",\n  "\u9ec4\u6653\u660e",\n  "\u8d3e\u4e43\u4eae",\n  "\u674e\u6668",\n  "\u674e\u6613\u5cf0",\n  "\u9e7f\u6657",\n  "\u4e95\u67cf\u7136",\n  "\u5218\u70e8",\n  "\u9646\u6bc5",\n  "\u5b59\u7ea2\u96f7",\n];\n// [\'\u9648\u5764\', \'\u9093\u8d85\', \'\u675c\u6df3\', \'\u51af\u7ecd\u5cf0\', \'\u97e9\u5e9a\', \'\u80e1\u6b4c\', \'\u9ec4\u6653\u660e\', \'\u8d3e\u4e43\u4eae\', \'\u4e95\u67cf\u7136\', \'\u674e\u6668\', \'\u674e\u6613\u5cf0\', \'\u5218\u70e8\', \'\u9646\u6bc5\', \'\u9e7f\u6657\', \'\u5b59\u7ea2\u96f7\']\nusername.sort(new Intl.Collator("zh").compare);\n')),(0,l.kt)("p",null,"\u65e5\u671f\u683c\u5f0f\u5316\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// 2023/03/09 18:43:47\nconst res = new Intl.DateTimeFormat("zh", { \n  year: "numeric",\n  // \u5982\u679c\u4e0d\u8db3\u4e24\u4f4d\uff0c\u4f1a\u81ea\u52a8\u8865\u96f6\n  month: "2-digit", \n  day: "2-digit", \n  hour: "2-digit", \n  minute: "2-digit", \n  second: "2-digit", \n  // \u8bbe\u7f6e\u4e3a false \u8868\u793a\u91c7\u752824\u5c0f\u65f6\u5236 \n  hour12: false, }\n).format(new Date());\n')),(0,l.kt)("p",null,"\u6570\u5b57\u683c\u5f0f\u5316\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// 12,345.68\u4eba\u6c11\u5e01\nnew Intl.NumberFormat("zh-Hans", {\n  style: "currency",\n  currency: "CNY",\n  currencyDisplay: "name",\n}).format(12345.6789);\n')),(0,l.kt)("h2",{id:"ecma-404"},"ECMA-404"),(0,l.kt)("p",null,"JSON \u662f\u4e00\u4e2a\u5728\u591a\u8bed\u8a00\u4e4b\u95f4\u8fdb\u884c\u6570\u636e\u4ea4\u6362\u7684\u4e00\u79cd\u683c\u5f0f\uff0c\u5b83\u662f\u7eaf\u6587\u672c\uff0c\u4e0d\u8fc7\u662f\u7ed3\u6784\u5316\u7684\uff0c\u6700\u521d\u8d77\u6e90\u4e8e JavaScript\uff0c\u4e0d\u8fc7\u73b0\u5728\u5df2\u7ecf\u6210\u4e3a\u4e86\u591a\u8bed\u8a00\u4e4b\u95f4\u8fdb\u884c\u6570\u636e\u4ea4\u6362\u7684\u4e00\u79cd\u683c\u5f0f\u3002\u4e3a\u4e86\u5728\u591a\u4e2a\u8bed\u8a00\u4e4b\u95f4\u6b63\u786e\u89e3\u6790\u6570\u636e\uff0c\u9700\u8981\u89c4\u5b9a JSON \u7684\u683c\u5f0f\uff0cECMA-404 \u6b63\u662f\u89c4\u5b9a JSON \u6587\u672c\u683c\u5f0f\u7684\u89c4\u8303\u3002 "),(0,l.kt)("p",null,"JSON \u7684\u6587\u672c\u7531\u9075\u5faa JSON \u503c\u8bed\u6cd5\u7684 token \u7ec4\u6210\uff0c\u8fd9\u4e9b token \u7531\u516d\u4e2a\u7ed3\u6784\u5316 token\u3001strings, numbers, \u548c\u5176\u4ed6\u4e09\u4e2a\u5b57\u9762\u503c\u7ec4\u6210\u3002"),(0,l.kt)("p",null,"\u516d\u4e2a\u7ed3\u6784\u5316 token\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"}")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},","))),(0,l.kt)("p",null,"\u4e09\u4e2a\u5b57\u9762\u503c\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"null"))),(0,l.kt)("p",null,"JSON \u7684\u503c\u53ea\u80fd\u4e3a object, array, number, string, true, false, null\u3002"),(0,l.kt)("h3",{id:"objects"},"Objects"),(0,l.kt)("p",null,"\u5bf9\u4e8e object\uff0c\u5b83\u7531\u4e00\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"{}")," \u8fdb\u884c\u5305\u88f9\uff0c\u5176\u4e2d\u5305\u62ec 0 \u4e2a\u6216\u66f4\u591a\u7684\u952e\u503c\u5bf9\uff0c\u952e\u662f string\uff0cvalue \u662f\u4e00\u4e2a\u5408\u6cd5\u7684 JOSN \u7684\u503c\uff0c\u6bcf\u5bf9\u952e\u503c\u5bf9\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},",")," \u8fdb\u884c\u5206\u9694\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.staticaly.com/gh/LastKnightCoder/image-for-2022@master/Pasted-image-20230307165626.1teonebuy63k.png",alt:null})),(0,l.kt)("p",null,"\u5bf9\u4e8e\u4f5c\u4e3a\u952e\u7684\u5b57\u7b26\u4e32\uff0cJSON \u8bed\u6cd5\u6ca1\u6709\u4ec0\u4e48\u9650\u5236\uff0c\u4e0d\u8981\u6c42\u552f\u4e00\uff0c\u4e0d\u8981\u6c42\u6709\u7279\u522b\u7684\u987a\u5e8f\u3002"),(0,l.kt)("p",null,"\u4e0d\u652f\u6301\u5faa\u73af\u5f15\u7528\u3002"),(0,l.kt)("h3",{id:"arrays"},"Arrays"),(0,l.kt)("p",null,"array \u7531\u4e00\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"[]")," \u8fdb\u884c\u5305\u88f9\uff0c\u5176\u4e2d\u5305\u542b 0+ \u4e2a JOSN \u503c\uff0c\u503c\u4e4b\u95f4\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},",")," \u8fdb\u884c\u5206\u9694\uff0cJSON \u8bed\u6cd5\u5bf9\u503c\u7684\u987a\u5e8f\u6ca1\u6709\u8981\u6c42\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.staticaly.com/gh/LastKnightCoder/image-for-2022@master/Pasted-image-20230307165644.1vy983ck2zr4.png",alt:null})),(0,l.kt)("h3",{id:"numbers"},"Numbers"),(0,l.kt)("p",null,"number \u662f\u4e00\u7cfb\u5217\u4e00\u4e2a\u4e0d\u5305\u542b\u5148\u5bfc 0 \u7684\u5341\u8fdb\u5236\u6570\u5b57\uff0c\u53ef\u80fd\u5728\u6570\u5b57\u524d\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"p"},"-")," \u53f7\uff0c\u968f\u540e\u53ef\u80fd\u5305\u542b\u4ee5\u5c0f\u6570\u70b9\u4e3a\u524d\u7f00\u7684\u5c0f\u6570\u90e8\u5206\uff0c\u968f\u540e\u4e5f\u53ef\u80fd\u5305\u542b\u6307\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"e/E-/+")," \u7ec4\u6210\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.staticaly.com/gh/LastKnightCoder/image-for-2022@master/Pasted-image-20230307165707.5w4say5ufww0.png",alt:null})),(0,l.kt)("p",null,"\u6b63\u786e\u7684\u4f8b\u5b50"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"-0.5"),(0,l.kt)("li",{parentName:"ul"},"1.5"),(0,l.kt)("li",{parentName:"ul"},"2.1e5"),(0,l.kt)("li",{parentName:"ul"},"2.1E-3"),(0,l.kt)("li",{parentName:"ul"},"34")),(0,l.kt)("p",null,"\u9519\u8bef\u7684\u4f8b\u5b50\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"03\uff1a\u5305\u542b\u524d\u5bfc\u96f6"),(0,l.kt)("li",{parentName:"ul"},".6\uff1a\u5c0f\u6570\u70b9\u524d\u8981\u6709\u6570\u5b57")),(0,l.kt)("h3",{id:"string"},"String"),(0,l.kt)("p",null,"string \u7531\u4e00\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},'""')," \u8fdb\u884c\u5305\u88f9\uff0c\u9664\u4e86\u4e00\u4e9b\u9700\u8981\u8f6c\u4e49\u7684\u7279\u6b8a\u5b57\u7b26\uff0c\u5176\u4e2d\u53ef\u4ee5\u653e\u4efb\u4f55\u7684 Unicode \u5b57\u7b26\uff0c\u9700\u8981\u8f6c\u4e49\u5b57\u7b26\u5305\u62ec\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},'"')," ",(0,l.kt)("inlineCode",{parentName:"p"},"\\")," \u4ee5\u53ca\u63a7\u5236\u5b57\u7b26 ",(0,l.kt)("inlineCode",{parentName:"p"},"U+0000 - U+001F"),"\u3002"),(0,l.kt)("p",null,"\u901a\u8fc7\u4e24\u4e2a\u5b57\u7b26\u7684\u8f6c\u4e49\u5e8f\u5217\u6765\u8868\u793a\u4e00\u4e9b\u5b57\u7b26\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'\\"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\\\")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\n")),(0,l.kt)("li",{parentName:"ul"},"... ...")),(0,l.kt)("p",null,"\u8fd8\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 Unicode \u7801\u70b9\u76f4\u63a5\u8868\u793a\u5b57\u7b26\uff08\u5305\u62ec\u8f6c\u4e49\u5b57\u7b26\uff09"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\u002F")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\u002f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\/"))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.staticaly.com/gh/LastKnightCoder/image-for-2022@master/Pasted-image-20230307165728.1ty2yfu33vpc.png",alt:null})),(0,l.kt)("h2",{id:"ecma-414"},"ECMA-414"),(0,l.kt)("p",null,"ECMA 414 \u5219\u89c4\u5b9a\u4e86\u54ea\u4e9b\u89c4\u8303\u662f\u548c ECMAScript \u6709\u5173\u7684\u3002\u76ee\u524d\u5185\u90e8\u5c31\u5305\u542b\u4e86 262\uff0c402 \u548c 404\u3002"))}k.isMDXComponent=!0}}]);