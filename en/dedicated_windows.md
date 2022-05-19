---
id: dedicated_windows
title: Windows Installation
sidebar_label: Windows Installation
---

> This guide is based on Windows Server 2019, the steps are pretty similar to the other windows server versions

<iframe width="560" height="315" src="https://www.youtube.com/embed/yEjQOrcEus0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 💻 Installation of Windows Server
To install a Windows Server its required to have a iso file of your decision, you could choose in our webinterface the desired version of windows.
Alternatively, you could choose a own iso file, a detailed guide for that you could find in the "dedicated servers" category here in the docs.

![image](https://user-images.githubusercontent.com/13604413/159173695-ffbd74a1-1d75-4549-a95a-c5d3d90d6a2b.png)

If you see this screen in a remote console of your decision, the iso was loaded successfully, we can now start with the setup.
Choose your desired language and press "next" to continue

![image](https://user-images.githubusercontent.com/13604413/159173696-bcb199cb-4f24-439e-a69f-eab78717cb8e.png)

Press "Install now" to start the setup process.

![image](https://user-images.githubusercontent.com/13604413/159173700-10bf989c-8eb0-4e05-8d8a-3bc2f246d720.png)

Windows requires now a product key, if you have one then enter it.

> We're not selling Windows-Licenses, its required to buy a key by your own.

You can buy Windows-Keys in several websops, verify to buy the matching key, since there are different windows versions.
In Windows Server 2019 there are as example two editions, the normal one and datacenter edition. 
If you're not sure what exactly you need, just press "I don't have a product key" you can always add a key afterwards.

Pick now your desired version which you would like to run on your dedicated server.
Be sure to pick the right version, its not possible to change this afterwards.
Please mention also to pick a version with "(Desktop Experience)" otherwise your windows would be shell based.
When you have made your decision, mark the version and continue with "next"

![image](https://user-images.githubusercontent.com/13604413/159173708-abbfb688-59c7-4f3c-b23b-fe283b36faa2.png)

We accept the terms and proceed by pressing "next".

![image](https://user-images.githubusercontent.com/13604413/159173715-0c8dad45-63fb-46cc-974c-947b12c60cf0.png)

We choose "Custom" since we would like to install a new installation of windows. You could choose "Upgrade" when you'd like to upgrade from 2016 to 2019 as example.

![image](https://user-images.githubusercontent.com/13604413/159173718-ed77b5c6-2680-4b8c-a932-db0b67dd8219.png)

In the next step its required to create the partitions of your dedicated server, usually there should be no partitions created yet, if there are entries mark them and press delete.
You could create multiple smaller partitions or a huge one. If you're creating smaller partitions we would recommend to have atleast 50GB at the main windows partition.
Click on "New" to create a partition.

![image](https://user-images.githubusercontent.com/13604413/159173722-b2b81a13-89b9-4998-b533-ff19435f3a26.png)

You can just press Apply if you'd like one big partition. The setup takes automatically the biggest possible size.

![image](https://user-images.githubusercontent.com/13604413/159173723-7de7b414-c03f-4050-ab53-aef52ce1ca3f.png)

Windows itself requires a small system partition, we accept that by pressing "OK"

![image](https://user-images.githubusercontent.com/13604413/159173729-b72212d8-1ce3-4ef4-a194-6d930996722a.png)

If you're happy with your partitions, please choose the partition on which windows should be installed and proceed with "Next"
The Windows-Setup does now everything by itself, this can take several minutes.
There is nothing else to do, until the setup is finished.

## 🔧 Configuration of Windows Server

When your setup process was successfully, windows forces you to define a password.

![image](https://user-images.githubusercontent.com/13604413/159173733-f521eaa9-2fe7-4c80-ac0f-d4c6b0231e9c.png)

Set there your desired password.

> We recommend to choose a strong password with special characters.
> If you forget the password, there is no way to recover it, so be sure to write it down.

After you've set the password, you are in the lock screen of windows.
Nachdem das Passwort gesetzt wurde, landen wir im Windows-Lockscreen

![image](https://user-images.githubusercontent.com/13604413/159173737-9e18d560-c6d3-4f7d-b1bf-6d49dab58d3b.png)

To be able to login to windows, its required to send the key combination CTRL + ALT + DELETE you can do that easily through your remote console.
(You'll find that in the Java console in "Keyboard")
Login with your password now.

In the next step its required to enable Remotedesktop, then you can connect easily to your server.
Open the Windows Explorer and do a right click on "This PC"

![image](https://user-images.githubusercontent.com/13604413/159173740-eb71a7df-f3cc-4ca5-a2e1-d53271b4dac9.png)

Choose Properties.

![image](https://user-images.githubusercontent.com/13604413/159173751-d7122d43-6321-4962-94cc-b5d92f2e2f34.png)

Open "Remote Settings"

![image](https://user-images.githubusercontent.com/13604413/159173761-191cfd5d-4d4e-4080-a1ae-6dd49592cf8b.png)

Accept the upcoming firewall information with "OK" and press "Apply"

Open now Remotedesktop on your computer and fill in the ip address of your ZAP-Interface
The username is always Administrator and the password is the one you defined earlier.

![image](https://user-images.githubusercontent.com/13604413/159173764-11064fab-0fd4-456a-bfc8-8c85cf0bb20b.png)

You can ignore the certificate warning, you can tick the message "Don't ask me again for connections to this computer"
Complete everything by pressing "Yes"

![image](https://user-images.githubusercontent.com/13604413/159173765-4b928fea-9a5d-4549-897f-77cdf21e0462.png)

Remote Desktop Connection does now establish a connection to your dedicated server and you can use it.
The network configuration was automatically applied by dhcp so there is no need to change something.

![image](https://user-images.githubusercontent.com/13604413/159173768-3dea37b5-fd8d-4e0d-89c7-e7101189d8c3.png)

> If you have further questions or issues, our support will help you out!
