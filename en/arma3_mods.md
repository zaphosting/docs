---
id: arma3_mods
title: Arma 3: Installing mods on your own server
description: Information on how to install mods on your Arma 3 server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Install Mods
---

## Connect to FTP

Before resources can be installed, the [FTP access](gameserver_ftpaccess.md) must be set up.

After this has been set up, you can now connect and open the server folder:

![image](https://user-images.githubusercontent.com/26007280/189707261-319e5c54-231a-414f-a07e-529b2ec59978.png)


## Preparation

To install mods on the server, we first have to subscribe to them in the Steam workshop:

![image](https://user-images.githubusercontent.com/26007280/189707324-f3eb60dc-5ca4-41b6-94a3-5ddaf01c91b9.png)

Now we start the ArmA 3 Launcher, so that the mods are created in the game folder, after the mods are processed in the launcher we can close the launcher again.

Now we open our ArmA 3 folder, here is a "!Workshop" folder, there are our mods:

![image](https://user-images.githubusercontent.com/26007280/189707349-e2026e6f-2d02-4015-b4e5-47952d43a319.png)

## Upload Mods


To install mods with WinSCP, they can be uploaded to the arma3 folder via drag&drop

![image](https://user-images.githubusercontent.com/26007280/189707380-f586cacd-f974-424d-aac0-63947ec72f26.png)

After this has been uploaded, we then need to open the mod folder and move all data under `keys` to the folder with the same name on your server.

## Activate Mods

Now we open the settings of our game server, under the "Mods" setting we enter our mods as follows

```
@mod1;@mod2;@mod3
```

In our case the whole thing looks like this:

![image](https://user-images.githubusercontent.com/26007280/189707411-6405df05-c5fd-44ea-afc2-08e8df41562b.png)

Make sure that for multiple mods a ; is set between the entries:

![image](https://user-images.githubusercontent.com/26007280/189707437-fc9f2389-c7f8-4289-93e8-4159dd31d9d2.png)


Done! After a server restart the mods are active.
