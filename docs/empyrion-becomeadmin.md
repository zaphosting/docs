---
id: empyrion-becomeadmin
title: "Empyrion: Become an Admin"
description: "Learn how to assign administrator permissions for full server control and manage game functions effectively → Learn more now"
sidebar_label: Become admin
services:
  - gameserver-empyrion
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
The assignment of administrator permissions allows you simple and comprehensive administration with full control of your server. As an administrator, you have the option of using all available options and functions provided by the game directly in the game. All the steps you need to take to assign administrator permissions for your server will be described below. 
<InlineVoucher />

## Locate Steam64ID

Firstly, you would need to locate your Steam64ID.
You can use the following tool: [SteamID Lookup](https://steamid.io/lookup).
The ID will later be entered in the configuration file.

Here you can find an example of how you can get your steamid by inputting your profile link there:

![](https://screensaver01.zap-hosting.com/index.php/s/3LQXKFg58qXCCHw/preview)

## Configure adminconfig

The "**adminconfig.yaml**" which must be edited is located in the "**Saves**" directory.
To open this directory, the instructions for the [Access via FTP](gameserver-ftpaccess.md) must be followed.

![](https://screensaver01.zap-hosting.com/index.php/s/XtfdjdgoxcqXsWx/preview)

The following values are specified as standard:

![](https://screensaver01.zap-hosting.com/index.php/s/Tpf23riFnGfZAsP/preview)

The previously selected Steam64ID must now be written after "**Id:**".

![](https://screensaver01.zap-hosting.com/index.php/s/RHEr44CGsaLQWyY/preview)

With "**Permission**" the rank is determined, which should be given to the user.
The ranks are assigned as follows:

Permission | Rank
-----|-------
3 | gamemaster
6 | moderator
9 | admin


## Conclusion

Congratulations, you have successfully configured the administrator permissions. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
