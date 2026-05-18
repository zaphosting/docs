---
id: dedicated-linux-steamcmd
title: "SteamCMD Linux Setup"
description: "Discover how to set up SteamCMD on Linux servers to install dedicated game servers efficiently → Learn more now"
sidebar_label: Setup SteamCMD
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

SteamCMD is an essential tool that is necessary for installing dedicated servers for a wide variety of games including Palworld, Enshrouded and more. In this guide, we will explore the first-time setup process for installing SteamCMD to your Linux server. We will be using Ubuntu in the examples, but the process should be very similar for other distributions.



## Preparation

To begin with, connect to your VPS/Dedicated Server via SSH. Use our [SSH Initial Access](vserver-linux-ssh.md) guide if you need help doing this.

## Installing SteamCMD

Once you have accessed your server, you will need to setup **SteamCMD** in order to be able to download the necessary dedicated server files. SteamCMD is the **command-line (CLI)** version of the Steam client and is the tool which allows you to easily download a range of Steam workshop and dedicated server files.

As usual with Linux it is best to first update the system, by running the following based on the distro you use:

```
// Debian
sudo apt-get update

// Ubuntu
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper up

// Fedora
sudo dnf upgrade --refresh
```

Now you will need to install a few packages. These are broken down as the following:

- The **software-properties-common** package makes management of your distro and independent software sources easy.
- SteamCMD is a 32-bit tool, therefore the **i386** architecture must be added, so the appropriate software is installed to your system to support this.
- Since SteamCMD is proprietary, this also means that you either need the **multiverse** or **non-free** package depending on your Linux Distro, as these are usually not included in the default repository.

```
sudo apt install software-properties-common
sudo dpkg --add-architecture i386

// Ubuntu
sudo add-apt-repository multiverse

// Debian & Other Non-Debian Distros
sudo apt-add-repository non-free
```

Now run the update command to ensure that your package changes are read and thus installed to your system:

```
sudo apt update
```

Finally, you can install SteamCMD by running the following. A license agreement prompt may appear, which you can simply accept to continue.

```
sudo apt install steamcmd
```

:::tip
You can verify that the SteamCMD installation was successful, by simply running `steamcmd`. Once loaded, the command prompt should show `Steam>`. You can run `quit` to exit this afterwards.
:::

With everything now prepared and installed, you can proceed with the next step, which involves installing the VPS/Dedicated Server through the use of SteamCMD.

## Creating User

We highly recommend creating a separate user to use SteamCMD on. Running on the root user, as with most things, is not recommended for various reasons.

Use the following command to create a user named `steam` with an optional password of your choice.

```
sudo useradd -m steam
sudo passwd steam # Optional Password
```

Once the user is created, you will need to adjust the `.bashrc` file to provide access to the `/usr/games` path where SteamCMD is located. This is done by adding an extra path environment variable.

Open the file using nano editor by running:

```
sudo nano /home/steam/.bashrc
```

Now scroll down to the end of the file using your arrow keys and add the following path environment variable:

```
export PATH="/usr/games/:$PATH"
```

Save the file and quit nano by using `CTRL + X`, followed by `Y` to confirm and lastly `ENTER`.

## Conclusion

You have now successfully setup the core SteamCMD functionality for your Linux server. You can now proceed with installing Steam content through the `steam` user.

We recommend checking out the other guides in this section, which cover installing specific games through the use of SteamCMD, that you have now setup.


