# @capacitor/camera

相机插件提供了一个简单的 API 来打开相机应用程序，拍摄照片或视频，并返回文件的本地 URI。

# 安装

```bash
npm install @capacitor/camera
npx cap sync
```

# 配置

## ios 系统

主要看[官网文档](https://capacitorjs.com/docs/ios/configuration#configuring-infoplist)，这里不做过多介绍。

## Android 系统

在 `android/app/src/main/AndroidManifest.xml` 文件中添加以下权限：

```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-feature android:name="android.hardware.camera" />
<uses-feature android:name="android.hardware.camera.autofocus" />
```
