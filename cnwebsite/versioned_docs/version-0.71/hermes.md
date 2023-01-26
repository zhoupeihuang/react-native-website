---
id: hermes
title: 使用新的 Hermes 引擎
---

<a href="https://hermesengine.dev">
<img width={300} height={300} className="hermes-logo" src="/docs/assets/HermesLogo.svg" />
</a>

[Hermes](https://hermesengine.dev) 是专门针对 React Native 应用而优化的全新开源 JavaScript 引擎。对于很多应用来说，启用 Hermes 引擎可以优化启动时间，减少内存占用以及空间占用。从 React Native 0.70 版本开始 Hermes 已经默认启用，无需开发者再做任何配置。

## Bundled Hermes

React Native comes with a **bundled version** of Hermes.
We will be building a version of Hermes for you whenever we release a new version of React Native. This will make sure you're consuming a version of Hermes which is fully compatible with the version of React Native you're using.

Historically, we had problems with matching versions of Hermes with versions of React Native. This fully eliminates this problem, and offers users a JS engine that is compatible with the specific React Native version.

This change is fully transparent to users of React Native. You can still disable Hermes using the command described in this page.
You can [read more about the technical implementation on this page](/architecture/bundled-hermes).

## 确认 Hermes 引擎是否启用

If you've recently created a new app from scratch, you should see if Hermes is enabled in the welcome view:

![Where to find JS engine status in AwesomeProject](/docs/assets/HermesApp.jpg)

A `HermesInternal` global variable will be available in JavaScript that can be used to verify that Hermes is in use:

```jsx
const isHermes = () => !!global.HermesInternal;
```

:::caution 注意
If you are using a non-standard way of loading the JS bundle, it is possible that the `HermesInternal` variable is available but you aren't using the highly optimised pre-compiled bytecode.
Confirm that you are using the `.hbc` file and also benchmark the before/after as detailed below.
:::

To see the benefits of Hermes, try making a release build/deployment of your app to compare. For example:

```shell
$ npx react-native run-android --variant release
```

or for iOS:

```shell
$ npx react-native run-ios --configuration Release
```

This will compile JavaScript to bytecode during build time which will improve your app's startup speed on device.

## Debugging JS on Hermes using Google Chrome's DevTools

Hermes supports the Chrome debugger by implementing the Chrome inspector protocol. This means Chrome's tools can be used to directly debug JavaScript running on Hermes, on an emulator or on a real, physical, device.

:::info 提示
Note that this is very different with the "Remote JS Debugging" from the In-App Developer Menu documented in the [Debugging](debugging#debugging-using-a-custom-javascript-debugger) section, which actually runs the JS code on Chrome's V8 on your development machine (laptop or desktop).
:::

Chrome connects to Hermes running on device via Metro, so you'll need to know where Metro is listening. Typically this will be on `localhost:8081`, but this is [configurable](https://facebook.github.io/metro/docs/configuration). When running `yarn start` the address is written to stdout on startup.

Once you know where the Metro server is listening, you can connect with Chrome using the following steps:

1. Navigate to `chrome://inspect` in a Chrome browser instance.

2. Use the `Configure...` button to add the Metro server address (typically `localhost:8081` as described above).

![Configure button in Chrome DevTools devices page](/docs/assets/HermesDebugChromeConfig.png)

![Dialog for adding Chrome DevTools network targets](/docs/assets/HermesDebugChromeMetroAddress.png)

3. You should now see a "Hermes React Native" target with an "inspect" link which can be used to bring up debugger. If you don't see the "inspect" link, make sure the Metro server is running. ![Target inspect link](/docs/assets/HermesDebugChromeInspect.png)

4. You can now use the Chrome debug tools. For example, to breakpoint the next time some JavaScript is run, click on the pause button and trigger an action in your app which would cause JavaScript to execute. ![Pause button in debug tools](/docs/assets/HermesDebugChromePause.png)

## 在较早版本的 React Native 上启用 Hermes 引擎

Hermes 从 React Native 0.70 版本开始默认启用。下面会介绍如何在较早版本的 React Native 上启用 Hermes 引擎。
首先请确保你运行的 React Native 版本在 0.60.4 或以上。

如果你现有的项目运行的是较老的版本，那么必须要先[升级](/docs/upgrading)。升级之后请先确保应用仍然能正常工作，再往下看如何切换到 Hermes 引擎。

:::caution 关于兼容性的注意事项
Hermes 的各个版本需要严格匹配 RN 的版本。请查看[Hermes 的发布日志](https://github.com/facebook/hermes/releases)来确定其兼容的版本。若版本不匹配会导致应用直接崩溃。
:::

:::caution 对于 Windows 用户的注意事项
Hermes 需要 [Microsoft Visual C++ 2015 Redistributable](https://www.microsoft.com/en-us/download/details.aspx?id=48145)
:::

### Android

编辑 `android/app/gradle.properties` 文件并修改`hermesEnabled`项为true：

```diff
# Use this property to enable or disable the Hermes JS engine.
# If set to false, you will be using JSC instead.
hermesEnabled=true
```

:::note 备注
此属性自 React Native 0.71 版本开始才支持，如果在`gradle.properties` 文件中找不到，请在网站顶部导航条选择你当前的 React Native 版本，切换到那个版本的文档查看相应的操作。
:::

如果你使用 ProGuard，那么需要在 `proguard-rules.pro` 文件中添加如下规则：

```
-keep class com.facebook.hermes.unicode.** { *; }
-keep class com.facebook.jni.** { *; }
```

如果在这之前已经编译过应用，那么需要清理下编译缓存：

```shell
$ cd android && ./gradlew clean
```

这样就完成了，然后可以正常编译并继续开发和部署了：

```shell
$ npx react-native run-android
```

:::note 备注 关于 Android App Bundles 格式的支持
Android app bundles 格式从 react-native 0.62.0 版本开始支持。
:::

### iOS

从 React Native 0.64 版本开始， Hermes 也支持在 iOS 上运行（且能够正常上架）。编辑`ios/Podfile`文件并做如下修改：

```diff
   use_react_native!(
     :path => config[:reactNativePath],
     # to enable hermes on iOS, change `false` to `true` and then install pods
     # By default, Hermes is disabled on Old Architecture, and enabled on New Architecture.
     # You can enable/disable it manually by replacing `flags[:hermes_enabled]` with `true` or `false`.
-    :hermes_enabled => flags[:hermes_enabled],
+    :hermes_enabled => true
   )
```

By default, you will be using Hermes if you're on the New Architecture. By specifying a value such
as `true` or `false` you can enable/disable Hermes as you wish.

Once you've configured it, you can install the Hermes pods with:

```shell
$ cd ios && pod install
```

That's it! You should now be able to develop and deploy your app as usual:

```shell
$ npx react-native run-ios
```

## 切换回 JavaScriptCore 引擎

React Native 也仍然支持使用 JavaScriptCore 作为[运行环境](javascript-environment)。请按以下说明进行切换。

### Android

编辑 `android/app/gradle.properties` 文件并修改`hermesEnabled`项为false：

```diff
# Use this property to enable or disable the Hermes JS engine.
# If set to false, you will be using JSC instead.
hermesEnabled=false
```

### iOS

Edit your `ios/Podfile` file and make the change illustrated below:

```diff
   use_react_native!(
     :path => config[:reactNativePath],
     # Hermes is now enabled by default. Disable by setting this flag to false.
     # Upcoming versions of React Native may rely on get_default_flags(), but
     # we make it explicit here to aid in the React Native upgrade process.
-    :hermes_enabled => flags[:hermes_enabled],
+    :hermes_enabled => false,
   )
```