---
id: cxx-custom-types
title: 支持自定义 C++ 类型
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import constants from '@site/core/TabsConstants';
import NewArchitectureWarning from '../\_markdown-new-architecture-warning.mdx';

<NewArchitectureWarning/>

默认情况下，C++ Turbo Native 模块支持大多数 `std::` 标准类型的[桥接功能](https://github.com/facebook/react-native/tree/main/packages/react-native/ReactCommon/react/bridging)。

如果您想在应用程序 / 库中添加对新 / 自定义类型的支持，则只需提供必要的`桥接`头文件即可。

本指南延续上一节[C++ Turbo 原生模块](./cxx-cxxturbomodules)。

## 实例: Int64

C++ Turbo 原生模块尚不支持`int64_t`数字 - 因为 JavaScript 不支持大于`2^53`的数字。

我们无法将 > `2^53` 的数字表示为JavaScript 的`number`类型，但我们可以将它们表示为 JavaScript 的`string`类型并通过在`tm`文件夹中创建名为`Int64.h`的自定义桥接头文件来自动把它们转换到 C++ 的`int64_t`类型: 

```cpp Int64.h
#pragma once

#include <react/bridging/Bridging.h>

namespace facebook::react {

template <>
struct Bridging<int64_t> {
  static int64_t fromJs(jsi::Runtime &rt, const jsi::String &value) {
    try {
      size_t pos;
      auto str = value.utf8(rt);
      auto num = std::stoll(str, &pos);
      if (pos != str.size()) {
        throw std::invalid_argument("Invalid number"); // don't support alphanumeric strings
      }
      return num;
    } catch (const std::logic_error &e) {
      throw jsi::JSError(rt, e.what());
    }
  }

  static jsi::String toJs(jsi::Runtime &rt, int64_t value) {
    return bridging::toJs(rt, std::to_string(value));
  }
};

} // namespace facebook::react
```

The key components for your custom `bridging` header are:

- Explicit specialization of the `Bridging` struct for your custom type, `int64_t` in this case
- A `fromJs` function to convert from `jsi::` types to your custom type
- A `toJS` function to convert from your custom type to `jsi:` types

Omitting either `fromJS` or `toJS` would make you `bridging` header either _readonly_ or _writeonly_.

Now you can add the following function to your JavaScript spec:

<Tabs groupId="turbomodule-specs" queryString defaultValue={constants.defaultJavaScriptSpecLanguages} values={constants.javaScriptSpecLanguages}>
<TabItem value="typescript">

```typescript title="NativeSampleModule.ts"
   // ...
   readonly cubicRoot: (input: string) => number;
   // ..
```

</TabItem>
<TabItem value="flow">

```js title="NativeSampleModule.js"
   // ...
   +cubicRoot: (input: string) => number;
   // ..
```

</TabItem>
</Tabs>

Declare it in your `NativeSampleModule.h` file and include the `Int64.h` header file:

```cpp
//...
#include "Int64.h"
//...
int32_t cubicRoot(jsi::Runtime& rt, int64_t input);
```

And implement it in `NativeSampleModule.cpp`:

```cpp
//...
#include <cmath>
//...
int32_t NativeSampleModule::cubicRoot(jsi::Runtime& rt, int64_t input) {
    return std::cbrt(input);
}
```

In your app you can call this new native function via:

```js
<Section title="Cxx TurboModule">
  NativeSampleModule.cubicRoot(...) ={' '}
  {JSON.stringify(
    NativeSampleModule.cubicRoot('9223372036854775807'),
  )}
</Section>
```

which should return `2097152`.

## 任意自定义类型

Similar to the example above you can now write custom `bridging` functionality for any custom C++ type you want to expose to react-native. E.g., you can add support for `folly::StringPiece`, `QString`, `boost::filesystem::path`, `absl::optional` or any other type you need to support in your C++ Turbo Native Modules.

```cpp title="Path.h"
#pragma once

#include <react/bridging/Bridging.h>
#include <boost/filesystem.hpp>

namespace facebook::react {

template<>
struct Bridging<boost::filesystem::path> {
  static boost::filesystem::path fromJs(jsi::Runtime& rt, const std::string& value) { // auto-bridge from jsi::String to std::string
    return boost::filesystem::path(value);
  }

  static jsi::String toJs(jsi::Runtime& rt, boost::filesystem::path value) {
    return bridging::toJs(rt, value.string());
  }
};

} // namespace facebook::react
```

## Custom structs

You can use the same approach for you custom types in JavaScript such as this one:

```js
export type CustomType = {
  key: string,
  enabled: boolean,
  time?: number,
};
```

which can be exposed to your C++ Turbo Native Module via

<Tabs groupId="turbomodule-specs" queryString defaultValue={constants.defaultJavaScriptSpecLanguages} values={constants.javaScriptSpecLanguages}>
<TabItem value="typescript">

```typescript title="NativeSampleModule.ts"
   // ...
   readonly passCustomType: (input: CustomType) => CustomType;
   // ..
```

</TabItem>
<TabItem value="flow">

```js title="NativeSampleModule.js"
   // ...
   +passCustomType: (input: CustomType) => CustomType;
   // ..
```

</TabItem>
</Tabs>

### Manually typed

To use this custom type in C++, you need to define your custom Struct and `bridging` function e.g., directly in `NativeSampleModule.h`:

```cpp
struct CustomType {
  std::string key;
  bool enabled;
  std::optional<int32_t> time;
};

template <>
struct Bridging<CustomType> {
  static CustomType fromJs(
      jsi::Runtime &rt,
      const jsi::Object &value,
      const std::shared_ptr<CallInvoker> &jsInvoker) {
    return CustomType{
        bridging::fromJs<std::string>(
            rt, value.getProperty(rt, "key"), jsInvoker),
        bridging::fromJs<bool>(
            rt, value.getProperty(rt, "enabled"), jsInvoker),
        bridging::fromJs<std::optional<int32_t>>(
            rt, value.getProperty(rt, "time"), jsInvoker)};
  }

  static jsi::Object toJs(jsi::Runtime &rt, const CustomType &value) {
    auto result = facebook::jsi::Object(rt);
    result.setProperty(rt, "key", bridging::toJs(rt, value.key));
    result.setProperty(rt, "enabled", bridging::toJs(rt, value.enabled));
    if (value.time) {
      result.setProperty(rt, "time", bridging::toJs(rt, value.time.value()));
    }
    return result;
  }
};
```

Declare it in your `NativeSampleModule.h` file:

```cpp
  CustomType passCustomType(jsi::Runtime& rt, CustomType input);
```

Implement it in `NativeSampleModule.cpp`:

```cpp
CustomType NativeSampleModule::passCustomType(jsi::Runtime& rt, CustomType input) {
  input.key = "1909";
  input.enabled = !input.enabled;
  input.time = 42;
  return input;
}
```

In your app you can call this new native function via:

```js
<Section title="Cxx TurboModule">
  NativeSampleModule.passCustomType(...) ={' '}
  {JSON.stringify(
    NativeSampleModule.passCustomType({
      key: '123',
      enabled: true,
      time: undefined,
    }),
  )}
</Section>
```

which should return `{"key":"1909","enabled":false","time":42}`.

This works - but is quite complex.

### Struct generator

[**Codegen**](pillars-codegen.md) for C++ Turbo Native Modules does support struct generators, so you can simplify the code above in `NativeSampleModule.h` to:

```cpp
using CustomType = NativeSampleModuleBaseCustomType<std::string, bool, std::optional<int32_t>>;
template <>
struct Bridging<CustomType>
    : NativeSampleModuleBaseCustomTypeBridging<std::string, bool, std::optional<int32_t>> {};
```

With `using CustomType` you declare a name for your concrete struct.

#### Member types

With `std::string, bool, std::optional<int32_t>` you define the property types of the struct members in the order they were defined in your JavaScript spec. The **order matters**. The _1st_ template argument refers to the _1st_ data type of the struct, and so forth.

Without any custom conversion functions:

- you can only `bridge` a JS string to a [std::string](https://github.com/facebook/react-native/blob/main/packages/react-native/ReactCommon/react/bridging/AString.h) and a JS boolean to a [bool](https://github.com/facebook/react-native/blob/main/packages/react-native/ReactCommon/react/bridging/Bool.h).
- but you can choose different JS `number` [representations in C++](https://github.com/facebook/react-native/blob/main/packages/react-native/ReactCommon/react/bridging/Number.h).

#### Base class

`NativeSampleModuleBaseCustomType` is an auto-generated template in your `AppSpecsJSI.h` which name is generated by:

- `NativeSampleModule` (name of C++ Turbo Native Module in the JavaScript spec) +
- `Base` (constant) +
- `CustomType` (name of type in the JavaScript spec)

The same naming schema applies to the necessary `Bridging` struct which is defined via `struct Bridging<CustomType>`.
