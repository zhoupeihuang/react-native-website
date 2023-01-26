---
id: hermes
title: 使用新的 Hermes 引擎
---

<a href="https://hermesengine.dev">
<img width={300} height={300} className="hermes-logo" src="/docs/assets/HermesLogo.svg" />
</a>

[Hermes](https://hermesengine.dev) 是专门针对 React Native 应用而优化的全新开源 JavaScript 引擎。对于很多应用来说，启用 Hermes 引擎可以优化启动时间，减少内存占用以及空间占用。目前 Hermes 是一个**可选的**特性，本文档会为你介绍如何将其启用。

首先请确保你运行的 React Native 版本在 0.60.4 或以上。

如果你现有的项目运行的是较老的版本，那么必须要先升级。See [Upgrading to new React Native Versions](/docs/upgrading) for how to do this. After upgrading the app, make sure everything works before trying to switch to Hermes.

:::caution 关于兼容性的注意事项
Each Hermes release is aimed at a specific RN version. The rule of thumb is to always follow [Hermes releases](https://github.com/facebook/hermes/releases) strictly. Version mismatch can result in instant crash of your apps in the worst case scenario.
:::

:::caution 对于 Windows 用户的注意事项
Hermes 需要 [Microsoft Visual C++ 2015 Redistributable](https://www.microsoft.com/en-us/download/details.aspx?id=48145)
:::

## 启用 Hermes 引擎

### Android

编辑 `android/app/build.gradle` 文件并做如下修改：

```diff
  project.ext.react = [
      entryFile: "index.js",
-     enableHermes: false  // 
+     enableHermes: true  // 修改后需 clean 编译缓存并重新编译
  ]
```

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

:::note 关于 Android App Bundles 格式的支持
Android app bundles 格式从 react-native 0.62.0 版本开始支持。
:::

### iOS

从 React Native 0.64 版本开始， Hermes 也支持在 iOS 上运行（且能够正常上架）。 To enable Hermes for iOS, edit your `ios/Podfile` file and make the change illustrated below:

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

## 检查 Hermes 引擎是否启用

If you've recently created a new app from scratch, you should see if Hermes is enabled in the welcome view:

![Where to find JS engine status in AwesomeProject](/docs/assets/HermesApp.jpg)

A `HermesInternal` global variable will be available in JavaScript that can be used to verify that Hermes is in use:

```jsx
const isHermes = () => !!global.HermesInternal;
```

:::caution
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

## Bundled Hermes

Starting with React Native 0.69.0, every version of React Native will come with a **bundled version** of Hermes.
We will be building a version of Hermes for you whenever we release a new version of React Native. This will make sure you're consuming a version of Hermes which is fully compatible with the version of React Native you're using.

Historically, we had problems with matching versions of Hermes with versions of React Native. This fully eliminates this problem, and offers users a JS engine that is compatible with the specific React Native version.

This change is fully transparent to users of React Native. You can still enable/disable Hermes using the command described in this page.
You can [read more about the technical implementation on this page](/architecture/bundled-hermes).

## Debugging JS on Hermes using Google Chrome's DevTools

Hermes supports the Chrome debugger by implementing the Chrome inspector protocol. This means Chrome's tools can be used to directly debug JavaScript running on Hermes, on an emulator or on a real, physical, device.

:::info
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
