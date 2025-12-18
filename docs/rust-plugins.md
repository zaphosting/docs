---
id: rust-plugins
title: "Rust: Installation of plugins"
description: "Discover how to enhance your Rust server with popular plugins for customization and improved gameplay → Learn more now"
sidebar_label: Install Plugins 
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/rust-plugins.json';

## Introduction

Plugins allow you to expand and personalize your server even more. In the following, we’ll explain where to find the most commonly used plugins and how to set them up.

<InlineVoucher />


## Preparation

First of all, you need to download the plugins that you want to install on the server. A large selection of plugins can be found at [umod.org (formerly OXIDE)](https://umod.org/plugins). During the download you will get a `.cs` file.  

![](https://screensaver01.zap-hosting.com/index.php/s/BrQxNHwZqdpNGsp/preview)



## Installation

Once the desired plugins have been downloaded, you can proceed with the installation. This is done via **FTP**, so you will need an FTP client to upload the files to your server. If you are not yet familiar with FTP and how it works, please refer to the [FTP access](gameserver-ftpaccess.md) guide.

You will find the correct plugin directory under: `/gXXXXXX/rust-oxide/oxide/plugins`. Simply upload the downloaded `.cs` plugin files to this folder. It should look similar to this after uploading:  


![img](https://screensaver01.zap-hosting.com/index.php/s/eE5gdLg4Na5nCKM/preview)

Nothing more needs to be done. This already completes the installation. Afterwards you can check in the live console if the plugin was compiled and loaded successfully. The output should look like this:

```
AdminAutoTeams and AdminLogger were compiled successfully in 0ms
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)

Loaded plugin Admin Logger v2.3.4 by AK
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)
```



## Popular Plugins

Still looking for the perfect plugins for your server?

 Browse through our carefully curated list of the most popular and highly recommended plugins to enhance your gameplay and give your server the finishing touch it deserves. Get inspired and find exactly the additions that fit your project.

<SearchableItemList items={items} />


## Conclusion

Provided you have followed all the steps, you should have successfully installed your plugin.  For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
