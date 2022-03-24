---
id: minecraft_add_own_world
title: Minecraft: Adding your own world to the server
description: Information on how to add your own world to your Minecraft server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Add your own world
---

Click here to get to our Minecraft servers: [Minecraft server hosting](https://zap-hosting.com/en/minecraft-server-hosting/)

You want to use your own world or a world downloaded from the internet on your server? Then this is the right place for you! All you need is your world and an FTP client. If you don't know what a FTP client is and how to use it, then have a look at the following instructions: [FTP file access](https://docs.zap-hosting.com/docs/de/gameserver_ftpaccess/)

![image](https://user-images.githubusercontent.com/13604413/159177625-7973671f-19a8-4867-ad10-e41bf04a4ab3.png)



Once the connection to the server has been established via FTP, you can start setting up your own world. To do this, you first have to go to the appropriate directory where the current world is located. It is located in the following directory: /gXXXXX/modpack/

![image](https://user-images.githubusercontent.com/13604413/159177628-ac6d55dc-e4ed-4746-93bd-5c416289d35a.png)

The new world must now be uploaded to the directory. You can either delete and replace the old **world** folder or upload the new world under a different name. In this example we upload the world with a new name:!

![image](https://user-images.githubusercontent.com/13604413/159177630-97982a29-6ec7-4014-bd10-81c2e2585630.png)

Now the newly uploaded world only needs to be configured in the **server.properties** Config. You can find it in the **gameserver administration** under **Configs**. There you have to adjust the value of the **level-name=** command:

![image](https://user-images.githubusercontent.com/13604413/159177632-6d0d181d-ce56-4257-886b-e1e75367abcd.png)


After restarting the server, the new world should now be applied. Enjoy your new world! 🙂
