---
id: ark-serverlisting
title: "ARK: Server listing problems with Steam games using Steamworks"
description: "Discover why popular games face server listing issues due to Steamworks limits and how it affects your multiplayer experience → Learn more now"
sidebar_label: Serverlisting Problems
services:
  - gameserver-ark
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

Unfortunately, many popular games like ARK or Valheim have massive problems with listing all servers in the ingame server list. 

This is because these games use the "Steamworks" software for their listing. 

Steamworks can list a maximum of 4880 servers. If a game has more than this number of active servers, only a small part of the active servers will be listed for the player. 

It is very random whether player 1 sees server Y or not. 
It therefore also happens that player 1 sees server Y, but player 2 does not. Player 3, on the other hand, sees it again, but does not see another server that player 1 sees.


To rule out a problem with the server provider, you can search for the server under "Steam" - "View" - "Server" with IP and port. If it is found there, the connection between player and server is faultless. This is because a direct query is made by the player.

A good example to validate the problem is that ARK players in particular who have opened the game via Steam cannot find servers. If they open ARK in Epic Games, the servers are found perfectly. No Steamworks is used here.

There are also various game developers who have commented on this problem. For example, Garry Newman from Garrysmod thought that the problem was related to his server provider OVH. However, this was not the case. The problem is also with ZAP-Hosting and every other server provider, as it is directly with Steamworks:

![](https://screensaver01.zap-hosting.com/index.php/s/M6DkmBYCjLsPBeW/preview)

Source: https://x.com/garrynewman/status/1334446218437681152?s=20

Or even Rust, as they write in their blog:

```
It's not all roses and rainbows when you have such a sudden boost in popularity. 
You start seeing cracks forming in the foundations, most noticeable for us the server browser was never intended to handle such a large amount of servers.
Without going into the technicality this has resulted in many servers not displaying for users and causing a lot of frustration for server owners. 
We're currently working on and exploring solutions so please bear with us.
```

Source: https://rust.facepunch.com/blog/

We will continue to keep an eye on the problem and inform here when there is a solution.

<InlineVoucher />
