---
id: trucksim-dlc
title: "Truck Sim: Activate DLC/Mods"
description: Information on how to activate DLCs and mods on your Trucksim server
sidebar_label: Activate DLC/Mods
---

## Activate Console

To activate DLCs and mods on the ETS2 / ATS server, you must have these DLCs on your account and installed.

In order to activate them on the server, a few files must be generated, for this we activate the devmode and the console via the config files.

First open your documents and open the "Euro Truck Simulator 2" or "American Truck Simulator" folder:

![](https://screensaver01.zap-hosting.com/index.php/s/tD6oWBabHbQT8ox/preview)

Here we find a config.cfg file, which we open in a text editor:

![](https://screensaver01.zap-hosting.com/index.php/s/85YWmD3ZYjwKJCt/preview)

Here we now search for `g_developer` and `g_console`, there we set the 0 to a 1.

## Generate Server Packages

We now start the game and load our profile, we can now open the console via the `^` or `~` key:

![](https://screensaver01.zap-hosting.com/index.php/s/GMm2BJzJ39fZtY2/preview)

Here we now enter `export_server_packages`, the whole thing should be confirmed by the game:

![](https://screensaver01.zap-hosting.com/index.php/s/TpsqKad3wW6ptKD/preview)

Now we can close the game again, in the documents folder there are now two new files, `server_packages.dat` & `server_packages.sii`.

## Upload Server Packages

Now we connect to our server via the [FTP access](gameserver-ftpaccess.md).

We upload the two files into the `Euro Truck Simulator 2` or `American Truck Simulator` folder of our game server:

![](https://screensaver01.zap-hosting.com/index.php/s/ncNABqLSS5ksJx3/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/dsspM5o7GN8YiJN/preview)

Done! After a restart, the DLCs and mods are active.

