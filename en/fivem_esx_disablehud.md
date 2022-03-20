---
id: fivem_esx_disablehud
title: FiveM ESX Server: Disable/enable HUD
description: Information on how to disable/enable the HUD on your FiveM server running ESX from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Disable HUD
---

## 📑 Find and edit Config

Once we have done this we open the Config page and search for es_extended.
Just press CTRL + F and search for es_extended.
Then you better find it fast.
We'll work on these.

![image](https://user-images.githubusercontent.com/13604413/159166882-9f7ff88e-e82e-4f0f-8942-c729fe037906.png)

Now let's have a look: Config.EnableHUD.

![image](https://user-images.githubusercontent.com/13604413/159166890-39e92b90-cb40-4650-8733-c08fa926775a.png)

We then set this to false and save the file.

Then we go to the Server.cfg.
This can also be found on the Config page
There we search again with STR + F for es_
We then search for es_ui and delete this line kpmplett out.
Now we save again.

When you have done that you only have to restart the server and that's it.
