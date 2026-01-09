---
id: openmp-rcon
title: "Open.mp: Server Using RCON"
description: "Discover how to remotely manage game servers using RCON for efficient server control and security → Learn more now"
sidebar_label: RCON
services:
  - gameserver-openmp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## What is RCON?

RCON is an interface in various programs, such as game servers, with which remote maintenance and remote administration can be carried out. This interface can be used to manage servers that are already running and can be reached. The interface can then be accessed with a specific remote maintenance program and the server can thus be managed.

<InlineVoucher />

## Accessing your Configuration File

In order to use RCON, you will have to begin by accessing your server's configuration and enabling this feature. You can edit the configuration file either through your server's webinterface or directly through FTP.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="configs" label="Via WI Config file">

#### Via Webinterface Config File

We recommend using this method as it is the easiest. 

:::note
The Server must be stopped before the config can be edited, editing the config and restarting the server will result in any changes being undone.
:::

Simply head over to the **Configs** section on your game server's webinterface and press the blue edit file button, as seen below:

![](https://screensaver01.zap-hosting.com/index.php/s/izzL3f9FaGdc9ay/preview)

A text editor will open up allowing you to directly edit the file. In the file, search for the `rcon` section. In here, set the `enable` parameter to `true`, for example: `"enable":true`. We recommend using `CTRL+F` to open your browser's search tool to help with this.

In the same section, you should also setup a password for your RCON interface access by adjusting the `password` parameter. This prevents unauthorized access and should be kept private.

![](https://screensaver01.zap-hosting.com/index.php/s/WPPbd6C7k6m5Ja7/preview)

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
The Server must be stopped before the config can be edited, editing the config and restarting the server will result in any changes being undone.
:::

Another method of editing your configuration file, is through FTP. If you are not familiar with using FTP, we recommend you to have a look at the [Access via FTP](gameserver-ftpaccess.md) guide. However, this method takes longer and if you wish to directly edit the file contents, we recommend simply using the **Configs** section on your game server's webinterface as mentioned.

Once you have connected to your server through FTP, head over to the following directory:
```
..g[zap_id]/gta-openmp/
```

At this path, find the `config.json` file and open it. This is the server configuration file that you should edit.

In the file, search for the `rcon` section. Set the `enable` parameter to `true` and set a password for your RCON interface through the `password` parameter.

</TabItem>
</Tabs>

:::info
Make sure to restart your server once you have adjusted your configuration details.
:::

## Using RCON

Now that you have you have enabled RCON in your server's configuration, you will be able to access Open.mp's RCON interace via the port that was defined in the file.

You will need to use an RCON program to connect to this. We recommend using [RCON Console](https://sourceforge.net/projects/rconconsole/) as it is open-source.

In the RCON program of your choice, you will have to input the IP address and port of your server. Ensure that your game server is online and running.

If the connection is successful, you will now be able to send commands to your Palworld sever through the RCON Console program that you chose. 

:::tip
Check out our [Server Commands](openmp-server-commands.md) to view all the currently available commands that you can run through RCON.
:::

You have successfully enabled RCON on your Palworld server.

<InlineVoucher />
