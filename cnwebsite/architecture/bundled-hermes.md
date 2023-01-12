---
id: bundled-hermes
title: 内置 Hermes 引擎
---

本页面综述了 Hermes 与 React Native 是**如何被构造**的。

如果你要找的是如何在你的应用中使用 Hermes，可以从其他页面中找到帮助文档[using Hermes](/docs/hermes)。

:::caution
请注意这篇文章将会深入这一技术细节，因此目标读者为基于 Hermes 或 React Native 构建拓展的用户。React Native 的一般用户并不需要了解 React Native 与 Hermes 如何交互的深入细节。
:::

## 什么是 'Bundled Hermes'

在 React Native 0.69.0 版本后，React Native 的每个版本都会**伴随**一个 Hermes 版本。我们把这种发布模型称作 **Bundled Hermes**。

因此在 0.69 版本之后，对每个可以公开使用的 React Native 版本，你都可以获得一个伴随该版本构建与测试的 JS 引擎。

## 为什么我们要迁移到 'Bundled Hermes'

历史版本中，React Native 和 Hermes 使用的是两套**不同的发布流程**，各自有不同的版本。 伴随着不同版本号的不同发布使得 OSS 生态十分困惑，一个特定的 Hermes 版本是否与 React Native 版本兼容(如，你需要知道 Hermes 0.11.0 至于 React Native 0.68.0 版本兼容，等等)。

