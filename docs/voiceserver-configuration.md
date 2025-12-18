---
id: voiceserver-configuration
title: "Voiceserver: Configuration"
description: "Discover how to customize your Teamspeak server settings for a personalized experience and optimized user management → Learn more now"
sidebar_label: Server configuration
services:
  - voiceserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

The Teamspeak server can be configured individually. In the following we will explain how you can configure your server. We will explain how you can customize general settings such as the server name, icon, banner, user permissions, channel and server group permissions. 

<InlineVoucher />

## General

**Webinterface**

In case you want to do the general configuration of your server via the web interface, then you can find the options in the Teamspeak Server Administration under Settings. The settings page will look like this:  

![](https://screensaver01.zap-hosting.com/index.php/s/fLYXn5sx38BBC92/preview)


**Teamspeak Client**

In case you want to do the general configuration of your server directly through the Teamspeak client, then you can find the options by right-clicking on the top channel **TeamSpeak ]I[ Server** and then clicking **Edit Virtual Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/epQ2qzRiex9BmpE/preview)



As the settings in the web interface should be as understandable as possible and not everything can be adjusted there, this guide focuses on the configuration of the Teamspeak server via the Teamspeak client. 



### Name

In the **Server Name** field you can define the name of your Teamspeak server name. This will then be displayed in the server list, on the website and anywhere else. 



### Banner

If you have booked the option own banner, then you can add your own banner in the field **Banner Gfx URL**. It's important that you provide the direct link to the image, otherwise the image won't be recognized. In the field **URL** you can set where the banner should redirect to when someone clicks on the banner. 

:::info
If no own banner has been booked, then the banner will be replaced automatically with the default ZAP banner. 
:::



### Slots (reserved slots)

The slots are set by us and cannot be changed. However, you have the possibility to set reserved slots. This means that they are reserved in case the Teamspeak server is full. Then users with the appropriate permissions can still connect to the Teamspeak server.



### Welcome Message

With this you can add a welcome message of your choice. This message will be displayed when you connect. This can look like this, for example:

![](https://screensaver01.zap-hosting.com/index.php/s/AWFcf4HHJ7jesdc/preview)


### Security level

The required security level determines how long users need to increase the security level of their identity until that identity is considered secure enough. Basically, this reduces the potential for spam and abuse. The higher the security level is set, the longer it takes. Here is an overview of the duration:

- Level 0-23 -  generated within seconds
- Level 23-29 - generated within minutes
- Level 29-34 - generated within hours
- Level 35-39 - generated within days
- Level 40-43 - generated within months
- Level 44+ - generated within years



### Manage users (kick, ban, ban list, complaint list)

You can perform a kick or ban by right-clicking on the user. In case of a ban, the identity and IP address will be stored in the ban list. You can find the list at the **navigation bar -> extras**. There you can remove existing bans.

You can also find the complaint list there. This is a feature of Teamspeak which allows users to complain about other users, the server itself, etc in case there is no admin on the Teamspeak server. 



## Personalize

You can create more channels and server groups on your Teamspeak server to further personalize your Teamspeak server. In the following we will show you how to do this exactly.


### Channel

To create more channels, you have to make a **right click** below the existing channels and then click on **Create channel**. A popup window will open. There you can configure the channel with the following options: Channel Name, Password, Icon, Description, Channel Type and more. 



![](https://screensaver01.zap-hosting.com/index.php/s/Bkx2q69a5ceNiyD/preview)


### Server groups

To create additional server groups, you have to click on **permissions** in the **navigation bar** and then go to **server groups**. There you can find an overview of the existing server groups, their permissions and the assigned user. In the list of server groups you can click on the **Plus symbol** at the bottom and then create a new group. 



![](https://screensaver01.zap-hosting.com/index.php/s/QqcaaRse6kLNwPQ/preview)


## Permissions

By now, it should be clear how to adjust the general settings of the Teamspeak server and how to personalize your Teamspeak server by creating additional channels and server groups. In the following, we will deal with how the permissions can be adjusted. 



### Permissions: User

The permissions of the users depend on the assigned server groups. By default, a user gets the **Normal** group assigned. If you want to add more permissions to the user, you can do that by right-clicking on the user, then clicking on Server Groups and then assigning the desired group. 

![](https://screensaver01.zap-hosting.com/index.php/s/sXG3qFXXJXc6Kjr/preview)

### Permissions: Channel

Permissions can be defined for each channel. For example, you can define which users can **enter, subscribe, describe, view, modify, delete** the channel and **access the File Browser channel**. 


![](https://screensaver01.zap-hosting.com/index.php/s/9sCRd7NgMNHy9Do/preview)



The value of each field depends on the server group. For example, if you create an additional server group named **Member** and only those should have access to the channel, then the value must match the one of the server group. Let's say the server group has the permission value of 50, then the **50** must be set in the individual fields.



### Permissions: Server groups

For server group permissions, there are several categories that can be customized. This includes the following:

- General Options
- Manage groups
- Add, remove users, manage permission keys
- Manage users (move, kick, ban)
- Manage channels
- Basics


![](https://screensaver01.zap-hosting.com/index.php/s/RxcYJCsar7C3KnM/preview)



You can change these permissions to your liking. If you want to make more extensive changes to the permissions, you can do that by going to the options of your Teamspeak client, then go to Application and activate the **Advanced permissions system**.


<InlineVoucher />
