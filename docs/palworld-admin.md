---
id: palworld-admin
title: "Palworld: Setup Admin"
description: "Discover how to secure your Palworld server with an admin password and manage trusted players effectively → Learn more now"
sidebar_label: Setup Admin
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


##Introduction
In this guide, we will look at configurating your server with an admin password and adding yourself as an admin in-game. This password can be shared with trusted players to grant a range of admin commands. You can learn more about these server commands through our [Server Commands](palworld-server-commands.md) guide.
<YouTube videoId="SDZC4-FEdNM" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/ramgExKNxeLeDdL/preview" title="Setup Palworld server in just a MINUTE!" description="Feel like you understand better when you see things in action? We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>

<InlineVoucher />

## Configuring your Admin password

Firstly, you have to access your configuration settitngs. There are a few ways which you can do this, we list them each below including instructions on setting the password. We recommend using the **Webinterface** option as this is the most user-friendly. Once you have set your admin password, you can head over to the next section.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

The most user-friendly method is by heading over to the **Settings** section on your game server's webinterface.

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

In the **Settings** area, search for the **Game server password** option. In this field, create a password that you wish to use and input it.

![](https://screensaver01.zap-hosting.com/index.php/s/aQYQDYMP34NnNXr/preview)

:::info
Once you have a password selected, scroll up and ensure you press the green **Save** button to confirm selection.

![](https://screensaver01.zap-hosting.com/index.php/s/YG5MZ6Jt8SdFy4A/preview)
:::

</TabItem>

<TabItem value="configs" label="Via WI Config file">

#### Via WI Config File

:::note
The Server must be stopped before the config can be edited, editing the config and restarting the server will result in any changes being undone.
:::

Alternatively, for users who wish to directly edit the raw file, you can access this by heading over to the **Configs** section on your game server's webinterface and pressing the blue edit file button, as seen below:

![](https://screensaver01.zap-hosting.com/index.php/s/NGeBQ5TB6JkcCHq/preview)

This will open up a text editor directly on the site to enable you to edit it. Find the **AdminPassword** option within the file (use `CTRL+F` to help with searching) and edit it with the admin password you wish to set. Lastly, save the file and then you can start your server.

![](https://screensaver01.zap-hosting.com/index.php/s/gpBjxxmdsWKD4t2/preview)

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
The Server must be stopped before the config can be edited, editing the config and restarting the server will result in any changes being undone.
:::

The final method of accessing the raw file, is through FTP. If you are not familiar with using FTP, we recommend you to have a look at the [Access via FTP](gameserver-ftpaccess.md) guide. However, this method takes longer and if you wish to directly edit the file contents, we recommend simply using the **Configs** section on your game server's webinterface as mentioned.

</TabItem>
</Tabs>

## Setting yourself as admin

Once your admin password is set, you will have to add yourself as admin. Launch Palworld and connect to your server. If you need help doing this, please have a look at our [Connect to Server](palworld-connect.md) guide.

In-game, open the chat using `Enter`. Next, input the following command, replacing `[password]` wihh the admin password that you have set previously:

```
/AdminPassword [password]
```

![](https://screensaver01.zap-hosting.com/index.php/s/75D5ejaWNM6oYNX/preview)

You should recieve a success message in chat if this was correct. If you received an error, please ensure that the admin password you have inputted is correct and the one that you set in the previous step.

<InlineVoucher />
