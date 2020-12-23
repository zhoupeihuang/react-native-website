(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{137:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(8),c=(a(0),a(413)),l={id:"touchablenativefeedback",title:"TouchableNativeFeedback"},o={unversionedId:"touchablenativefeedback",id:"version-0.63/touchablenativefeedback",isDocsHomePage:!1,title:"TouchableNativeFeedback",description:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(92.48%), sunnylqm(7.52%)",source:"@site/versioned_docs/version-0.63/touchablenativefeedback.md",slug:"/touchablenativefeedback",permalink:"/docs/touchablenativefeedback",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/versioned_docs/version-0.63/touchablenativefeedback.md",version:"0.63",lastUpdatedAt:1608733604,sidebar:"version-0.63/\u7ec4\u4ef6",previous:{title:"DrawerLayoutAndroid",permalink:"/docs/drawerlayoutandroid"},next:{title:"InputAccessoryView",permalink:"/docs/inputaccessoryview"}},b=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"Props",id:"props",children:[{value:"<code>background</code>",id:"background",children:[]},{value:"<code>useForeground</code>",id:"useforeground",children:[]}]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>SelectableBackground()</code>",id:"selectablebackground",children:[]},{value:"<code>SelectableBackgroundBorderless()</code>",id:"selectablebackgroundborderless",children:[]},{value:"<code>Ripple()</code>",id:"ripple",children:[]},{value:"<code>canUseNativeForeground()</code>",id:"canusenativeforeground",children:[]}]}],i={toc:b};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm9248-sunnylqm752"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",Object(c.b)("a",Object(n.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(92.48%), ",Object(c.b)("a",Object(n.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(7.52%)"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"If you're looking for a more extensive and future-proof way to handle touch-based input, check out the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/pressable"}),"Pressable")," API.")),Object(c.b)("p",null,"\u672c\u7ec4\u4ef6\u7528\u4e8e\u5c01\u88c5\u89c6\u56fe\uff0c\u4f7f\u5176\u53ef\u4ee5\u6b63\u786e\u54cd\u5e94\u89e6\u6478\u64cd\u4f5c\uff08\u4ec5\u9650 Android \u5e73\u53f0\uff09\u3002\u5728 Android \u8bbe\u5907\u4e0a\uff0c\u8fd9\u4e2a\u7ec4\u4ef6\u5229\u7528\u539f\u751f\u72b6\u6001\u6765\u6e32\u67d3\u89e6\u6478\u7684\u53cd\u9988\u3002"),Object(c.b)("p",null,"\u76ee\u524d\u5b83\u53ea\u652f\u6301\u4e00\u4e2a\u5355\u72ec\u7684 View \u5b9e\u4f8b\u4f5c\u4e3a\u5b50\u8282\u70b9\u3002\u5728\u5e95\u5c42\u5b9e\u73b0\u4e0a\uff0c\u5b9e\u9645\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 RCTView \u8282\u70b9\u66ff\u6362\u5f53\u524d\u7684\u5b50 View\uff0c\u5e76\u9644\u5e26\u4e00\u4e9b\u989d\u5916\u7684\u5c5e\u6027\u3002"),Object(c.b)("p",null,"\u539f\u751f\u89e6\u6478\u64cd\u4f5c\u53cd\u9988\u7684\u80cc\u666f\u53ef\u4ee5\u4f7f\u7528",Object(c.b)("inlineCode",{parentName:"p"},"background"),"\u5c5e\u6027\u6765\u81ea\u5b9a\u4e49\u3002"),Object(c.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(c.b)("div",{className:"snack-player","data-snack-name":"TouchableNativeFeedback Android Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20TouchableNativeFeedback%20%7D%20from%20%22react-native%22%3B%0Aimport%20Constants%20from%20%22expo-constants%22%3B%0A%0Aconst%20randomHexColor%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20%22%23000000%22.replace(%2F0%2Fg%2C%20function()%20%7B%0A%20%20%20%20return%20(~~(Math.random()%20*%2016)).toString(16)%3B%0A%20%20%7D)%3B%0A%7D%3B%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BrippleColor%2C%20setRippleColor%5D%20%3D%20useState(randomHexColor())%3B%0A%20%20const%20%5BrippleOverflow%2C%20setRippleOverflow%5D%20%3D%20useState(false)%3B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CTouchableNativeFeedback%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setRippleColor(randomHexColor())%3B%0A%20%20%20%20%20%20%20%20%20%20setRippleOverflow(!rippleOverflow)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20background%3D%7BTouchableNativeFeedback.Ripple(rippleColor%2C%20rippleOverflow)%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.touchable%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ETouchableNativeFeedback%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FTouchableNativeFeedback%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingTop%3A%20Constants.statusBarHeight%2C%0A%20%20%20%20backgroundColor%3A%20%22%23ecf0f1%22%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%2C%0A%20%20touchable%3A%20%7B%20flex%3A%200.5%2C%20borderColor%3A%20%22black%22%2C%20borderWidth%3A%201%20%7D%2C%0A%20%20text%3A%20%7B%20alignSelf%3A%20%22center%22%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(c.b)("hr",null),Object(c.b)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("p",null,"Inherits ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/touchablewithoutfeedback#props"}),"TouchableWithoutFeedback Props"),"."),Object(c.b)("h3",{id:"background"},Object(c.b)("inlineCode",{parentName:"h3"},"background")),Object(c.b)("p",null,"\u51b3\u5b9a\u5728\u89e6\u6478\u53cd\u9988\u7684\u65f6\u5019\u663e\u793a\u4ec0\u4e48\u7c7b\u578b\u7684\u80cc\u666f\u3002\u5b83\u63a5\u53d7\u4e00\u4e2a\u6709\u7740",Object(c.b)("inlineCode",{parentName:"p"},"type"),"\u5c5e\u6027\u548c\u4e00\u4e9b\u57fa\u4e8e",Object(c.b)("inlineCode",{parentName:"p"},"type"),"\u5c5e\u6027\u7684\u989d\u5916\u6570\u636e\u7684\u5bf9\u8c61\u3002\u6211\u4eec\u63a8\u8350\u9009\u7528\u672c\u7ec4\u4ef6\u7684\u51e0\u4e2a\u9759\u6001\u65b9\u6cd5\u6765\u521b\u5efa\u8fd9\u4e2a\u5bf9\u8c61\u3002"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"backgroundPropType"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"useforeground"},Object(c.b)("inlineCode",{parentName:"h3"},"useForeground")),Object(c.b)("p",null,"Set to true to add the ripple effect to the foreground of the view, instead of the background. This is useful if one of your child views has a background of its own, or you're e.g. displaying images, and you don't want the ripple to be covered by them."),Object(c.b)("p",null,"Check TouchableNativeFeedback.canUseNativeForeground() first, as this is only available on Android 6.0 and above. If you try to use this on older versions you will get a warning and fallback to background."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(c.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(c.b)("h3",{id:"selectablebackground"},Object(c.b)("inlineCode",{parentName:"h3"},"SelectableBackground()")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static SelectableBackground(rippleRadius: ?number)\n")),Object(c.b)("p",null,"\u4f1a\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\uff0c\u8868\u793a\u5b89\u5353\u4e3b\u9898\u9ed8\u8ba4\u7684\u5bf9\u4e8e\u88ab\u9009\u4e2d\u5bf9\u8c61\u7684\u80cc\u666f(?android:attr/selectableItemBackground)\u3002",Object(c.b)("inlineCode",{parentName:"p"},"rippleRadius")," parameter controls the radius of the ripple effect."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"selectablebackgroundborderless"},Object(c.b)("inlineCode",{parentName:"h3"},"SelectableBackgroundBorderless()")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static SelectableBackgroundBorderless(rippleRadius: ?number)\n")),Object(c.b)("p",null,"\u4f1a\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\uff0c\u8868\u793a\u5b89\u5353\u4e3b\u9898\u9ed8\u8ba4\u7684\u5bf9\u4e8e\u88ab\u9009\u4e2d\u7684\u65e0\u8fb9\u6846\u5bf9\u8c61\u7684\u80cc\u666f(?android:attr/selectableItemBackgroundBorderless)\u3002\u53ea\u9002\u7528\u4e8e Android API level 21+\u3002",Object(c.b)("inlineCode",{parentName:"p"},"rippleRadius")," parameter controls the radius of the ripple effect."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"ripple"},Object(c.b)("inlineCode",{parentName:"h3"},"Ripple()")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static Ripple(color: string, borderless: boolean, rippleRadius: ?number)\n")),Object(c.b)("p",null,"\u4f1a\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5f53\u6309\u94ae\u88ab\u6309\u4e0b\u65f6\u4ea7\u751f\u4e00\u4e2a\u6d9f\u6f2a\u72b6\u7684\u80cc\u666f\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 color \u53c2\u6570\u6765\u6307\u5b9a\u989c\u8272\uff0c\u5982\u679c\u53c2\u6570",Object(c.b)("inlineCode",{parentName:"p"},"borderless"),"\u662f true\uff0c\u90a3\u4e48\u6d9f\u6f2a\u8fd8\u4f1a\u6e32\u67d3\u5230\u89c6\u56fe\u7684\u8303\u56f4\u4e4b\u5916\uff08\u53c2\u89c1\u539f\u751f\u7684 actionbar buttons \u4f5c\u4e3a\u8be5\u6548\u679c\u7684\u4e00\u4e2a\u4f8b\u5b50\uff09\u3002\u8fd9\u4e2a\u80cc\u666f\u7c7b\u578b\u53ea\u5728 Android API level 21+\u9002\u7528\u3002"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u540d\u79f0"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"color"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u662f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The ripple color")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"borderless"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u662f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If the ripple can render outside it's bounds")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"rippleRadius"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"?number"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"controls the radius of the ripple effect")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"canusenativeforeground"},Object(c.b)("inlineCode",{parentName:"h3"},"canUseNativeForeground()")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static canUseNativeForeground()\n")))}d.isMDXComponent=!0},413:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),d=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),p=d(a),s=n,O=p["".concat(l,".").concat(s)]||p[s]||u[s]||c;return a?r.a.createElement(O,o(o({ref:t},i),{},{components:a})):r.a.createElement(O,o({ref:t},i))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=s;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var i=2;i<c;i++)l[i]=a[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);