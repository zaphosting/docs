---
id: fivem-installresources
title: "FiveM: Installation of resources"
description: "Discover how to enhance your FiveM server with popular resources for larger projects like roleplay servers → Learn more now"
sidebar_label: Install resources
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/fivem-resources.json';

## Introduction

Resources can be used to expand your FiveM server with additional features. This is especially interesting if you are planning to start larger projects, such as a roleplay server or similar. Something like this can't be done without such additional resources. 

FiveM and its community offers a large variety of resources. An overview of the most popular resources can be found on the Cfx.re Forum: https://forum.cfx.re/c/development/releases/7



<InlineVoucher />

## Preparation

The installation of resources is done via FTP. You will need an FTP client to upload files to your server. If you are not familiar with using FTP, we recommend you to have a look at the [FTP access](gameserver-ftpaccess.md) guide.

Downloaded resources are usually offered in a compressed format. This means that you have to uncompress the compress files with an unpacking program such as 7Zip, Winrar or WinZip. The uncompressed resource folder should contain at least the following files: `__resource.lua` or `fxmanifest.lua` as well as the associated script files.

:::info
In the case that these files are not present, it may be that they are located in a subdirectory withing the resource.
:::

## Installation

### Uploading files

You must now upload the previously uncompressed files as an individual folder (if not already). Your folder must be uploaded to the server's `resource` directory. The directory structure typically looks like: `/gXXXXXX/fivem/YOUR_TEMPLATE/resources`

![img](https://screensaver01.zap-hosting.com/index.php/s/9ZEX32BSrwGDjEc/preview)



Certain resources cooperate with a database and therefore often already contain SQL files that have to be imported into the database. If this is the case, head over to our [SQL File Import](fivem-sql-file-import.md) guide to learn more about how to do this.

### Activation

To ensure that the installed resource is loaded on server startup, you must first activate it in the `server.cfg` file for your server. The activation is done via the `start [example resource]` command. 

For example, if you have uploaded the resource with the folder name `eup-ui`, the start command in the config must look like this: 
```
start eup-ui
```

You can access your `server.cfg` file through the CFG Editor in txAdmin interface.

:::info
Please ensure that the name of the previously created folder is the same as what is found in the start command. This includes being case sensitive.
:::


## Popular Resources

Still looking for the perfect resources for your server? Browse through our carefully curated list of the most popular and highly recommended resources to enhance your gameplay and give your server the finishing touch it deserves. Get inspired and find exactly the additions that fit your project.

<SearchableItemList items={items} />


## Conclusion
Finally, you can restart your server. The installed resource should now be loaded next time your server has fully started. You have successfully installed a resource into your FiveM game server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
