---
id: dedicated_linux_debian
title: Install Debian
sidebar_label: Install Debian
---
> In this example, the installation of Debian 10 is performed

## 📋 Preparations
In your ZAP interface, select the desired ISO of Debian and let the server boot with the ISO until it is in the setup process.

> Navigation in the setup process is done with TAB, Space and Enter.
> TAB = switch between items, Space = highlight, Enter = confirm

***

## ⌚ The setup
When the ISO is successfully loaded, the server is in the setup process.

![](https://screensaver01.zap-hosting.com/index.php/s/xBid8JHQYrnEAHw/preview)

In this example, we will go through the installation process using the "classic" install.

***

![](https://screensaver01.zap-hosting.com/index.php/s/mpNtF7dPnyGSaXW/preview)

Select your desired language in which the installation wizard will be displayed.
Keep in mind that this language will later affect the installed system in the end.

***

![](https://screensaver01.zap-hosting.com/index.php/s/H9oKPoij5PZGzt4/preview)

Our desired location is not in the first selection page, so we go to the next page with "Other".

***

![](https://screensaver01.zap-hosting.com/index.php/s/6MqRL3q86ZQKLnc/preview)

In our example we select the "Europe" option.

***

![](https://screensaver01.zap-hosting.com/index.php/s/eF4LZZcEtA37NTo/preview)

Depending on the desired time zone, we choose the german time zone in this example.

***

![](https://screensaver01.zap-hosting.com/index.php/s/P3yYYppRS9WzXmX/preview)

We choose United States as locale.

***

![](https://screensaver01.zap-hosting.com/index.php/s/SQYySTyANQSmCyn/preview)

In our case we choose the German keyboard layout which is the QWERTZ layout.
If you're from America the default layout would by QWERTY

> Your server is now preparing some components which are necessary for the installation, this can take a few minutes.

### 🔧 Configurations

![](https://screensaver01.zap-hosting.com/index.php/s/A498pCB6wYoxq4q/preview)

Your server configures its network interface automatically by using dhcp.
Select `eno1` this is the default network adapter of your ZAP Dedicated Server.

***

![](https://screensaver01.zap-hosting.com/index.php/s/7F8qJHEBAnDby8i/preview)

The hostname can be modified if you'd like to, but does not need to be changed.

***

![](https://screensaver01.zap-hosting.com/index.php/s/kQQfeLFB8j9GMys/preview)

The domain name does not have to be changed either.

***

![](https://screensaver01.zap-hosting.com/index.php/s/HA9dxxopPrMKxJr/preview)

Here you have to set the password for your "root" account, make a note of the chosen password.

***

![](https://screensaver01.zap-hosting.com/index.php/s/baisp9KTsWSrg75/preview)

To confirm the password you have to enter it again.

***

> The installation wizard asks you to create a second user account

![](https://screensaver01.zap-hosting.com/index.php/s/WW5bySQkwXpggNm/preview)

Now enter the name of the owner for a normal user account, you can of course freely choose what you'd like to enter here.

> You can of course use the "root" account in the end

***

![](https://screensaver01.zap-hosting.com/index.php/s/JjAdtZCpDjCXqw7/preview)

Now enter the username of the account.
Also choose a password of your choice and confirm it again.

Your server will now prepare the next installation steps.

### 💾 Partitioning

![](https://screensaver01.zap-hosting.com/index.php/s/k4NCSf4fX4LPC5s/preview)

You have now the possibility to create partitions or alternatively to use the whole ssd as 1 partition.
If you don't want to change anything on the partition just choose "Guided - Use entire disk".

***

![](https://screensaver01.zap-hosting.com/index.php/s/JKmKXDNKgSWsq7e/preview)

Select the ssd which is installed in your server.

***

![](https://screensaver01.zap-hosting.com/index.php/s/Py2N7bjAiGQDCJr/preview)

Basically it is fine if the complete structure is stored on one partition.

***

![](https://screensaver01.zap-hosting.com/index.php/s/H9NnqCEj4SecmwA/preview)

We confirm the configuration with "Finish partitioning and write changes to disk".

> If there are old partitions on your ssd we confirm the overwrite with "Yes".

Your server now performs the partitioning and prepares the installation of the system.

### 💻 Installation of the operating system

![](https://screensaver01.zap-hosting.com/index.php/s/r6bSFtZHxxQdTdc/preview)

If you want to include other installation media, for example for certain packages, this could be done now.
Normally, however, you can download all packages conveniently afterwards via the package manager (apt).

***

![](https://screensaver01.zap-hosting.com/index.php/s/mSAwskDZ34NYAoS/preview)

Our dedicated server is located in Germany, so we also choose the german mirror location to achieve the best possible download rates.

***

![](https://screensaver01.zap-hosting.com/index.php/s/nyzFW3L6grRjqMJ/preview)

Basically we recommend to use the default Debian repository.

***

![](https://screensaver01.zap-hosting.com/index.php/s/XwfL5FEXeo69Z43/preview)

If you'd like to use a HTTP proxy, you could enter the data. (this is not required)

***

![](https://screensaver01.zap-hosting.com/index.php/s/y6LogDT7qjcoXkT/preview)

The system wants to collect anonymized statistics, this can be refused or confirmed.

***

![](https://screensaver01.zap-hosting.com/index.php/s/xf7FrndLM7ipBtC/preview)

Now select the packages you want to install:

* Debian desktop enviroment
Would create a graphical user interface on your server, but in this example we only use the shell level of the server.

* SSH server
Is needed to connect to PuTTY for example.

* standard system utilities
Is needed to provide a number of basic packages.

The selection of the different packages is done by TAB and arrow keys. Packages are selected or deselected with the space bar.
When you are satisfied with your selection press TAB until you reach <Continue> and confirm with Enter.

***

![](https://screensaver01.zap-hosting.com/index.php/s/CimtpY6czxYLK7D/preview)

Confirm that this operating system is the only one on the current server with `Yes`.

***

![](https://screensaver01.zap-hosting.com/index.php/s/6nzySkt8rCS5KiJ/preview)

As storage location we choose the default location on our ssd.

> 🎉 The installation of your Debian system is now finished.

Open "Virtual Media" in your iLO and press "Eject Media" to remove the ISO from the system.

![](https://screensaver01.zap-hosting.com/index.php/s/iD7FzJLcjtbzx8c/preview)

When this is done successfully, we select Continue, the server will now perform a reboot.

![](https://screensaver01.zap-hosting.com/index.php/s/EFo6yZCRaMQXFek/preview)

### 🔑 Enable SSH Login

Once the reboot of your server is done and the installation was successful, you will now be prompted to login.

![](https://screensaver01.zap-hosting.com/index.php/s/ywxgaSb5rQSNmZM/preview)

Of course you also want to be able to manage your server through SSH i.e. PuTTY for example, so we still need to enable the login for that:

![](https://screensaver01.zap-hosting.com/index.php/s/G9QWBR9eb8yE6gP/preview)

Open with nano the configuration file of your SSH service `nano /etc/ssh/sshd_config`.

![](https://screensaver01.zap-hosting.com/index.php/s/jAJbexQBJ4XBzNP/preview)

Search for `#PermitRootLogin no` and change it to `PermitRootLogin yes`.

Now press `STRG + X` and confirm your changes with `Y`.

After that you have to restart the SSH service, by typing `service ssh restart`.

Your SSH login is now active and you can connect via PuTTY for example.
Enter the IP address of your server, which you see in your zap dashboard and use the previously defined credentials.

![](https://screensaver01.zap-hosting.com/index.php/s/KPkMeEaqcABz9RB/preview)

> If you have any further questions or problems, our support is happy to assist you!
