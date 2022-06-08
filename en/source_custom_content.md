---
id: source_custom_content
title: Source Games: Installing custom content and mods on game servers
description: Information on how to install custom content and mods on your Source game server (e.g. CSS or Garry's Mod) from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Custom Content
---

## What is custom content?

Some source games such as Counter-Strike or Garry's Mod have become known for their variety. All of this was made possible by the support of plugins and **custom content**. Various game modes have been developed over the years, such as Zombie Mod, Hide and Seek, Minigames, Jailbreak and much more. 

![image](https://user-images.githubusercontent.com/13604413/159178680-6fd1ea06-9ee9-4bfc-a23e-2f3457800c04.png)



Such servers often use maps, player skins and sounds created by the community. In order for players to be able to use or view the custom content of the server, the content must first be downloaded from the server. In this case there are two possibilities:

- FastDL
- Steam Workshop

Depending on the scope of application, one option is more useful than the other. Below is an overview of the differences between FastDL and Workshop:

|  Custom Inhalte  | FastDL | Steam Workshop |
| :--------------: | :----: | :------------: |
|       Maps       |   ✓    |       ✓        |
| Materials/Models |   ✓    |       ✗        |
|      Sounds      |   ✓    |       ✗        |



## Set up custom content



### FastDL

In the following, the setup of the FastDL server using one of our [Webspace Products](https://zap-hosting.com/en/shop/product/webspace/) is explained. However, you can also use any other option that provides a publicly accessible web server. To start with the setup, we open the webspace product and open the administration:

![img](https://screensaver01.zap-hosting.com/index.php/s/dAwjLtmZMC26APG/preview)



Once there, we open the file manager and create the following folders:

![img](https://screensaver01.zap-hosting.com/index.php/s/sK75ft8bTw4kADT/preview)

![image](https://user-images.githubusercontent.com/13604413/159178687-7ea690cf-0d73-4e22-a302-023be7603cef.png)



Afterwards, the web space has to be authorized so that the download of the content in the game will work properly:

![img](https://screensaver01.zap-hosting.com/index.php/s/BJmLyT28QB58d8f/preview)

> The permissions must be set for all folders!

Now the custom content can be uploaded. For this, the files must be available on the server as well as on the FastDL(webspace). On the game server the files are uploaded unpacked and on the FastDL they should be uploaded packed as bzip2. The program 7Zip is recommended for this purpose.

Finally, the FastDL server only needs to be specified with the game server. The configuration is done via the **server.cfg**. For this purpose the following commands must be added to the Config:

```
sv_allowdownload 1
sv_allowupload 1
sv_downloadurl "https://zapXXXXX-1.plesk08.zap-hosting.com" // Replace the URL with your ZAP webspace URL.
```

After restarting and connecting to the server the corresponding content should be downloaded. This can also be checked in the console of the game:

![image](https://user-images.githubusercontent.com/13604413/159178720-35ccc5ca-7367-467a-869c-5cf87a834d95.png)



### Steam Workshop

In the following, the setup of the Steam Workshop is explained. First of all, the Steam Workshop page must be opened. To do this, select the appropriate game in Steam and open the workshop there. In this case we take [CS:GO](https://steamcommunity.com/workshop/browse/?appid=730&browsesort=trend&section=collections) as an example. Once there, we click on the menu item Browse and select Collection:

![img](https://screensaver01.zap-hosting.com/index.php/s/Ljmm5fdzNjbSaXY/preview)

There we click right on Collection and create the collection for the game server:

![img](https://screensaver01.zap-hosting.com/index.php/s/YKrz6qABKEiXznn/preview)

![image](https://user-images.githubusercontent.com/13604413/159178741-f3d5bd5a-88e7-4bbc-9d9d-5273d16c3676.png)

The collection has then been successfully created. However, it is still empty by default. Therefore, we now reopen the workshop of the game and select the objects we want to add:

![img](https://screensaver01.zap-hosting.com/index.php/s/s62wfMcwKs5pjtd/preview)

When you are done collecting, you will need to go back to the collection, right click and select Copy Page URL. The ID of the collection is needed from the URL, which can look like this:

...steamcommunity.com/sharedfiles/filedetails/?id=**2108505414**

At the end this has to be added at Steam Workshop in your game server administration:

![img](https://screensaver01.zap-hosting.com/index.php/s/M2Kot2q6tjHkDXg/preview)
