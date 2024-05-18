---
id: dedicated-windows-satisfactory
title: "Dedicated Server: Satisfactory Dedicated Server Setup"
description: Information about setting up a Satisfactory Dedicated Server on a Dedicated Server - ZAP-Hosting.com documentation
sidebar_label: Satisfactory
---

import YouTube from '@site/src/components/YouTube/YouTube';

## Introduction
Got a dedicated server and want to install game servers on it? For example an Satisfactory Dedicated Server? Then you are at the right place! In the following we will explain step by step how you can install such a service on your server.

<YouTube videoId="rqtQJa_awGw" title="Satisfactory Dedicated Server Setup on Windows VPS" description="Feel like you understand better when you see things in action?  We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>


## Preparation

For the setup of a Satisfactory server the SteamCMD is needed. The SteamCMD is the **command line edition of the Steam client**. This tool can be used to quickly and easily download the dedicated server applications of popular Steam games. You will find the SteamCMD on the official Valve developer website: https://developer.valvesoftware.com/wiki/SteamCMD. 

Following this, the download takes place. This will contain the **steamcmd.zip** file, which must first be unpacked. It is recommended to create a separate folder, where the file can be unzipped. You should see the **steamcmd.exe** as a result. Execute it and wait until the installation process has been completed.

![image](https://user-images.githubusercontent.com/26007280/217031901-3833abac-f575-4cb0-9796-79b3fc3aa612.png)

As soon as the message **Loading Steam API.... OK** is displayed, the process has been completed successfully and you can start with the installation of the Satisfactory server.



## Installation

After the installation you should be able to execute commands in the **Steam command line (steamcmd.exe)**. There you need to login. This is done with the **anonymous** user. Execute the following command: `login anonymous`

The next step will be the installation. This is done with the `app_update 1690800` command. The App ID **1690800** stands for the **Satisfactory Dedicated Server** application.

![image](https://user-images.githubusercontent.com/26007280/217031918-ab4d48cf-aab8-4800-a762-5ec10fb0eb0f.png)



:::info
Please do not interrupt the process before it is completed to avoid mistakes. It may take a moment, but it's worth being patient! :)
:::



Navigate to the directory where you have performed the installation and go to the following subdirectory: **../steamapps/common/SatisfactoryDedicatedServer**

There you have to create the startup file, which is needed to execute the server software. Create a file with the following name: server-start.bat

:::info
Please make sure that you have the Display file extensions option enabled so that the correct file extension is used.
:::

Open the file, add the following content and save the newly added changes:

```
Factoryserver.exe -log -unattended
```



The file is then executed. At the first startup, a popup window should appear telling you that certain components are necessary to run the program. The game requires the Visual C++ Runtime. Click Yes and complete the installation. 

To make the server visible and accessible externally, the server ports used must be enabled/forwarded in the firewall. To do this, open the Windows Firewall settings.

![image](https://user-images.githubusercontent.com/26007280/217031951-237a28e1-ca48-4fe1-9678-437fc805574d.png)


Additional rules must be added in the settings. To do this, click on the incoming and outgoing rules as described below and add them for the UDP protocol and port 15000.



## Configuration

The actual setup is already complete. Further configuration changes can be made in the **ServerSettings.ini** config file. There you have the possibility to change the server name, server password and other options. Navigate to the following directory: 

```
../steamapps/common/SatisfactoryDedicatedServer/FactoryGame/Saved/Config/WindowsServer/
```



## Play

At the end of the setup, you can now start the server by executing the **server-start.bat** file you created earlier. This should open the server's console and start the server startup process. If everything goes as expected, the server should be visible in the server list after a successful start.

