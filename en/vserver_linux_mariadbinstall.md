---
id: vserver_linux_mariadbinstall
title: MariaDB (MySQL) Installation
sidebar_label: MariaDB (MySQL) Installation
---

Below you get to know how to install a MariaDB (MySQL) Server on your Linux vServer or Rootserver. For this example Debian 10 is used as operating system, the commands may differ for other Linux distributions. If you don't know how to connect to your server via SSH, have a look here:

[Initial access (SSH)](https://zap-hosting.com/guides/docs/en/vserver_linux_ssh/)

## 🔄 Updating packages

First of all, existing packages must be updated, this can be done by using the following command: **apt update**

![](https://screensaver01.zap-hosting.com/index.php/s/QSZQ8Rznwn8qqX5/preview)

This will update all packages. Afterwards you can upgrade the packages with the following command: **apt upgrade -y**


## 📥 Start the installation

The installation of MariaDB (MySQL) can be started with the following command: **apt install mariadb-server mariadb-client -y**


## ⚙️ Configuration

Once the installation is complete, type in the following command to start the configuration of the server: **mysql_secure_installation**

Now configure your MariaDB (MySQL) server and set a password for your server.

![](https://screensaver01.zap-hosting.com/index.php/s/wrD9zKSP3e7YYo7/preview)

There you skip the input for now by pressing **Enter**.

> The user root is the main user of your MariaDB (MySQL) server!

Now you are being asked if you want to set a password for the root user, confirm this with **y** for yes: 

![](https://screensaver01.zap-hosting.com/index.php/s/TQLtqioF665m4e3/preview)


Afterwards you have to type in the new password for the user root.


> While typing in the password, you won't be able to see it. However, this is normal and your password will still be stored. Make sure you use a secure 
> password for your root user and keep it in a safe place. 

![](https://screensaver01.zap-hosting.com/index.php/s/P5d4YFwzom2FF57/preview)

Now you will be asked if you want to remove anonymous users from your server, you should do this in any case for security reasons. Confirm this with a **y** for yes:

![](https://screensaver01.zap-hosting.com/index.php/s/a3yq3RE9Lijnnwr/preview)

In the following prompt you define if the user root is allowed to connect to the server externally. For security reasons you should also deactivate this option and confirm this therefore with **y**:

![](https://screensaver01.zap-hosting.com/index.php/s/y6W6Ddan6dJG7Ht/preview)

In the next step you can also confirm to remove the test database provided by MariaDB (MySQL) with **y**, because it' not needed and can be easily deleted:

![](https://screensaver01.zap-hosting.com/index.php/s/AGcABcXxGLgKP9N/preview)


At the end of the configuration process you will be asked if you want to update the permissions of the database. Confirm this with **y** to activate the previously set password for the root user:

![](https://screensaver01.zap-hosting.com/index.php/s/FgqdDbFmyBQZ9Ag/preview)


Your MariaDB (MySQL) server is now ready for use!

![](https://screensaver01.zap-hosting.com/index.php/s/Z54ek7W4sXeniJE/preview)
