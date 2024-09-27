---
id: scpservermod-uploadplugins
title: "SCP Secret Laboratory: Installing plugins on server"
description: Information on how to install plugins on your SCP ServerMod server from ZAP-Hosting.com - ZAP-Hosting.com documentation
sidebar_label: Install Plugins
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::caution The game SCP: Secret Laboratory with the **Servermod extension** is currently no longer actively offered in our store for the time being due to lack of compatibility. We recommend to switch to **[SCP:EXILED](https://zap-hosting.com/guides/docs/exiled-plugins)** instead. This documentation page will remain up for the time being.  :::

<InlineVoucher />

## Connect to FTP

Before plugins can be installed, the [Access via FTP](gameserver-ftpaccess.md) must be set up.

After this has been setup, you can connect and open the following server folder.
`/g#####/scp/sm_plugins`

![](https://screensaver01.zap-hosting.com/index.php/s/2Fid5MKq57YDCNj/preview)

## Installing Plugins

### Finding Plugins

Firstly, you will have to locate available SMOD Compatible Plugins.

The best place to get these, are directly in their [discord](https://discord.gg/T9aurNf)

:::info
This is only one place you can get them. They could be found elsewhere. It's important to check to make sure they are compatible with your SMOD Version. 
:::

In this example, we will get the following plugin:

![](https://screensaver01.zap-hosting.com/index.php/s/bEEQP3cm33fgMFi/preview)

### Uploading Plugins

Once you have your wanted plugins installed, you will then upload them to your server FTP. You can upload them via **drag&drop** into the **sm_plugins folder.**

![](https://screensaver01.zap-hosting.com/index.php/s/HzRKJXFyENqK4N8/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/kSSMs23E6g4PfwN/preview)

:::info
Note: After any plugin installation, you will have to **restart your server** for them **to take affect.**
:::

### Configuring Plugins

Depending on the plugin, there could be various configurations you will have to add to your config_gameplay.txt.

In our example plugin, the following configurations are defined.

![](https://screensaver01.zap-hosting.com/index.php/s/5PrLzeCQaFamGRn/preview)

To add these, we would edit the config_gameplay.txt.

You can find that using the **Configs** tab on the left.

![](https://screensaver01.zap-hosting.com/index.php/s/mMck39x2mEnLtLY/preview)

And then we can find the **config_gameplay.txt**

![](https://screensaver01.zap-hosting.com/index.php/s/SGLpBYM5DAWRRzN/preview)

:::info
The configurations themselves can really be written anywhere. For best practice, we will write them under the '#Misc gameplay settings' in the config.gameplay.txt file.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/JMK542jpCj472ag/preview)

:::info
NOTE: Depending on the plugin, your configurations will be different. Always make sure to read the instructions with that plugin, so you can add the configs correctly.
:::

After the configurations are defined, you will restart your server (or start the server) and then check it directly ingame!  
