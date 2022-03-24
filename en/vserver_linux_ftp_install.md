---
id: vserver_linux_ftp_install
title: vServer: FTP server installation and setup
description: Information on how to install and set up an FTP server on your vServer from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: FTP Setup
---

## How do I install the FTP server to add a user? 

To add a FTP user, you first need to install the FTP server. To do this, connect to the server once via SSH(Putty).

To install the FTP server now, enter the following **apt-get install proftpd**. You have to confirm the request with a **Y** and enter:

![image](https://user-images.githubusercontent.com/13604413/159172036-62bec6bb-d879-4c38-9f42-6289fecb6737.png)

Now we still have to adjust the config. For this we enter the following **nano /etc/proftpd/proftpd.conf** and confirm. Afterwards the config file is opened in the Nanoeditor:

![image](https://user-images.githubusercontent.com/13604413/159172041-7d137e59-47a3-4b24-b16d-196174cec581.png)

The following entries must be added: 

![image](https://user-images.githubusercontent.com/13604413/159172045-0ec6cbb8-fd4b-4f55-9850-541ccfae1173.png)

Now the FTP server must be restarted so that the changes are applied. This can be done with the following command: **service proftpd restart**

## How do I add an FTP user? 

To create the new FTP user, we first have to create an FTP group. We do this with the command **addgroup ftpuser**. This will look like this: 

![image](https://user-images.githubusercontent.com/13604413/159172048-c6200925-9547-43fe-8dc8-9cc8c7a689d1.png)

Now we can add our first FTP user with the commands: **adduser benutzerftp -shell /bin/false -home /var/www** and then **adduser benutzerftp ftpuser**.

Now we are asked to set a password: 

![image](https://user-images.githubusercontent.com/13604413/159172053-ed22f2b9-3b39-41a7-9fb2-b8c55be9043b.png)

Then we have to confirm that the entries are correct: 

![image](https://user-images.githubusercontent.com/13604413/159172057-bd4b60d8-5952-4fb3-9ffb-df4b53c61313.png)

The last step is to assign the new user to the group via **adduser benutzerftp ftpuser** :

![image](https://user-images.githubusercontent.com/13604413/159172060-9826c04e-6543-44f8-af7a-eb422b4c8891.png)

Now we can connect with our set information:

![image](https://user-images.githubusercontent.com/13604413/159172064-b2302eaa-dd1c-4c2e-b075-376f8a85f791.png)


![image](https://user-images.githubusercontent.com/13604413/159172082-8cb4721f-01ef-4dd2-b21d-1e0933199140.png)

