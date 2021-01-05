---
id: 7d2d_becomeadmin
title: Become Admin
sidebar_label: Become Admin

---



## Become Admin

Administrator rights allow you to make changes to your server directly in the game, without having to modify the config. Adding an admin is done via the **serveradmin.xml** config, which you can find in the web interface under Configs.

![img](https://screensaver01.zap-hosting.com/index.php/s/KcBarogtwexXkww/preview)

You can find your SteamID64 by going to your Steam profile and right-clicking anywhere in it. There you then click on **Copy Steam URL**. 

![img](https://screensaver01.zap-hosting.com/index.php/s/45E5zxZcCjytJ28/preview)



Afterwards open one of the following pages and paste the URL of your profile there: 

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

This will provide you with general information as well as the Steam ID of your account. In this case we only need the SteamID64. The SteamID64 is then specified under ``<admins>...</admins>``. This will look like this:

```
<admins>
	<admin steamID="YOURSTEAM64ID" permission_level="0" />
</admins>
```

The game offers the possibility to define different permission levels for the administrator permissions. This means that it is possible to define different administrator groups with different permissions. The level is defined by the ``permission_level`` option. This can be set from 0 to 1000. Depending on how this is configured, the administrators then have access to the assigned permissions. Once this has been done, the administrator permissions have been assigned successfully. 



## Permissions

The permissions for all administrator commands can be defined under ``permissions``. For this, the ``permission_level`` must be adjusted, just like when you add administrators. This will look like this:

```
<permissions>
	<permission cmd="dm" permission_level="0" ></permission>
	<permission cmd="kick" permission_level="1" ></permission>
	<permission cmd="say" permission_level="1000" ></permission>
    <permission cmd="chunkcache" permission_level="1000" ></permission>
    <permission cmd="debugshot" permission_level="1000" ></permission>
    <permission cmd="debugweather" permission_level="1000" ></permission>
    <permission cmd="getgamepref" permission_level="1000" ></permission>
</permissions>
```

A permission level is a value between 0 and 1000 and determines what permissions a player has. 1000 is the lowest (no permissions) and 0 is the highest (full administrator permissions). Depending on how the permissions should be in this regard, this must then be adjusted accordingly. 
