---
id: gmod_servercfg
title: Server.cfg settings
description: Information about the server.cfg settings for your Garry's Mod server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Garry's Mod Server.cfg Modification
---

## Configure your server.cfg in Garry's Mod.

To change the server.cfg directly through our webinterface, we go to the Configs-Tab.

![image](https://user-images.githubusercontent.com/26007280/189977268-ed72dc92-eb6e-47fa-971a-c2436456ecb9.png)

after that we open the server.cfg in our built in Config-Editor.

![image](https://user-images.githubusercontent.com/26007280/189977291-ffe506a3-2076-46af-a802-0eac3d160a0a.png)

You are now in our Config-Editor, here you can change all variables as desired, please be sure to do not mix Settings between our Settings-Tab and the server.cfg this could effect: hostname, rcon_password and sv_password.

Possible Variables to customize your Garry's Mod Server:

Spawnsettings:
```
sbox_maxprops 150		//Sets the maximum limit of props a player can have.
sbox_maxragdolls 10		//Sets the maximum limit of ragdolls a player can have.
sbox_maxballoons 10		//Sets the maximum limit of balloons a player can have.
sbox_maxeffects 10		//Sets the maximum limit of effects a player can have. (FPS sensitive)
sbox_maxdynamite 10		//Sets the maximum limit of dynamite a player can have.
sbox_maxlamps 10		//Sets the maximum limit of lamps a player can have.
sbox_maxthrusters 10	//Sets the maximum limit of thrusters a player can have.
sbox_maxwheels 10		//Sets the maximum limit of wheels a player can have.
sbox_maxnpcs 10			//Sets the maximum limit of npcs a player can have.
sbox_maxhoverballs 10	//Sets the maximum limit of hoverballs a player can have.
sbox_maxvehicles 10		//Sets the maximum limit of vehicles a player can have.
sbox_maxbuttons 10		//Sets the maximum limit of buttons a player can have.
```

Gamesettings:
```
sbox_plpldamage 0 / 1	//0 = PVP off, 1 = PVP on
sbox_godmode	0 / 1	//0 = off, 1 = on (Godmode of all players)
sbox_noclip		0 / 1	//0 = Noclip off, 1 = Noclip on
sv_noclipaccelerate 3	//Changes the speed of noclip.
sv_alltalk 1			//If enabled, you can every player on the server.
```

Network related settings (No changes recommended)
```
sv_minrate 0			//Lowest Connectionspeed
sv_maxrate 10000		//Highest Connectionspeed
sv_minupdaterrate 10	//Lowest Tickrate
sv_maxupdaterrate 66	//Highest Tickrate
net_maxfilesize	64		//Highest Filesize which can be transferred without FastDL.
sv_lan 0				//Makes the game a online game.
sv_region 3				//0+1 = US, 2 = South Africa, 3 = Europe, 4 = Asia, 5 = Australia, 6 = Middle East, 7 = Africa, 255 = Worldwide
```

If you have changed everything as desired, you just need to save your changes.

![image](https://user-images.githubusercontent.com/26007280/189977318-21617810-f12e-47e0-b66a-bfba440053dd.png)

After a server reboot all changes are live.
