---
id: beammp-authkey
title: "BeamMP: Create an Auth Key"
description: Information on how to create an Auth Key for your BeamMP server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Create an Auth Key
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Why do I need a key?

An Auth Key is required if the server is to be displayed in the server list, otherwise it is only available via the direct connection.

<InlineVoucher />

## Preparation
To create your own authkey, we first log in to https://beammp.com/keymaster, which requires a Discord account.
After we have logged in, we click on "Keys" on the left, which takes us to the Licensekey overview:

![image](https://screensaver01.zap-hosting.com/index.php/s/Zp72q2WR85pxJgq/preview)

Here we now click on the blue "here" to create the key:

![image](https://screensaver01.zap-hosting.com/index.php/s/ARqCQyEbF6BYnH4/preview)


## Specify data

Now we can fill in the data as follows:

- **Server Name:** A name for your server, this does not have to be the same as the name in the settings.
- **Server IP:** The IP of your server, without port.


### Specify IP

The IP must be specified without the port, we can find this at the top of our interface:

![image](https://screensaver01.zap-hosting.com/index.php/s/8MJeXxm87EdLykg/preview)

## Create Key

Now we click on "Create", a key will now be generated.

![image](https://screensaver01.zap-hosting.com/index.php/s/Ebyk5tPCHnppcWC/preview)

## Set Key

Now we open the settings of our game server and scroll down, here we can now specify our own key under "Auth Key", the final result should look like this.

![image](https://screensaver01.zap-hosting.com/index.php/s/5p7LdSDCJzrxKDy/preview)

Now we save the settings and restart the server.

Done! The key is now applied and the server should list itself shortly.
