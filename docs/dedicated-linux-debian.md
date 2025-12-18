---
id: dedicated-linux-debian
title: "Dedicated Server: Installation of Debian"
description: "Learn how to install and configure Debian OS on your dedicated server for optimal performance and reliability → Learn more now"
sidebar_label: Install Debian
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

The following will explain to you step by step how to install and configure the Debian operating system on your dedicated server. Follow these instructions carefully to ensure that you set up the operating system successfully and utilize it optimally.

:::info

The structure of the guide is based on the use of the Debian 10 operating system. Installations from previous or newer versions may differ slightly in terms of the process.

:::



## Preparation

For the installation and configuration of an operating system, it is initially important to mount the corresponding ISO of the operating system. There are several possible ways to mount it:

1. Mounting via the initial setup
2. Mounting via iLO (Virtual Media)
3. Mounting via iLO (Remote Console)

If you are not familiar with mounting an ISO file yet, it's best to refer to our [Initial setup](dedicated-setup.md) or [Own ISO](dedicated-iso.md) guide.



## Installation

When the ISO is successfully loaded, the server is in the setup process.

![](https://screensaver01.zap-hosting.com/index.php/s/QdRyxyaSLWPGHwN/preview)

In this example, we will go through the installation process using the "classic" install.

![](https://screensaver01.zap-hosting.com/index.php/s/YEy9jKbPcmCwD22/preview)

Select your desired language in which the installation wizard will be displayed. Keep in mind that this language will later affect the installed system in the end.

![](https://screensaver01.zap-hosting.com/index.php/s/qprfbz2SPf5MZ4j/preview)

Our desired location is not in the first selection page, so we go to the next page with "Other".

![](https://screensaver01.zap-hosting.com/index.php/s/frH9t9arerKxecZ/preview)

In our example we select the "Europe" option.

![](https://screensaver01.zap-hosting.com/index.php/s/5DyPjbG3S2Mr3zC/preview)

Depending on the desired time zone, we choose the German time zone in this example.

![](https://screensaver01.zap-hosting.com/index.php/s/F3SCKdb2dCrqndM/preview)

We choose United States as locale.

![](https://screensaver01.zap-hosting.com/index.php/s/zYP8rRJN9G4ftPx/preview)

In our case we choose the German keyboard layout which is the QWERTZ layout. If you're from America the default layout would be QWERTY

:::info
Your server is now preparing some components which are necessary for the installation, this can take a few minutes.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/XmLgEHDszmHG23r/preview)

Your server configures its network interface automatically by using DHCP. Select `eno1` this is the default network adapter of your ZAP Dedicated Server. ![](https://screensaver01.zap-hosting.com/index.php/s/Q8RRoMwfeTMPpxE/preview)

The hostname can be modified if you'd like to, but does not need to be changed.

![](https://screensaver01.zap-hosting.com/index.php/s/onWnt4GArJZcJgX/preview)

The domain name does not have to be changed either.

![](https://screensaver01.zap-hosting.com/index.php/s/wRLRrxrDKLf5d4q/preview)

Here you have to set the password for your "root" account. Make a note of the chosen password.

![](https://screensaver01.zap-hosting.com/index.php/s/SQeqqKDZx3PjWTs/preview)

To confirm the password you have to enter it again.

:::info
The installation wizard asks you to create a second user account
:::

![](https://screensaver01.zap-hosting.com/index.php/s/CLxectPXbqzteqf/preview)

Now enter the name of the owner for a normal user account. You can of course freely choose what you'd like to enter here.

:::info
You can of course use the "root" account in the end
:::

![](https://screensaver01.zap-hosting.com/index.php/s/GixGJyTfAzENSmc/preview)

Now enter the username of the account. Also choose a password of your choice and confirm it again. Your server will now prepare the next installation steps.

![](https://screensaver01.zap-hosting.com/index.php/s/NM8fdY9J8qwiNGJ/preview)

You have now the possibility to create partitions or alternatively to use the whole SSD as 1 partition. If you don't want to change anything on the partition just choose "Guided - Use entire disk".

***

![](https://screensaver01.zap-hosting.com/index.php/s/J37QtNNMXA8m49Z/preview)

Select the SSD which is installed in your server. ![](https://screensaver01.zap-hosting.com/index.php/s/foqPgy3oPbzDAZf/preview)

Basically it is fine if the complete structure is stored on one partition. ![](https://screensaver01.zap-hosting.com/index.php/s/ApME7eaxLkWmNew/preview)

We confirm the configuration with "Finish partitioning and write changes to disk".

:::info
If there are old partitions on your SSD we confirm the overwrite with "Yes".
:::

Your server now performs the partitioning and prepares the installation of the system.

![](https://screensaver01.zap-hosting.com/index.php/s/JoJ6MppTzm79R3R/preview)

If you want to include other installation media, for example for certain packages, this could be done now. Normally, however, you can download all packages conveniently afterwards via the package manager (apt). 

![](https://screensaver01.zap-hosting.com/index.php/s/c6Mq4kP7mYYWyLL/preview)

Our dedicated servers are located in Germany, so it's recommended to choose the German mirror location to achieve the best possible download speed rates.

![](https://screensaver01.zap-hosting.com/index.php/s/8nReYnYopxJNBmg/preview)

Basically we recommend to use the default Debian repository.

![](https://screensaver01.zap-hosting.com/index.php/s/iqZSLMBqbx8ZDdZ/preview)

If you'd like to use a HTTP proxy, you could enter the data. (this is not required)

![](https://screensaver01.zap-hosting.com/index.php/s/Ty7BzmzXY78x38q/preview)

The system wants to collect anonymized statistics, this can be refused or confirmed.

![](https://screensaver01.zap-hosting.com/index.php/s/gwxF4k5jf3o3xM4/preview)

Now select the packages you want to install:

* Debian desktop environment
Would create a graphical user interface on your server, but in this example we only use the shell level of the server.

* SSH server
Is needed, for example, to connect to PuTTY.

* Standard system utilities
Is needed to provide a number of basic packages.

The selection of the different packages is done by `TAB` and `arrow keys`. Packages are selected or deselected with the space bar.
When you are satisfied with your selection press `TAB` until you reach Continue and confirm with Enter.

![](https://screensaver01.zap-hosting.com/index.php/s/mwbNHxBCHxXPQiw/preview)

Confirm that this operating system is the only one on the current server with `Yes`.

![](https://screensaver01.zap-hosting.com/index.php/s/YWiBDBMNsczMHcm/preview)

As storage location we choose the default location on our SSD.

:::info
🎉 The installation of your Debian system is now finished.
:::

Open "Virtual Media" in your iLO and press "Eject Media" to remove the ISO File from the system.

![](https://screensaver01.zap-hosting.com/index.php/s/WMTJ88CFBsQ2miz/preview)

When this is done successfully, we select Continue, the server will now perform a reboot.

![](https://screensaver01.zap-hosting.com/index.php/s/pYysYayb6d2rQtb/preview)



## Configuration

### SSH Login

Once the reboot of your server is done and the installation was successful, you will now be prompted to login.

![](https://screensaver01.zap-hosting.com/index.php/s/7PxyTxE56GgcAbE/preview)

Of course you also want to be able to manage your server through SSH, i.e., PuTTY, for example, so we still need to enable the login for that:

![](https://screensaver01.zap-hosting.com/index.php/s/Y2YiFyX9HkjoSco/preview)

Open with nano the configuration file of your SSH service `nano /etc/ssh/sshd_config`.

![](https://screensaver01.zap-hosting.com/index.php/s/HyJaCWFzZ7R3kjR/preview)

Search for `#PermitRootLogin no` and change it to `PermitRootLogin yes`.

Now press `CTRL + X` and confirm your changes with `Y`.

After that you have to restart the SSH service by typing `service ssh restart`.

Your SSH login is now active and you can connect via PuTTY, for example.
Enter the IP address of your server, which you see in your zap dashboard and use the previously defined credentials.

![](https://screensaver01.zap-hosting.com/index.php/s/qBqF2fPmyWrtH6Q/preview)

:::tip
If you have any further questions or problems, our support is happy to assist you!
:::





## Conclusion

Congratulations, you have successfully installed the Debian operating system on your dedicated server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂


