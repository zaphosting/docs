---
id: vserver_linux_ftp_install
title: FTP Setup
sidebar_label: FTP Setup
---

## How do I install the FTP server to add a user? 

To add a FTP user, you first need to install the FTP server. To do this, connect to the server once via SSH(Putty).

To install the FTP server now, enter the following **apt-get install proftpd**. You have to confirm the request with a **Y** and enter:

![](https://screensaver01.zap-hosting.com/index.php/s/3ezywWn4sictxdG/preview)

Now we still have to adjust the config. For this we enter the following **nano /etc/proftpd/proftpd.conf** and confirm. Afterwards the config file is opened in the Nanoeditor:

![](https://screensaver01.zap-hosting.com/index.php/s/HaRWdW454adBCfS/preview)

The following entries must be added: 

![](https://screensaver01.zap-hosting.com/index.php/s/Gbm33KceGnsCRxY/preview)

Now the FTP server must be restarted so that the changes are applied. This can be done with the following command: **service proftpd restart**

## How do I add an FTP user? 

To create the new FTP user, we first have to create an FTP group. We do this with the command **addgroup ftpuser**. This will look like this: 

![](https://screensaver01.zap-hosting.com/index.php/s/R9WgRJpCpPJ9Dbs/preview)

Now we can add our first FTP user with the commands: **adduser benutzerftp -shell /bin/false -home /var/www** and then **adduser benutzerftp ftpuser**.

Now we are asked to set a password: 

![](https://screensaver01.zap-hosting.com/index.php/s/mpzTn6iSQDFXyMJ/preview)

Then we have to confirm that the entries are correct: 

![](https://screensaver01.zap-hosting.com/index.php/s/CTD6Xy4HaiopLGe/preview)

The last step is to assign the new user to the group via **adduser benutzerftp ftpuser** :

![](https://screensaver01.zap-hosting.com/index.php/s/SJ6y7FWESdYYErA/preview)

Now we can connect with our set information:

![](https://screensaver01.zap-hosting.com/index.php/s/LWkkiXGq3o5nbjA/preview)









