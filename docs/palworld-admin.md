---
id: palworld-admin
title: "Palworld: Setup Admin"
description: Information about setting up and adding yourself as admin for a Palworld server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Setup Admin
---

import YouTube from '@site/src/components/YouTube/YouTube';


##Introduction
In this guide, we will look at configurating your server with an admin password and adding yourself as an admin in-game. This password can be shared with trusted players to grant a range of admin commands. You can learn more about these server commands through our [Palworld Server Commands guide](palworld-server-commands.md).
<YouTube videoId="SDZC4-FEdNM" title="Setup Palworld server in just a MINUTE!" description="Feel like you understand better when you see things in action?  We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>

## Configuring your Admin password

Firstly, you have to access your configuration settitngs. There are a few ways which you can do this, we list them each below including instructions on setting the password. We recommend using the **Webinterface** option as this is the most user-friendly. Once you have set your admin password, you can head over to the next section.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

The most user-friendly method is by heading over to the **Settings** section on your game server's webinterface.

![image](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

In the **Settings** area, search for the **Game server password** option. In this field, create a password that you wish to use and input it.

![image](https://github.com/zaphosting/docs/assets/42719082/dadbd22b-2fd9-42e1-be71-f6d28a3f2938)

:::info
Once you have a password selected, scroll up and ensure you press the green **Save** button to confirm selection.

![image](https://github.com/zaphosting/docs/assets/42719082/5a4f5ab1-8079-4b20-96a6-36e4aca2e28e)
:::

</TabItem>

<TabItem value="configs" label="Via WI Config file">

#### Via WI Config File

:::note
The Server must be stopped before the config can be edited, editing the config and restarting the server will result in any changes being undone.
:::

Alternatively, for users who wish to directly edit the raw file, you can access this by heading over to the **Configs** section on your game server's webinterface and pressing the blue edit file button, as seen below:

![image](https://github.com/zaphosting/docs/assets/42719082/53c8acad-7347-4c3e-85bf-5ae0ad423fc6)

This will open up a text editor directly on the site to enable you to edit it. Find the **AdminPassword** option within the file (use `CTRL+F` to help with searching) and edit it with the admin password you wish to set. Lastly, save the file and then you can start your server.

![image](https://github.com/zaphosting/docs/assets/42719082/d86376b8-1a41-4fb0-b8cd-8570ddcaa9ae)

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
The Server must be stopped before the config can be edited, editing the config and restarting the server will result in any changes being undone.
:::

The final method of accessing the raw file, is through FTP. If you are not familiar with using FTP, we recommend you to have a look at the [FTP file access](gameserver-ftpaccess.md) guide. However, this method takes longer and if you wish to directly edit the file contents, we recommend simply using the **Configs** section on your game server's webinterface as mentioned.

</TabItem>
</Tabs>

## Setting yourself as admin

Once your admin password is set, you will have to add yourself as admin. Launch Palworld and connect to your server. If you need help doing this, please have a look at our [Palworld Connect guide](palworld-connect.md).

In-game, open the chat using `Enter`. Next, input the following command, replacing `[password]` wihh the admin password that you have set previously:

```
/AdminPassword [password]
```

![image](https://github.com/zaphosting/docs/assets/42719082/2f6e3ee7-e83f-4b71-87dc-d36f9b8c7340)

You should recieve a success message in chat if this was correct. If you received an error, please ensure that the admin password you have inputted is correct and the one that you set in the previous step.