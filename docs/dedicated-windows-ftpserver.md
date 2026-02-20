---
id: dedicated-windows-ftpserver
title: "Setup FTP on a Windows Server - Host a Secure File Transfer Service"
description: "Discover how to set up and manage a FileZilla FTP server on Windows for secure file transfers and user access control → Learn more now"
sidebar_label: Install FTP
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

The **FTP (File Transfer Protocol)** is a network protocol used to transfer files over a TCP/IP network. The protocol was developed to allow the easy exchange of files between systems. 

With the **FileZilla Server** it is possible to set up such a FTP server on a Windows operating system. The FileZilla Server is easy to install and configure, and offers numerous features such as the ability to set up user accounts, manage access rights and transfer files.



## Preparation

### Download

Setting up an FTP server requires corresponding software. The FileZilla server software can be used as a possible solution for the Windows server operating system. The download option for this can be found here: [FileZilla server](https://filezilla-project.org/download.php?type=server).



### Installation

Once the setup file has been downloaded, you have to execute it. To do this, click on the previously downloaded file. The following window should open: ![](https://screensaver01.zap-hosting.com/index.php/s/a2DEpaR5jD28X23/preview)



There you can select the packages to be installed. However, it is sufficient if you install the pre-selected packages there, so you simply click on **Next** and then choose the installation path:

![](https://screensaver01.zap-hosting.com/index.php/s/cN7K9Cte9tXFrF2/preview)

In this example, Filezilla Server will be installed under **C:\Program Files (x86)\FileZilla Server**. However, you can also choose your own path. After the selection of the path, you must specify in which form the FTP server is supposed to be installed and started. Furthermore, the port can be determined and an administrator password must be specified.



![](https://screensaver01.zap-hosting.com/index.php/s/WopFXcW3teFAyJK/preview)

Afterwards you click on **Next** as well and in the following step. At the end click on **Install** to start the installation. The administration interface of the FileZilla FTP server will now open. Click on the button **Connect to FileZilla FTP Server**.

A window should pop up where you see the fields Host, Port and Password. You can leave the first two fields unchanged and enter your defined administrator password from the FTP server. After that you establish the connection by clicking on the **Ok** button.



## Configuration

### User creation

To be able to connect to your server via FTP, you have to create a user. 
Click on **Server** in the menu above and then on **Configure**.

![](https://screensaver01.zap-hosting.com/index.php/s/C5WLC8Lp8CjTjQg/preview)

You can then add a new user under the Users menu option by simply clicking **Add**:

![](https://screensaver01.zap-hosting.com/index.php/s/dbCS5yJfwqry8Dq/preview)

In this example, the user name is **YourUserName**. Here you can of course choose your own username.



### Password and Permissions

Now that the user has been created, the access and the access permissions must be configured. To do this, the user is activated and password options are configured in the **General** category under **Credentials**. We strongly recommend using a password for security reasons. Choose **Require a password to log in** and set your desired password.

![](https://screensaver01.zap-hosting.com/index.php/s/z78wpcFbYEAJYeB/preview)

To ensure that the user has the appropriate permissions, you must specify which directories the user is allowed to access by clicking **Add** on mount points. A virtual and a native path must be specified. In our example we define that the C hard disk is listed under \.

![](https://screensaver01.zap-hosting.com/index.php/s/iqQrjGByHpkBcJF/preview)

To the right you will find the option **Permissions**, which allows you to set the access rights to the specified path. If you want to be able to read and edit the data, it is recommended to set it to **Read+Write**.

::: danger
For security reasons, you should only provide a user with access to certain folders.
:::

You can now apply and confirm the changes you have made by clicking on the **Apply** button. 



## Windows Firewall Exceptions 

To enable a connection to your FTP server, the use of the FTP server in the Windows firewall must now be enabled. To do this, open the firewall settings under **Control Panel\System and Security\Windows Defender Firewall** and click on **Allow an app or feature through Windows Defender Firewall**.
In the following window you then select the application to be allowed:

![](https://screensaver01.zap-hosting.com/index.php/s/xHwQzCKokHTn424/preview)

In this example the path is **C:\Program Files (x86)\FileZilla Server\FileZilla Server.exe**:

![](https://screensaver01.zap-hosting.com/index.php/s/Laz3HFb7GrLBY9w/preview)

After that you can close the process with a click on **OK**, a connection to your FTP server is now possible.





## Conclusion

Congratulations, you have successfully installed the FTP server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂


