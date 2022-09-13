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

![image](https://user-images.githubusercontent.com/26007280/189890721-d12d839c-e81f-4c8d-aea8-4bd4f7fc67d7.png)

Once this is done, you can enter the URL on the following websites:

- https://steamidfinder.com/
- https://steamid.io/
- https://steamrep.com/

![image](https://user-images.githubusercontent.com/26007280/189890738-382f7bd1-a0f7-4c1e-83e2-6b0b1ce17d47.png)

### 📄 SteamID in die Config eintragen

Next you call your interface and the server. 
There you go to the tab **Configs**

![image](https://user-images.githubusercontent.com/26007280/189890755-0652912e-9749-4ece-886d-023a8a2b799b.png)

Then you open the **SpaceEngineers-Dedicated.cfg**

![image](https://user-images.githubusercontent.com/26007280/189890790-871f7a92-b8df-4210-af83-e190a765d82c.png)

After you do that, press **STR + F** and look for *admin*

![image](https://user-images.githubusercontent.com/26007280/189890816-8e8850f3-27ae-42a8-858a-accc3b49b4e5.png)

Now you write this:
```
<Administrators>
<unsignedLong>STEAM64ID</unsignedLong>
</Administrators>
````
The whole thing should look like this afterwards:

![image](https://user-images.githubusercontent.com/26007280/189890834-377910b7-e775-48ee-bda6-a829f891ff88.png)

Now only **Save** the Config file and thats it
