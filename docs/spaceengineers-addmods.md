---
id: spaceengineers-addmods
title: "Space Engineers: Installation of mods"
description: "Discover how to safely configure and add mods to your Space Engineers server for a customized gameplay experience → Learn more now"
sidebar_label: Install mods
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

### Prepartion

In order to be able to add mods on a server, a config file must be edited. So that there are no problems applying the changes, please make sure that your server is stopped beforehand!

So that the correct config is processed in the further course, the name of the savegame must be found out beforehand. If the settings for this have not been adjusted, the default is "zap001". However, to be on the safe side, check this as described now::

To get to the settings of your server, open the item "Settings" in the left list under the tab "Settings"

![](https://screensaver01.zap-hosting.com/index.php/s/Begs32xtfWitRDA/preview)

The name of the savegame can be viewed or adapted in the first field on this page. This name must now be remembered so that the correct config file can be edited later.

![](https://screensaver01.zap-hosting.com/index.php/s/DHs7JGyxRMSfDKN/preview)

The installation of **Notepad++** is also a prerequisite for this manual so that the steps can be carried out exactly the same way!

## Pick Out Mods

A lot of mods can be found in the Space Engineers workshop. The workshop can be found [here](https://steamcommunity.com/workshop/about/?appid=244850).

After an interesting mod has been found, we click on it once to see all further details. If you like the mod, then the mod ID must now be saved. The Mod-ID is usually marked in bold on the side or at the top of the URL bar:

![](https://screensaver01.zap-hosting.com/index.php/s/k6WKbbZEizX7TpR/preview)

## Open Config Files

There are two ways to edit a server's files. On the one hand, this would be possible via [Access via FTP](gameserver-ftpaccess.md) and once through the Config Editor in the web interface itself.

In this case, the config is edited manually via FTP to avoid syntax errors in the config. How exactly the connection via FTP is established is described in detail in the instructions linked above.

As soon as the connection has been established via FTP, you have to navigate to the following directory:

``/gXXXXXX/space-engineers/DedicatedServer64/config/Saves``

This folder lists all savegames that have ever been created on the server. To be able to adapt the configs of the respective savegame, the corresponding folder must now be opened. In our example this would be the folder "zap001":

![](https://screensaver01.zap-hosting.com/index.php/s/cLT8FLSnQE42ZwN/preview)

The sandbox file must now be edited in this folder. Exactly this config has to be opened as shown in the screenshot!

![](https://screensaver01.zap-hosting.com/index.php/s/bKrCK6LcCMbkwbb/preview)

## Add Mods

There is already a mod area in the config, which is at the end of the config. We mark this part with the mouse and then remove it. Then we add the following content:

`<Mods></Mods>`

As soon as the content is inserted, we move the cursor between "&gt;" & "&lt;" and then press ENTER once. This will automatically use the correct Sytnax and we can continue.

![](https://screensaver01.zap-hosting.com/index.php/s/JbTqfX455XbffRs/preview)

In the next step we add the first mod. For this we work with a "ModItem", which forms a mod. To do this, we copy the following content and then paste it into the config as shown in the GIF:

```xml
	<ModItem>
		<Name>12345.sbm</Name>
		<PublishedFileId>12345</PublishedFileId>
		<PublishedServiceName>Steam</PublishedServiceName>
	</ModItem>
```

![](https://screensaver01.zap-hosting.com/index.php/s/FkgJmMTBAp8SLzp/preview)

:::info
Here 12345 must be exchanged with the mod ID of your selected mod!
:::

As can be seen in the GIF, the same steps just have to be repeated again to add a mod. After all desired mods have been added, the config can be saved with **CTRL+S** and the config can be closed. Then the server can be started normally and the mods are then installed automatically.

<InlineVoucher />
