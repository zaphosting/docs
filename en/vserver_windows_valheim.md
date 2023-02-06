---
id: vserver_windows_valheim
title: VPS/ROOT: Valheim Dedicated Server Setup
descriptionen: Information about setting up a Valheim Dedicated Server on a VPS/Rootserver - ZAP-Hosting.com Documentation
sidebar_label: Valheim Dedicated Server Setup

---


Got a Windows VPS or root server and want to install game servers on it? For example a Valheim Dedicated Server? Then you are at the right place! In the following we will explain step by step how you can install such a service on your server.

**📺Video:** Do you prefer instructions in the form of a video or as an additional visual supplement? No problem! We also provide a video for this topic: 

<iframe width="560" height="315" src="https://www.youtube.com/embed/NWspZFmexqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



## Introduction

Connect to your VPS or root server via RDP to set up your Valheim Dedicated Server. In case you don't know how to connect to your server via RDP, we recommend you to have a look at the [RDP Guide](vserver_windows_userdp.md).



## Preparation

For the setup of a Valheim server the SteamCMD is needed. The SteamCMD is the **command line edition of the Steam client**. This tool can be used to quickly and easily download the dedicated server applications of popular Steam games. You will find the SteamCMD on the official Valve developer website: https://developer.valvesoftware.com/wiki/SteamCMD. 

Following this, the download takes place. This will contain the **steamcmd.zip** file, which must first be unpacked. It is recommended to create a separate folder, where the file can be unzipped. You should see the **steamcmd.exe** as a result. Execute it and wait until the installation process has been completed.
![image](https://user-images.githubusercontent.com/26007280/217028019-99df003d-0a7d-4bc7-9f06-a9022862fd53.png)

As soon as the message **Loading Steam API.... OK** is displayed, the process has been completed successfully and you can start with the installation of the Valheim server.



## Installation

After the installation you should be able to execute commands in the **Steam command line (steamcmd.exe)**. There you need to login. This is done with the **anonymous** user. Execute the following command: `login anonymous`

The next step will be the installation. This is done with the `app_update 896660` command. The App ID **896660** stands for the **Valheim Dedicated Server** application.

![image](https://user-images.githubusercontent.com/26007280/217027978-f34caa53-3c85-428e-bd06-9a55684e0279.png)

> ⚠️ Please do not interrupt the process before it is completed to avoid mistakes. It may take a moment, but it's worth being patient! :)


Navigate to the directory where you have performed the installation and go to the following subdirectory:  **../steamapps/common/Valheim dedicated Server**/

There you have to create the startup file, which is needed to execute the server software. Create a file with the following name: start_headless.bat

> ⚠️ Please make sure that you have the Display file extensions option enabled so that the correct file extension is used.

Open the file, add the following content and save the newly added changes:

```
@echo off
set SteamAppId-892970

echo "Starting server PRESS CIRL-C to exit"

REM Tip: Make a local copy of this script to avoid it being overwritten by steam.
REM NOTE: Minimum password length is 5 characters & Password cant be in the server name.
REM NOTE: You need to make sure che ports 2456-2458 is being forwarded to your server through your local router & firewall.

valheim server -nographics -batchmode -name "My Server" -port 2456 -world "Dedicated" -password "secret" -crossplay
```

To make the server visible and accessible externally, the server ports used must be enabled/forwarded in the firewall. To do this, open the Windows Firewall settings.

![image](https://user-images.githubusercontent.com/26007280/217027905-bb6bde60-1e9d-4db3-aadf-7b853abc963e.png)

Additional rules must be added in the settings. To do this, click on the incoming and outgoing rules as described below and add them for the following ports: 2456-2458 for the TCP/UDP protocols.




## Configuration

The actual setup is already complete. Further configuration changes can be made in the **start_headless_server.bat**  file. There you have the possibility to change the server name, server password, server admin password and many other options. To do so, navigate to the following directories:

```
../steamapps/common/Valheim dedicated Server/
```



## Play

At the end of the setup, you can now start the server by executing the **start_headless_server.bat** file you created earlier. This should open the server's console and start the server startup process. If everything goes as expected, the server should be visible in the server list after a successful start.
