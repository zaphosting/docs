---
id: cs16_becomeadmin
title: Become Admin
sidebar_label: Become Admin

---



Administrator rights allows you to make changes directly in the game on your server without having to change it in the Config. Adding an admin is done via the **users.ini** config. To be able to become an admin and find those files you have to install **AMXmodX** and **Metamod** first. If you haven't done this yet, then the following guide is worth a look: [AMXmodX/Metamod + Plugins](https://zap-hosting.com/guides/docs/de/cs16_plugins/)

In order to edit the **users.ini** config file, you need to connect to the server via FTP. There you have to navigate to the ``/gXXXX/cs16/cstrike/addons/amxmodx/configs`` directory. As next we open the Config with a text editor and modify it.

```
...
; Examples of admin accounts:
; "STEAM_0:0:123456" "" "abcdefghijklmnopqrstu" "ce"
; "123.45.67.89" "" "abcdefghijklmnopqrstu" "de"
; "My Name" "my_password" "abcdefghijklmnopqrstu" "a"

"loopback" "" "abcdefghijklmnopqrstu" "de"
```

In the config the entry ``"loopback" "" "abcdefghijklmnopqrstu" "en"`` must be adjusted. Back then the authentication was done only by name and password. Nowadays it is only done via the the SteamID64. You can find your SteamID64 by opening your Steam profile and right-clicking anywhere on it. There you click on **Copy Steam URL**. 

Afterwards, the URL must be typed in one of the following websites:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![img](https://screensaver01.zap-hosting.com/index.php/s/Yxg52KfYA3rMDQj/preview)



This will provide you the general account information as well as the Steam ID.  In this case we only need the SteamID64. The Steam ID must then be added to the client entry under **SteamID**. The result of this looks like this:

```
"STEAM_0:0:XXXXXX" "" "abcdefghijklmnopqrstu" "ce"
```

The line contains the following information:

1. name/SteamID - Unique ID of the player.
2. password - none available if Steam authentication
3. permission level 
4. connection flags - The flags control how AMX Mod X attempts to authorize a connecting admin.

In that case, no password is needed since it is an authentication via Steam. Therefore we set ``ce`` instead of ``en``. Below you can find an overview of all authorization levels and connection flags:



**Authorization level**

| Authorization level | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| a                   | immunity (can't be kicked/baned/slayed/slaped and affected by other commmands) |
| b                   | reservation (can join on reserved slots)                     |
| c                   | amx_kick command                                             |
| d                   | amx_ban and amx_unban commands                               |
| e                   | amx_slay and amx_slap commands                               |
| f                   | amx_map command                                              |
| g                   | amx_cvar command (not all cvars will be available)           |
| h                   | amx_cfg command                                              |
| i                   | amx_chat and other chat commands                             |
| j                   | amx_vote and other vote commands                             |
| k                   | access to sv_password cvar (by amx_cvar command)             |
| l                   | access to amx_rcon command and rcon_password cvar (by amx_cvar command) |
| m                   | custom level A (for additional plugins)                      |
| n                   | custom level B (for additional plugins)                      |
| o                   | custom level C (for additional plugins)                      |
| p                   | custom level D (for additional plugins)                      |
| q                   | custom level E (for additional plugins)                      |
| r                   | custom level F (for additional plugins)                      |
| s                   | custom level G (for additional plugins)                      |
| t                   | custom level H (for additional plugins)                      |
| u                   | menu access                                                  |
| z                   | user (no admin)                                              |



**Connection flags** 

| Flag | Description                                        |
| ---- | -------------------------------------------------- |
| a    | disconnect player on invalid password              |
| b    | clan tag                                           |
| c    | this is steamid/wonid                              |
| d    | this is ip                                         |
| e    | password not checked (only name/ip/steamid needed) |



