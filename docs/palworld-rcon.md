---
id: palworld-rcon
title: "Palworld: Server Using RCON"
description: Information on how to use RCON with your Palworld server from ZAP-Hosting to manage your server - ZAP-Hosting.com documentation
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

Simply head over to the **Configs** section on your game server's webinterface and press the blue edit file button, as seen below:

![image](https://github.com/zaphosting/docs/assets/42719082/53c8acad-7347-4c3e-85bf-5ae0ad423fc6)

A text editor will open up allowing you to directly edit the file. In the file, search for the `RCONEnabled` parameter and set this to `true`, for example: `RCONEnabled=True`. We recommend using `CTRL+F` to open your browser's search tool to help with this.

Right beside it, there will also be an `RCONPort` parameter. This is the RCON interface port that you will use to connect later on.

![image](https://github.com/zaphosting/docs/assets/42719082/39871736-7ea1-4fb8-85b8-7f5e311cdba4)

:::note
We advise you not to change this value for your game server, as this is predefined and altering it may break functionality. For self-hosted Palworld servers on VPS products, you can edit this but ensure that you port forward the selected port.
:::

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
The Server must be stopped before the config can be edited, editing the config and restarting the server will result in any changes being undone.
:::

Another method of editing your configuration file, is through FTP. If you are not familiar with using FTP, we recommend you to have a look at the [FTP file access](gameserver-ftpaccess.md) guide. However, this method takes longer and if you wish to directly edit the file contents, we recommend simply using the **Configs** section on your game server's webinterface as mentioned.

Once you have connected to your server through FTP, head over to the following directory:
```
../Pal/Saved/Config/WindowsServer/ # For Windows
../Pal/Saved/Config/LinuxServer/ # For Linux
```

Find the `PalWorldSettings.ini` file and open this. In the file, search for the `RCONEnabled` parameter and set this to `true`, for example: `RCONEnabled=True`.

Right beside it, there will also be an `RCONPort` parameter. This is the RCON interface port that you will use to connect later on.

:::note
We advise you not to change this value for your game server, as this is predefined and altering it may break functionality. For self-hosted Palworld servers on VPS products, you can edit this but ensure that you port forward the selected port.
:::

</TabItem>
</Tabs>

:::info
Make sure to restart your server once you have adjusted your configuration details.
:::

## Using RCON

Now that you have you have enabled RCON in your server's configuration, you will be able to access Palworld's RCON interace via the port that was defined in the file.

You will need to use an RCON program to connect to this. We recommend using [RCON Console](https://sourceforge.net/projects/rconconsole/) as it is open-source.

In the RCON program of your choice, you will have to input the IP address of your server and the RCON port that was defined in the configuration file. Ensure that your game server is online and running.

:::tip
Ensure that you are entering the RCON Port you viewed in the configuration file and not the port that you connect to your server through. This is a common mistake.
:::

If the connection is successful, you will now be able to send commands to your Palworld sever through the RCON Console program that you chose.

:::tip
Check out our [Palworld server commands guide](palworld-server-commands.md) to view all the currently available commands that you can run through RCON.
:::

You have successfully enabled RCON on your Palworld server.