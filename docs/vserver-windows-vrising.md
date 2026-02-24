---
id: vserver-windows-vrising
title: "V-Rising Dedicated Server Windows Setup"
description: "Discover how to set up a V Rising dedicated Windows server for optimal gaming performance and seamless hosting → Learn more now"
sidebar_label: V-Rising
services:
  - vserver
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="to2ghqNpGLA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/qnEwRNpMmo3JzQq/preview" title="How to setup a V RISING Dedicated Windows Server!" description="Feel like you understand better when you see things in action? We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>
<InlineVoucher />

## Basic Information: 
A server based on Windows Server 2016/2019 with at least 4x 2.4 GHz CPU (AMD/Intel) and at least 4GB RAM (DDR3/4) and 6GB free Disk (SSD or better, preferred) is required. The server must run on 64 bit architecture. 

## Step 1 Create a folder for V-Rising

First, you need to connect to your server by using [Initial Access (RDP)](vserver-windows-userdp.md). After you are connected, you need to create a new Folder on your Server in which the files for V-Rising will be installed.
In this example, we will create a new Folder on our Desktop.
This can be done by making a right mousclick.
Then choose "New -> Folder".

![](https://screensaver01.zap-hosting.com/index.php/s/wgf8ckdTgiQ9wAq/preview)

You can name it whatever you want. In our example we will name it "VRising"

## Step 2 Download SteamCMD to your Windows server

Open the browser and go to the [link](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip). That will download SteamCMD for Windows to your Server.

![](https://screensaver01.zap-hosting.com/index.php/s/7HE5smMXq6mEetw/preview)

The file will then be downloaded and should be located in the download directory. (The download directory can be different)

![](https://screensaver01.zap-hosting.com/index.php/s/eEsyPe9J8KWGRMs/preview)

For overview purposes we copy the steamcmd.zip file into the VRising folder we created earlier on our desktop.
To do this, click on the file and press the key combination "CTRL+C".
Then open the VRising folder on our desktop and press the key combination "CTRL+V".
Now you can see the file in the VRising folder.

![](https://screensaver01.zap-hosting.com/index.php/s/rNCZB7NDYkqDxrm/preview)

Make a right click on the steamcmd.zip File now and choose Extract All. Accept the upcoming message by clicking on the Extract Button.

![](https://screensaver01.zap-hosting.com/index.php/s/RSQReHkc3SYbzNS/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/yaw87p2bcmFe9z6/preview)

Once that is done, make a doubleclick on the steamcmd file.
A new window should be opened now, installing the steamcmd files.

![](https://screensaver01.zap-hosting.com/index.php/s/R7Xm4tSLfEBqboD/preview)

## Step 3 Download the V Rising Files

Once the steamcmd files were installed, you will see this in the newly opened window.

![](https://screensaver01.zap-hosting.com/index.php/s/DjaZjaqM8tFZzCj/preview)

Now you specify the place in which the files will be downloaded.
This can be done with the "force_install_dir" command.
The full command in our example is this one:
force_install_dir "C:\Users\Administrator\Desktop\VRising"

![](https://screensaver01.zap-hosting.com/index.php/s/EFdLWdJ5Ypym3Ym/preview)

Afterwards, you need to login into the anonmymous User.
For it, you need to enter "login anonymous" in there.

![](https://screensaver01.zap-hosting.com/index.php/s/SN8qqRPezLDEF3Q/preview)

Once that is done, we can finaly download the files.
For it you need to use this command:
app_update 1829350 validate

The files will be downloaded now.
Which can take a few minutes.

![](https://screensaver01.zap-hosting.com/index.php/s/S5cwykrPq6bYyrG/preview)

Once the process is done, you can see all the files on your Server in the VRising Folder.

![](https://screensaver01.zap-hosting.com/index.php/s/8PwswWgB8BxwECL/preview)

## Step 4 Start and configure the V Rising Server

You can edit the start_server_example.bat file to make a few changes in there.
For it, you need to make a right click on the file and then choose edit.
You can adjust the Name of the Server and the path in which the process should be saved.

![](https://screensaver01.zap-hosting.com/index.php/s/PFDkyayBtSBoEFa/preview)

You can make more changes in the config files.
Which are located in the VRisingServer_Data\StreamingAssets\Settings Directory.

![](https://screensaver01.zap-hosting.com/index.php/s/jQWy34tbPTEtcc9/preview)

In the ServerHostSettings.json File you can make general changes.
Like defining the Ports, a Server Description, the SaveInterval and for example the Gameserver Password.
I have changed the Name from the Server in there to "ZAP-Hosting Test Server".

To start the Server you can make a doubleclick on the start_server_example.bat File.

![](https://screensaver01.zap-hosting.com/index.php/s/nSqbQQb3pHXnWmZ/preview)

The start process will take some time.
If the ports were forwarded correctly in the next step, you can find the Server in the Server List.

![](https://screensaver01.zap-hosting.com/index.php/s/TajWHXtRCLEeRKf/preview)

## Step 5 Unlock ports in the firewall

The server should of course be publicly accessible to play with friends. For this purpose, the ports of the server must be enabled in the Windows firewall. The ports 9876 and 9877 must be released for the protocol TCP AND UDP. 9876 is the game server port and 9877  is the Query Port.
How to enable ports on Windows, [Port Forwarding (Firewall)](vserver-windows-port.md). 

After the port release the server is publicly accessible, if it was started. 


## Conclusion

Congratulations, you have successfully installed and configured the V-Rising on your VPS/Dedicated Server! If you have any further questions or problems, please contact our support team, who are available to help you every day! 

<InlineVoucher />
