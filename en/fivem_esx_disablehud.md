---
id: fivem_esx_disablehud
title: FiveM ESX Server: Disable/enable HUD
description: Information on how to disable/enable the HUD on your FiveM server running ESX from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Disable HUD
---

## 📔 Deactivate Force overwrite

We must first make sure that "Force overwrite" is disabled.
Therefore we go to the tab "Resources".

![](https://screensaver01.zap-hosting.com/index.php/s/6ZXxWHN4wCE6WcE/preview)

There we will remove the hook.

![](https://screensaver01.zap-hosting.com/index.php/s/KqWnnT98PB8W9QD/preview)

## 📑 Find and edit Config

Once we have done this we open the Config page and search for es_extended.
Just press CTRL + F and search for es_extended.
Then you better find it fast.
We'll work on these.

![](https://screensaver01.zap-hosting.com/index.php/s/gNyanXGeexobkeC/preview)

Now let's have a look: Config.EnableHUD.

![](https://screensaver01.zap-hosting.com/index.php/s/25HfeCciXc3wRZr/preview)

We then set this to false and save the file.

Then we go to the Server.cfg.
This can also be found on the Config page
There we search again with STR + F for es_
We then search for es_ui and delete this line kpmplett out.
Now we save again.

When you have done that you only have to restart the server and that's it.
