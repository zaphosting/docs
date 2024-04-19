---
id: cs2-cstv
title: "CS2: CSTV "
description:  Information about CSTV for CS2 Server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: CSTV
---



:::caution
CS2 has just recently been released. The game is currently receiving quite a few updates and changes. This also affects the functionality and structure of the CS2 servers. We do our best to keep the guides as correct and up to date as quickly as possible in case something has changed concerning this.
:::



## Introduction


CSTV offers the possibility to broadcast games live with a little delay. This means that outsiders who are not involved in the game can also follow what is happening on the server. This technology is also used in the well-known counter-strike tournaments so that the spectators can watch the spectacle. Furthermore, the transmissions can also be saved automatically, so that you can watch them again afterwards.



## Activation

The activation of the CSTV service is done via the **server.cfg** configuration file. The necessary commands have to be added there: 

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```



## Configuration

The above commands are mandatory so that the CSTV master server is activated and accessible. However, there are other commands for advanced configuration below:

|            Command            |                         Description                         |
| :--------------------------: | :----------------------------------------------------------: |
|  tv_allow_camera_man "0\|1"  |        Spectators can take over as a cameraman        |
| tv_allow_static_shots "0\|1" |    Uses fixed-orientation cameras for shooting    |
|     tv_autorecord "0\|1"     | Automatically records all games as CSTV demos. All games are recorded automatically, the format of the demo file is auto-YYYYYMMDD-hhmm-map.dem |
|     tv_autoretry "0\|1"      | Tries to connect again after a network timeout |
| tv_chattimelimit "seconds"  | Restricts viewers to write only every x seconds |
|       tv_debug "0\|1"        |             Display of CSTV debug information             |
|   tv_delaymapchange "0\|1"   | Delays the card change until the transfer is complete |
|      tv_maxclients "n"       |          Maximum number of clients on the CSTV server          |
|        tv_maxrate "n"        | Max. Allowed CSTV viewer bandwidth rate, 0 == unlimited |
|        tv_msg "text"         |           Sends a message to all viewers           |
|        tv_name "name"        | CSTV hostname. Defines the CSTV name as it appears in the server browser and in the status bar |
|       tv_nochat "0\|1"       |           Activate/Deactivate the CSTV chat           |
|    tv_password "password"    |       Protects the CSTV transmission with a password       |
|     tv_record "filename"     |             Starts recording a CSTV demo             |
|           tv_stop            |                 Stops the CSTV transmission                 |
|        tv_stoprecord         |            Stops recording a CSTV demo             |
|           tv_title           |           Defines the name of the CSTV transmission           |



## Establishing the connection

If the function is activated on the server, access is possible via the IP address and the CSTV port assigned to it on the server. To connect, you need the console in the game. There you can then connect with the following command:

```
connect SERVERIP:27020
```


Manual and automatic recorded demos are stored in the main directory /gxxxxx/cs2/game/csgo) of the CS: GO server. These can be downloaded via the FTP access provided. If you do not yet know how to access via FTP, you will find instructions on how to do this: https://docs.zap-hosting.com/docs/en/gameserver-ftpaccess/


![image](https://user-images.githubusercontent.com/26007280/189976977-8ec37bd6-eff7-46bb-9114-d82c58140388.png)



With the demo playback from the game, the downloaded demo can be selected via **Load** and started via the **Play** button.
