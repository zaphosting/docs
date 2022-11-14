---
id: arma3_gamemode
title: Change game mode
sidebar_label: Change game mode
---


## Set the game mode

To change the game mode on your ArmA 3 server you have to upload the appropriate mission file for the game mode to your server.

We currently offer the following mission files without the need for you to upload them:

- ArmA 3 Wasteland

These are already in your **mpmissions** directory.


## Upload the mission file

For uploading the mission file you have to connect to your server via FTP before: [Gameserver FTP connection](gameserver_ftpaccess.md).
There you upload the corresponding mission file into your **mpmissions** directory which you can find under **/gxxxxxx/arma3/**.
In this example we upload the game mode **King of the Hill** to our server.

![image](https://user-images.githubusercontent.com/26007280/189677376-71ab1c40-b8e9-47df-9578-470d40972802.png)


## Loading the mission file on the server

To load the mission file from the server, go to your ArmA 3 server interface and click on the **Configs** tab in the menu on the left:

![image](https://user-images.githubusercontent.com/26007280/189677415-4fa43482-ef31-4140-a6e8-5b55bc7b62db.png)

There you edit the file **server.cfg** and enter the name of your mission file as shown in the picture: 

![image](https://user-images.githubusercontent.com/26007280/189677440-d50c4140-ae15-44ce-931b-9e51e22097d8.png)

![image](https://user-images.githubusercontent.com/26007280/189677469-3a840300-83b2-4356-8278-d62661229082.png)

After that, click **Save** and you can start your server. The new mission file will be loaded.
