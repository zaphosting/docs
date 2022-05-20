---
id: vserver_windows_vrising.md
title: vServer: Install V-Rising  on Windows
description: Information on how to install and set up a V-Rising Server on your Windows vServer and Dedicated Server from ZAP-Hosting - ZAP-Hosting.com Documentations
sidebar_label: V-Rising
---

<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/VGVPt0cmgTg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

# Installing a dedicated server for V-Rising

> :information_source: These instructions are also valid for a Dedicated Server from ZAP-Hosting with Windows Server 2016/2019. How to install Windows on a Dedicated Server we explain [here](https://zap-hosting.com/guides/docs/en/dedicated_windows/).

## Basic Information: 
A server based on Windows Server 2016/2019 with at least 4x 2.4 GHz CPU (AMD/Intel) and at least 4GB RAM (DDR3/4) and 6GB free Disk (SSD or better, preferred) is required. The server must run on 64 bit architecture. 

## Step 1 Create a folder for V-Rising

First, you need to connect to your server by using [RDP](https://zap-hosting.com/guides/docs/en/vserver_windows_userdp/). After you are connected, you need to create a new Folder on your Server in which the files for V-Rising will be installed.
In this example, we will create a new Folder on our Desktop.
This can be done by making a right mousclick.
Then choose "New -> Folder".

![image](https://user-images.githubusercontent.com/61839701/169501564-26497f2b-658f-43c9-b9b8-213c059bae1b.png)

You can name it whatever you want. In our example we will name it "VRising"

## Step 2 Download Steamcmd to your Windows server

Open the browser and go to the [link](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip). That will download SteamCMD for Windows to your Server.

![image](https://user-images.githubusercontent.com/61839701/169502302-e7914931-d11b-4ffb-856c-2d14aef993e4.png)

The file will then be downloaded and should be located in the download directory. (The download directory can be different)

![image](https://user-images.githubusercontent.com/61839701/169502419-07b532b6-c27e-46f5-b61e-9e73940df789.png)

For overview purposes we copy the steamcmd.zip file into the VRising folder we created earlier on our desktop.
To do this, click on the file and press the key combination "CTRL+C".
Then open the VRising folder on our desktop and press the key combination "CTRL+V".
Now you can see the file in the VRising folder.

![image](https://user-images.githubusercontent.com/61839701/169503028-300c9585-f1d8-42bf-ae89-b2e42ffccfe2.png)

Make a right click on the steamcmd.zip File now and choose Extract All. Accept the upcoming message by clicking on the Extract Button.

![image](https://user-images.githubusercontent.com/61839701/169503185-c5eca884-9bf1-4b84-a916-35ee0c93505e.png)

![image](https://user-images.githubusercontent.com/61839701/169503433-3f9558f2-600a-4be0-8ce7-24eca7195ba1.png)

Once that is done, make a doubleclick on the steamcmd file.
A new window should be opened now, installing the steamcmd files.

![image](https://user-images.githubusercontent.com/61839701/169504858-c0ac6cfd-5af1-465c-b1dd-38fadb0a28ce.png)

## Step 3 Download the V Rising Files

Once the steamcmd files were installed, you will see this in the newly opened window.

![image](https://user-images.githubusercontent.com/61839701/169505495-c376c430-3ed0-4593-8363-08c4fad4e2ba.png)

Now you specify the place in which the files will be downloaded.
This can be done with the "force_install_dir" command.
The full command in our example is this one:
force_install_dir "C:\Users\Administrator\Desktop\VRising"

![image](https://user-images.githubusercontent.com/61839701/169508798-73689618-6d62-471d-a2a3-77da3baeeb24.png)

Afterwards, you need to login into the anonmymous User.
For it, you need to enter "login anonymous" in there.

![image](https://user-images.githubusercontent.com/61839701/169506398-1b9d0538-46e0-47b0-9500-86689a16d36f.png)

Once that is done, we can finaly download the files.
For it you need to use this command:
app_update 1829350 validate

The files will be downloaded now.
Which can take a few minutes.

![image](https://user-images.githubusercontent.com/61839701/169510012-d622c504-578d-487e-bddb-28508d8fc655.png)

Once the process is done, you can see all the files on your Server in the VRising Folder.

![image](https://user-images.githubusercontent.com/61839701/169510187-4e635637-f938-4d73-a769-29d349989289.png)

## Step 4 Start and configure the V Rising Server

You can edit the start_server_example.bat file to make a few changes in there.
For it, you need to make a right click on the file and then choose edit.
You can adjust the Name of the Server and the path in which the process should be saved.

![image](https://user-images.githubusercontent.com/61839701/169510998-cdb6004b-cc83-4a6e-986c-d7a03779c219.png)

You can make more changes in the config files.
Which are located in the VRisingServer_Data\StreamingAssets\Settings Directory.

![image](https://user-images.githubusercontent.com/61839701/169511975-4b85ae9a-e80c-4630-8778-f9ee345b09a8.png)

In the ServerHostSettings.json File you can make general changes.
Like defining the Ports, a Server Description, the SaveInterval and for example the Gameserver Password.
I have changed the Name from the Server in there to "ZAP Hosting Test Server".

To start the Server you can make a doubleclick on the start_server_example.bat File.

![image](https://user-images.githubusercontent.com/61839701/169510714-b00175e8-f5ed-4bd8-b8a4-8a9682d2ad09.png)

The start process will take some time.
If the ports were forwarded correctly in the next step, you can find the Server in the Server List.

![image](https://user-images.githubusercontent.com/61839701/169515427-c60f5aef-9024-4b9b-bcff-2e36fef91017.png)

## Step 5 Unlock ports in the firewall

The server should of course be publicly accessible to play with friends. For this purpose, the ports of the server must be enabled in the Windows firewall. The ports 9876 and 9877 must be released for the protocol TCP AND UDP. 9876 is the game server port and 9877  is the Query Port.
How to enable ports on Windows, [we explain in this guide](https://zap-hosting.com/guides/docs/en/vserver_windows_port/). 

After the port release the server is publicly accessible, if it was started. 
