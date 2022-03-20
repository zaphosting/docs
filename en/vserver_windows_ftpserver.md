---
id: vserver_windows_ftpserver
title: VPS: Install FTP Server on Windows Server
description: Information on how to install and set up an FTP server on your Windows VPS from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: FTP Server Installation
---


## 🖥️ FTP Server with FileZilla Server under Windows

With FileZilla Server you have free software available which enables you to install your own FTP server on a Windows server. The installation and setup is clear and uncomplicated, so the whole thing is also suitable for inexperienced users.


## 💾 Download and Installation

First you download the latest version of **FileZilla Server** here: [FileZilla Server Download](https://filezilla-project.org/download.php?type=server).
You then execute the downloaded file with a double click, which starts the installation process, which will show then show you the following window: 

![image](https://user-images.githubusercontent.com/13604413/159172969-1c0f99f5-bfdb-4044-9b1f-50a0fe1a920e.png)

There you can now select the packages to be installed. However, it is sufficient if you install the pre-selected packages there, so you simply click on **Next** and then choose the installation path:

![image](https://user-images.githubusercontent.com/13604413/159172973-37b19d92-dbf8-4397-b3e6-9b2b71e3d3a2.png)

In this example the wholething will be installed to **C:\Program Files (x86)\FileZilla Server**, but you can also choose your own path. 
Then click on **Next** and in the next step as well. Finally, click on **Install** to start the installation, then you can close the whole install with a click on **Close** once its finished. 

Now the management interface of the FileZilla FTP server opens, you can leave the **Host** and **Port** unchanged, the **Password** field also remains empty. Just click on **Connect** there:

![image](https://user-images.githubusercontent.com/13604413/159172976-a54bad3d-99f5-4c80-a93c-ea7d40a20a9f.png)

## 👨 Create a User

In order to be able to connect to your server via FTP, a corresponding user must now be created.
To do this, click on **Edit** in the menu and then on **Users**:

![image](https://user-images.githubusercontent.com/13604413/159172982-05180815-3f8c-45d6-9029-89449dc3c780.png)


With a click on **Add** you can add new user there:

![image](https://user-images.githubusercontent.com/13604413/159172984-7906789a-9bbe-41ad-a9e7-17ef45e8493b.png)

In this example the user is called **Testbenutzer**. Of course you can choose your own name.

### 🔒 Set Password and Permissions

To set the password for the user, simply activate it by clicking on the **Password** field , and then enter the password for the user:

![image](https://user-images.githubusercontent.com/13604413/159172988-8501e87a-154a-47a2-b8a5-552afc3d6cff.png)

So that the user also has the appropriate permissions, you still have to specify which directories they can access, just click on **Shared Folders** and then click on **Add**: 

![image](https://user-images.githubusercontent.com/13604413/159172994-3ec8adb3-2b2a-4ff8-b600-0294865416fb.png)

In this example, the user only has access to the **Documents**, directory , which you then select with a left click and click on **OK**:

![image](https://user-images.githubusercontent.com/13604413/159172998-9f900ab7-d16f-452e-a3c3-9c7ecaaaabb6.png)

> ATTENTION! For security reasons, you should only ever give a user access to certain folders, for example to your game server.

You can then give the user the necessary permissions to upload, download, delete, or even delete or delete files in the selected directory:

![image](https://user-images.githubusercontent.com/13604413/159172999-9161b0ac-5a06-4ba2-8316-5d656e18f0da.png)

You can then close the window by clicking **OK**.


## 🔥 Exceptions in the Windows Firewall

To enable a connection to your FTP server, the use of the FTP server in the Windows firewall must now be enabled. To do this, open the firewall settings under **Control Panel\System and Security\Windows Defender Firewall** and click on **Allow an app or feature through Windows Defender Firewall**.
In the following window you then select the application to be allowed:

![image](https://user-images.githubusercontent.com/13604413/159173002-024980dd-0d16-40a1-8316-979ceec99e7b.png)

In this example the path is **C:\Program Files (x86)\FileZilla Server\FileZilla Server.exe**:

![image](https://user-images.githubusercontent.com/13604413/159173004-60bccc27-e66d-425c-a9dc-945fb1468d40.png)

Then you can close the whole page with a click on **OK**. A connection to your FTP server is now possible.
