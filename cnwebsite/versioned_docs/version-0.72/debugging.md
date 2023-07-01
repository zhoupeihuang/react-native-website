---
id: debugging
title: 调试
---

## 开启调试的快捷键

React Native 在 iOS 模拟器上支持一些快捷键操作，具体会在下文中描述。要使用快捷键请**务必确保模拟器的 Hardware 菜单中，Keyboard 选项下的"Connect Hardware Keyboard"处于开启状态**，否则按键是没有响应的。

## 访问 App 内的开发菜单

你可以通过摇晃设备或是选择 iOS 模拟器的"Hardware"菜单中的"Shake Gesture"选项来打开开发菜单。另外，如果是在 iOS 模拟器中运行，还可以按下**`Command`**`⌘` + **`D`** 快捷键，Android 模拟器对应的则是**`Command`**`⌘` + **`M`**（windows 上可能是 F1 或者 F2），或是直接在命令行中运行`adb shell input keyevent 82`来发送菜单键命令。

![](assets/DevMenu.png)

> 在发布（production）版本中开发者菜单将无法使用。

## LogBox

开发版本中的错误和警告会在您的应用程序内部的 LogBox 中显示。

:::note 注意
LogBox 在发布版本（release/production）中是自动禁用的。
:::

## 控制台的错误与警告提示

控制台错误和警告以红色或黄色徽章的形式显示为屏幕通知，并分别显示控制台中的错误或警告数量。要查看控制台中的错误或警告，点击通知以查看有关日志的完整信息，并在控制台中浏览所有日志。

可以使用`LogBox.ignoreAllLogs()`来隐藏这些通知。例如，在进行产品演示时非常有用。此外，还可以通过`LogBox.ignoreLogs()`来按照每个日志隐藏通知。当存在无法修复的嘈杂警告（比如第三方依赖项）时，这非常有用。

:::info
忽略日志只应作为最后的手段。请记得给自己创建任务或者注释，提醒自己修复任何被忽略的日志。
:::

```jsx
import {LogBox} from 'react-native';

// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
LogBox.ignoreAllLogs();
```

### 未捕获的错误

未处理的 JavaScript 错误，例如 `undefined is not a function`，将自动打开一个全屏的 LogBox 错误窗口，并显示错误的源代码。这些错误可以被关闭和最小化，以便在出现这些错误时查看应用程序的状态，但是应该始终予以解决。

### 语法错误

语法错误将自动打开一个全屏的LogBox错误，显示出语法错误的源代码。这个错误是无法取消的，因为它代表了必须在继续使用应用程序之前修复的无效JavaScript执行。要解除这些错误，请修复语法错误并保存以自动解除（启用快速刷新）或按下cmd+r重新加载（禁用快速刷新）。

## Chrome 开发者工具

在开发者菜单中选择"Debug JS Remotely"选项，即可以开始在 Chrome 中调试 JavaScript 代码。点击这个选项的同时会自动打开调试页面 <http://localhost:8081/debugger-ui>.(如果地址栏打开的是 ip 地址，则请自行改为 localhost)

