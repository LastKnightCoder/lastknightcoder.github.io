"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5398],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=p(r),m=a,f=g["".concat(c,".").concat(m)]||g[m]||u[m]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9455:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={authors:"xiongtao",tags:["\u6df1\u5ea6\u5b66\u4e60","YOLO","\u76ee\u6807\u68c0\u6d4b"]},l=void 0,i={permalink:"/blog/2022/05/17/\u90e8\u7f72YOLOv5\u8bad\u7ec3",editUrl:"https://github.com/LastKnightCoder/lastknightcoder/tree/master/blog/2022-05-17-\u90e8\u7f72YOLOv5\u8bad\u7ec3.mdx",source:"@site/blog/2022-05-17-\u90e8\u7f72YOLOv5\u8bad\u7ec3.mdx",title:"\u90e8\u7f72YOLOv5\u8bad\u7ec3",description:"\u4e0b\u8f7d\u6e90\u7801\u5305\uff0c\u89e3\u538b",date:"2022-05-17T00:00:00.000Z",formattedDate:"2022\u5e745\u670817\u65e5",tags:[{label:"\u6df1\u5ea6\u5b66\u4e60",permalink:"/blog/tags/\u6df1\u5ea6\u5b66\u4e60"},{label:"YOLO",permalink:"/blog/tags/yolo"},{label:"\u76ee\u6807\u68c0\u6d4b",permalink:"/blog/tags/\u76ee\u6807\u68c0\u6d4b"}],readingTime:3.045,hasTruncateMarker:!0,authors:[{name:"\u718a\u6ed4",title:"\u524d\u7aef\u5de5\u7a0b\u5e08 @ \u9ad8\u5fb7",url:"https://github.com/LastKnightCoder",imageURL:"https://cdn.staticaly.com/gh/LastKnightCoder/ImgHosting3@master/wallhaven-8opwwy.3cbn7rc981c0.webp",key:"xiongtao"}],frontMatter:{authors:"xiongtao",tags:["\u6df1\u5ea6\u5b66\u4e60","YOLO","\u76ee\u6807\u68c0\u6d4b"]},prevItem:{title:"Rust\u751f\u547d\u5468\u671f",permalink:"/blog/2022/06/12/Rust\u751f\u547d\u5468\u671f"},nextItem:{title:"\u884c\u5185\u6837\u5f0f\u4f7f\u7528 important",permalink:"/blog/2022/04/10/\u884c\u5185\u6837\u5f0f\u4f7f\u7528 important"}},c={authorsImageUrls:[void 0]},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e0b\u8f7d",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ultralytics/yolov5/archive/refs/tags/v6.1.tar.gz"},"\u6e90\u7801\u5305"),"\uff0c\u89e3\u538b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/ultralytics/yolov5/archive/refs/tags/v6.1.tar.gz\ntar -zxvf yolov5-6.1.tar.gz\n")),(0,a.kt)("p",null,"\u8fdb\u5165\u89e3\u538b\u76ee\u5f55\uff0c\u5b89\u88c5\u4f9d\u8d56"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd yolov5-6.1\npip install -r requirements.txt\n")),(0,a.kt)("p",null,"\u4e0b\u8f7d\u9884\u8bad\u7ec3\u6a21\u578b ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ultralytics/yolov5/releases/download/v6.1/yolov5s6.pt"},"yolov5s6.pt"),"\uff0c\u5728\u9879\u76ee\u6839\u76ee\u5f55\u65b0\u5efa weights \u6587\u4ef6\u5939\uff0c\u5c06\u4e0b\u8f7d\u7684\u9884\u8bad\u7ec3\u6a21\u578b\u653e\u5165\u3002"))}u.isMDXComponent=!0}}]);