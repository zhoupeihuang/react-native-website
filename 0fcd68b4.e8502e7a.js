(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{115:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return l}));var n=a(3),i=a(8),o=(a(0),a(413)),r={id:"integration-with-android-fragment",title:"\u96c6\u6210\u5230 Android Fragment"},c={unversionedId:"integration-with-android-fragment",id:"version-0.63/integration-with-android-fragment",isDocsHomePage:!1,title:"\u96c6\u6210\u5230 Android Fragment",description:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(100.00%)",source:"@site/versioned_docs/version-0.63/integration-with-android-fragment.md",slug:"/integration-with-android-fragment",permalink:"/docs/integration-with-android-fragment",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/versioned_docs/version-0.63/integration-with-android-fragment.md",version:"0.63",lastUpdatedAt:1608733604,sidebar:"version-0.63/docs",previous:{title:"\u96c6\u6210\u5230\u73b0\u6709\u539f\u751f\u5e94\u7528",permalink:"/docs/integration-with-existing-apps"},next:{title:"\u4e3a\u7535\u89c6\u548c\u673a\u9876\u76d2\u5236\u4f5c\u5e94\u7528",permalink:"/docs/building-for-tv"}},p=[{value:"1. Add React Native to your app",id:"1-add-react-native-to-your-app",children:[]},{value:"2. Integrating your App with a React Native Fragment",id:"2-integrating-your-app-with-a-react-native-fragment",children:[]},{value:"Step 3. Add a FrameLayout for the React Native Fragment",id:"step-3-add-a-framelayout-for-the-react-native-fragment",children:[]},{value:"Step 4. Add a React Native Fragment to the FrameLayout",id:"step-4-add-a-react-native-fragment-to-the-framelayout",children:[]},{value:"Step 5. Test your integration",id:"step-5-test-your-integration",children:[]},{value:"Step 6. Additional setup - Native modules",id:"step-6-additional-setup---native-modules",children:[]}],d={toc:p};function l(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm10000"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",Object(o.b)("a",Object(n.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(100.00%)"),Object(o.b)("p",null,"The guide for ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.dev/docs/integration-with-existing-apps"}),"Integration with Existing Apps")," details how to integrate a full-screen React Native app into an existing Android app as an Activity. To use React Native components within Fragments in an existing app requires some additional setup. The benefit of this is that it allows for a native app to integrate React Native components alongside native fragments in an Activity."),Object(o.b)("h3",{id:"1-add-react-native-to-your-app"},"1. Add React Native to your app"),Object(o.b)("p",null,"Follow the guide for ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.dev/docs/integration-with-existing-apps"}),"Integration with Existing Apps")," until the Code integration section. Continue to follow Step 1. Create an ",Object(o.b)("inlineCode",{parentName:"p"},"index.android.js")," file and Step 2. Add your React Native code from this section."),Object(o.b)("h3",{id:"2-integrating-your-app-with-a-react-native-fragment"},"2. Integrating your App with a React Native Fragment"),Object(o.b)("p",null,'You can render your React Native component into a Fragment instead of a full screen React Native Activity. The component may be termed a "screen" or "fragment" and it will function in the same manner as an Android fragment, likely containing child components. These components can be placed in a ',Object(o.b)("inlineCode",{parentName:"p"},"/fragments")," folder and the child components used to compose the fragment can be placed in a ",Object(o.b)("inlineCode",{parentName:"p"},"/components")," folder."),Object(o.b)("p",null,"You will need to implement the ReactApplication interface in your main Application Java class. If you have created a new project from Android Studio with a default activity, you will need to create a new class e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"MyReactApplication.java"),". If it is an existing class you can find this main class in your ",Object(o.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," file. Under the ",Object(o.b)("inlineCode",{parentName:"p"},"<application />")," tag you should see a property ",Object(o.b)("inlineCode",{parentName:"p"},"android:name")," e.g. ",Object(o.b)("inlineCode",{parentName:"p"},'android:name=".MyReactApplication"'),". This value is the class you want to implement and provide the required methods to."),Object(o.b)("p",null,"Ensure your main Application Java class implements ReactApplication:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"public class MyReactApplication extends Application implements ReactApplication {...}\n")),Object(o.b)("p",null,"Override the required methods ",Object(o.b)("inlineCode",{parentName:"p"},"getUseDeveloperSupport"),", ",Object(o.b)("inlineCode",{parentName:"p"},"getPackages")," and ",Object(o.b)("inlineCode",{parentName:"p"},"getReactNativeHost"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"public class MyReactApplication extends Application implements ReactApplication {\n    @Override\n    public void onCreate() {\n        super.onCreate();\n        SoLoader.init(this, false);\n    }\n\n    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {\n        @Override\n        public boolean getUseDeveloperSupport() {\n            return BuildConfig.DEBUG;\n        }\n\n        protected List<ReactPackage> getPackages() {\n            List<ReactPackage> packages = new PackageList(this).getPackages();\n            // Packages that cannot be autolinked yet can be added manually here\n            return packages;\n        }\n    };\n\n    @Override\n    public ReactNativeHost getReactNativeHost() {\n        return mReactNativeHost;\n    }\n}\n")),Object(o.b)("p",null,"If you are using Android Studio, use Alt + Enter to add all missing imports in your class. Alternatively these are the required imports to include manually:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"import android.app.Application;\n\nimport com.facebook.react.PackageList;\nimport com.facebook.react.ReactApplication;\nimport com.facebook.react.ReactNativeHost;\nimport com.facebook.react.ReactPackage;\nimport com.facebook.soloader.SoLoader;\n\nimport java.util.List;\n")),Object(o.b)("p",null,'Perform a "Sync Project files with Gradle" operation.'),Object(o.b)("h3",{id:"step-3-add-a-framelayout-for-the-react-native-fragment"},"Step 3. Add a FrameLayout for the React Native Fragment"),Object(o.b)("p",null,"You will now add your React Native Fragment to an Activity. For a new project this Activity will be ",Object(o.b)("inlineCode",{parentName:"p"},"MainActivity")," but it could be any Activity and more fragments can be added to additional Activities as you integrate more React Native components into your app."),Object(o.b)("p",null,"First add the React Native Fragment to your Activity's layout. For example ",Object(o.b)("inlineCode",{parentName:"p"},"main_activity.xml")," in the ",Object(o.b)("inlineCode",{parentName:"p"},"res/layouts")," folder."),Object(o.b)("p",null,"Add a ",Object(o.b)("inlineCode",{parentName:"p"},"<FrameLayout>")," with an id, width and height. This is the layout you will find and render your React Native Fragment into."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<FrameLayout\n    android:id="@+id/reactNativeFragment"\n    android:layout_width="match_parent"\n    android:layout_height="match_parent" />\n')),Object(o.b)("h3",{id:"step-4-add-a-react-native-fragment-to-the-framelayout"},"Step 4. Add a React Native Fragment to the FrameLayout"),Object(o.b)("p",null,"To add your React Native Fragment to your layout you need to have an Activity. As mentioned in a new project this will be ",Object(o.b)("inlineCode",{parentName:"p"},"MainActivity"),". In this Activity add a button and an event listener. On button click you will render your React Native Fragment."),Object(o.b)("p",null,"Modify your Activity layout to add the button:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<Button\n    android:layout_margin="10dp"\n    android:id="@+id/button"\n    android:layout_width="match_parent"\n    android:layout_height="wrap_content"\n    android:text="Show react fragment" />\n')),Object(o.b)("p",null,"Now in your Activity class e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"MainActivity.java")," you need to add an OnClickListener for the button, instantiate your ReactFragment and add it to the frame layout."),Object(o.b)("p",null,"Add the button field to the top of your Activity:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"private Button mButton;\n")),Object(o.b)("p",null,"Update your Activity's onCreate method as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'@Override\nprotected void onCreate(Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n    setContentView(R.layout.main_activity);\n\n    mButton = findViewById(R.id.button);\n    mButton.setOnClickListener(new View.OnClickListener() {\n        public void onClick(View v) {\n            Fragment reactNativeFragment = new ReactFragment.Builder()\n                    .setComponentName("HelloWorld")\n                    .setLaunchOptions(getLaunchOptions("test message"))\n                    .build();\n\n            getSupportFragmentManager()\n                    .beginTransaction()\n                    .add(R.id.reactNativeFragment, reactNativeFragment)\n                    .commit();\n\n        }\n    });\n}\n')),Object(o.b)("p",null,"In the code above ",Object(o.b)("inlineCode",{parentName:"p"},"Fragment reactNativeFragment = new ReactFragment.Builder()")," creates the ReactFragment and ",Object(o.b)("inlineCode",{parentName:"p"},"getSupportFragmentManager().beginTransaction().add()")," adds the Fragment to the Frame Layout."),Object(o.b)("p",null,'If you are using a starter kit for React Native, replace the "HelloWorld" string with the one in your ',Object(o.b)("inlineCode",{parentName:"p"},"index.js")," or ",Object(o.b)("inlineCode",{parentName:"p"},"index.android.js")," file (it\u2019s the first argument to the AppRegistry.registerComponent() method)."),Object(o.b)("p",null,"Add the ",Object(o.b)("inlineCode",{parentName:"p"},"getLaunchOptions")," method which will allow you to pass props through to your component. This is optional and you can remove ",Object(o.b)("inlineCode",{parentName:"p"},"setLaunchOptions")," if you don't need to pass any props."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'private Bundle getLaunchOptions(String message) {\n    Bundle initialProperties = new Bundle();\n    initialProperties.putString("message", message);\n    return initialProperties;\n}\n')),Object(o.b)("p",null,"Add all missing imports in your Activity class. Be careful to use your package\u2019s BuildConfig and not the one from the facebook package! Alternatively these are the required imports to include manually:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"import android.app.Application;\n\nimport com.facebook.react.ReactApplication;\nimport com.facebook.react.ReactNativeHost;\nimport com.facebook.react.ReactPackage;\nimport com.facebook.react.shell.MainReactPackage;\nimport com.facebook.soloader.SoLoader;\n")),Object(o.b)("p",null,'Perform a "Sync Project files with Gradle" operation.'),Object(o.b)("h3",{id:"step-5-test-your-integration"},"Step 5. Test your integration"),Object(o.b)("p",null,"Make sure you run ",Object(o.b)("inlineCode",{parentName:"p"},"yarn")," to install your react-native dependencies and run ",Object(o.b)("inlineCode",{parentName:"p"},"yarn native")," to start the metro bundler. Run your android app in Android Studio and it should load the JavaScript code from the development server and display it in your React Native Fragment in the Activity."),Object(o.b)("h3",{id:"step-6-additional-setup---native-modules"},"Step 6. Additional setup - Native modules"),Object(o.b)("p",null,"You may need to call out to existing Java code from your react component. Native modules allow you to call out to native code and run methods in your native app. Follow the setup here ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.dev/docs/native-modules-android"}),"native-modules-android")))}l.isMDXComponent=!0},413:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return b}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=i.a.createContext({}),l=function(e){var t=i.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=l(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=l(a),m=n,b=s["".concat(r,".").concat(m)]||s[m]||u[m]||o;return a?i.a.createElement(b,c(c({ref:t},d),{},{components:a})):i.a.createElement(b,c({ref:t},d))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var d=2;d<o;d++)r[d]=a[d];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);