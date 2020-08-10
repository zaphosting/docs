---
id: vserver_windows_ftpserver
title: FTP Server Installation
sidebar_label: FTP Server Installation
---


## FTP Server with FileZilla Server under Windows

With FileZilla Server you have free software available which enables you to install your own FTP server on a Windows server. The installation and setup is clear and uncomplicated, so the whole thing is also suitable for inexperienced users.


## Download and Installation

First you download the latest version of **FileZilla Server** here: [FileZilla Server Download](https://filezilla-project.org/download.php?type=server).
You then execute the downloaded file with a double click, which starts the installation process, which will show then show you the following window: 

![](https://screensaver01.zap-hosting.com/index.php/s/ybWZmNbrLgLbMmK/preview)

There you can now select the packages to be installed. However, it is sufficient if you install the pre-selected packages there, so you simply click on **Next** and then choose the installation path:

![](https://screensaver01.zap-hosting.com/index.php/s/gATrGEJBPisNZoB/preview)

In this example the wholething will be installed to **C:\Program Files (x86)\FileZilla Server**, but you can also choose your own path. 
Then click on **Next** and in the next step as well. Finally, click on **Install** to start the installation, then you can close the whole install with a click on **Close** once its finished. 

Now the management interface of the FileZilla FTP server opens, you can leave the **Host** and **Port** unchanged, the **Password** field also remains empty. Just click on **Connect** there:

![](https://screensaver01.zap-hosting.com/index.php/s/PrWnfsPEgbE68jo/preview)

## Create a User

In order to be able to connect to your server via FTP, a corresponding user must now be created.
To do this, click on **Edit** in the menu and then on **Users**:

![](https://screensaver01.zap-hosting.com/index.php/s/86i5BZ8drqw276d/preview)


With a click on **Add** you can add new user there:

![](https://screensaver01.zap-hosting.com/index.php/s/ZyFLmKxyAgNbnKw/preview)

In this example the user is called **Testbenutzer**. Of course you can choose your own name.

### Set Password and Permissions

To set the password for the user, simply activate it by clicking on the **Password** field , and then enter the password for the user:

![](https://screensaver01.zap-hosting.com/index.php/s/H68YGRpGXcqnfZB/preview)

So that the user also has the appropriate permissions, you still have to specify which directories they can access, just click on **Shared Folders** and then click on **Add**: 

![](https://screensaver01.zap-hosting.com/index.php/s/BYiYnSJ2gmMPmTg/preview)

In this example, the user only has access to the **Documents**, directory , which you then select with a left click and click on **OK**:

![](https://screensaver01.zap-hosting.com/index.php/s/dqGsok46dFiJf9B/preview)

> ATTENTION! For security reasons, you should only ever give a user access to certain folders, for example to your game server.

You can then give the user the necessary permissions to upload, download, delete, or even delete or delete files in the selected directory:

![](https://screensaver01.zap-hosting.com/index.php/s/PHj4TEzow733pj4/preview)

You can then close the window by clicking **OK**.


## Sharing in the Windows Firewall

To enable a connection to your FTP server, the use of the FTP server in the Windows firewall must now be enabled. To do this, open the firewall settings under **Control Panel\System and Security\Windows Defender Firewall** and click on **Allow an app or feature through Windows Defender Firewall**.
In the following window you then select the application to be allowed:

![](https://screensaver01.zap-hosting.com/index.php/s/NQDpw46pzy2e2id/preview)

In this example the path is **C:\Program Files (x86)\FileZilla Server\FileZilla Server.exe**:

![](https://screensaver01.zap-hosting.com/index.php/s/Z8EE4qYMegy52tq/preview)

Then you can close the whole page with a click on **OK**. A connection to your FTP server is now possible.
