---
id: dedicated-linux-jitsi
title: "Setup Jitsi Meet on a Linux Server - Host Your Own Video Conferencing Platform"
description: "Discover how to set up and run your own secure Jitsi Meet videoconferencing server for easy, private online meetings → Learn more now"
sidebar_label: Install Jitsi Meet
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Jitsi Meet is an open source videoconferencing software with which you can set up your own videoconferences on your server. A big advantage of Jitsi Meet is the easy handling: You only need a browser (when using cell phones the Jitsi App) and you can't log in to external services. Each video conference gets its own URL to join the video conference. Jitsi Meet is perfect for video conferencing even with people who are not very experienced.
Attention: Without any further settings, everyone who accesses the Jitsi Meet server has the possibility to start their own videoconferences on the server.



## Install Jitsi Meet on a Debian Server

In the following we show how to install a Jitsi Meet Server on a Debian Server. Basically Jitsi Meet works on other Linux servers, e.g. with Ubuntu, and the installation is very similar.

### Preparations

In order to use Jitsi Meet properly, you should use your own domain to access the Jitsi Server. It makes sense to create your own subdomain for the Jitsi Meet server. As an example we use the domain meet.zap-testdomain.de.
For ZAP-Hosting domains, you have to create a new entry under DNS administration. Enter the name of the subdomain in the field "Name" and the IP address of your server in the field "Value". In our example we will enter "meet" in the Name field and the IP address of the ZAP test server where we will install Jitsi Meet in the Value field: 185.239.239.49 (enter the IP of your server, not this example IP)


to a Jitsi Meet server via the IP address. However, a domain is required for the SSL certificate. Without a domain the browser will give a security warning.

If the subdomain is set (it can take up to 24 hours until changes become active), you can prepare your server for installation.
Connect to your server via Putty or WinSCP.
Before you continue, make sure that the server is updated. If necessary each command must be started with superuser rights. Then add "sudo" before the command (e.g. "sudo apt-get update")

```
$	apt-get update
```
```
$	apt-get upgrade
```

If no firewall is installed on the server, you can install a firewall, for example UFW:
```
$	apt install ufw
```

Make the following settings on the firewall:

```
$	ufw allow OpenSSH
$	ufw allow 80/tcp
$	ufw allow 443/tcp
$	ufw allow 4443/tcp
$	ufw allow 10000/udp
```

Enable the firewall:
```
$	ufw enable
```

Check the status:
```
$	ufw status
```

### Installation of Jitsi Meet

To install Jitsi Meet, the first thing you need is the gnupg package:
```
$	apt install gnupg
```

After the package installation the Jitsi-GPG key is downloaded and the GPG key is added:
```
$	wget https://download.jitsi.org/jitsi-key.gpg.key
```
```
$	apt-key add jitsi-key.gpg.key
```

To install Jitsi Meet you have to add the Jitsi Repository:
```
$	nano /etc/apt/sources.list.d/jitsi-stable.list
```

The following line is added in the editor. Afterwards the change can be saved and the editor closed again:
```
$	deb https://download.jitsi.org stable/
```

Now Jitsi Meet can be installed. It is recommended to update all installed packages again:
```
$	apt update
```
```
$	apt install jitsi-meet
```

During the installation you will be asked to enter a hostname. Enter the subdomain you created for your Jitsi Meet server here In the example of our test server, this is: meet.zap-testdomain.de

![](https://screensaver01.zap-hosting.com/index.php/s/jHEGSQARQrDKLoz/preview)


Confirm the input with "Ok". A new window will open asking her whether a self-signed TLS certificate should be created or an existing one should be used. Select the option "Generate a new self-signed certificate":

![](https://screensaver01.zap-hosting.com/index.php/s/QWmYp3gdXMnBdnC/preview)


The installation of Jitsi Meet is now complete and all you need to do is retrieve the TLS certificate.
Install the package Certbot:
```
$	apt apt install certbot
```

Run the script for the TLS certificate installation program:
```
$	/usr/share/jitsi-meet/scripts/install-letsencrypt-cert.sh
```

During the execution you will be asked to enter an email address that will be sent to letsenrypt.org. Enter an email address and confirm by typing.


After that Jitsi Meet should be fully installed and active on your server. To test if Jitsi Meet has been installed correctly, just enter the subdomain you have set up into the URL bar of your browser. In this tutorial this is:
```
https://meet.zap-testdomain.de
```

If the page loads with Jitsi Meet you can directly start your 1st video conference.


