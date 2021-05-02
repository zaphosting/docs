---
id: dedicated_iso
title: Own ISO
sidebar_label: Own ISO
---
> Mounting your own ISO-file is on your own risk.

## Which possibilities there are?
There are two ways to mount your own iso file. Its always necessary to restart the server, to load the file.
There are in general no restrictions on mounting a file, its important that the iso is bootable.

### Mounting through the iLO
Open your iLO Management Interface and open "Virtual" Media
![](https://screensaver01.zap-hosting.com/index.php/s/zHMmYxq45ECe5GL/preview)

* Fill in your url which points to the iso file, you'd like to use. Be sure that the link ends with .iso
* Press now "Insert Media"
* Click on "Server Reset" which will cause that your system performs a reboot.

Your iso-file will now be loaded.

### Mounting through a remote console

HTML5 Console
You can easily mount the file itself, in the remote console itself:
![](https://screensaver01.zap-hosting.com/index.php/s/8TFjzAEeqKY628K/preview)

* Press on the disc symbol
* Choose "CD/DVD"
* Choose bwetween "Scripted media URL" or "Local .iso file"

The difference between "Scripted media URL" and "Local .iso file" is that you can mount a iso file which is uploaded to a server/webspace or directly choose with "Local *.iso file" a file from your computer, without uploading it somewhere.

When you choosed your iso file, its required to reboot the server.

Java Console
As on the HTML5 console, the iso file is also directly mounted in the application itself.
![](https://screensaver01.zap-hosting.com/index.php/s/x99HAMKGTafEMo9/preview)

* Open "Virtual Drives"

The difference between "Image File CD/DVD-ROM" and "URL CD/DVD-ROM" is that you can mount a iso file which is uploaded to a server/webspace or directly choose with "Image File CD/DVD-ROM" a file from your computer, without uploading it somewhere.

When you choosed your iso file, its required to reboot the server.
