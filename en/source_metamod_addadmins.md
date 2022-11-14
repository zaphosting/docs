---
id: source_metamod_addadmins
title: Source Games: Become a server admin
description: Information on how to become an admin on your Source gameserver from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Become an admin
---

## Become an admin

To be able to register as admin, the installation of Source- / Metamod is essential.

Furthermore you need the Steam ID of your Steam Account. There are several ways to get this. Either you use an external website that offers such a service or you use the game console.

### SteamID via website

First of all, the profile must be called up in Steam and then right-click anywhere in the profile. There you can copy the Steam URL of the profile.

![image](https://user-images.githubusercontent.com/13604413/159178874-9784e3e0-9689-4a8e-a7ee-55a678d4d12e.png)

Afterwards, the URL can be specified on one of the following web pages:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![image](https://user-images.githubusercontent.com/13604413/159178882-44e4b9d3-5f43-4cf6-b0a3-bb688e03d92f.png)

Afterwards you will receive the Steam ID in addition to the general account information. There the **Steam ID 32** is needed:

```
steamID32: STEAM_0:1:XXXXXX
```

### SteamID via game console

Start the game and connect to your server. By opening the game console and using the 'status' command there you will get the following output:

```
] status
Connected to XXX.XXX.XXX.XX:XXXXX
hostname: Server Hosted by ZAP-Hosting.com
version : 1.37.1.1 secure
os : Linux
type : community dedicated
map : en_dust2
players : 1 humans, 0 bots (16/0 max) (not hibernating)

# userid name uniqueid connected ping loss state rate
# 2 1 "Player name" STEAM_1:1:XXXXXXXXX 44:39 30 0 active 196608
#end
```

### Config

Next, connect to the server again via FTP and call the admins.cfg config file. This can be found in the following directory: addons/sourcemod/configs

The file already contains an example of how an admin entry might look like. You can copy this and then enter it as follows:

```
Admins
{
	"Player name"
	{
		"auth" "steam"
		"identity" "STEAM_0:1:XXXXX"
		"flags" "abcdef"
	}
}
```

The **player name** must **not** match the name of the Steam Account. It is only used for overview purposes within the Config. The entry 'auth' stands for authentication. In this case Steam is fixed, so you don't need to change it. Under `identity` you enter the SteamID32 of the Steam account. With `flags` the rights are meant. There are different levels of permissions. 


| permission | flag | usage |
| ------------|:----:|:--------:|
| reservation | a || slot reservation |
| generic | b | basics (necessary) |
| kick | c || players kick |
| ban | d || ban players |
| unban | e || players release |
| slay | f || beat or kill players |
| changemap | g | switching maps |
| cvar | h | Change server values |
| config | i | Running Server Configs |
| chat | j | advanced chat rights |
| vote | k | Admin Votes |
| password | l || Set server password |
| rcon | m | RCON commands execute |
| cheats | n | activate sv_cheats from the game |
| root | z | full access |


Depending on which rights are to be assigned, the respective flags can be written one after the other. For example, if you only want to give the rights to kick, you would assign the flags 'b' and 'c'. But if you want to give full access, then only the flag `z` is sufficient.

### Using the Admin Menu 

With the command 'admin' in the chat or 'sm_admin' in the console the menu can be called.

![image](https://user-images.githubusercontent.com/13604413/159178889-0f82f7fe-5a94-417c-884f-8393aab2b432.png)
