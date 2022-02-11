---
id: vserver_windows_fs_22
title: vServer: Install FarmingSimulator 2022 on Windows
description: Information on how to install and set up a FarmingSimulator Dedicated Server 2022 on your Windows vServer and Dedicated Server from ZAP-Hosting - ZAP-Hosting.com Documentations
sidebar_label: Farming-Simulator 2022
---

# Installing a dedicated server for Farming Simulator 2022

> :information_source: These instructions are also valid for a Dedicated Server from ZAP-Hosting with Windows Server 2016/2019. How to install Windows on a Dedicated Server we explain [here](https://zap-hosting.com/guides/docs/en/dedicated_windows/).

## Basic Information: 
A server based on Windows Server 2016/2019 with at least 4x 2.4 GHz CPU (AMD/Intel) and at least 2GB RAM (DDR3/4) and 6GB free Disk (SSD or better, preferred) is required. The server must run on 64 bit architecture. 
Furthermore, an own GameLicense is required (no Steam version), as well as a public IPv4 address. A GPU or a sound card are not required for the Dedicated Server. 
Depending on how much the dedicated server is modded, extended with mods or DLCs, more resources may be required. 


## Step 1 Purchase digital license

A digital version of FarmingSimulator 2022 is required, it can not be the Steam version.
The digital version can be purchased on the [FarmingSimulator Webseite](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital).
After purchasing the digital version, FarmingSimulator can be downloaded online by following the link below [Link](https://eshop.giants-software.com/downloads.php) from the mail which you received from Giants.
> Important: In the mail you will find the GameKey which is needed for the download as well as for the later activation of the installation. 

![](https://screensaver01.zap-hosting.com/index.php/s/tbfXSKfLeeECC82/preview)

## Step 2 Download Farming Simulator directly to your Windows server

Connect via [RDP](https://zap-hosting.com/guides/docs/en/vserver_windows_userdp/) to your Windows server. After you are connected, open the browser and go to the [link](https://eshop.giants-software.com/downloads.php) from the mail again. Then enter your GameKey and select the download for Windows8/10. 

![](https://screensaver01.zap-hosting.com/index.php/s/zmdSogySFe7kpnN/preview)

The file will then be downloaded and should be located in the download directory. (The download directory can be different)

![](https://screensaver01.zap-hosting.com/index.php/s/ko2xte3pwPNpZt9/preview)

With a double click the file is opened and the Setup.exe can be executed.
Afterwards one reads the TOS and confirms it. After that, the installation can be done as Standard or Custom, usually Standard is sufficient. 
Finally, click on install and FarmingSimulator 2022 will now be installed, this can take a few minutes. 

![](https://screensaver01.zap-hosting.com/index.php/s/M7SJTdXdReR7jNg/preview)

As soon as the installation process is finished, the following message appears, which can be confirmed with "Finish". 

![](https://screensaver01.zap-hosting.com/index.php/s/2wJfDEJ34odSnPj/preview)

The basic installation is now complete. 

## Step 3 Activation of the game and configuration of the dedicated server

Now the Farming Simulator must be started. There should be a shortcut on the desktop, if not, it can also be started via the Windows menu. 
Errors regarding a missing GPU or similar can be ignored or closed with No/Cancel. Farming Simulator only needs to be started to be able to enter the key. 

![](https://screensaver01.zap-hosting.com/index.php/s/aGWWdQ3jJMSB7Mr/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/GjPaAQDws3jCtX9/preview)

Now a login name and password must be set or changed/read out in the Config of the Dedicated Server, so that a login to the web interface of the Dedicated Server is possible. 
The Config is in the standard installation under 
`C:\Program Files (x86)\Farming Simulator 2022` to be found under the name `"dedicatedServer.xml"`. 
The login data can be freely customized. 

![](https://screensaver01.zap-hosting.com/index.php/s/AiYeAzCiikwCLqD/preview)

## Step 4 Start Farming Simulator 2022 Dedicated Server

To start the dedicated server, `"dedicatedServer.exe"` must be executed in the same directory where `"dedicatedServer.xml"` is located.

![](https://screensaver01.zap-hosting.com/index.php/s/wm5J9rsSWxKQabc/preview)

Afterwards the web interface can be opened via `https://SERVER-IP:8080`. 

![](https://screensaver01.zap-hosting.com/index.php/s/W6KszSCLpWXTKiL/preview)

The login is possible with the previously set/read login data from the `"dedicatedServer.xml"`. 
The further configuration is self-explanatory in the web interface and can be done with a few clicks, according to your personal wishes. 

## Step 5 Unlock ports in the firewall

The server should of course be publicly accessible to play with friends. For this purpose, the ports of the server must be enabled in the Windows firewall. The ports 10823 and 8080 must be released for the protocol TCP. 10823 is the game server port and 8080 is the webport for the webinterface, the webport has to be released only if needed, an administration can still be done only locally on the Windows server via RDP. 
How to enable ports on Windows, [we explain in this guide](https://zap-hosting.com/guides/docs/en/vserver_windows_port/). 

After the port release the server is publicly accessible, if it was started. 
