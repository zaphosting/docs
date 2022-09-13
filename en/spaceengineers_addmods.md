---
id: spaceengineers_addmods
title: Space Engineers: Installing mods on your server
description: Information on how to install mods on your Space Engineers server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Install Mods
---

### 📋 Prepartion

In order to be able to add mods on a server, a config file must be edited. So that there are no problems applying the changes, please make sure that your server is stopped beforehand!

So that the correct config is processed in the further course, the name of the savegame must be found out beforehand. If the settings for this have not been adjusted, the default is "zap001". However, to be on the safe side, check this as described now::

To get to the settings of your server, open the item "Settings" in the left list under the tab "Settings"

![image](https://user-images.githubusercontent.com/26007280/189898758-9c8db3be-053e-457f-8e86-d0ccf138c12f.png)

The name of the savegame can be viewed or adapted in the first field on this page. This name must now be remembered so that the correct config file can be edited later.

![image](https://user-images.githubusercontent.com/26007280/189898788-ebf2ab44-3f2e-4528-a2f3-98361a26bd71.png)

The installation of **Notepad++** is also a prerequisite for this manual so that the steps can be carried out exactly the same way!

## 🆕 Pick Out Mods

A lot of mods can be found in the Space Engineers workshop. The workshop can be found [here](https://steamcommunity.com/workshop/about/?appid=244850).

After an interesting mod has been found, we click on it once to see all further details. If you like the mod, then the mod ID must now be saved. The Mod-ID is usually marked in bold on the side or at the top of the URL bar:

![image](https://user-images.githubusercontent.com/26007280/189898817-181c3f21-671c-4cc4-adf8-60d30f6ba7c5.png)

## 🛠️ Open Config Files

There are two ways to edit a server's files. On the one hand, this would be possible via [FTP](https://zap-hosting.com/guides/docs/en/gameserver_ftpaccess/) and once through the Config Editor in the web interface itself.

In this case, the config is edited manually via FTP to avoid syntax errors in the config. How exactly the connection via FTP is established is described in detail in the instructions linked above.

As soon as the connection has been established via FTP, you have to navigate to the following directory:

``/gXXXXXX/space-engineers/DedicatedServer64/config/Saves``

This folder lists all savegames that have ever been created on the server. To be able to adapt the configs of the respective savegame, the corresponding folder must now be opened. In our example this would be the folder "zap001":

![image](https://user-images.githubusercontent.com/26007280/189898857-e6822503-5a52-4757-ad4c-7bdd121412a8.png)

The sandbox file must now be edited in this folder. Exactly this config has to be opened as shown in the screenshot!

![image](https://user-images.githubusercontent.com/26007280/189900173-79a90811-c37e-4d8f-9a0f-6c93f323ddef.png)

## ➕ Add Mods

There is already a mod area in the config, which is at the end of the config. We mark this part with the mouse and then remove it. Then we add the following content:

`<Mods></Mods>`

As soon as the content is inserted, we move the cursor between ">" & "<" and then press ENTER once. This will automatically use the correct Sytnax and we can continue.

![image](https://user-images.githubusercontent.com/26007280/189900206-9be3ff6f-1fb3-4ce8-828a-e5a000589738.png)

In the next step we add the first mod. For this we work with a "ModItem", which forms a mod. To do this, we copy the following content and then paste it into the config as shown in the GIF:

```xml
	<ModItem>
		<Name>12345.sbm</Name>
		<PublishedFileId>12345</PublishedFileId>
		<PublishedServiceName>Steam</PublishedServiceName>
	</ModItem>
```

![image](https://user-images.githubusercontent.com/26007280/189900235-2335abe1-56e7-4b9b-bca1-f5d92df8d7ed.png)

> Here 12345 must be exchanged with the mod ID of your selected mod!

As can be seen in the GIF, the same steps just have to be repeated again to add a mod. After all desired mods have been added, the config can be saved with **CTRL+S** and the config can be closed. Then the server can be started normally and the mods are then installed automatically.
