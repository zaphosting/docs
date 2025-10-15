---
id: redm-txadmin-features
title: "RedM: txAdmin Interface"
description: "Discover how to efficiently manage and monitor your RedM server with txAdmin’s full-featured web panel → Learn more now"
sidebar_label: txAdmin Interface
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

txAdmin is a completely free to use, full-featured web panel to Manage & Monitor your RedM server. It offers a wide range of features designed to make managing a RedM server as easy as anything. In this guide, we will introduce you to the txAdmin interface, highlighting its features and explaining exactly what you can do with it.

![](https://screensaver01.zap-hosting.com/index.php/s/YrRXBNBX2xTnRyJ/preview)

<InlineVoucher />



## Navigation

The navigation menu includes the following items: **Players**, **History**, **Whitelist**, **Admins**, **Settings**, and **System**. Each of these will be explained in more detail below.

### Players

The Players section provides a general overview of player statistics, including the total number of players who have connected, the number of players connected in the last 24 hours, and the number of new players connected in the last 24 hours and 7 days. Below this, you'll find a list of currently connected players, along with their total playtime, first connection time, and last connection time.

Click on a player to access additional management options. Here, you can view further information, notes, history (bans/warnings), IDs (Player Identifiers, Player Hardware IDs), and the ban options.

![](https://screensaver01.zap-hosting.com/index.php/s/wpRc2sW6gZZaN3S/download)





### History

The History section lists all warnings and bans issued to players, along with detailed information about the player, the reason, and who issued or executed the warning/ban, including the date and time. You can also revoke warnings and bans from there.

![](https://screensaver01.zap-hosting.com/index.php/s/qbLwEx39pmpY4sa/preview)

### Whitelist

In the Whitelist section, you have the option to manage the whitelist function. The whitelist allows you to restrict who has access to the server. If this option is enabled in the txAdmin settings, a whitelist request is automatically created when a new player connects for the first time. You can then manage these requests accordingly in this section.

![](https://screensaver01.zap-hosting.com/index.php/s/o4K5zgGrz8G7Rqp/preview)

### Admins

Under the Admins section, administrators can be specified and managed. New admins can be added by clicking the **Add** button. This opens a pop-up window where you can create the account and set the appropriate permissions.

![](https://screensaver01.zap-hosting.com/index.php/s/H7BYP2QqyZD6nSJ/download)

### Settings

In the Settings section, you can configure a wide range of options for both txAdmin and the server itself. Due to the large number of settings available, they are categorized into the following sections: **General**, **FXServer**, **Restarter**, **Player Manager**, **Discord**, and **Game**. Each of these will be explained in more detail below.

![img](https://screensaver01.zap-hosting.com/index.php/s/9r44PictxZLad6c/download)

#### General

Settings for the server name, chat/Discord message language, and ban templates can be configured under the General section.

![](https://screensaver01.zap-hosting.com/index.php/s/y3WMSp5PPKyyDC2/preview)



#### FXServer

Settings for the Server Data Folder and CFG File Path, as well as additional arguments such as activating gamemodes/DLCs, enabling/disabling OneSync, Autostart, and Quietmode, can be configured under the FXServer section.

![img](https://screensaver01.zap-hosting.com/index.php/s/8s5rBzAN7nsRtqe/preview)



#### Bans

In the Bans section, you can manage the ban feature. Define whether accounts are actively checked for their ban status and which message should be displayed if the connection is rejected due to a ban.

![img](https://screensaver01.zap-hosting.com/index.php/s/fTjM4EFbtB7cw4q/preview)

#### Whitelist

In the Whitelist section, you can manage the whitelist feature. Define whether you want to activate or deactivate the whitelist and which message should be displayed if the connection is rejected due to a missing whitelist record.

![img](https://screensaver01.zap-hosting.com/index.php/s/6MyaBwRnroTSHbK/preview)

#### Discord

Discord integration can be activated under the Discord section, allowing information to be automatically transmitted to the linked Discord server. To enable this, the necessary details for the Discord bot must be configured.

![img](https://screensaver01.zap-hosting.com/index.php/s/jSbXE9c23wjiKRf/preview)

#### Game

Under game, you can enable the txAdmin Menu for in-game use, allowing admins to access and manage the menu using the /tx command. Additional customization options for layout, button configuration for toggling switches, and notifications/warnings can also be defined.

![img](https://screensaver01.zap-hosting.com/index.php/s/fLo976YMdbYkHts/preview)

### System

In the Settings section, you can see a few important general options and information. They are categorized into the following sections: **Master Actions**, **Diagnostics**, **Console Log** and **Action Log**. Each of these will be explained in more detail below.



#### Master Actions

In the Master Actions you will find the option to reset your FXServer, make a database backup, clean the database and define when players should be removed from a whitelist if they have been inactive for too long.  

![](https://screensaver01.zap-hosting.com/index.php/s/3A38EoqELeWMYJ6/download)



#### Diagnostics

The Diagnostics section displays all relevant information about the environment, txAdmin runtime, Diagnostics Report, FXServer /info.json, and processes.

![](https://screensaver01.zap-hosting.com/index.php/s/4Qg9MKwwnqFXwBd/preview)

#### Console Log

The Console Log displays the output from txAdmin on the parent terminal, including the typically hidden debug messages.

![](https://screensaver01.zap-hosting.com/index.php/s/jsCerbambRn5DMy/preview)

#### Action Log

The Console Log shows the Action Log, which records all actions performed by txAdmin or any Admin.

![](https://screensaver01.zap-hosting.com/index.php/s/P65fwKRSfjDZgdo/preview)



## Sidebar 

The sidebar menu includes the following items: **Dashboard**, **Live Console**, **Resources**, **Server Log** and **CFG Editor**. Each of these will be explained in more detail below.



### Dashboard

The dashboard displays all essential general information about the server. Live data on utilization and performance can be monitored through the statistics. The server status, whether started, online, or stopped, is visible in the sidebar. From there, you can also start, stop, or restart the server, kick all players with one click, and send announcements. Additionally, scheduled restarts can be set up. On the right side of the sidebar, you can view information about the players currently connected.

![](https://screensaver01.zap-hosting.com/index.php/s/YrRXBNBX2xTnRyJ/preview)



### Live Console

The Live Console provides you with real-time information about server activities. Here, you can view details on activities, warnings, and error messages. It serves as a valuable reference point for debugging issues by analyzing potential error messages.

![](https://screensaver01.zap-hosting.com/index.php/s/PDyPa7TfsHgTbAD/preview)

### Resources
Under the Resources section, you'll find an overview of all resources, whether pre-installed via a template (recipe) or added by you later. You can also restart or stop them as needed.

![](https://screensaver01.zap-hosting.com/index.php/s/QJZnMTCqQpx92EL/preview)

### Server Log

The server log allows you to monitor all activities on the server. For instance, you can view details such as when players connect or disconnect, chat messages, game deaths, menu actions, executed commands, and system events.

![](https://screensaver01.zap-hosting.com/index.php/s/zgBGMQq3stNkstq/preview)



### CFG Editor

You can use the CFG editor to manage and update your server's `server.cfg` configuration file. This is where you'll find all the essential configuration commands that control your server's settings.

![](https://screensaver01.zap-hosting.com/index.php/s/jqDBDqp55HoKmNB/preview)


<InlineVoucher />
