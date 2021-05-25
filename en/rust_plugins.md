---
id: rust_plugins
title: Rust: Installing plugins on your server
description: Information on how to install plugins on your Rust server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Plugins Install

---



## Plugins installation

With plugins you have the possibility to customize your server even more. Below we will explain where you can find the most popular server plugins and how to set them up. 

![img](https://screensaver01.zap-hosting.com/index.php/s/X4eRi9rjjPMF9Fg/preview)



### Preparation

First of all, you need to download the plugins that you want to install on the server. A large selection of plugins can be found at [umod.org (formerly OXIDE)](https://umod.org/plugins). During the download you will get a **.cs** file.  

![image-20201222180543420](C:\Users\fgalz\AppData\Roaming\Typora\typora-user-images\image-20201222180543420.png)



### Installation

Once the desired plugins have been downloaded, the actual installation of the plugins can be started. The setup of the plugins is done via FTP. You need a FTP client to be able to upload files to your server. If you don't know yet what FTP is and how it works, then you should have a look at the following guide: [FTP file access](https://zap-hosting.com/guides/docs/en/gameserver_ftpaccess/)

![img](https://screensaver01.zap-hosting.com/index.php/s/3y9xNS7CHi64427/preview)

You can find the **Plugins** folder under the ``/gXXXXXX/rust-oxide/oxide`` directory. There you can upload your selected plugins into the directory. This could look like this:

![img](https://screensaver01.zap-hosting.com/index.php/s/cBPsqnG7GtKsidH/preview)

Nothing more needs to be done. This already completes the installation. Afterwards you can check in the live console if the plugin was compiled and loaded successfully. The output should look like this:

```
AdminAutoTeams and AdminLogger were compiled successfully in 0ms
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)

Loaded plugin Admin Logger v2.3.4 by AK
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)
```

