---
id: openmp-rcon
title: Server Using RCON
description: Information on how to use RCON with your Open.mp server from ZAP-Hosting to manage your server - ZAP-Hosting.com documentation
sidebar_label: RCON
---

## What is RCON?

RCON is an interface in various programs, such as game servers, with which remote maintenance and remote administration can be carried out. This interface can be used to manage servers that are already running and can be reached. The interface can then be accessed with a specific remote maintenance program and the server can thus be managed.

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

Simply head over to the **Configs** section on your gameserver's webinterface and press the blue edit file button, as seen below:

![image](https://github.com/zaphosting/docs/assets/42719082/6a147644-8bfb-4e5d-bff5-3e2c5d999e64)

A text editor will open up allowing you to directly edit the file. In the file, search for the `rcon` section. In here, set the `enable` parameter to `true`, for example: `"enable":true`. We recommend using `CTRL+F` to open your browser's search tool to help with this.

In the same section, you should also setup a password for your RCON interface access by adjusting the `password` parameter. This prevents unauthorized access and should be kept private.

![image](https://github.com/zaphosting/docs/assets/42719082/d3fbb8ac-b836-4e12-a7cf-d1b4961925d7)

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
The Server must be stopped before the config can be edited, editing the config and restarting the server will result in any changes being undone.
:::

Another method of editing your configuration file, is through FTP. If you are not familiar with using FTP, we recommend you to have a look at the [FTP file access](gameserver-ftpaccess.md) guide. However, this method takes longer and if you wish to directly edit the file contents, we recommend simply using the **Configs** section on your gameserver's webinterface as mentioned.

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

In the RCON program of your choice, you will have to input the IP address and port of your server. Ensure that your gameserver is online and running.

If the connection is successful, you will now be able to send commands to your Palworld sever through the RCON Console program that you chose. 

:::tip
Check out our [Open.mp server commands guide](openmp-server-commands.md) to view all the currently available commands that you can run through RCON.
:::

You have successfully enabled RCON on your Palworld server.