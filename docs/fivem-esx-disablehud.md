---
id: fivem-esx-disablehud
title: "FiveM: Disable/enable HUD"
description: "Understand how to update your ESX server configuration for improved HUD management and server performance → Learn more now"
sidebar_label: Disable HUD
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Archived Guide
This document has been archived. Documents are archived if they are no longer relevant, incorrect or up to date. It has been archived for the following reasons:

**Reason**: The method of realization is for an outdated ESX version. This approach cannot be used for the current ESX version, as the structure has changed. 
::::



<InlineVoucher />

## 📑 Find and edit Config

Once we have done this we open the Config page and search for es_extended.
Just press CTRL + F and search for es_extended.
Then you better find it fast.
We'll work on these.

![](https://screensaver01.zap-hosting.com/index.php/s/FfjdwPMGYgz2k3k/preview)

Now let's have a look: Config.EnableHUD.

![](https://screensaver01.zap-hosting.com/index.php/s/F6w582EoXgbPjeC/preview)

We then set this to false and save the file.

Then we go to the Server.cfg.
This can also be found on the Config page
There we search again with STR + F for es_
We then search for es_ui and delete this line kpmplett out.
Now we save again.

When you have done that you only have to restart the server and that's it.

<InlineVoucher />
