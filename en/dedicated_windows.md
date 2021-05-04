---
id: dedicated_windows
title: Windows Installation
sidebar_label: Windows Installation
---

> This guide is based on Windows Server 2019, the steps are pretty similar to the other windows server versions

## Installation of Windows Server
To install a Windows Server its required to have a iso file of your decision, you could choose in our webinterface the desired version of windows.
Alternatively, you could choose a own iso file, a detailed guide for that you could find in the "dedicated servers" category here in the docs.

![](https://screensaver01.zap-hosting.com/index.php/s/L9HcoM7F7XJmEWx/preview)

If you see this screen in a remote console of your decision, the iso was loaded successfully, we can now start with the setup.
Choose your desired language and press "next" to continue

![](https://screensaver01.zap-hosting.com/index.php/s/24dxdsEPmFrwEYW/preview)

Press "Install now" to start the setup process.

![](https://screensaver01.zap-hosting.com/index.php/s/zozKbcAdWMB3K5C/preview)

Windows requires now a product key, if you have one then enter it.

> We're not selling Windows-Licenses, its required to buy a key by your own.

You can buy Windows-Keys in several websops, verify to buy the matching key, since there are different windows versions.
In Windows Server 2019 there are as example two editions, the normal one and datacenter edition. 
If you're not sure what exactly you need, just press "I don't have a product key" you can always add a key afterwards.

![](https://screensaver01.zap-hosting.com/index.php/s/dW473JmLzANSn8o/preview)

Pick now your desired version which you would like to run on your dedicated server.
Be sure to pick the right version, its not possible to change this afterwards.
Please mention also to pick a version with "(Desktop Experience)" otherwise your windows would be shell based.
When you have made your decision, mark the version and continue with "next"

![](https://screensaver01.zap-hosting.com/index.php/s/LdcYL4D5MaJxEQk/preview)

We accept the terms and proceed by pressing "next".

![](https://screensaver01.zap-hosting.com/index.php/s/Hzimdrd2tenNFg4/preview)

We choose "Custom" since we would like to install a new installation of windows. You could choose "Upgrade" when you'd like to upgrade from 2016 to 2019 as example.

![](https://screensaver01.zap-hosting.com/index.php/s/AHmQPabmzSnz7rT/preview)

In the next step its required to create the partitions of your dedicated server, usually there should be no partitions created yet, if there are entries mark them and press delete.
You could create multiple smaller partitions or a huge one. If you're creating smaller partitions we would recommend to have atleast 50GB at the main windows partition.
Click on "New" to create a partition.

![](https://screensaver01.zap-hosting.com/index.php/s/bTAaGeJ9sYByrXF/preview)

You can just press Apply if you'd like one big partition. The setup takes automatically the biggest possible size.

![](https://screensaver01.zap-hosting.com/index.php/s/TjgaF7HMJm94Ff7/preview)

Windows itself requires a small system partition, we accept that by pressing "OK"

![](https://screensaver01.zap-hosting.com/index.php/s/65zdgz9XdGjoyXk/preview)

If you're happy with your partitions, please choose the partition on which windows should be installed and proceed with "Next"
The Windows-Setup does now everything by itself, this can take several minutes.
There is nothing else to do, until the setup is finished.

## Configuration of Windows Server

When your setup process was successfully, windows forces you to define a password.

![](https://screensaver01.zap-hosting.com/index.php/s/t9r2PDnNdMfQT3Z/preview)

Set there your desired password.

> We recommend to choose a strong password with special characters.
> If you forget the password, there is no way to recover it, so be sure to write it down.

After you've set the password, you are in the lock screen of windows.
Nachdem das Passwort gesetzt wurde, landen wir im Windows-Lockscreen

![](https://screensaver01.zap-hosting.com/index.php/s/kYBasf4wCD3HYeg/preview)

To be able to login to windows, its required to send the key combination CTRL + ALT + DELETE you can do that easily through your remote console.
(You'll find that in the Java console in "Keyboard")
Login with your password now.

In the next step its required to enable Remotedesktop, then you can connect easily to your server.
Open the Windows Explorer and do a right click on "This PC"

![](https://screensaver01.zap-hosting.com/index.php/s/gZcwm57MMBBmYsC/preview)

Choose Properties.

![](https://screensaver01.zap-hosting.com/index.php/s/5g3KFyFPNQGwfeM/preview)

Open "Remote Settings"

![](https://screensaver01.zap-hosting.com/index.php/s/8mWK3coKQABbXmt/preview)

Accept the upcoming firewall information with "OK" and press "Apply"

Open now Remotedesktop on your computer and fill in the ip address of your ZAP-Interface
The username is always Administrator and the password is the one you defined earlier.

![](https://screensaver01.zap-hosting.com/index.php/s/LWMHoDTCKomgNDP/preview)

You can ignore the certificate warning, you can tick the message "Don't ask me again for connections to this computer"
Complete everything by pressing "Yes"

![](https://screensaver01.zap-hosting.com/index.php/s/3Zw5LDGEoqTgNrc/preview)

Remote Desktop Connection does now establish a connection to your dedicated server and you can use it.
The network configuration was automatically applied by dhcp so there is no need to change something.

![](https://screensaver01.zap-hosting.com/index.php/s/sTqJyswDaNY256m/preview)

> If you have further questions or issues, our support will help you out!
