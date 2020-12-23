(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{252:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(8),b=(a(0),a(413)),c={id:"switch",title:"Switch"},l={unversionedId:"switch",id:"switch",isDocsHomePage:!1,title:"Switch",description:"\u8de8\u5e73\u53f0\u901a\u7528\u7684\u201c\u5f00\u5173\u201d\u7ec4\u4ef6\u3002",source:"@site/../cndocs/switch.md",slug:"/switch",permalink:"/docs/next/switch",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/switch.md",version:"current",lastUpdatedAt:1608733604,sidebar:"\u7ec4\u4ef6",previous:{title:"StatusBar",permalink:"/docs/next/statusbar"},next:{title:"Text",permalink:"/docs/next/text"}},o=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"Props",id:"props",children:[{value:"<code>disabled</code>",id:"disabled",children:[]},{value:"<code>trackColor</code>",id:"trackcolor",children:[]},{value:"<code>ios_backgroundColor</code>",id:"ios_backgroundcolor",children:[]},{value:"<code>onValueChange</code>",id:"onvaluechange",children:[]},{value:"<code>testID</code>",id:"testid",children:[]},{value:"<code>thumbColor</code>",id:"thumbcolor",children:[]},{value:"<code>tintColor</code>",id:"tintcolor",children:[]},{value:"<code>value</code>",id:"value",children:[]}]}],i={toc:o};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u8de8\u5e73\u53f0\u901a\u7528\u7684\u201c\u5f00\u5173\u201d\u7ec4\u4ef6\u3002  "),Object(b.b)("p",null,"\u6ce8\u610f\u8fd9\u662f\u4e00\u4e2a\u201c\u53d7\u63a7\u7ec4\u4ef6\u201d\uff08controlled component\uff09\u3002\u4f60\u5fc5\u987b\u4f7f\u7528",Object(b.b)("inlineCode",{parentName:"p"},"onValueChange"),"\u56de\u8c03\u6765\u66f4\u65b0",Object(b.b)("inlineCode",{parentName:"p"},"value"),"\u5c5e\u6027\u4ee5\u54cd\u5e94\u7528\u6237\u7684\u64cd\u4f5c\u3002\u5982\u679c\u4e0d\u66f4\u65b0",Object(b.b)("inlineCode",{parentName:"p"},"value"),"\u5c5e\u6027\uff0c\u7ec4\u4ef6\u53ea\u4f1a\u6309\u4e00\u5f00\u59cb\u7ed9\u5b9a\u7684",Object(b.b)("inlineCode",{parentName:"p"},"value"),"\u503c\u6765\u6e32\u67d3\u4e14\u4fdd\u6301\u4e0d\u53d8\uff0c\u770b\u4e0a\u53bb\u5c31\u50cf\u5b8c\u5168\u70b9\u4e0d\u52a8\u3002  "),Object(b.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(b.b)("div",{className:"snack-player","data-snack-name":"Switch","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20Switch%2C%20StyleSheet%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BisEnabled%2C%20setIsEnabled%5D%20%3D%20useState(false)%3B%0A%20%20const%20toggleSwitch%20%3D%20()%20%3D%3E%20setIsEnabled(previousState%20%3D%3E%20!previousState)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CSwitch%0A%20%20%20%20%20%20%20%20trackColor%3D%7B%7B%20false%3A%20%22%23767577%22%2C%20true%3A%20%22%2381b0ff%22%20%7D%7D%0A%20%20%20%20%20%20%20%20thumbColor%3D%7BisEnabled%20%3F%20%22%23f5dd4b%22%20%3A%20%22%23f4f3f4%22%7D%0A%20%20%20%20%20%20%20%20ios_backgroundColor%3D%22%233e3e3e%22%0A%20%20%20%20%20%20%20%20onValueChange%3D%7BtoggleSwitch%7D%0A%20%20%20%20%20%20%20%20value%3D%7BisEnabled%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(b.b)("hr",null),Object(b.b)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("p",null,"Inherits ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"view#props"}),"View Props"),"."),Object(b.b)("h3",{id:"disabled"},Object(b.b)("inlineCode",{parentName:"h3"},"disabled")),Object(b.b)("p",null,"\u5982\u679c\u4e3a",Object(b.b)("inlineCode",{parentName:"p"},"true"),"\u5219\u7981\u7528\u6b64\u7ec4\u4ef6\u7684\u4ea4\u4e92\u3002"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"trackcolor"},Object(b.b)("inlineCode",{parentName:"h3"},"trackColor")),Object(b.b)("p",null,"\u5f00\u542f\u72b6\u6001\u65f6\u7684\u80cc\u666f\u989c\u8272\u3002"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"iOS"),": when the switch value is false, the track shrinks into the border. If you want to change the color of the background exposed by the shrunken track, use ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/switch#ios_backgroundColor"}),Object(b.b)("inlineCode",{parentName:"a"},"ios_backgroundColor")),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"object: {false: ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/colors"}),"color"),", true: ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/colors"}),"color"),"}"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"ios_backgroundcolor"},Object(b.b)("inlineCode",{parentName:"h3"},"ios_backgroundColor")),Object(b.b)("p",null,"On iOS, custom color for the background. This background color can be seen either when the switch value is false or when the switch is disabled (and the switch is translucent)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/colors"}),"color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onvaluechange"},Object(b.b)("inlineCode",{parentName:"h3"},"onValueChange")),Object(b.b)("p",null,"\u5f53\u503c\u6539\u53d8\u7684\u65f6\u5019\u8c03\u7528\u6b64\u56de\u8c03\u51fd\u6570\uff0c\u53c2\u6570\u4e3a\u65b0\u7684\u503c\u3002"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"testid"},Object(b.b)("inlineCode",{parentName:"h3"},"testID")),Object(b.b)("p",null,"\u7528\u6765\u5728\u7aef\u5230\u7aef\u6d4b\u8bd5\u4e2d\u5b9a\u4f4d\u6b64\u89c6\u56fe\u3002"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"thumbcolor"},Object(b.b)("inlineCode",{parentName:"h3"},"thumbColor")),Object(b.b)("p",null,"\u5f00\u5173\u4e0a\u5706\u5f62\u6309\u94ae\u7684\u80cc\u666f\u989c\u8272\u3002\u5728iOS\u4e0a\u8bbe\u7f6e\u6b64\u989c\u8272\u4f1a\u4e22\u5931\u6309\u94ae\u7684\u6295\u5f71\u3002"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/colors"}),"color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"tintcolor"},Object(b.b)("inlineCode",{parentName:"h3"},"tintColor")),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"tintColor")," is deprecated, use ",Object(b.b)("inlineCode",{parentName:"p"},"trackColor")," instead."),Object(b.b)("p",null,"\u5173\u95ed\u72b6\u6001\u65f6\u7684\u8fb9\u6846\u989c\u8272(iOS)\u6216\u80cc\u666f\u989c\u8272(Android)\u3002"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/colors"}),"color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"value"},Object(b.b)("inlineCode",{parentName:"h3"},"value")),Object(b.b)("p",null,"\u8868\u793a\u6b64\u5f00\u5173\u662f\u5426\u6253\u5f00\u3002\u9ed8\u8ba4\u4e3afalse\uff08\u5173\u95ed\u72b6\u6001\uff09\u3002"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))))}d.isMDXComponent=!0},413:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),d=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,j=p["".concat(c,".").concat(u)]||p[u]||O[u]||b;return a?r.a.createElement(j,l(l({ref:t},i),{},{components:a})):r.a.createElement(j,l({ref:t},i))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<b;i++)c[i]=a[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);