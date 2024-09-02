---
id: spaceengineers-becomeadmin
title: "Space Engineers: Become a server admin"
description: Information on how to become an admin on your Space Engineers server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Become admin
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
The assignment of administrator permissions allows you simple and comprehensive administration with full control of your server. As an administrator, you have the option of using all available options and functions provided by the game directly in the game. All the steps you need to take to assign administrator permissions for your server will be described below. 
<InlineVoucher />

To be able to manage your own game server well ingame it is important to have the Admin rank.

### SteamID64 over Website

First of all, the profile must be called up in Steam and then right-click anywhere in it.
There you can then copy the Steam URL of the profile.

![image](https://screensaver01.zap-hosting.com/index.php/s/pNMMAqQDRPSoo38/preview)

Once this is done, you can enter the URL on the following websites:

- https://steamidfinder.com/
- https://steamid.io/
- https://steamrep.com/

![image](https://screensaver01.zap-hosting.com/index.php/s/dBezeZQEoP3KYq5/preview)

### SteamID in die Config eintragen

Next you call your interface and the server. 
There you go to the tab **Configs**

![image](https://screensaver01.zap-hosting.com/index.php/s/NQffqKfjszY23HK/preview)

Then you open the **SpaceEngineers-Dedicated.cfg**

![image](https://screensaver01.zap-hosting.com/index.php/s/yx2efZLYmW32BZH/preview)

After you do that, press **STR + F** and look for *admin*

![image](https://screensaver01.zap-hosting.com/index.php/s/eBgLRwe5Y3itnyt/preview)

Now you write this:
```
<Administrators>
<unsignedLong>STEAM64ID</unsignedLong>
</Administrators>
````
The whole thing should look like this afterwards:

![image](https://screensaver01.zap-hosting.com/index.php/s/r7tj3EF6trSiz5x/preview)

Now only **Save** the Config file and thats it
