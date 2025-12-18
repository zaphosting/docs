---
id: dayz-becomeadmin
title: "DayZ: Become an Admin"
description: "Discover how to gain full server control by assigning admin rights and managing game options effectively → Learn more now"
sidebar_label: Become an Admin
services:
  - gameserver-dayz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Assigning admin rights allows you to manage your server with full control easily and comprehensively. As an admin, you have the opportunity to apply all available options and functions provided by the game directly in the game. The following explains all the necessary steps you need to take to assign admin rights to your server. 
<InlineVoucher />

## Configuration

The configuration of admin rights is done through the server configuration file. You can access your server's configuration files in the game server management under **Configs**. Once there, you will find an overview of the available configuration files. Open the **server.DZ.cfg** by clicking on the blue button.

![](https://screensaver01.zap-hosting.com/index.php/s/n6FSdPnYxxWp4Po/preview)

In the configuration file, you should find the entry **passwordAdmin**. Here, you need to set the desired password for access. Enter your desired password and click the **Save** button below.

![](https://screensaver01.zap-hosting.com/index.php/s/H3ndjqRYBPXRgRK/preview)

To apply the change, the server needs to be restarted. After that, connect to your server and open the in-game chat. Execute the following command to log in as an admin:

```
#login password
```



## Frequently used commands

Below you will find a list of a few available commands that you can use with your administrator permissions: 

| COMMAND                                     | DESCRIPTION                                                  |
| :------------------------------------------ | :----------------------------------------------------------- |
| #login adminpassword                        | Log in as the Admin of the server.                           |
| #logout                                     | Admin log out.                                               |
| #mission filename Difficulty                | Select the mission with known name and set the difficulty - the difficulty parameter is optional and, if not set, the current difficulty is kept. |
| #missions                                   | Select a mission.                                            |
| ##restart                                   | Restart a mission.                                           |
| #reassign                                   | Start all over and reassign roles.                           |
| #shutdown                                   | Shuts down the server.                                       |
| #restartserver                              | Restarts the server.                                         |
| #shutdownserveraftermission                 | Once the mission ends, the server is shut down.              |
| #restartserveraftermission                  | Once the mission ends, the server is restarted.              |
| #init                                       | Reload server config file loaded by -config options.         |
| #exec ban Name#exec ban ID#exec ban #Player | Allows you to ban a player.                                  |
| #kick Name#kick ID#kick #Player             | Allows you to kick a player from the server.                 |
| #monitor (interval in seconds)              | Shows you server performance information. If the interval is 0, the monitoring stops. |
| #monitords (interval in seconds)            | Show the performance information on the server console. If the interval is 0 the monitoring stops. |
| #debug off                                  | Disables debugging.                                          |
| #debug (interval in seconds)                | The default interval is 10 if no other interval is selected. |
| #debug (command) (param)                    | There are a few available commands:JIPQueueuserQueuecheckFiletotalSentuserSentuserInfo You can disable each command by adding the parameter off after each command. e.g. #totalSent off. The output differs between these commands. Some will output to the log file, others to screen, etc.  Please notice that you will need some debugger capable of catching OutputDebugString running on the client machine. |
| #debug (command)                            | Admin log out.                                               |
| #logout                                     | There are two available commands:console - Sends what is in the server console to the sender.von - Outputs in logFile defined in server.cfg, e.g. logfile could be named “server_console.log” You will see a confirmation of these commands in the chat channels. |


## Conclusion

Congratulations, you have successfully configured the administrator permissions. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
