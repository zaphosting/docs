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

![image](https://user-images.githubusercontent.com/13604413/159184139-e07456a3-965e-4e66-9aed-11a3a1cc9f76.png)

## 📃 configure adminconfig

The "**adminconfig.yaml**" which must be edited is located in the "**Saves**" directory.
To open this directory, the instructions for the [FTP connection](https://zap-hosting.com/guides/docs/en/gameserver_ftpaccess) must be followed.

![image](https://user-images.githubusercontent.com/26007280/189930998-9c22c865-d2fb-4a6d-8cd9-e039cac8ff81.png)

The following values are specified as standard:

![image](https://user-images.githubusercontent.com/26007280/189931028-535b2c79-dcd5-4838-9318-795ffad325a8.png)

The previously selected Steam64ID must now be written after "**Id:**".

![image](https://user-images.githubusercontent.com/26007280/189931066-796567e9-2d96-4b31-8131-2184f5ea6645.png)

With "**Permission**" the rank is determined, which should be given to the user.
The ranks are assigned as follows:

Permission | Rank
-----|-------
3 | gamemaster
6 | moderator
9 | admin
