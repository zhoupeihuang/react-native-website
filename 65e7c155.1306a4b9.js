(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{227:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(8),r=(n(0),n(413)),o={id:"custom-webview-android",title:"Custom WebView"},l={unversionedId:"custom-webview-android",id:"version-0.63/custom-webview-android",isDocsHomePage:!1,title:"Custom WebView",description:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(100.00%)",source:"@site/versioned_docs/version-0.63/custom-webview-android.md",slug:"/custom-webview-android",permalink:"/docs/custom-webview-android",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/versioned_docs/version-0.63/custom-webview-android.md",version:"0.63",lastUpdatedAt:1608733604},c=[{value:"Native Code",id:"native-code",children:[{value:"Adding New Properties",id:"adding-new-properties",children:[]},{value:"Adding New Events",id:"adding-new-events",children:[]}]},{value:"JavaScript Interface",id:"javascript-interface",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm10000"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",Object(r.b)("a",Object(a.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(100.00%)"),Object(r.b)("p",null,"While the built-in web view has a lot of features, it is not possible to handle every use-case in React Native. You can, however, extend the web view with native code without forking React Native or duplicating all the existing web view code."),Object(r.b)("p",null,"Before you do this, you should be familiar with the concepts in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"native-components-android"}),"native UI components"),". You should also familiarise yourself with the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/ReactAndroid/src/main/java/com/facebook/react/views/webview/ReactWebViewManager.java"}),"native code for web views"),", as you will have to use this as a reference when implementing new features\u2014although a deep understanding is not required."),Object(r.b)("h2",{id:"native-code"},"Native Code"),Object(r.b)("p",null,"To get started, you'll need to create a subclass of ",Object(r.b)("inlineCode",{parentName:"p"},"ReactWebViewManager"),", ",Object(r.b)("inlineCode",{parentName:"p"},"ReactWebView"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"ReactWebViewClient"),". In your view manager, you'll then need to override:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"createReactWebViewInstance")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"getName")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"addEventEmitters"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@ReactModule(name = CustomWebViewManager.REACT_CLASS)\npublic class CustomWebViewManager extends ReactWebViewManager {\n  /* This name must match what we\'re referring to in JS */\n  protected static final String REACT_CLASS = "RCTCustomWebView";\n\n  protected static class CustomWebViewClient extends ReactWebViewClient { }\n\n  protected static class CustomWebView extends ReactWebView {\n    public CustomWebView(ThemedReactContext reactContext) {\n      super(reactContext);\n    }\n  }\n\n  @Override\n  protected ReactWebView createReactWebViewInstance(ThemedReactContext reactContext) {\n    return new CustomWebView(reactContext);\n  }\n\n  @Override\n  public String getName() {\n    return REACT_CLASS;\n  }\n\n  @Override\n  protected void addEventEmitters(ThemedReactContext reactContext, WebView view) {\n    view.setWebViewClient(new CustomWebViewClient());\n  }\n}\n')),Object(r.b)("p",null,"You'll need to follow the usual steps to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/native-modules-android#register-the-module"}),"register the module"),"."),Object(r.b)("h3",{id:"adding-new-properties"},"Adding New Properties"),Object(r.b)("p",null,"To add a new property, you'll need to add it to ",Object(r.b)("inlineCode",{parentName:"p"},"CustomWebView"),", and then expose it in ",Object(r.b)("inlineCode",{parentName:"p"},"CustomWebViewManager"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class CustomWebViewManager extends ReactWebViewManager {\n  ...\n\n  protected static class CustomWebView extends ReactWebView {\n    public CustomWebView(ThemedReactContext reactContext) {\n      super(reactContext);\n    }\n\n    protected @Nullable String mFinalUrl;\n\n    public void setFinalUrl(String url) {\n        mFinalUrl = url;\n    }\n\n    public String getFinalUrl() {\n        return mFinalUrl;\n    }\n  }\n\n  ...\n\n  @ReactProp(name = "finalUrl")\n  public void setFinalUrl(WebView view, String url) {\n    ((CustomWebView) view).setFinalUrl(url);\n  }\n}\n')),Object(r.b)("h3",{id:"adding-new-events"},"Adding New Events"),Object(r.b)("p",null,"For events, you'll first need to make create event subclass."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'// NavigationCompletedEvent.java\npublic class NavigationCompletedEvent extends Event<NavigationCompletedEvent> {\n  private WritableMap mParams;\n\n  public NavigationCompletedEvent(int viewTag, WritableMap params) {\n    super(viewTag);\n    this.mParams = params;\n  }\n\n  @Override\n  public String getEventName() {\n    return "navigationCompleted";\n  }\n\n  @Override\n  public void dispatch(RCTEventEmitter rctEventEmitter) {\n    init(getViewTag());\n    rctEventEmitter.receiveEvent(getViewTag(), getEventName(), mParams);\n  }\n}\n')),Object(r.b)("p",null,"You can trigger the event in your web view client. You can hook existing handlers if your events are based on them."),Object(r.b)("p",null,"You should refer to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/ReactAndroid/src/main/java/com/facebook/react/views/webview/ReactWebViewManager.java"}),"ReactWebViewManager.java")," in the React Native codebase to see what handlers are available and how they are implemented. You can extend any methods here to provide extra functionality."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class NavigationCompletedEvent extends Event<NavigationCompletedEvent> {\n  private WritableMap mParams;\n\n  public NavigationCompletedEvent(int viewTag, WritableMap params) {\n    super(viewTag);\n    this.mParams = params;\n  }\n\n  @Override\n  public String getEventName() {\n    return "navigationCompleted";\n  }\n\n  @Override\n  public void dispatch(RCTEventEmitter rctEventEmitter) {\n    init(getViewTag());\n    rctEventEmitter.receiveEvent(getViewTag(), getEventName(), mParams);\n  }\n}\n\n// CustomWebViewManager.java\nprotected static class CustomWebViewClient extends ReactWebViewClient {\n  @Override\n  public boolean shouldOverrideUrlLoading(WebView view, String url) {\n    boolean shouldOverride = super.shouldOverrideUrlLoading(view, url);\n    String finalUrl = ((CustomWebView) view).getFinalUrl();\n\n    if (!shouldOverride && url != null && finalUrl != null && new String(url).equals(finalUrl)) {\n      final WritableMap params = Arguments.createMap();\n      dispatchEvent(view, new NavigationCompletedEvent(view.getId(), params));\n    }\n\n    return shouldOverride;\n  }\n}\n')),Object(r.b)("p",null,"Finally, you'll need to expose the events in ",Object(r.b)("inlineCode",{parentName:"p"},"CustomWebViewManager")," through ",Object(r.b)("inlineCode",{parentName:"p"},"getExportedCustomDirectEventTypeConstants"),". Note that currently, the default implementation returns ",Object(r.b)("inlineCode",{parentName:"p"},"null"),", but this may change in the future."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class CustomWebViewManager extends ReactWebViewManager {\n  ...\n\n  @Override\n  public @Nullable\n  Map getExportedCustomDirectEventTypeConstants() {\n    Map<String, Object> export = super.getExportedCustomDirectEventTypeConstants();\n    if (export == null) {\n      export = MapBuilder.newHashMap();\n    }\n    export.put("navigationCompleted", MapBuilder.of("registrationName", "onNavigationCompleted"));\n    return export;\n  }\n}\n')),Object(r.b)("h2",{id:"javascript-interface"},"JavaScript Interface"),Object(r.b)("p",null,"To use your custom web view, you'll need to create a class for it. Your class must:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Export all the prop types from ",Object(r.b)("inlineCode",{parentName:"li"},"WebView.propTypes")),Object(r.b)("li",{parentName:"ul"},"Return a ",Object(r.b)("inlineCode",{parentName:"li"},"WebView")," component with the prop ",Object(r.b)("inlineCode",{parentName:"li"},"nativeConfig.component")," set to your native component (see below)")),Object(r.b)("p",null,"To get your native component, you must use ",Object(r.b)("inlineCode",{parentName:"p"},"requireNativeComponent"),": the same as for regular custom components. However, you must pass in an extra third argument, ",Object(r.b)("inlineCode",{parentName:"p"},"WebView.extraNativeComponentConfig"),". This third argument contains prop types that are only required for native code."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'import React, { Component, PropTypes } from "react";\nimport { WebView, requireNativeComponent } from "react-native";\n\nexport default class CustomWebView extends Component {\n  static propTypes = WebView.propTypes;\n\n  render() {\n    return (\n      <WebView {...this.props} nativeConfig={{ component: RCTCustomWebView }} />\n    );\n  }\n}\n\nconst RCTCustomWebView = requireNativeComponent(\n  "RCTCustomWebView",\n  CustomWebView,\n  WebView.extraNativeComponentConfig\n);\n')),Object(r.b)("p",null,"If you want to add custom props to your native component, you can use ",Object(r.b)("inlineCode",{parentName:"p"},"nativeConfig.props")," on the web view."),Object(r.b)("p",null,"For events, the event handler must always be set to a function. This means it isn't safe to use the event handler directly from ",Object(r.b)("inlineCode",{parentName:"p"},"this.props"),", as the user might not have provided one. The standard approach is to create a event handler in your class, and then invoking the event handler given in ",Object(r.b)("inlineCode",{parentName:"p"},"this.props")," if it exists."),Object(r.b)("p",null,"If you are unsure how something should be implemented from the JS side, look at ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/Libraries/Components/WebView/WebView.android.js"}),"WebView.android.js")," in the React Native source."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'export default class CustomWebView extends Component {\n  static propTypes = {\n    ...WebView.propTypes,\n    finalUrl: PropTypes.string,\n    onNavigationCompleted: PropTypes.func\n  };\n\n  static defaultProps = {\n    finalUrl: "about:blank"\n  };\n\n  _onNavigationCompleted = event => {\n    const { onNavigationCompleted } = this.props;\n    onNavigationCompleted && onNavigationCompleted(event);\n  };\n\n  render() {\n    return (\n      <WebView\n        {...this.props}\n        nativeConfig={{\n          component: RCTCustomWebView,\n          props: {\n            finalUrl: this.props.finalUrl,\n            onNavigationCompleted: this._onNavigationCompleted\n          }\n        }}\n      />\n    );\n  }\n}\n')),Object(r.b)("p",null,"Just like for regular native components, you must provide all your prop types in the component to have them forwarded on to the native component. However, if you have some prop types that are only used internally in component, you can add them to the ",Object(r.b)("inlineCode",{parentName:"p"},"nativeOnly")," property of the third argument previously mentioned. For event handlers, you have to use the value ",Object(r.b)("inlineCode",{parentName:"p"},"true")," instead of a regular prop type."),Object(r.b)("p",null,"For example, if you wanted to add an internal event handler called ",Object(r.b)("inlineCode",{parentName:"p"},"onScrollToBottom"),", you would use,"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'const RCTCustomWebView = requireNativeComponent(\n  "RCTCustomWebView",\n  CustomWebView,\n  {\n    ...WebView.extraNativeComponentConfig,\n    nativeOnly: {\n      ...WebView.extraNativeComponentConfig.nativeOnly,\n      onScrollToBottom: true\n    }\n  }\n);\n')))}p.isMDXComponent=!0},413:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||r;return n?i.a.createElement(m,l(l({ref:t},s),{},{components:n})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);