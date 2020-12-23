(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{368:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),o=(n(0),n(413)),c=n(417),i=n(418),s=n(419),l={id:"network",title:"\u8bbf\u95ee\u7f51\u7edc"},b={unversionedId:"network",id:"version-0.63/network",isDocsHomePage:!1,title:"\u8bbf\u95ee\u7f51\u7edc",description:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(96.81%), sunnylqm(3.19%)",source:"@site/versioned_docs/version-0.63/network.md",slug:"/network",permalink:"/docs/network",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/versioned_docs/version-0.63/network.md",version:"0.63",lastUpdatedAt:1608730528,sidebar:"version-0.63/docs",previous:{title:"\u4f7f\u7528\u65b0\u7684 Hermes \u5f15\u64ce",permalink:"/docs/hermes"},next:{title:"\u7f51\u7edc\u5b89\u5168\u7b56\u7565",permalink:"/docs/security"}},u=[{value:"\u4f7f\u7528 Fetch",id:"\u4f7f\u7528-fetch",children:[{value:"\u4f7f\u7528\u5176\u4ed6\u7684\u7f51\u7edc\u5e93",id:"\u4f7f\u7528\u5176\u4ed6\u7684\u7f51\u7edc\u5e93",children:[]}]},{value:"WebSocket \u652f\u6301",id:"websocket-\u652f\u6301",children:[]},{value:"High Five!",id:"high-five",children:[]},{value:"Known Issues with <code>fetch</code> and cookie based authentication",id:"known-issues-with-fetch-and-cookie-based-authentication",children:[]}],p={toc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm9681-sunnylqm319"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",Object(o.b)("a",Object(a.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(96.81%), ",Object(o.b)("a",Object(a.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(3.19%)"),Object(o.b)("p",null,"\u5f88\u591a\u79fb\u52a8\u5e94\u7528\u90fd\u9700\u8981\u4ece\u8fdc\u7a0b\u5730\u5740\u4e2d\u83b7\u53d6\u6570\u636e\u6216\u8d44\u6e90\u3002\u4f60\u53ef\u80fd\u9700\u8981\u7ed9\u67d0\u4e2a REST API \u53d1\u8d77 POST \u8bf7\u6c42\u4ee5\u63d0\u4ea4\u7528\u6237\u6570\u636e\uff0c\u53c8\u6216\u8005\u53ef\u80fd\u4ec5\u4ec5\u9700\u8981\u4ece\u67d0\u4e2a\u670d\u52a1\u5668\u4e0a\u83b7\u53d6\u4e00\u4e9b\u9759\u6001\u5185\u5bb9\u2014\u2014\u4ee5\u4e0b\u5c31\u662f\u4f60\u4f1a\u7528\u5230\u7684\u4e1c\u897f\u3002\u65b0\u624b\u53ef\u4ee5\u5bf9\u7167\u8fd9\u4e2a",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://v.youku.com/v_show/id_XMTUyNTEwMTA5Ng==.html"}),"\u7b80\u77ed\u7684\u89c6\u9891\u6559\u7a0b"),"\u52a0\u6df1\u7406\u89e3\u3002"),Object(o.b)("h2",{id:"\u4f7f\u7528-fetch"},"\u4f7f\u7528 Fetch"),Object(o.b)("p",null,"React Native \u63d0\u4f9b\u4e86\u548c web \u6807\u51c6\u4e00\u81f4\u7684",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"}),"Fetch API"),"\uff0c\u7528\u4e8e\u6ee1\u8db3\u5f00\u53d1\u8005\u8bbf\u95ee\u7f51\u7edc\u7684\u9700\u6c42\u3002\u5982\u679c\u4f60\u4e4b\u524d\u4f7f\u7528\u8fc7",Object(o.b)("inlineCode",{parentName:"p"},"XMLHttpRequest"),"(\u5373\u4fd7\u79f0\u7684 ajax)\u6216\u662f\u5176\u4ed6\u7684\u7f51\u7edc API\uff0c\u90a3\u4e48 Fetch \u7528\u8d77\u6765\u5c06\u4f1a\u76f8\u5f53\u5bb9\u6613\u4e0a\u624b\u3002\u8fd9\u7bc7\u6587\u6863\u53ea\u4f1a\u5217\u51fa Fetch \u7684\u57fa\u672c\u7528\u6cd5\uff0c\u5e76\u4e0d\u4f1a\u8bb2\u8ff0\u592a\u591a\u7ec6\u8282\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4f60\u559c\u6b22\u7684\u641c\u7d22\u5f15\u64ce\u53bb\u641c\u7d22",Object(o.b)("inlineCode",{parentName:"p"},"fetch api"),"\u5173\u952e\u5b57\u4ee5\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"),Object(o.b)("h4",{id:"\u53d1\u8d77\u8bf7\u6c42"},"\u53d1\u8d77\u8bf7\u6c42"),Object(o.b)("p",null,"\u8981\u4ece\u4efb\u610f\u5730\u5740\u83b7\u53d6\u5185\u5bb9\u7684\u8bdd\uff0c\u53ea\u9700\u7b80\u5355\u5730\u5c06\u7f51\u5740\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9 fetch \u65b9\u6cd5\u5373\u53ef\uff08fetch \u8fd9\u4e2a\u8bcd\u672c\u8eab\u4e5f\u5c31\u662f",Object(o.b)("inlineCode",{parentName:"p"},"\u83b7\u53d6"),"\u7684\u610f\u601d\uff09\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'fetch("https://mywebsite.com/mydata.json");\n')),Object(o.b)("p",null,"Fetch \u8fd8\u6709\u53ef\u9009\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u53ef\u4ee5\u7528\u6765\u5b9a\u5236 HTTP \u8bf7\u6c42\u4e00\u4e9b\u53c2\u6570\u3002\u4f60\u53ef\u4ee5\u6307\u5b9a header \u53c2\u6570\uff0c\u6216\u662f\u6307\u5b9a\u4f7f\u7528 POST \u65b9\u6cd5\uff0c\u53c8\u6216\u662f\u63d0\u4ea4\u6570\u636e\u7b49\u7b49\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'fetch("https://mywebsite.com/endpoint/", {\n  method: "POST",\n  headers: {\n    Accept: "application/json",\n    "Content-Type": "application/json"\n  },\n  body: JSON.stringify({\n    firstParam: "yourValue",\n    secondParam: "yourOtherValue"\n  })\n});\n')),Object(o.b)("p",null,"\u63d0\u4ea4\u6570\u636e\u7684\u683c\u5f0f\u5173\u952e\u53d6\u51b3\u4e8e headers \u4e2d\u7684",Object(o.b)("inlineCode",{parentName:"p"},"Content-Type"),"\u3002",Object(o.b)("inlineCode",{parentName:"p"},"Content-Type"),"\u6709\u5f88\u591a\u79cd\uff0c\u5bf9\u5e94 body \u7684\u683c\u5f0f\u4e5f\u6709\u533a\u522b\u3002\u5230\u5e95\u5e94\u8be5\u91c7\u7528\u4ec0\u4e48\u6837\u7684",Object(o.b)("inlineCode",{parentName:"p"},"Content-Type"),"\u53d6\u51b3\u4e8e\u670d\u52a1\u5668\u7aef\uff0c\u6240\u4ee5\u8bf7\u548c\u670d\u52a1\u5668\u7aef\u7684\u5f00\u53d1\u4eba\u5458\u6c9f\u901a\u786e\u5b9a\u6e05\u695a\u3002\u5e38\u7528\u7684'Content-Type'\u9664\u4e86\u4e0a\u9762\u7684'application/json'\uff0c\u8fd8\u6709\u4f20\u7edf\u7684\u7f51\u9875\u8868\u5355\u5f62\u5f0f\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'fetch("https://mywebsite.com/endpoint/", {\n  method: "POST",\n  headers: {\n    "Content-Type": "application/x-www-form-urlencoded"\n  },\n  body: "key1=value1&key2=value2"\n});\n')),Object(o.b)("p",null,"\u53ef\u4ee5\u53c2\u8003",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Request"}),"Fetch \u8bf7\u6c42\u6587\u6863"),"\u6765\u67e5\u770b\u6240\u6709\u53ef\u7528\u7684\u53c2\u6570\u3002"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u4f7f\u7528 Chrome \u8c03\u8bd5\u76ee\u524d\u65e0\u6cd5\u89c2\u6d4b\u5230 React Native \u4e2d\u7684\u7f51\u7edc\u8bf7\u6c42\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u7b2c\u4e09\u65b9\u7684",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jhen0409/react-native-debugger"}),"react-native-debugger"),"\u6765\u8fdb\u884c\u89c2\u6d4b\u3002")),Object(o.b)("h4",{id:"\u5904\u7406\u670d\u52a1\u5668\u7684\u54cd\u5e94\u6570\u636e"},"\u5904\u7406\u670d\u52a1\u5668\u7684\u54cd\u5e94\u6570\u636e"),Object(o.b)("p",null,"\u4e0a\u9762\u7684\u4f8b\u5b50\u6f14\u793a\u4e86\u5982\u4f55\u53d1\u8d77\u8bf7\u6c42\u3002\u5f88\u591a\u60c5\u51b5\u4e0b\uff0c\u4f60\u8fd8\u9700\u8981\u5904\u7406\u670d\u52a1\u5668\u56de\u590d\u7684\u6570\u636e\u3002"),Object(o.b)("p",null,"\u7f51\u7edc\u8bf7\u6c42\u5929\u7136\u662f\u4e00\u79cd\u5f02\u6b65\u64cd\u4f5c\uff08\u8bd1\u6ce8\uff1a\u540c\u6837\u7684\u8fd8\u6709",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"asyncstorage.html"}),"asyncstorage"),"\uff0c\u8bf7\u4e0d\u8981\u518d\u95ee\u600e\u6837\u628a\u5f02\u6b65\u53d8\u6210\u540c\u6b65\uff01\u65e0\u8bba\u5728\u8bed\u6cd5\u5c42\u9762\u600e\u4e48\u6298\u817e\uff0c\u5b83\u4eec\u7684\u5f02\u6b65\u672c\u8d28\u662f\u65e0\u6cd5\u53d8\u66f4\u7684\u3002\u5f02\u6b65\u7684\u610f\u601d\u662f\u4f60\u5e94\u8be5\u8d81\u8fd9\u4e2a\u65f6\u95f4\u53bb\u505a\u70b9\u522b\u7684\u4e8b\u60c5\uff0c\u6bd4\u5982\u663e\u793a loading\uff0c\u800c\u4e0d\u662f\u8ba9\u754c\u9762\u5361\u4f4f\u50bb\u7b49\uff09\u3002Fetch \u65b9\u6cd5\u4f1a\u8fd4\u56de\u4e00\u4e2a",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"}),"Promise"),"\uff0c\u8fd9\u79cd\u6a21\u5f0f\u53ef\u4ee5\u7b80\u5316\u5f02\u6b65\u98ce\u683c\u7684\u4ee3\u7801\uff08\u8bd1\u6ce8\uff1a\u540c\u6837\u7684\uff0c\u5982\u679c\u4f60\u4e0d\u4e86\u89e3 promise\uff0c\u5efa\u8bae\u4f7f\u7528\u641c\u7d22\u5f15\u64ce\u8865\u8bfe\uff09\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'function getMoviesFromApiAsync() {\n  return fetch("https://facebook.github.io/react-native/movies.json")\n    .then(response => response.json())\n    .then(responseJson => {\n      return responseJson.movies;\n    })\n    .catch(error => {\n      console.error(error);\n    });\n}\n')),Object(o.b)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u5728 React Native \u5e94\u7528\u4e2d\u4f7f\u7528 ES2017 \u6807\u51c6\u4e2d\u7684",Object(o.b)("inlineCode",{parentName:"p"},"async"),"/",Object(o.b)("inlineCode",{parentName:"p"},"await")," \u8bed\u6cd5\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'// \u6ce8\u610f\u8fd9\u4e2a\u65b9\u6cd5\u524d\u9762\u6709async\u5173\u952e\u5b57\nasync function getMoviesFromApi() {\n  try {\n    // \u6ce8\u610f\u8fd9\u91cc\u7684await\u8bed\u53e5\uff0c\u5176\u6240\u5728\u7684\u51fd\u6570\u5fc5\u987b\u6709async\u5173\u952e\u5b57\u58f0\u660e\n    let response = await fetch(\n      "https://facebook.github.io/react-native/movies.json"\n    );\n    let responseJson = await response.json();\n    return responseJson.movies;\n  } catch (error) {\n    console.error(error);\n  }\n}\n')),Object(o.b)("p",null,"\u522b\u5fd8\u4e86 catch \u4f4f",Object(o.b)("inlineCode",{parentName:"p"},"fetch"),"\u53ef\u80fd\u629b\u51fa\u7684\u5f02\u5e38\uff0c\u5426\u5219\u51fa\u9519\u65f6\u4f60\u53ef\u80fd\u770b\u4e0d\u5230\u4efb\u4f55\u63d0\u793a\u3002"),Object(o.b)(c.a,{groupId:"syntax",defaultValue:s.a.defaultSyntax,values:s.a.syntax,mdxType:"Tabs"},Object(o.b)(i.a,{value:"functional",mdxType:"TabItem"},Object(o.b)("div",{className:"snack-player","data-snack-name":"Fetch Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useEffect%2C%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20ActivityIndicator%2C%20FlatList%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BisLoading%2C%20setLoading%5D%20%3D%20useState(true)%3B%0A%20%20const%20%5Bdata%2C%20setData%5D%20%3D%20useState(%5B%5D)%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20fetch('https%3A%2F%2Freactnative.dev%2Fmovies.json')%0A%20%20%20%20%20%20.then((response)%20%3D%3E%20response.json())%0A%20%20%20%20%20%20.then((json)%20%3D%3E%20setData(json.movies))%0A%20%20%20%20%20%20.catch((error)%20%3D%3E%20console.error(error))%0A%20%20%20%20%20%20.finally(()%20%3D%3E%20setLoading(false))%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7B%7B%20flex%3A%201%2C%20padding%3A%2024%20%7D%7D%3E%0A%20%20%20%20%20%20%7BisLoading%20%3F%20%3CActivityIndicator%2F%3E%20%3A%20(%0A%20%20%20%20%20%20%20%20%3CFlatList%0A%20%20%20%20%20%20%20%20%20%20data%3D%7Bdata%7D%0A%20%20%20%20%20%20%20%20%20%20keyExtractor%3D%7B(%7B%20id%20%7D%2C%20index)%20%3D%3E%20id%7D%0A%20%20%20%20%20%20%20%20%20%20renderItem%3D%7B(%7B%20item%20%7D)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3E%7Bitem.title%7D%2C%20%7Bitem.releaseYear%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20)%7D%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),Object(o.b)(i.a,{value:"classical",mdxType:"TabItem"},Object(o.b)("div",{className:"snack-player","data-snack-name":"Fetch Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20ActivityIndicator%2C%20FlatList%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20class%20App%20extends%20Component%20%7B%0A%20%20constructor(props)%20%7B%0A%20%20%20%20super(props)%3B%0A%0A%20%20%20%20this.state%20%3D%20%7B%0A%20%20%20%20%20%20data%3A%20%5B%5D%2C%0A%20%20%20%20%20%20isLoading%3A%20true%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20fetch('https%3A%2F%2Freactnative.dev%2Fmovies.json')%0A%20%20%20%20%20%20.then((response)%20%3D%3E%20response.json())%0A%20%20%20%20%20%20.then((json)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20this.setState(%7B%20data%3A%20json.movies%20%7D)%3B%0A%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20.catch((error)%20%3D%3E%20console.error(error))%0A%20%20%20%20%20%20.finally(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20this.setState(%7B%20isLoading%3A%20false%20%7D)%3B%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20const%20%7B%20data%2C%20isLoading%20%7D%20%3D%20this.state%3B%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20flex%3A%201%2C%20padding%3A%2024%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%7BisLoading%20%3F%20%3CActivityIndicator%2F%3E%20%3A%20(%0A%20%20%20%20%20%20%20%20%20%20%3CFlatList%0A%20%20%20%20%20%20%20%20%20%20%20%20data%3D%7Bdata%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20keyExtractor%3D%7B(%7B%20id%20%7D%2C%20index)%20%3D%3E%20id%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20renderItem%3D%7B(%7B%20item%20%7D)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3E%7Bitem.title%7D%2C%20%7Bitem.releaseYear%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0ciOS \u4f1a\u963b\u6b62\u6240\u6709 http \u7684\u8bf7\u6c42\uff0c\u4ee5\u7763\u4fc3\u5f00\u53d1\u8005\u4f7f\u7528 https\u3002\u5982\u679c\u4f60\u4ecd\u7136\u9700\u8981\u4f7f\u7528 http \u534f\u8bae\uff0c\u90a3\u4e48\u9996\u5148\u9700\u8981\u6dfb\u52a0\u4e00\u4e2a App Transport Security \u7684\u4f8b\u5916\uff0c\u8be6\u7ec6\u53ef\u53c2\u8003",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://segmentfault.com/a/1190000002933776"}),"\u8fd9\u7bc7\u5e16\u5b50"),"\u3002")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u4ece Android9 \u5f00\u59cb\uff0c\u4e5f\u4f1a\u9ed8\u8ba4\u963b\u6b62 http \u8bf7\u6c42\uff0c\u8bf7\u53c2\u8003",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://blog.csdn.net/qq_40347548/article/details/86766932"}),"\u76f8\u5173\u914d\u7f6e"))),Object(o.b)("h3",{id:"\u4f7f\u7528\u5176\u4ed6\u7684\u7f51\u7edc\u5e93"},"\u4f7f\u7528\u5176\u4ed6\u7684\u7f51\u7edc\u5e93"),Object(o.b)("p",null,"React Native \u4e2d\u5df2\u7ecf\u5185\u7f6e\u4e86",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"}),"XMLHttpRequest API"),"(\u4e5f\u5c31\u662f\u4fd7\u79f0\u7684 ajax)\u3002\u4e00\u4e9b\u57fa\u4e8e XMLHttpRequest \u5c01\u88c5\u7684\u7b2c\u4e09\u65b9\u5e93\u4e5f\u53ef\u4ee5\u4f7f\u7528\uff0c\u4f8b\u5982",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/niftylettuce/frisbee"}),"frisbee"),"\u6216\u662f",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mzabriskie/axios"}),"axios"),"\u7b49\u3002\u4f46\u6ce8\u610f\u4e0d\u80fd\u4f7f\u7528 jQuery\uff0c\u56e0\u4e3a jQuery \u4e2d\u8fd8\u4f7f\u7528\u4e86\u5f88\u591a\u6d4f\u89c8\u5668\u4e2d\u624d\u6709\u800c RN \u4e2d\u6ca1\u6709\u7684\u4e1c\u897f\uff08\u6240\u4ee5\u4e5f\u4e0d\u662f\u6240\u6709 web \u4e2d\u7684 ajax \u5e93\u90fd\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\uff09\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'const request = new XMLHttpRequest();\nrequest.onreadystatechange = e => {\n  if (request.readyState !== 4) {\n    return;\n  }\n\n  if (request.status === 200) {\n    console.log("success", request.responseText);\n  } else {\n    console.warn("error");\n  }\n};\n\nrequest.open("GET", "https://mywebsite.com/endpoint/");\nrequest.send();\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5b89\u5168\u673a\u5236\u4e0e\u7f51\u9875\u73af\u5883\u6709\u6240\u4e0d\u540c\uff1a\u5728\u5e94\u7528\u4e2d\u4f60\u53ef\u4ee5\u8bbf\u95ee\u4efb\u4f55\u7f51\u7ad9\uff0c\u6ca1\u6709",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Cross-origin_resource_sharing"}),"\u8de8\u57df"),"\u7684\u9650\u5236\u3002")),Object(o.b)("h2",{id:"websocket-\u652f\u6301"},"WebSocket \u652f\u6301"),Object(o.b)("p",null,"React Native \u8fd8\u652f\u6301",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSocket"}),"WebSocket"),"\uff0c\u8fd9\u79cd\u534f\u8bae\u53ef\u4ee5\u5728\u5355\u4e2a TCP \u8fde\u63a5\u4e0a\u63d0\u4f9b\u5168\u53cc\u5de5\u7684\u901a\u4fe1\u4fe1\u9053\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'const ws = new WebSocket("ws://host.com/path");\n\nws.onopen = () => {\n  // connection opened\n  ws.send("something"); // send a message\n};\n\nws.onmessage = e => {\n  // a message was received\n  console.log(e.data);\n};\n\nws.onerror = e => {\n  // an error occurred\n  console.log(e.message);\n};\n\nws.onclose = e => {\n  // connection closed\n  console.log(e.code, e.reason);\n};\n')),Object(o.b)("h2",{id:"high-five"},"High Five!"),Object(o.b)("p",null,"\u73b0\u5728\u4f60\u7684\u5e94\u7528\u5df2\u7ecf\u53ef\u4ee5\u4ece\u5404\u79cd\u6e20\u9053\u83b7\u53d6\u6570\u636e\u4e86\uff0c\u90a3\u4e48\u63a5\u4e0b\u6765\u9762\u4e34\u7684\u95ee\u9898\u591a\u534a\u5c31\u662f\u5982\u4f55\u5728\u4e0d\u540c\u7684\u9875\u9762\u95f4\u7ec4\u7ec7\u548c\u4e32\u8054\u5185\u5bb9\u4e86\u3002\u8981\u7ba1\u7406\u9875\u9762\u7684\u8df3\u8f6c\uff0c\u4f60\u9700\u8981\u5b66\u4e60",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/navigation"}),"\u4f7f\u7528\u5bfc\u822a\u5668\u8df3\u8f6c\u9875\u9762"),"\u3002"),Object(o.b)("h2",{id:"known-issues-with-fetch-and-cookie-based-authentication"},"Known Issues with ",Object(o.b)("inlineCode",{parentName:"h2"},"fetch")," and cookie based authentication"),Object(o.b)("p",null,"The following options are currently not working with ",Object(o.b)("inlineCode",{parentName:"p"},"fetch")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"redirect:manual")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"credentials:omit"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Having same name headers on Android will result in only the latest one being present. A temporary solution can be found here: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/issues/18837#issuecomment-398779994"}),"https://github.com/facebook/react-native/issues/18837#issuecomment-398779994"),"."),Object(o.b)("li",{parentName:"ul"},"Cookie based authentication is currently unstable. You can view some of the issues raised here: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/issues/23185"}),"https://github.com/facebook/react-native/issues/23185")),Object(o.b)("li",{parentName:"ul"},"As a minimum on iOS, when redirected through a ",Object(o.b)("inlineCode",{parentName:"li"},"302"),", if a ",Object(o.b)("inlineCode",{parentName:"li"},"Set-Cookie")," header is present, the cookie is not set properly. Since the redirect cannot be handled manually this might cause a scenario where infinite requests occur if the redirect is the result of an expired session.")))}d.isMDXComponent=!0},413:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return n?r.a.createElement(m,i(i({ref:t},l),{},{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},414:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},415:function(e,t,n){"use strict";var a=n(0),r=n(416);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},416:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},417:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(415),c=n(414),i=n(62),s=n.n(i),l=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,u=e.values,p=e.groupId,d=e.className,m=Object(o.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,j=Object(a.useState)(i),O=j[0],v=j[1],y=a.Children.toArray(e.children);if(null!=p){var g=h[p];null!=g&&g!==O&&u.some((function(e){return e.value===g}))&&v(g)}var A=function(e){v(e),null!=p&&f(p,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return A(t)},onClick:function(){A(t)}},n)}))),t?Object(a.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},418:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},419:function(e,t,n){"use strict";var a=n(7),r=!!a.a.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!a.a.canUseDOM&&navigator.platform.startsWith("Win"),c=r?"ios":"android",i=r?"macos":o?"windows":"linux";t.a={defaultGuide:"native",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:c,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}}}]);