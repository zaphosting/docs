---
id: arma-reforger-mods
title: "Arma Reforger: Install Mods via the Workshop"
description: "Learn how to install and enable Arma Reforger Workshop mods on your server → Learn more now"
sidebar_label: Install Mods
services:
  - gameserver-arma-reforger
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Mods play an important role in expanding the gameplay experience in **Arma Reforger**. Through the **Arma Reforger Workshop**, players and creators publish custom missions, gameplay changes, maps, and additional content that can be used on servers.

Installing mods allows server owners to customize gameplay, introduce new mechanics, or provide unique missions for their community. Once installed, players who join the server will automatically download the required mods before connecting.


<InlineVoucher />

## Finding Mods

You first need the **Workshop ID** of the mod you want to install. Open the **Arma Reforger Workshop** and navigate to the desired mod. Each workshop entry has a unique identifier that the server uses to download the mod automatically. 

![img](https://screensaver01.zap-hosting.com/index.php/s/jMNGbRAQdjKcDyn/preview)

## Configuration

To install workshop mods on your server, open your **gameserver management panel** and navigate to **Settings**. Locate the configuration field named **Workshop-Mods**. In this field, enter the **Workshop ID** of the mod you want to install. Example configuration with a single mod:

```
1234567890
```
If you want to install multiple mods, enter each Workshop ID and separate them with a **comma**. Example configuration with multiple mods:

```
1234567890,9876543210,1357924680
```
After entering the desired mod IDs, **save the settings** and restart the server. During startup, the server will automatically download the listed mods from the Arma Reforger Workshop and load them.



## Conclusion

Congratulations! You have successfully installed **Arma Reforger Workshop mods** on your server. For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />

