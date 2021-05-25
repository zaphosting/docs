---
id: fivem_changespawnpoint
title: FiveM server settings: Set Spawnpoint
description: Information on how to set/change spawnpoints on a FiveM server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Change Spawnpoint
---

## 📔 Find Map

First of all we have to find out which map is running on our FiveM server.

For this we proceed as follows:

**1** Go to your server's dashboard

## 📑 Coordinate resource

![](https://screensaver01.zap-hosting.com/index.php/s/6NyyJx8adoN227F/preview)

Now we need a script that can show us the coordinates.

Like for example : https://github.com/qalle-fivem/qalle_coords

We will now install this.

You can find out how to do this here: https://docs.zap-hosting.com/docs/de/fivem_installresources/

## 🔧 Open map

Now we open our map which we have found out earlier.

The default maps are located in `server-data/resources/[gamemodes]/[maps]`

We do this e.g. via Filezilla

![](https://screensaver01.zap-hosting.com/index.php/s/7fPmWTPyjgnz4yC/preview)

There we open the Map.lua

![](https://screensaver01.zap-hosting.com/index.php/s/bMbfGydeN5tyTfp/preview)

Now we get a file with many coordinate entries

![](https://screensaver01.zap-hosting.com/index.php/s/MpPeciA3yaAATWR/preview)

From this we now delete **all** entries except two


![](https://screensaver01.zap-hosting.com/index.php/s/ySrZ4MkgwjskrCt/preview)


## 📖 Get coordinates

Now it is time to join our server

Once we have done this we open the coordinates by typing */coords*

Now we have the coordinates.

Now we look for a suitable place and then replace the coordinates

![](https://screensaver01.zap-hosting.com/index.php/s/2x8EfJFXWAgfJS7/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/BPPzEmq7aGJ8bPf/preview)

Once this is done we upload the file again.

## 🕹 Install Framework
Now, if not already done, we still need a framework on the server.

We can do this under the **Resources** tab

In this case **ESX** is now installed.


![](https://screensaver01.zap-hosting.com/index.php/s/gQ4ipRrcNbHaRDN/preview)

**Alternatively, vRP can also be installed**

Now new players spawn at the specified position

## 🌏 Troubleshooting
If you are not spawning at the position you want, please follow these steps:

Check if you used the right map, often the wrong map is used

Processes really only the map that is used no other, otherwise errors may occur

Empty the cache of your server and restart the server

If you follow these steps it should work
