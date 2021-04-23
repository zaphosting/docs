---
id: fivem_esx_addcarstoshop
title: FiveM ESX Server: Adding cars to the shop
description: Information on how to add cars to the shop on your FiveM server with ESX from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Add Cars to Dealership
---
## 📔 Access to the database

First of all we have to connect to our database. We do this under the tab "Databases"

![](https://screensaver01.zap-hosting.com/index.php/s/tTAtzbpnx8kSow7/preview)

There we click on the blue icon and log in with our data, which we also find on the page.

![](https://screensaver01.zap-hosting.com/index.php/s/6PEx3jEGrLctiyS/preview)

## 📖 Find spawn names

Then we have to find out the spawn name of the car. We can do this by simply trying around or by browsing through the following page:
https://wiki.gtanet.work/index.php?title=Vehicle_Models

## 📑 Add new vehicle

Once we have chosen a car, we can add it to the list.

>> **Important**: By default there are a lot of cars already in the car shop. See if your car is already listed.

First of all we check the car categories. So we know which ones we can add.
We do this in the "vehicle_categories table

![](https://screensaver01.zap-hosting.com/index.php/s/nN7Hx67j8Gz7BnD/preview)

Here we need the "name" column. We'll remember this one.
Once we do that, we go to the "vehicles" table.
And then go to Insert

![](https://screensaver01.zap-hosting.com/index.php/s/Y8Kdpn6Y5dWxBne/preview)

Now we add a new vehicle. A short explanation what stands for what:

**name** The name which is displayed in the shop
**model** Spawn name (make sure it is written in lower case)
**price** Price of the Vehicle
**category** Category we just picked out

Ich habe hier noch ein kleines Beispiel für euch:

![](https://screensaver01.zap-hosting.com/index.php/s/keqnrezZKbYcoqH/preview)
