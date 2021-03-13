---
id: eco_whitelist
title: Whitelist
sidebar_label: Whitelist
---



## Activate whitelist

ECO's whitelist allows you to protect your server by only allowing selected players on the list to connect to the server.



### Activation (Config)

The activation of the whitelist is done automatically. It becomes active as soon as at least one player has been added to the list. The players must be added to the **Users.eco** config file. 

```
  "WhiteList": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": []
    }
```



The field **$values** contains the SteamIDs of the players that should be added to the whitelist. You can find them by first opening your Steam profile and then right-clicking somewhere in it. There you can copy the Steam URL of the profile. 



![img](https://screensaver01.zap-hosting.com/index.php/s/45E5zxZcCjytJ28/preview)



Afterwards open one of the following pages and paste the URL of your profile there: 

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

This will provide you with general information as well as the Steam ID of your account. In this case we only need the SteamID64. The SteamID64 will then be set at **$values**. This will look like this:

```
  "WhiteList": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": [
            "123456789",
            "weitereSteamID"      
      ]
    }
```



### Activation (Chat)

Alternatively, it is also possible to add more players to the whitelist with in-game administrator permissions. Adding players to the whitelist is done via chat/console with the following command:

```
/whitelist [player]
```



## Manage Whitelist

The management of the whitelist can only be done in the **Users.eco** config file, because there is no server command to remove a player from the whitelist. If you would like to remove a player, then all you have to do is to remove him from the config file. Also a restart of the server is necessary for the change to take effect. 
