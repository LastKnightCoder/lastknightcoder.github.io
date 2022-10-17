"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6722],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),b=a,d=m["".concat(s,".").concat(b)]||m[b]||p[b]||o;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(7462),a=r(7294),o=r(6010),l=r(2389),i=r(7392),s=r(7094),u=r(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:r,block:l,defaultValue:m,values:b,groupId:d,className:v}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=b??f.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),h=(0,i.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:k}=(0,s.U)(),[w,M]=(0,a.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=d){const e=O[d];null!=e&&e!==w&&g.some((t=>t.value===e))&&M(e)}const x=e=>{const t=e.currentTarget,r=E.indexOf(t),n=g[r].value;n!==w&&(T(t),M(n),null!=d&&k(d,String(n)))},D=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;r=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;r=E[t]??E[E.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},v)},g.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>E.push(e),onKeyDown:D,onFocus:x,onClick:x},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":w===t})}),r??t)}))),r?(0,a.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function b(e){const t=(0,l.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}},925:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));r(5488),r(5162);const o={slug:"MutationObserver",tags:["MutationObserver","DOM"],authors:"xiongtao",date:new Date("2022-10-11T00:00:00.000Z")},l=void 0,i={permalink:"/blog/MutationObserver",editUrl:"https://github.com/LastKnightCoder/lastknightcoder/tree/master/blog/2022-10-11-MutationObserver.mdx",source:"@site/blog/2022-10-11-MutationObserver.mdx",title:"MutationObserver",description:"\u5728\u590d\u6742\u7684\u7f51\u9875\u5e94\u7528\u4e2d\uff0cDOM \u7ed3\u6784\u4f1a\u9891\u7e41\u7684\u53d1\u751f\u53d8\u5316\uff0c\u6709\u7684\u65f6\u5019\u6211\u4eec\u9700\u8981\u6839\u636e\u53d8\u5316\u6765\u8fdb\u884c\u76f8\u5e94\u7684\u64cd\u4f5c\uff0c\u4ee5\u5f80\u901a\u8fc7 Mutation Events \u6765\u76d1\u542c DOM \u7684\u53d8\u5316\uff0c\u76ee\u524d\u5b83\u5df2\u7ecf\u5e9f\u5f03\u4e86\uff0c\u88ab MutationObserver \u6240\u53d6\u4ee3\u3002MutationObserver \u7684\u517c\u5bb9\u6027\u5f88\u597d\uff0c\u53ef\u4ee5\u653e\u5fc3\u5927\u80c6\u7684\u4f7f\u7528\u3002",date:"2022-10-11T00:00:00.000Z",formattedDate:"2022\u5e7410\u670811\u65e5",tags:[{label:"MutationObserver",permalink:"/blog/tags/mutation-observer"},{label:"DOM",permalink:"/blog/tags/dom"}],readingTime:16.795,hasTruncateMarker:!0,authors:[{name:"\u718a\u6ed4",title:"\u524d\u7aef\u5de5\u7a0b\u5e08 @ \u963f\u91cc\u5df4\u5df4",url:"https://github.com/LastKnightCoder",imageURL:"https://cdn.staticaly.com/gh/LastKnightCoder/ImgHosting3@master/wallhaven-8opwwy.3cbn7rc981c0.webp",key:"xiongtao"}],frontMatter:{slug:"MutationObserver",tags:["MutationObserver","DOM"],authors:"xiongtao",date:"2022-10-11T00:00:00.000Z"},prevItem:{title:"\u79fb\u52a8\u7aef\u6587\u5b57\u5782\u76f4\u5c45\u4e2d\u65b9\u6848",permalink:"/blog/mobile-text-middle"},nextItem:{title:"IntersectionObserver",permalink:"/blog/IntersectionObserver"}},s={authorsImageUrls:[void 0]},u=[{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u590d\u6742\u7684\u7f51\u9875\u5e94\u7528\u4e2d\uff0cDOM \u7ed3\u6784\u4f1a\u9891\u7e41\u7684\u53d1\u751f\u53d8\u5316\uff0c\u6709\u7684\u65f6\u5019\u6211\u4eec\u9700\u8981\u6839\u636e\u53d8\u5316\u6765\u8fdb\u884c\u76f8\u5e94\u7684\u64cd\u4f5c\uff0c\u4ee5\u5f80\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"Mutation Events")," \u6765\u76d1\u542c DOM \u7684\u53d8\u5316\uff0c\u76ee\u524d\u5b83\u5df2\u7ecf\u5e9f\u5f03\u4e86\uff0c\u88ab ",(0,a.kt)("inlineCode",{parentName:"p"},"MutationObserver")," \u6240\u53d6\u4ee3\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"MutationObserver")," \u7684\u517c\u5bb9\u6027\u5f88\u597d\uff0c\u53ef\u4ee5\u653e\u5fc3\u5927\u80c6\u7684\u4f7f\u7528\u3002"),(0,a.kt)("img",{src:"https://cdn.staticaly.com/gh/LastKnightCoder/ImgHosting3@master/image.70ve24867iw.webp",style:{zoom:"50%"}}),(0,a.kt)("h2",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MutationObserver")," \u7684\u57fa\u672c\u7528\u6cd5\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const observer = new MutationObserver(mutations => {\n\n});\nobserver.observe(element, options);\n")))}p.isMDXComponent=!0}}]);