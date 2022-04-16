---
id: dedicated_linux_ubuntu
title: Install Ubuntu
sidebar_label: Install Ubuntu
---

> In this example, the installation of Ubuntu 21.04 is performed

> It can take some time until the iso was started completly

## 📋 Preparations

In your ZAP interface, select the desired ISO of Ubuntu and let the server boot with the ISO until it is in the setup process.

> Navigation in the setup process is done with TAB, Space and Enter.
> TAB = switch between items, Space = highlight, Enter = confirm

***

## 💻 Installation of the operating system
When the ISO is successfully loaded, the server is in the setup process.

![](https://screensaver01.zap-hosting.com/index.php/s/yrHMNzstM23XZH6/preview)

Choose your desired language and proceed by pressing enter.

***

![](https://screensaver01.zap-hosting.com/index.php/s/x9kYGEWS5fy7Wjp/preview)

Choose your desired keyboard layout and proceed by ticking "Done"

***

![](https://screensaver01.zap-hosting.com/index.php/s/6mr5kAKJQ39iJt5/preview)

Your server configures its network interface automatically by using dhcp.
The adapter`eno1` is the default network adapter of your ZAP Dedicated Server.

we proceed by ticking "Done"

***

![](https://screensaver01.zap-hosting.com/index.php/s/tz97Ee8ZQkxAGGb/preview)

If you'd like to use a proxy, you could configure it here.
A proxy is not required.

***

![](https://screensaver01.zap-hosting.com/index.php/s/xNknNyWAbd5DnsZ/preview)

Our dedicated server is located in Germany, so we also choose the german mirror location to achieve the best possible download rates.

***

![](https://screensaver01.zap-hosting.com/index.php/s/2dJ9oeMGjpWn6cZ/preview)

In this step you can create different partitions for your system, if you'd like to use just the whole ssd as one partition just pick "Use an entire disk"

![](https://screensaver01.zap-hosting.com/index.php/s/WXfzt57Rtm2SQLD/preview)

The setup automatically creates the volumes and you can proceed by choosing "Done"

![](https://screensaver01.zap-hosting.com/index.php/s/L3YcGNbYWpMmaDj/preview)

The setup of course deletes all persisting data on the system, we accept that by ticking "Continue" and pressing enter.

***

![](https://screensaver01.zap-hosting.com/index.php/s/mqrjmF2ZmA2Qj9z/preview)

Please configure your user account to your like, you can also use the root account in the end by changing the password.
You can navigate through the options with tab or your arrow keys.

When you're done proceed by ticking "Done".

***

![](https://screensaver01.zap-hosting.com/index.php/s/Xz3zzMdZ6C523ip/preview)

We would recommend to enable the installation of the OpenSSH-Server if you'd like to connect to your server through as example PuTTY.

***

![](https://screensaver01.zap-hosting.com/index.php/s/wcGiSwX935jXeex/preview)

Ubuntu offers a few default snaps, if you'd like to use some of them, just tick the ones of your like.

> 🎉 The server is now installing everything, after thats done ubuntu is installed.

![](https://screensaver01.zap-hosting.com/index.php/s/SzrxCtJTx2S8Nef/preview)

Please Eject now the ISO-File in your iLO to prevent the server from loading the setup again.

***

![](https://screensaver01.zap-hosting.com/index.php/s/x3BRLSepSDFnYGA/preview)

choose "Reboot now" and verify by pressing enter that you have removed the ISO file.

## 🔑 Changing the password of the root user.
You can easily change the password of the root user:

write `sudo su -` and enter your password after that write `sudo passwd root` to change the password.
Enter now the new desired for the root user.

Thats it - You can now login with your useraccount `root`

> If you have any further questions or problems, our support is happy to assist you!
