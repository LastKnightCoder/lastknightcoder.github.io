"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7545],{3905:(e,n,l)=>{l.d(n,{Zo:()=>s,kt:()=>d});var t=l(7294);function r(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function a(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,t)}return l}function f(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?a(Object(l),!0).forEach((function(n){r(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function u(e,n){if(null==e)return{};var l,t,r=function(e,n){if(null==e)return{};var l,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||(r[l]=e[l]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var o=t.createContext({}),i=function(e){var n=t.useContext(o),l=n;return e&&(l="function"==typeof e?e(n):f(f({},n),e)),l},s=function(e){var n=i(e.components);return t.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var l=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=i(l),d=r,g=p["".concat(o,".").concat(d)]||p[d]||c[d]||a;return l?t.createElement(g,f(f({ref:n},s),{},{components:l})):t.createElement(g,f({ref:n},s))}));function d(e,n){var l=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=l.length,f=new Array(a);f[0]=p;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,f[1]=u;for(var i=2;i<a;i++)f[i]=l[i];return t.createElement.apply(null,f)}return t.createElement.apply(null,l)}p.displayName="MDXCreateElement"},2662:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>f,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var t=l(7462),r=(l(7294),l(3905));const a={slug:"Buffer",authors:"xiongtao",tags:["Node","Buffer"]},f=void 0,u={permalink:"/blog/Buffer",editUrl:"https://github.com/LastKnightCoder/lastknightcoder/tree/master/blog/2020-02-12-Buffer.mdx",source:"@site/blog/2020-02-12-Buffer.mdx",title:"Buffer",description:"Buffer \u662f Node.js \u7684\u5185\u7f6e\u7c7b\u578b\uff0c\u5b83\u662f\u7528\u6765\u8868\u793a\u5185\u5b58\u4e2d\u4e00\u5757\u533a\u57df\u7684\uff0c\u5b83\u4fdd\u5b58\u7684\u662f\u4e8c\u8fdb\u5236\u6570\u636e\uff0c\u53ef\u4ee5\u5c06\u5b83\u770b\u505a\u4e3a\u4e00\u4e2a\u4e8c\u8fdb\u5236\u6570\u7ec4\u3002",date:"2020-02-12T00:00:00.000Z",formattedDate:"2020\u5e742\u670812\u65e5",tags:[{label:"Node",permalink:"/blog/tags/node"},{label:"Buffer",permalink:"/blog/tags/buffer"}],readingTime:10.135,hasTruncateMarker:!1,authors:[{name:"\u718a\u6ed4",title:"\u524d\u7aef\u5de5\u7a0b\u5e08 @ \u963f\u91cc\u5df4\u5df4",url:"https://github.com/LastKnightCoder",imageURL:"https://cdn.staticaly.com/gh/LastKnightCoder/ImgHosting3@master/wallhaven-8opwwy.3cbn7rc981c0.webp",key:"xiongtao"}],frontMatter:{slug:"Buffer",authors:"xiongtao",tags:["Node","Buffer"]},prevItem:{title:"EventEmitter",permalink:"/blog/EventEmitter"},nextItem:{title:"\u5c0f\u7403\u4f1a\u505c\u4e0b\u6765\u5417",permalink:"/blog/2019/10/08/\u5c0f\u7403\u4f1a\u505c\u4e0b\u6765\u5417"}},o={authorsImageUrls:[void 0]},i=[{value:"\u521b\u5efa Buffer \u5bf9\u8c61",id:"\u521b\u5efa-buffer-\u5bf9\u8c61",level:2},{value:"alloc",id:"alloc",level:3},{value:"from",id:"from",level:3},{value:"Buffer \u5bf9\u8c61\u7684\u5c5e\u6027",id:"buffer-\u5bf9\u8c61\u7684\u5c5e\u6027",level:2},{value:"length",id:"length",level:3},{value:"buffer",id:"buffer",level:3},{value:"\u8bfb Buffer \u5bf9\u8c61",id:"\u8bfb-buffer-\u5bf9\u8c61",level:2},{value:"\u4e0b\u6807",id:"\u4e0b\u6807",level:3},{value:"readXxx",id:"readxxx",level:3},{value:"\u8fed\u4ee3\u5668",id:"\u8fed\u4ee3\u5668",level:3},{value:"\u5199 Buffer \u5bf9\u8c61",id:"\u5199-buffer-\u5bf9\u8c61",level:2},{value:"\u4e0b\u6807",id:"\u4e0b\u6807-1",level:3},{value:"write",id:"write",level:3},{value:"writeXxx",id:"writexxx",level:3},{value:"\u5176\u4ed6\u65b9\u6cd5",id:"\u5176\u4ed6\u65b9\u6cd5",level:2},{value:"isBuffer",id:"isbuffer",level:3},{value:"isEncoding",id:"isencoding",level:3},{value:"slice",id:"slice",level:3},{value:"subarray",id:"subarray",level:3},{value:"copy",id:"copy",level:3},{value:"includes",id:"includes",level:3},{value:"indexOf",id:"indexof",level:3},{value:"equals",id:"equals",level:3},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:2}],s={toc:i};function c(e){let{components:n,...l}=e;return(0,r.kt)("wrapper",(0,t.Z)({},s,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Buffer \u662f Node.js \u7684\u5185\u7f6e\u7c7b\u578b\uff0c\u5b83\u662f\u7528\u6765\u8868\u793a\u5185\u5b58\u4e2d\u4e00\u5757\u533a\u57df\u7684\uff0c\u5b83\u4fdd\u5b58\u7684\u662f\u4e8c\u8fdb\u5236\u6570\u636e\uff0c\u53ef\u4ee5\u5c06\u5b83\u770b\u505a\u4e3a\u4e00\u4e2a\u4e8c\u8fdb\u5236\u6570\u7ec4\u3002"),(0,r.kt)("p",null,"Buffer \u53ef\u4ee5\u7528\u6765\u8868\u793a\u56fe\u7247\u3001\u89c6\u9891\u8fd9\u6837\u7684\u4e8c\u8fdb\u5236\u6570\u636e\uff0c\u53e6\u5916\u6211\u4eec\u4ece\u6587\u4ef6\u4e2d\u8bfb\u53d6\u5230\u7684\u4e5f\u662f Buffer \u7c7b\u578b\u7684\u6570\u636e\uff0c\u4ece\u7f51\u7edc\u4e2d\u63a5\u6536\u7684\u6570\u636e\u4e5f\u662f Buffer \u7c7b\u578b\u7684\u6570\u636e\uff0c\u6240\u4ee5\u5b66\u4e60 Buffer \u8fd8\u662f\u5f88\u6709\u5fc5\u8981\u7684\u3002"),(0,r.kt)("p",null,"Buffer \u4f4d\u4e8e\u5168\u5c40\u4f5c\u7528\u57df\u4e2d\uff0c\u6240\u4ee5\u4e0d\u9700\u8981\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"require('buffer')")," \u6765\u5f15\u5165 Buffer\u3002"),(0,r.kt)("h2",{id:"\u521b\u5efa-buffer-\u5bf9\u8c61"},"\u521b\u5efa Buffer \u5bf9\u8c61"),(0,r.kt)("h3",{id:"alloc"},"alloc"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer.alloc(size, [fill], [encoding])")," \u6765\u5206\u914d\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," \u5b57\u8282\u5927\u5c0f\u7684\u5185\u5b58\uff0c\u8fd8\u53ef\u4ee5\u63a5\u6536\u4e24\u4e2a\u53ef\u9009\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"fill\uff1a\u4f7f\u7528 fill \u6765\u586b\u5145 Buffer \u4e2d\u7684\u6bcf\u4e00\u4e2a\u5b57\u8282"),(0,r.kt)("li",{parentName:"ul"},"encoding\uff1a\u5982\u679c fill \u4e3a\u5b57\u7b26\u4e32\uff0c\u90a3\u4e48\u4f7f\u7528 encoding \u6765\u5bf9\u5b57\u7b26\u4e32\u8fdb\u884c\u7f16\u7801\u4e3a\u4e8c\u8fdb\u5236")),(0,r.kt)("p",null,"\u5f53\u4e0d\u6307\u5b9a fill \u53c2\u6570\uff0c\u9ed8\u8ba4\u4e3a\u586b\u5145 0\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const buf1 = Buffer.alloc(5);\nconsole.log(buf1); // <Buffer 00 00 00 00 00>\n\nconst buf2 = Buffer.alloc(10, 1);\nconsole.log(buf2); // <Buffer 01 01 01 01 01 01 01 01 01 01>\n\nconst buf3 = Buffer.alloc(12, "hello world!", "utf-8");\nconsole.log(buf3); // <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64 21>\n')),(0,r.kt)("p",null,"\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"allocUnsafe(size)")," \u6765\u5206\u914d\u6307\u5b9a\u5927\u5c0f\u7684\u5185\u5b58\uff0c\u4e0d\u8fc7\u4e0d\u4f1a\u9ed8\u8ba4\u586b\u5145 0\uff0c\u5176\u4e2d\u7684\u5185\u5bb9\u4e0d\u786e\u5b9a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const buf = Buffer.allocUnsafe(5);\nconsole.log(buf); // <Buffer c0 84 7c 2a 7b>\n")),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"fill(fill, encoding)")," \u65b9\u6cd5\u4e3a Buffer \u5bf9\u8c61\u586b\u5145\u6307\u5b9a\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const buf = Buffer.allocUnsafe(5);\nbuf.fill(0);\nconsole.log(buf); // <Buffer 00 00 00 00 00>\n")),(0,r.kt)("h3",{id:"from"},"from"),(0,r.kt)("p",null,"\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer.from()")," \u65b9\u6cd5\u6765\u521b\u5efa\u4e00\u4e2a Buffer \u5bf9\u8c61\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"from")," \u65b9\u6cd5\u53ef\u4ee5\u63a5\u6536\u7684\u53c2\u6570\u5305\u62ec\u6570\u7ec4\uff0c\u5b57\u7b26\u4e32\uff0cBuffer \u5bf9\u8c61\uff0c\u5bf9\u8c61\u7b49\u7c7b\u578b\u3002"),(0,r.kt)("p",null,"\u63a5\u6536\u4e00\u4e2a\u6574\u5f62\u6570\u7ec4\uff0c\u6570\u7ec4\u4e2d\u7684\u6574\u6570\u5e94\u8be5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"0~255")," \u4e4b\u95f4\uff0c\u8d85\u51fa\u6b64\u8303\u56f4\u7684\u6570\u5b57\u5c06\u4f1a\u88ab\u622a\u65ad"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const buf = Buffer.from([1, 2, 3, 4, 5]);\nconsole.log(buf); // <Buffer 01 02 03 04 05>\n")),(0,r.kt)("p",null,"\u6211\u4eec\u8fd8\u53ef\u4ee5\u50cf\u5176\u4e2d\u4f20\u5165\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u5e76\u6307\u5b9a\u7f16\u7801\uff0c\u5b83\u4f1a\u4f7f\u7528\u6307\u5b9a\u7f16\u7801\u5c06\u5b57\u7b26\u4e32\u7f16\u7801\u4e3a\u4e8c\u8fdb\u5236\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\u7f16\u7801\u7684\u8bdd\uff0c\u9ed8\u8ba4\u4e3a\u7f16\u7801\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"utf-8")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const buf = Buffer.from("hello", "utf-8");\nconsole.log(buf); // <Buffer 68 65 6c 6c 6f>\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"from")," \u65b9\u6cd5\u8fd8\u53ef\u4ee5\u63a5\u6536\u4e00\u4e2a Buffer \u5bf9\u8c61\uff0c\u5b83\u4f1a\u62f7\u8d1d\u4f20\u5165\u7684 Buffer \u5bf9\u8c61\u4e2d\u7684\u6570\u636e\u5230\u65b0\u7684 Buffer \u5bf9\u8c61\u4e2d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const buf1 = Buffer.from("hello", "utf-8");\nconst buf2 = Buffer.from(buf1);\n\nconsole.log(buf1 === buf2); // false\nconsole.log(buf2.toString()); // hello\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"from")," \u65b9\u6cd5\u8fd8\u53ef\u4ee5\u63a5\u6536\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5f53\u4f20\u5165\u5bf9\u8c61\uff0c\u9996\u5148\u4f1a\u5c06\u5bf9\u8c61\u8f6c\u5316\u4e3a\u539f\u59cb\u503c\uff0c\u7136\u540e\u6839\u636e\u539f\u59cb\u503c\u8f6c\u5316\u4e3a\u5bf9\u5e94\u7684\u4e8c\u8fdb\u5236\u6570\u7ec4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'let obj = {\n  [Symbol.toPrimitive](hint) {\n    return "a";\n  },\n};\n\nconst buf = Buffer.from(obj);\nconsole.log(buf.toString()); // a\n')),(0,r.kt)("h2",{id:"buffer-\u5bf9\u8c61\u7684\u5c5e\u6027"},"Buffer \u5bf9\u8c61\u7684\u5c5e\u6027"),(0,r.kt)("h3",{id:"length"},"length"),(0,r.kt)("p",null,"\u901a\u8fc7 length \u5c5e\u6027\u53ef\u4ee5\u77e5\u9053 Buffer \u6570\u7ec4\u7684\u957f\u5ea6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const buf = Buffer.from("Hello World!");\n\nconsole.log(buf.length); // 12\n')),(0,r.kt)("h3",{id:"buffer"},"buffer"),(0,r.kt)("p",null,"Buffer \u5bf9\u8c61\u5185\u90e8\u5b9e\u9645\u5b58\u50a8\u6570\u636e\u7684\u662f\u4e00\u4e2a ArrayBuffer \u7684\u5bf9\u8c61\uff0c\u901a\u8fc7 buffer \u5c5e\u6027\u53ef\u4ee5\u5f97\u5230\u8fd9\u4e2a\u5bf9\u8c61"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const buf = Buffer.alloc(5);\n\nconsole.log(buf.buffer); // ArrayBuffer { [Uint8Contents]: <00 00 00 00 00>, byteLength: 5 }\n")),(0,r.kt)("h2",{id:"\u8bfb-buffer-\u5bf9\u8c61"},"\u8bfb Buffer \u5bf9\u8c61"),(0,r.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u8bbf\u95ee Buffer \u5bf9\u8c61\u4e2d\u7684\u5185\u5bb9\u3002"),(0,r.kt)("h3",{id:"\u4e0b\u6807"},"\u4e0b\u6807"),(0,r.kt)("p",null,"\u5728\u6587\u7ae0\u7684\u5f00\u5934\u63d0\u8fc7\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06 Buffer \u5bf9\u8c61\u770b\u505a\u662f\u4e00\u4e2a\u4e8c\u8fdb\u5236\u6570\u7ec4\uff0c\u65e2\u7136\u662f\u6570\u7ec4\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u901a\u8fc7\u4e0b\u6807\u7684\u5f62\u5f0f\u6765\u8bbf\u95ee\u6570\u7ec4\u4e2d\u7684\u5185\u5bb9\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const buf = Buffer.from([1, 2, 3, 4, 5]);\nconsole.log(buf[0]); // 1\nconsole.log(buf[5]); // undefined\n")),(0,r.kt)("p",null,"\u5b83\u4eec\u4f1a\u4ee5\u8865\u7801\u7684\u5f62\u5f0f\u89e3\u6790\u5b57\u8282\uff0c\u8fd4\u56de\u5bf9\u5e94\u7684\u6570\u5b57\u3002"),(0,r.kt)("h3",{id:"readxxx"},"readXxx"),(0,r.kt)("p",null,"\u6211\u4eec\u8fd8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"buf.readInt8()")," ",(0,r.kt)("inlineCode",{parentName:"p"},"buf.readInt16()")," ",(0,r.kt)("inlineCode",{parentName:"p"},"buf.readUint8()")," ",(0,r.kt)("inlineCode",{parentName:"p"},"buf.readUint16()")," \u7b49\u65b9\u6cd5\u6765\u8bbf\u95ee Buffer \u5bf9\u8c61\u4e2d\u7684\u5185\u5bb9\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const buf = Buffer.from([1, 2, 3, 4, 5]);\nconsole.log(buf.readInt8(2)); // 3\n\n// \u8bbf\u95ee\u8d85\u51fa\u8303\u56f4\u7684\u5185\u5bb9\uff0c\u4f1a\u629b\u51fa RangeError\nconsole.log(buf.readInt8(5)); // RangeError [ERR_OUT_OF_RANGE]: The value of "offset" is out of range.\n')),(0,r.kt)("h3",{id:"\u8fed\u4ee3\u5668"},"\u8fed\u4ee3\u5668"),(0,r.kt)("p",null,"Buffer \u5bf9\u8c61\u7684\u8fed\u4ee3\u5668\u540c\u6570\u7ec4\u7684\u8fed\u4ee3\u5668\u76f8\u540c\uff0c\u4e5f\u6709\u4e09\u4e2a\u8fed\u4ee3\u5668\uff0c\u5206\u522b\u662f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"entries"),(0,r.kt)("li",{parentName:"ul"},"keys"),(0,r.kt)("li",{parentName:"ul"},"values")),(0,r.kt)("p",null,"\u6211\u4eec\u901a\u8fc7\u904d\u5386\u8fed\u4ee3\u5668\u6765\u8bbf\u95ee Buffer \u5bf9\u8c61\u4e2d\u7684\u5185\u5bb9\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const buf = Buffer.from([3, 4, 2]);\n\nfor (let entry of buf.entries()) {\n  // \u6570\u7ec4\u7684\u4e00\u4e2a\u5143\u7d20\u4e3a\u4e0b\u6807\uff0c\u7b2c\u4e8c\u4e2a\u5143\u7d20\u4e3a\u4e0b\u6807\u5bf9\u5e94\u7684\u5143\u7d20\n  console.log(entry); // [ 0, 3 ]\n                      // [ 1, 4 ]\n                      // [ 2, 2 ]\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"for (let key of buf.keys()) {\n  console.log(key); // 0\n                    // 1\n                    // 2\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"for (let value of buf.values()) {\n  console.log(value); // 3\n                      // 4\n                      // 2\n}\n")),(0,r.kt)("h2",{id:"\u5199-buffer-\u5bf9\u8c61"},"\u5199 Buffer \u5bf9\u8c61"),(0,r.kt)("p",null,"\u672c\u5c0f\u8282\u8bb2\u89e3\u5982\u4f55\u5411 Buffer \u5bf9\u8c61\u4e2d\u5199\u5165\u5185\u5bb9\u3002"),(0,r.kt)("h3",{id:"\u4e0b\u6807-1"},"\u4e0b\u6807"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u4e0b\u6807\u6765\u6539\u53d8 Buffer \u5bf9\u8c61\u4e2d\u7684\u5185\u5bb9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const buf = Buffer.from([1, 2, 3]);\n\n// \u901a\u8fc7\u4e0b\u6807\u8bbe\u7f6e\u503c\nbuf[0] = 4;\n\nconsole.log(buf); // <Buffer 04 02 03>\n")),(0,r.kt)("h3",{id:"write"},"write"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"write(string, [offset], [length], [encoding])")," \u65b9\u6cd5\u5411 Buffer \u4e2d\u5199\u5165\u5b57\u7b26\u4e32\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"string\uff1a\u8868\u793a\u8981\u5199\u5165\u7684\u5b57\u7b26\u4e32"),(0,r.kt)("li",{parentName:"ul"},"offset\uff1a\u504f\u79fb\u91cf\uff0c\u5373\u8df3\u8fc7 offset \u4e2a\u5b57\u8282\u5f00\u59cb\u5199\u5165\uff0c\u9ed8\u8ba4\u4e3a 0"),(0,r.kt)("li",{parentName:"ul"},"length\uff1a\u8981\u5199\u5165\u7684\u6700\u5927\u5b57\u8282\u6570\uff0c\u4e0d\u8d85\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"buf.length - offset"),"\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"buf.length - offset")),(0,r.kt)("li",{parentName:"ul"},"encoding\uff1a\u6307\u5b9a\u7f16\u7801\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"utf-8"))),(0,r.kt)("p",null,"\u8be5\u65b9\u6cd5\u8fd4\u56de\u5df2\u5199\u5165\u7684\u5b57\u8282\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const buf = Buffer.from([1, 2, 3, 4]);\n\n// \u8df3\u8fc7 1 \u4e2a\u5b57\u8282\u5f00\u59cb\u5199\u5165\uff0c1hi4\nbuf.write("hi", 1);\n\nconsole.log(buf); // <Buffer 01 68 69 04>\n')),(0,r.kt)("h3",{id:"writexxx"},"writeXxx"),(0,r.kt)("p",null,"\u540c readXxx\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"writeInt8()")," \u65b9\u6cd5\u5411 buf \u4e2d\u5199\u5165\u6570\u636e\uff0c\u65b9\u6cd5\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"value\uff1a\u8981\u5199\u5165\u7684\u503c"),(0,r.kt)("li",{parentName:"ul"},"offset\uff1a\u504f\u79fb\u91cf\uff0c\u9ed8\u8ba4\u4e3a 0")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const buf = Buffer.alloc(5);\n\nbuf.writeInt8(1, 0);\nbuf.writeInt8(3, 1);\n\nconsole.log(buf); // <Buffer 01 03 00 00 00>\n")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"\u8e29\u5751\uff1a\u6ca1\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"writeInt16()"),"\uff0c\u4e0d\u8fc7\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"writeInt16BE()")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"writeInt16LE()"),"\uff0c\u5206\u522b\u4ee3\u8868\u4ee5\u5927\u7aef\u5e8f\u3001\u5c0f\u7aef\u5e8f\u5199\u5165\u3002")),(0,r.kt)("h2",{id:"\u5176\u4ed6\u65b9\u6cd5"},"\u5176\u4ed6\u65b9\u6cd5"),(0,r.kt)("h3",{id:"isbuffer"},"isBuffer"),(0,r.kt)("p",null,"\u8be5\u65b9\u6cd5\u63a5\u6536\u4e00\u4e2a\u5bf9\u8c61\uff0c\u7528\u6765\u5224\u65ad\u8be5\u5bf9\u8c61\u662f\u4e0d\u662f\u4e00\u4e2a Buffer \u5bf9\u8c61"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let obj1 = {};\nlet obj2 = Buffer.alloc(3);\n\nconsole.log(Buffer.isBuffer(obj1)); // false\nconsole.log(Buffer.isBuffer(obj2)); // true\n")),(0,r.kt)("h3",{id:"isencoding"},"isEncoding"),(0,r.kt)("p",null,"\u8be5\u65b9\u6cd5\u63a5\u6536\u4e00\u4e2a\u4ee3\u8868\u7f16\u7801\u7684\u5b57\u7b26\u4e32\uff0c\u8fd4\u56de Buffer \u662f\u5426\u652f\u6301\u8be5\u79cd\u7f16\u7801\uff0c\u5982\u679c\u652f\u6301\u5219\u8fd4\u56de true\uff0c\u5426\u5219\u8fd4\u56de false"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'console.log(Buffer.isEncoding("utf-8")); // true\nconsole.log(Buffer.isEncoding("utf8"));  // true\nconsole.log(Buffer.isEncoding("hex"));   // true\nconsole.log(Buffer.isEncoding("latin")); // false\nconsole.log(Buffer.isEncoding("gbk"));   // false\n')),(0,r.kt)("h3",{id:"slice"},"slice"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"slice(start, end)")," \u53ef\u4ee5\u88c1\u5207\u539f\u6709\u7684 Buffer \u5bf9\u8c61\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 Buffer \u5bf9\u8c61\uff0c\u5176\u4e2d start \u548c end \u4ee3\u8868\u88c1\u5207\u7684\u8d77\u59cb\u4f4d\u7f6e\u548c\u7ed3\u675f\u4f4d\u7f6e\uff0c\u5de6\u95ed\u53f3\u5f00 [start, end)\uff0c\u8fd9\u4e24\u4e2a\u53c2\u6570\u662f\u53ef\u9009\u7684\uff0cstart \u9ed8\u8ba4\u4e3a 0\uff0cend \u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"buf.length"),"\u3002\u8fd4\u56de\u7684 Buffer \u5bf9\u8c61\u4e0e\u539f\u5148\u5bf9\u8c61\u5f15\u7528\u7684\u662f\u540c\u4e00\u5757\u5185\u5b58\uff0c\u5373\u5b83\u4eec\u7684 buffer \u5c5e\u6027\u662f\u4e00\u6837\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const buffer = Buffer.from("hello world!");\n\nconst newBuffer = buffer.slice(6); // \u88c1\u5207 6 \u4ee5\u540e\u7684\u5185\u5bb9\u5230\u65b0\u6570\u7ec4\nconsole.log(newBuffer.toString()); // world!\n\nconsole.log(buffer.buffer === newBuffer.buffer); // true\n')),(0,r.kt)("h3",{id:"subarray"},"subarray"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"subarray(start, end)")," \u51e0\u4e4e\u53ef\u4ee5\u770b\u505a\u7b49\u540c\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"slice")," \u65b9\u6cd5\u4e86\uff0c\u4e8c\u8005\u7684\u8bed\u4e49\u4e0d\u540c\uff0c\u4e0d\u8fc7\u884c\u4e3a\u786e\u5b9e\u4e00\u81f4\u7684\uff0csubarray \u7684\u8bed\u4e49\u8868\u793a\u8fd4\u56de\u539f\u6570\u7ec4\u7684\u67d0\u4e2a\u8303\u56f4\u7684\u5b50\u6570\u7ec4\uff0c\u800c slice \u7684\u8bed\u4e49\u8868\u793a\u7684\u88c1\u5207\u3002\u540c\u6837 subarray \u8fd4\u56de\u65b0\u7684 Buffer \u5bf9\u8c61\uff0c\u5e76\u4e14\u8fd4\u56de\u7684 Buffer \u5bf9\u8c61\u7684 buffer \u4e0e\u539f Buffer \u5bf9\u8c61\u7684 buffer \u5c5e\u6027\u662f\u76f8\u540c\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const buffer = Buffer.from("hello world!");\n\nconst newBuffer = buffer.subarray(6);\nconsole.log(newBuffer.toString()); // world!\n\nconsole.log(buffer.buffer === newBuffer.buffer); // true\n')),(0,r.kt)("h3",{id:"copy"},"copy"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"copy(target, [targetStart], [sourceStart], [sourceEnd])")," \u65b9\u6cd5\u662f\u5c06 source \u4ece sourceStart \u5230 sourceEnd \u7684\u5185\u5bb9\u590d\u5236\u5230 target \u4ece targetStart \u7684\u4f4d\u7f6e\uff0c\u89c1\u4e0b\u52a8\u56fe"),(0,r.kt)("img",{src:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting/20210302135327.gif",style:{zoom:"50%"}}),(0,r.kt)("p",null,"\u9664\u4e86 target \u4ee5\u5916\uff0c\u5176\u4ed6\u4e09\u4e2a\u53c2\u6570\u90fd\u662f\u53ef\u9009\u53c2\u6570\uff0ctargetStart \u4e0e sourceStart \u7684\u9ed8\u8ba4\u503c\u4e3a 0\uff0csourceEnd \u7684\u9ed8\u8ba4\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"buf.length"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const buf1 = Buffer.from("HelloWorld");\nconst buf2 = Buffer.alloc(8);\n\nbuf1.copy(buf2, 0, 1, 9);\n\nconsole.log(buf2.toString()); // elloWorl\n')),(0,r.kt)("h3",{id:"includes"},"includes"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"buf.includes(value, [offset], [encoding])")," \u65b9\u6cd5\u7684\u4f5c\u7528\u662f\u5224\u65ad value \u662f\u5426\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"buf")," \u4e2d\u3002"),(0,r.kt)("p",null,"value \u53ef\u4ee5\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a Buffer \u5bf9\u8c61\uff0c\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a\u6574\u6570\uff1boffset \u7528\u6765\u89c4\u5b9a\u67e5\u627e\u8303\u56f4\uff0c\u8868\u793a\u4ece offset \u5904\u5f00\u59cb\u67e5\u627e\uff0c\u9ed8\u8ba4\u4e3a 0\uff1benconding \u8868\u793a\u7f16\u7801\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"utf-8"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const buf = Buffer.from("HelloWorld");\n\n// \u9ed8\u8ba4\u4ece 0 \u5f00\u59cb\u641c\u7d22\nconsole.log(buf.includes("H")); // true\n// \u4ece 1 \u5f00\u59cb\u641c\u7d22\uff0c\u540e\u9762\u4e0d\u5305\u542b H\nconsole.log(buf.includes("H", 1)); // false\n\nconsole.log(buf.includes(Buffer.from("Hello"))); // true\n\n// H \u5bf9\u5e94\u7684 utf-8 \u7f16\u7801\u4e3a 72\nconsole.log(buf.includes(72)); // true\n')),(0,r.kt)("h3",{id:"indexof"},"indexOf"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"buf.indexOf(value, [offset], [encoding])")," \u662f\u7528\u6765\u67e5\u627e value \u5728 buf \u4e2d\u7684\u4e0b\u6807\u7684\uff0c\u53c2\u6570\u7684\u542b\u4e49\u540c includes \u65b9\u6cd5\u76f8\u540c\uff0c\u5982\u679c\u5728 buf \u627e\u4e0d\u5230 value\uff0c\u90a3\u4e48\u4f1a\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"-1"),"\uff0c\u6240\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"includes(value)")," \u65b9\u6cd5\u5176\u5b9e\u5c31\u76f8\u5f53\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"indexOf(value) !== -1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const buf = Buffer.from("HelloWorld");\n\nconsole.log(buf.indexOf("H")); // 0\nconsole.log(buf.indexOf("H", 1)); // -1\nconsole.log(buf.indexOf(Buffer.from("World"))); // 5\nconsole.log(buf.indexOf(72)); // 0\n')),(0,r.kt)("h3",{id:"equals"},"equals"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"buf.equals(otherBuffer)")," \u662f\u6bd4\u8f83\u4e24\u4e2a Buffer \u5bf9\u8c61\u7684\u5b57\u8282\u662f\u5426\u5b8c\u5168\u76f8\u540c\uff0c\u5982\u679c\u76f8\u540c\uff0c\u5219\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5426\u5219\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const buf1 = Buffer.alloc(5);\nconst buf2 = Buffer.alloc(5);\nconst buf3 = Buffer.allocUnsafe(5);\n\nconsole.log(buf1.equals(buf2)); // true\nconsole.log(buf1.equals(buf3)); // false\n")),(0,r.kt)("h2",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://nodejs.cn/api/buffer.html"},"Buffer|Node.js \u6587\u6863"))))}c.isMDXComponent=!0}}]);