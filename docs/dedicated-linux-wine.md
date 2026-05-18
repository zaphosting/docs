---
id: dedicated-linux-wine
title: "Wine Compatibility Layer Linux Setup"
description: "Discover how to set up Wine on Linux to run Windows game servers smoothly on Ubuntu and similar systems → Learn more now"
sidebar_label: Setup Wine Compatibility Layer
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Wine is an open-source compatibility layer for Linux which allows software that is originally developed for Windows to run on Linux systems. This is especially important for dedicated game servers that only offer Windows server files and may be required as a prerequisite for our other Linux dedicated game server guides. In this guide, we will explore the first-time setup process for installing Wine to your Linux server. We will be using Ubuntu in the examples, but the process should be very similar for other distributions.



## Preparation

To begin with, connect to your VPS/Dedicated Server via SSH. Use our [SSH Initial Access](vserver-linux-ssh.md) guide if you need help doing this.

## Installing Wine

Begin the installation process by ensuring that the `/etc/apt/keyrings/` directory exists, as this is necessary for Wine.
```
sudo mkdir -pm755 /etc/apt/keyrings
```

Next, download and store the Wine GPG key into this directory which verifies that the package is authentic.
```
sudo wget -O /etc/apt/keyrings/winehq-archive.key https://dl.winehq.org/wine-builds/winehq.key
```

You will also have to save the sources list for WineHQ which can be done with the following pre-written command:
```
sudo wget -NP /etc/apt/sources.list.d/ https://dl.winehq.org/wine-builds/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/dists/$(lsb_release -cs)/winehq-$(lsb_release -cs).sources
```

Run the update command to ensure that your package changes are read and installed.
```
sudo apt update
```

Now you can proceed with the main step of downloading the latest version of Wine. This could take some time to complete.
```
sudo apt install --install-recommends winehq-staging
```

Finally, you need to install a few extra packages to ensure that Wine will work well with dedicated game server by running the following command.
```
sudo apt install cabextract winbind screen xvfb
```

## Conclusion

You have now successfully setup the Wine comaptibility layer, which will allow you to run Windows programs on your Linux server. With this important prerequisite installed, you can now proceed to install dedicated game servers even if they are built for Windows.

We recommend checking out the other guides in this section which cover installing specific games through the use of SteamCMD and potentially Wine for Windows-based dedicated server files.


