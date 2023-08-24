---
id: fivem-gamebuild
title: Enable DLC Content
description: Information on how to enable a DLC gamebuild for FiveM servers - ZAP-Hosting.com
sidebar_label: Enable DLC Gamebuild
---

Enforcing game build allows you to force a specific DLC version to your server, allowing you to play with the latest maps, clothing, vehicles and more! You can do this very simply, use the sections below based on your gameserver type to active it.

## FiveM Linux/Windows Gameservers
In order use additional DLC content such as Cayo Perico, the Tuner DLC or Los Santos Summer Special, you must set them in the settings of your server.

You can do this either directly by editing the `server.cfg` file, or the simpler way which is to change it through the **Settings** section of your gameserver's webinterface.

![image](https://github.com/zaphosting/docs/assets/42719082/e486c273-9137-45cf-9370-334fca7d98e2)

You should now either search for `game build` or simply scroll down until you find the **Enforce Game Build** subsection. Here using the drop down menu, you can select which DLC build you wish to set your server to run on.

One you have picked your choice, head over to the bottom of the page and press the **Save** button, next proceed to restart your FiveM server. Your server will now launch with the specified DLC build.

You have successfully set a gamebuild for your FiveM gameserver!

## FiveM txAdmin Gameserver
To enable the content on a txadmin server, you need to open your txadmin-interface and head over to the FXServer settings.

![image](https://user-images.githubusercontent.com/13604413/159138094-9d72159c-36f7-4193-aea9-fb1c0260ad04.png)

Now simply add your desired gamebuild in the **Additional Arguments** section through the set command, replacing `BUILD_ID_CHOICE` with one from the table:
```
+set sv_enforceGameBuild BUILD_ID_CHOICE
```

### Current Gamebuilds:

| Build ID | Build Name                |
| :------: | :-----------------------: |
| 2060     | Los Santos Summer Special |
| 2189     | Cayo Perico               |
| 2372     | Tuner DLC                 |
| 2545     | The Contract              |
| 2699     | The Criminal Enterprises  |
| 2802     | Los Santos Drug Wars      |
| 2944     | San Andreas Mercenaries   |

Once you have picked your choice, proceed to restart your FiveM server. Your server will now launch with the specified DLC build.

You have successfully set a gamebuild for your FiveM gameserver!