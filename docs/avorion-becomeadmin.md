---
id: avorion-becomeadmin
title: "Avorion: Become an admin on your own server"
description: "Discover how to assign administrator permissions for full server control and manage game functions effectively → Learn more now"
sidebar_label: Become admin
services:
  - gameserver-avorion
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
The assignment of administrator permissions allows you simple and comprehensive administration with full control of your server. As an administrator, you have the option of using all available options and functions provided by the game directly in the game. All the steps you need to take to assign administrator permissions for your server will be described below. 
<InlineVoucher />

## Configuration

Adding an admin is done via the settings page in the web interface. Click in the **Gameserver Administration** on **Settings** and scroll down to the **Server Settings**.

![](https://screensaver01.zap-hosting.com/index.php/s/gzei7sWedJMrqzc/preview)



Once there, you will find a field called **Admin SteamIDs**. There you have to enter your SteamID64. You can find your SteamID64 by first calling up your Steam profile and then right-clicking anywhere there. Then click on **Copy Steam URL**. 



![](https://screensaver01.zap-hosting.com/index.php/s/q7E3qSd9GoLCswM/preview)



Afterwards open one of the following pages and paste the URL of your profile there: 

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

This will provide you with general information as well as the Steam ID of your account. In this case we only need the SteamID64. SteamID64 has to be filled into the field accordingly. This should look like this:



![](https://screensaver01.zap-hosting.com/index.php/s/qakTq9iLW72jkyC/preview)



Click on **Save**. Once you have restarted the server you can execute admin commands in the game. To do this, click Enter to open the chat and then execute the commands with a / symbol. 



## Admin commands

Here you will find an overview of common commands that you can execute as admin. 



**General commands**

| Command                 | Description                                                  |
| :---------------------- | :----------------------------------------------------------- |
| /help                   | show help message                                            |
| /w [player name]        | send a private message to a player                           |
| /save                   | saves the current sate                                       |
| /stop                   | stops the server                                             |
| /seed                   | seed of the server                                           |
| /version                | shows the current server version                             |
| /suicide                | destroys your current ship                                   |
| /player                 | prints the number of players                                 |
| /status                 | prints out some information about the server's current status |
| /admin -a [player name] | add a player as admin                                        |
| /admin -r [player name] | remove a player as admin                                     |
| /kick [player name]     | removes a player from the server                             |
| /ban [player name]      | adds the player to the blacklist                             |
| /unban [player name]    | removes the player from the blacklist                        |
| /banip [player ip]      | adds the player to the blacklist                             |
| /unbanip [player ip]    | removes the player from the blacklist                        |
| /blacklist              | shows the blacklist options                                  |
| /whitelist              | shows the whitelist options                                  |



**Cheat commands (ingame):**

| Command                                | Description                                           |
| :------------------------------------- | :---------------------------------------------------- |
| /give [player name] [amout] credits    | gives the player the wanted amout of credits          |
| /give [player name] [amout] [ore name] | gives the player the wanted amout of the selected ore |



**Server commands (console):**

| Command                       | Description                                                  |
| :---------------------------- | :----------------------------------------------------------- |
| /max-logs [value]             | amount of log files to keep around                           |
| /difficulty [value]           | difficulty of the server, allowed values are: -3, -2, -1, 0, 1, 2, 3 Default: 0 |
| /collision-damage [value]     | amount of damage done to an object on collision, from 0 to 1. 0: no damage, 1: full damage. default: 1 |
| /exit-on-last-admin-logout    | shut down when last administrator logs out                   |
| /public [value]               | indicate if the server should allow other players to join    |
| /infinite-resources [value]   | enable infinite resources for all players                    |
| /listed [value]               | indicate if the server should show up on public server lists |
| /max-players [value]          | maximum number of online players Default: 10                 |
| /save-interval [value]        | timestep between savings Default: 300                        |
| /same-start-sector arg        | indicate if all players should start in the same sector      |
| /server-name [value]          | server name, will be displayed when queried                  |
| /use-steam-networking [value] | use steam networking and authentication for users            |
| /galaxy-name [value]          | galaxy name, appended to datapath, final path will be [datapath]/[galaxyname] |
| /datapath [value]             | folder the galaxies will be stored in, will be prepended to galaxy name |
| /admin [value]                | steam id(s) of the administrator(s) of the server            |


## Conclusion

Congratulations, you have successfully configured the administrator permissions. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
