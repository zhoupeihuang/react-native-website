(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{161:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(8),o=(t(0),t(413)),i={id:"headless-js-android",title:"Headless JS\uff08\u540e\u53f0\u4efb\u52a1\uff09"},c={unversionedId:"headless-js-android",id:"headless-js-android",isDocsHomePage:!1,title:"Headless JS\uff08\u540e\u53f0\u4efb\u52a1\uff09",description:"Headless JS \u662f\u4e00\u79cd\u4f7f\u7528 js \u5728\u540e\u53f0\u6267\u884c\u4efb\u52a1\u7684\u65b9\u6cd5\u3002\u5b83\u53ef\u4ee5\u7528\u6765\u5728\u540e\u53f0\u540c\u6b65\u6570\u636e\u3001\u5904\u7406\u63a8\u9001\u901a\u77e5\u6216\u662f\u64ad\u653e\u97f3\u4e50\u7b49\u7b49\u3002",source:"@site/../cndocs/headless-js-android.md",slug:"/headless-js-android",permalink:"/docs/next/headless-js-android",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/headless-js-android.md",version:"current",lastUpdatedAt:1608730528,sidebar:"docs",previous:{title:"\u76f4\u63a5\u64cd\u4f5c",permalink:"/docs/next/direct-manipulation"},next:{title:"\u6253\u5305APK",permalink:"/docs/next/signed-apk-android"}},s=[{value:"JS \u7aef\u7684 API",id:"js-\u7aef\u7684-api",children:[]},{value:"Java \u7aef\u7684 API",id:"java-\u7aef\u7684-api",children:[]},{value:"\u91cd\u8bd5",id:"\u91cd\u8bd5",children:[]},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}],l={toc:s};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Headless JS \u662f\u4e00\u79cd\u4f7f\u7528 js \u5728\u540e\u53f0\u6267\u884c\u4efb\u52a1\u7684\u65b9\u6cd5\u3002\u5b83\u53ef\u4ee5\u7528\u6765\u5728\u540e\u53f0\u540c\u6b65\u6570\u636e\u3001\u5904\u7406\u63a8\u9001\u901a\u77e5\u6216\u662f\u64ad\u653e\u97f3\u4e50\u7b49\u7b49\u3002"),Object(o.b)("h2",{id:"js-\u7aef\u7684-api"},"JS \u7aef\u7684 API"),Object(o.b)("p",null,"\u9996\u5148\u6211\u4eec\u8981\u901a\u8fc7",Object(o.b)("inlineCode",{parentName:"p"},"AppRegistry"),"\u6765\u6ce8\u518c\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570\uff0c\u8fd9\u4e2a\u51fd\u6570\u6211\u4eec\u79f0\u4e4b\u4e3a\u201c\u4efb\u52a1\u201d\u3002\u6ce8\u518c\u65b9\u5f0f\u7c7b\u4f3c\u5728 index.js \u4e2d\u6ce8\u518c RN \u5e94\u7528\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { AppRegistry } from 'react-native';\nAppRegistry.registerHeadlessTask('SomeTaskName', () =>\n  require('SomeTaskName')\n);\n")),Object(o.b)("p",null,"\u7136\u540e\u521b\u5efa require \u4e2d\u5f15\u7528\u7684",Object(o.b)("inlineCode",{parentName:"p"},"SomeTaskName.js"),"\u6587\u4ef6:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"module.exports = async taskData => {\n  // \u8981\u505a\u7684\u4efb\u52a1\n};\n")),Object(o.b)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4efb\u52a1\u4e2d\u5904\u7406\u4efb\u4f55\u4e8b\u60c5\uff08\u7f51\u7edc\u8bf7\u6c42\u3001\u5b9a\u65f6\u5668\u7b49\u7b49\uff09\uff0c\u4f46\u552f\u72ec",Object(o.b)("strong",{parentName:"p"},"\u4e0d\u8981\u6d89\u53ca\u7528\u6237\u754c\u9762"),"\uff01\u5728\u4efb\u52a1\u5b8c\u6210\u540e\uff08\u4f8b\u5982\u5728 promise \u4e2d\u8c03\u7528 resolve\uff09\uff0cRN \u4f1a\u8fdb\u5165\u4e00\u4e2a\u201c\u6682\u505c\u201d\u6a21\u5f0f\uff0c\u76f4\u5230\u6709\u65b0\u4efb\u52a1\u9700\u8981\u6267\u884c\u6216\u8005\u662f\u5e94\u7528\u56de\u5230\u524d\u53f0\u3002"),Object(o.b)("h2",{id:"java-\u7aef\u7684-api"},"Java \u7aef\u7684 API"),Object(o.b)("p",null,"\u6ca1\u9519\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u4e00\u4e9b\u539f\u751f\u4ee3\u7801\uff0c\u4f46\u662f\u8bf7\u653e\u5fc3\u5e76\u4e0d\u9ebb\u70e6\u3002\u9996\u5148\u9700\u8981\u50cf\u4e0b\u9762\u8fd9\u6837\u7ee7\u627f",Object(o.b)("inlineCode",{parentName:"p"},"HeadlessJsTaskService"),"\uff0c\u7136\u540e\u8986\u76d6",Object(o.b)("inlineCode",{parentName:"p"},"getTaskConfig"),"\u65b9\u6cd5\u7684\u5b9e\u73b0\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'package com.your_application_name;\nimport android.content.Intent;\nimport android.os.Bundle;\nimport com.facebook.react.HeadlessJsTaskService;\nimport com.facebook.react.bridge.Arguments;\nimport com.facebook.react.jstasks.HeadlessJsTaskConfig;\nimport javax.annotation.Nullable;\n\npublic class MyTaskService extends HeadlessJsTaskService {\n\n  @Override\n  protected @Nullable HeadlessJsTaskConfig getTaskConfig(Intent intent) {\n    Bundle extras = intent.getExtras();\n    if (extras != null) {\n      return new HeadlessJsTaskConfig(\n          "SomeTaskName",\n          Arguments.fromBundle(extras),\n          5000, // \u4efb\u52a1\u7684\u8d85\u65f6\u65f6\u95f4\n          false // \u53ef\u9009\u53c2\u6570\uff1a\u662f\u5426\u5141\u8bb8\u4efb\u52a1\u5728\u524d\u53f0\u8fd0\u884c\uff0c\u9ed8\u8ba4\u4e3afalse\n        );\n    }\n    return null;\n  }\n}\n')),Object(o.b)("p",null,"\u7136\u540e\u8bb0\u5f97\u628a\u670d\u52a1\u6dfb\u52a0\u5230",Object(o.b)("inlineCode",{parentName:"p"},"AndroidManifest"),"\u6587\u4ef6\u91cc\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'<service android:name="com.example.MyTaskService" />\n')),Object(o.b)("p",null,"\u597d\u4e86\uff0c\u73b0\u5728\u5f53\u4f60",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.android.com/reference/android/content/Context.html#startService(android.content.Intent)"}),"\u542f\u52a8\u670d\u52a1\u65f6"),"\uff08\u4f8b\u5982\u4e00\u4e2a\u5468\u671f\u6027\u7684\u4efb\u52a1\u6216\u662f\u54cd\u5e94\u4e00\u4e9b\u7cfb\u7edf\u4e8b\u4ef6/\u5e7f\u64ad\uff09\uff0cJS \u4efb\u52a1\u5c31\u4f1a\u5f00\u59cb\u6267\u884c\u3002\u4f8b\u5982\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'Intent service = new Intent(getApplicationContext(), MyTaskService.class);\nBundle bundle = new Bundle();\n\nbundle.putString("foo", "bar");\nservice.putExtras(bundle);\n\ngetApplicationContext().startService(service);\n')),Object(o.b)("h2",{id:"\u91cd\u8bd5"},"\u91cd\u8bd5"),Object(o.b)("p",null,"By default, the headless JS task will not perform any retries. In order to do so, you need to create a ",Object(o.b)("inlineCode",{parentName:"p"},"HeadlessJsRetryPolicy")," and throw a specfic ",Object(o.b)("inlineCode",{parentName:"p"},"Error"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"LinearCountingRetryPolicy")," is an implementation of ",Object(o.b)("inlineCode",{parentName:"p"},"HeadlessJsRetryPolicy")," that allows you to specify a maximum number of retries with a fixed delay between each attempt. If that does not suit your needs then you can easily implement your own ",Object(o.b)("inlineCode",{parentName:"p"},"HeadlessJsRetryPolicy"),". These policies can simply be passed as an extra argument to the ",Object(o.b)("inlineCode",{parentName:"p"},"HeadlessJsTaskConfig")," constructor, e.g."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"HeadlessJsRetryPolicy retryPolicy = new LinearCountingRetryPolicy(\n3, // Max number of retry attempts\n1000 // Delay between each retry attempt\n);\nreturn new HeadlessJsTaskConfig(\n'SomeTaskName',\nArguments.fromBundle(extras),\n5000,\nfalse,\nretryPolicy\n);\n")),Object(o.b)("p",null,"A retry attempt will only be made when a specific ",Object(o.b)("inlineCode",{parentName:"p"},"Error")," is thrown. Inside a headless JS task, you can import the error and throw it when a retry attempt is required."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import {HeadlessJsTaskError} from 'HeadlessJsTask';\nmodule.exports = async (taskData) => {\nconst condition = ...;\nif (!condition) {\n  throw new HeadlessJsTaskError();\n}\n};\n")),Object(o.b)("p",null,"If you wish all errors to cause a retry attempt, you will need to catch them and throw the above error."),Object(o.b)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The function passed to ",Object(o.b)("inlineCode",{parentName:"li"},"setTimeout")," does not always behave as expected. Instead the function is called only when the application is launched again. If you just need to wait, use the retry functionality.")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u5e94\u7528\u6b63\u5728\u524d\u53f0\u8fd0\u884c\u65f6\u5c1d\u8bd5\u6267\u884c\u4efb\u52a1\uff0c\u90a3\u4e48\u5e94\u7528\u4f1a\u5d29\u6e83\u3002\u8fd9\u662f\u4e3a\u4e86\u9632\u6b62\u5f00\u53d1\u8005\u5728\u4efb\u52a1\u4e2d\u5904\u7406\u592a\u591a\u903b\u8f91\u800c\u62d6\u6162\u7528\u6237\u754c\u9762\u3002\u5982\u679c\u4f60\u5fc5\u987b\u8981\u8fd9\u4e48\u505a\uff0c\u90a3\u4e48\u53ef\u4ee5\u8bbe\u7f6e\u7b2c\u56db\u4e2a\u53c2\u6570\u4e3a",Object(o.b)("inlineCode",{parentName:"li"},"false"),"\u6765\u66f4\u6539\u8fd9\u4e00\u9650\u5236\u3002"),Object(o.b)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u662f\u901a\u8fc7",Object(o.b)("inlineCode",{parentName:"li"},"BroadcastReceiver"),"\u6765\u542f\u52a8\u7684\u670d\u52a1\uff0c\u90a3\u4e48\u8c28\u8bb0\u5728\u4ece",Object(o.b)("inlineCode",{parentName:"li"},"onReceive()"),"\u8fd4\u56de\u4e4b\u524d\u8981\u8c03\u7528",Object(o.b)("inlineCode",{parentName:"li"},"HeadlessJsTaskService.acquireWakeLockNow()"),"\u3002")),Object(o.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(o.b)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 Java API \u6765\u5f00\u542f\u4e00\u4e2a service\u3002. First you need to decide when the service should be started and implement your solution accordingly. Here is a simple example that reacts to network connection change."),Object(o.b)("p",null,"Following lines shows part of Android manifest file for registering broadcast receiver."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<receiver android:name=".NetworkChangeReceiver" >\n  <intent-filter>\n    <action android:name="android.net.conn.CONNECTIVITY_CHANGE" />\n  </intent-filter>\n</receiver>\n')),Object(o.b)("p",null,"Broadcast receiver then handles intent that was broadcasted in onReceive function. This is a great place to check whether your app is on foreground or not. If app is not on foreground we can prepare our intent to be started, with no information or additional information bundled using ",Object(o.b)("inlineCode",{parentName:"p"},"putExtra")," (keep in mind bundle can handle only parcelable values). In the end service is started and wakelock is acquired."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class NetworkChangeReceiver extends BroadcastReceiver {\n\n    @Override\n    public void onReceive(final Context context, final Intent intent) {\n        /**\n          \u8fd9\u90e8\u5206\u4ee3\u7801\u4f1a\u5728\u6bcf\u6b21\u7f51\u7edc\u72b6\u6001\u53d8\u5316\u65f6\u8c03\u7528\uff0c\u6bd4\u5982\u6389\u7ebf\u7684\u65f6\u5019\n        **/\n        if (!isAppOnForeground((context))) {\n            /**\n              \u542f\u52a8\u670d\u52a1\u5e76\u53d1\u9001\u5f53\u524d\u7684\u7f51\u7edc\u72b6\u6001\u4fe1\u606f\n            **/\n            boolean hasInternet = isNetworkAvailable(context);\n            Intent serviceIntent = new Intent(context, MyTaskService.class);\n            serviceIntent.putExtra("hasInternet", hasInternet);\n            context.startService(serviceIntent);\n            HeadlessJsTaskService.acquireWakeLockNow(context);\n        }\n    }\n\n    private boolean isAppOnForeground(Context context) {\n        /**\n          \u6211\u4eec\u9700\u8981\u5148\u68c0\u67e5\u5e94\u7528\u5f53\u524d\u662f\u5426\u5728\u524d\u53f0\u8fd0\u884c\uff0c\u5426\u5219\u5e94\u7528\u4f1a\u5d29\u6e83\u3002\n         http://stackoverflow.com/questions/8489993/check-android-application-is-in-foreground-or-not\n        **/\n        ActivityManager activityManager = (ActivityManager) context.getSystemService(Context.ACTIVITY_SERVICE);\n        List<ActivityManager.RunningAppProcessInfo> appProcesses =\n        activityManager.getRunningAppProcesses();\n        if (appProcesses == null) {\n            return false;\n        }\n        final String packageName = context.getPackageName();\n        for (ActivityManager.RunningAppProcessInfo appProcess : appProcesses) {\n            if (appProcess.importance ==\n            ActivityManager.RunningAppProcessInfo.IMPORTANCE_FOREGROUND &&\n             appProcess.processName.equals(packageName)) {\n                return true;\n            }\n        }\n        return false;\n    }\n\n    public static boolean isNetworkAvailable(Context context) {\n        ConnectivityManager cm = (ConnectivityManager)\n        context.getSystemService(Context.CONNECTIVITY_SERVICE);\n        NetworkInfo netInfo = cm.getActiveNetworkInfo();\n        return (netInfo != null && netInfo.isConnected());\n    }\n\n\n}\n')))}p.isMDXComponent=!0},413:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return t?r.a.createElement(m,c(c({ref:n},l),{},{components:t})):r.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);