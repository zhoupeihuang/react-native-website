(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{182:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return r})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return p}));var a=t(3),c=t(8),i=(t(0),t(413)),b={id:"netinfo",title:"NetInfo"},r={unversionedId:"netinfo",id:"version-0.63/netinfo",isDocsHomePage:!1,title:"NetInfo",description:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(100.00%)",source:"@site/versioned_docs/version-0.63/netinfo.md",slug:"/netinfo",permalink:"/docs/netinfo",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/versioned_docs/version-0.63/netinfo.md",version:"0.63",lastUpdatedAt:1608730528},o=[{value:"ConnectionType \u679a\u4e3e\u503c",id:"connectiontype-\u679a\u4e3e\u503c",children:[]},{value:"EffectiveConnectionType \u679a\u4e3e\u503c",id:"effectiveconnectiontype-\u679a\u4e3e\u503c",children:[]},{value:"Android",id:"android",children:[]},{value:"\u67e5\u770b\u65b9\u6cd5",id:"\u67e5\u770b\u65b9\u6cd5",children:[]},{value:"\u67e5\u770b\u5c5e\u6027",id:"\u67e5\u770b\u5c5e\u6027",children:[]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[]},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[]},{value:"<code>getConnectionInfo()</code>",id:"getconnectioninfo",children:[]},{value:"<code>isConnectionExpensive()</code>",id:"isconnectionexpensive",children:[]}]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[{value:"<code>isConnected</code>",id:"isconnected",children:[]}]}],l={toc:o};function p(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm10000"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",Object(i.b)("a",Object(a.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(100.00%)"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"\u5df2\u8fc7\u65f6\u3002")," Use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-netinfo"}),"react-native-community/react-native-netinfo")," instead.")),Object(i.b)("p",null,"\u901a\u8fc7 NetInfo \u6a21\u5757\u53ef\u4ee5\u83b7\u53d6\u8bbe\u5907\u5f53\u524d\u7684\u8054\u7f51\u72b6\u6001\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"NetInfo.getConnectionInfo().then((connectionInfo) => {\n  console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);\n});\nfunction handleFirstConnectivityChange(connectionInfo) {\n  console.log('First change, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);\n  NetInfo.removeEventListener(\n    'connectionChange',\n    handleFirstConnectivityChange\n  );\n}\nNetInfo.addEventListener(\n  'connectionChange',\n  handleFirstConnectivityChange\n);\n")),Object(i.b)("h3",{id:"connectiontype-\u679a\u4e3e\u503c"},"ConnectionType \u679a\u4e3e\u503c"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ConnectionType"),"\u63cf\u8ff0\u4e86\u8bbe\u5907\u8054\u7f51\u7684\u65b9\u5f0f\u3002"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ConnectionType"),"\u6709\u5982\u4e0b\u8de8\u5e73\u53f0\u53ef\u7528\u7684\u503c:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"none")," - \u8bbe\u5907\u5904\u4e8e\u79bb\u7ebf\u72b6\u6001"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"wifi")," - \u8bbe\u5907\u901a\u8fc7 wifi \u8054\u7f51\uff0c\u6216\u8005\u8bbe\u5907\u662f iOS \u6a21\u62df\u5668"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cellular")," - \u8bbe\u5907\u901a\u8fc7\u8702\u7a9d\u6570\u636e\u6d41\u91cf\u8054\u7f51"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"unknown")," - \u8054\u7f51\u72b6\u6001\u5f02\u5e38")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ConnectionType"),"\u8fd8\u6709\u5982\u4e0b\u4ec5\u5728 Android \u5e73\u53f0\u4e0a\u53ef\u7528\u7684\u503c:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"bluetooth")," - \u8bbe\u5907\u901a\u8fc7\u84dd\u7259\u534f\u8bae\u8054\u7f51"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ethernet")," - \u8bbe\u5907\u901a\u8fc7\u4ee5\u592a\u7f51\u534f\u8bae\u8054\u7f51"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"wimax")," - \u8bbe\u5907\u901a\u8fc7 WiMAX \u534f\u8bae\u8054\u7f51")),Object(i.b)("h3",{id:"effectiveconnectiontype-\u679a\u4e3e\u503c"},"EffectiveConnectionType \u679a\u4e3e\u503c"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"EffectiveConnectionType"),"\u6709\u5982\u4e0b\u8de8\u5e73\u53f0\u53ef\u7528\u7684\u503c:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"2g")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"3g")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"4g")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"unknown"))),Object(i.b)("h3",{id:"android"},"Android"),Object(i.b)("p",null,"\u8981\u5728 Android \u4e0a\u83b7\u53d6\u8054\u7f51\u72b6\u6001\uff0c\u8fd8\u9700\u8981\u5728",Object(i.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),"\u4e2d\u6dfb\u52a0\u5982\u4e0b\u6743\u9650\u8bf7\u6c42\uff1a"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />')),Object(i.b)("h3",{id:"\u67e5\u770b\u65b9\u6cd5"},"\u67e5\u770b\u65b9\u6cd5"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/netinfo#addeventlistener"}),Object(i.b)("inlineCode",{parentName:"a"},"addEventListener"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/netinfo#removeeventlistener"}),Object(i.b)("inlineCode",{parentName:"a"},"removeEventListener"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/netinfo#getconnectioninfo"}),Object(i.b)("inlineCode",{parentName:"a"},"getConnectionInfo"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/netinfo#isconnectionexpensive"}),Object(i.b)("inlineCode",{parentName:"a"},"isConnectionExpensive")))),Object(i.b)("h3",{id:"\u67e5\u770b\u5c5e\u6027"},"\u67e5\u770b\u5c5e\u6027"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/netinfo#isconnected"}),Object(i.b)("inlineCode",{parentName:"a"},"isConnected")))),Object(i.b)("hr",null),Object(i.b)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),Object(i.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(i.b)("h3",{id:"addeventlistener"},Object(i.b)("inlineCode",{parentName:"h3"},"addEventListener()")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"NetInfo.addEventListener(eventName, handler);\n")),Object(i.b)("p",null,"\u6dfb\u52a0\u4e00\u4e2a\u4e8b\u4ef6\u76d1\u542c\u51fd\u6570\u3002"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u540d\u79f0"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"eventName"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"enum(connectionChange, change)"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u662f"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u4e8b\u4ef6\u540d")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"handler"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u662f"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u76d1\u542c\u51fd\u6570")))),Object(i.b)("p",null,"\u652f\u6301\u7684\u4e8b\u4ef6\u540d\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"connectionChange"),"\uff1a\u5f53\u8054\u7f51\u72b6\u6001\u6539\u53d8\u65f6\u89e6\u53d1\u3002\u4f20\u7ed9\u76d1\u542c\u51fd\u6570\u7684\u53c2\u6570\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5305\u542b\u6709\u4e0b\u5217\u5c5e\u6027\uff1a",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"type"),"\uff1a \u4e0a\u9762\u6240\u5217\u51fa\u7684",Object(i.b)("inlineCode",{parentName:"li"},"ConnectionType"),"\u503c"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"effectiveType"),": \u4e0a\u9762\u6240\u5217\u51fa\u7684",Object(i.b)("inlineCode",{parentName:"li"},"EffectiveConnectionType"),"\u503c"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"change"),": \u8fd9\u4e00\u4e8b\u4ef6\u5df2\u8fc7\u65f6\u3002\u8bf7\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"li"},"connectionChange"),"\u4ee3\u66ff\u3002\u5f53\u8054\u7f51\u72b6\u6001\u6539\u53d8\u65f6\u89e6\u53d1\u3002")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"removeeventlistener"},Object(i.b)("inlineCode",{parentName:"h3"},"removeEventListener()")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"NetInfo.removeEventListener(eventName, handler);\n")),Object(i.b)("p",null,"\u79fb\u9664\u8054\u7f51\u72b6\u6001\u6539\u53d8\u7684\u76d1\u542c\u51fd\u6570\u3002"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u540d\u79f0"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"eventName"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"enum(connectionChange, change)"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u662f"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u4e8b\u4ef6\u540d")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"handler"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u662f"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u76d1\u542c\u51fd\u6570")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"getconnectioninfo"},Object(i.b)("inlineCode",{parentName:"h3"},"getConnectionInfo()")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"NetInfo.getConnectionInfo();\n")),Object(i.b)("p",null,"\u8fd4\u56de\u4e00\u4e2a promise\uff0c\u6700\u7ec8\u89e3\u6790\u503c\u4e3a\u5e26\u6709",Object(i.b)("inlineCode",{parentName:"p"},"type"),"\u548c",Object(i.b)("inlineCode",{parentName:"p"},"effectiveType"),"\u5c5e\u6027\u7684\u5bf9\u8c61\u3002\u5176\u4e2d",Object(i.b)("inlineCode",{parentName:"p"},"type"),"\u5c5e\u6027\u7684\u503c\u4e3a",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/netinfo#connectiontype-enum"}),Object(i.b)("inlineCode",{parentName:"a"},"ConnectionType"))," \uff0c\u800c",Object(i.b)("inlineCode",{parentName:"p"},"effectiveType"),"\u5c5e\u6027\u7684\u503c\u4e3a",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/netinfo#effectiveconnectiontype-enum"}),Object(i.b)("inlineCode",{parentName:"a"},"EffectiveConnectionType")),")\u3002"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"isconnectionexpensive"},Object(i.b)("inlineCode",{parentName:"h3"},"isConnectionExpensive()")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"NetInfo.isConnectionExpensive();\n")),Object(i.b)("p",null,"\u4ec5 Android \u53ef\u7528\u3002\u7528\u4e8e\u5224\u65ad\u5f53\u524d\u6d3b\u52a8\u7684\u8fde\u63a5\u662f\u5426\u8ba1\u8d39\u3002\u5982\u679c\u5f53\u524d\u8fde\u63a5\u662f\u901a\u8fc7\u79fb\u52a8\u6570\u636e\u7f51\u7edc\uff0c\u6216\u8005\u901a\u8fc7\u57fa\u4e8e\u79fb\u52a8\u6570\u636e\u7f51\u7edc\u6240\u521b\u5efa\u7684 wifi \u70ed\u70b9\uff0c\u6216\u662f\u5927\u91cf\u6d88\u8017\u7535\u6c60\u7b49\u7b49\uff0c\u90fd\u6709\u53ef\u80fd\u88ab\u5224\u5b9a\u4e3a\u8ba1\u8d39\u7684\u6570\u636e\u8fde\u63a5\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"NetInfo.isConnectionExpensive()\n.then(isConnectionExpensive => {\n  console.log('Connection is ' + (isConnectionExpensive ? 'Expensive' : 'Not Expensive'));\n})\n.catch(error => {\n  console.error(error);\n});\n")),Object(i.b)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),Object(i.b)("h3",{id:"isconnected"},Object(i.b)("inlineCode",{parentName:"h3"},"isConnected")),Object(i.b)("p",null,"\u5728\u6240\u6709\u5e73\u53f0\u4e0a\u53ef\u7528\u3002\u4ee5\u5f02\u6b65\u65b9\u5f0f\u83b7\u53d6\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u7528\u4e8e\u5224\u65ad\u5f53\u524d\u8bbe\u5907\u662f\u5426\u8054\u7f51\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"NetInfo.isConnected.fetch().then(isConnected => {\n  console.log('First, is ' + (isConnected ? 'online' : 'offline'));\n});\nfunction handleFirstConnectivityChange(isConnected) {\n  console.log('Then, is ' + (isConnected ? 'online' : 'offline'));\n  NetInfo.isConnected.removeEventListener(\n    'connectionChange',\n    handleFirstConnectivityChange\n  );\n}\nNetInfo.isConnected.addEventListener(\n  'connectionChange',\n  handleFirstConnectivityChange\n);\n")))}p.isMDXComponent=!0},413:function(e,n,t){"use strict";t.d(n,"a",(function(){return O})),t.d(n,"b",(function(){return u}));var a=t(0),c=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,c=function(e,n){if(null==e)return{};var t,a,c={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var l=c.a.createContext({}),p=function(e){var n=c.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},O=function(e){var n=p(e.components);return c.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},j=c.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,b=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),O=p(t),j=a,u=O["".concat(b,".").concat(j)]||O[j]||d[j]||i;return t?c.a.createElement(u,r(r({ref:n},l),{},{components:t})):c.a.createElement(u,r({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,b=new Array(i);b[0]=j;var r={};for(var o in n)hasOwnProperty.call(n,o)&&(r[o]=n[o]);r.originalType=e,r.mdxType="string"==typeof e?e:a,b[1]=r;for(var l=2;l<i;l++)b[l]=t[l];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,t)}j.displayName="MDXCreateElement"}}]);