Hermes 和 React Natives 共享了一份 JSI 代码([Hermes 中](https://github.com/facebook/hermes/tree/main/API/jsi/jsi)，[React Native 中](https://github.com/facebook/react-native/tree/main/ReactCommon/jsi/jsi))。如果两个 JSI 拷贝没有同步，Hermes 的构建将不能与 React Native 的构建兼容。更多详情可以了解[ABI 兼容性问题的讨论](https://github.com/react-native-community/discussions-and-proposals/issues/257)。

为了解决该问题，我们拓展了 React Native 的发布流程，它将下载并构建一份 Hermes 从而保证构建 Hermes 时使用了相同的 JSI 拷贝。

基于此流程，我们会在发布 React Native 版本时，同时发布一个与它**完全兼容**的 Hermes 版本。基于我们开发的 React Native 版本来迁移升级 Hermes 版本，因此叫做 _Bundled Hermes_。

## 这将会如何影响应用开发者

如同之前所介绍的，如果你是一个应用开发者，这个改动**将不会直接影响**你。

为了保证透明性，接下来的文件将解释我们在底层到底做了什么，并解释一些这样做的理由。

### iOS 用户

在 iOS 中，我们移动了你在使用的 `hermes-engine`。

在 React Native 0.69 以前，用户需要下载一个 pod(你可以在这里找到[podspec](https://github.com/CocoaPods/Specs/blob/master/Specs/5/d/0/hermes-engine/0.11.0/hermes-engine.podspec.json))。

在 React Native 0.69 中，用户不再需要额外使用 podspec，它被定义在 `react-native` NPM 包中的 `sdks/hermes-engine/hermes-engine.podspec` 文件替换了。
这个 podspec 依赖于一个预编译的 Hermes 压缩包(tarball)，该压缩包是作为 React Native 发布流程的一部分被上传到 GitHub Releases。(如，[这次发布中的资产](https://github.com/facebook/react-native/releases/tag/v0.69.0-rc.6))

### Android 用户

在 Android 中，我们将以如下方式更新 [`android/app/build.gradle`](https://github.com/facebook/react-native/blob/main/template/android/app/build.gradle) 文件的默认模板。

```diff
dependencies {
    // ...

    if (enableHermes) {
+       implementation("com.facebook.react:hermes-engine:+") {
+           exclude group:'com.facebook.fbjni'
+       }
-       def hermesPath = "../../node_modules/hermes-engine/android/";
-       debugImplementation files(hermesPath + "hermes-debug.aar")
-       releaseImplementation files(hermesPath + "hermes-release.aar")
    } else {
        implementation jscFlavor
    }
}
```

React Native 0.69 之前，用户将会使用来自 `hermes-engine` NPM package 的 `hermes-debug.aar` 和 `hermes-release.aar`。
请注意，我们将会在 React Native 未来的某一个版本，完全[去除](https://github.com/facebook/react-native/blob/c418bf4c8fe8bf97273e3a64211eaa38d836e0a0/package.json#L105)对 `hermes-engine`的依赖。

#### 新架构下的 Android 用户

由于我们原始代码初始化构建的原理(如，我们怎样使用 NDK)，使用新架构的用户将会**从源码构建 Hermes**

这为新架构上的用户调整了 React Native 和 Hermes 的构建机制(他们将从源代码构建这两个框架)。

这意味着此类 Android 用户在首次构建时可能会在构建时遇到性能下降。

你可以在[加速你的构建阶段](/docs/next/build-speed)中找到优化构建时间和减少对你构建影响的帮助。

#### 使用 windows 构建新架构的 Android 用户

在 Windows 机器上构建新架构下的 React Native 应用需要执行以下额外步骤来使得构建可以正确工作。

- 确保[正确的配置环境](https://reactnative.dev/docs/environment-setup)，包括 Android SDK 和 node。
- 安装带有 Chocolatey 的[cmake](https://community.chocolatey.org/packages/cmake)。
- 安装下面中的一个：
  - [Build Tools for Visual Studio 2022](https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022)。
  - [Visual Studio 22 Community Edition](https://visualstudio.microsoft.com/vs/community/) - 只选择 C++ desktop development (C++ 桌面开发) 就足够了。
- 确保 [Visual Studio Command Prompt](https://docs.microsoft.com/en-us/visualstudio/ide/reference/command-prompt-powershell?view=vs-2022) 正确配置。在这些命令行环境中配置了正确的 C++ 编译器环境变量。
- 在 Visual Studio Command Prompt 中通过 `npx react-native run-android` 运行应用。

### 用户还可以使用其他引擎么?

可以，用户可以自由的使用/禁用 Hermes (在 Android 中 `enableHermes` 变量控制，在 iOS 中是 `hermes_enabled`)。
'Bundled Hermes' 改动对你来说只影响了 **Hermes 如何被构建和打包**。

请注意，在写作这篇文章时，`enableHermes`/`hermes_enabled` 的默认值为`false`。 我们会在不久的将来寻找一个升级模板的机会， 来将默认值升级为`true`。

## 这个改动如何影响贡献者和拓展开发者

如果您是 React Native 的贡献者，或者您正在 React Native 或 Hermes 之上构建扩展，请进一步阅读我们解释 Bundled Hermes 的工作原理。

### Bundled Hermes 底层是如何工作的?

这种机制依赖于在 facebook/react-native 代码库中，到 facebook/hermes 存储库中**下载源码压缩包**的机制。我们为其他原生依赖项（Folly、Glog 等）制定了类似的机制，并且我们让 Hermes 遵循相同的设置。

当从 `main` 构建 React Native 时，我们将获取 facebook/hermes 的 `main` 分支压缩包，并将其构建为 React Native 构建过程的一部分。

当从发布分支（比如 `0.69-stable`）构建 React Native 时，我们将在 Hermes 仓库上使用 **标签**来在两个仓库之间**同步代码**。然后，使用的特定标签名称将存储在 React Native 的发布分支中的 `sdks/.hermesversion` 文件中（例如在 0.69 发布分支上[文件](https://github.com/facebook/react-native/blob/0.69-stable/sdks/.hermesversion)）。

从某种意义上说，您可以将此方法视为类似于 **git submodule**。

如果你在 Hermes 之上构建，你可以依靠这些标签来了解在构建 React Native 时使用了哪个版本的 Hermes，因为标签名称中指定了 React Native 的版本（如 `hermes-2022-05- 20-RNv0.69.0-ee8941b8874132b8f83e4486b63ed5c19fc3f111`）。

#### Android 实现细节

为了在 Android 上实现，我们在 React Native 的 `/ReactAndroid/hermes-engine` 中添加了一个新的构建，它将负责构建 Hermes 和打包以供使用（[更多上下文请参见此处](https://github.com/facebook/react-native/pull/33396)）。

您现在可以在 React Native `main` 分支下，通过调用以下命令来触发 Hermes 引擎的构建：

```bash
// Build a debug version of Hermes
./gradlew :ReactAndroid:hermes-engine:assembleDebug
// Build a release version of Hermes
./gradlew :ReactAndroid:hermes-engine:assembleRelease
```

您不需要在您的机器上安装额外的工具（例如 `cmake`、`ninja` 或 `python3`），因为我们将构建配置为使用这些工具的 NDK 版本。

在 Gradle 使用者方面，我们也进行了一些小改进：我们从`releaseImplementation`和`debugImplementation`转移到`implementation`。 这是可性的，因为较新的 `hermes-engine` Android 工件是 **variant aware** 的，并且将正确匹配引擎的调试版本与您的应用程序的调试版本。您在这里不需要任何自定义配置（即使您使用 `staging` 或其他构建类型/风格）。

但是，这需要在模板中添加这一行：

```
exclude group:'com.facebook.fbjni'
```

需要这一行是因为 React Native 以非预制方法（即解压缩 .aar 和提取 .so 文件）使用 `fbjni`。 Hermes-engine 和其他库正在使用 prefab 代替使用 fbjni。 我们正在研究将来 [解决此问题](https://github.com/facebook/react-native/pull/33397)，从而只需要一行代码就可以导入 Hermes。

#### iOS 实现细节

iOS 实现依赖于位于以下位置的一系列脚本：

- [`/scripts/hermes`](https://github.com/facebook/react-native/tree/main/scripts/hermes)。 这些脚本包含下载 hermes 压缩包、解压缩和配置 iOS 构建的逻辑。如果您将 `hermes_enabled` 字段设置为 `true`，它们将在 `pod install` 时被调用。
- [`/sdks/hermes-engine`](https://github.com/facebook/react-native/tree/main/sdks/hermes-engine)。 这些脚本包含有效构建 Hermes 的构建逻辑。它们是从 `facebook/hermes` 存储库复制的，并加以改造以便在 React Native 中正常工作。具体来说，`utils` 文件夹中的脚本负责为所有 Mac 平台构建 Hermes。

要为 iOS 分发预构建，我们依赖 CircleCI 上的 `build_hermes_macos` 任务。该作业将生成一个压缩包产物，该压缩包将由 `hermes-engine` podspec 下载（即 [React Native 0.69 执行所需的资源](https://app.circleci.com/pipelines/github/facebook/react-native/13679/workflows/5172f8e4-6b02-4ccb-ab97-7cb954911fae/jobs/258701/artifacts)）。

### 我担心这个改动会影响我

我们想强调的是，这本质上是对 Hermes 在 _哪里_ 进行构建以及代码是 _如何_ 在两个存储库之间进行同步的组织更改。 更改应该对我们的用户完全透明。

从历史上看，我们曾经为特定版本的 React Native 做过 Hermes 的发布（例如 [`v0.11.0 for RN0.68.x`](https://github.com/facebook/hermes/releases/tag/v0.11.0))。

使用 'Bundled Hermes'，您可以改为依赖一个代表你所使用的特定版本的 React Native 的标签。
