---
id: spaceengineers_becomeadmin
title: Space Engineers: Become a server admin
description: Information on how to become an admin on your Space Engineers server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Become Admin
---

## 🔐 Become Admin

To be able to manage your own game server well ingame it is important to have the Admin rank.

### 🔢 SteamID64 over Website

First of all, the profile must be called up in Steam and then right-click anywhere in it.
There you can then copy the Steam URL of the profile.

![](https://screensaver01.zap-hosting.com/index.php/s/9ERnWan6k39FsHX/preview)

Once this is done, you can enter the URL on the following websites:

- https://steamidfinder.com/
- https://steamid.io/
- https://steamrep.com/

![](https://screensaver01.zap-hosting.com/index.php/s/92WJfgmrdZWXbFd/preview)

### 📄 SteamID in die Config eintragen

Next you call your interface and the server. 
There you go to the tab **Configs**

![](https://screensaver01.zap-hosting.com/index.php/s/iEmPAqCaNZeWCFE/preview)

Then you open the **SpaceEngineers-Dedicated.cfg**

![](https://screensaver01.zap-hosting.com/index.php/s/WJGg3MabkK7qkeT/preview)

After you do that, press **STR + F** and look for *admin*

![](https://screensaver01.zap-hosting.com/index.php/s/Mwnfdb7PqgFgAAW/preview)

Now you write this:
```
<Administrators>
<unsignedLong>STEAM64ID</unsignedLong>
</Administrators>
````
The whole thing should look like this afterwards:

![](https://screensaver01.zap-hosting.com/index.php/s/i7QGeJ2dsc7DQQR/preview)

Now only **Save** the Config file and thats it
