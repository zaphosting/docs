---
id: dedicated_freebsd
title: Install FreeBSD
description: Information about installing the FreeBSD operating system on your dedicated server from ZAP-Hosting - ZAP-Hosting.com Documentation
sidebar_label: Install FreebSD
---

> In this example, the installation of FreeBSD 13.0 is performed

## Preparations
In your ZAP interface, select the desired ISO of FreeBSD and let the server boot with the ISO until it is in the setup process.

> Navigation in the setup process is done with TAB, Space and Enter.
> TAB = switch between items, Space = highlight, Enter = confirm

***

## The setup
When the ISO is successfully loaded, the server is in the setup process.

![](https://screensaver01.zap-hosting.com/index.php/s/wSa8eGnrtJDLHB5/preview)

We start the installation by pressing `Enter`

***

![](https://screensaver01.zap-hosting.com/index.php/s/CK4xnGEqBe5Kd4y/preview)

Choose the keymap of your like and proceed with continue

***

![](https://screensaver01.zap-hosting.com/index.php/s/BSrWrN9TnqEEmmb/preview)

Choose your desired hostname

***

![](https://screensaver01.zap-hosting.com/index.php/s/zqXPS6fHdkoMPH2/preview)

You could choose optional systempackages which should be installed, after you're done proceed with OK
***

![](https://screensaver01.zap-hosting.com/index.php/s/zTSBQRGRFLHDxDo/preview)

In this step you could create partitions, in this example we're using a RAID0.
More informations about RAIDs are explained in our special guide.

***

![](https://screensaver01.zap-hosting.com/index.php/s/DTk5zgjbpCWwbmp/preview)

You can proceed with `Enter` if there are no changes

***

![](https://screensaver01.zap-hosting.com/index.php/s/MR3eJKMpdExXnsJ/preview)

Since we've got a RAID0 we choose no redundandy

***

![](https://screensaver01.zap-hosting.com/index.php/s/Qf5JZMKs5HzDXnT/preview)

Mark your volume, with `Space` and process by pressing `Enter`

***

![](https://screensaver01.zap-hosting.com/index.php/s/4d93FtfDmSEtifY/preview)

We verify that all data will be erased

> Your server is now processing the setup, this could take several minutes

### Configuration

![](https://screensaver01.zap-hosting.com/index.php/s/NmR5PcTPe3Kdc4i/preview)

Please fillin your password and proceed by pressing `Enter`

***

![](https://screensaver01.zap-hosting.com/index.php/s/f9aJF57b2w3g9qY/preview)

Choose "No" at IPv4/IPv6 Configuration, this must be done in the end

***

![](https://screensaver01.zap-hosting.com/index.php/s/88bxbHsRjwCoYJQ/preview)

Choose "Yes" and select your timezone and the date/time configurations

***

![](https://screensaver01.zap-hosting.com/index.php/s/MCtpoQkLdc8Wd7Y/preview)

You could change the systems which will be automatically started on a server start

***

![](https://screensaver01.zap-hosting.com/index.php/s/wPbL3HJGYBTLdyD/preview)

If necessary, you can modify the security settings

***

![](https://screensaver01.zap-hosting.com/index.php/s/BXEs3sFYCbFE4Q4/preview)

The setup is now done, choose "Exit" and confirm by pressing `Enter`

> Remove the ISO-File in your iLO and choose "Reboot"

### Network

To enable the network device, please login to your system using the password

Open loader.conf with a editor of your decision, as example `ee /boot/loader.conf` and add the following line:

```if_oce_load="YES"```

You can leave the editor by pressing `CTRL+C` and writing exit, after that please reboot your dedicated server

***

After the reboot, we need to modify the rc.conf as example by `ee /etc/rc.conf`, add the following lines:

```
ifconfig_oce0="DHCP"
```

> ⚠️ Caution: The name of the network adapter shown in the example **oce0** may be different. Make sure that you specify the correct network adapter. This can be verified with the ifconfig command. The information is then automatically obtained via the DHCP server. 

This should in example look like:

![](https://screensaver01.zap-hosting.com/index.php/s/mBCZpbG37N9Dj5e/preview)

Leave the editor by pressing `CTRL+C`and writing "exit" after that execute the command `/etc/netstart` once

> Your server should have an active internet connection now
