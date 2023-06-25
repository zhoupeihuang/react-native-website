---
id: react-18-and-react-native
title: React 18 与 React Native
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem'; import constants from '@site/core/TabsConstants';
import NewArchitectureWarning from './\_markdown-new-architecture-warning.mdx';

<NewArchitectureWarning/>

This page describes how to use React 18 with React Native using the React Native's New Architecture.

> **简而言之：** 第一个和 React 18 兼容的 React Native 版本是 **0.69.0**。但要想完整享受到 React 18 中的新特性（如自动批量变更状态， `startTransition`以及`useDeferredValue`等），你必须在应用中启用新架构。

## React 18 与 React Native 的新架构

React 18 引入了 [多个全新特性](https://reactjs.org/blog/2022/03/29/react-v18.html)：

- 自动批量变更状态 (Automatic batching)
- 新的严格模式 (Strict Mode)
- 新的 hooks (`useId`, `useSyncExternalStore`)

同时也包含了一些新的并发特性：

- `startTransition`
- `useTransition`
- `useDeferredValue`
- 完整的 Suspense 特性支持

The concurrent features in React 18 are built on top of the new concurrent rendering engine. Concurrent rendering is a new behind-the-scenes mechanism that enables React to prepare multiple versions of your UI at the same time.

Previous versions of React Native built on the old architecture **cannot** support concurrent rendering or concurrent features. This is because the old architecture relied on mutating the native trees, which doesn’t allow for React to prepare multiple versions of the tree at the same time.

Fortunately, the New Architecture was written bottom-up with concurrent rendering in mind, and is fully compatible with React 18. This means, in order to upgrade to React 18 in your React Native app, your application needs to be migrated to the React Native's New Architecture including Fabric and TurboModules.

## React 18 默认启用

从 React Native 0.69 开始， React 18 会在启用新架构的同时**默认启用**。

The means you’re able to use the new features in React 18 as soon as you migrate. Since the new concurrent features are opt-in by using features like `startTransition` or `Suspense`, we expect React 18 to work out-of-the-box with minimal changes for users who migrate to the New Architecture or create a new app with the New Architecture enabled.

However, if you do hit any issues, we provide an option to opt-out of the new root in React 18. Opt-ing out means your app will run in React 17 mode, and none of the features of React 18 will be accessible.

### 在 Android 上单独禁用 React 18

On Android, you will be able to override the `isConcurrentRootEnabled` in your ActivityDelegate (in the `MainActivity` file), and enable/disable Concurrent React.

<Tabs groupId="android-language" defaultValue={constants.defaultAndroidLanguage} values={constants.androidLanguages}>

<TabItem value="java">

```diff
public class MainActivity extends ReactActivity {

  public static class MainActivityDelegate extends ReactActivityDelegate {
    public MainActivityDelegate(ReactActivity activity, String mainComponentName) {
      super(activity, mainComponentName);
    }

    @Override
    protected ReactRootView createRootView() {
      ReactRootView reactRootView = new ReactRootView(getContext());
      // If you opted-in for the New Architecture, we enable the Fabric Renderer.
      reactRootView.setIsFabric(BuildConfig.IS_NEW_ARCHITECTURE_ENABLED);
      return reactRootView;
    }

+   @Override
+   protected boolean isConcurrentRootEnabled() {
+     // If you opted-in for the New Architecture, we enable Concurrent Root (i.e. React 18).
+     // More on this on https://reactjs.org/blog/2022/03/29/react-v18.html
+     return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
+   }
  }
}
```

</TabItem>

<TabItem value="kotlin">

```diff
class MainActivity : ReactActivity() {

    open class MainActivityDelegate(activity: ReactActivity?, mainComponentName: String?) : ReactActivityDelegate(activity, mainComponentName) {
        override fun createRootView(): ReactRootView = ReactRootView(context).apply {
            // If you opted-in for the New Architecture, we enable the Fabric Renderer.
            setIsFabric(BuildConfig.IS_NEW_ARCHITECTURE_ENABLED)
        }

+       // If you opted-in for the New Architecture, we enable Concurrent Root (i.e. React 18).
+       // More on this on https://reactjs.org/blog/2022/03/29/react-v18.html
+       override fun isConcurrentRootEnabled() = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
    }
}
```

</TabItem>
</Tabs>

### 在 iOS 上单独禁用 React 18

On iOS, you'll have access to the `concurrentRootEnabled` method on your `AppDelegate.mm` file. You should change the returned value to `false` (or `NO`) to disable the feature.

```objc
/// This method controls whether the `concurrentRoot`feature of React18 is turned on or off.
///
/// @see: https://reactjs.org/blog/2022/03/29/react-v18.html
/// @note: This requires to be rendering on Fabric (i.e. on the New Architecture).
/// @return: `true` if the `concurrentRoot` feture is enabled. Otherwise, it returns `false`.
- (BOOL)concurrentRootEnabled
{
  // Switch this bool to turn on and off the concurrent root
  return true;
}
```

### 使用 React Native 0.69 但没有启用新架构

注意：使用 React Native 0.69 但仍然停留在旧架构上的用户会继续使用 React 17，即便你在`package.json`中指定安装了 React 18.

此时覆盖应用中的`isConcurrentRootEnabled`方法不会生效。
