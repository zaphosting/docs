---
id: fivem-installresources
title: "FiveM: Installation of resources"
description: Information on how to install resources on your FiveM server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Install resources
---

import YouTube from '@site/src/components/YouTube/YouTube';
import Advertisements from '@site/src/components/Advertisements/Advertisements';

## Introduction

Resources can be used to expand your FiveM server with additional features. This is especially interesting if you are planning to start larger projects, such as a roleplay server or similar. Something like this can't be done without such additional resources. 

FiveM and its community offers a large variety of resources. An overview of the most popular resources can be found on the Cfx.re Forum: https://forum.cfx.re/c/development/releases/7

<YouTube videoId="V7us5V6KLho" title="How to Add Resources to a FiveM Server" description="Feel like you understand better when you see things in action?  We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>

## Preperation

The installation of resources is done via FTP. You will need an FTP client to upload files to your server. If you are not familiar with using FTP, we recommend you to have a look at the [FTP file access](gameserver-ftpaccess.md) guide.

Downloaded resources are usually offered in a compressed format. This means that you have to uncompress the compress files with an unpacking program such as 7Zip, Winrar or WinZip. The uncompressed resource folder should contain at least the following files: `__resource.lua` or `fxmanifest.lua` as well as the associated script files.

:::info
In the case that these files are not present, it may be that they are located in a subdirectory withing the resource.
:::

## Installation

### Uploading files

You must now upload the previously uncompressed files as an individual folder (if not already). Your folder must be uploaded to the server's `resource` directory.

![image](https://github.com/zaphosting/docs/assets/42719082/85a508ac-fd43-401f-9fc6-cffd538e34f0)

The directory structure typically looks like:
```
/gXXXXXX/gta5-fivem/server-data/resources
```

:::info
The directory structure of the FiveM TxAdmin game server differs from the rest of the FiveM products, as they contain their own template directory. The resources are also located in the template directory.
:::

Certain resources cooperate with a database and therefore often already contain SQL files that have to be imported into the database. If this is the case, head over to our [SQL File Import](fivem-sql-file-import.md) guide to learn more about how to do this.

### Activation

To ensure that the installed resource is loaded on server startup, you must first activate it in the `server.cfg` file for your server. The activation is done via the `start [example resource]` command. 

For example, if you have uploaded the resource with the folder name `eup-ui`, the start command in the config must look like this: 
```
start eup-ui
```

You can access your `server.cfg` file either through FTP (as seen above), or via the **Configs** section on your game server's webinterface.

:::info
Please ensure that the name of the previously created folder is the same as what is found in the start command. This includes being case sensitive.
:::

Finally, you can restart your server. The installed resource should now be loaded next time your server has fully started. You have successfully installed a resource into your FiveM game server!
