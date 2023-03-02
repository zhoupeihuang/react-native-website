"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[45620],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,b=f["".concat(c,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},31043:(e,t,r)=>{r.d(t,{ZP:()=>m});var n=r(35318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&u(e,r,t[r]);return e};const f={toc:[]};function m(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},f),u),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("admonition",s({},{title:"\u6ce8\u610f",type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"\u8fd9\u4e2a\u6587\u6863\u4ecd\u7136\u662f",(0,n.kt)("strong",{parentName:"p"},"\u5b9e\u9a8c\u6027"),"\u7684\uff0c\u968f\u7740\u6211\u4eec\u7684\u8fed\u4ee3\uff0c\u7ec6\u8282\u4f1a\u6709\u53d8\u5316\u3002\u6b22\u8fce\u5728",(0,n.kt)("a",s({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"\u5de5\u4f5c\u5c0f\u7ec4\u5185\u7684\u8ba8\u8bba"),"\u4e2d\u5206\u4eab\u4f60\u7684\u53cd\u9988\u3002"),(0,n.kt)("p",{parentName:"admonition"},"\u6b64\u5916\uff0c\u5b83\u8fd8\u5305\u542b\u51e0\u4e2a",(0,n.kt)("strong",{parentName:"p"},"\u624b\u52a8\u6b65\u9aa4"),"\u3002\u8bf7\u6ce8\u610f\u65b0\u67b6\u6784\u5c1a\u672a\u7a33\u5b9a\u4e0b\u6765\uff0c\u6700\u7ec8\u7684\u5f00\u53d1\u8005\u4f53\u9a8c\u4f1a\u7ee7\u7eed\u8fed\u4ee3\u6539\u5584\u3002\u6211\u4eec\u6b63\u5728\u52aa\u529b\u5f00\u53d1\u5de5\u5177\u3001\u6a21\u677f\u548c\u5e93\uff0c\u4ee5\u5e2e\u52a9\u4f60\u5728\u65b0\u67b6\u6784\u4e0a\u5feb\u901f\u5165\u95e8\uff0c\u800c\u4e0d\u9700\u8981\u7ecf\u5386\u6574\u4e2a\u8bbe\u7f6e\u8fc7\u7a0b\u3002")))}m.isMDXComponent=!0},59539:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>h,frontMatter:()=>m,metadata:()=>d,toc:()=>v});var n=r(35318),a=r(31043),o=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(c)for(var r of c(t))u.call(t,r)&&s(e,r,t[r]);return e};const m={id:"pillars",title:"\u65b0\u67b6\u6784\u7684\u201c\u4e24\u5927\u652f\u67f1\u201d"},b=void 0,d={unversionedId:"the-new-architecture/pillars",id:"version-0.71/the-new-architecture/pillars",title:"\u65b0\u67b6\u6784\u7684\u201c\u4e24\u5927\u652f\u67f1\u201d",description:"\u65b0\u67b6\u6784\u4e3b\u8981\u7531\u4e24\u5927\u652f\u67f1\u7ec4\u6210\uff1a",source:"@site/versioned_docs/version-0.71/the-new-architecture/pillars.md",sourceDirName:"the-new-architecture",slug:"/the-new-architecture/pillars",permalink:"/docs/the-new-architecture/pillars",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/the-new-architecture/pillars.md",tags:[],version:"0.71",frontMatter:{id:"pillars",title:"\u65b0\u67b6\u6784\u7684\u201c\u4e24\u5927\u652f\u67f1\u201d"},sidebar:"docs",previous:{title:"Creating a New Architecture App",permalink:"/docs/the-new-architecture/use-app-template"},next:{title:"TurboModules",permalink:"/docs/the-new-architecture/pillars-turbomodules"}},y={},v=[],O={toc:v};function h(e){var t,r=e,{components:o}=r,s=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},O),s),i(t,l({components:o,mdxType:"MDXLayout"}))),(0,n.kt)(a.ZP,{mdxType:"NewArchitectureWarning"}),(0,n.kt)("p",null,"\u65b0\u67b6\u6784\u4e3b\u8981\u7531\u4e24\u5927\u652f\u67f1\u7ec4\u6210\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"pillars-turbomodules"}),"\u65b0\u7684\u539f\u751f\u6a21\u5757\u4f53\u7cfb - Turbo Modules")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"pillars-fabric-components"}),"\u65b0\u7684\u6e32\u67d3\u5668 - Fabric"))),(0,n.kt)("p",null,"TurboModules \u662f\u521b\u5efa\u5229\u7528\u67d0\u4e9b\u5e73\u53f0\u7279\u5b9a API \u7684\u5e93\u7684\u9996\u9009\u65b9\u6cd5\u3002Fabric \u7ec4\u4ef6\u662f\u521b\u5efa\u53ef\u91cd\u7528 UI \u7ec4\u4ef6\u7684\u9996\u9009\u65b9\u6cd5\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u539f\u751f\u4f53\u9a8c\u3002"),(0,n.kt)("p",null,"\u672c\u8282\u7684\u4e3b\u8981\u76ee\u6807\u662f\u901a\u8fc7\u9010\u6b65\u6307\u5357\u5f15\u5bfc\u8bfb\u8005\u521b\u5efa\u4ed6\u4eec\u7684\u7b2c\u4e00\u4e2a TurboModule \u6216 Fabric \u7ec4\u4ef6\u3002"),(0,n.kt)("p",null,"\u63a5\u4e0b\u6765\u7684\u51e0\u8282\u5305\u542b\u652f\u67f1\u7684\u9ad8\u7ea7\u6982\u8ff0\uff0c\u4ee5\u53ca\u521b\u5efa\u5b83\u4eec\u7684\u6b65\u9aa4\u3002\u8981\u521b\u5efa\u8fd9\u4e9b\u652f\u67f1\u4e2d\u7684\u4e00\u4e2a\uff0c\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4f7f\u7528 Flow \u6216 TypeScript \u5b9a\u4e49 JavaScript \u89c4\u8303\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u4f9d\u8d56\u7ba1\u7406\u7cfb\u7edf\u4ee5\u4ece\u63d0\u4f9b\u7684\u89c4\u8303\u751f\u6210\u4ee3\u7801\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5b9e\u73b0\u539f\u751f\u4ee3\u7801\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5c06\u4ee3\u7801\u96c6\u6210\u5230\u5e94\u7528\u7a0b\u5e8f\u4e2d\u3002")),(0,n.kt)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u6df1\u5165\u63a2\u8ba8\u4e86",(0,n.kt)("a",f({parentName:"p"},{href:"pillars-codegen"}),"Codegen"),"\u8fc7\u7a0b\uff0c\u8be5\u8fc7\u7a0b\u9700\u8981\u521b\u5efa\u6211\u4eec\u7684\u7ec4\u4ef6\u4f7f\u7528\u7684\u6240\u6709 C++\u7c7b\u578b\u548c\u6587\u4ef6\uff0c\u5305\u62ec\u4e00\u4e9b\u5728\u5f00\u53d1\u7ec4\u4ef6\u65f6\u63d0\u5347\u6548\u7387\u7684\u6709\u7528\u6b65\u9aa4\u3002"),(0,n.kt)("admonition",f({},{title:"\u6ce8\u610f",type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\u8981\u5c06 TurboModule \u6216 Fabric \u7ec4\u4ef6\u96c6\u6210\u5230\u5e94\u7528\u4e2d\uff0c\u5e94\u7528\u5fc5\u987b\u542f\u7528\u65b0\u67b6\u6784\u3002"),(0,n.kt)("p",{parentName:"admonition"},"\u8981\u521b\u5efa\u91c7\u7528\u65b0\u67b6\u6784\u7684\u65b0\u5e94\u7528\uff0c\u8bf7\u53c2\u9605",(0,n.kt)("a",f({parentName:"p"},{href:"use-app-template"}),"\u4f7f\u7528\u5e94\u7528\u6a21\u677f")," \u90e8\u5206\u3002\u8981\u5c06\u73b0\u6709\u5e94\u7528\u8fc1\u79fb\u5230\u65b0\u67b6\u6784\uff0c\u8bf7\u53c2\u9605",(0,n.kt)("a",f({parentName:"p"},{href:"../new-architecture-intro"}),"\u8fc1\u79fb"),"\u6307\u5357\u3002")))}h.isMDXComponent=!0}}]);