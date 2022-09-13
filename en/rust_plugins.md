---
id: rust_plugins
title: Rust: Installing plugins on your server
description: Information on how to install plugins on your Rust server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Plugins Install

---



## 🔧 Plugins installation

With plugins you have the possibility to customize your server even more. Below we will explain where you can find the most popular server plugins and how to set them up. 




### Preparation

First of all, you need to download the plugins that you want to install on the server. A large selection of plugins can be found at [umod.org (formerly OXIDE)](https://umod.org/plugins). During the download you will get a **.cs** file.  

![image](https://user-images.githubusercontent.com/26007280/189931606-5be034d4-5516-47ab-a12e-5553d7c1afe7.png)



### Installation

Once the desired plugins have been downloaded, the actual installation of the plugins can be started. The setup of the plugins is done via FTP. You need a FTP client to be able to upload files to your server. If you don't know yet what FTP is and how it works, then you should have a look at the following guide: [FTP file access](https://zap-hosting.com/guides/docs/en/gameserver_ftpaccess/)

![image](https://user-images.githubusercontent.com/26007280/189931629-87c49504-e9df-45a5-85de-ccf6eb565bdf.png)

You can find the **Plugins** folder under the ``/gXXXXXX/rust-oxide/oxide`` directory. There you can upload your selected plugins into the directory. This could look like this:

![image](https://user-images.githubusercontent.com/26007280/189931670-4c0e05bd-54a6-4ac8-aabc-88ef100d91af.png)

Nothing more needs to be done. This already completes the installation. Afterwards you can check in the live console if the plugin was compiled and loaded successfully. The output should look like this:

```
AdminAutoTeams and AdminLogger were compiled successfully in 0ms
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)

Loaded plugin Admin Logger v2.3.4 by AK
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)
```

