(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{342:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return A})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(8),s=(a(0),a(413)),o=a(417),l=a(418),i=a(419),c={id:"transforms",title:"Transforms"},A={unversionedId:"transforms",id:"version-0.63/transforms",isDocsHomePage:!1,title:"Transforms",description:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(95.59%), sunnylqm(4.41%)",source:"@site/versioned_docs/version-0.63/transforms.md",slug:"/transforms",permalink:"/docs/transforms",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/versioned_docs/version-0.63/transforms.md",version:"0.63",lastUpdatedAt:1608733604,sidebar:"version-0.63/api",previous:{title:"Systrace",permalink:"/docs/systrace"},next:{title:"Vibration",permalink:"/docs/vibration"}},b=[{value:"Example",id:"example",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>transform()</code>",id:"transform",children:[]},{value:"<code>decomposedMatrix</code>, <code>rotation</code>, <code>scaleX</code>, <code>scaleY</code>, <code>transformMatrix</code>, <code>translateX</code>, <code>translateY</code>",id:"decomposedmatrix-rotation-scalex-scaley-transformmatrix-translatex-translatey",children:[]}]}],d={toc:b};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm9559-sunnylqm441"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",Object(s.b)("a",Object(n.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(95.59%), ",Object(s.b)("a",Object(n.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(4.41%)"),Object(s.b)("p",null,"Transforms are style properties that will help you modify the appearance and position of your components using 2D or 3D transformations. However, once you apply transforms, the layouts remain the same around the transformed component hence it might overlap with the nearby components. You can apply margin to the transformed component, the nearby components or padding to the container to prevent such overlaps."),Object(s.b)("h2",{id:"example"},"Example"),Object(s.b)(o.a,{groupId:"syntax",defaultValue:i.a.defaultSyntax,values:i.a.syntax,mdxType:"Tabs"},Object(s.b)(l.a,{value:"functional",mdxType:"TabItem"},Object(s.b)("div",{className:"snack-player","data-snack-name":"Transforms","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20SafeAreaView%2C%20ScrollView%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CScrollView%0A%20%20%20%20%20%20contentContainerStyle%3D%7Bstyles.scrollContentContainer%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.box%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EOriginal%20Object%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20scale%3A%202%20%7D%5D%0A%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EScale%20by%202%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20scaleX%3A%202%20%7D%5D%0A%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EScaleX%20by%202%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20scaleY%3A%202%20%7D%5D%0A%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EScaleY%20by%202%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20rotate%3A%20%2245deg%22%20%7D%5D%0A%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ERotate%20by%2045%20deg%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20rotateX%3A%20%2245deg%22%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20rotateZ%3A%20%2245deg%22%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ERotate%20X%26Z%20by%2045%20deg%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20rotateY%3A%20%2245deg%22%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20rotateZ%3A%20%2245deg%22%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ERotate%20Y%26Z%20by%2045%20deg%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20skewX%3A%20%2245deg%22%20%7D%5D%0A%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ESkewX%20by%2045%20deg%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20skewY%3A%20%2245deg%22%20%7D%5D%0A%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ESkewY%20by%2045%20deg%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20skewX%3A%20%2230deg%22%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20skewY%3A%20%2230deg%22%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ESkew%20X%26Y%20by%2030%20deg%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20translateX%3A%20-50%20%7D%5D%0A%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ETranslateX%20by%20-50%20%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20translateY%3A%2050%20%7D%5D%0A%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ETranslateY%20by%2050%20%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2FSafeAreaView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%0A%20%20%7D%2C%0A%20%20scrollContentContainer%3A%20%7B%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20paddingBottom%3A%2060%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20borderRadius%3A%205%2C%0A%20%20%20%20marginVertical%3A%2040%2C%0A%20%20%20%20backgroundColor%3A%20%22%2361dafb%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20fontSize%3A%2014%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20margin%3A%208%2C%0A%20%20%20%20color%3A%20%22%23000%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),Object(s.b)(l.a,{value:"classical",mdxType:"TabItem"},Object(s.b)("div",{className:"snack-player","data-snack-name":"Transforms","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20SafeAreaView%2C%20ScrollView%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CScrollView%0A%20%20%20%20%20%20%20%20%20%20contentContainerStyle%3D%7Bstyles.scrollContentContainer%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.box%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EOriginal%20Object%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20scale%3A%202%20%7D%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EScale%20by%202%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20scaleX%3A%202%20%7D%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EScaleX%20by%202%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20scaleY%3A%202%20%7D%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EScaleY%20by%202%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20rotate%3A%20%2245deg%22%20%7D%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ERotate%20by%2045%20deg%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20rotateX%3A%20%2245deg%22%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20rotateZ%3A%20%2245deg%22%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ERotate%20X%26Z%20by%2045%20deg%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20rotateY%3A%20%2245deg%22%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20rotateZ%3A%20%2245deg%22%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ERotate%20Y%26Z%20by%2045%20deg%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20skewX%3A%20%2245deg%22%20%7D%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ESkewX%20by%2045%20deg%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20skewY%3A%20%2245deg%22%20%7D%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ESkewY%20by%2045%20deg%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20skewX%3A%20%2230deg%22%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20skewY%3A%20%2230deg%22%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ESkew%20X%26Y%20by%2030%20deg%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20translateX%3A%20-50%20%7D%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ETranslateX%20by%20-50%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20translateY%3A%2050%20%7D%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ETranslateY%20by%2050%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%20%20%3C%2FSafeAreaView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%0A%20%20%7D%2C%0A%20%20scrollContentContainer%3A%20%7B%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20paddingBottom%3A%2060%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20borderRadius%3A%205%2C%0A%20%20%20%20marginVertical%3A%2040%2C%0A%20%20%20%20backgroundColor%3A%20%22%2361dafb%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20fontSize%3A%2014%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20margin%3A%208%2C%0A%20%20%20%20color%3A%20%22%23000%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),Object(s.b)("hr",null),Object(s.b)("h1",{id:"reference"},"Reference"),Object(s.b)("h2",{id:"methods"},"Methods"),Object(s.b)("h3",{id:"transform"},Object(s.b)("inlineCode",{parentName:"h3"},"transform()")),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"transform")," accepts an array of transformation objects. Each object specifies the property that will be transformed as the key, and the value to use in the transformation. Objects should not be combined. Use a single key/value pair per object."),Object(s.b)("p",null,"The rotate transformations require a string so that the transform may be expressed in degrees (deg) or radians (rad). For example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'transform([{ rotateX: "45deg" }, { rotateZ: "0.785398rad" }]);\n')),Object(s.b)("p",null,"The skew transformations require a string so that the transform may be expressed in degrees (deg). For example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'transform([{ skewX: "45deg" }]);\n')),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"array of objects: {matrix: number[]}, {perspective: number}, {rotate: string}, {rotateX: string}, {rotateY: string}, {rotateZ: string}, {scale: number}, {scaleX: number}, {scaleY: number}, {translateX: number}, {translateY: number}, {skewX: string}, {skewY: string}"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(s.b)("hr",null),Object(s.b)("h3",{id:"decomposedmatrix-rotation-scalex-scaley-transformmatrix-translatex-translatey"},Object(s.b)("inlineCode",{parentName:"h3"},"decomposedMatrix"),", ",Object(s.b)("inlineCode",{parentName:"h3"},"rotation"),", ",Object(s.b)("inlineCode",{parentName:"h3"},"scaleX"),", ",Object(s.b)("inlineCode",{parentName:"h3"},"scaleY"),", ",Object(s.b)("inlineCode",{parentName:"h3"},"transformMatrix"),", ",Object(s.b)("inlineCode",{parentName:"h3"},"translateX"),", ",Object(s.b)("inlineCode",{parentName:"h3"},"translateY")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("strong",{parentName:"p"},"Deprecated.")," Use the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"transforms#transform"}),Object(s.b)("inlineCode",{parentName:"a"},"transform"))," prop instead.")))}u.isMDXComponent=!0},413:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),A=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=A(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=A(a),u=n,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||s;return a?r.a.createElement(m,l(l({ref:t},c),{},{components:a})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<s;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},414:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},415:function(e,t,a){"use strict";var n=a(0),r=a(416);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},416:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},417:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(415),o=a(414),l=a(62),i=a.n(l),c=37,A=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,b=e.values,d=e.groupId,u=e.className,m=Object(s.a)(),D=m.tabGroupChoices,y=m.setTabGroupChoices,p=Object(n.useState)(l),C=p[0],f=p[1],B=n.Children.toArray(e.children);if(null!=d){var x=D[d];null!=x&&x!==C&&b.some((function(e){return e.value===x}))&&f(x)}var w=function(e){f(e),null!=d&&y(d,e)},E=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},u)},b.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":C===t,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":C===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case A:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(E,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},a)}))),t?Object(n.cloneElement)(B.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},B.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}},418:function(e,t,a){"use strict";var n=a(3),r=a(0),s=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return s.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}},419:function(e,t,a){"use strict";var n=a(7),r=!!n.a.canUseDOM&&navigator.platform.startsWith("Mac"),s=!!n.a.canUseDOM&&navigator.platform.startsWith("Win"),o=r?"ios":"android",l=r?"macos":s?"windows":"linux";t.a={defaultGuide:"native",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}}}]);