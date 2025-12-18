---
id: fivem-gamebuild
title: "FiveM: Enable DLC Content"
description: "Discover how to enforce specific DLC versions on your FiveM server to access the latest maps, vehicles, and content → Learn more now"
sidebar_label: Enable DLC game build
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Enforcing game build allows you to force a specific DLC version to your server, allowing you to play with the latest maps, clothing, vehicles and more! 

<InlineVoucher />

## Available Gamebuilds

This is an overview of all available DLC and its Build IDs: 

| Build ID |        Build Name         |
| :------: | :-----------------------: |
|   2060   | Los Santos Summer Special |
|   2189   |        Cayo Perico        |
|   2372   |         Tuner DLC         |
|   2545   |       The Contract        |
|   2699   | The Criminal Enterprises  |
|   2802   |   Los Santos Drug Wars    |
|   2944   |  San Andreas Mercenaries  |
|   3095   |       The Chop Shop       |
|   3258   |  Bottom Dollar Bounties   |
|   3407   |    Agents of Sabotage     |
|   3570   |        Money Fronts       |



## Enable build

In order use additional DLC content such as Cayo Perico, the Tuner DLC or Los Santos Summer Special, you must set it in the configuration of your server. To set the DLC build, you need to open your txAdmin interface and head over to the FXServer settings.

![](https://screensaver01.zap-hosting.com/index.php/s/HxmnfPEdcDJgZLX/preview)

Now simply add your desired gamebuild in the **Additional Arguments** section through the set command, replacing `BUILD_ID_CHOICE` with one from the table:

```
+set sv_enforceGameBuild BUILD_ID_CHOICE
```



## Conclusion

Once you have picked your choice, proceed to restart your FiveM server. Your server will now launch with the specified DLC build. You have successfully set a gamebuild for your FiveM game server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
