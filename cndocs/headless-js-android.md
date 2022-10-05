---
id: headless-js-android
title: Headless JS（后台任务）
---

Headless JS 是一种使用 js 在后台执行任务的方法。它可以用来在后台同步数据、处理推送通知或是播放音乐等等。

## JS 端的 API

首先我们要通过`AppRegistry`来注册一个异步函数，这个函数我们称之为“任务”。注册方式类似在 index.js 中注册 RN 应用：

```jsx
import { AppRegistry } from 'react-native';
AppRegistry.registerHeadlessTask('SomeTaskName', () =>
  require('SomeTaskName')
);
```

然后创建 require 中引用的`SomeTaskName.js`文件:

```jsx
module.exports = async taskData => {
  // 要做的任务
};
```

你可以在任务中处理任何事情（网络请求、定时器等等），但唯独**不要涉及用户界面**！在任务完成后（例如在 promise 中调用 resolve），RN 会进入一个“暂停”模式，直到有新任务需要执行或者是应用回到前台。

## Java 端的 API

没错，我们还需要一些原生代码，但是请放心并不麻烦。首先需要像下面这样继承`HeadlessJsTaskService`，然后覆盖`getTaskConfig`方法的实现：

```java
package com.your_application_name;
import android.content.Intent;
import android.os.Bundle;
import com.facebook.react.HeadlessJsTaskService;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.jstasks.HeadlessJsTaskConfig;
import javax.annotation.Nullable;

public class MyTaskService extends HeadlessJsTaskService {

  @Override
  protected @Nullable HeadlessJsTaskConfig getTaskConfig(Intent intent) {
    Bundle extras = intent.getExtras();
    if (extras != null) {
      return new HeadlessJsTaskConfig(
          "SomeTaskName",
          Arguments.fromBundle(extras),
          5000, // 任务的超时时间
          false // 可选参数：是否允许任务在前台运行，默认为false
        );
    }
    return null;
  }
}
```

然后记得把服务添加到`AndroidManifest`文件里：

```
<service android:name="com.example.MyTaskService" />
```

好了，现在当你[启动服务时][0]（例如一个周期性的任务或是响应一些系统事件/广播），JS 任务就会开始执行。例如：

```java
Intent service = new Intent(getApplicationContext(), MyTaskService.class);
Bundle bundle = new Bundle();

bundle.putString("foo", "bar");
service.putExtras(bundle);

getApplicationContext().startService(service);
```

## 重试

By default, the headless JS task will not perform any retries. In order to do so, you need to create a `HeadlessJsRetryPolicy` and throw a specfic `Error`.

`LinearCountingRetryPolicy` is an implementation of `HeadlessJsRetryPolicy` that allows you to specify a maximum number of retries with a fixed delay between each attempt. If that does not suit your needs then you can easily implement your own `HeadlessJsRetryPolicy`. These policies can simply be passed as an extra argument to the `HeadlessJsTaskConfig` constructor, e.g.

```java
HeadlessJsRetryPolicy retryPolicy = new LinearCountingRetryPolicy(
3, // Max number of retry attempts
1000 // Delay between each retry attempt
);
return new HeadlessJsTaskConfig(
'SomeTaskName',
Arguments.fromBundle(extras),
5000,
false,
retryPolicy
);
```

A retry attempt will only be made when a specific `Error` is thrown. Inside a headless JS task, you can import the error and throw it when a retry attempt is required.

Example:

```jsx
import {HeadlessJsTaskError} from 'HeadlessJsTask';
module.exports = async (taskData) => {
const condition = ...;
if (!condition) {
  throw new HeadlessJsTaskError();
}
};
```

If you wish all errors to cause a retry attempt, you will need to catch them and throw the above error.

## 注意事项

- The function passed to `setTimeout` does not always behave as expected. Instead the function is called only when the application is launched again. If you just need to wait, use the retry functionality.
* 默认情况下，如果应用正在前台运行时尝试执行任务，那么应用会崩溃。这是为了防止开发者在任务中处理太多逻辑而拖慢用户界面。如果你必须要这么做，那么可以设置第四个参数为`false`来更改这一限制。
* 如果你是通过`BroadcastReceiver`来启动的服务，那么谨记在从`onReceive()`返回之前要调用`HeadlessJsTaskService.acquireWakeLockNow()`。

## 示例

我们可以使用 Java API 来开启一个 service。首先你需要考虑好 Service 启动的时机，并据此实现相关逻辑。下面是一个使用 Service 来处理网络连接变化的简单范例。
接下来的几行代码展示了如何在 Android Manifest 文件中注册一个Broadcast Receiver。

```xml
<receiver android:name=".NetworkChangeReceiver" >
  <intent-filter>
    <action android:name="android.net.conn.CONNECTIVITY_CHANGE" />
  </intent-filter>
</receiver>
```

这个 Broadcast Receiver 主要在 onReceive 函数中处理广播 Intent 。这是一个让你确认 App 是否在前台工作的绝佳时机。如果 App 当前不在前台工作，那么我们就可以开始准备我们用来启动 Service 的 Intent 了。额外提及一点：如果有信息需要传递给Service，可以使用 putExtra 方法把信息打包成 bundle携带。当然也可以不传递任何信息（但是，始终谨记 bundle 只能够承载那些 parcelable 的值）。在最后，Service 将获取到 wakelock 并启动起来。

```java
public class NetworkChangeReceiver extends BroadcastReceiver {

    @Override
    public void onReceive(final Context context, final Intent intent) {
        /**
          这部分代码会在每次网络状态变化时调用，比如掉线的时候
        **/
        if (!isAppOnForeground((context))) {
            /**
              启动服务并发送当前的网络状态信息
            **/
            boolean hasInternet = isNetworkAvailable(context);
            Intent serviceIntent = new Intent(context, MyTaskService.class);
            serviceIntent.putExtra("hasInternet", hasInternet);
            context.startService(serviceIntent);
            HeadlessJsTaskService.acquireWakeLockNow(context);
        }
    }

    private boolean isAppOnForeground(Context context) {
        /**
          我们需要先检查应用当前是否在前台运行，否则应用会崩溃。
         http://stackoverflow.com/questions/8489993/check-android-application-is-in-foreground-or-not
        **/
        ActivityManager activityManager = (ActivityManager) context.getSystemService(Context.ACTIVITY_SERVICE);
        List<ActivityManager.RunningAppProcessInfo> appProcesses =
        activityManager.getRunningAppProcesses();
        if (appProcesses == null) {
            return false;
        }
        final String packageName = context.getPackageName();
        for (ActivityManager.RunningAppProcessInfo appProcess : appProcesses) {
            if (appProcess.importance ==
            ActivityManager.RunningAppProcessInfo.IMPORTANCE_FOREGROUND &&
             appProcess.processName.equals(packageName)) {
                return true;
            }
        }
        return false;
    }

    public static boolean isNetworkAvailable(Context context) {
        ConnectivityManager cm = (ConnectivityManager)
        context.getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo netInfo = cm.getActiveNetworkInfo();
        return (netInfo != null && netInfo.isConnected());
    }


}
```

[0]: https://developer.android.com/reference/android/content/Context.html#startService(android.content.Intent)
