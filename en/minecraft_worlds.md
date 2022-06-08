---
id: minecraft_worlds
title: Minecraft Server: Manage worlds
description: Information on how to manage multiple worlds on your Minecraft server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Manage Worlds
---

Click here to get to our Minecraft servers: [Minecraft server hosting](https://zap-hosting.com/en/minecraft-server-hosting/)

## 📶 Connecting to FTP

You can manage your world with a program like FileZilla Client or WinSCP. In our example we use FileZilla. 
Please reference the guide [FTP-Access](gameserver_ftpaccess.md) for connecting via FTP. 

![](https://screensaver01.zap-hosting.com/index.php/s/pHYF8Erdpm67egn/preview)

The folder "world" is the standard folder. The name of this is set in the server.properties file. This file is where the "world" folder is located. The value can be changed by editing the line "level-name". If a name is entered that does not exist as a folder, a new world is generated.

## ⚠ Spigot/PaperMC/Bukkit Special Features

There is a special feature at Spigot, PaperMC & Bukkit. Unlike Vanilla Minecraft, the two dimensions "Nether" and "The End" have their own folder. So if you want to completely recreate your world, you have to remove the two dimension folders as well. In addition, you can always replace "WorldName" with the name of your world. These are:

```
WorldName_nether
```
and
```
WorldName_the_end
```

If errors occur in Nether or End when importing your own world, you can move them manually into their correct folder. First delete the content of WorldName_nether\ and WorldName_the_end\

Now move all files from these folders to the new folders.

Nether:

WorldName\Dim-1\ -> WorldName_nether\Dim-1\

The End:

WorldName\Dim1\  ->WorldName_the_end\Dim1\

Afterwards these should be loaded correctly.

## 🗑 Recreate the World

Shut down your server and connect via FTP. Now just delete the world folder or rename it. If you want to make settings like the seed at the same time, you can do this in the "server.properties". These are applied after starting. Now start your server. You should now have a fresh world.

## ♻ Replace the World

Shut down your server and connect via FTP. Now simply delete the old world folder or rename it. Now simply upload your existing world, open the server.properties and enter the name of the world there. Now start your server. You should see your world now.

## 💾 Secure the World

Shut down your server and connect via FTP. Backing up is very easy, just download your worlds folder. Your entire inventory is stored in your world folder, plus of course everything you have built.
