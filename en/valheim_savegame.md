---
id: valheim_savegame
title: Manage Savegames
sidebar_label: Manage Savegames
---

## Download Savegames

> Note: Before downloading the savegame you have to stop the server, to save the active savegame, after stopping the server the savegame will show up after reloading the page once.

To download your savegame you can use the `Savegame-Manager` in the webinterface:

![](https://screensaver01.zap-hosting.com/index.php/s/BK8WoBMGQJnfQPb/preview)

Here you can easily download your savegame by clicking the green "Download" button:

![](https://screensaver01.zap-hosting.com/index.php/s/GEAsY3MJWjdtmWk/preview)

> Note, you need to download both the `.db` **and** `.fwl` Files.

Done! You can now use the backup for other purposes, or upload it again later.

## Upload & Activate Savegame

To upload your own savegames you need FTP access to your server, we have a guide to set this up, [here](gameserver_ftpaccess.md).

After we logged in via FTP we can open the `world-backups` folder, here are all our worlds except the active one.

We can now upload our own savegame in this folder via drag&drop, this should look like this afterwards:

![](https://screensaver01.zap-hosting.com/index.php/s/AXwfFHs7yMZ7kWN/preview)

> db-backup files in this folder are created when your server is started or stopped, you can ignore them.

> Note that your savegame should be named exactly as it was created by the game.

In our case the backup files are called `meinewelt123.db` and `meinewelt123.fwl`.

Now we open the settings of our game server:
![](https://screensaver01.zap-hosting.com/index.php/s/X8wgqWdnpZNk3J5/preview)

Here we have to enter the name of the savegame under `Savegame`:

![](https://screensaver01.zap-hosting.com/index.php/s/bx9T5n3SH4xYq26/preview)

Since our savegame is called `meinewelt123.db`, `meinewelt123` is entered here.

Now we can open the `Savegame-Manager` in the web interface:

![](https://screensaver01.zap-hosting.com/index.php/s/BK8WoBMGQJnfQPb/preview)

Under `Backups` we should find the same saves that are in the `world-backups` folder, here we look for our savegame:

![](https://screensaver01.zap-hosting.com/index.php/s/d8Q68crjokoSEqR/preview)

Now we just have to press the yellow "Restore" button on both files and confirm the whole thing, then our savegame will be loaded.

After this has been loaded, a message appears at the bottom right:

![](https://screensaver01.zap-hosting.com/index.php/s/eAsK7bqYtEfNMRR/preview)

Now the server can be started, the uploaded savegame will then be active on the server.