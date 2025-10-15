---
id: barotrauma-becomeadmin
title: "Barotrauma: Become an admin on your own server"
description: "Discover how to assign administrator permissions for full server control and seamless in-game management → Learn more now"
sidebar_label: Become admin
services:
  - gameserver-barotrauma
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
The assignment of administrator permissions allows you simple and comprehensive administration with full control of your server. As an administrator, you have the option of using all available options and functions provided by the game directly in the game. All the steps you need to take to assign administrator permissions for your server will be described below. 
<InlineVoucher />

## Configuration
Adding an admin is done via the **Clientpermissions.xml** Config, which you can find in the interface under Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/oJNTozXz9YW8sjG/preview)


A new client entry must be added to the Config to add a new player. The syntax for this looks like this:

```xml
<Client
    name="<player name>"
    steamid="<steamid>"
    permissions="<permission(s)>">
    <command
      name="<commandname>" />
  </Client>
```



The client entry contains the variables **Name, SteamID, Permissions, and Command**. Those must be modified. The name can be set as desired. It only serves as a placeholder for an overview. Afterwards the SteamID64 of your Steam Account must be defined.

You can find it by accessing your Steam profile and then right-clicking anywhere on the profile. There you can copy the Steam URL of the profile.



![](https://screensaver01.zap-hosting.com/index.php/s/C3nfdjemxkjZH5n/preview)



Afterwards, the URL must be typed in one of the following websites:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/asnbFc4JDifdSHn/preview)



This will provide you the general account information as well as the Steam ID. In this case the **Steam ID 64** is necessary.  The Steam ID must then be added to the client entry under **SteamID**. The result of this looks like this: 

```xml
<Client
    name="Name"
    steamid="123456789"
    permissions="<permission(s)>">
    <command
      name="<commandname>" />
  </Client>
```



By now you are already admin, but no specific rights have been added to your account yet. You can add them by adding the permissions and commands that can be used. This can be done for example like this:

```xml
...
    permissions="<permission(s)>"> ---> permissions="ServerLog, ConsoleCommands">
...
```

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ClientPermissions> 
<Client
    name="Name"
    steamid="123456789"
    permissions="ServerLog, ConsoleCommands">
    <command
      name="heal" />
    <command
      name="spawn" />
  </Client>
</ClientPermissions>
```



In this example the admin has been given access to the server logs, console, heal and spawn command. In the following you will find an overview of the permissions you can set.



## Permissions

| Permissions       | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| ManageRound       | Can start/end rounds.                                        |
| Kick              | Can kick other players.                                      |
| Ban               | Can ban other players.                                       |
| Unban             | Can remove bans from other players.                          |
| SelectSub         | Can choose the submarine.                                    |
| SelectMode        | Can choose the game mode.                                    |
| ManageCampaign    | Can select the destination, mission and purchase supplies from the Campaign store. |
| ConsoleCommands   | Can use console commands - note that you also need to give permissions for individual console commands. |
| ServerLog         | Can read server logs.                                        |
| ManageSettings    | Can change server settings.                                  |
| ManagePermissions | Can change the permissions of other clients.                 |
| KarmaImmunity     | Is made immune to the karma system's negative effects, doesn't lose karma. |
| All               | Grants all permissions.                                      |



## Conclusion

Congratulations, you have successfully configured the administrator permissions. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
