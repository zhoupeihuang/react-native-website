(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{294:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),c=(n(0),n(413)),b={id:"checkbox",title:"\ud83d\udea7 CheckBox"},l={unversionedId:"checkbox",id:"version-0.63/checkbox",isDocsHomePage:!1,title:"\ud83d\udea7 CheckBox",description:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(100.00%)",source:"@site/versioned_docs/version-0.63/checkbox.md",slug:"/checkbox",permalink:"/docs/checkbox",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/versioned_docs/version-0.63/checkbox.md",version:"0.63",lastUpdatedAt:1608733604},o=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"Props",id:"props",children:[{value:"<code>disabled</code>",id:"disabled",children:[]},{value:"<code>onChange</code>",id:"onchange",children:[]},{value:"<code>onValueChange</code>",id:"onvaluechange",children:[]},{value:"<code>testID</code>",id:"testid",children:[]},{value:"<code>value</code>",id:"value",children:[]}]}],i={toc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm10000"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",Object(c.b)("a",Object(a.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(100.00%)"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u5df2\u8fc7\u65f6\u3002")," Use ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-checkbox"}),"@react-native-community/checkbox")," instead.")),Object(c.b)("p",null,"\u6e32\u67d3\u4e00\u4e2a\u5355\u9009\u6846\uff08\u76ee\u524d\u4ec5 Android \u53ef\u7528\uff09\u3002"),Object(c.b)("p",null,"This is a controlled component that requires an ",Object(c.b)("inlineCode",{parentName:"p"},"onValueChange")," callback that updates the ",Object(c.b)("inlineCode",{parentName:"p"},"value")," prop in order for the component to reflect user actions. If the ",Object(c.b)("inlineCode",{parentName:"p"},"value")," prop is not updated, the component will continue to render the supplied ",Object(c.b)("inlineCode",{parentName:"p"},"value")," prop instead of the expected result of any user actions."),Object(c.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(c.b)("div",{className:"snack-player","data-snack-name":"CheckBox Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20CheckBox%2C%20Text%2C%20StyleSheet%2C%20View%20%7D%20from%20%22react-native%22%3B%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BisSelected%2C%20setSelection%5D%20%3D%20useState(false)%3B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.checkboxContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CCheckBox%0A%20%20%20%20%20%20%20%20%20%20value%3D%7BisSelected%7D%0A%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7BsetSelection%7D%0A%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.checkbox%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.label%7D%3EDo%20you%20like%20React%20Native%3F%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CText%3EIs%20CheckBox%20selected%3A%20%7BisSelected%20%3F%20%22%F0%9F%91%8D%22%20%3A%20%22%F0%9F%91%8E%22%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%7D%2C%0A%20%20checkboxContainer%3A%20%7B%0A%20%20%20%20flexDirection%3A%20%22row%22%2C%0A%20%20%20%20marginBottom%3A%2020%2C%0A%20%20%7D%2C%0A%20%20checkbox%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22center%22%2C%0A%20%20%7D%2C%0A%20%20label%3A%20%7B%0A%20%20%20%20margin%3A%208%2C%0A%20%20%7D%2C%0A%7D)%3B%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(c.b)("hr",null),Object(c.b)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("p",null,"\u7ee7\u627f\u6240\u6709",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"view#props"}),"View \u7684 Props"),"."),Object(c.b)("h3",{id:"disabled"},Object(c.b)("inlineCode",{parentName:"h3"},"disabled")),Object(c.b)("p",null,"If true the user won't be able to toggle the checkbox. Default value is ",Object(c.b)("inlineCode",{parentName:"p"},"false"),"."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bool"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"onchange"},Object(c.b)("inlineCode",{parentName:"h3"},"onChange")),Object(c.b)("p",null,"Used in case the props change removes the component."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"onvaluechange"},Object(c.b)("inlineCode",{parentName:"h3"},"onValueChange")),Object(c.b)("p",null,"Invoked with the new value when the value changes."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"testid"},Object(c.b)("inlineCode",{parentName:"h3"},"testID")),Object(c.b)("p",null,"\u7528\u6765\u5728\u7aef\u5230\u7aef\u6d4b\u8bd5\u4e2d\u5b9a\u4f4d\u6b64\u89c6\u56fe\u3002"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"value"},Object(c.b)("inlineCode",{parentName:"h3"},"value")),Object(c.b)("p",null,"The value of the checkbox. If true the checkbox will be turned on. Default value is ",Object(c.b)("inlineCode",{parentName:"p"},"false"),"."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bool"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5426")))))}p.isMDXComponent=!0},413:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,O=u["".concat(b,".").concat(s)]||u[s]||d[s]||c;return n?r.a.createElement(O,l(l({ref:t},i),{},{components:n})):r.a.createElement(O,l({ref:t},i))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,b=new Array(c);b[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var i=2;i<c;i++)b[i]=n[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);