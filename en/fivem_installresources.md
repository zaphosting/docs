---
id: fivem_installresources
title: Resource Installation
sidebar_label: Resource Installation
---

## Connect with FTP

Before resources can be installed, the [FTP-Access](gameserver_ftpaccess.md) must be set up:

![](https://screensaver01.zap-hosting.com/index.php/s/8TAyBqGcwFEf7Gz/preview)

After this has been set up, you can now connect and open the server folder:

![](https://screensaver01.zap-hosting.com/index.php/s/MHt37AFEeZYgs97/preview)


## Preperation

After a resource has been downloaded, it is usually ZIP packed, it must now be unpacked (e.g. with 7Zip, WinRar or WinZip)

![](https://screensaver01.zap-hosting.com/index.php/s/RAnCTpmKW4GgCS4/preview)

After the resource has been unpacked, it should now contain a __resource.lua or fxmanifest.lua and script files / folder.

![](https://screensaver01.zap-hosting.com/index.php/s/gNtZNKnbjMcgwoE/preview)

> If this is not the case, they may be in a subfolder, usually with the same name.

## Upload Resources

To install resources with WinSCP, they can be uploaded to the "resources" folder using drag & drop.
It would be the same case with installing via FileZilla. 

![](https://screensaver01.zap-hosting.com/index.php/s/DdYcbM798ZX2iDc/preview)

After this has been uploaded, the server.cfg must be opened in the server-data folder:

![](https://screensaver01.zap-hosting.com/index.php/s/d3EAFx73JzJfcf9/preview)

The entry for our resource, in this case "SexySpeedometer-FiveM-master", can now be added under the remaining start entries for resources:

![](https://screensaver01.zap-hosting.com/index.php/s/ygky6YiDr43C8Ns/preview)

> Note: The name of the folder must be entered.

Then the server can be restarted and the resource should appear ingame!
