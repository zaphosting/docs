---
id: exiled-plugins
title: Installing plugins on your server
description: Information on how to install plugins on your EXILED  server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Plugins Install

---

## Plugins installation

With plugins you have the possibility to customize your server even more. Below we will explain where you can find the most popular server plugins and how to set them up. 

### Preparation

First of all, you need to download the plugins that will be installed on the server. A large selection of EXILED Plugins can be found on their own github (https://github.com/Exiled-Team) and once selected the plugin repo, a releases section will appear on the side to which you will be brought to a download page, instructions on how to do this will be shown below.

### Downloading a plugin
Plugins can be downloaded from many sources for your server. However these are only recognised as the safest options. Please be careful with which plugins you install onto your game server - Always check the source of the plugin by looking for its developers and what the plugin actually does.

## Download
To download a plugin via the github you will need to head to the [EXILED Github page](https://github.com/Exiled-Team) as shown below and select a plugin-repo.
![image](https://user-images.githubusercontent.com/17176877/219128457-a7a4aa64-5b7c-4778-9602-fa1286150b51.png)

Once you have found the plugin-repo you wish to download a releases section will appear on the right side.
![image](https://user-images.githubusercontent.com/17176877/219128727-89f515af-394d-44d6-beb5-3ee6bed1a90b.png)

Once you selected the release section it will provide a **.dll** resource, once clicking on this a download will begin.
![image](https://user-images.githubusercontent.com/17176877/219129751-2303885c-f09f-4513-ad92-699d6bc49546.png)

And that's it you can now follow the Installation part of this document to learn how to install the **.dll** onto your server.

### Installation

Once the desired plugins have been downloaded, the actual installation of the plugins can be started. The setup of the plugins is done via FTP. You need a FTP client to be able to upload files to your server. If you don't know yet what FTP is and how it works, then you should have a look at the following guide: [FTP file access](gameserver-ftpaccess.md)

![image](https://user-images.githubusercontent.com/26007280/189888760-ff43c097-a14b-49d5-86de-ada7b917dcaa.png)

You can find the **Plugins** folder under the ``/gXXXXXX/.config/EXILED`` directory. There you can upload your selected plugins into the directory. This could look like this:

![image](https://user-images.githubusercontent.com/26007280/189888784-838b972f-1ae3-4432-979c-86bdf5f5a47f.png)

Nothing more needs to be done. This already completes the installation. Afterwards you can check in the live console if the plugin was compiled and loaded successfully. The output should look like this:

![image](https://user-images.githubusercontent.com/26007280/189888816-0230a7c6-75ae-4778-b9bc-8bd5f33c7574.png)
