---
id: vserver-windows-fs-22-epic
title: "VPS: Farming Simulator 2022 Epic Games Dedicated Server Setup"
description: Information on how to install and set up a Farming Simulator 2022 dedicated server for the Epic Games version on your Windows VPS from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Farming Simulator 2022 Epic Games
---

## Introduction
Setting up a server for Farming Simulator 22 Epic Games version differs slightly from the process for a standard server. This guide will walk you through the process, focusing on the unique aspects of the Epic Games version.

## Preparation

Before starting, ensure that your setup meets the following requirements:
- **Operating System:** Windows Server 2016/2019 (64-bit)
- **CPU:** At least 4x 2.4 GHz (AMD/Intel)
- **RAM:** At least 4GB (DDR3/4)
- **Disk Space:** At least 50GB free (SSD or better preferred)
- **Epic Games Account:** An Epic Games account with Farming Simulator 22.
:::warning
A second Epic Games account with Farming Simulator 22 in the library (You cannot host the server and play from the same account)
:::

## 1. Connect to Your Server
Connect to your VPS or root server via Remote Desktop (RDP). If you need help with this, refer to our [RDP Initial Access guide](https://zap-hosting.com/guides/docs/vserver-windows-userdp/).

## 2. Install Microsoft Visual C++ Redistributable
Download the latest supported version from [Microsoft's website](https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170). 
![image](https://i.imgur.com/CuJQYBx.png)
After downloading, run the installer and follow the on-screen instructions to complete the installation.
![image](https://i.imgur.com/xU6oIaX.png)

## 3. Install Epic Games Launcher
Download the Epic Games Launcher from [Epic Games website](https://store.epicgames.com/en-US/download).
![image](https://i.imgur.com/q6Pcq3W.png)
Run the installer and follow the on-screen instructions to complete the installation. After installation, it will then download some additional files in the launcher.
![image](https://i.imgur.com/78rhcdD.png)

## 4. Login to Epic Games
Open the Epic Games Launcher and Log in to your Epic Games account that has Farming Simulator 22.
![image](https://i.imgur.com/9Z8cK0L.png)

## 5. Download Farming Simulator 22
In the Epic Games Launcher, click on the 'Library' tab and then Locate Farming Simulator 22 and click 'Install'.
![image](https://i.imgur.com/au9CunQ.png)
Wait for the download and installation to complete. 
:::info 
The download speed is dependent on the Internet speed of your server.
:::

## 6. Set Up Launch Options
Once the game is installed, go back to the 'Library' tab in the Epic Games Launcher. Find Farming Simulator 22, click the three dots next to it and select 'Manage'.
![image](https://i.imgur.com/90eZz92.png)
Scroll down to the 'Launch Options' section and enable it and In the textbox that appears, enter `-server`.
![image](https://i.imgur.com/yrQonuo.png)
Close the dialog box.

## 7. Run Farming Simulator 22 Server
Start Farming Simulator 22 from the Epic Games Launcher or the executable file on the desktop.
![image](https://i.imgur.com/heXOWdy.png)
The game will open in a command prompt (cmd) mode, indicating that the server is running.
![image](https://i.imgur.com/Izbfu8q.png)

## 8. Enable Web Interface
Navigate to the installation path of the game, typically `C:\Program Files\Epic Games\FarmingSimulator22`.
![image](https://i.imgur.com/bDNvf88.png)
Open the `dedicatedServer.xml` file using a text editor (e.g., Notepad).
![image](https://i.imgur.com/m9rFsle.png)
Set the username and password for the admin by modifying the appropriate fields.
```xml
  <initial_admin>
    <username>admin</username> //username
    <passphrase>your_password</passphrase> //password
  </initial_admin>
```
Save the changes and close the file.
Run `dedicatedServer.exe` located in the same directory.
![image](https://i.imgur.com/4UJoPqv.png)
You can now access the web interface by going to `http://[YOUR_SERVER_IP]:8080` in your web browser.
![image](https://i.imgur.com/NDDmxqq.png)

### Important Notes
- **Web Interface Issues:** Due to the unique setup of the Epic Games version, you may encounter difficulties using the web interface to its full extent. While you can make changes and stop the server using the web interface, you cannot initiate the server through it.
- **Workaround:** If you encounter issues, first stop dedicatedServer.exe, then run Farming Simulator 22 directly to ensure the server is operational. Afterward, run dedicatedserver.exe to activate the web interface. It's important not to initiate the web interface first, as Epic Games may detect dedicatedServer.exe and Farming Simulator as the same file. Consequently, if you initiate the web interface first, the launcher will assume that the game is already running, thereby preventing it from launching again.

## 9. Port Forwarding
To ensure that your Farming Simulator 22 server is accessible to friends, you must set up port forwarding on your router and allow the required ports through the Windows firewall. Specifically, you'll need to open ports 10823 and 8080 for the TCP protocol. Port 10823 is used for the game server, while port 8080 is designated for the web interface. The latter only needs to be opened if you intend to use the web interface; otherwise, administrative tasks can still be performed locally on the Windows server via Remote Desktop Protocol (RDP). Detailed instructions on how to enable these ports on Windows are provided in [this guide](https://zap-hosting.com/guides/docs/vserver-windows-port/).

## 10. Connecting to your Farming Simulator 22 server
Launch the game and navigate to the multiplayer menu. Look for the server name, which can be found on the web interface and is customizable. Once you locate the server, click on it to connect. If prompted, enter the password, which will also be visible on the web interface. Enjoy playing with your friends on your dedicated server!
