"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7468],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,g=m["".concat(i,".").concat(u)]||m[u]||p[u]||l;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={slug:"selection-and-range",authors:"xiongtao",date:new Date("2022-09-23T00:00:00.000Z"),tags:["\u9009\u533a","Selection","Range"]},o=void 0,s={permalink:"/blog/selection-and-range",editUrl:"https://github.com/LastKnightCoder/lastknightcoder/tree/master/blog/2022-09-23-Selection\u4e0eRange.mdx",source:"@site/blog/2022-09-23-Selection\u4e0eRange.mdx",title:"Selection\u4e0eRange",description:"\u672c\u6587\u53c2\u8003//segmentfault.com/a/1190000041457245",date:"2022-09-23T00:00:00.000Z",formattedDate:"2022\u5e749\u670823\u65e5",tags:[{label:"\u9009\u533a",permalink:"/blog/tags/\u9009\u533a"},{label:"Selection",permalink:"/blog/tags/selection"},{label:"Range",permalink:"/blog/tags/range"}],readingTime:7.485,hasTruncateMarker:!1,authors:[{name:"\u718a\u6ed4",title:"\u524d\u7aef\u5de5\u7a0b\u5e08 @ \u963f\u91cc\u5df4\u5df4",url:"https://github.com/LastKnightCoder",imageURL:"https://cdn.staticaly.com/gh/LastKnightCoder/ImgHosting3@master/wallhaven-8opwwy.3cbn7rc981c0.webp",key:"xiongtao"}],frontMatter:{slug:"selection-and-range",authors:"xiongtao",date:"2022-09-23T00:00:00.000Z",tags:["\u9009\u533a","Selection","Range"]},prevItem:{title:"IntersectionObserver",permalink:"/blog/IntersectionObserver"},nextItem:{title:"CSS\u52a8\u753b\u53d6\u4ee3\u5b9a\u65f6\u5668\u7684\u65b9\u6cd5",permalink:"/blog/css-animation-timer"}},i={authorsImageUrls:[void 0]},d=[{value:"\u5149\u6807\u4e0e\u9009\u533a",id:"\u5149\u6807\u4e0e\u9009\u533a",level:2},{value:"\u53ef\u7f16\u8f91\u5143\u7d20",id:"\u53ef\u7f16\u8f91\u5143\u7d20",level:2},{value:"input \u4e0e textarea",id:"input-\u4e0e-textarea",level:2},{value:"\u666e\u901a\u5143\u7d20\u7684\u9009\u533a\u64cd\u4f5c",id:"\u666e\u901a\u5143\u7d20\u7684\u9009\u533a\u64cd\u4f5c",level:2},{value:"\u4e3b\u52a8\u9009\u62e9\u67d0\u533a\u57df",id:"\u4e3b\u52a8\u9009\u62e9\u67d0\u533a\u57df",level:3},{value:"\u9009\u62e9\u8282\u70b9",id:"\u9009\u62e9\u8282\u70b9",level:3},{value:"\u76f4\u63a5\u6839\u636e\u7236\u5143\u7d20\u9009\u62e9\u6587\u672c",id:"\u76f4\u63a5\u6839\u636e\u7236\u5143\u7d20\u9009\u62e9\u6587\u672c",level:3},{value:"\u8fd8\u539f\u9009\u533a",id:"\u8fd8\u539f\u9009\u533a",level:3},{value:"\u63d2\u5165\u5185\u5bb9",id:"\u63d2\u5165\u5185\u5bb9",level:3},{value:"\u7ed9\u9009\u4e2d\u5185\u5bb9\u5305\u88f9\u6807\u7b7e",id:"\u7ed9\u9009\u4e2d\u5185\u5bb9\u5305\u88f9\u6807\u7b7e",level:3}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u672c\u6587\u53c2\u8003: ",(0,r.kt)("a",{parentName:"p",href:"https://segmentfault.com/a/1190000041457245"},"https://segmentfault.com/a/1190000041457245"))),(0,r.kt)("h2",{id:"\u5149\u6807\u4e0e\u9009\u533a"},"\u5149\u6807\u4e0e\u9009\u533a"),(0,r.kt)("p",null,"\u5149\u6807\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u9009\u533a\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Selection")," \u5bf9\u8c61\u8868\u793a\u7528\u6237\u9009\u62e9\u7684\u6587\u672c\u8303\u56f4\u6216\u63d2\u5165\u7b26\u53f7\u7684\u5f53\u524d\u4f4d\u7f6e\u3002\u5b83\u4ee3\u8868\u9875\u9762\u4e2d\u7684\u6587\u672c\u9009\u533a\uff0c\u53ef\u80fd\u6a2a\u8de8\u591a\u4e2a\u5143\u7d20\u3002\u901a\u5e38\u7531\u7528\u6237\u62d6\u62fd\u9f20\u6807\u7ecf\u8fc7\u6587\u5b57\u800c\u4ea7\u751f\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Range"),"\u5bf9\u8c61\u8868\u793a\u5305\u542b\u8282\u70b9\u548c\u90e8\u5206\u6587\u672c\u8282\u70b9\u7684\u6587\u6863\u7247\u6bb5\u3002\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"selection")," \u5bf9\u8c61\u83b7\u5f97\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"range")," \u5bf9\u8c61\u624d\u662f\u6211\u4eec\u64cd\u4f5c\u5149\u6807\u7684\u91cd\u70b9\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const selection = window.getSelection();\n")),(0,r.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\u6211\u4eec\u4e0d\u4f1a\u76f4\u63a5\u64cd\u4f5c ",(0,r.kt)("inlineCode",{parentName:"p"},"selection")," \u5bf9\u8c61\uff0c\u800c\u662f\u9700\u8981\u64cd\u4f5c\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"seleciton")," \u5bf9\u8c61\u6240\u5bf9\u5e94\u7684\u7528\u6237\u9009\u62e9\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"range")," \u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const range = selection.getRangeAt(0);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53ef\u80fd\u5b58\u5728\u591a\u4e2a\u9009\u533a\uff0c\u76ee\u524d\u53ea\u6709 Firefox \u652f\u6301\u591a\u9009\u533a\u3002"),"\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u90fd\u4e0d\u9700\u8981\u8003\u8651\u591a\u9009\u533a\u7684\u60c5\u51b5\u3002"),(0,r.kt)("p",null,"Range \u5bf9\u8c61\u4e0a\u6709\u4e00\u4e2a\u5c5e\u6027\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"collapsed"),"\uff0c\u8868\u793a\u8d77\u70b9\u548c\u7ec8\u70b9\u662f\u5426\u91cd\u53e0\uff0c\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"collapsed")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u65f6\uff0c\u9009\u4e2d\u533a\u57df\u88ab\u538b\u7f29\u6210\u4e00\u4e2a\u70b9\uff0c\u5bf9\u4e8e\u666e\u901a\u7684\u5143\u7d20\uff0c\u53ef\u80fd\u4ec0\u4e48\u90fd\u770b\u4e0d\u5230\uff0c\u5982\u679c\u662f\u5728\u53ef\u7f16\u8f91\u5143\u7d20\u4e0a\uff0c\u90a3\u8fd9\u4e2a\u88ab\u538b\u7f29\u7684\u70b9\u5c31\u53d8\u6210\u4e86\u53ef\u4ee5\u95ea\u70c1\u7684\u5149\u6807\u3002 "),(0,r.kt)("h2",{id:"\u53ef\u7f16\u8f91\u5143\u7d20"},"\u53ef\u7f16\u8f91\u5143\u7d20"),(0,r.kt)("p",null,"\u9009\u533a\u548c\u5143\u7d20\u662f\u5426\u53ef\u7f16\u8f91\u5e76\u6ca1\u6709\u76f4\u63a5\u5173\u7cfb\uff0c\u552f\u4e00\u7684\u533a\u522b\u5c31\u662f\uff0c\u5728\u53ef\u7f16\u8f91\u5143\u7d20\u4e0a\u53ef\u4ee5\u770b\u5230\u5149\u6807\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<input type="text">\n<textarea></textarea>\n<div contenteditable="true"></div>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"div{\n    -webkit-user-modify: read-write;\n}\n")),(0,r.kt)("p",null,"\u8fd9\u4e24\u79cd\u6709\u4ec0\u4e48\u533a\u522b\u5462\uff1f\u7b80\u5355\u6765\u8bf4\uff0c\u8868\u5355\u5143\u7d20\u66f4\u5bb9\u6613\u63a7\u5236\uff0c\u6d4f\u89c8\u5668\u63d0\u4f9b\u4e86\u66f4\u76f4\u89c2\u7684 API \u6765\u64cd\u63a7\u9009\u533a\u3002"),(0,r.kt)("h2",{id:"input-\u4e0e-textarea"},"input \u4e0e textarea"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"inputElement.setSelectionRange(selectionStart, selectionEnd [, selectionDirection]);\n")),(0,r.kt)("p",null,"\u9009\u62e9\u5168\u90e8 "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"txt.select();\ntxt.focus();\n")),(0,r.kt)("p",null,"\u66ff\u6362\u5185\u5bb9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"inputElement.setRangeText(replacement);\ninputElement.setRangeText(replacement, start, end [, selectMode]);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"replacement\uff1a\u66ff\u6362\u7684\u6587\u672c"),(0,r.kt)("li",{parentName:"ul"},"start\uff1a\u8d77\u59cb\u4f4d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"end\uff1a\u7ec8\u6b62\u4f4d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"selectMode\uff1a\u66ff\u6362\u540e\u7684\u9009\u53d6\u72b6\u6001",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"preserve\uff1a\u9ed8\u8ba4\u503c\uff0c\u4fdd\u7559\u9009\u533a")))),(0,r.kt)("p",null,"\u5047\u8bbe\u624b\u52a8\u9009\u4e2d\u7684\u533a\u57df\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"[9,10]"),"\uff0c\u5982\u679c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"[1,2]")," \u7684\u4f4d\u7f6e\u66ff\u6362\u65b0\u5185\u5bb9\uff0c\u90a3\u4e48\u9009\u533a\u4ecd\u7136\u5728\u4e4b\u524d\u4f4d\u7f6e\u3002\u5982\u679c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"[8,11]")," \u7684\u4f4d\u7f6e\u66ff\u6362\u65b0\u5185\u5bb9\uff0c\u7531\u4e8e\u65b0\u5185\u5bb9\u7684\u4f4d\u7f6e\u8986\u76d6\u4e86\u4e4b\u524d\u7684\u9009\u533a\uff0c\u539f\u9009\u533a\u4e5f\u5c31\u4e0d\u5b58\u5728\u4e86\uff0c\u90a3\u4e48\u66ff\u6362\u5b8c\u4e4b\u540e\uff0c\u9009\u533a\u4f1a\u9009\u4e2d\u521a\u521a\u63d2\u5165\u7684\u65b0\u5185\u5bb9\u3002"),(0,r.kt)("h2",{id:"\u666e\u901a\u5143\u7d20\u7684\u9009\u533a\u64cd\u4f5c"},"\u666e\u901a\u5143\u7d20\u7684\u9009\u533a\u64cd\u4f5c"),(0,r.kt)("p",null,"\u9700\u8981\u7528\u5230\u524d\u9762\u63d0\u5230\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Selection")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Range")," \u76f8\u5173\u65b9\u6cd5\u3002"),(0,r.kt)("h3",{id:"\u4e3b\u52a8\u9009\u62e9\u67d0\u533a\u57df"},"\u4e3b\u52a8\u9009\u62e9\u67d0\u533a\u57df"),(0,r.kt)("p",null,"\u9700\u521b\u5efa\u4e00\u4e2a Range \u5bf9\u8c61\uff0c\u8bbe\u7f6e\u8303\u56f4\uff0c\u7136\u540e\u6dfb\u52a0\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Selection")," \u5bf9\u8c61\u4e2d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"range.setStart(startNode, startOffset);\nrange.setEnd(endNode, endOffset);\n")),(0,r.kt)("p",null,"\u56e0\u4e3a\u666e\u901a\u5143\u7d20\u53ef\u80fd\u5305\u542b\u591a\u4e2a\u5143\u7d20\uff0c\u6240\u4ee5\u9009\u533a\u521b\u5efa\u6bd4\u8868\u5355\u590d\u6742\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u79fb\u9664\u6240\u6709\u9009\u533a\nselection.removeAllRanges()\n// \u6dfb\u52a0\u9009\u533a\nselection.addRange(range)\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u8d77\u59cb\u8282\u70b9\u7c7b\u578b\u662f Text \uff0c Comment , or CDATASection \u4e4b\u4e00, \u90a3\u4e48 startOffset \u6307\u7684\u662f\u4ece\u8d77\u59cb\u8282\u70b9\u7b97\u8d77\u5b57\u7b26\u7684\u504f\u79fb\u91cf\u3002 \u5bf9\u4e8e\u5176\u4ed6 Node \u7c7b\u578b\u8282\u70b9\uff0c startOffset \u662f\u6307\u4ece\u8d77\u59cb\u7ed3\u70b9\u5f00\u59cb\u7b97\u8d77\u5b50\u8282\u70b9\u7684\u504f\u79fb\u91cf\u3002")),(0,r.kt)("h3",{id:"\u9009\u62e9\u8282\u70b9"},"\u9009\u62e9\u8282\u70b9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u9009\u4e2d\u8282\u70b9\u5185\u5bb9\uff0c\u5e76\u9009\u4e2d\u6807\u7b7e\nrange.selectNode();\n// \u53ea\u9009\u4e2d\u8282\u70b9\u5185\u7684Text\u5185\u5bb9\uff0c\u4e0d\u9009\u4e2d\u6807\u7b7e\nrange.selectNodeContents();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-info"},"\u6709\u70b9\u50cf innerHTML \u4e0e outerHTML \u7684\u5173\u7cfb\u3002\n")),(0,r.kt)("h3",{id:"\u76f4\u63a5\u6839\u636e\u7236\u5143\u7d20\u9009\u62e9\u6587\u672c"},"\u76f4\u63a5\u6839\u636e\u7236\u5143\u7d20\u9009\u62e9\u6587\u672c"),(0,r.kt)("p",null,"\u5982\u4f55\u901a\u8fc7\u76f8\u5bf9\u5916\u5c42\u7684\u504f\u79fb\u91cf\u83b7\u53d6\u5230\u6700\u91cc\u5c42\u5143\u7d20\u7684\u4fe1\u606f\u5462\uff1f\u6574\u4f53\u601d\u8def\u5c31\u662f",(0,r.kt)("strong",{parentName:"p"},"\u6df1\u5ea6\u4f18\u5148\u904d\u5386"),"\u6807\u7b7e\uff0c\u53d6\u5f97\u6240\u6709\u7684 TextNode\uff0c\u5e76\u5f97\u5230\u6bcf\u4e2a TextNode \u6240\u5728\u7684\u533a\u95f4\u3002\u7136\u540e\u627e\u5230\u8d77\u59cb\u70b9\u548c\u7ec8\u6b62\u70b9\u6240\u5728\u7684\u533a\u95f4\uff0c\u8fd4\u56de\u8be5\u533a\u95f4\u7684 TextNode \u4ee5\u53ca\u76f8\u5e94\u7684\u504f\u79fb\u91cf\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const getNodeAndOffset = (ele, start = 0, end = 0) => {\n  const txtList = [];\n  const dfs = (childNodes) => {\n    [...childNodes].forEach(node => {\n      if (node.nodeName === '#text') {\n        txtList.push(node);\n      } else {\n        dfs(node.childNodes);\n      }\n    })\n  }\n  dfs(ele.childNodes);\n  const clips = txtList.reduce((arr, el, index) => {\n    const endPosition = el.textContent.length + (index > 0 ? arr[index - 1][2] : 0);\n    const startPosition = endPosition - el.textContent.length;\n    arr.push([el, startPosition, endPosition]);\n    return arr;\n  }, []);\n  \n  const startNode = clips.find(item => start >= item[1] && start < item[2]);\n  // \u5982\u679c end \u8d85\u8fc7\u4e86\u957f\u5ea6\u8981\u4e0d\u8981\u76f4\u63a5\u8bbe\u7f6e\u4e3a\u672b\u5c3e\n  const endNode = clips.find(item => end >= item[1] && end < item[2]);\n  // startNode \u548c endNode \u6ca1\u6709\u627e\u5230\u600e\u4e48\u529e\n  return [startNode[0], start - startNode[1], endNode[0], end - endNode[1]];\n}\n")),(0,r.kt)("h3",{id:"\u8fd8\u539f\u9009\u533a"},"\u8fd8\u539f\u9009\u533a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div id="txt" contenteditable="true">\n  \u5929\u4e0d\u751f\u592b\u5b50\uff0c\u4e07\u53e4\u5982\u957f\u591c\uff01\n</div>\n<button id="restore">\u8fd8\u539f\u9009\u533a</button>\n')),(0,r.kt)("p",null,"\u65b9\u6848\u4e00\uff0c\u4fdd\u5b58 Range \u5bf9\u8c61\uff0c\u7136\u540e\u6062\u590d\uff0c\u4f46\u662f\u5f53\u5185\u5bb9\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u539f\u5148\u7684\u9009\u533a\u5c31\u5931\u6548\u4e86"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let lastRange = null;\ntxt.addEventListener('mouseup', () => {\n  const selection = document.getSelection();\n  lastRange = selection.getRangeAt(0);\n})\nconst restore = document.getElementById('restore');\nrestore.addEventListener('click', () => {\n  const selection = document.getSelection();\n  selection.removeAllRanges();\n  selection.addRange(lastRange);\n});\n")),(0,r.kt)("p",null,"\u65b9\u6848\u4e8c\uff0c\u83b7\u5f97\u7edd\u5bf9\u504f\u79fb\u91cf\uff0c\u5373\u4f7f\u5185\u5bb9\u53d1\u751f\u6539\u53d8\uff0c\u4e5f\u4e0d\u5f71\u54cd\u3002\u83b7\u5f97\u7edd\u5bf9\u504f\u79fb\u91cf\u7684\u601d\u8def\u8fd8\u662f\u5148\u83b7\u5f97\u6240\u6709\u6587\u672c\u5143\u7d20\u7684\u533a\u95f4\uff0c\u7136\u540e\u627e\u5230\u88ab\u9009\u4e2d\u7684\u8d77\u59cb\u8282\u70b9\u548c\u7ed3\u675f\u8282\u70b9\uff0c\u83b7\u5f97\u5176\u8d77\u59cb\u504f\u79fb\u548c\u7ed3\u675f\u504f\u79fb\uff0c\u5206\u522b\u52a0\u4e0a\u8282\u70b9\u6240\u5728\u533a\u95f4\u7684\u8d77\u59cb\u503c\u5373\u53ef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const getRangeOffset = ele => {\n  const txtList = [];\n  const dfs = (childNodes) => {\n    [...childNodes].forEach(node => {\n      if (node.nodeName === '#text') {\n        txtList.push(node);\n      } else {\n        dfs(node.childNodes);\n      }\n    })\n  }\n  dfs(ele.childNodes);\n  const clips = txtList.reduce((arr, el, index) => {\n    const endPosition = el.textContent.length + (index > 0 ? arr[index - 1][2] : 0);\n    const startPosition = endPosition - el.textContent.length;\n    arr.push([el, startPosition, endPosition]);\n    return arr;\n  }, []);\n  const selection = document.getSelection();\n  const range = selection.getRangeAt(0);\n  const startNode = clips.find(item => range.startContainer === item[0]);\n  const endNode = clips.find(item => range.endContainer === item[0]);\n  return [startNode[1] + range.startOffset, endNode[1] + range.endOffset];\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let lastRange = {};\ntxt.addEventListener('mouseup', () => {\n  const [startOffset, endOffset] = getRangeOffset(txt);\n  lastRange = {\n    start: startOffset,\n    end: endOffset\n  }\n})\nconst restore = document.getElementById('restore');\nrestore.addEventListener('click', () => {\n  const selection = document.getSelection();\n  const range = document.createRange();\n  const [startNode, startPosition, endNode, endPosition] = getNodeAndOffset(txt, lastRange.start, lastRange.end);\n  range.setStart(startNode, startPosition);\n  range.setEnd(endNode, endPosition);\n  selection.removeAllRanges();\n  selection.addRange(range);\n});\n")),(0,r.kt)("h3",{id:"\u63d2\u5165\u5185\u5bb9"},"\u63d2\u5165\u5185\u5bb9"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"range.insertNode()")," \u65e2\u53ef\u4ee5\u63d2\u5165\u6587\u672c\u5185\u5bb9\uff0c\u4e5f\u53ef\u4ee5\u63d2\u5165\u6807\u7b7e\u3002\u5b83\u4e0d\u4f1a\u66ff\u6362\u5df2\u9009\u62e9\u7684\u5185\u5bb9\uff0c\u800c\u662f\u5728\u8d77\u70b9\u5904\u63d2\u5165\u4e00\u4e2a\u8282\u70b9\u3002\u5982\u679c\u8981\u66ff\u6362\uff0c\u53ef\u4ee5\u5148\u5220\u9664\u5728\u6dfb\u52a0\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"range.deleteContents")," \u8fdb\u884c\u5220\u9664\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const textNode = document.createTextNode('\u65b0\u5185\u5bb9');\nrange.deleteContents();\nrange.insertNode(textNode);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const mark = document.createElement('mark');\nmark.textContent = '\u65b0\u5185\u5bb9';\nrange.insertNode(mark);\n")),(0,r.kt)("h3",{id:"\u7ed9\u9009\u4e2d\u5185\u5bb9\u5305\u88f9\u6807\u7b7e"},"\u7ed9\u9009\u4e2d\u5185\u5bb9\u5305\u88f9\u6807\u7b7e"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"range.surroundContents")," \u7ed9\u9009\u533a\u5305\u88f9\u4e00\u5c42\u6807\u7b7e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const mark = document.createElement('mark');\nrange.surroundContents(mark);\n")),(0,r.kt)("p",null,"\u4f46\u662f\u5f53\u9009\u533a\u6a2a\u8de8\u591a\u4e2a\u6807\u7b7e\u65f6\uff0c\u5c31\u4f1a\u53d1\u751f\u9519\u8bef\u3002\u53e6\u4e00\u79cd\u65b9\u6848\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"range.extractContents")," \u63d0\u53d6\u9009\u533a\u5185\u5bb9\uff0c\u662f\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"DocumentFragment"),"\uff0c\u7136\u540e\u63d2\u5165\u65b0\u5185\u5bb9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const mark = document.createElement('mark');\nmark.append(range.extractContents());\nrange.insertNode(mark);\n")))}p.isMDXComponent=!0}}]);