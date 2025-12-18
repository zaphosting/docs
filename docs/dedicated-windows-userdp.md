---
id: dedicated-windows-userdp
title: "Dedicated Server: Accessing Windows Server via Remote Desktop (RDP)"
description: "Discover how to easily connect to your Windows server remotely using RDP and access it securely from various devices → Learn more now"
sidebar_label: Initial Access (RDP)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Windows OS uses the Remote Desktop (RDP) protocol to easily facilitate connecting remotely to other Windows systems. In this guide, we will go through the simple connection process via RDP to your Windows server.





## Connecting via Windows

Since the inception of RDP, Windows OS has the **Remote Desktop Connection** application installed as a core system application. You can access this simply by searching for this in the Windows search bar or by pressing the Windows key/icon and using the start menu search bar.

![](https://screensaver01.zap-hosting.com/index.php/s/TRfpNC3rACZ3KGB/preview)

In the new window, fill in the **Computer** field as your server's IP Address and press **Connect**. You should now see a Windows native credentials prompt display, where you should input the **Username** as `Administrator` and the **Password** which is the password for your Windows server.

![](https://screensaver01.zap-hosting.com/index.php/s/GCRs6KbGHz27HBS/preview)

Now press **OK** and you should be able to remote connect to your Windows server. If you are facing issues, double check that the credentials you inputted are correct.

:::info
You may see a certificate error appear when connecting for the first time. This is normal and can be safely ignored.
:::

You have successfully connected to your Windows Server.

## Other Remote Connection (RDP) Apps

### Desktop Apps

The following programs are great alternatives that are suitable for connecting to your Windows server through the Remote Desktop protocol (RDP). We highly recommend using the built-in application if you are accessing the server from Windows (as seen in the previous step) as it reduces the hassle and works well.

- Remote Desktop Connection Manager (RDCMan)
- mRemoteNG
- RoyalTS
- Devolutions Remote Desktop Manager
- DameWare Mini Remote Control

### Mobile Device Apps

In modern times, Microsoft provides an official Remote Desktop (RDP) app for both major mobile operating systems. We recommend using these on mobile as they have alot of useful features.

The app can be found here respectively to the platform: [Android](https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx&hl=en) and [iOS](https://apps.apple.com/us/app/remote-desktop-mobile/id714464092)


