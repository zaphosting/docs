---
id: dedicated_centos
title: Install CentOS
sidebar_label: Install CentOS
---

> In this example, the installation of CentOS 8.3 is performed

## 📋 Preparations
In your ZAP interface, select the desired ISO of FreeBSD and let the server boot with the ISO until it is in the setup process.

> Navigation in the setup process is done with your mouse.

***

## ⌚ The setup
When the ISO is successfully loaded, the server is in the setup process.

![](https://screensaver01.zap-hosting.com/index.php/s/gPCZM8xSeeY78Le/preview)

* Keyboard
Choose the keyboard layout of your like

* Time & Date 
Choose your timezone

* Root Password
Choose the password of your root account

* Installation Destination
Choose the ssd, on which centos should be installed

* Network & Hostname
Since there is an incompatibility issue, the network could not be setup yet, we will do this in the end.

When everything's configured to your like, you can press "Begn Installation"

***

![](https://screensaver01.zap-hosting.com/index.php/s/n4Fem88GnDc8zrd/preview)

When the installation is done, just remove the ISO-file fromy our server and press "Reboot System"

## 💻 Network

In this step we will configure our network device, to do that we need to update some files.
Please mount this iso file into your server, through the remote console or the iLO itself.

![](https://screensaver01.zap-hosting.com/index.php/s/PCyFp8EsfcwzAHZ/preview)

```http://185.223.30.65/dedicatedisos/centos-network-554flb.iso```

After the ISO-file was mounted successfully, we need to mount it into our system, to have access to it.

```mount /dev/sr0 /mnt```

The ISO-file was now mounted in /mnt.

```rpm -i /mnt/be2net.rpm```

Now we load the update package.

```modprobe be2net```

In this step, we will run the update, this could take a few seconds.
You can now check with `ip a s` if a network device called `eno1` exists, if yes, please reboot your system.

After the reboot was done, we can configure the network device.

```nano /etc/sysconfig/network-scripts/ifcfg-eno1```

please fillin the following data into the file:

```
DEVICE=eno1
BOOTPROTO=dhcp
ONBOOT=yes
```

You can leave nano by pressing `CTRL+X` and `Y`

Now we need to start our network device with `ifup eno1` 

> Your dedicated server has now a working internet connection
