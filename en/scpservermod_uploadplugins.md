---
id: scpservermod_uploadplugins
title: SCP: Secret Laboratory: Installing plugins on server
description: Information on how to install plugins on your SCP: ServerMod server from ZAP-Hosting.com - ZAP-Hosting.com documentation
sidebar_label: Install Plugins
---

> To install plugins onto your server, you require SCP: ServerMod. Sadly it will not work on main vanilla version of the game. 

## 📶 Connect to FTP

Before plugins can be installed, the [FTP access](gameserver_ftpaccess.md) must be set up.

After this has been setup, you can connect and open the following server folder.
`/g#####/scp/sm_plugins`

![image](https://user-images.githubusercontent.com/26007280/189887882-337f89e3-15bf-47dd-978d-f71e83647901.png)

## ⬇️ Installing Plugins

### Finding Plugins

Firstly, you will have to locate available SMOD Compatible Plugins.

The best place to get these, are directly in their [discord](https://discord.gg/T9aurNf)

> This is only one place you can get them. They could be found elsewhere. It's important to check to make sure they are compatible with your SMOD Version. 

In this example, we will get the following plugin:

![image](https://user-images.githubusercontent.com/13604413/159183661-4e3c22ac-4d4b-44d2-b74c-4f521d581ac0.png)

### Uploading Plugins

Once you have your wanted plugins installed, you will then upload them to your server FTP. You can upload them via **drag&drop** into the **sm_plugins folder.**

![image](https://user-images.githubusercontent.com/13604413/159183662-b9032125-b4d6-46dd-aba2-e34f1f70762a.png)

![image](https://user-images.githubusercontent.com/13604413/159183666-e5ed02fb-c7e3-44bd-83e7-2ecb99a8befe.png)

> Note: After any plugin installation, you will have to **restart your server** for them **to take affect.**

### Configuring Plugins

Depending on the plugin, there could be various configurations you will have to add to your config_gameplay.txt.

In our example plugin, the following configurations are defined.

![image](https://user-images.githubusercontent.com/13604413/159183671-0cbad21c-98e4-4a9c-831c-2313a7072c78.png)

To add these, we would edit the config_gameplay.txt.

You can find that using the **Configs** tab on the left.

![image](https://user-images.githubusercontent.com/26007280/189887942-4f3d211d-b8c5-4cdb-8cfb-22f2d238968d.png)

And then we can find the **config_gameplay.txt**

![image](https://user-images.githubusercontent.com/26007280/189888122-c8a7d186-8c02-4da6-905d-ff94990c4b5c.png)

> The configurations themselves can really be written anywhere. For best practice, we will write them under the '#Misc gameplay settings' in the config.gameplay.txt file.

![image](https://user-images.githubusercontent.com/26007280/189888144-969a4758-bb1e-45e2-a364-95225d608613.png)

> NOTE: Depending on the plugin, your configurations will be different. Always make sure to read the instructions with that plugin, so you can add the configs correctly.

After the configurations are defined, you will restart your server (or start the server) and then check it directly ingame!  
