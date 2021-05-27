---
id: vserver_linux_nextcloud
title: VPS: Install Nextcloud on server
description: Information on how to set up a Nextcloud server on your VPS from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Nextcloud
---

## ❓ Was ist Nextcloud?

Nextcloud is an open source cloud solution and fork of Owncloud, which was founded in 2016 by former Owncloud founder Frank Kalitschek.

![img](https://screensaver01.zap-hosting.com/index.php/s/psZWxkYQebyiqoc/preview)

In order to achieve optimal performance, stability and functionality, the following setup is recommended for hosting a Nextcloud server. The Nextcloud server is not compatible with Windows and MacOS. At least not without any further virtualization or similar workarounds.<br>

**System requirements**

<br>
**Hardware**

| **Components** | Minimum                | Recommended                 |
| -------------- | ---------------------- | --------------------------- |
| CPU            | 2x 1 GHz               | 4x 2+ GHz                   |
| RAM            | 512 MB                 | 4+ GB                       |
| Disc           | 10 GB                  | 50+ GB                      |
| Bandwidth      | 100 mbit/s (up & down) | 500mbit/s (up & down) Recommended if several users are supposed to use the cloud |

<br>
**Software**

| Platform         | Options                                                      |
| ---------------- | ------------------------------------------------------------ |
| Operating System | Ubuntu (14.04, 16.04, 18.04), Debian(8,9,10), CentOS 6.5/7   |
| Database         | MySQL or MariaDB 5.5+ (recommended),  SQLite (only recommended for testing and minimal-instances) |
| Web server       | Apache 2.4 with `mod_php` or `php-fpm` (recommended)         |
| PHP              | 5.6, 7.0 (recommended), 7.1 (recommended), 7.2               |

> The requirements are based on our own experience and the information provided by the developers..



## 🛠 Nextcloud set up


### Preparation

A connection has to be established via a SSH client in order to install the cloud on a Linux server. In case you are not sure how to use SSH, here is a guide how to do so: [Initial access (SSH)](vserver_linux_ssh.md)

Once the connection is established, you can start to install the necessary packages that are required for the actual installation of Nextcloud. This includes the installation of a web server as well as PHP.

<!--DOCUSAURUS_CODE_TABS-->
<!--Debian-->
<br>

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

<!--Ubuntu-->

<br>

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


<!--CentOS-->
<br>

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

<!--END_DOCUSAURUS_CODE_TABS-->

The next step is to define a database type to store the relevant information. There are several options:

<!--DOCUSAURUS_CODE_TABS-->

<!--MariaDB-->
<br>
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

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'YOUR_PASSWORD_HERE';
```

Afterwards a user has to be created, which gets access to the Nextcloud database. 

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'YOUR_PASSWORD_HERE';
```

> Don't skip this step by using the root user.This is not safe and can put your data at risk!

The last step is to assign the permissions to the new user:

```SQL
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nc_user'@'localhost';
FLUSH PRIVILEGES;
```

Once you are done, you can press Ctrl-D to exit the database and continue with the next steps.

<!--MySQL-->
<br>
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

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'YOUR_PASSWORD_HERE';
```

Afterwards a user has to be created, which gets access to the Nextcloud database. 

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'YOUR_PASSWORD_HERE';
```

> Don't skip this step by using the root user.This is not safe and can put your data at risk!


The last step is to assign the permissions to the new user:

```SQL
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nc_user'@'localhost';
FLUSH PRIVILEGES;
```

Once you are done, you can press Ctrl-D to exit the database and continue with the next steps.

<!--PostgreSQL-->
<br>
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

```sql
CREATE USER nextcloud with encrypted password 'YOUR_PASSWORD_HERE';
```

Afterwards a user has to be created, which gets access to the Nextcloud database. 

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'YOUR_PASSWORD_HERE';
```

> Don't skip this step by using the root user.This is not safe and can put your data at risk!

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

<!--SQLite-->
<br>
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
<!--END_DOCUSAURUS_CODE_TABS-->

### Installation

Now the actual installation of Nextcloud can be started. The software needs to be downloaded and unpacked:
```
cd /var/www/nextcloud/
wget https://download.nextcloud.com/server/releases/nextcloud-16.0.4.zip
apt-get install unzip
unzip nextcloud-16.0.4.zip
chown -R www-data:www-data nextcloud
rm nextcloud-16.0.4.zip
```

Once this step is finished, it's time to run the installation script. Access is possible via the browser via the following URL:

> **http://domain.tld/nextcloud/** 

The installation script configuration appears, in which a root user is created and database information defined:

![img](https://screensaver01.zap-hosting.com/index.php/s/DeEyH2Ni6fKDbTm/preview)


![img](https://screensaver01.zap-hosting.com/index.php/s/pidgFL4z2o7ZJc6/preview)


### Security and safety

**Setup Warnings**

![img](https://screensaver01.zap-hosting.com/index.php/s/y5RSDRRdHiRRLgm/preview)



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
 DocumentRoot "/var/www/html/cloud"
 ServerName domain.tld

 ErrorLog ${APACHE_LOG_DIR}/error.log
 CustomLog ${APACHE_LOG_DIR}/access.log combined

<Directory /var/www/html/cloud/>
 Options +FollowSymlinks
 AllowOverride All

 <IfModule mod_dav.c>
 Dav off
 </IfModule>

 SetEnv HOME /var/www/html/cloud
 SetEnv HTTP_HOME /var/www/html/cloud
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

If you are not sure how to generate an SSL certificate, then you can find instructions here about it: [Let's Encrypt](vserver_linux_letsencrypt.md)



## 💻 Manage Nextcloud

Access to Nextcloud is possible via the browser, as well as via the smartphone and computer using the app. The download sources can be found here: https://nextcloud.com/install/#install-clients

![img](https://screensaver01.zap-hosting.com/index.php/s/jHPsfXDf5dHFk2y/preview)

Under settings you can adjust a few more options even after the setup and view important information like logs, activities. This includes additional security settings (two-factor authentication, encryption, ... ), design settings (logo, color, slogan, header), access settings and much more.

**Apps**

Moreover, there is also the possibility to install additional apps apart from the default apps. You can access them via the menu item **Apps**.

![img](https://screensaver01.zap-hosting.com/index.php/s/MtXpFpCEt7ZQ7ZY/preview)

With such **Apps** it is possible to further individualize Nextcloud according to your wishes.