在 Chrome 的菜单中选择`Tools → Developer Tools`可以打开开发者工具，也可以通过键盘快捷键来打开（Mac 上是**`Command`**`⌘` + **`Option`**`⌥` + **`I`**，Windows 上是**`Ctrl`** + **`Shift`** + **`I`**或是 F12）。打开[有异常时暂停（Pause On Caught Exceptions）](http://stackoverflow.com/questions/2233339/javascript-is-there-a-way-to-get-chrome-to-break-on-all-errors/17324511#17324511)选项，能够获得更好的开发体验。

> 请注意：在安卓设备上，如果调试器和设备之间的时间差距过大，可能会导致动画、事件行为等不正常或结果不准确。请通过在调试器机器上运行``adb shell "date `date +%m%d%H%M%Y.%S%3N`" ``来纠正这个问题。实际设备需要获取 root 权限才能使用。

> 注意：Chrome 中并不能直接看到 App 的用户界面，而只能提供 console 的输出，以及在 sources 项中断点调试 js 脚本。一些老的教程和文章会提到 React 的 Chrome 插件，这一插件目前并不支持 React Native，而且调试本身并不需要这个插件。不过你可以安装独立（非插件）版本的 React Developer Tools 来辅助查看界面布局，下文会讲述具体安装方法。

> 注意：使用 Chrome 调试目前无法观测到 React Native 中的网络请求，你可以使用功能更强大的第三方的[react-native-debugger](https://github.com/jhen0409/react-native-debugger)或是官方的[flipper](https://fbflipper.com/)（注意仅能在 0.62 以上版本可用）来观测。

### 在真机上调试

:::info 提示
如果你正在使用 Expo CLI，这已经为你配置好了。
:::

<Tabs groupId="platform" defaultValue={constants.defaultPlatform} values={constants.platforms} className="pill-tabs">
<TabItem value="ios">

在 iOS 设备上，打开文件[`RCTWebSocketExecutor.mm`](https://github.com/facebook/react-native/blob/master/packages/react-native/React/CoreModules/RCTWebSocketExecutor.mm)，将"localhost"更改为您计算机的 IP 地址，然后从开发菜单中选择"Debug JS Remotely"。

</TabItem>
<TabItem value="android">

在用USB线缆连接 Android 5.0+ 设备时，您可以使用[`adb`命令行工具](http://developer.android.com/tools/help/adb.html)将端口转发设置为从设备到计算机：

```sh
adb reverse tcp:8081 tcp:8081
```

或者，从开发菜单中选择“设置”，然后将“设备的调试服务器主机”设置更新为与您计算机的IP地址相匹配。

</TabItem>
</Tabs>

:::note 注意
如果你遇到任何问题，可能是因为你的Chrome扩展与调试器产生了意外的交互。尝试禁用所有扩展，并逐个重新启用它们，直到找到有问题的扩展。
:::

<details>
<summary>进阶：使用自定义的 JavaScript 调试器来调试</summary>

如果想用其他的 JavaScript 调试器来代替 Chrome，可以设置一个名为`REACT_DEBUGGER`的环境变量，其值为启动自定义调试器的命令。调试的流程依然是从开发者菜单中的"Debug JS Remotely"选项开始。

被指定的调试器需要知道项目所在的目录（可以一次传递多个目录参数，以空格隔开）。例如，如果你设定了`REACT_DEBUGGER="node /某个路径/launchDebugger.js --port 2345 --type ReactNative"`，那么启动调试器的命令就应该是`node /某个路径/launchDebugger.js --port 2345 --type ReactNative /某个路径/你的RN项目目录`。

:::note 注意
以这种方式执行的调试器最好是一个短进程（short-lived processes），同时最好也不要有超过 200k 的文字输出。
:::

</details>

## Safari Developer Tools

你可以使用 Safari 来调试你的 iOS 版本的应用，而不必启用"Debug JS Remotely".

- Enable Develop menu in Safari: `Preferences → Advanced → Select "Show Develop menu in menu bar"`
- Select your app's JSContext: `Develop → Simulator → JSContext`
- Safari's Web Inspector should open which has a Console and a Debugger

虽然默认情况下可能没有启用 source map，但您可以按照[本指南](http://blog.nparashuram.com/2019/10/debugging-react-native-ios-apps-with.html)或[Youtube 视频](https://www.youtube.com/watch?v=GrGqIIz51k4)来启用 source map，并在源代码的正确位置设置断点。

然而，每次重新加载应用程序（使用实时重新加载，或通过手动重新加载）时，都会创建一个新的 JSContext。选择 "自动显示 JSContextts 的 Web 检查器(Automatically Show Web Inspectors for JSContexts)"可以帮你自动选择最新的 JSContext。

## 性能监测

你可以在开发者菜单中选择"Pref Monitor"选项以开启一个悬浮层，其中会显示应用的当前帧数。
