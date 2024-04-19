---
id: dedicated-iso
title: "Dedicated Server: Own ISO"
description: Information on how to install your own ISO file on your dedicated server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Own ISO
---
:::info
Mounting your own ISO File is at your own risk.
:::

## Which options are there?
There are two ways to mount your own iso file. It's always necessary to restart the server, to load the file.
There are in general no restrictions on mounting a file, it's important that the ISO file is bootable.

### Mounting through the iLO
Open your iLO Management Interface and open "Virtual" Media
![](https://screensaver01.zap-hosting.com/index.php/s/myWMSi3GgyLBHXR/preview)

* Fill in your URL which points to the iso file, you'd like to use. Be sure that the link ends with .iso
* Now press "Insert Media"
* Click on "Server Reset" which will cause your system to perform a reboot.

Your ISO File will now be loaded.

### Mounting through a remote console

**HTML5 Console**
You can easily mount the file itself, in the remote console:
![](https://screensaver01.zap-hosting.com/index.php/s/x4EDgLZ3e3B6MMC/preview)

* Press on the disc symbol
* Choose "CD/DVD"
* Choose between "Scripted media URL" or "Local .iso File"

The difference between "Scripted media URL" and "Local .iso File" is that you can mount a iso file which is uploaded to a server/webspace or directly choose with "Local *.iso File" a file from your computer, without uploading it somewhere.

When you chose your ISO File, it's required to reboot the server.

***

**Java Console**
As on the HTML5 console, the ISO File is also directly mounted in the application itself.
![](https://screensaver01.zap-hosting.com/index.php/s/2CdR5d5AcsG7YdH/preview)

* Open "Virtual Drives"

The difference between "Image File CD/DVD-ROM" and "URL CD/DVD-ROM" is that you can mount an ISO File which is uploaded to a server/webspace or directly choose with "Image File CD/DVD-ROM" a file from your computer, without uploading it somewhere.

After you have injected your desired ISO File, a server reboot is required.
