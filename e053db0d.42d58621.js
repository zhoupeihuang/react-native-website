(window.webpackJsonp=window.webpackJsonp||[]).push([[292],{369:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a(3),b=a(8),r=(a(0),a(413)),c={id:"datepickerios",title:"\ud83d\udea7 DatePickerIOS"},l={unversionedId:"datepickerios",id:"datepickerios",isDocsHomePage:!1,title:"\ud83d\udea7 DatePickerIOS",description:"\u5df2\u8fc7\u65f6\u3002 Use @react-native-community/datetimepicker instead.",source:"@site/../cndocs/datepickerios.md",slug:"/datepickerios",permalink:"/docs/next/datepickerios",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/datepickerios.md",version:"current",lastUpdatedAt:1608733604},i=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"Props",id:"props",children:[{value:"<code>date</code>",id:"date",children:[]},{value:"<code>onChange</code>",id:"onchange",children:[]},{value:"<code>onDateChange</code>",id:"ondatechange",children:[]},{value:"<code>maximumDate</code>",id:"maximumdate",children:[]},{value:"<code>minimumDate</code>",id:"minimumdate",children:[]},{value:"<code>minuteInterval</code>",id:"minuteinterval",children:[]},{value:"<code>mode</code>",id:"mode",children:[]},{value:"<code>locale</code>",id:"locale",children:[]},{value:"<code>timeZoneOffsetInMinutes</code>",id:"timezoneoffsetinminutes",children:[]},{value:"<code>initialDate</code>",id:"initialdate",children:[]}]}],o={toc:i};function d(e){var t=e.components,c=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,c,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u5df2\u8fc7\u65f6\u3002")," Use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-datetimepicker"}),"@react-native-community/datetimepicker")," instead.")),Object(r.b)("p",null,"\u4f7f\u7528",Object(r.b)("inlineCode",{parentName:"p"},"DatePickerIOS"),"\u6765\u5728 iOS \u5e73\u53f0\u4e0a\u6e32\u67d3\u4e00\u4e2a\u65e5\u671f/\u65f6\u95f4\u9009\u62e9\u5668\u3002\u8fd9\u662f\u4e00\u4e2a\u53d7\u7ea6\u675f\u7684(Controlled)\u7ec4\u4ef6\uff0c\u6240\u4ee5\u4f60\u5fc5\u987b\u76d1\u542c",Object(r.b)("inlineCode",{parentName:"p"},"onDateChange"),"\u56de\u8c03\u51fd\u6570\u5e76\u4e14\u53ca\u65f6\u66f4\u65b0",Object(r.b)("inlineCode",{parentName:"p"},"date"),"\u5c5e\u6027\u6765\u4f7f\u5f97\u7ec4\u4ef6\u66f4\u65b0\uff0c\u5426\u5219\u7528\u6237\u7684\u4fee\u6539\u4f1a\u7acb\u523b\u88ab\u64a4\u9500\u6765\u786e\u4fdd\u5f53\u524d\u663e\u793a\u503c\u548c",Object(r.b)("inlineCode",{parentName:"p"},"props.date"),"\u4e00\u81f4\u3002"),Object(r.b)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"import React, { Component } from 'react'\nimport {\n  DatePickerIOS,\n  View,\n  StyleSheet,\n} from 'react-native'\n\nexport default class App extends Component {\n  constructor(props) {\n    super(props);\n    this.state = { chosenDate: new Date() };\n\n    this.setDate = this.setDate.bind(this);\n  }\n\n  setDate(newDate) {\n    this.setState({chosenDate: newDate})\n  }\n\n  render() {\n    return (\n      <View style={styles.container}>\n        <DatePickerIOS\n          date={this.state.chosenDate}\n          onDateChange={this.setDate}\n        />\n      </View>\n    )\n  }\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center'\n  },\n})\n")),Object(r.b)("center",null,Object(r.b)("img",{src:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/assets/DatePickerIOS/example.gif",width:"360"})),Object(r.b)("hr",null),Object(r.b)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("h3",{id:"date"},Object(r.b)("inlineCode",{parentName:"h3"},"date")),Object(r.b)("p",null,"\u5f53\u524d\u88ab\u9009\u4e2d\u7684\u65e5\u671f\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Date"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u662f")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onchange"},Object(r.b)("inlineCode",{parentName:"h3"},"onChange")),Object(r.b)("p",null,"Date change handler."),Object(r.b)("p",null,"This is called when the user changes the date or time in the UI. The first and only argument is an Event. For getting the date the picker was changed to, use onDateChange instead."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"ondatechange"},Object(r.b)("inlineCode",{parentName:"h3"},"onDateChange")),Object(r.b)("p",null,"\u65e5\u671f/\u65f6\u95f4\u53d8\u5316\u7684\u76d1\u542c\u51fd\u6570\u3002"),Object(r.b)("p",null,"\u5f53\u7528\u6237\u4fee\u6539\u65e5\u671f\u6216\u65f6\u95f4\u65f6\u8c03\u7528\u6b64\u56de\u8c03\u51fd\u6570\u3002\u552f\u4e00\u7684\u53c2\u6570\u662f\u4e00\u4e2a\u65e5\u671f\u5bf9\u8c61\uff0c\u8868\u793a\u65b0\u7684\u65e5\u671f\u548c\u65f6\u95f4\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u662f")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"maximumdate"},Object(r.b)("inlineCode",{parentName:"h3"},"maximumDate")),Object(r.b)("p",null,"\u53ef\u9009\u7684\u6700\u5927\u65e5\u671f\u3002"),Object(r.b)("p",null,"\u9650\u5236\u53ef\u9009\u7684\u65e5\u671f/\u65f6\u95f4\u8303\u56f4\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Date"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(r.b)("p",null,"Example with ",Object(r.b)("inlineCode",{parentName:"p"},"maximumDate")," set to December 31, 2017:"),Object(r.b)("center",null,Object(r.b)("img",{src:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/assets/DatePickerIOS/maximumDate.gif",width:"360"})),Object(r.b)("hr",null),Object(r.b)("h3",{id:"minimumdate"},Object(r.b)("inlineCode",{parentName:"h3"},"minimumDate")),Object(r.b)("p",null,"\u53ef\u9009\u7684\u6700\u5c0f\u65e5\u671f\u3002"),Object(r.b)("p",null,"\u9650\u5236\u53ef\u9009\u7684\u65e5\u671f/\u65f6\u95f4\u8303\u56f4\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Date"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/datepickerios#maximumdate"}),Object(r.b)("inlineCode",{parentName:"a"},"maximumDate"))," for an example image."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"minuteinterval"},Object(r.b)("inlineCode",{parentName:"h3"},"minuteInterval")),Object(r.b)("p",null,"\u53ef\u9009\u7684\u6700\u5c0f\u7684\u5206\u949f\u5355\u4f4d\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum(1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(r.b)("p",null,"Example with ",Object(r.b)("inlineCode",{parentName:"p"},"minuteInterval")," set to ",Object(r.b)("inlineCode",{parentName:"p"},"10"),":"),Object(r.b)("center",null,Object(r.b)("img",{src:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/assets/DatePickerIOS/minuteInterval.png",width:"360"})),Object(r.b)("hr",null),Object(r.b)("h3",{id:"mode"},Object(r.b)("inlineCode",{parentName:"h3"},"mode")),Object(r.b)("p",null,"\u9009\u62e9\u5668\u6a21\u5f0f\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum('date', 'time', 'datetime', 'countdown')"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(r.b)("p",null,"Example with ",Object(r.b)("inlineCode",{parentName:"p"},"mode")," set to ",Object(r.b)("inlineCode",{parentName:"p"},"date"),", ",Object(r.b)("inlineCode",{parentName:"p"},"time"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"datetime"),": ",Object(r.b)("img",{src:a(550).default})),Object(r.b)("hr",null),Object(r.b)("h3",{id:"locale"},Object(r.b)("inlineCode",{parentName:"h3"},"locale")),Object(r.b)("p",null,"The locale for the date picker. Value needs to be a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.apple.com/library/content/documentation/MacOSX/Conceptual/BPInternational/LanguageandLocaleIDs/LanguageandLocaleIDs.html"}),"Locale ID"),"."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"timezoneoffsetinminutes"},Object(r.b)("inlineCode",{parentName:"h3"},"timeZoneOffsetInMinutes")),Object(r.b)("p",null,"\u65f6\u533a\u5dee\uff0c\u5355\u4f4d\u662f\u5206\u949f\u3002"),Object(r.b)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u9009\u62e9\u5668\u4f1a\u9009\u62e9\u8bbe\u5907\u7684\u9ed8\u8ba4\u65f6\u533a\u3002\u901a\u8fc7\u6b64\u53c2\u6570\uff0c\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u65f6\u533a\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u8981\u4f7f\u7528\u5317\u4eac\u65f6\u95f4\uff08\u4e1c\u516b\u533a\uff09\uff0c\u53ef\u4ee5\u4f20\u9012 8 ","*"," 60\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"initialdate"},Object(r.b)("inlineCode",{parentName:"h3"},"initialDate")),Object(r.b)("p",null,"Provides an initial value that will change when the user starts selecting a date. It is useful for simple use-cases where you do not want to deal with listening to events and updating the date prop to keep the controlled state in sync. The controlled state has known bugs which causes it to go out of sync with native. The initialDate prop is intended to allow you to have native be source of truth."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Date"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))))}d.isMDXComponent=!0},413:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),d=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},m=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,j=p["".concat(c,".").concat(m)]||p[m]||O[m]||r;return a?b.a.createElement(j,l(l({ref:t},o),{},{components:a})):b.a.createElement(j,l({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<r;o++)c[o]=a[o];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},550:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/mode-089618b034a4d64bad0b39c4be929f4a.png"}}]);