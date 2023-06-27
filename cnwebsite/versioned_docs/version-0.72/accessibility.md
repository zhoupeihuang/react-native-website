---
id: accessibility
title: 无障碍功能
---

**译注**：accessibility 一词常见多种译法：可访问性、无障碍性、辅助功能等等，其中文意思都不太能准确表达其功能的本质——即为残障人士提供便利。本文主要采用“无障碍功能”和“辅助技术/服务”的说法。如果你或你的公司暂时没有资源和精力去服务这些用户，那么你可以跳过本文。但是，`译者个人希望借本文档，呼吁有能力有资源的商业公司/组织/个人，重视残障人士使用智能手机的权利`。

iOS 和 Android 都提供了便于残障人士无障碍使用 App 的 API。此外，两个平台都提供了整套的辅助技术，比如都有针对视力受损人士的读屏软件（iOS 的 VoiceOver 和 Android 的 TalkBack）。同样地，在 React Native 中我们也封装了对应的 API，使开发者能够在 App 中集成无障碍功能。

> 注意：iOS 与 Android 在具体方法上会有所区别，因此 React Native 的实现也会因平台而异。

## 无障碍功能属性

### `accessible`

设置为`true`时表示当前视图是一个“无障碍元素”（accessibility element）。无障碍元素会将其所有子组件视为一整个可以选中的组件。默认情况下，所有可点击的组件（Touchable 系列组件）都是无障碍元素。

在 Android 上，React Native 视图的`accessible={true}`属性会被转译为原生视图对应的`focusable={true}`属性。

```jsx
<View accessible={true}>
  <Text>text one</Text>
  <Text>text two</Text>
</View>
```

在上面这个例子中，当父视图开启无障碍属性后，我们就无法单独选中'text one'和'text two'，而只能选中整个父视图。

### `accessibilityLabel`

当一个视图启用无障碍属性后，最好再加上一个 accessibilityLabel（无障碍标签），这样可以让使用 VoiceOver 的人们清楚地知道自己选中了什么。VoiceOver 会读出选中元素的无障碍标签。

设定`accessibilityLabel`属性并赋予一个字符串内容即可在 View、Text 或是 Touchable 中启用无障碍标签：

```jsx
<TouchableOpacity
  accessible={true}
  accessibilityLabel="Tap me!"
  onPress={this._onPress}>
  <View style={styles.button}>
    <Text style={styles.buttonText}>Press me!</Text>
  </View>
</TouchableOpacity>
```

在上面这段示例代码中，如果不在 TouchableOpacity 上设置无障碍标签，那么其默认值就会是"Press me!"（即 Text 子组件的文本值）。此时无障碍标签是通过自动取所有 Text 子节点的值，然后用空格连起来生成。

### `accessibilityLabelledBy` <div class="label android">Android</div>

