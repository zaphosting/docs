---
id: 7d2d-becomeadmin
title: "7 Days to Die: How to become an admin for 7 Days to Die"
description: "Discover how to assign and manage administrator permissions for full server control and customized admin roles → Learn more now"
sidebar_label: Become admin
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
The assignment of administrator permissions allows you simple and comprehensive administration with full control of your server. As an administrator, you have the option of using all available options and functions provided by the game directly in the game. All the steps you need to take to assign administrator permissions for your server will be described below. 
<InlineVoucher />

## Configuration
Adding an admin is done via the **serveradmin.xml** config, which you can find in the web interface under Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/wXpLL2qyZE2zCYa/preview)

You can find your SteamID64 by going to your Steam profile and right-clicking anywhere in it. There you then click on **Copy Steam URL**. 

![](https://screensaver01.zap-hosting.com/index.php/s/Q9WJ8GwbHCmTRPx/preview)



Afterwards open one of the following pages and paste the URL of your profile there: 

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

This will provide you with general information as well as the Steam ID of your account. In this case we only need the SteamID64. The SteamID64 is then specified under ``<admins>...</admins>``. This will look like this:

```
 <users>
    <user steamID="76561198021925107" name="Hint on who this user is" permission_level="0" />
  </users>
```

:::danger  Admin record isn't recognized? 
Ensure to remove the comment characters `<!--` and `-->` to make the line valid. Otherwise the line remains just as a comment and will not be applied. Simply remove the characters at the beginning and end of the line to activate it.
:::

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


## Conclusion

Congratulations, you have successfully configured the administrator permissions. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
