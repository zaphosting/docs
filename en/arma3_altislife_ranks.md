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

![image](https://user-images.githubusercontent.com/26007280/189706581-5fffa0f8-d0c1-45ed-b4d6-76f19399e735.png)

The login to the database can be reached via this blue icon, on the left side you will also find the login data (username and password) for your database:

![image](https://user-images.githubusercontent.com/26007280/189706605-529e4b10-c71b-4999-a798-c94729d1e911.png)


After clicking on this button you are now in phpMyAdmin, the administration interface of your database.
There you choose the name of your database on the left side:

![image](https://user-images.githubusercontent.com/26007280/189706633-4d2a70e4-fbc5-4d10-aaf0-969f8cb8db9b.png)

Afterwards you select the table **players** with a left click in which you can assign the ranks:


![image](https://user-images.githubusercontent.com/26007280/189706658-c7a1ab39-3a59-4270-a6b9-dedd2997c838.png)

There you search for the name of the player you want to assign a rank to and click on **Edit**:

![image](https://user-images.githubusercontent.com/26007280/189706681-21f1a902-9515-4570-9ab2-e5a62c69dfa7.png)


## Assigning ranks for Cop's and Medic's


The fields for the Cop- as well as Medic-Level you will find right at the top of the list:

![image](https://user-images.githubusercontent.com/26007280/189706714-71794d31-ea34-4a30-a351-9d403c36759b.png)

There you can now easily select the rank level via the drop-down menu, available are levels from 1 to 7 for cops and from 1 to 5 for medics.
The higher the level, the more permissions the Cop or Medic has in the game, this has among other things an influence on the available weapons and vehicles.

![image](https://user-images.githubusercontent.com/26007280/189706736-33c5a79c-6de3-4631-ab45-0a3ef24c7aa4.png)


## Assign ranks for administrators (admin level)

You set the admin level as described above, only the entry for it is further down:

![image](https://user-images.githubusercontent.com/26007280/189706765-e7d299a9-007c-44ef-9289-cfc54f83b474.png)

There you can also choose between 5 different levels by dropdown. The higher the level the more rights the administrator has in the game.


To save the changes, simply click on the **GO** button at the bottom right:

![image](https://user-images.githubusercontent.com/26007280/189706796-be3163db-dd44-4da6-8660-b7ea0237ea70.png)

The ranks have now been saved, so that they become active for the player who has to reconnect to the server once, a restart
of the server is not necessary.
