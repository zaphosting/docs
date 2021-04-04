---
id: spaceengineers_becomeadmin
title: Become Admin
sidebar_label: Become Admin
---

## 🔐 Become Admin

To be able to manage your own game server well ingame it is important to have the Admin rank.

### 🔢 SteamID64 over Website

First of all, the profile must be called up in Steam and then right-click anywhere in it.
There you can then copy the Steam URL of the profile.

![](https://screensaver01.zap-hosting.com/index.php/s/x3ReDxz7eoy2eQ8/preview)

Once this is done, you can enter the URL on the following websites:

- https://steamidfinder.com/
- https://steamid.io/
- https://steamrep.com/

![](https://screensaver01.zap-hosting.com/index.php/s/gYNQfW96iwyE6Dk/preview)

### 📄 SteamID in die Config eintragen

Next you call your interface and the server. 
There you go to the tab **Configs**

![](https://screensaver01.zap-hosting.com/index.php/s/RKzgSnHn9jbg628/preview)

Then you open the **SpaceEngineers-Dedicated.cfg**

![](https://screensaver01.zap-hosting.com/index.php/s/wmqCM98tMnx96Dg/preview)

After you do that, press **STR + F** and look for *admin*

![](https://screensaver01.zap-hosting.com/index.php/s/erPTjwPXEFxqK5n/preview)

Now you write this:
```
<Administrators>
<unsignedLong>STEAM64ID</unsignedLong>
</Administrators>
````
The whole thing should look like this afterwards:

![](https://screensaver01.zap-hosting.com/index.php/s/knrZXfQn5bWFqJ7/preview)

Now only **Save** the Config file and thats it
