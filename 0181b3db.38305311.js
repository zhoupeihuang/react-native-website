(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{413:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),l=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,b=d(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,u=p["".concat(c,".").concat(m)]||p[m]||s[m]||r;return n?i.a.createElement(u,o(o({ref:t},b),{},{components:n})):i.a.createElement(u,o({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var b=2;b<r;b++)c[b]=n[b];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return l}));var a=n(3),i=n(8),r=(n(0),n(413)),c={id:"datepickerandroid",title:"\ud83d\udea7 DatePickerAndroid"},o={unversionedId:"datepickerandroid",id:"datepickerandroid",isDocsHomePage:!1,title:"\ud83d\udea7 DatePickerAndroid",description:"\u5df2\u8fc7\u65f6\u3002 Use @react-native-community/datetimepicker instead.",source:"@site/../cndocs/datepickerandroid.md",slug:"/datepickerandroid",permalink:"/docs/next/datepickerandroid",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/datepickerandroid.md",version:"current",lastUpdatedAt:1608730528},d=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u67e5\u770b\u65b9\u6cd5",id:"\u67e5\u770b\u65b9\u6cd5",children:[]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>open()</code>",id:"open",children:[]},{value:"<code>dateSetAction()</code>",id:"datesetaction",children:[]},{value:"<code>dismissedAction()</code>",id:"dismissedaction",children:[]}]}],b={toc:d};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u5df2\u8fc7\u65f6\u3002")," Use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-datetimepicker"}),"@react-native-community/datetimepicker")," instead.")),Object(r.b)("p",null,"\u672c\u7ec4\u4ef6\u4f1a\u6253\u5f00\u4e00\u4e2a\u6807\u51c6\u7684 Android \u65e5\u671f\u9009\u62e9\u5668\u7684\u5bf9\u8bdd\u6846\u3002"),Object(r.b)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"try {\n  const {action, year, month, day} = await DatePickerAndroid.open({\n    // \u8981\u8bbe\u7f6e\u9ed8\u8ba4\u503c\u4e3a\u4eca\u5929\u7684\u8bdd\uff0c\u4f7f\u7528`new Date()`\u5373\u53ef\u3002\n    // \u4e0b\u9762\u663e\u793a\u7684\u4f1a\u662f2020\u5e745\u670825\u65e5\u3002\u6708\u4efd\u662f\u4ece0\u5f00\u59cb\u7b97\u7684\u3002\n    date: new Date(2020, 4, 25)\n  });\n  if (action !== DatePickerAndroid.dismissedAction) {\n    // \u8fd9\u91cc\u5f00\u59cb\u53ef\u4ee5\u5904\u7406\u7528\u6237\u9009\u597d\u7684\u5e74\u6708\u65e5\u4e09\u4e2a\u53c2\u6570\uff1ayear, month (0-11), day\n  }\n} catch ({code, message}) {\n  console.warn('Cannot open date picker', message);\n}\n")),Object(r.b)("h3",{id:"\u67e5\u770b\u65b9\u6cd5"},"\u67e5\u770b\u65b9\u6cd5"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/datepickerandroid#open"}),Object(r.b)("inlineCode",{parentName:"a"},"open"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/datepickerandroid#datesetaction"}),Object(r.b)("inlineCode",{parentName:"a"},"dateSetAction"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/datepickerandroid#dismissedaction"}),Object(r.b)("inlineCode",{parentName:"a"},"dismissedAction")))),Object(r.b)("hr",null),Object(r.b)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),Object(r.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(r.b)("h3",{id:"open"},Object(r.b)("inlineCode",{parentName:"h3"},"open()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static open(options)\n")),Object(r.b)("p",null,"\u6253\u5f00\u4e00\u4e2a\u6807\u51c6\u7684 Android \u65e5\u671f\u9009\u62e9\u5668\u7684\u5bf9\u8bdd\u6846\u3002"),Object(r.b)("p",null,"\u53ef\u9009\u7684",Object(r.b)("inlineCode",{parentName:"p"},"options"),"\u5bf9\u8c61\u7684 key \u503c\u5982\u4e0b\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"date")," (",Object(r.b)("inlineCode",{parentName:"li"},"Date"),"\u5bf9\u8c61\u6216\u6beb\u79d2\u65f6\u95f4\u6233) - \u9ed8\u8ba4\u663e\u793a\u7684\u65e5\u671f"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"minDate")," (",Object(r.b)("inlineCode",{parentName:"li"},"Date"),"\u5bf9\u8c61\u6216\u6beb\u79d2\u65f6\u95f4\u6233) - \u53ef\u9009\u7684\u6700\u5c0f\u65e5\u671f"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"maxDate")," (",Object(r.b)("inlineCode",{parentName:"li"},"Date"),"\u5bf9\u8c61\u6216\u6beb\u79d2\u65f6\u95f4\u6233) - \u53ef\u9009\u7684\u6700\u5927\u65e5\u671f"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"mode")," (",Object(r.b)("inlineCode",{parentName:"li"},"enum('calendar', 'spinner', 'default')"),") - \u8bbe\u7f6e\u9009\u62e9\u5668\u7684\u6a21\u5f0f\uff1a",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"'calendar': Show a date picker in calendar mode."),Object(r.b)("li",{parentName:"ul"},"'spinner': Show a date picker in spinner mode."),Object(r.b)("li",{parentName:"ul"},"'default': Show a default native date picker(spinner/calendar) based on android versions.")))),Object(r.b)("p",null,"\u5728\u7528\u6237\u9009\u597d\u65e5\u671f\u540e\u8fd4\u56de\u4e00\u4e2a Promise\uff0c\u56de\u8c03\u53c2\u6570\u4e3a\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5176\u4e2d\u5305\u542b\u6709",Object(r.b)("inlineCode",{parentName:"p"},"action"),", ",Object(r.b)("inlineCode",{parentName:"p"},"year"),", ",Object(r.b)("inlineCode",{parentName:"p"},"month")," (0-11), ",Object(r.b)("inlineCode",{parentName:"p"},"day"),"\u3002\u5982\u679c\u7528\u6237\u53d6\u6d88\u4e86\u5bf9\u8bdd\u6846\uff0cPromise \u4ecd\u7136\u4f1a\u6267\u884c\uff0c\u8fd4\u56de\u7684 action \u4e3a",Object(r.b)("inlineCode",{parentName:"p"},"DatePickerAndroid.dismissedAction"),"\uff0c\u5176\u4ed6\u51e0\u9879\u53c2\u6570\u5219\u4e3a undefined\u3002\u6240\u4ee5\u8bf7\u5728\u4f7f\u7528\u5176\u4ed6\u503c\u4e4b\u524d",Object(r.b)("strong",{parentName:"p"},"\u52a1\u5fc5"),"\u5148\u68c0\u67e5",Object(r.b)("inlineCode",{parentName:"p"},"action"),"\u7684\u503c\u662f\u5426\u4e3a",Object(r.b)("inlineCode",{parentName:"p"},"DatePickerAndroid.dateSetAction"),"\u3002"),Object(r.b)("p",null,"Note the native date picker dialog has some UI glitches on Android 4 and lower when using the ",Object(r.b)("inlineCode",{parentName:"p"},"minDate")," and ",Object(r.b)("inlineCode",{parentName:"p"},"maxDate")," options."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"datesetaction"},Object(r.b)("inlineCode",{parentName:"h3"},"dateSetAction()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static dateSetAction()\n")),Object(r.b)("p",null,"\u5df2\u9009\u4e2d\u4e00\u4e2a\u65e5\u671f\u3002"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"dismissedaction"},Object(r.b)("inlineCode",{parentName:"h3"},"dismissedAction()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static dismissedAction()\n")),Object(r.b)("p",null,"\u5bf9\u8bdd\u6846\u5df2\u88ab\u53d6\u6d88\u3002"))}l.isMDXComponent=!0}}]);