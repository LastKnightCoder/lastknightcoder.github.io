"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6495],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>c});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),c=a,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||o;return t?r.createElement(k,i(i({ref:n},s),{},{components:t})):r.createElement(k,i({ref:n},s))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1071:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const o={},i=void 0,l={permalink:"/blog/2022/06/12/Rust\u751f\u547d\u5468\u671f",editUrl:"https://github.com/LastKnightCoder/lastknightcoder/tree/master/blog/2022-06-12-Rust\u751f\u547d\u5468\u671f.mdx",source:"@site/blog/2022-06-12-Rust\u751f\u547d\u5468\u671f.mdx",title:"Rust\u751f\u547d\u5468\u671f",description:"\u5f53\u6211\u4eec\u501f\u7528\u4e00\u4e2a\u53d8\u91cf\u65f6\uff0c\u5982\u679c\u53d8\u91cf\u88ab\u9500\u6bc1\uff0c\u90a3\u4e48\u6211\u4eec\u5c31\u4e0d\u80fd\u901a\u8fc7\u8be5\u501f\u7528\u7684\u5f15\u7528\u8bbf\u95ee\u6570\u636e\uff0c\u56e0\u4e3a\u53d8\u91cf\u4ee5\u53ca\u88ab\u9500\u6bc1\u4e86\uff0c\u6b64\u65f6\u8bbf\u95ee\u7684\u6570\u636e\u662f\u4e0d\u53ef\u77e5\u7684\u3002",date:"2022-06-12T00:00:00.000Z",formattedDate:"2022\u5e746\u670812\u65e5",tags:[],readingTime:6.265,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"encodeURI\u4e0eencodeURIComponent",permalink:"/blog/encodeURI\u4e0eencodeURIComponent"},nextItem:{title:"\u90e8\u7f72YOLOv5\u8bad\u7ec3",permalink:"/blog/2022/05/17/\u90e8\u7f72YOLOv5\u8bad\u7ec3"}},p={authorsImageUrls:[]},u=[],s={toc:u};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5f53\u6211\u4eec\u501f\u7528\u4e00\u4e2a\u53d8\u91cf\u65f6\uff0c\u5982\u679c\u53d8\u91cf\u88ab\u9500\u6bc1\uff0c\u90a3\u4e48\u6211\u4eec\u5c31\u4e0d\u80fd\u901a\u8fc7\u8be5\u501f\u7528\u7684\u5f15\u7528\u8bbf\u95ee\u6570\u636e\uff0c\u56e0\u4e3a\u53d8\u91cf\u4ee5\u53ca\u88ab\u9500\u6bc1\u4e86\uff0c\u6b64\u65f6\u8bbf\u95ee\u7684\u6570\u636e\u662f\u4e0d\u53ef\u77e5\u7684\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n  let x;\n  {\n    let y = 5;\n    x = &y;\n  }\n  println!("{}", x);\n}\n')),(0,a.kt)("p",null,"\u5982\u679c\u6211\u4eec\u5c1d\u8bd5\u7f16\u8bd1\u8be5\u4ee3\u7801\uff0c\u7f16\u8bd1\u5668\u5c06\u4f1a\u7ed9\u51fa\u9519\u8bef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'error[E0597]: `y` does not live long enough\n --\x3e hello5.rs:5:9\n  |\n5 |     x = &y;\n  |         ^^ borrowed value does not live long enough\n6 |   }\n  |   - `y` dropped here while still borrowed\n7 |   println!("{}", x);\n  |                  - borrow later used here\n\nerror: aborting due to previous error\n\nFor more information about this error, try `rustc --explain E0597`.\n')),(0,a.kt)("p",null,"\u6211\u4eec\u4f7f\u7528\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\xa0\u53d8\u91cf\u501f\u7528\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"y"),"\xa0\u7684\u5f15\u7528\uff0c\u4f46\u662f\u5728\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"y"),"\xa0\u53d8\u91cf\u9500\u6bc1\u4ee5\u540e\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\xa0\u53d8\u91cf\u5c31\u4e0d\u80fd\u8bbf\u95ee\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"y"),"\xa0\u7684\u6570\u636e\u4e86\uff0c\u5b83\u662f\u4e00\u4e2a\u60ac\u7a7a\u6307\u9488\u3002\u597d\u5728\u6211\u4eec\u4e0d\u9700\u8981\u62c5\u5fc3\u8fd9\u4e2a\u95ee\u9898\uff0c\u7f16\u8bd1\u5668\u53ef\u4ee5\u627e\u5230\u95ee\u9898\u5e76\u4e3a\u6211\u4eec\u89e3\u51b3\u3002\u7f16\u8bd1\u5668\u8981\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u5c31\u5f97\u77e5\u9053\u53d8\u91cf\u7684\u58f0\u660e\u5468\u671f\uff0c\u4f8b\u5982\u4e0a\u9762\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"x, y"),"\xa0\u7684\u58f0\u660e\u5468\u671f\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\u5982\u679c\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u5f15\u7528\u7684\u8bdd\uff0c\u51fd\u6570\u662f\u4e0d\u77e5\u9053\u8fd4\u56de\u7684\u53d8\u91cf\u7684\u58f0\u660e\u5468\u671f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"fn get_one(x: &i32, y: &i32) -> &i32 {\n  &x\n}\n")),(0,a.kt)("p",null,"\u5982\u679c\u6211\u4eec\u5c1d\u8bd5\u5b9a\u4e49\u4e0a\u9762\u7684\u51fd\u6570\uff0c\u7f16\u8bd1\u5668\u4f1a\u7ed9\u51fa\u4e00\u4e2a\u9519\u8bef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"error[E0106]: missing lifetime specifier\n  --\x3e hello6.rs:13:33\n   |\n13 | fn get_one(x: &i32, y: &i32) -> &i32 {\n   |               ----     ----     ^ expected named lifetime parameter\n   |\n   = help: this function's return type contains a borrowed value, but the signature does not say whether it is borrowed from `x` or `y`\nhelp: consider introducing a named lifetime parameter\n   |\n13 | fn get_one<'a>(x: &'a i32, y: &'a i32) -> &'a i32 {\n   |           ++++     ++          ++          ++\n\nerror: aborting due to previous error\n\nFor more information about this error, try `rustc --explain E0106`.\n")),(0,a.kt)("p",null,"\u8fd9\u662f\u56e0\u4e3a\u7f16\u8bd1\u5668\u4e0d\u77e5\u9053\u8fd4\u56de\u7684\u5f15\u7528\u7684\u751f\u547d\u5468\u671f\uff0c\u5982\u679c\u4e0d\u77e5\u9053\u751f\u547d\u5468\u671f\u7684\u8bdd\uff0c\u5b83\u5c31\u4e0d\u80fd\u68c0\u6d4b\u60ac\u7a7a\u6307\u9488\u7684\u95ee\u9898\uff0c\u6240\u4ee5\u7f16\u8bd1\u5c31\u4e0d\u4f1a\u901a\u8fc7\uff0c\u6211\u4eec\u9700\u8981\u6307\u5b9a\u8fd4\u56de\u7684\u5f15\u7528\u7684\u751f\u547d\u5468\u671f\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u907f\u514d\u8fd9\u6837\u7684\u4e8b\u60c5\u53d1\u751f\uff0c\u5728\u6211\u4eec\u5b9a\u4e49\u51fd\u6570\u65f6\uff0c\u9700\u8981\u4e3a\u53d8\u91cf\u6dfb\u52a0\u751f\u547d\u5468\u671f\u6807\u8bb0\uff0c\u751f\u547d\u5468\u671f\u6807\u8bb0\u4f7f\u7528\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"'"),"\xa0\u5f00\u5934\uff0c\u540e\u9762\u8ddf\u82e5\u5e72\u5b57\u7b26\u7528\u4e8e\u6807\u8bb0\uff0c\u4e00\u822c\u6211\u4eec\u4f7f\u7528\u5355\u4e2a\u5b57\u7b26\uff0c\u5982\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"'a, 'b"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"fn get_one<'a, 'b>(x: &'a i32, y: &'b i32) -> &'a i32 {\n  &x\n}\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u6211\u4eec\u6dfb\u52a0\u7684\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"'a, 'b"),"\xa0\u5c31\u662f\u751f\u547d\u5468\u671f\u6807\u8bb0\uff0c\u5bf9\u4e8e\u65b9\u6cd5\u4e2d\u4f7f\u7528\u7684\u6807\u8bb0\uff0c\u90fd\u8981\u5728\u65b9\u6cd5\u540d\u540e\u7684\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"<>"),"\xa0\u4e2d\u58f0\u660e\uff0c\u4f8b\u5982\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"add<'a, 'b>"),"\uff0c\u65b9\u6cd5\u7684\u8f93\u5165\u5206\u522b\u88ab\u6807\u8bb0\u4e86\u4e0d\u540c\u7684\u751f\u547d\u5468\u671f\u7b26\u53f7\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"x: &'a i32, y: &'b i32"),"\xa0\u8868\u793a\u5b83\u4eec\u5177\u6709\u4e0d\u540c\u7684\u751f\u547d\u5468\u671f\uff0c\u8fd4\u56de\u7684\u5f15\u7528\u7684\u751f\u547d\u5468\u671f\u65f6\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"'a"),"\uff0c\u8bf4\u660e\u5b83\u4e0e\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"x: &'a i32"),"\xa0\u7684\u751f\u547d\u5468\u671f\u76f8\u540c\u3002"),(0,a.kt)("p",null,"\u5177\u6709\u8fd9\u4e9b\u4fe1\u606f\uff0c\u7f16\u8bd1\u5668\u5c31\u53ef\u4ee5\u68c0\u6d4b\u60ac\u7a7a\u6307\u9488\u7684\u95ee\u9898\u4e86\u3002\u770b\u4e0b\u9762\u7684\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"fn main() {\n  let x = 1;\n  let z;\n  {\n    let y = 2;\n    z = get_one(&x, &y);\n  }\n\n  println!(\"{}\", z);\n}\n\nfn get_one<'a, 'b>(x: &'a i32, y: &'b i32) -> &'b i32 {\n  &y\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"get_one"),"\xa0\u51fd\u6570\u63a5\u6536\u4e24\u4e2a\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"i32"),"\xa0\u7684\u5f15\u7528\uff0c\u5206\u522b\u58f0\u660e\u4e86\u4e0d\u540c\u7684\u751f\u547d\u5468\u671f\uff0c\u7136\u540e\u8fd4\u56de\u4e00\u4e2a\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"i32"),"\xa0\u7684\u5f15\u7528\uff0c\u5176\u751f\u547d\u5468\u671f\u4e3a\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"'b"),"\uff0c\u4e0e\u7b2c\u4e8c\u4e2a\u53c2\u6570\u7684\u751f\u547d\u5468\u671f\u76f8\u540c\u3002"),(0,a.kt)("p",null,"\u7136\u540e\u6211\u4eec\u5728\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"main"),"\xa0\u51fd\u6570\u4e2d\u8c03\u7528\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"get_one"),"\uff0c\u5206\u522b\u4f20\u5165\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"&x, &y"),"\uff0c\u8fd4\u56de\u7684\u5f15\u7528\u8d4b\u503c\u7ed9\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"z"),"\uff0c\u8fd4\u56de\u7684\u5f15\u7528\u7684\u751f\u547d\u5468\u671f\u4e0e\u7b2c\u4e8c\u4e2a\u53c2\u6570\u76f8\u540c\uff0c\u4e5f\u5c31\u662f\u4e0e\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"y"),"\xa0\u76f8\u540c\uff0c\u90a3\u4e48\u6211\u4eec\u5c31\u4e0d\u80fd\u5728\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"y"),"\xa0\u7684\u751f\u547d\u5468\u671f\u4e4b\u5916\u8bbf\u95ee\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"z"),"\uff0c\u5426\u5219\u5c31\u4f1a\u5bfc\u81f4\u60ac\u7a7a\u6307\u9488\u7684\u95ee\u9898\uff0c\u4f46\u662f\u4e0a\u9762\u7684\u7a0b\u5e8f\u4e2d\u6211\u4eec\u5728\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"y"),"\xa0\u6240\u5728\u7684\u5757\u4e4b\u5916\u8bbf\u95ee\u4e86\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"z"),"\uff0c\u6240\u4ee5\u4f1a\u7f16\u8bd1\u51fa\u9519"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"warning: unused variable: `x`\n  --\x3e hello6.rs:13:20\n   |\n13 | fn get_one<'a, 'b>(x: &'a i32, y: &'b i32) -> &'b i32 {\n   |                    ^ help: if this is intentional, prefix it with an underscore: `_x`\n   |\n   = note: `#[warn(unused_variables)]` on by default\n\nerror[E0597]: `y` does not live long enough\n --\x3e hello6.rs:6:21\n  |\n6 |     z = get_one(&x, &y);\n  |                     ^^ borrowed value does not live long enough\n7 |   }\n  |   - `y` dropped here while still borrowed\n8 |\n9 |   println!(\"{}\", z);\n  |                  - borrow later used here\n\nerror: aborting due to previous error; 1 warning emitted\n\nFor more information about this error, try `rustc --explain E0597`.\n")),(0,a.kt)("p",null,"\u7ed9\u51fa\u7684\u9519\u8bef\u662f\u8bf4\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"y"),"\xa0\u5df2\u7ecf\u88ab\u9500\u6bc1\u4e86\uff0c\u4f46\u662f\u5728\u540e\u9762\u88ab\u5f15\u7528\u7684\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"z"),"\xa0\u4f7f\u7528\u4e86\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u6211\u4eec\u4fee\u6539\u4e0a\u9762\u7684\u51fd\u6570\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"fn get_one<'a, 'b>(x: &'a i32, y: &'b i32) -> &'a i32 {\n  &x\n}\n")),(0,a.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u8fd4\u56de\u7684\u5f15\u7528\u7684\u751f\u547d\u5468\u671f\u662f\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"'a"),"\uff0c\u4e0e\u7b2c\u4e00\u4e2a\u53c2\u6570\u7684\u751f\u547d\u5468\u671f\u76f8\u540c\uff0c\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u8c03\u7528\u51fd\u6570\uff0c\u56e0\u4e3a\u8fd4\u56de\u7684\u5f15\u7528\u7684\u751f\u547d\u5468\u671f\u4e0e\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\xa0\u7684\u751f\u547d\u5468\u76f8\u540c\uff0c\u5728\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\xa0\u88ab\u9500\u6bc1\u4ee5\u524d\u90fd\u53ef\u4ee5\u4f7f\u7528\uff0c\u6240\u4ee5\u7a0b\u5e8f\u53ef\u4ee5\u6b63\u786e\u7f16\u8bd1\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"warning: unused variable: `y`\n  --\x3e hello6.rs:13:32\n   |\n13 | fn get_one<'a, 'b>(x: &'a i32, y: &'b i32) -> &'a i32 {\n   |                                ^ help: if this is intentional, prefix it with an underscore: `_y`\n   |\n   = note: `#[warn(unused_variables)]` on by default\n\nwarning: 1 warning emitted\n\n1\n")),(0,a.kt)("p",null,"\u7a0b\u5e8f\u6b63\u786e\u6253\u5370\u51fa\u4e86\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\xa0\u7684\u503c\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"\uff08\u5f53\u7136\u8fd8\u7ed9\u51fa\u4e86\u4e00\u4e9b\u8b66\u544a\uff0c\u56e0\u4e3a\u6211\u4eec\u5728\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"get_one"),"\xa0\u51fd\u6570\u91cc\u9762\u53ea\u7528\u4e86\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\uff0c\u6ca1\u6709\u7528\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"y"),"\uff09\u3002"))}m.isMDXComponent=!0}}]);