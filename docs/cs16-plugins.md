---
id: cs16-plugins
title: "CS 1.6: Install plugins on your own server"
description: "Discover how to enhance your Counter-Strike 1.6 server with AMXmodX and Metamod for advanced customization and administration → Learn more now"
sidebar_label: Install Plugins
services:
  - gameserver-cs16

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/cs16-plugins.json';

## Introduction

**AMXmodX** and **Metamod** is necessary to use plugins on a Counter-Strike 1.6 server. These are two Half Life extensions that allow you to customize the server even more than usual. This includes for example the use of plugins and an extended administration of your server.

<InlineVoucher />

## AMXmodX / Metamod installation

### Preparation

First of all, the actual extensions are needed. The extensions can be downloaded from [amxmodx.org](https://amxmodx.org/downloads-new.php). Please always use the latest versions (**stable**), so that they are still fully functional and compatible.

![img](https://screensaver01.zap-hosting.com/index.php/s/SxJaFb7Cz79c7ER/preview)

You need the Linux packages **AMX Mod X Base, Counter-Strike Addon and Metamod**. Those can be downloaded from there. Afterwards three packed files should have been downloaded. Unzip them on your computer. This should give you an **addons** folder which contains an **amxmodx** and **metamod** folder: 

![](https://screensaver01.zap-hosting.com/index.php/s/LQdb93T39YApA6B/preview)



### Installation

Once the above steps have been completed, then it's time for the actual installation. The files have to be uploaded to your server via FTP. You need a FTP client to be able to upload files to your server. If you don't know what FTP is and how it works, then you should have a look at the following guide: [Access via FTP](gameserver-ftpaccess.md)

Now, the **addons** folder has to be uploaded to the main directory of the server. The file structure of the folder should then look like this:



![](https://screensaver01.zap-hosting.com/index.php/s/A5zqJ9GxL47tCrW/preview)



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

![](https://screensaver01.zap-hosting.com/index.php/s/FG2ocNpWCRManSd/preview)


The next time the server starts, the uploaded plugins should then be loaded automatically. 



## Popular Plugins

Still looking for the perfect plugins for your server?
 Browse through our carefully curated list of the most popular and highly recommended plugins to enhance your gameplay and give your server the finishing touch it deserves. Get inspired and find exactly the additions that fit your project.

<SearchableItemList items={items} />

## Conclusion

Provided you have followed all the steps, you should have successfully installed AMXmodX / Metamod and your desired plugins. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
