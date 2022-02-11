---
id: dedicated_freebsd
title: Install FreeBSD
sidebar_label: Install FreebSD
---

> In this example, the installation of FreeBSD 13.0 is performed

## 📋 Preparations
In your ZAP interface, select the desired ISO of FreeBSD and let the server boot with the ISO until it is in the setup process.

> Navigation in the setup process is done with TAB, Space and Enter.
> TAB = switch between items, Space = highlight, Enter = confirm

***

## ⌚ The setup
When the ISO is successfully loaded, the server is in the setup process.

![](https://screensaver01.zap-hosting.com/index.php/s/NpXzwWEeHd9nLN8/preview)

We start the installation by pressing `Enter`

***

![](https://screensaver01.zap-hosting.com/index.php/s/YggRe58jXHszJHy/preview)

Choose the keymap of your like and proceed with continue

***

![](https://screensaver01.zap-hosting.com/index.php/s/wR4iq9GdzsDfgoZ/preview)

Choose your desired hostname

***

![](https://screensaver01.zap-hosting.com/index.php/s/qjHnRJ2eSLsWdf9/preview)

You could choose optional systempackages which should be installed, after you're done proceed with OK
***

![](https://screensaver01.zap-hosting.com/index.php/s/zKzZMgPxRP9gTpB/preview)

In this step you could create partitions, in this example we're using a RAID0.
More informations about RAIDs are explained in our special guide.

***

![](https://screensaver01.zap-hosting.com/index.php/s/rG2f2bopCqPEAwP/preview)

You can proceed with `Enter` if there are no changes

***

![](https://screensaver01.zap-hosting.com/index.php/s/yxpQCWn6zCZK2HE/preview)

Since we've got a RAID0 we choose no redundandy

***

![](https://screensaver01.zap-hosting.com/index.php/s/Wd4ntdirBoMjeeg/preview)

Mark your volume, with `Space` and process by pressing `Enter`

***

![](https://screensaver01.zap-hosting.com/index.php/s/GdTn5ztzQk8Q5nA/preview)

We verify that all data will be erased

> Your server is now processing the setup, this could take several minutes

### 🔧 Configuration

![](https://screensaver01.zap-hosting.com/index.php/s/yrY4223owaDFaKs/preview)

Please fillin your password and proceed by pressing `Enter`

***

![](https://screensaver01.zap-hosting.com/index.php/s/WqEAD3HDrZr4wC5/preview)

Choose "No" at IPv4/IPv6 Configuration, this must be done in the end

***

![](https://screensaver01.zap-hosting.com/index.php/s/t8Ptgqqq4Fj3Cx3/preview)

Choose "Yes" and select your timezone and the date/time configurations

***

![](https://screensaver01.zap-hosting.com/index.php/s/smtKkCiHwzobZoe/preview)

You could change the systems which will be automatically started on a server start

***

![](https://screensaver01.zap-hosting.com/index.php/s/WRmMrR7m2gtmXNc/preview)

If necessary, you can modify the security settings

***

![](https://screensaver01.zap-hosting.com/index.php/s/mJzxzSQqxtQK72H/preview)

The setup is now done, choose "Exit" and confirm by pressing `Enter`

> Remove the ISO-File in your iLO and choose "Reboot"

### 💻 Network

To enable the network device, please login to your system using the password

Open loader.conf with a editor of your decision, as example `ee /boot/loader.conf` and add the following line:

```if_oce_load="YES"```

You can leave the editor by pressing `CTRL+C` and writing exit, after that please reboot your dedicated server

***

After the reboot, we need to modify the rc.conf as example by `ee /etc/rc.conf`, add the following lines:

```
ifconfig_oce0="inet YourIP netmask 255.255.255.0"
defaultrouter="YourGateway"
```
YourIP is the IP address of your dedicated server, this is showed in your ZAP interface.
At "defaultrouter" its required to fillin the default gateway, this is always your server ip with a .1 in the end, as example:

Server IP: 123.123.123.123

Subnetmask: 255.255.255.0

Gateway: 123.123.123.1

This should in example look like:

![](https://screensaver01.zap-hosting.com/index.php/s/pgGdbSerTe5236B/preview)

Leave the editor by pressing `CTRL+C`and writing "exit" after that execute the command `/etc/netstart` once

> Your server should have an active internet connection now
