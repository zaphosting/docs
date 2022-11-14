---
id: arma3_missionfile
title: Upload your own mission file
sidebar_label: Upload your own mission file
---


## Upload the mission file

For uploading your own mission file you have to connect to your server via FTP before: [Gameserver FTP connection](gameserver_ftpaccess.md).
There you have to upload the mission file into your **mpmissions** directory which you can find under **/gxxxxxx/arma3/**.
In this example we upload the mission file **King_of_the_hill.Altis** to our server.

![image](https://user-images.githubusercontent.com/26007280/189678011-e09b3415-f6ca-42f5-8329-3481f037174d.png)


## Loading the mission file on the server

To load the mission file from the server, go to your ArmA 3 server interface and click on the **Configs** tab in the menu on the left:

![image](https://user-images.githubusercontent.com/26007280/189678037-dd2ca9f9-6660-4c51-8e24-66605314c732.png)

There you edit the file **server.cfg** and enter the name of your mission file as shown in the picture: 

![image](https://user-images.githubusercontent.com/26007280/189678063-00e696c3-617b-4827-a6ed-347c80e0831c.png)

![image](https://user-images.githubusercontent.com/26007280/189678086-a4191b6a-bbe6-4109-9014-d4c85bc0fd9e.png)

After that, click **Save** and you can start your server. The new mission file will be loaded.
