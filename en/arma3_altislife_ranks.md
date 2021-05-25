---
id: arma3_altislife_ranks
title: Arma 3: Altis Life - Adding ranks to an Altis Life server
description: Information on how to add ranks to your Altis Life server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Altis Life Ranks
---


## Ranks in ArmA 3: Altis Life

In ArmA 3 there are different ranks which can be assigned to a player. These include Cop, Medic and the different Admin ranks.
Depending on the server, there can be other ranks if for example a new faction or profession is added.
In the following you will learn how to assign the ranks for Cop's, Medic's and Administrators in the game, always using the database within the table **players**.

> IMPORTANT: To find the name of the player in the database you have to connect to the server at least once!


## Opening the database

First you have to navigate to your database which you can reach via the menu on the left under **Tools** > **Databases**:

![](https://screensaver01.zap-hosting.com/index.php/s/enKQjWYoHGAaZdq/preview)

The login to the database can be reached via this blue icon, on the left side you will also find the login data (username and password) for your database:

![](https://screensaver01.zap-hosting.com/index.php/s/wN5s6MaEoT6MJXR/preview)


After clicking on this button you are now in phpMyAdmin, the administration interface of your database.
There you choose the name of your database on the left side:

![](https://screensaver01.zap-hosting.com/index.php/s/Ceme4ybJEaNb4TX/preview)

Afterwards you select the table **players** with a left click in which you can assign the ranks:


![](https://screensaver01.zap-hosting.com/index.php/s/bMFHiz9rCyqSAm3/preview)

There you search for the name of the player you want to assign a rank to and click on **Edit**:

![](https://screensaver01.zap-hosting.com/index.php/s/KbxCtA96EC5FBbp/preview)


## Assigning ranks for Cop's and Medic's


The fields for the Cop- as well as Medic-Level you will find right at the top of the list:

![](https://screensaver01.zap-hosting.com/index.php/s/4R2j6ARq78P9pFi/preview)

There you can now easily select the rank level via the drop-down menu, available are levels from 1 to 7 for cops and from 1 to 5 for medics.
The higher the level, the more permissions the Cop or Medic has in the game, this has among other things an influence on the available weapons and vehicles.

![](https://screensaver01.zap-hosting.com/index.php/s/XNqwSGEfeEc8MYZ/preview)


## Assign ranks for administrators (admin level)

You set the admin level as described above, only the entry for it is further down:

![](https://screensaver01.zap-hosting.com/index.php/s/qNyn8o5oswq5woP/preview)

There you can also choose between 5 different levels by dropdown. The higher the level the more rights the administrator has in the game.


To save the changes, simply click on the **GO** button at the bottom right:

![](https://screensaver01.zap-hosting.com/index.php/s/m5X2gAdxXka5Cge/preview)

The ranks have now been saved, so that they become active for the player who has to reconnect to the server once, a restart
of the server is not necessary.
