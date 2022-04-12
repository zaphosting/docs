---
id: vserver_windows_userdp
title: VPS: Initial access to Windows Server with RDP
description: Information on how to gain initial access to your Windows VPS from ZAP-Hosting with the remote desktop connection - ZAP-Hosting.com documentation
sidebar_label: Initial access (RDP)
---

## 🖥 Remotedesktop connection

![](https://screensaver01.zap-hosting.com/index.php/s/iKzYiHJ46WRQq2G/download/Remote.gif)

You connect to your Windows server using the Remote Desktop Connection program provided by Windows.  The program can be found via the Windows search under the term "remote".

> The Windows search function can be found via the Windows icon in the lower left corner.

![image](https://user-images.githubusercontent.com/13604413/159172603-28ab83df-7b01-47ff-a7de-820a2f9b21cd.png)

## 🏘 IP address & access

"Remote Desktop Connection", asks for a "**computer name**". This is the IP address of the server.

![image](https://user-images.githubusercontent.com/13604413/159172608-95cba5ba-111f-41e5-b3c5-edc28ef495b5.png)

The IP address can be found in the ZAP web interface under "**Access & Security**" and in the Infobar.

![](https://screensaver01.zap-hosting.com/index.php/s/cf2AaeBCBtJnBT2/preview)

The program asks for a **user name** and **password**. The user name is "**administrator**". The password can be set in the web interface under "**Access & Security**".

![](https://screensaver01.zap-hosting.com/index.php/s/8L9J3R57RWjnJzW/preview)

> No certificate is installed by default. The password is therefore transmitted insecurely. Learn how to create a certificate here: RDP Certificate


## 🤷♂ Alternative Remote Programs

The following alternative programs are suitable for connecting to a Windows server via remote desktop:

- Remote Desktop Connection Manager (RDCMan)
- mRemoteNG
- RoyalTS
- Devolutions Remote Desktop Manager
- DameWare Mini Remote Control

> For **iOS** users : **Microsoft Remote Desktop 10** in the Mac App Store, **Android** Parallels Client
