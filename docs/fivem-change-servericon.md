---
id: fivem-change-servericon
title: Icon für Serverliste ändern
description: Informationen, wie du das Servericon für FiveM-Server von ZAP-Hosting ändern kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Change server icon
---



You want to customize your server and give it your own icon image? Don't worry, this can be done easily! In the following we will explain you which aspects have to be considered and how the setup is done. **📺Video:** Do you prefer instructions in the form of a video or as an additional visual supplement? No problem! We also provide a video for this topic: 

<iframe width="560" height="315" src="https://www.youtube.com/embed/nv0Ss5fo_ps" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



## Preparation

The use of a custom server icon requires certain requirements. The requirements include that the image file has a size of 96x96 pixels and that the image format is in PNG. Once you've chosen the image you want and made it fit the requirements, you are ready to start setting it up. 



## Installation

The setup of an own icon is done via FTP. FTP allows you to upload the image file to your server. If you are not familiar with this yet, then we recommend to have a look at the [FTP access](gameserver-ftpaccess.md) guide. Navigate to the folder `gXXXX/gta-fivem/server-data/` and upload your server icon file there.

![image](https://user-images.githubusercontent.com/13604413/159137598-e4bd90d5-047e-4b16-8020-b9fc7c68f007.png)

Copy the filename of your uploaded icon and open the server.cfg config file. You can also open it via FTP or in your game server dashboard under the Configs tab. Browse the file for the line `load_server_icon`. The value of the command must match the name of your uploaded file. You can skip the renaming step if you keep the name of the original file. 

![image](https://user-images.githubusercontent.com/13604413/159137604-c8383001-abef-4cc9-ae10-e270c7aa33b3.png)



The last step is to restart the server so that the change is applied and displayed. You will see the result in the server list or via direct connection. 
