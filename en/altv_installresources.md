---
id: altv_installresources
title: AltV: Installing resources on the server
description: How do I install mods and resources on an AltV server? ZAP-Hosting.com documentations
sidebar_label: Resource Installation
---

## Connect with FTP

Before resources can be installed, the [FTP-Access](gameserver_ftpaccess.md) must be set up:


![](https://screensaver01.zap-hosting.com/index.php/s/bSWG3XSxEH9PHGK/preview)

After this has been set up, you can now connect and open the server folder:


![](https://screensaver01.zap-hosting.com/index.php/s/DGaqtfaeCw6GAcG/preview)


## Preperation

After a resource has been downloaded, it is usually ZIP packed, it must now be unpacked (e.g. with 7Zip, WinRar or WinZip)

![](https://screensaver01.zap-hosting.com/index.php/s/JzPqe7yHCo6JBPc/preview)

After the resource has been unpacked, it should now contain a resource.cfg and script files / folder.

![](https://screensaver01.zap-hosting.com/index.php/s/CkeDn8JSNKbazcM/preview)

> If this is not the case, they may be in a subfolder, usually with the same name.

## Upload Resources

To install resources with WinSCP, they can be uploaded to the "resources" folder using drag & drop.
It would be the same case with installing via FileZilla. 

![](https://screensaver01.zap-hosting.com/index.php/s/K5LeN4BoLzLBWW9/preview)

Once uploaded, the server.cfg must be opened in the gta5-altv-linux folder:

![](https://screensaver01.zap-hosting.com/index.php/s/pzxDsptqpATMXYC/preview)

Under the remaining start entries for resources you can now add the entry for our resource, in this case "altv-speedo":


![](https://screensaver01.zap-hosting.com/index.php/s/kzYqaZsr7Lr4sfA/preview)

> Note: There must be a comma after each line in this list, except the last one.


Then the server can be restarted and the resource should appear ingame!
