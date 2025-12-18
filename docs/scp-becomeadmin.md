---
id: scp-becomeadmin
title: "SCP Secret Laboratory: Become an admin on your own server"
description: "Discover how to assign administrator permissions for full server control and manage roles effectively in your game server → Learn more now"
sidebar_label: Become admin
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduction
The assignment of administrator permissions allows you simple and comprehensive administration with full control of your server. As an administrator, you have the option of using all available options and functions provided by the game directly in the game. All the steps you need to take to assign administrator permissions for your server will be described below. 
<InlineVoucher />

:::info
Since recent SCP Updates, the password login is no longer functional. Please use the following guide to add your roles directly by the steamid. 
:::


## Configuration for the Remote Admin Config

### Preparation

Firstly, you would need to locate your Steam64ID.
You can use the following tool: [SteamID Lookup](https://steamid.io/lookup).
The ID will later be entered in the configuration file.

Here you can find an example of how you can get your steamid by inputting your profile link there:

![](https://screensaver01.zap-hosting.com/index.php/s/k4EEWwFQB3xAxA2/preview)

## Add Admins

Now the configuration file has to be opened and edited.
This is located in "**Configs**" under "**Settings**".

![](https://screensaver01.zap-hosting.com/index.php/s/NSFrZG3SX6ZaQgb/preview)

There the "**config_remoteadmin.txt**" can be opened in which the necessary lines are rewritten.

![](https://screensaver01.zap-hosting.com/index.php/s/KM6YpQwGC4n8rZW/preview)

The roles are now created and assigned there.
In this, "**SomeSteamId64**" which stands in front of "**@steam: owner**" must be replaced with your SteamID64, which you have previously viewed under "**steamid lookup**"

![](https://screensaver01.zap-hosting.com/index.php/s/HC4Z2s9wPgdJjXT/preview)

This can now be done for every additional user who should receive rights.
In our example we set rights for three users, one of them gets "**owner**" the other two get "**admin**".

![](https://screensaver01.zap-hosting.com/index.php/s/9e7YWoMHAxn3z3b/preview)

## Add More Roles to Override the Password

If you have multiple roles you want to override the remote admin password, you can simply adjust the following line in the following file:
"**config_remoteadmin.txt**

Find exactly the following section: 

![](https://screensaver01.zap-hosting.com/index.php/s/HoGJ7X2ZEWW34bH/preview)

To add more roles, you simply write your desired roles with a comma.
For example, to add admin and moderator to override the password:

![](https://screensaver01.zap-hosting.com/index.php/s/PFLFiG9W3kScZ3d/preview)

:::info
To open the remote admin console ingame, once you are logged into the server, you would use the "**M**" key. If the server is running, you will have to restart the server for it to take affect. Or if the server is offline, simply turn the server on and then check the Remote Admin Console ingame.
:::


## Conclusion

Congratulations, you have successfully configured the administrator permissions. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
