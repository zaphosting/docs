---
id: csgo-gotv
title: "CSGO: Information about GOTV"
description: "Discover how GOTV enables live game broadcasts and replay recordings for enhanced spectator experiences in CS:GO and similar games → Learn more now"
sidebar_label: GOTV
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Archived Guide
This document has been archived. Documents are archived if they are no longer relevant, incorrect or up to date. It has been archived for the following reasons:

Reason: CS:GO is no longer actively offered and is no longer being developed. CS2 is the follow-up to CS:GO. We recommend switching to CS2.
::::



## What is GOTV?


GOTV offers the possibility to broadcast games live with a little delay. This means that outsiders who are not involved in the game can also follow what is happening on the server. This technology is also used in the well-known counter-strike tournaments so that the spectators can watch the spectacle. Furthermore, the transmissions can also be saved automatically, so that you can watch them again afterwards.

![](https://screensaver01.zap-hosting.com/index.php/s/qcewrMDCF2nzyie/preview)

<InlineVoucher />

## How to use GOTV?

If the function is activated on the server, access is possible via the IP address and the GOTV port assigned to it on the server. To connect, you need the console in the game. There you can then connect with the following command:

```
connect SERVERIP:27020
```


Manual and automatic recorded demos are stored in the main directory (gxxxxx / csgo / csgo /) of the CS: GO server. These can be downloaded via the FTP access provided. If you do not yet know how to access via FTP, you will find instructions on how to do this: [Access via FTP](gameserver-ftpaccess.md).


![](https://screensaver01.zap-hosting.com/index.php/s/enbMKLwNaeqdzxm/preview)



With the demo playback from the game, the downloaded demo can be selected via **Load** and started via the **Play** button.



## Installation of GOTV Master Server

To activate the GOTV master server, missing commands have to be added in **server.cfg**. These are the following commands:

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```



The above commands are mandatory so that the GOTV master server is activated and accessible. However, there are other commands for advanced configuration below:

|            Command            |                         Description                         |
| :--------------------------: | :----------------------------------------------------------: |
|  tv_allow_camera_man "0\|1"  |        Spectators can take over as a cameraman        |
| tv_allow_static_shots "0\|1" |    Uses fixed-orientation cameras for shooting    |
|     tv_autorecord "0\|1"     | Automatically records all games as GOTV demos. All games are recorded automatically, the format of the demo file is auto-YYYYYMMDD-hhmm-map.dem |
|     tv_autoretry "0\|1"      | Tries to connect again after a network timeout |
| tv_chattimelimit "seconds"  | Restricts viewers to write only every x seconds |
|       tv_debug "0\|1"        |             Display of GOTV debug information             |
|   tv_delaymapchange "0\|1"   | Delays the card change until the transfer is complete |
|      tv_maxclients "n"       |          Maximum number of clients on the GOTV server           |
|        tv_maxrate "n"        | Max. Allowed GOTV viewer bandwidth rate, 0 == unlimited |
|        tv_msg "text"         |           Sends a message to all viewers           |
|        tv_name "name"        | GOTV hostname. Defines the GOTV name as it appears in the server browser and in the status bar |
|       tv_nochat "0\|1"       |           Activate/Deactivate the GOTV chat           |
|    tv_password "password"    |       Protects the GOTV transmission with a password        |
|     tv_record "filename"     |             Starts recording a GOTV demo             |
|           tv_stop            |                 Stops the GOTV transmission                  |
|        tv_stoprecord         |            Stops recording a GOTV demo              |
|           tv_title           |           Defines the name of the GOTV transmission           |

<InlineVoucher />
