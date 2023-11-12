---
id: ark-savegame
title: Import your own savegame
description: Information on how to import your own savegame to your ARK server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Import savegame (world)
---



## Introduction

Do you want to use your own savegame (backup/snapshot/) from a previous server or from the official ARK: Survival Evolved servers? No problem, you can also use an existing savegame.  How exactly this works will be explained in the following. 



## Requirements

To import your own savegame, all files from the savegame are required. These are usually saved in the **SavedArks** directory, which is located in the **Shootergame/Saved** directory. Search for these files and save them for the upcoming import process. You can alternatively upload a savegame from the official ARK servers. More information about the resolution of the official servers and the availability of savegames can be found here: https://ark.wiki.gg/wiki/2023_official_server_save_files

The transfer of files takes place via the FTP protocol. An FTP client is therefore required to use FTP. If you aren't yet familiar with FTP, we recommend that you read the [FTP file access] (gameserver-ftpaccess.md) guide.

:::warning
The use of your own savegame is only possible with the **ARK - SE (official Backupsave compatible)** variant. If you use a different version for your server, you can change the game under games accordingly. 
:::



## Upload save game

Now connect to your server via FTP and navigate to the following folder structure: `/gxxxxx/ark/ShooterGame/Saved/SavedArks`. Delete all files of the current savegame and then upload all required files (.ark, .arktribe and .arkprofile) of the savegame you have prepared before. This process may take some time, depending on the size of the savegame.



## Conclusion

With the next start process, the newly uploaded files should be taken into account and be used. Your desired savegame should now be available. :)

