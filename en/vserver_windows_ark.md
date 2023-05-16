---
id: vserver_windows_ark
title: VPS/ROOT ARK Survival Evolved Dedicated Server Setup
description: Information about setting up an ARK Survival Evolved Dedicated Server on a VPS/Rootserver - ZAP-Hosting.com Documentation
sidebar_label: ARK Survival Evolved Dedicated Server Setup
---



Got a Windows VPS or root server and want to install game servers on it? For example an ARK: Survival Evolved Dedicated Server? Then you are at the right place! In the following we will explain step by step how you can install such a service on your server.

**📺Video:** Do you prefer instructions in the form of a video or as an additional visual supplement? No problem! We also provide a video for this topic: 

<iframe width="560" height="315" src="https://www.youtube.com/embed/YOz_SqsUkg4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



## Introduction

Connect to your VPS or root server via RDP to set up your ARK: Survival Evolved Dedicated Server. In case you don't know how to connect to your server via RDP, we recommend you to have a look at the [RDP Guide](vserver_windows_userdp.md).



## Preparation

For the setup of an ARK server the SteamCMD is needed. The SteamCMD is the **command line edition of the Steam client**. This tool can be used to quickly and easily download the dedicated server applications of popular Steam games. You will find the SteamCMD on the official Valve developer website: https://developer.valvesoftware.com/wiki/SteamCMD. 

Following this, the download takes place. This will contain the **steamcmd.zip** file, which must first be unpacked. It is recommended to create a separate folder, where the file can be unzipped. You should see the **steamcmd.exe** as a result. Execute it and wait until the installation process has been completed.

![image](https://user-images.githubusercontent.com/26007280/217031479-b5d426d0-f663-4994-af23-4a6df4f6f98e.png)

As soon as the message **Loading Steam API.... OK** is displayed, the process has been completed successfully and you can start with the installation of the ARK server.



## Installation

After the installation you should be able to execute commands in the **Steam command line (steamcmd.exe)**. There you need to login. This is done with the **anonymous** user. Execute the following command: `login anonymous`

The next step will be the installation. This is done with the `app_update 376030` command. The App ID **376030** stands for the **ARK: Survival Evolved Dedicated Server** application.

![image](https://user-images.githubusercontent.com/26007280/217031501-05497159-0d11-40a5-ab64-b6ab5a053b22.png)



> ⚠️ Please do not interrupt the process before it is completed to avoid mistakes. It may take a moment, but it's worth being patient! :)



Navigate to the directory where you have performed the installation and go to the following subdirectory: **../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Binaries/Win64**.

There you have to create the startup file, which is needed to execute the server software. Create a file with the following name: start-ark.bat

> ⚠️ Please make sure that you have the Display file extensions option enabled so that the correct file extension is used.

Open the file, add the following content and save the newly added changes:

```
start ShooterGameServer.exe TheIsland?listen?SessionName=<server_name>?ServerPassword=<join_password>?ServerAdminPassword=<admin_password>?Port=<port>?QueryPort=<query_port>?MaxPlayers=<max_players>
exit
```



To make the server visible and accessible externally, the server ports used must be enabled/forwarded in the firewall. To do this, open the Windows Firewall settings.

![image](https://user-images.githubusercontent.com/26007280/217031552-cda356f4-60cd-48fd-bd9d-741c4f60f76f.png)


Additional rules must be added in the settings. To do this, click on the incoming and outgoing rules as described below and add them for the following protocols and ports:

- TCP incoming and outgoing: 27020
- UDP incoming and outgoing: 27015
- UDP incoming and outgoing: 7777-7778



## Configuration

The actual setup is already complete. Further configuration changes can be made in the **DefaultGameUserSettings.ini** and **Gameusersettings.ini** config files. There you have the possibility to change the server name, server password, server admin password and many other options. To do so, navigate to the following directories:

```
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```



## Play

At the end of the setup, you can now start the server by executing the **start-ark.bat** file you created earlier. This should open the server's console and start the server startup process. If everything goes as expected, the server should be visible in the server list after a successful start.

![image](https://user-images.githubusercontent.com/26007280/217031649-cd79ec81-a38f-4ddf-8fae-0215aa1674d6.png)
