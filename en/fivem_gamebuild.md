---
id: fivem_gamebuild
title: Enable DLC Content
description: Use a DLC Content on your FiveM Server
sidebar_label: Enable DLC Gamebuild

---

## 🔧 FiveM Mod Linux/Windows
To use additional contents as Cayo Perico, the Tuner DLC or Los Santos Summer Special, its required to set them in the settings of your server.
You can find the settings tab in your menu.

![](https://screensaver01.zap-hosting.com/index.php/s/9ssbowYr3i8NjNk/preview)

Scoll down to almost the end of the settings, there you'll find this option.

![](https://screensaver01.zap-hosting.com/index.php/s/DFsHMq3L86PjFpn/preview)

Here you can pick between the specific builds, after you choose the one of your like, save the changes and reboot the server.
Your additional content is now available.

## 🔧 txAdmin
To enable the content on a txadmin server, you need to open your txadmin-interface and there open the FXServer settings.

![](https://screensaver01.zap-hosting.com/index.php/s/z4F6jjfr6CyRWHm/preview)

Just add the desired gamebuild in the Additional Arguments

```
+set sv_enforceGameBuild ID
```

After adding the command, be sure the changes and to save and reboot the server.

Current Builds:

- Build 2060 Los Santos Summer Special
- Build 2189 Cayo Perico
- Build 2372 Tuner DLC