引用另一个元素[nativeID](view.md#nativeid)来构建复杂的表单。
`accessibilityLabelledBy`的值应该与相关元素的`nativeID`匹配：

```jsx
<View>
  <Text nativeID="formLabel">用于输入字段标签的编辑框</Text>
  <TextInput
    accessibilityLabel="输入"
    accessibilityLabelledBy="formLabel"
  />
</View>
```

在上面的例子中，当焦点位于 TextInput 上时，屏幕阅读器会提示`输入，用于输入字段标签的编辑框`。

### `accessibilityHint`

无障碍提示用于帮助用户理解操作可能导致什么后果，尤其是当这些后果并不能从无障碍标签中清楚地了解时。

要启用无障碍提示只需在需要设置的元素上设置`accessibilityHint`属性，并赋予用于解释的文本：

```jsx
<TouchableOpacity
  accessible={true}
  accessibilityLabel="返回"
  accessibilityHint="返回到上一个页面"
  onPress={this._onPress}>
  <View style={styles.button}>
    <Text style={styles.buttonText}>返回</Text>
  </View>
</TouchableOpacity>
```

在上面这个例子里，iOS 的 VoiceOver 会在标签后读取提示，如果用户在设备的 VoiceOver 设置中启用了提示。有关 accessibilityHint 指南的更多信息，请阅读[iOS 开发者文档](https://developer.apple.com/documentation/objectivec/nsobject/1615093-accessibilityhint)。

在上面这个例子里，Android 的 Talkback 将在标签后读取提示。目前，Android 上无法关闭提示。

### `accessibilityLanguage` <div class="label ios">iOS</div>

通过使用 `accessibilityLanguage` 属性，屏幕阅读器将了解在阅读元素的 **标签**、**值** 和 **提示** 时要使用哪种语言。提供的字符串值必须遵循 [BCP 47 规范](https://www.rfc-editor.org/info/bcp47)。

```tsx
<View
  accessible={true}
  accessibilityLabel="Pizza"
  accessibilityLanguage="it-IT">
  <Text>🍕</Text>
</View>
```

### `accessibilityIgnoresInvertColors` <div class="label ios">iOS</div>

反转屏幕颜色是一项辅助功能，它使得 iPhone 和 iPad 对于某些对亮度敏感的人更加舒适，对于某些色盲患者更容易区分，对于视力低下的人来说更容易识别。然而，有时您会查看照片等视图，并不希望其被反转。在这种情况下，您可以将此属性设置为 false，以便这些特定视图不会反转其颜色。

### `accessibilityLiveRegion` <div class="label android">Android</div>

组件发生动态变化时，我们希望 TalkBack 能够提醒用户。这一行为可以通过设置`accessibilityLiveRegion`属性来实现。具体值可以设置为`none`，`polite`以及`assertive`：

- **none** 辅助服务不应该提醒用户当前视图的变化。
- **polite** 辅助服务应该提醒用户当前视图的变化。
- **assertive** 辅助服务应该立即打断当前的语音会话，提醒用户当前视图的变化。

```jsx
<TouchableWithoutFeedback onPress={this._addOne}>
  <View style={styles.embedded}>
    <Text>Click me</Text>
  </View>
</TouchableWithoutFeedback>
<Text accessibilityLiveRegion="polite">
  Clicked {this.state.count} times
</Text>
```

上面这个例子中，\_addOne 方法会改变 state.count 这个变量。那么只要用户点击了 TouchableWithoutFeedback，TalkBack 就会读出 Text 组件中的值，因为它设置了`accessibilityLiveRegion="polite"`属性。

### `accessibilityRole`

`accessibilityRole` communicates the purpose of a component to the user of an assistive technology.

`accessibilityRole` can be one of the following:

- **adjustable** 元素具有可调整的特性（比如一个滑块）。
- **alert** Used when an element contains important text to be presented to the user.
- **button** 具有按钮特性。
- **checkbox** Used when an element represents a checkbox which can be checked, unchecked, or have mixed checked state.
- **combobox** Used when an element represents a combo box, which allows the user to select among several choices.
- **header** 作为内容区域的头部（比如导航栏的标题）。
- **image** 具有图片特性。可以和按钮或链接等连用。
- **imagebutton** Used when the element should be treated as a button and is also an image.
- **keyboardkey** 元素作为虚拟键盘的一个键使用。
- **link** 具有链接特性。
- **menu** Used when the component is a menu of choices.
- **menubar** Used when a component is a container of multiple menus.
- **menuitem** Used to represent an item within a menu.
- **none** 无特性元素。
- **progressbar** Used to represent a component which indicates progress of a task.
- **radio** Used to represent a radio button.
- **radiogroup** Used to represent a group of radio buttons.
- **scrollbar** Used to represent a scroll bar.
- **search** 用作搜索框的文本框。
- **spinbutton** Used to represent a button which opens a list of choices.
- **summary** 在 App 冷启动（指完全退出后台后再进入）时提供当前的简要总结信息的元素。比如当天气应用冷启动时，显示当前天气情况的元素就会被标记为**summary**。
- **switch** Used to represent a switch which can be turned on and off.
- **tab** Used to represent a tab.
- **tablist** Used to represent a list of tabs.
- **text** 具有不可修改的文本的特性。
- **timer** Used to represent a timer.
- **togglebutton** Used to represent a toggle button. Should be used with accessibilityState checked to indicate if the button is toggled on or off.
- **toolbar** Used to represent a tool bar (a container of action buttons or components).

### 无障碍状态 `accessibilityState`

Describes the current state of a component to the user of an assistive technology.

`accessibilityState` is an object. It contains the following fields:

| 名称     | 描述                                                                                                                                  | 类型               | 必需 |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ---- |
| disabled | Indicates whether the element is disabled or not.                                                                                     | boolean            | 否   |
| selected | Indicates whether a selectable element is currently selected or 否 t.                                                                 | boolean            | 否   |
| checked  | Indicates the state of a checkable element. This field can either take a boolean or the "mixed" string to represent mixed checkboxes. | boolean or 'mixed' | 否   |
| busy     | Indicates whether an element is currently busy or 否 t.                                                                               | boolean            | 否   |
| expanded | Indicates whether an expandable element is currently expanded or collapsed.                                                           | boolean            | 否   |

To use, set the `accessibilityState` to an object with a specific definition.

### 无障碍值 `accessibilityValue`

Represents the current value of a component. It can be a textual description of a component's value, or for range-based components, such as sliders and progress bars, it contains range information (minimum, current, and maximum).

`accessibilityValue` is an object. It contains the following fields:

| 名称 | 描述                                                                                           | 类型    | 必需                      |
| ---- | ---------------------------------------------------------------------------------------------- | ------- | ------------------------- |
| min  | The minimum value of this component's range.                                                   | integer | Required if `now` is set. |
| max  | The maximum value of this component's range.                                                   | integer | Required if `now` is set. |
| now  | The current value of this component's range.                                                   | integer | 否                        |
| text | A textual description of this component's value. Will override `min`, `now`, and `max` if set. | string  | 否                        |

### `accessibilityViewIsModal` <div class="label ios">iOS</div>

A Boolean value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver.

For example, in a window that contains sibling views `A` and `B`, setting `accessibilityViewIsModal` to `true` on view `B` causes VoiceOver to ignore the elements in the view `A`. On the other hand, if view `B` contains a child view `C` and you set `accessibilityViewIsModal` to `true` on view `C`, VoiceOver does not ignore the elements in view `A`.

### `accessibilityElementsHidden` <div class="label ios">iOS</div>

A Boolean value indicating whether the accessibility elements contained within this accessibility element are hidden.

For example, in a window that contains sibling views `A` and `B`, setting `accessibilityElementsHidden` to `true` on view `B` causes VoiceOver to ignore the elements in the view `B`. This is similar to the Android property `importantForAccessibility="no-hide-descendants"`.

### 无障碍功能优先级 `importantForAccessibility` <div class="label android">Android</div>

如果有两个 UI 组件同时层叠覆盖在父视图之上，那么默认的无障碍功能的焦点位置就可能难以预料。`importantForAccessibility`属性解决了这一问题，它可以控制某个视图是否触发无障碍功能事件，以及是否将其报告给辅助服务。具体值可以设置为`auto`，`yes`，`no`和`no-hide-descendants`（最后一个值会强制辅助服务忽略当前组件及其所有子组件）。

```jsx
<View style={styles.container}>
  <View
    style={{
      position: 'absolute',
      left: 10,
      top: 10,
      right: 10,
      height: 100,
      backgroundColor: 'green',
    }}
    importantForAccessibility="yes">
    <Text> First layout </Text>
  </View>
  <View
    style={{
      position: 'absolute',
      left: 10,
      top: 10,
      right: 10,
      height: 100,
      backgroundColor: 'yellow',
    }}
    importantForAccessibility="no-hide-descendant">
    <Text> Second layout </Text>
  </View>
</View>
```

上面这个例子里，第二个 View 的组件对于 TalkBack 和其他一些辅助服务来说是完全不可见的。这样我们就可以把两个视图覆盖到同一个父容器上，而不用担心影响 TalkBack 服务。

### `onAccessibilityEscape` <div class="label ios">iOS</div>

Assign this property to a custom function which will be called when someone performs the "escape" gesture, which is a two finger Z shaped gesture. An escape function should move back hierarchically in the user interface. This can mean moving up or back in a navigation hierarchy or dismissing a modal user interface. If the selected element does not have an `onAccessibilityEscape` function, the system will attempt to traverse up the view hierarchy until it finds a view that does or bonk to indicate it was unable to find one.

### 无障碍元素的点击事件 `onAccessibilityTap`

使用这一属性来绑定一个自定义的事件处理函数，这一函数会在当用户双击某个已经选中的无障碍元素时调用。

### 双指双击事件 `onMagicTap` <div class="label ios">iOS</div>

使用这一属性来绑定一个自定义的事件处理函数，这一函数会在当用户执行"magic tap"操作（即使用两个指头来双击）时调用。magic tap 的事件处理函数应该做与当前组件相关性最高的操作，比如在电话应用中，magic tap 的操作就应该接通电话，或是挂断已经接通的电话。如果当前选中的元素并没有`onMagicTap`函数，则系统会自动遍历视图层，直到找到一个可以响应此操作的。

## 无障碍操作 Accessibility Actions

Accessibility actions allow an assistive technology to programmatically invoke the actions of a component. In order to support accessibility actions, a component must do two things:

- Define the list of actions it supports via the `accessibilityActions` property.
- Implement an `onAccessibilityAction` function to handle action requests.

The `accessibilityActions` property should contain a list of action objects. Each action object should contain the following fields:

| 名称  | 类型   | Required |
| ----- | ------ | -------- |
| 名称  | string | Yes      |
| label | string | No       |

Actions either represent standard actions, such as clicking a button or adjusting a slider, or custom actions specific to a given component such as deleting an email message. The `name` field is required for both standard and custom actions, but `label` is optional for standard actions.

When adding support for standard actions, `name` must be one of the following:

- `'magicTap'` - iOS only - While VoiceOver focus is on or inside the component, the user double tapped with two fingers.
- `'escape'` - iOS only - While VoiceOver focus is on or inside the component, the user performed a two finger scrub gesture (left, right, left).
- `'activate'` - Activate the component. Typically this should perform the same action as when the user touches or clicks the component when not using an assistive technology. This is generated when a screen reader user double taps the component.
- `'increment'` - Increment an adjustable component. On iOS, VoiceOver generates this action when the component has a role of `'adjustable'` and the user places focus on it and swipes upward. On Android, TalkBack generates this action when the user places accessibility focus on the component and presses the volume up button.
- `'decrement'` - Decrement an adjustable component. On iOS, VoiceOver generates this action when the component has a role of `'adjustable'` and the user places focus on it and swipes downward. On Android, TalkBack generates this action when the user places accessibility focus on the component and presses the volume down button.
- `'longpress'` - Android only - This action is generated when the user places accessibility focus on the component and double tap and holds one finger on the screen. Typically, this should perform the same action as when the user holds down one finger on the component while not using an assistive technology.

The `label` field is optional for standard actions, and is often unused by assistive technologies. For custom actions, it is a localized string containing a description of the action to be presented to the user.

To handle action requests, a component must implement an `onAccessibilityAction` function. The only argument to this function is an event containing the name of the action to perform. The below example from RNTester shows how to create a component which defines and handles several custom actions.

```jsx
<View
  accessible={true}
  accessibilityActions={[
    {name: 'cut', label: 'cut'},
    {name: 'copy', label: 'copy'},
    {name: 'paste', label: 'paste'},
  ]}
  onAccessibilityAction={event => {
    switch (event.nativeEvent.actionName) {
      case 'cut':
        Alert.alert('Alert', 'cut action success');
        break;
      case 'copy':
        Alert.alert('Alert', 'copy action success');
        break;
      case 'paste':
        Alert.alert('Alert', 'paste action success');
        break;
    }
  }}
/>
```

## 查看读屏应用是否已开启

`AccessibilityInfo`可以用于查询读屏应用是否已开启。请查看[AccessibilityInfo 的文档](accessibilityinfo.md)来了解具体用法。

## 发送无障碍功能的相关事件 <div class="label android">Android</div>

有时候需要在 UI 组件上主动触发一个无障碍功能的事件（比如当某个自定义的视图出现在屏幕上或是某个自定义的单选框被选中）。为此 UIManager 模块提供了一个`sendAccessibilityEvent`方法。它接受两个参数：view 标签和事件类型。支持的事件类型有`typeWindowStateChanged`, `typeViewFocused` 和 `typeViewClicked`。

```jsx
import { Platform, UIManager, findNodeHandle } from 'react-native';

if (Platform.OS === 'android') {
    UIManager.sendAccessibilityEvent(
      findNodeHandle(this),
      UIManager.AccessibilityEventTypes.typeViewFocused);
  }
}
```

在上面这个例子里我们创建了一个自定义的单选框（CustomRadioButton），并且使其具有了和原生单选框一样的无障碍功能。具体来说，也就是 TalkBack 可以正确地通知用户当前选项的变更了。

## Testing TalkBack Support <div class="label android">Android</div>

To enable TalkBack, go to the Settings app on your Android device or emulator. Tap Accessibility, then TalkBack. Toggle the "Use service" switch to enable or disable it.

P.S. Android emulator doesn’t have TalkBack by default. To install it:

1. Download TalkBack file here: https://google-talkback.en.uptodown.com/android
2. Drag the downloaded `.apk` file into the emulator

You can use the volume key shortcut to toggle TalkBack. To turn on the volume key shortcut, go to the Settings app, then Accessibility. At the top, turn on Volume key shortcut.

To use the volume key shortcut, press both volume keys for 3 seconds to start an accessibility tool.

Additionally, if you prefer, you can toggle TalkBack via command line with:

```
# disable
adb shell settings put secure enabled_accessibility_services com.android.talkback/com.google.android.marvin.talkback.TalkBackService
 # enable
adb shell settings put secure enabled_accessibility_services com.google.android.marvin.talkback/com.google.android.marvin.talkback.TalkBackService
```

## 测试 VoiceOver <div class="label ios">iOS</div>

要开启 VoiceOver 功能，先打开 iOS 设备的设置选项（注意模拟器上没法测试）。点击“通用”，然后是“辅助选项”，你会看到很多为残障人群使用手机减少障碍的工具，比如更大的字体、更高的对比度以及 VoiceOver。

在“视觉”菜单下点击 VoiceOver，将开关置为打开状态即可启用。

在辅助选项的最底部，有一个“辅助选项快捷键”，开启之后可以通过点击三次 Home 按钮来快速关闭或打开 VoiceOver 工具。

## Additional Resources

- [Making React Native Apps Accessible](https://engineering.fb.com/ios/making-react-native-apps-accessible/)
