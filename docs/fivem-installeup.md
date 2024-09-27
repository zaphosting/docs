---
id: fivem-installeup
title: "FiveM: Install EUP on server"
description: Information on how to install EUP on your FiveM server from ZAP-Hosting.com - ZAP-Hosting.com documentation
sidebar_label: Install EUP
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
To install the EUP a Fivem Element Argentum (or higher) key is required [Fivem Patreon](https://www.patreon.com/fivem)
:::

<InlineVoucher />

## Connect to FTP

Before EUP can be installed, the [Access via FTP](gameserver-ftpaccess.md) must be set up

After this has been set up, you can now connect and open the server folder.

![](https://screensaver01.zap-hosting.com/index.php/s/RpZGaJ6W3HMgmtg/preview)

## Preparation

Now we download EUP from the [FiveM Forums](https://forum.cfx.re/t/emergency-uniform-pack-client-server-sided-easy-install-update-5-0-announcement/97599)

We also need to [download NativeUI](https://github.com/FrazzIe/NativeUILua/archive/master.zip)

after we have downloaded the `eup-ui.7z`, `eup-stream.7z` and `NativeUI-master.zip`, we have to unzip them

![](https://screensaver01.zap-hosting.com/index.php/s/D5XMadzJ2NwpLgq/preview)

:::info
Note: For NativeUI, you have to open the "NativeUI-master" folder first, there you will find the correct scripts.
:::

After unzipping the resource, it should now contain a __resource.lua or fxmanifest.lua and script files/folders.

**eup-ui**
![](https://screensaver01.zap-hosting.com/index.php/s/PjXPtC49ZAkiD87/preview)

**eup-stream**
![](https://screensaver01.zap-hosting.com/index.php/s/y4HNTngCjkg8n44/preview)

**NativeUI**
![](https://screensaver01.zap-hosting.com/index.php/s/EwdgkfA5qjWNAYj/preview)

:::info
If this is not the case, they may be in a subfolder, usually with the same name.
:::

## Upload resources


Now we install the resources, in our example via WinSCP, we can upload them via drag&drop into the "resources" folder

![](https://screensaver01.zap-hosting.com/index.php/s/qFtS6sJHy67Y773/preview)

After this has been uploaded, the server.cfg must be opened in the server-data folder:

![](https://screensaver01.zap-hosting.com/index.php/s/TaLNK6SP8jwCJYT/preview)

Among the remaining start entries for resources you can now add the entry for our resources, in this case "NativeUI", "eup-stream" and "eup-ui":

![](https://screensaver01.zap-hosting.com/index.php/s/zdMYkpoSnP8mjHM/preview)


After that the server can be restarted and EUP ingame should be available via the `/eup` command!
