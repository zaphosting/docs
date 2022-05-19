---
id: vserver_linux_mariadbinstall
title: VPS: Install MariaDB (MySQL) on server
descriptin: Information on how to install MariaDB (MySQL) on your VPS from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: MariaDB (MySQL) Installation
---

Below you get to know how to install a MariaDB (MySQL) Server on your Linux vServer or Rootserver. For this example Debian 10 is used as operating system, the commands may differ for other Linux distributions. If you don't know how to connect to your server via SSH, have a look here:

[Initial access (SSH)](https://zap-hosting.com/guides/docs/en/vserver_linux_ssh/)

## 🔄 Updating packages

First of all, existing packages must be updated, this can be done by using the following command: **apt update**

![image](https://user-images.githubusercontent.com/13604413/159171933-8c48ca29-b8f3-450b-980e-b0e06a8550d8.png)

This will update all packages. Afterwards you can upgrade the packages with the following command: **apt upgrade -y**


## 📥 Start the installation

The installation of MariaDB (MySQL) can be started with the following command: **apt install mariadb-server mariadb-client -y**


## ⚙️ Configuration

Once the installation is complete, type in the following command to start the configuration of the server: **mysql_secure_installation**

Now configure your MariaDB (MySQL) server and set a password for your server.

![](https://user-images.githubusercontent.com/61839701/165694493-b113409b-3f2a-41ba-8113-59f86ded31b8.png)

There you skip the input for now by pressing **Enter**.

> The user root is the main user of your MariaDB (MySQL) server!

Now you are being asked if you want to set a password for the root user, confirm this with **y** for yes.

Afterwards you have to type in the new password for the user root.


> While typing in the password, you won't be able to see it. However, this is normal and your password will still be stored. Make sure you use a secure 
> password for your root user and keep it in a safe place. 

![image](https://user-images.githubusercontent.com/13604413/159171942-82667636-b148-4248-a95d-ad3d9ed3ab47.png)

Now you will be asked if you want to remove anonymous users from your server, you should do this in any case for security reasons. Confirm this with a **y** for yes:

![image](https://user-images.githubusercontent.com/13604413/159171944-d897a99a-a0f4-421b-bfb9-92c0640f2db0.png)

In the following prompt you define if the user root is allowed to connect to the server externally. For security reasons you should also deactivate this option and confirm this therefore with **y**:

![image](https://user-images.githubusercontent.com/13604413/159171945-e7b4f9ef-1ec0-409f-ad5f-dff05f42c561.png)

In the next step you can also confirm to remove the test database provided by MariaDB (MySQL) with **y**, because it' not needed and can be easily deleted:

![image](https://user-images.githubusercontent.com/13604413/159171948-625983b8-897f-4b47-a8a8-e47cc72b90f4.png)


At the end of the configuration process you will be asked if you want to update the permissions of the database. Confirm this with **y** to activate the previously set password for the root user:

![image](https://user-images.githubusercontent.com/13604413/159171953-8a6cb526-6fac-47fd-be04-eb752f57b1a1.png)


Your MariaDB (MySQL) server is now ready for use!

![](https://user-images.githubusercontent.com/61839701/165694518-162f9567-e95e-43e8-98b2-c2450f26c975.png)
