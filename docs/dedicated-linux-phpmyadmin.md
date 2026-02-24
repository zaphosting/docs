---
id: dedicated-linux-phpmyadmin
title: "Setup phpMyAdmin on a Linux Server - Manage Your Databases via Web Interface"
description: "Discover how to manage MySQL and MariaDB databases easily with phpMyAdmin’s web interface for efficient database administration → Learn more now"
sidebar_label: Install phpMyAdmin
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

phpMyAdmin is a free, web-based tool for managing MySQL and MariaDB databases. It provides a user-friendly interface that allows users to create, edit, manage and delete databases without having to enter SQL commands manually.



## Preparation

Before starting the installation, make sure that the system is up to date. Pending updates and upgrades can be carried out as follows:

```
sudo apt update -y
sudo apt upgrade -y
```

You must also ensure that you already have PHP installed on your system. This is essential for the use of phpMyAdmin. To find out how to install PHP, please have a look at our [Install PHP](vserver-linux-php.md) guide.

:::warning Missing PHP packages
Wenn die notwendigen PHP Pakete fehlen, dann können die PHP-Dateien von phpMyAdmin nicht korrekt vearbeitet und dargestellt werden. 
:::

## Installation

If the preparation has been completed, the installation of the phpMyAdmin interface can now begin. To do this, first open the installation directory in which phpMyAdmin should be installed. 

Navigate to the corresponding directory with the command `cd /usr/share`. The latest phpMyAdmin version should then be downloaded to the installation directory using `wget`:

```
wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.zip -O phpmyadmin.zip
```

:::warning
If the `wget` service is not found, the corresponding service can be installed with the command `sudo apt install wget -y`. 
:::

As soon as the download is complete, the downloaded ZIP file can be unpacked with the following command: 

```
unzip phpmyadmin.zip
```
:::warning
If the `unzip` service is not found, the corresponding service can be installed with the command `sudo apt install unzip -y`. 
:::

The unpacked archive can now be renamed to a simpler name, the ZIP file removed and the necessary permissions set: 

```
mv phpMyAdmin-*-all-languages phpmyadmin
rm phpmyadmin.zip; chmod -R 0755 phpmyadmin
```

## Configuration

###  Web server configuration file

Now phpMyAdmin must be added to the web server configuration. To do this, use `nano /etc/apache2/conf-available/phpmyadmin.conf` to create a new Virtual Host configuration file and fill it with the following content:

```
# phpMyAdmin Apache configuration

Alias /phpmyadmin /usr/share/phpmyadmin

<Directory /usr/share/phpmyadmin>
    Options SymLinksIfOwnerMatch
    DirectoryIndex index.php
</Directory>

# Disallow web access for security to directories that don't need it
<Directory /usr/share/phpmyadmin/templates>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/libraries>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/setup/lib>
    Require all denied
</Directory>
```

Once the Apach2-phpMyAdmin-Config has been filled with the content, it can be saved and closed with `CTRL+X`, then press `Y` and confirm with `Enter`.

The newly created virtual host configuration file must then be activated and loaded. To do this, execute the following commands:

```
a2enconf phpmyadmin
systemctl reload apache2
```

### Creating required temporary directory

To ensure that phpMyAdmin works properly, a temporary directory must be created and the required permissions set. You can do this with the following commands: 

```
mkdir /usr/share/phpmyadmin/tmp/
chown -R www-data:www-data /usr/share/phpmyadmin/tmp/
```

## Conclusion

Congratulations, you have successfully installed and configured phpMyAdmin. You can access the web interface using the IP address and the path of your server (http://IP-Address/phpmyadmin).  For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂


