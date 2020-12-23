(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{373:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(8),o=(a(0),a(413)),l={id:"shadow-props",title:"\u9634\u5f71\u6837\u5f0f\u5c5e\u6027"},c={unversionedId:"shadow-props",id:"version-0.63/shadow-props",isDocsHomePage:!1,title:"\u9634\u5f71\u6837\u5f0f\u5c5e\u6027",description:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(100.00%)",source:"@site/versioned_docs/version-0.63/shadow-props.md",slug:"/shadow-props",permalink:"/docs/shadow-props",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/versioned_docs/version-0.63/shadow-props.md",version:"0.63",lastUpdatedAt:1608733604,sidebar:"version-0.63/\u7ec4\u4ef6",previous:{title:"\u5e03\u5c40\u5c5e\u6027",permalink:"/docs/layout-props"},next:{title:"Text \u6837\u5f0f\u5c5e\u6027",permalink:"/docs/text-style-props"}},i=[{value:"Props",id:"props",children:[{value:"<code>shadowColor</code>",id:"shadowcolor",children:[]},{value:"<code>shadowOffset</code>",id:"shadowoffset",children:[]},{value:"<code>shadowOpacity</code>",id:"shadowopacity",children:[]},{value:"<code>shadowRadius</code>",id:"shadowradius",children:[]}]}],b={toc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm10000"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",Object(o.b)("a",Object(n.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(100.00%)"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Shadow Props","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20Slider%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20ShadowPropSlider%20%3D%20(%7B%20label%2C%20value%2C%20...props%20%7D)%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20%20%20%7Blabel%7D%20(%7Bvalue.toFixed(2)%7D)%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CSlider%20step%3D%7B1%7D%20value%3D%7Bvalue%7D%20%7B...props%7D%20%2F%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BshadowOffsetWidth%2C%20setShadowOffsetWidth%5D%20%3D%20useState(0)%3B%0A%20%20const%20%5BshadowOffsetHeight%2C%20setShadowOffsetHeight%5D%20%3D%20useState(0)%3B%0A%20%20const%20%5BshadowRadius%2C%20setShadowRadius%5D%20%3D%20useState(0)%3B%0A%20%20const%20%5BshadowOpacity%2C%20setShadowOpacity%5D%20%3D%20useState(0.1)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20styles.square%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20shadowOffset%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20shadowOffsetWidth%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20height%3A%20-shadowOffsetHeight%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20shadowOpacity%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20shadowRadius%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.controls%7D%3E%0A%20%20%20%20%20%20%20%20%3CShadowPropSlider%0A%20%20%20%20%20%20%20%20%20%20label%3D%22shadowOffset%20-%20X%22%0A%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B-50%7D%0A%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B50%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7BshadowOffsetWidth%7D%0A%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7Bval%20%3D%3E%20setShadowOffsetWidth(val)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CShadowPropSlider%0A%20%20%20%20%20%20%20%20%20%20label%3D%22shadowOffset%20-%20Y%22%0A%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B-50%7D%0A%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B50%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7BshadowOffsetHeight%7D%0A%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7Bval%20%3D%3E%20setShadowOffsetHeight(val)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CShadowPropSlider%0A%20%20%20%20%20%20%20%20%20%20label%3D%22shadowRadius%22%0A%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B0%7D%0A%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B100%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7BshadowRadius%7D%0A%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7Bval%20%3D%3E%20setShadowRadius(val)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CShadowPropSlider%0A%20%20%20%20%20%20%20%20%20%20label%3D%22shadowOpacity%22%0A%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B0%7D%0A%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%20%20step%3D%7B0.05%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7BshadowOpacity%7D%0A%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7Bval%20%3D%3E%20setShadowOpacity(val)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22space-around%22%2C%0A%20%20%20%20backgroundColor%3A%20%22%23ecf0f1%22%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%2C%0A%20%20square%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22center%22%2C%0A%20%20%20%20backgroundColor%3A%20%22white%22%2C%0A%20%20%20%20borderRadius%3A%204%2C%0A%20%20%20%20height%3A%20150%2C%0A%20%20%20%20shadowColor%3A%20%22black%22%2C%0A%20%20%20%20width%3A%20150%0A%20%20%7D%2C%0A%20%20controls%3A%20%7B%0A%20%20%20%20paddingHorizontal%3A%2012%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(o.b)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),Object(o.b)("p",null,"These properties are iOS only - for similar functionality on Android, use the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"view-style-props#elevation"}),Object(o.b)("inlineCode",{parentName:"a"},"elevation")," property"),"."),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h3",{id:"shadowcolor"},Object(o.b)("inlineCode",{parentName:"h3"},"shadowColor")),Object(o.b)("p",null,"\u8bbe\u7f6e\u9634\u5f71\u8272\u3002"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/colors"}),"color")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iOS")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"shadowoffset"},Object(o.b)("inlineCode",{parentName:"h3"},"shadowOffset")),Object(o.b)("p",null,"\u8bbe\u7f6e\u9634\u5f71\u504f\u79fb\u91cf\u3002"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"object: {width: number,height: number}"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iOS")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"shadowopacity"},Object(o.b)("inlineCode",{parentName:"h3"},"shadowOpacity")),Object(o.b)("p",null,"\u8bbe\u7f6e\u9634\u5f71\u4e0d\u900f\u660e\u5ea6 (\u4e58\u4ee5\u989c\u8272\u7684 alpha \u5206\u91cf)\u3002"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iOS")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"shadowradius"},Object(o.b)("inlineCode",{parentName:"h3"},"shadowRadius")),Object(o.b)("p",null,"\u8bbe\u7f6e\u9634\u5f71\u6a21\u7cca\u534a\u5f84\u3002"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iOS")))))}s.isMDXComponent=!0},413:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),d=s(a),u=n,O=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return a?r.a.createElement(O,c(c({ref:t},b),{},{components:a})):r.a.createElement(O,c({ref:t},b))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var b=2;b<o;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);