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

![image](https://user-images.githubusercontent.com/26007280/189888449-eda43870-464c-416e-b3ae-b373b71cc6a0.png)

## ➕ Add Admins

Now the configuration file has to be opened and edited.
This is located in "**Configs**" under "**Settings**".

![image](https://user-images.githubusercontent.com/13604413/159181503-5c3ddda0-88e2-4bae-a2a0-a2160268ac0f.png)

There the "**config_remoteadmin.txt**" can be opened in which the necessary lines are rewritten.

![image](https://user-images.githubusercontent.com/13604413/159181547-d354215d-2563-42ee-803e-673822364aed.png)

The roles are now created and assigned there.
In this, "**SomeSteamId64**" which stands in front of "**@steam: owner**" must be replaced with your SteamID64, which you have previously viewed under "**steamid lookup**"

![image](https://user-images.githubusercontent.com/13604413/159181591-fe0fb375-db67-45a6-8790-1a497e81c69b.png)

This can now be done for every additional user who should receive rights.
In our example we set rights for three users, one of them gets "**owner**" the other two get "**admin**".

![image](https://user-images.githubusercontent.com/13604413/159181666-fd68aac0-2c42-470c-b0c2-b1448d67a2cd.png)

## 🕴️ Add More Roles to Override the Password

If you have multiple roles you want to override the remote admin password, you can simply adjust the following line in the following file:
"**config_remoteadmin.txt**

Find exactly the following section: 

![image](https://user-images.githubusercontent.com/26007280/189888482-6a066272-bf6d-4741-a73b-447d020015e8.png)

To add more roles, you simply write your desired roles with a comma.
For example, to add admin and moderator to override the password:

![image](https://user-images.githubusercontent.com/26007280/189888498-75842a1c-848b-4169-a468-270a32edccf9.png)

> Hint: To open the remote admin console ingame, once you are logged into the server, you would use the "**M**" key. 

> If the server is running, you will have to restart the server for it to take affect. Or if the server is offline, simply turn the server on and then check the Remote Admin Console ingame.
