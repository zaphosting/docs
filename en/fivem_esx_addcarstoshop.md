---
id: fivem_esx_addcarstoshop
title: FiveM ESX Server: Adding cars to the shop
description: Information on how to add cars to the shop on your FiveM server with ESX from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Add Cars to Dealership
---
## 📔 Access to the database

First of all we have to connect to our database. We do this under the tab "Databases"

![image](https://user-images.githubusercontent.com/13604413/172065955-25e74b2b-ce4c-495d-b846-c3fecaec0216.png)

There we click on the blue icon and log in with our data, which we also find on the page.

![image](https://user-images.githubusercontent.com/13604413/172065959-8abe71a9-321f-42ee-a6b5-9294f0fbdbd0.png)

## 📖 Find spawn names

Then we have to find out the spawn name of the car. We can do this by simply trying around or by browsing through the following page:
https://wiki.gtanet.work/index.php?title=Vehicle_Models

## 📑 Add new vehicle

Once we have chosen a car, we can add it to the list.

>> **Important**: By default there are a lot of cars already in the car shop. See if your car is already listed.

First of all we check the car categories. So we know which ones we can add.
We do this in the "vehicle_categories table

![image](https://user-images.githubusercontent.com/13604413/172065895-321b78a5-7952-44e4-a15c-050d80e2aa2a.png)

Here we need the "name" column. We'll remember this one.


![image](https://user-images.githubusercontent.com/13604413/172065901-53ff6c6a-e671-4ee3-9db9-6e26336f4ac3.png)

Once we do that, we go to the "vehicles" table.
And then go to Insert


![image](https://user-images.githubusercontent.com/13604413/172065912-157e9132-78ed-4557-827f-d55c4dcb8aa6.png)

Now we add a new vehicle. A short explanation what stands for what:

**name** The name which is displayed in the shop
**model** Spawn name (make sure it is written in lower case)
**price** Price of the Vehicle
**category** Category we just picked out

Ich habe hier noch ein kleines Beispiel für euch:


![image](https://user-images.githubusercontent.com/13604413/172065930-4de7949f-b59f-4dd5-a1f0-4773fcfd3c41.png)

