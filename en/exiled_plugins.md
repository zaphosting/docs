---
id: exiled_plugins
title: EXILED: Installing plugins on your server
description: Information on how to install plugins on your EXILED  server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Plugins Install

---


## 🔧 Plugins installation

With plugins you have the possibility to customize your server even more. Below we will explain where you can find the most popular server plugins and how to set them up. 



### Preparation

First of all, you need to download the plugins that will be installed on the server. A large selection of plugins can be found at (https://plugins.exiled.host/). During the download you will receive a **.dll** file. 


### Installation

Once the desired plugins have been downloaded, the actual installation of the plugins can be started. The setup of the plugins is done via FTP. You need a FTP client to be able to upload files to your server. If you don't know yet what FTP is and how it works, then you should have a look at the following guide: [FTP file access](https://zap-hosting.com/guides/docs/en/gameserver_ftpaccess/)

![image](https://user-images.githubusercontent.com/26007280/189888760-ff43c097-a14b-49d5-86de-ada7b917dcaa.png)

You can find the **Plugins** folder under the ``/gXXXXXX/.config/EXILED`` directory. There you can upload your selected plugins into the directory. This could look like this:

![image](https://user-images.githubusercontent.com/26007280/189888784-838b972f-1ae3-4432-979c-86bdf5f5a47f.png)

Nothing more needs to be done. This already completes the installation. Afterwards you can check in the live console if the plugin was compiled and loaded successfully. The output should look like this:

![image](https://user-images.githubusercontent.com/26007280/189888816-0230a7c6-75ae-4778-b9bc-8bd5f33c7574.png)
