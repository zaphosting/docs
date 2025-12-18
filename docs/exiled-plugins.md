---
id: exiled-plugins
title: "SCP EXILED: Installing plugins"
description: "Discover how to expand and personalize your server with trusted plugins for enhanced functionality and customization → Learn more now"
sidebar_label: Install Plugins
services:
  - gameserver

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/scp-plugins.json';


## Introduction

Plugins allow you to expand and personalize your server even more. In the following, we’ll explain where to find the most commonly used plugins and how to set them up.

<InlineVoucher />

## Preparation

First, you’ll need to download the plugins you want to install on your server. A wide range of EXILED plugins can be found on their official GitHub page. Once you’ve selected a plugin repository, you’ll find a releases section where you can download the latest version. Detailed instructions on how to proceed are provided below.

While plugins can be downloaded from various sources, we recommend sticking to trusted platforms like the official GitHub repository, as these are generally considered the safest. Always exercise caution when adding plugins to your server. Make sure to verify the source, check the developers, and fully understand what the plugin does before installing it.

To download a plugin from GitHub, start by visiting the official [EXILED GitHub page](https://github.com/Exiled-Team) and selecting the plugin repository you’d like to use.  
![](https://screensaver01.zap-hosting.com/index.php/s/6cCEZGEBKNnJ4o4/preview)  

Once inside the plugin repository, look for the **Releases** section, located on the right-hand side.  
![](https://screensaver01.zap-hosting.com/index.php/s/fteeKrPYmRZknBq/preview)  

In the Releases section, you will find a downloadable **.dll** file. Click on it to start the download.  
![](https://screensaver01.zap-hosting.com/index.php/s/WzB3qHEb37kkBKs/preview)  

That’s it! Once downloaded, you can proceed to the installation steps further down in this guide to learn how to install the **.dll** file onto your server.


## Installation

Once the desired plugins have been downloaded, you can proceed with the installation. This is done via **FTP**, so you will need an FTP client to upload the files to your server. If you are not yet familiar with FTP and how it works, please refer to the following guide: [Access via FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/pr5s8ySnpBN7qjC/preview)

You will find the correct plugin directory under: ```/gXXXXXX/.config/EXILED/Plugins```. Simply upload the downloaded **.dll** plugin files to this folder. It should look similar to this after uploading:  

![](https://screensaver01.zap-hosting.com/index.php/s/MRJHcdGpwSb2agK/preview)

Once this step is complete, the plugin installation is finished. Finally, check the **live console** to verify that the plugin has been successfully compiled and loaded. The confirmation in the console should look like this:  

![](https://screensaver01.zap-hosting.com/index.php/s/NtN6T5fPif3ngEW/preview)



## Popular Plugins

Still looking for the perfect plugins for your server? Browse through our carefully curated list of the most popular and highly recommended plugins to enhance your gameplay and give your server the finishing touch it deserves. Get inspired and find exactly the additions that fit your project.

<SearchableItemList items={items} />


## Conclusion

Provided you have followed all the steps, you should have successfully installed your plugin.  For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
