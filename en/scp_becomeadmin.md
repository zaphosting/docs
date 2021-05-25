---
id: scp_becomeadmin
title: SCP: Secret Laboratory: Become an admin on your own server
description: Information on how to become an admin on your SCP server from ZAP-Hosting.com - ZAP-Hosting.com documentation
sidebar_label: Become Admin
---

> NOTICE: Since recent SCP Updates, the password login is no longer functional. Please use the following guide to add your roles directly by the steamid. 

##  📃 Configuration for the Remote Admin Config

### Requirements

Firstly, you would need to locate your Steam64ID.
You can use the following tool: [SteamID Lookup](https://steamid.io/lookup).
The ID will later be entered in the configuration file.

Here you can find an example of how you can get your steamid by inputting your profile link there:

![](https://screensaver01.zap-hosting.com/index.php/s/yPeWAQAGAiHRSKM/preview)

## ➕ Add Admins

Now the configuration file has to be opened and edited.
This is located in "**Configs**" under "**Settings**".

![](https://screensaver01.zap-hosting.com/index.php/s/oH5YB7tsGCfaZcs/preview)

There the "**config_remoteadmin.txt**" can be opened in which the necessary lines are rewritten.

![](https://screensaver01.zap-hosting.com/index.php/s/tBZofytXqRBrGSp/preview)

The roles are now created and assigned there.
In this, "**SomeSteamId64**" which stands in front of "**@steam: owner**" must be replaced with your SteamID64, which you have previously viewed under "**steamid lookup**"

![](https://screensaver01.zap-hosting.com/index.php/s/stbApKLcs9x3tDF/preview)

And once you have replaced your Steam64ID, it should look something like this (with your Steam64ID there instead):
![](https://screensaver01.zap-hosting.com/index.php/s/6zHMtDXiopC72Z9/preview)

This can now be done for every additional user who should receive rights.
In our example we set rights for three users, one of them gets "**owner**" the other two get "**admin**".

![](https://screensaver01.zap-hosting.com/index.php/s/dpGCZcszyGGc3XR/preview)

## 🕴️ Add More Roles to Override the Password

If you have multiple roles you want to override the remote admin password, you can simply adjust the following line in the following file:
"**config_remoteadmin.txt**

Find exactly the following section: 

![](https://screensaver01.zap-hosting.com/index.php/s/cX33xRnPZA2tn9z/preview)

To add more roles, you simply write your desired roles with a comma.
For example, to add admin and moderator to override the password:

![](https://screensaver01.zap-hosting.com/index.php/s/TmQHGLaTKZnj4fD/preview)

> Hint: To open the remote admin console ingame, once you are logged into the server, you would use the "**M**" key. 

> If the server is running, you will have to restart the server for it to take affect. Or if the server is offline, simply turn the server on and then check the Remote Admin Console ingame.
