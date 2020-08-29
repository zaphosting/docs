---
id: fivem_installeup
title: Install EUP
sidebar_label: Install EUP
---

> To install the EUP a Fivem Element Argentum (or higher) key is required [Fivem Patreon](https://www.patreon.com/fivem)

## Connect to FTP

Before EUP can be installed, the [FTP access](gameserver_ftpaccess.md) must be set up

After this has been set up, you can now connect and open the server folder:

![](https://screensaver01.zap-hosting.com/index.php/s/omjKDgFcn64rRMF/preview)


## Preparation

Now we download EUP from the [FiveM Forums](https://forum.cfx.re/t/release-eup-for-fivem-server-sided/139848)

We also need to [download NativeUI](https://github.com/FrazzIe/NativeUILua/archive/master.zip)

after we have downloaded the `eup-ui.7z`, `eup-stream.7z` and `NativeUI-master.zip`, we have to unzip them

![](https://screensaver01.zap-hosting.com/index.php/s/5k99WrAfJAktmfm/preview)

> Note: For NativeUI, you have to open the "NativeUI-master" folder first, there you will find the correct scripts.

After unzipping the resource, it should now contain a __resource.lua or fxmanifest.lua and script files/folders.

**eup-ui**
![](https://screensaver01.zap-hosting.com/index.php/s/2DHfLodNrsyfAk2/preview)

**eup-stream**
![](https://screensaver01.zap-hosting.com/index.php/s/pLrT8mcgHHjQfcp/preview)

**NativeUI**
![](https://screensaver01.zap-hosting.com/index.php/s/DTtctZn4cKzEKpo/preview)

> If this is not the case, they may be in a subfolder, usually with the same name.

## Upload resources


Now we install the resources, in our example via WinSCP, we can upload them via drag&drop into the "resources" folder

![](https://screensaver01.zap-hosting.com/index.php/s/sFme5NHHxCjGand/preview)

After this has been uploaded, the server.cfg must be opened in the server-data folder:

![](https://screensaver01.zap-hosting.com/index.php/s/eM8MtkZJCLg3gdz/preview)

Among the remaining start entries for resources you can now add the entry for our resources, in this case "NativeUI", "eup-stream" and "eup-ui":

![](https://screensaver01.zap-hosting.com/index.php/s/KEojnnKk9WsXR8M/preview)


After that the server can be restarted and EUP ingame should be available via the `/eup` command!
