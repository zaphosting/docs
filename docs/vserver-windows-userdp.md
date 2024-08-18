---
id: vserver-windows-userdp
title: "VPS: Accessing Windows Server via Remote Desktop (RDP)"
description: Information on accessing your Windows VPS from ZAP-Hosting using Remote Desktop (RDP) - ZAP-Hosting.com documentation
sidebar_label: Initial Access (RDP)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Windows OS uses the Remote Desktop (RDP) protocol to easily facilitate connecting remotely to other Windows systems. In this guide, we will go through the simple connection process via RDP to your Windows server.

<InlineVoucher />

## Preparing Connection Details

Regardless of the application used to access the Windows server, you will always be required to enter credentials to connect to the server.

Begin by going to your server's web interface panel and heading over to the **Access & Security** section.

On this page, you will be able to view all the necessary information, mainly your server's **IP Address** and user connection credentials. Your user credentials is composed of the **Username** field which should be `Administrator` and the **Password** field.

If your server is new, you will be able to access your initial ranomly-generated password on this page via a prompt. Otherwise, the password is redacted for security reasons, but if you at any point forget it, you can set your own password or randomly generate a new one.

![image](https://screensaver01.zap-hosting.com/index.php/s/amLy6sC6XzBN5fQ/preview)

Now that you have your connection information ready, head over to the next section to select an appropriate application to connect.

## Connecting via Windows

Since the inception of RDP, Windows OS has the **Remote Desktop Connection** application installed as a core system application.

You can access this simply by searching for this in the Windows search bar or by pressing the Windows key/icon and using the start menu search bar.

![image](https://screensaver01.zap-hosting.com/index.php/s/TRfpNC3rACZ3KGB/preview)

In the new window, fill in the **Computer** field as your server's IP Address and press **Connect**.

You should now see a Windows native credentials prompt display, where you should input the **Username** as `Administrator` and the **Password** which you either found or set as new on the web interface panel.

![image](https://screensaver01.zap-hosting.com/index.php/s/GCRs6KbGHz27HBS/preview)

## Other Remote Connection (RDP) Apps

### Desktop Apps

The following alternative programs are suitable for connecting to a Windows server via remote desktop:

- Remote Desktop Connection Manager (RDCMan)
- mRemoteNG
- RoyalTS
- Devolutions Remote Desktop Manager
- DameWare Mini Remote Control

### Mobile Device Apps

In modern times, Microsoft provides an official Remote Desktop (RDP) app for both major mobile operating systems.

These can be found here for: [Android](https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx&hl=en) and [iOS](https://apps.apple.com/us/app/remote-desktop-mobile/id714464092)