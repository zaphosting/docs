---
id: starrupture-mods
title: "StarRupture: Install Mods"
description: "Learn how to install mods on your StarRupture server and client to enhance gameplay → Learn more now"
sidebar_label: Install Mods
services:
- gameserver-starrupture
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Mods allow you to expand the gameplay of StarRupture by adding new mechanics, content, quality-of-life improvements, or gameplay adjustments created by the community. Many StarRupture mods are distributed through community platforms such as NexusMods and can be installed both on the server and locally on the client.

Installing mods on your server ensures that the server environment loads the modified content, while installing them locally allows your game client to use the same files when connecting to modded servers.

<InlineVoucher />

## Installing mods on the server

To install mods on your StarRupture server, first download the desired mod file from a trusted source such as **NexusMods**.

![img](https://screensaver01.zap-hosting.com/index.php/s/rM4WR4gW2KLyzxz/preview)

Before uploading the mod, make sure your server is stopped to avoid file conflicts during installation. Next, connect to your server via [FTP](gameserver-ftpaccess.md) using an FTP client. Once connected, navigate to the following directory on your server:

```
/gxxxxxxx/StarRupture/Content/Paks
```
Upload the downloaded `.zip` mod file into this folder. After the upload has completed, extract the contents of the archive directly inside the `Paks` directory. Once the files have been extracted, return to your server management panel and start the server again.

During startup, the server will automatically detect and load the installed mods.

## Installing mods on the client

Some StarRupture mods may also need to be installed locally on the client. Most locally installed mods remain active when connecting to servers. First, download the desired mod from a trusted source such as NexusMods.

Next, open your **Steam Library**, right-click **StarRupture**, hover over **Manage**, and select **Browse local files**. Inside the game installation directory, locate the following path:

```
StarRupture/StarRupture/Content/Paks
```

Transfer the downloaded `.zip` mod file into this folder. After copying the file, extract the archive directly into the `Paks` directory. Once extracted, the mod will be loaded automatically the next time you start the game.


## Conclusion

Congratulations! You have successfully installed mods for StarRupture on both the server and client. With mods installed, you can extend the gameplay experience with new features, mechanics, and improvements created by the community.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />