---
id: minecraft-bungeecord-config
title: "Minecraft: Bungeecord Server Server Config Settings"
description: "Understand how to optimize and manage your BungeeCord server network settings for better performance and player experience → Learn more now"
sidebar_label: Server Properties
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## What do I need a BungeeCord Configuration for?

BungeeCord is the management of a bundle of servers that are connected through the proxy server (BungeeCord server). To customize the network of these servers, the file *config.yml* must be edited. On this page you will learn the exact meaning of each setting and you get additional information about the impact on the sub-servers such as PaperSpigot and Bukkit servers.

<InlineVoucher />

## Settings

### forge_support

The value can be set to false or true. If you set it to true, players can enter the server with a Forge client (intended for modpacks). If you negate it, the server will deny these connections.

### player_limit

This value tells you how many players are allowed to connect to the server at the same time. Compared to the value *max_players* from the listeners, this value is the internal, absolute determination of the total number of players.

### permissions

In this section, certain permissions can be assigned to different groups. These are **only BungeeCord permissions** and not e.g. Spigot/Bukkit permissions.
The syntax and indentations (in form of 2 spaces) are important to note:
```
permissions:
  GroupName:
  - Permission.One
  - Permission.Two
```

### timeout

This number indicates the maximum time the server may not send any signals to the players before the server shuts down and cuts all connections. By default this value is set to 30000, which corresponds to a maximum response time of 30 seconds. 

### log_commands

The value can be set to false or true. If you set it to true, a message will be written to the console when a player executes a BungeeCord command. If you negate it, this message will not be displayed.

### network_compression_threshold

This sets the size of the packages sent to the players. A smaller value than the default *256* such as 128 can improve the connection to other, more distant users. However, this will also result in much higher CPU usage, so changing this value should be used with caution.

### online_mode

The value can be set to false or true. If you set it to true, only players who have purchased Minecraft can access the server. If you negate it, cracked players will also be able to access the server, as there will be no communication with the Mojang server.
**Important:** If you want cracked players to be able to play on your server, you should use an authorization plugin, otherwise other players can impersonate you and gain administrator privileges.

### disabled_commands

Here you can specify commands listed which should be disabled and not executable on the whole network. This restriction applies to every player on the network.

### servers

This list shows all sub-servers of your network. If a server is missing here, it will not be integrated into your server system.
The syntax and indentations (in form of 2 spaces) are important to note:
```
servers:
  ServerName:
    motd: '&1Just another BungeeCord - Forced Host'
    address: 0.0.0.0:2000
    restricted: false
```
The **motd** is the message that appears in your server list when you ping a sub-server using the *forced_hosts* function:

![](https://screensaver01.zap-hosting.com/index.php/s/E93qgyfkjfW7Mzf/preview)

Under **address** you enter the corresponding IP of the sub server. If the value **restricted** is true the player must have the permission *bungeecord.server.ServerName* to enter the sub-server.


### listeners

Behind this variable are many options that are important for the connection to the BungeeCord server. Several listeners can be created to allow the connection to different IP addresses and ports. A listener consists of the following configuration values:
* query_port - This value defines the port of the listener.
* motd - Here you define the message which is displayed in the server list if the player has directly entered the BungeeCord server in his list.
* tab_list - Here you can choose between the values *GLOBAL_PING*, *GLOBAL* and *SERVER*. With GLOBAL_PING all players including their pings will be displayed in the tablist. By using GLOBAL, all players are also displayed across all servers, but the ping is not. With the input SERVER only those players are displayed who are on the same sub-server. **Important:** This function does not work in the versions 1.8 and older.
* query_enabled - The value can be set to false or true. If you set it to true, a UDP query will be checked during the DNS procedure, which only allows such connections. If you negate it, other connections can be made by forwarding to the server.
* proxy_protocol - The value can be set to false or true. If you set it to true, you can use the HAProxy protocol. If you negate it, the protocol will be denied.
* forced_hosts - Here you can allow individual direct connections to sub-servers. Syntax: `Your.OwnDomain.net: ServerName`
* ping_passthrough - The value can be set to false or true. If you set it to true, you will see the real MOTD of the sub-server instead of the MOTD in the BungeeCord configuration when you ping the sub-server using the *forced_hosts* function. If you negate it, it returns the value from the specified variable of *servers*.
* priorities - Here you can list in descending order to which server the players should connect first. A server will be skipped if it is offline or not available.
* bind_local_address - The value can be set to false or true. If you set it to true, the system will always try to redirect the player to servers that listen to the same IP as the BungeeCord server. If you negate it, the sub-servers can have different IP addresses. This value is only relevant for networks that run servers on different systems.
* host - This variable sets the IP and port of the host. If 0.0.0.0 is set as IP, all IP addresses and domains that forward to the host are accepted.
* max_players - The numerical value determines the maximum number of players of this listener.
* tab_size - This value sets the maximum number of players displayed in the tablist.
* The value can be set to false or true. If you set it to true, the player will always connect to the default server (the first available server in *priorities*). If you negate it, the player will end up on the sub-server where he was online last time. **Important:** If you enable this value, connections via *forced_hosts* will be forwarded to the default server as well.

### ip_forward

The value can be set to false or true. If you set it to true, players can only access the network directly via the BungeeCord server. If you negate it, players can also connect directly to a sub-server if they know the IP and port.
**Important:** If you set the *online_mode* to true, you should also enable this function to close a security hole.

### prevent_proxy_connections

The value can be set to false or true. If you set it to true, the IP addresses of the connected players will be sent to the Mojang server. If you negate it, the server will prevent IP forwarding to Mojang.
The value has no real influence on the game experience.

### groups

In this list you can assign one or more groups to individual players. This will give them the related BungeeCord permissions as defined in *permissions*.
The syntax and indentations (in form of 2 spaces) are important to note:
```
groups:
  PlayerName:
  - GroupName
```

### connection_throttle

This value defines how long a player has to wait until he can try to connect to the server again. By default this value is set to 4000, which corresponds to a maximum waiting time of 4 seconds.

### stats

Here BungeeCord inserts a randomly generated code. It is recommended not to change this code, as this will help to optimize BungeeCord and fix bugs. Analysis data will be forwarded anonymously and encrypted to the developers.

### connection_throttle_limit

This value determines the number of connection attempts the player has until he has to wait for the specified value of *connection_throttle* before he can try to connect to the server again.

<InlineVoucher />
