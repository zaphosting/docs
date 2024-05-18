---
id: dedicated-windows-ftpserver
title: "Dedicated Server: Installation of FTP"
description: Information on how to install and set up an FTP server on your Windows Dedicated Server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Install FTP
---



## Introduction

The **FTP (File Transfer Protocol)** is a network protocol used to transfer files over a TCP/IP network. The protocol was developed to allow the easy exchange of files between systems. 

With the **FileZilla Server** it is possible to set up such a FTP server on a Windows operating system. The FileZilla Server is easy to install and configure, and offers numerous features such as the ability to set up user accounts, manage access rights and transfer files.



## Preperation

### Download

Setting up an FTP server requires corresponding software. The FileZilla server software can be used as a possible solution for the Windows server operating system. The download option for this can be found here: [FileZilla server](https://filezilla-project.org/download.php?type=server).



### Installation

Once the setup file has been downloaded, you have to execute it. To do this, click on the previously downloaded file. The following window should open: ![image](https://user-images.githubusercontent.com/26007280/190911353-3b3fc815-f7ed-4df8-9303-8d639ff9ff2b.png)



There you can select the packages to be installed. However, it is sufficient if you install the pre-selected packages there, so you simply click on **Next** and then choose the installation path:

![image](https://user-images.githubusercontent.com/26007280/190911361-b3b5fc61-8648-4378-a920-d7faa8118fc3.png)

In this example, Filezilla Server will be installed under **C:\Program Files (x86)\FileZilla Server**. However, you can also choose your own path. After the selection of the path, you must specify in which form the FTP server is supposed to be installed and started. Furthermore, the port can be determined and an administrator password must be specified.



![image](https://user-images.githubusercontent.com/26007280/190911700-52fd9613-70ac-413c-a171-b6d581ddd622.png)

Afterwards you click on **Next** as well and in the following step. At the end click on **Install** to start the installation. The administration interface of the FileZilla FTP server will now open. Click on the button **Connect to FileZilla FTP Server**.

A window should pop up where you see the fields Host, Port and Password. You can leave the first two fields unchanged and enter your defined administrator password from the FTP server. After that you establish the connection by clicking on the **Ok** button.



## Configuration

### User creation

To be able to connect to your server via FTP, you have to create a user. 
Click on **Server** in the menu above and then on **Configure**.

![image](https://user-images.githubusercontent.com/26007280/190913231-5cda42fb-c47a-4b92-a32d-dd3eb1d23b61.png)

You can then add a new user under the Users menu option by simply clicking **Add**:

![image](https://user-images.githubusercontent.com/26007280/190913620-936d4430-51a7-44c9-9023-ad4087c01599.png)

In this example, the user name is **YourUserName**. Here you can of course choose your own username.



### Password and Permissions

Now that the user has been created, the access and the access permissions must be configured. To do this, the user is activated and password options are configured in the **General** category under **Credentials**. We strongly recommend using a password for security reasons. Choose **Require a password to log in** and set your desired password.

![image](https://user-images.githubusercontent.com/26007280/190912515-a4952bc3-b4ce-45e6-ba33-42b358f01074.png)

To ensure that the user has the appropriate permissions, you must specify which directories the user is allowed to access by clicking **Add** on mount points. A virtual and a native path must be specified. In our example we define that the C hard disk is listed under \.

![image](https://user-images.githubusercontent.com/26007280/190912711-90f6c4b6-35de-4339-b2a0-d3aa1d0ed8fd.png)

To the right you will find the option **Permissions**, which allows you to set the access rights to the specified path. If you want to be able to read and edit the data, it is recommended to set it to **Read+Write**.

::: danger
For security reasons, you should only provide a user with access to certain folders.
:::

You can now apply and confirm the changes you have made by clicking on the **Apply** button. 



## Windows Firewall Exceptions 

To enable a connection to your FTP server, the use of the FTP server in the Windows firewall must now be enabled. To do this, open the firewall settings under **Control Panel\System and Security\Windows Defender Firewall** and click on **Allow an app or feature through Windows Defender Firewall**.
In the following window you then select the application to be allowed:

![image](https://user-images.githubusercontent.com/13604413/159173002-024980dd-0d16-40a1-8316-979ceec99e7b.png)

In this example the path is **C:\Program Files (x86)\FileZilla Server\FileZilla Server.exe**:

![image](https://user-images.githubusercontent.com/26007280/190912805-1a972dec-1e60-425a-806f-4c7dad3663dc.png)

After that you can close the process with a click on **OK**, a connection to your FTP server is now possible.