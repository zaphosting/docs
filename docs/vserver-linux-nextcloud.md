---
id: vserver-linux-nextcloud
title: "Setup Nextcloud on a Linux Server - Build Your Private Cloud Storage"
description: "Discover how to set up a high-performance Nextcloud server on Linux for optimal cloud hosting → Learn more now"
sidebar_label: Install Nextcloud
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Nextcloud is an open source cloud solution and fork of Owncloud, which was founded in 2016 by former Owncloud founder Frank Kalitschek.

![](https://screensaver01.zap-hosting.com/index.php/s/kCndbKaFAaktERk/preview)

In order to achieve optimal performance, stability and functionality, the following setup is recommended for hosting a Nextcloud server. The Nextcloud server is not compatible with Windows and MacOS. At least not without any further virtualization or similar workarounds.

<InlineVoucher />

## Preparation

The following requirements are recommended by the developers and are based on our own experience. You may face issues if you do not meet these prerequisites.

#### Hardware

| Components     | Minimum                | Recommended                 |
| -------------- | ---------------------- | --------------------------- |
| CPU            | 2x 1 GHz               | 4x 2+ GHz                   |
| RAM            | 512 MB                 | 4+ GB                       |
| Storage        | 10 GB                  | 50+ GB                      |
| Bandwidth      | 100 mbit/s (up & down) | 500mbit/s (up & down) Recommended if several users are supposed to use the cloud |

#### Software

| Platform         | Options                                                      |
| ---------------- | ------------------------------------------------------------ |
| Operating System | Ubuntu (14.04, 16.04, 18.04), Debian(8,9,10), CentOS 6.5/7   |
| Database         | MySQL or MariaDB 5.5+ (recommended),  SQLite (only recommended for testing and minimal-instances) |
| Web server       | Apache 2.4 with `mod_php` or `php-fpm` (recommended)         |
| PHP              | 5.6, 7.0 (recommended), 7.1 (recommended), 7.2               |

A connection has to be established via a SSH client in order to install the cloud on a Linux server. In case you are not sure how to use SSH, here is a guide how to do so: [Initial access (SSH)](vserver-linux-ssh.md)

Once the connection is established, you can start to install the necessary packages that are required for the actual installation of Nextcloud. This includes the installation of a web server as well as PHP.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Debian" label="Debian" default>

<br/>

**Apache (Web server)**

🗄️ Debian 8/9/10:
```
sudo apt update && sudo apt -y upgrade
sudo apt -y install apache2
```

**PHP (Hypertext Preprocessor)**

🗄️ Debian 8:
```
# Step 1: Adding the PHP 7.3 PPA repository
sudo apt -y install lsb-release apt-transport-https ca-certificates 
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php7.3.list

# Step 2: Install PHP 7.3
sudo apt -y install php7.3

# Step 3: Install PHP 7.3 extensions
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Debian 9:
```
# Step 1: Adding the PHP 7.3 PPA repository
sudo apt -y install lsb-release apt-transport-https ca-certificates 
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php7.3.list

# Step 2: Install PHP 7.3
sudo apt -y install php7.3

# Step 3: Install PHP 7.3 extensions
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Debian 10:
```
# Step 1: Install PHP 7.3
sudo apt -y install php php-common

# Step 2: Install PHP 7.3 extensions
sudo apt -y install php-cli php-fpm php-json php-pdo php-mysql php-zip php-gd  php-mbstring php-curl php-xml php-pear php-bcmath
```

Check PHP version for functionality
```
php -v
```

</TabItem>
<TabItem value="Ubuntu" label="Ubuntu">

<br/>

**Apache (Web server)**

🗄️ Ubuntu 16.X/18.X/19.X:
```
sudo apt update && sudo apt -y upgrade
sudo apt-get -y install apache2
```

**PHP (Hypertext Preprocessor)**

🗄️ Ubuntu 16.X:
```
# Step 1: Add PHP 7.3 PPA
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# Step 2: Install PHP 7.3
sudo apt-get update
sudo apt-get install -y php7.3

# Step 3: Install PHP 7.3 extensions
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Ubuntu 18.X:
```
# Step 1: Add PHP 7.3 PPA
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# Step 2: Install PHP 7.3
sudo apt-get update
sudo apt-get install -y php7.3

# Step 3: Install PHP 7.3 extensions
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Ubuntu 19.X:
```
# Step 1: Add PHP 7.3 PPA
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# Step 2: Install PHP 7.3
sudo apt-get update
sudo apt-get install -y php7.3

# Step 3: Install PHP 7.3 extensions
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

Check PHP version for functionality
```
php -v
```


</TabItem>
<TabItem value="CentOS" label="CentOS">
<br/>

**Apache (Web server)**

🗄️ CentOS 6:
```
sudo yum -y update
sudo yum -y install httpd
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
sudo systemctl start httpd
sudo systemctl enable httpd.service
```

🗄️ CentOS 7:
```
sudo yum -y update
sudo yum -y install httpd
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
sudo systemctl start httpd
sudo systemctl enable httpd
```

🗄️ CentOS 8:
```
sudo yum -y update
sudo yum -y install httpd
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
sudo systemctl start httpd
sudo systemctl enable httpd
```

**PHP (Hypertext Preprocessor)**

🗄️ CentOS 6:
```
# Step 1: Set up Yum repository
yum install epel-release
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm

# Step 2: Install PHP 7.3
yum --enablerepo=remi-php73 install php

# Step 3: Install PHP 7.3 extensions
yum --enablerepo=remi-php73 install php-xml php-soap php-xmlrpc php-mbstring php-json php-gd php-mcrypt
```

🗄️ CentOS 7:
```
# Step 1: Set up Yum repository
yum install epel-release
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-7.rpm

# Step 2: Install PHP 7.3
yum --enablerepo=remi-php73 install php

# Step 3: Install PHP 7.3 extensions
yum --enablerepo=remi-php73 install php-xml php-soap php-xmlrpc php-mbstring php-json php-gd php-mcrypt
```

🗄️ CentOS 8:
```
# Step 1: Set up Yum repository
dnf install dnf-utils http://rpms.remirepo.net/enterprise/remi-release-8.rpm

# Step 2: Install PHP 7.3
dnf module reset php
dnf module enable php:remi-7.3
dnf install php
```

Check PHP version for functionality
```
php -v
```

</TabItem>
</Tabs>

The next step is to define a database type to store the relevant information. There are several options:


<Tabs>

<TabItem value="MariaDB" label="MariaDB" default>

<br/>
If you have decided to use this type of database, then you have to follow these steps:

Package installation:
```
sudo apt-get install mariadb-server php-mysql
```

During the installation you will be asked to set a root password. If there is no password request, then the default password is blank. This is not secure and should therefore be changed immediately afterwards! 

The next step is to connect to the database server and create the required database:

```sql
mysql -u root -p
CREATE DATABASE nextcloud;
```

Afterwards a user has to be created, which gets access to the Nextcloud database. 

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'YOUR_PASSWORD_HERE';
```

:::info
Don't skip this step by using the root user. This is not safe and can put your data at risk!
:::

The last step is to assign the permissions to the new user:

```SQL
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nc_user'@'localhost';
FLUSH PRIVILEGES;
```

Once you are done, you can press Ctrl-D to exit the database and continue with the next steps.

</TabItem>
<TabItem value="MySQL" label="MySQL">

<br/>
If you have decided to use this type of database, then you have to follow these steps:

Package installation:
```
sudo apt-get install mysql-server php-mysql
```

During the installation you will be asked to set a root password. If there is no password request, then the default password is blank. This is not secure and should therefore be changed immediately afterwards! 

The next step is to connect to the database server and create the required database:

```sql
mysql -u root -p
CREATE DATABASE nextcloud;
```

Afterwards a user has to be created, which gets access to the Nextcloud database. 

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'YOUR_PASSWORD_HERE';
```

:::info
Don't skip this step by using the root user.This is not safe and can put your data at risk!
:::


The last step is to assign the permissions to the new user:

```SQL
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nc_user'@'localhost';
FLUSH PRIVILEGES;
```

Once you are done, you can press Ctrl-D to exit the database and continue with the next steps.

</TabItem>
<TabItem value="PostgreSQL" label="PostgreSQL">
<br/>
If you have decided to use this type of database, then you have to follow these steps:

Package installation:
```
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
```

During the installation you will be asked to set a root password. If there is no password request, then the default password is blank. This is not secure and should therefore be changed immediately afterwards! 

The next step is to connect to the database server and create the required database:

```sql
sudo -u postgres psql
CREATE DATABASE nextcloud;
```

Afterwards a user has to be created, which gets access to the Nextcloud database. 

```sql
CREATE USER nextcloud with encrypted password 'YOUR_PASSWORD_HERE';
```

:::info
Don't skip this step by using the root user.This is not safe and can put your data at risk!
:::

The last step is to assign the permissions to the new user:

```SQL
grant all privileges on database mydb to myuser;
FLUSH PRIVILEGES;
```

Once you are done, you can press Ctrl-D to exit the database. Afterwards you can modify the PostgreSQL database either via the web installer or via the **config.php** Config.

```
<?php
$AUTOCONFIG = array(
  "dbtype"        => "pgsql",
  "dbname"        => "nextcloud",
  "dbuser"        => "username",
  "dbpass"        => "password",
  "dbhost"        => "localhost",
  "dbtableprefix" => "",
);
```

</TabItem>
<TabItem value="SQLite" label="SQLite">

<br/>
If you have decided to use this type of database, then you have to follow these steps:

Package installation:
```
apt-get install sqlite3 php-sqlite3
```

Create new SQLite 3 database
```
sqlite3 DatabaseName.db
```

After that, the SQLite 3 database can be modified either via the web installer or via the **config.php** Config.
```
<?php
$AUTOCONFIG = array(
  "dbtype"        => "sqlite",
  "dbname"        => "nextcloud",
  "dbtableprefix" => "",
);
```
</TabItem>
</Tabs>

## Installation

Now the actual installation of Nextcloud can be started. The software needs to be downloaded and unpacked:
```
cd /var/www/
wget https://download.nextcloud.com/server/releases/latest.zip
apt-get install unzip
unzip latest.zip
chown -R www-data:www-data nextcloud
rm latest.zip
```

Once this step is finished, it's time to run the installation script. Access is possible via the browser via the following URL:

:::info
**http://domain.tld/nextcloud/** 
:::

The installation script configuration appears, in which a root user is created and database information defined:

![](https://screensaver01.zap-hosting.com/index.php/s/79kgamkS36Dgi9x/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/qJs3Sd8TiYAg6mB/preview)


## Security and safety

**Setup Warnings**

![](https://screensaver01.zap-hosting.com/index.php/s/nat3Fekj6MRP8Nw/preview)



**Data Directory**

It is strongly recommended to place the data directory outside of the web root directory (i.e. outside of /var/www). The easiest way to do this is with a new installation. The directory can be defined during the setup. However, the directory must first be created and the corresponding permissions have to be set. The data could for example be stored in a directory called Cloud in the home directory.


```
mkdir /home/cloud/
chown -R www-data:www-data /home/cloud/
```



**HTTPS via SSL certificate (Let's Encrypt)** 

A good cloud solution should only be accessible via SSL connection. Without SSL encryption, data and information is transferred in plain text. Such information can easily and quickly be intercepted and read without encryption.

```
<IfModule mod_ssl.c>
<VirtualHost *:443>
 DocumentRoot "/var/www/nextcloud"
 ServerName domain.tld

 ErrorLog ${APACHE_LOG_DIR}/error.log
 CustomLog ${APACHE_LOG_DIR}/access.log combined

<Directory /var/www/nextcloud/>
 Options +FollowSymlinks
 AllowOverride All

 <IfModule mod_dav.c>
 Dav off
 </IfModule>

 SetEnv HOME /var/www/nextcloud
 SetEnv HTTP_HOME /var/www/nextcloud
 Satisfy Any

</Directory>

SSLCertificateFile /etc/letsencrypt/live/domain.tld/fullchain.pem
SSLCertificateKeyFile /etc/letsencrypt/live/domain.tld/privkey.pem
</VirtualHost>
</IfModule>

<IfModule mod_headers.c>
     Header always set Strict-Transport-Security "max-age=15768000; preload"
 </IfModule>
```



Furthermore, all HTTP traffic should be redirected to HTTPS by using a permanent redirection with status code 301. This can be achieved by using Apache with a configuration like the following Apache VirtualHosts configuration:

```
<VirtualHost *:80>
   ServerName domain.tld
   Redirect permanent / https://domain.tld/
</VirtualHost>
```


## Manage Nextcloud

Access to Nextcloud is possible via the browser, as well as via the smartphone and computer using the app. The download sources can be found here: https://nextcloud.com/install/#install-clients

![](https://screensaver01.zap-hosting.com/index.php/s/aw6qpNE7TkwQeaP/preview)

Under settings you can adjust a few more options even after the setup and view important information like logs, activities. This includes additional security settings (two-factor authentication, encryption, ... ), design settings (logo, color, slogan, header), access settings and much more.

**Apps**

Moreover, there is also the possibility to install additional apps apart from the default apps. You can access them via the menu item **Apps**.

![](https://screensaver01.zap-hosting.com/index.php/s/wKERd24E25668kt/preview)

With such **Apps** it is possible to further individualize Nextcloud according to your wishes.


## Conclusion

Congratulations, you have successfully installed Nextcloud! If you have any further questions or problems, please contact our support team, who are available to help you every day! 

<InlineVoucher />
