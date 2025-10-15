---
id: valheim-savegame
title: "Valheim: Managing savegames on servers"
description: "Discover how to manage, download, and restore your Valheim savegames efficiently using the Savegame-Manager → Learn more now"
sidebar_label: Manage Savegames
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Download Savegames

:::info
Note: Before downloading the savegame you have to stop the server, to save the active savegame, after stopping the server the savegame will show up after reloading the page once.
:::

To download your savegame you can use the `Savegame-Manager` in the webinterface:

![](https://screensaver01.zap-hosting.com/index.php/s/FryL7EXmEYBFBXD/preview)

Here you can easily download your savegame by clicking the green "Download" button:

![](https://screensaver01.zap-hosting.com/index.php/s/2o2gnQ3GKpwc22w/preview)

:::info
Note, you need to download both the `.db` **and** `.fwl` Files.
:::

Done! You can now use the backup for other purposes, or upload it again later.

## Upload & Activate Savegame

To upload your own savegames, we first open our savegame manager.

Here we can now upload our own savegame by drag&drop, this should look like this afterwards:

![](https://screensaver01.zap-hosting.com/index.php/s/H2RJSyMGeiojfxD/preview)

:::info
Note that your savegame should have the same name as it was created by the game.
:::

In our case the backup files are called `380622.fwl` and `380622.db`.

Now we enter the name of the backup above under `Savegame (worlds)`:

![](https://screensaver01.zap-hosting.com/index.php/s/Ggrys4xKjDm7inz/preview)

Under `ZAP Backups` here we look for our savegame:

![](https://screensaver01.zap-hosting.com/index.php/s/beRMYmE4CicDNsz/preview)

Now we just have to press the yellow "Restore" button on both files and confirm the whole thing, then our savegame will be loaded.

After this has been loaded, a message appears at the bottom right:

![](https://screensaver01.zap-hosting.com/index.php/s/Zs9F4rNRen4QMcs/preview)

Now the server can be started, the uploaded savegame will be active on the server.



## Autosaves

Sadly Valheim does not currently support Autosaves, to save your game process, the server has to be stopped, the Restart Planer in the Webinterface can be used to automatically restart your server at specific times:

![](https://screensaver01.zap-hosting.com/index.php/s/gTp5yJDQyHKX7eF/preview)

Here we can simply add a time for a Daily or Weekly restart:

![](https://screensaver01.zap-hosting.com/index.php/s/nyqbMzjNL78qz9K/preview)

Once we have saved the restart, we can also add more than one daily or weekly restart.

![](https://screensaver01.zap-hosting.com/index.php/s/BddatyGLAZZWnCA/preview)

Done! Your Server will now restart at those specific times, the Savegame will be saved during those Restarts.

<InlineVoucher />
