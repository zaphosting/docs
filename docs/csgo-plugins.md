---
id: csgo-plugins
title: "CS:GO: Installation of plugins"
description: "Learn how to install Sourcemod plugins on your CS:GO server and extend gameplay with custom features → Learn more now"
sidebar_label: Install plugins
services:
  - gameserver-csgo
---

import Button from '@site/src/components/Button';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/csgo-plugins.json';



## Introduction

CS:GO continues the long tradition of community driven server customization. Plugins allow server owners to extend gameplay, add quality of life features, implement custom rulesets, or build entirely new game modes.

For CS:GO servers, **Sourcemod** is the most widely used framework for server side plugins. Sourcemod works together with **Metamod:Source**, which acts as the base layer that allows plugins to hook into the game engine. By installing both components, server administrators can easily manage plugins and extend server functionality.

<InlineVoucher />



## Installing Metamod:Source

Metamod:Source must be installed first, as Sourcemod depends on it. Start by downloading the latest Metamod:Source release from the official website. Extract the downloaded archive on your computer.

Inside the archive you will find an `addons` directory. Upload this directory to your CS:GO server using [FTP](gameserver-ftpaccess.md) so that it merges with the existing game directory `../csgo/`.


After uploading the files, restart your server. To verify that Metamod is running correctly, open the server console and execute the following command:

```
meta version
```


If Metamod is installed correctly, the console will display the installed version and additional information.

<Button label="Download Metamod:Source" link="https://www.metamodsource.net/downloads.php" block />



## Installing Sourcemod

Once Metamod:Source is installed, you can install Sourcemod. Download the latest stable version of Sourcemod from the official website and extract the archive. Upload the included `addons` and `cfg` folders to your CS:GO server using [FTP](gameserver-ftpaccess.md). The directories must be placed in the CS:GO game directory `../csgo/`. After uploading the files, restart the server. Sourcemod will now be loaded automatically through Metamod.

To confirm that Sourcemod is working, open the server console and run:

```
sm version
```


If the installation was successful, the server will return the current Sourcemod version and build information.

<Button label="Download Sourcemod" link="https://www.sourcemod.net/downloads.php" block />



## Installing Plugins

Plugins for Sourcemod are typically distributed as `.smx` files. These compiled plugin files must be uploaded to the `plugins` directory inside the Sourcemod installation.

```
../csgo/addons/sourcemod/plugins/
```


After uploading the plugin file, restart the server or reload the plugin directly through the server console using the following command:

```
sm plugins load <pluginname>
```


If a plugin does not load correctly, check the server logs located in the Sourcemod `logs` directory for possible error messages.

Some plugins may also include additional configuration files. These files are usually placed inside:

```
../csgo/addons/sourcemod/configs/
```


Always follow the installation instructions provided by the plugin developer to ensure correct functionality.



## Popular Plugins

<SearchableItemList items={items} />



## Conclusion

Provided you have followed all the steps, you should have successfully installed Metamod:Source, Sourcemod, and your desired plugins on your CS:GO server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />