---
id: fivem_installresources
title: FiveM: Installing resources, mods and scripts on server
description: Information on how to install resources, mods and scripts on your FiveM server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Resource Installation
---

## Introduction

Resources can be used to expand your FiveM server with additional features. This is especially interesting if you are planning to start larger projects, such as a roleplay server or similar. Something like this can't be done without such additional resources. 

FiveM and its community offers a large variety of resources. An overview of the most popular resources can be found here: https://forum.cfx.re/c/development/releases/7


## Preperation

The installation of resources is done via FTP. You will need an FTP client to upload files to your server. If you don't know what FTP is and how it works, it's best to take a look at the following guide: [FTP file access](https://zap-hosting.com/guides/docs/en/gameserver_ftpaccess/)

Downloaded resources are usually offered in a packed format. This means that you have to unpack the packed file with an unpacking program such as 7Zip, Winrar or WinZip. The unpacked resource should contain at least the following files:  __resource.lua / fxmanifest.lua and the associated script files.

> In case these files are not present, it may be that they are located in a subdirectory. 


## Installation

### Upload 
The previously unpacked files must now be uploaded as an individual folder, if it doesn't exist already. The folder must then be uploaded to the server's resource directory. The directory structure usually looks like this:
```
/gXXXXXX/gta5-fivem/server-data/resources
```
> The directory structure of FiveM TxAdmin differs from the rest of the FiveM products, as they still contain their own template directory. The resources are also located in the template directory. 

Certain resources cooperate with a database and therefore often already contain SQL files that have to be imported into the database. If you are not familiar with how databases work or how to import them, it is worth taking a look at the [FiveM Server: SQL File Import](https://zap-hosting.com/guides/docs/en/fivem_sql_file_import/) guide.

### Activation
To ensure that the installed resource is also loaded, it must first be activated in the server config. The activation is done via the **Start** command. For instance, if you have uploaded the resource with the name "eup-ui", then the start command in the config must look like this: 
```
start eup-ui
```
> Please make sure that the name of the previously created folder is the same as the name of the start command. The upper and lower case is also essential. 

Afterwards, the server can be restarted as soon as this step has been completed. The installed resource should now be loaded with the next startup process. 
