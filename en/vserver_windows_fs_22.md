---
id: vserver_windows_fs_22
title: vServer: Install FarmingSimulator 2022 on Windows
description: Information on how to install and set up a FarmingSimulator Dedicated Server 2022 on your Windows vServer and Dedicated Server from ZAP-Hosting - ZAP-Hosting.com Documentations
sidebar_label: Farming-Simulator 2022
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/VGVPt0cmgTg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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

![image](https://user-images.githubusercontent.com/13604413/159173431-deafbefa-f186-4acc-9605-1d980142c5c0.png)

## Step 2 Download Farming Simulator directly to your Windows server

Connect via [RDP](https://zap-hosting.com/guides/docs/en/vserver_windows_userdp/) to your Windows server. After you are connected, open the browser and go to the [link](https://eshop.giants-software.com/downloads.php) from the mail again. Then enter your GameKey and select the download for Windows8/10. 

![image](https://user-images.githubusercontent.com/13604413/159173433-c3c90cb4-0c5c-4e60-a61c-ce150e5b99f2.png)

The file will then be downloaded and should be located in the download directory. (The download directory can be different)

![image](https://user-images.githubusercontent.com/13604413/159173436-409b2130-0165-424f-bbff-996f7b149730.png)

With a double click the file is opened and the Setup.exe can be executed.
Afterwards one reads the TOS and confirms it. After that, the installation can be done as Standard or Custom, usually Standard is sufficient. 
Finally, click on install and FarmingSimulator 2022 will now be installed, this can take a few minutes. 

![image](https://user-images.githubusercontent.com/13604413/159173444-037c1c40-e2a1-4551-9aaf-bc2aa402c9d0.png)

As soon as the installation process is finished, the following message appears, which can be confirmed with "Finish". 

![image](https://user-images.githubusercontent.com/13604413/159173446-faee231b-8635-48f3-9caa-7c78e617702a.png)

The basic installation is now complete. 

## Step 3 Activation of the game and configuration of the dedicated server

Now the Farming Simulator must be started. There should be a shortcut on the desktop, if not, it can also be started via the Windows menu. 
Errors regarding a missing GPU or similar can be ignored or closed with No/Cancel. Farming Simulator only needs to be started to be able to enter the key. 

![image](https://user-images.githubusercontent.com/13604413/159173458-691716a6-6329-45d2-a782-e191388a7041.png)

![image](https://user-images.githubusercontent.com/13604413/159173461-3b03f54d-5b97-40e3-be2a-e0ca09da41bf.png)

Now a login name and password must be set or changed/read out in the Config of the Dedicated Server, so that a login to the web interface of the Dedicated Server is possible. 
The Config is in the standard installation under 
`C:\Program Files (x86)\Farming Simulator 2022` to be found under the name `"dedicatedServer.xml"`. 
The login data can be freely customized. 

![image](https://user-images.githubusercontent.com/13604413/159173467-2341681d-a40d-44c1-bfdb-8523a716ff41.png)

## Step 4 Start Farming Simulator 2022 Dedicated Server

To start the dedicated server, `"dedicatedServer.exe"` must be executed in the same directory where `"dedicatedServer.xml"` is located.

![image](https://user-images.githubusercontent.com/13604413/159173468-5f9473f8-734d-4236-a079-2c4a83e87caf.png)

Afterwards the web interface can be opened via `https://SERVER-IP:8080`. 

![image](https://user-images.githubusercontent.com/13604413/159173472-525e9125-2011-4550-bc7c-a95fb20f6667.png)

The login is possible with the previously set/read login data from the `"dedicatedServer.xml"`. 
The further configuration is self-explanatory in the web interface and can be done with a few clicks, according to your personal wishes. 

## Step 5 Unlock ports in the firewall

The server should of course be publicly accessible to play with friends. For this purpose, the ports of the server must be enabled in the Windows firewall. The ports 10823 and 8080 must be released for the protocol TCP. 10823 is the game server port and 8080 is the webport for the webinterface, the webport has to be released only if needed, an administration can still be done only locally on the Windows server via RDP. 
How to enable ports on Windows, [we explain in this guide](https://zap-hosting.com/guides/docs/en/vserver_windows_port/). 

After the port release the server is publicly accessible, if it was started. 
