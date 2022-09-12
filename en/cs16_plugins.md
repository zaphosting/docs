---
id: cs16_plugins
title: Counter-Strike 1.6: Install plugins on your own server
description: Information on how to install plugins on your CS 1.6 server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Install Plugins

---



## AMXmodX / Metamod installation

**AMXmodX** and **Metamod** is necessary to use plugins on a Counter-Strike 1.6 server. These are two Half Life extensions that allow you to customize the server even more than usual. This includes for example the use of plugins and an extended administration of your server.

![image](https://user-images.githubusercontent.com/26007280/189676446-b4571e65-1606-4cca-bb5a-abca11dd28dd.png)

### Preparation

First of all, the actual extensions are needed. The extensions can be downloaded from [amxmodx.org](https://www.amxmodx.org/downloads.php). Please always use the latest versions (**stable**), so that they are still fully functional and compatible.

![image](https://user-images.githubusercontent.com/26007280/189676489-11372b1e-f8a6-40de-816c-e3708d5adb20.png)

You need the Linux packages **AMX Mod X Base, Counter-Strike Addon and Metamod**. Those can be downloaded from there. Afterwards three packed files should have been downloaded. Unzip them on your computer. This should give you an **addons** folder which contains an **amxmodx** and **metamod** folder: 

![image](https://user-images.githubusercontent.com/26007280/189676512-dd3e35a7-4e07-4e42-8233-7231f3f8793d.png)



### Installation

Once the above steps have been completed, then it's time for the actual installation. The files have to be uploaded to your server via FTP. You need a FTP client to be able to upload files to your server. If you don't know what FTP is and how it works, then you should have a look at the following guide:  [FTP File Access](https://zap-hosting.com/guides/docs/en/gameserver_ftpaccess/)

Now, the **addons** folder has to be uploaded to the main directory of the server. The file structure of the folder should then look like this:



![image](https://user-images.githubusercontent.com/26007280/189676545-1ace2989-9540-44cd-9580-6a85a0e0f662.png)



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

![image](https://user-images.githubusercontent.com/26007280/189676584-4304a2fd-3c36-45ec-9db5-d6a4610a8f1b.png)


The next time the server starts, the uploaded plugins should then be loaded automatically. 
