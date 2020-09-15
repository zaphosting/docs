---
id: scpservermod_uploadplugins
title: Install Plugins
sidebar_label: Install Plugins
---

> To install plugins onto your server, you require SCP: ServerMod. Sadly it will not work on main vanilla version of the game. 

## 📶 Connect to FTP

Before plugins can be installed, the [FTP access](gameserver_ftpaccess.md) must be set up.

After this has been setup, you can connect and open the following server folder.
`/g#####/scp/sm_plugins`

![](https://screensaver01.zap-hosting.com/index.php/s/ttm3MLyR8CpFZFt/preview)

## ⬇️ Installing Plugins

### Finding Plugins

Firstly, you will have to locate available SMOD Compatible Plugins.

The best place to get these, are directly in their [discord](https://discord.gg/T9aurNf)

> This is only one place you can get them. They could be found elsewhere. It's important to check to make sure they are compatible with your SMOD Version. 

In this example, we will get the following plugin:

![](https://screensaver01.zap-hosting.com/index.php/s/smGccFjzBbR5iRw/preview)

### Uploading Plugins

Once you have your wanted plugins installed, you will then upload them to your server FTP. You can upload them via **drag&drop** into the **sm_plugins folder.**

![](https://screensaver01.zap-hosting.com/index.php/s/kKCZ66323om7DRm/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/6xPEzC2fTDjzNrj/preview)

> Note: After any plugin installation, you will have to **restart your server** for them **to take affect.**

### Configuring Plugins

Depending on the plugin, there could be various configurations you will have to add to your config_gameplay.txt.

In our example plugin, the following configurations are defined.

![](https://screensaver01.zap-hosting.com/index.php/s/DQbaycE3Fze8Hyb/preview)

To add these, we would edit the config_gameplay.txt.

You can find that using the **Configs** tab on the left.

![](https://screensaver01.zap-hosting.com/index.php/s/c4P7PMmoqQbgi8E/preview)

And then we can find the **config_gameplay.txt**

![](https://screensaver01.zap-hosting.com/index.php/s/2NcpJqjNQDjkRgj/preview)

> The configurations themselves can really be written anywhere. For best practice, we will write them under the '#Misc gameplay settings' in the config.gameplay.txt file.

![](https://screensaver01.zap-hosting.com/index.php/s/gr2AR2mywrH4z6q/preview)

> NOTE: Depending on the plugin, your configurations will be different. Always make sure to read the instructions with that plugin, so you can add the configs correctly.

After the configurations are defined, you will restart your server (or start the server) and then check it directly ingame!  

![](https://screensaver01.zap-hosting.com/index.php/s/L3C3xTZYfyPLS5Z/preview)
