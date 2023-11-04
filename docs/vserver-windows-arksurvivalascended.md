---
id: vserver-windows-arksurvivalascended
title: ARK Survival Ascended Dedicated Server Setup
description: Information about setting up an ARK Survival Ascended Dedicated Server on a VPS/Rootserver - ZAP-Hosting.com documentation
sidebar_label: ARK Survival Ascended Dedicated Server Setup
---

Do you have a Windows VPS or rootserver and you want to install an ARK: Survival Ascended Dedicated server on it? You are in the right place. In this guide we will explain the step by step process of installing this service on your server.

## Preparation

To begin with, connect to your VPS or rootserver through Remote Desktop (RDP). Use our [RDP Initial Access](vserver-windows-userdp.md) guide if you need help doing this.

Once you have accessed your server, you will need to setup **SteamCMD** in order to be able to download the necessary dedicated server files. SteamCMD is the **command-line (CLI)** version of the Steam client and is the tool which allows you to easily download a range of Steam workshop and dedicated server files. Download [SteamCMD from the official Valve website](https://developer.valvesoftware.com/wiki/SteamCMD) or directly [here](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Create a new folder somewhere on your server, in this scenario we will name it `steamcmd`. Head over to your Downloads folder, find the **steamcmd.zip** file which you just downloaded and place it into your `steamcmd` folder. Now you will have unzip the file by right-clicking and using Window's unzip functionality directly, or any range of applications such as .7zip or Winrar. This should result with a **steamcmd.exe** file being unzipped.

Simply run **steamcmd.exe** and await until the installation process is fully completed.

![image](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

As soon as the message **Loading Steam API.... OK** is displayed, the process has been completed successfully and you can being with the installation of the ARK: Survival Ascended dedicated server in the following section.

## Installation

After the installation, you should be able to execute commands within the **steamcmd.exe** command prompt that you ran before. You need to login prior to being able to do anything, through the **anonymous** user, by using the command: `login anonymous`

Once logged in, you can now begin downloading the files. Run the command `app_update 2430930` which will begin the download. The App ID **2430930** is the **ARK: Survival Ascended Dedicated Server** application.

![image](https://github.com/zaphosting/docs/assets/42719082/98d7c643-04be-488b-8831-86606363f98c)

:::info
Please do not interrupt the process before it is completed to avoid mistakes. It may take a moment, but it's worth being patient! :)
:::

### Creating Startup File

Once the download has been completed successfully, navigate to the directory where you have performed the installation and go to the following subdirectory:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Binaries/Win64
```

In this subdirectory, you will have to create your startup file which is needed in order to launch the dedicated server. Create a file with the name: `start-ark.bat`. You can create a text document first and then rename it to the `.bat` extension afterwards.

:::info
Ensure that you have the "Display file extensions" option enabled in your File Explorer so that the correct file extension is being used.
:::

Open the file using a text editor (such as Notepad++) and add the following contents within it:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerAdminPassword=<admin_password>?Port=7777?QueryPort=27015?MaxPlayers=[max_players] -NoBattlEye
exit
```

Within this command, you should replace `[server_name]`, `[admin_password]` and `[max_players]` with what you wish.

If you also want to setup a password for regular people to be able to join, you can add `?ServerPassword=[join_password]` to the command in the file above. This would change it to:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerPassword=[join_password]?ServerAdminPassword=<admin_password>?Port=7777?QueryPort=27015?MaxPlayers=[max_players] -NoBattlEye
exit
```

Ensure that you have set the variables and that you save the changes before you close the file. 

Your server will now be accessible locally through `127.0.0.1:7777` once you run the startup file and the server becomes online. However, you must still add Windows Firewall port forwarding rules if you want your server to be accessible to the public which will be covered in the following section.

### Port Forwarding your server

In order to ensure that your server is accessible to the public, you must alter port forwarding rules for the ports that the dedicated server process is using.

Use the search function on Windows to open up **Windows Firewall Settings with Advanced Security**. You may have to press **Advanced Settings** to open up the necessary window if you open up the base Windows Firewall page.

![image](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

You must create new rules for your Ark: Survival Ascended server. To do this, click on the incoming and outgoing rules as described below and add them for the following protocols and ports:
- TCP incoming and outgoing: 27020
- UDP incoming and outgoing: 27015
- UDP incoming and outgoing: 7777-7778

Please use our [Windows port forwarding guide](vserver-windows-port.md) if you need further assistance doing this.

Once you have added these rules, your server will now be accessible which means you will be able to connect to it through your server's IP address. You can do this by opening your in-game console on Ark: Survival Ascended and running `open [your_ip_address]:7777`.

We recommend that you configure your server settings first through the following section before accessing your server.

## Configuration

By this stage, you have finished the setup for your Ark: Survival Ascended dedicated server. You can perform further server configuration through two configuration files found within the directory of your server.

Firstly, navigate to the following directories:
```
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```

You will be able to find both **DefaultGameUserSettings.ini** and **Gameusersettings.ini** configuration files. In these files, you can edit a wide range of variables and options regarding your server.

## Connecting to your server

Once you have finished the setup and configuration for your server, you can start the server by executing the **start-ark.bat** file you created previously.

This will open thte server's console in a command prompt and begin the startup process. If everthing occurs as expected, your server will be visible in the server list. Alternatively, you will be able to connect directly by opening the console in-game and running `open [your_ip_address]:7777`.