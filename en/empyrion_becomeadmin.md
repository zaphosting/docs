---
id: empyrion_becomeadmin
title: Empyrion Server: Become an Admin
description: Information on how to become an admin on your Empyrion server at ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Become Admin
---

## 🗝️ locate Steam64ID

Firstly, you would need to locate your Steam64ID.
You can use the following tool: [SteamID Lookup](https://steamid.io/lookup).
The ID will later be entered in the configuration file.

Here you can find an example of how you can get your steamid by inputting your profile link there:

![](https://screensaver01.zap-hosting.com/index.php/s/yPeWAQAGAiHRSKM/preview)

## 📃 configure adminconfig

The "**adminconfig.yaml**" which must be edited is located in the "**Saves**" directory.
To open this directory, the instructions for the [FTP connection](https://zap-hosting.com/guides/docs/en/gameserver_ftpaccess) must be followed.

![](https://screensaver01.zap-hosting.com/index.php/s/Eqc2dmTPPZbycEf/preview)

The following values are specified as standard:

![](https://screensaver01.zap-hosting.com/index.php/s/ppYsaXd4emxbHAM/preview)

The previously selected Steam64ID must now be written after "**Id:**".

![](https://screensaver01.zap-hosting.com/index.php/s/eN9yrgMYpgM9Wtf/preview)

With "**Permission**" the rank is determined, which should be given to the user.
The ranks are assigned as follows:

Permission | Rank
-----|-------
3 | gamemaster
6 | moderator
9 | admin
