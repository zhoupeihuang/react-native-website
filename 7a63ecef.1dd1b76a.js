(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{253:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return i}));var b=a(3),r=a(8),n=(a(0),a(413)),l={id:"view-style-props",title:"View \u6837\u5f0f\u5c5e\u6027"},c={unversionedId:"view-style-props",id:"view-style-props",isDocsHomePage:!1,title:"View \u6837\u5f0f\u5c5e\u6027",description:"\u793a\u4f8b",source:"@site/../cndocs/view-style-props.md",slug:"/view-style-props",permalink:"/docs/next/view-style-props",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/view-style-props.md",version:"current",lastUpdatedAt:1608733604,sidebar:"\u7ec4\u4ef6",previous:{title:"Text \u6837\u5f0f\u5c5e\u6027",permalink:"/docs/next/text-style-props"},next:{title:"\u5e03\u5c40\u4e8b\u4ef6\u5bf9\u8c61",permalink:"/docs/next/layoutevent"}},d=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"Props",id:"props",children:[{value:"<code>borderRightColor</code>",id:"borderrightcolor",children:[]},{value:"<code>backfaceVisibility</code>",id:"backfacevisibility",children:[]},{value:"<code>borderBottomColor</code>",id:"borderbottomcolor",children:[]},{value:"<code>borderBottomEndRadius</code>",id:"borderbottomendradius",children:[]},{value:"<code>borderBottomLeftRadius</code>",id:"borderbottomleftradius",children:[]},{value:"<code>borderBottomRightRadius</code>",id:"borderbottomrightradius",children:[]},{value:"<code>borderBottomStartRadius</code>",id:"borderbottomstartradius",children:[]},{value:"<code>borderBottomWidth</code>",id:"borderbottomwidth",children:[]},{value:"<code>borderColor</code>",id:"bordercolor",children:[]},{value:"<code>borderEndColor</code>",id:"borderendcolor",children:[]},{value:"<code>borderLeftColor</code>",id:"borderleftcolor",children:[]},{value:"<code>borderLeftWidth</code>",id:"borderleftwidth",children:[]},{value:"<code>borderRadius</code>",id:"borderradius",children:[]},{value:"<code>backgroundColor</code>",id:"backgroundcolor",children:[]},{value:"<code>borderRightWidth</code>",id:"borderrightwidth",children:[]},{value:"<code>borderStartColor</code>",id:"borderstartcolor",children:[]},{value:"<code>borderStyle</code>",id:"borderstyle",children:[]},{value:"<code>borderTopColor</code>",id:"bordertopcolor",children:[]},{value:"<code>borderTopEndRadius</code>",id:"bordertopendradius",children:[]},{value:"<code>borderTopLeftRadius</code>",id:"bordertopleftradius",children:[]},{value:"<code>borderTopRightRadius</code>",id:"bordertoprightradius",children:[]},{value:"<code>borderTopStartRadius</code>",id:"bordertopstartradius",children:[]},{value:"<code>borderTopWidth</code>",id:"bordertopwidth",children:[]},{value:"<code>borderWidth</code>",id:"borderwidth",children:[]},{value:"<code>opacity</code>",id:"opacity",children:[]},{value:"<code>elevation</code>",id:"elevation",children:[]}]}],o={toc:d};function i(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(b.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(n.b)("div",{className:"snack-player","data-snack-name":"ViewStyleProps","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%20%7D%20from%20%22react-native%22%3B%0Aconst%20ViewStyleProps%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.top%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.middle%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.bottom%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%7D%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22space-between%22%2C%0A%20%20%20%20backgroundColor%3A%20%22%23fff%22%2C%0A%20%20%20%20padding%3A%2020%2C%0A%20%20%20%20margin%3A%2010%2C%0A%20%20%7D%2C%0A%20%20top%3A%20%7B%0A%20%20%20%20flex%3A%200.3%2C%0A%20%20%20%20backgroundColor%3A%20%22grey%22%2C%0A%20%20%20%20borderWidth%3A%205%2C%0A%20%20%20%20borderTopLeftRadius%3A%2020%2C%0A%20%20%20%20borderTopRightRadius%3A%2020%2C%0A%20%20%7D%2C%0A%20%20middle%3A%20%7B%0A%20%20%20%20flex%3A%200.3%2C%0A%20%20%20%20backgroundColor%3A%20%22beige%22%2C%0A%20%20%20%20borderWidth%3A%205%2C%0A%20%20%7D%2C%0A%20%20bottom%3A%20%7B%0A%20%20%20%20flex%3A%200.3%2C%0A%20%20%20%20backgroundColor%3A%20%22pink%22%2C%0A%20%20%20%20borderWidth%3A%205%2C%0A%20%20%20%20borderBottomLeftRadius%3A%2020%2C%0A%20%20%20%20borderBottomRightRadius%3A%2020%2C%0A%20%20%7D%2C%0A%7D)%3B%0Aexport%20default%20ViewStyleProps%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(n.b)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),Object(n.b)("h2",{id:"props"},"Props"),Object(n.b)("h3",{id:"borderrightcolor"},Object(n.b)("inlineCode",{parentName:"h3"},"borderRightColor")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/colors"}),"color")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"backfacevisibility"},Object(n.b)("inlineCode",{parentName:"h3"},"backfaceVisibility")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"enum('visible', 'hidden')"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"borderbottomcolor"},Object(n.b)("inlineCode",{parentName:"h3"},"borderBottomColor")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/colors"}),"color")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"borderbottomendradius"},Object(n.b)("inlineCode",{parentName:"h3"},"borderBottomEndRadius")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"borderbottomleftradius"},Object(n.b)("inlineCode",{parentName:"h3"},"borderBottomLeftRadius")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"borderbottomrightradius"},Object(n.b)("inlineCode",{parentName:"h3"},"borderBottomRightRadius")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"borderbottomstartradius"},Object(n.b)("inlineCode",{parentName:"h3"},"borderBottomStartRadius")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"borderbottomwidth"},Object(n.b)("inlineCode",{parentName:"h3"},"borderBottomWidth")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"bordercolor"},Object(n.b)("inlineCode",{parentName:"h3"},"borderColor")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/colors"}),"color")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"borderendcolor"},Object(n.b)("inlineCode",{parentName:"h3"},"borderEndColor")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/colors"}),"color")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"borderleftcolor"},Object(n.b)("inlineCode",{parentName:"h3"},"borderLeftColor")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/colors"}),"color")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"borderleftwidth"},Object(n.b)("inlineCode",{parentName:"h3"},"borderLeftWidth")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"borderradius"},Object(n.b)("inlineCode",{parentName:"h3"},"borderRadius")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"backgroundcolor"},Object(n.b)("inlineCode",{parentName:"h3"},"backgroundColor")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/colors"}),"color")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"borderrightwidth"},Object(n.b)("inlineCode",{parentName:"h3"},"borderRightWidth")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"borderstartcolor"},Object(n.b)("inlineCode",{parentName:"h3"},"borderStartColor")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/colors"}),"color")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"borderstyle"},Object(n.b)("inlineCode",{parentName:"h3"},"borderStyle")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"enum('solid', 'dotted', 'dashed')"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"bordertopcolor"},Object(n.b)("inlineCode",{parentName:"h3"},"borderTopColor")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/colors"}),"color")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"bordertopendradius"},Object(n.b)("inlineCode",{parentName:"h3"},"borderTopEndRadius")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"bordertopleftradius"},Object(n.b)("inlineCode",{parentName:"h3"},"borderTopLeftRadius")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"bordertoprightradius"},Object(n.b)("inlineCode",{parentName:"h3"},"borderTopRightRadius")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"bordertopstartradius"},Object(n.b)("inlineCode",{parentName:"h3"},"borderTopStartRadius")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"bordertopwidth"},Object(n.b)("inlineCode",{parentName:"h3"},"borderTopWidth")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"borderwidth"},Object(n.b)("inlineCode",{parentName:"h3"},"borderWidth")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"opacity"},Object(n.b)("inlineCode",{parentName:"h3"},"opacity")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"elevation"},Object(n.b)("inlineCode",{parentName:"h3"},"elevation")),Object(n.b)("p",null,"(\u9650Android)\u4f7f\u7528Android\u539f\u751f\u7684 elevation API\u6765\u8bbe\u7f6e\u89c6\u56fe\u7684\u9ad8\u5ea6\uff08 ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://developer.android.com/training/material/shadows-clipping.html#Elevation"}),"elevation API"),"\uff09\u3002\u8fd9\u6837\u53ef\u4ee5\u4e3a\u89c6\u56fe\u6dfb\u52a0\u4e00\u4e2a\u6295\u5f71\uff0c\u5e76\u4e14\u4f1a\u5f71\u54cd\u89c6\u56fe\u5c42\u53e0\u7684\u987a\u5e8f\u3002\u6b64\u5c5e\u6027\u4ec5\u652f\u6301Android5.0\u53ca\u4ee5\u4e0a\u7248\u672c\u3002"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Android")))))}i.isMDXComponent=!0},413:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m}));var b=a(0),r=a.n(b);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,b,r=function(e,t){if(null==e)return{};var a,b,r={},n=Object.keys(e);for(b=0;b<n.length;b++)a=n[b],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(b=0;b<n.length;b++)a=n[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},O=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,b=e.mdxType,n=e.originalType,l=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),O=i(a),p=b,m=O["".concat(l,".").concat(p)]||O[p]||j[p]||n;return a?r.a.createElement(m,c(c({ref:t},o),{},{components:a})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var n=a.length,l=new Array(n);l[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:b,l[1]=c;for(var o=2;o<n;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);