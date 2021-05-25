---
id: minecraft_rcon
title: Minecraft Server: Using RCON
description: Information on how to use RCON with your Minecraft server from ZAP-Hosting to manage your server - ZAP-Hosting.com documentation
sidebar_label: RCON
---

## 🔎 What is RCON?
RCON is an interface in various programs, such as game servers, with which remote maintenance and remote administration can be carried out. This interface can be used to manage servers that are already running and can be reached. The interface can then be accessed with a specific remote maintenance program and the server can thus be managed.

## ⚙ How do I use RCON with Minecraft?
In order to use RCON with Minecraft, it must first be activated in the `server.properties`
To do this, go to the line with the following content: 
`enable-rcon=false`

Remove the value `false` and enter it `true` instead.
Now the interface needs a password so that not everyone can connect to this remote maintenance interface. The password for this can be entered in the line with the following content:
`rcon.password=`

To set the password, write your desired password after the equal sign. Once that's done, all you have to do is find out what the port of your RCON interface is. This can be found on the `rcon.port` line. The port consists of up to five digits between `1` und `65534`.

Once you have found out the port of this, open any RCON program with which you can connect to the interface. A recommendation on our part for a RCON-compatible program would be the [RCON Console](https://sourceforge.net/projects/rconconsole/).
Now enter the IP address of your server in the text field above `Address`. Right next to it is the RCON port of your game server and the password behind it. Now make sure that your game server is running and accessible and now connect to the program via RCON on your server.

If the connection is successful, you can now send Minecraft commands to your server. Enter the commands in the text field below of your RCON program and note the return of the console in the middle of the window.
