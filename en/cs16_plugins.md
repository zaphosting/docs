---
id: cs16_plugins
title: Install Plugins
sidebar_label: Install Plugins

---



## AMXmodX / Metamod installation

**AMXmodX** and **Metamod** is necessary to use plugins on a Counter-Strike 1.6 server. These are two Half Life extensions that allow you to customize the server even more than usual. This includes for example the use of plugins and an extended administration of your server.

### Preparation

First of all, the actual extensions are needed. The extensions can be downloaded from [amxmodx.org](https://www.amxmodx.org/downloads.php). Please always use the latest versions (**stable**), so that they are still fully functional and compatible.

![img](https://screensaver01.zap-hosting.com/index.php/s/AiDZ3HwYsnZQfat/preview)

You need the Linux packages **AMX Mod X Base, Counter-Strike Addon and Metamod**. Those can be downloaded from there. Afterwards three packed files should have been downloaded. Unzip them on your computer. This should give you an **addons** folder which contains an **amxmodx** and **metamod** folder: 

![img](https://screensaver01.zap-hosting.com/index.php/s/3k8pZqmxSpqCZT6/preview)



### Installation

Once the above steps have been completed, then it's time for the actual installation. The files have to be uploaded to your server via FTP. You need a FTP client to be able to upload files to your server. If you don't know what FTP is and how it works, then you should have a look at the following guide:  [FTP File Access](https://zap-hosting.com/guides/docs/en/gameserver_ftpaccess/)

Now, the **addons** folder has to be uploaded to the main directory of the server. The file structure of the folder should then look like this:



![img](https://screensaver01.zap-hosting.com/index.php/s/HPNGdqPkd2NYrrG/preview)



The setup of **AMXmodX** and **Metamod** is now complete. You can connect to your server in the game and use the ``amxx version`` command in the console to check if AMX was successfully installed. The output should look like this:

```
AMX Mod X 1.8.2
Authors: ....
Compiled: Feb 14 2013, 00:56:31
URL:http://www.amxmodx.org/
Core mode: JIT
```

If the message **Unknown command** is displayed, then something went wrong during the installation. 



## Plugins installation

### Preparation

Once the setup of **AMXmodX** and **Metamod** is complete and functional, you can start installing plugins. First of all you have to download the plugins you want to install on the server. A large selection of plugins can be found at [amxmodx.org](https://www.amxmodx.org/compiler.php). Numerous plugins have been published there over the years and more are still being added regularly. You need the **.amxx** file for the respective plugins. 

### Installation

Now when the desired plugins have been downloaded, then the actual installation of the plugins can be started. The setup of the plugins is also done via FTP. The plugin files are have to be uploaded to the plugins directory under ``../addons/amx``. 

![img](https://screensaver01.zap-hosting.com/index.php/s/n8edxdbEfqrr6EZ/preview)



![img](https://screensaver01.zap-hosting.com/index.php/s/pZMZEwcB5NoGt4o/preview)



The next time the server starts, the uploaded plugins should then be loaded automatically. 
