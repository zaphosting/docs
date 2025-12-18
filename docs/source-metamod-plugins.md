---
id: source-metamod-plugins
title: Installing plugins
description: "Discover how to manage and troubleshoot Sourcemod plugins effectively for enhanced server performance → Learn more now"
sidebar_label: Plugins
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Plugin Installation

The following explains how to install plugins. In order to be able to use plugins you need Sourcemod / Metamod. Instructions on how to install it can be found here: [Installation](source-metamod-installation.md)



In order to install plugins, you need to upload them via FTP. The files of the plugin have to be uploaded into the **Plugins** directory under **../addons/sourcemod/**. Depending on the complexity of the plugin it's possible that there are already configs and translation files available. If this is the case, then these have to be uploaded into the **configs** and **translations** folder.



## Disable / remove plugins

In the **Plugins** directory you will find a subfolder named **disabled**. There you can put in the plugins which you don't want to be loaded temporarily. It is sufficient to move the corresponding **.smx** file. 



If you want to disable a plugin permanently then it is necessary to delete the corresponding plugin files. The plugin will then be deactivated after a map change or restart of the server.



## Common issues


**Why does my installed plugin not work?**

Solutions:

- Make sure that all prerequisites are met during the plugin setup. Some plugins require a database to work properly. In this case you have to make further adjustments to the **database.cfg** located in theconfig directory.
- Changes to the source engine occur regularly. Hence, a plugin which has been released a long time ago but hasn't been maintained may no longer be compatible. In this case, the only possibility is to visit the Alliedmodders Forum to find an unofficial fixed version or to use an alternative plugin in general.
- If none of the above options work, then it's recommended to have a look at the Live Console or the log files. Usually the cause of the issue can be found there.

<InlineVoucher />
