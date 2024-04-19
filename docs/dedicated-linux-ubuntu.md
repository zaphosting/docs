---
id: dedicated-linux-ubuntu
title: "Dedicated Server: Installation of Ubuntu"
description: Information about installing the Ubuntu operating system on your dedicated server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Install Ubuntu
---



## Introduction

The following will explain to you step by step how to install and configure the Ubuntu operating system on your dedicated server. Follow these instructions carefully to ensure that you set up the operating system successfully and utilize it optimally.

:::info

The structure of the guide is based on the use of the Ubunut 20.04 operating system. Installations from previous or newer versions may differ slightly in terms of the process.

:::

## Preparation

For the installation and configuration of an operating system, it is initially important to mount the corresponding ISO of the operating system. There are several possible ways to mount it:

1. Mounting via the initial setup
2. Mounting via iLO (Virtual Media)
3. Mounting via iLO (Remote Console)

If you are not familiar with mounting an ISO file yet, it's best to refer to our [Initial Setup](dedicated-setup.md) or [Custom ISO](dedicated-iso.md) guide.



## Installation

When the ISO is successfully loaded, the server is in the setup process.

![](https://screensaver01.zap-hosting.com/index.php/s/yrHMNzstM23XZH6/preview)

Choose your desired language and proceed by pressing enter.

![](https://screensaver01.zap-hosting.com/index.php/s/x9kYGEWS5fy7Wjp/preview)

Choose your desired keyboard layout and proceed by ticking "Done".

![](https://screensaver01.zap-hosting.com/index.php/s/6mr5kAKJQ39iJt5/preview)

Your server configures its network interface automatically by using DHCP. The adapter `eno1` is the default network adapter of your ZAP Dedicated Server. We proceed by ticking "Done"

***

![](https://screensaver01.zap-hosting.com/index.php/s/tz97Ee8ZQkxAGGb/preview)

If you'd like to use a proxy, you could configure it here. A proxy is not required.

![](https://screensaver01.zap-hosting.com/index.php/s/xNknNyWAbd5DnsZ/preview)

Our dedicated servers are located in Germany, so it's recommended to choose the German mirror location to achieve the best possible download speed rates.

![](https://screensaver01.zap-hosting.com/index.php/s/2dJ9oeMGjpWn6cZ/preview)

In this step you can create different partitions for your system, if you'd like to use just the whole SSD as one partition just pick "Use an entire disk".

![](https://screensaver01.zap-hosting.com/index.php/s/WXfzt57Rtm2SQLD/preview)

The setup automatically creates the volumes and you can proceed by choosing "Done".

![](https://screensaver01.zap-hosting.com/index.php/s/L3YcGNbYWpMmaDj/preview)

The setup, of course, deletes all persisting data on the system, we accept that by ticking "Continue" and pressing enter.

![](https://screensaver01.zap-hosting.com/index.php/s/mqrjmF2ZmA2Qj9z/preview)

Please configure your user account to your like, you can also use the root account in the end by changing the password.
You can navigate through the options with tab or your arrow keys. When you're done proceed by ticking "Done".

![](https://screensaver01.zap-hosting.com/index.php/s/Xz3zzMdZ6C523ip/preview)

We would recommend to enable the installation of the OpenSSH-Server if you'd like to connect to your server through for example, PuTTY.

![](https://screensaver01.zap-hosting.com/index.php/s/wcGiSwX935jXeex/preview)

Ubuntu offers a few default snaps, if you'd like to use some of them, just tick the ones your like.

![](https://screensaver01.zap-hosting.com/index.php/s/SzrxCtJTx2S8Nef/preview)

Please eject now the ISO File in your iLO to prevent the server from loading the setup again.

***

![](https://screensaver01.zap-hosting.com/index.php/s/x3BRLSepSDFnYGA/preview)

choose "Reboot now" and verify by pressing enter that you have removed the ISO file.



## Configuration



### Changing the password of the root user

You can easily change the password of the root user:

Write `sudo su`, and enter your password; then write `sudo passwd` to change the password. Now enter the new desired password for the root user. That's it - You can now login with your user account `root`

:::tip
If you have any further questions or problems, our support is happy to assist you!
:::
