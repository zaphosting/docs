---
id: vserver-windows-change-language
title: "VPS: Manage Languages on Windows Server"
description: "Discover how to customize your Windows server language settings for a localized experience and improve usability → Learn more now"
sidebar_label: Add & Manage Languages
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Windows OS is localised in a wide variety of languages, allowing you to easily use your native language. In this guide, we will cover the available methods of changing the language of your Windows server.

:::info
During initial server configuration, you can pick between English or German server versions, which are highlighted by the **(EN)** and **(DE)** tags during OS version selection.
:::

<InlineVoucher />

## Adding Language Packs

Language packs is a useful feature built-in to Windows which allows you to easily manage localised language packs on your server.

Begin by connecting to your Windows server via RDP. If you need help doing this, please refer to our [Initial Access (RDP)](vserver-windows-userdp.md) guide.

Once connected, search for **Language** via the Windows search bar or by pressing the Windows key/icon and using the start menu search bar.

![](https://screensaver01.zap-hosting.com/index.php/s/iwnxdwsYHPy9AMP/preview)

On this page, find the language section and press the **Add a language** button. 

![](https://screensaver01.zap-hosting.com/index.php/s/EJxNz66LPBDiE9J/preview)

Using the menu, search for the language that you wish to install and select it by pressing **Next**. On the following page, ensure that all the options are ticked, including the **Set as Windows Display language** option if you wish to enable it straight away.

:::important
In order to change the language across Windows OS itself, ensure that the selected language supports the **Display Language** functionality.
:::

:::tip
If you do not see any languages with the **Display Language** field, please install any pending Windows updates via **Update & Security** in the Settings, which resolves this [bug](https://learn.microsoft.com/en-us/troubleshoot/windows-server/shell-experience/cannot-configure-language-pack-windows-server-desktop-experience).
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ZENz49zaSmkLNER/preview)

Windows will now begin downloading the selected language pack. Please be patient as this can take some time to complete.

After the donwload completes, if you didn't previously select the **Set as Windows Display language** option during the download step, go back to the languages page again and select it in the drop down menu.

![](https://screensaver01.zap-hosting.com/index.php/s/Ee3rMKzXTidr9Jk/preview)

Finally restart your server and the new language will be used. You have successfully managed language packs on your Windows server.

## Reinstalling Server OS

If you are facing troubles changing language packs or your server is still brand new, you may decide to simply reinstall your Windows server in English or German via the available OS versions.

:::warning
Reinstalling the OS is a destructive process and **will** erase all data on the server. Ensure that you backup any important data before proceeding with this step.
:::

This can be done by going to your server's web interface panel and heading over to the **Settings** section.

On this page, you will be able to select between **Windows (EN)** and **Windows (DE)** for the respective language and choose to reinstall the server.

![](https://screensaver01.zap-hosting.com/index.php/s/gxw8pKDr8sBBTHQ/preview)

Once you have started the reinstall, please be patient as it can take some time (up to 30mins) for the server to complete the entire process.

<InlineVoucher />
