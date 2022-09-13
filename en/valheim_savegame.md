---
id: valheim_savegame
title: Valheim: Managing savegames on servers
description: Information on how to manage savegames and worlds on your Valheim server from ZAP-Hosting and how to add existing worlds to your server - ZAP-Hosting.com documentation
sidebar_label: Manage Savegames
---

## ⬇️ Download Savegames

> Note: Before downloading the savegame you have to stop the server, to save the active savegame, after stopping the server the savegame will show up after reloading the page once.

To download your savegame you can use the `Savegame-Manager` in the webinterface:

![image](https://user-images.githubusercontent.com/26007280/189886983-9b246ae8-7d83-4973-86d2-851949d52a5c.png)

Here you can easily download your savegame by clicking the green "Download" button:

![image](https://user-images.githubusercontent.com/26007280/189887012-54f92e39-800a-45eb-af5b-9a3c30c4c3e8.png)

> Note, you need to download both the `.db` **and** `.fwl` Files.

Done! You can now use the backup for other purposes, or upload it again later.

## ⬆️ Upload & Activate Savegame

To upload your own savegames, we first open our savegame manager.

Here we can now upload our own savegame by drag&drop, this should look like this afterwards:

![image](https://user-images.githubusercontent.com/26007280/189887043-55164074-792d-46bb-80c3-16989de2035b.png)

> Note that your savegame should have the same name as it was created by the game.

In our case the backup files are called `380622.fwl` and `380622.db`.

Now we enter the name of the backup above under `Savegame (worlds)`:

![image](https://user-images.githubusercontent.com/26007280/189887083-c83cf435-c0cb-4990-ac9b-100e06a7d387.png)

Under `ZAP Backups` here we look for our savegame:

![image](https://user-images.githubusercontent.com/26007280/189887123-3552aa33-6412-4cc4-b492-f3b299f0b435.png)

Now we just have to press the yellow "Restore" button on both files and confirm the whole thing, then our savegame will be loaded.

After this has been loaded, a message appears at the bottom right:

![image](https://user-images.githubusercontent.com/26007280/189887157-78f48712-1ff8-4b96-b6fe-6505cec941eb.png)

Now the server can be started, the uploaded savegame will be active on the server.



## 🔃 Autosaves

Sadly Valheim does not currently support Autosaves, to save your game process, the server has to be stopped, the Restart Planer in the Webinterface can be used to automatically restart your server at specific times:

![image](https://user-images.githubusercontent.com/26007280/189887182-d028485b-bfc5-447c-a3a0-c4f14461c008.png)

Here we can simply add a time for a Daily or Weekly restart:

![image](https://user-images.githubusercontent.com/26007280/189887203-64517abe-d710-4e01-a4fd-73a479412ac1.png)

Once we have saved the restart, we can also add more than one daily or weekly restart.

![image](https://user-images.githubusercontent.com/26007280/189887229-fc946882-e6c2-43d4-941a-84bbf4def993.png)

Done! Your Server will now restart at those specific times, the Savegame will be saved during those Restarts.
