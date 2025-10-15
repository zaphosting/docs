---
id: arma3-altislife-ranks
title: "Arma 3: Adding ranks to an Altis Life server"
description: "Learn how to assign and manage player ranks like Cop, Medic, and Admin in Arma 3 to enhance gameplay and server roles → Learn more now"
sidebar_label: Altis Life Ranks
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

In Arma 3 there are different ranks which can be assigned to a player. These include Cop, Medic and the different Admin ranks.
Depending on the server, there can be other ranks if for example a new faction or profession is added.
In the following you will learn how to assign the ranks for Cop's, Medic's and Administrators in the game, always using the database within the table **players**.

:::info
IMPORTANT: To find the name of the player in the database you have to connect to the server at least once!
:::

<InlineVoucher />

## Opening the database

First you have to navigate to your database which you can reach via the menu on the left under **Tools** > **Databases**:

![](https://screensaver01.zap-hosting.com/index.php/s/Y8mZZ7JCNqr9zZM/preview)

The login to the database can be reached via this blue icon, on the left side you will also find the login data (username and password) for your database:

![](https://screensaver01.zap-hosting.com/index.php/s/3tta9MQ5XcdZk98/preview)


After clicking on this button you are now in phpMyAdmin, the administration interface of your database.
There you choose the name of your database on the left side:

![](https://screensaver01.zap-hosting.com/index.php/s/YfTpyoXmArbtBwb/preview)

Afterwards you select the table **players** with a left click in which you can assign the ranks:


![](https://screensaver01.zap-hosting.com/index.php/s/A643Ds2LFjFCzba/preview)

There you search for the name of the player you want to assign a rank to and click on **Edit**:

![](https://screensaver01.zap-hosting.com/index.php/s/KrnpZMyeiL8YXAm/preview)


## Assigning ranks for Cop's and Medic's


The fields for the Cop- as well as Medic-Level you will find right at the top of the list:

![](https://screensaver01.zap-hosting.com/index.php/s/z5KoxwqHf7XMcFd/preview)

There you can now easily select the rank level via the drop-down menu, available are levels from 1 to 7 for cops and from 1 to 5 for medics.
The higher the level, the more permissions the Cop or Medic has in the game, this has among other things an influence on the available weapons and vehicles.

![](https://screensaver01.zap-hosting.com/index.php/s/bKr4MHNy5LYnWYr/preview)


## Assign ranks for administrators (admin level)

You set the admin level as described above, only the entry for it is further down:

![](https://screensaver01.zap-hosting.com/index.php/s/fc5G93bWkdW7nAj/preview)

There you can also choose between 5 different levels by dropdown. The higher the level the more rights the administrator has in the game.


To save the changes, simply click on the **GO** button at the bottom right:

![](https://screensaver01.zap-hosting.com/index.php/s/y85Zwq3J8zM9sFi/preview)

The ranks have now been saved, so that they become active for the player who has to reconnect to the server once, a restart
of the server is not necessary.

<InlineVoucher />
