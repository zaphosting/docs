---
id: fivem-gamebuild
title: Enable DLC Content
description: Use a DLC Content on your FiveM Server
sidebar_label: Enable DLC Gamebuild

---

## FiveM Mod Linux/Windows
To use additional contents as Cayo Perico, the Tuner DLC or Los Santos Summer Special, its required to set them in the settings of your server.
You can find the settings tab in your menu.

![image](https://user-images.githubusercontent.com/13604413/159138053-e9b031f6-0316-4330-9ffa-be661259b6ce.png)

Scoll down to almost the end of the settings, there you'll find this option.

![image](https://user-images.githubusercontent.com/13604413/159138054-48f0b832-e2ae-45ea-9f3b-67ee9c55cc6e.png)

Here you can pick between the specific builds, after you choose the one of your like, save the changes and reboot the server.
Your additional content is now available.

## txAdmin
To enable the content on a txadmin server, you need to open your txadmin-interface and there open the FXServer settings.

![image](https://user-images.githubusercontent.com/13604413/159138094-9d72159c-36f7-4193-aea9-fb1c0260ad04.png)

Just add the desired gamebuild in the Additional Arguments

```
+set sv_enforceGameBuild ID
```

After adding the command, be sure the changes and to save and reboot the server.

Current Builds:

| Build ID | Build Name                |
| :------: | :-----------------------: |
| 2060     | Los Santos Summer Special |
| 2189     | Cayo Perico               |
| 2372     | Tuner DLC                 |
| 2545     | The Contract              |
| 2699     | The Criminal Enterprises  |
| 2802     | Los Santos Drug Wars      |
