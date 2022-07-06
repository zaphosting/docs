---
id: arma3_mods
title: Arma 3: Installing mods on your own server
description: Information on how to install mods on your Arma 3 server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Install Mods
---

## Connect to FTP

Before resources can be installed, the [FTP access](gameserver_ftpaccess.md) must be set up.

After this has been set up, you can now connect and open the server folder:

![](https://screensaver01.zap-hosting.com/index.php/s/gt9j36te48R5HqS/preview)


## Preparation

To install mods on the server, we first have to subscribe to them in the Steam workshop:

![](https://screensaver01.zap-hosting.com/index.php/s/g4W9eL3pCNHX9gF/preview)

Now we start the ArmA 3 Launcher, so that the mods are created in the game folder, after the mods are processed in the launcher we can close the launcher again.

Now we open our ArmA 3 folder, here is a "!Workshop" folder, there are our mods:

![](https://screensaver01.zap-hosting.com/index.php/s/tDAYTtjfywYqNJp/preview)

## Upload Mods


To install mods with WinSCP, they can be uploaded to the arma3 folder via drag&drop

![](https://screensaver01.zap-hosting.com/index.php/s/WMKJgjmPESA4Eer/preview)

After this has been uploaded, we then need to open the mod folder and move all data under `keys` to the folder with the same name on your server.

## Activate Mods

Now we open the settings of our game server, under the "Mods" setting we enter our mods as follows

```
@mod1;@mod2;@mod3
```

In our case the whole thing looks like this:

![](https://screensaver01.zap-hosting.com/index.php/s/6LCBSEACYAegH9D/preview)

Make sure that for multiple mods a ; is set between the entries:

![](https://screensaver01.zap-hosting.com/index.php/s/PGcAMnCHgGGtBKW/preview)


Done! After a server restart the mods are active.
