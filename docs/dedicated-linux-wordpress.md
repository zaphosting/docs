---
id: dedicated-linux-wordpress
title: "Setup WordPress on a Linux Server - Launch Your Own Website or Blog"
description: "Discover how to install WordPress on a Linux server using the LAMP stack to build and manage your website efficiently → Learn more now"
sidebar_label: Install WordPress
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

WordPress is a popular web content management system used for managing and publishing websites. In modern times, WordPress has evolved into various other areas such as mailing, forums, stores and much more. This is bolstered by a thriving community which has established a strong plugin ecosystem alongside templates that make it easy to setup anything as an end-user. In this guide, we will cover the process of installing WordPress CMS onto a Linux server.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)



## Preparation

Begin by connecting to your server via SSH. If you don't know how to do this, please have a look at our [Initial access (SSH)](dedicated-linux-ssh.md) guide.

:::info
In this guide, we will be using the Ubuntu distro, paired with Apache as the web server, MySQL for database and PHP as the core dependency. This is known as the LAMP stack: Linux, Apache, MySQL and PHP.
:::

Once you are logged in, begin by running the update command.
```
sudo apt update
```

Following this you can now install all of the necessary dependencies. Simply copy the entire command from below and paste it to install all dependencies at once. Be patient as it may take some time to install everything.
```
sudo apt install apache2 \
                 ghostscript \
                 libapache2-mod-php \
                 mysql-server \
                 php \
                 php-bcmath \
                 php-curl \
                 php-imagick \
                 php-intl \
                 php-json \
                 php-mbstring \
                 php-mysql \
                 php-xml \
                 php-zip
```

With the dependencies installed, there are a few small recommended setup steps you should follow to ensure that all core dependencies of the LAMP stack are functional.

### Apache & Firewall

To begin, you will need to setup the firewall to allow the Apache web server to communicate with the internet and ensure that it is functional. It is important that the appropriate firewall rules are created to ensure that the web server is accessible to the internet.

In this example, we will use the **UFW Firewall** since Apache has a registered application for this. If you are using a different firewall, ensure that you allow port 80 (HTTP) through the firewall. You can learn more about firewalls in Linux via our [Manage Firewall](vserver-linux-firewall.md) guide.

Ensure that UFW firewall is enabled and also ensure that a rule for SSH is created.
```
# Create a rule to allow SSH
sudo ufw allow OpenSSH

# Enable UFW Firewall
sudo ufw enable
```

:::caution
Ensure that you have a rule setup for SSH if you are using UFW Firewall! If you do not, you will **not** be able to SSH into the server again if you lose connection to your current session!
:::

Now create the rule to allow Apache and afterwards check to ensure that the rules are present.
```
# Create a rule to allow Apache
sudo ufw allow in "Apache Full"

# Check the UFW firewall rules
sudo ufw status
```

:::tip
You can view which profiles are available by running the `ufw app list` command. In the example above, using `Apache Full` means that both HTTP (port 80) and HTTPS (port 443) rules are created.
:::

You should see `Apache` and `Apache (v6)` rules with `ALLOW` actions set, which confirms that the firewall is ready. You should also see other rules that you may have previously setup, including the SSH rule.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

With the firewall opened up for Apache, you should now ensure that Apache is functional. You can do this by attempting to access your IP address in a browser, as following: `http://[your_ipaddress]`

If it is functional, you should see a default welcome page. If you cannot, check the status of the service using the following command: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### MySQL Setup

The next part is performing a first-time setup for MySQL. It is recommended to run a secure installation script, which ensures that your MySQL server instance remains secure. This is optional but highly recommended. You can run this via the `sudo mysql_secure_installation` command.

This will take you through an interactive setup. At first, you will be prompted about password validation. We recommend selecting `Y` to ensure only secure passwords in the future are allowed and then selecting either `MEDIUM` via `1` or `STRONG` via `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Next you will be prompted about removing the `anonymous` user and disallowing root login remotely. For both we strongly recommend accepting via `Y` for security implications. This ensures that the test user is removed and that the master `root` user can only be used locally via SSH and not anywhere else, reducing risk.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Finally, you will be prompted about removing the `test` database and reloading the privilege tables. Once again we recommend accepting via `Y` since the test table is not needed and you need to reload the privilege table for adjustments to take place.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Now check if the MySQL database is running using the following command to attempt to login: `sudo mysql -u root`. If successful, you should see a welcome message appear. You can exit it using the `quit` command once ready.

![](https://screensaver01.zap-hosting.com/index.php/s/gFKBAZyaFiHgrCz/preview)

### Testing PHP

Lastly you should ensure PHP is functioning as expected. To do this, you should create an `info.php` file in your Apache `/var/www/html/` directory with PHP contents to run the `phpinfo()` command.
```
# Open nano editor at the new file path
nano /var/www/html/info.php

# Paste the following contents into the editor
<?php
phpinfo();
?>
```

Once ready save the file by pressing `CTRL+X` followed by `Y` and `Enter` to confirm the changed you have made.

Now access the following URL which should return a PHP info page if it is functioning correctly.
```
http://[your_ipaddress]/info.php
```

![](https://screensaver01.zap-hosting.com/index.php/s/bSg3nHaKRatBxFR/preview)

With the core LAMP dependencies now tested and functional, you are ready to proceed with the main installation of the WordPress CRM.

## Installation

The installation of WordPress can be split up into three areas, beginning with preparing a MySQL database, followed by installing WordPress and lastly setting up the configuration using the WordPress setup wizard.

### MySQL Database

To begin with the installation, you will have to setup a new MySQL database. This is important to remember as you will be using these during the WordPress setup wizard later on, thus we recommend using our examples.

Simply copy the following commands to create the necessary database, tables and users.
```
# Login to MySQL
sudo mysql -u root

# Create database
CREATE DATABASE wordpress;

# Create a dedicated wordpress user
# Replace [your_password] with your own password
CREATE USER wordpress@localhost IDENTIFIED BY '[your_password]';

# Set privilages for the user (copy as one)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON wordpress.*
TO wordpress@localhost;

# Reload the tables
FLUSH PRIVILEGES;
```

Once you have setup the database and created the user, you can exit by using the `quit` command. You are now ready to install WordPress.

### Installing WordPress

For the main WordPress installation, we recommend and will be using the release from **wordpress.org** directly rather than the APT package as this is recommended by WordPress to avoid potential issues.

To download the latest file, use the following command which will download the latest release to the temporary directory.
```
cd /tmp && wget https://wordpress.org/latest.tar.gz
```

Now extract the file archive which will return a `wordpress` folder with all of the needed files.
```
tar -xvf latest.tar.gz
```

With the files extracted, you will have to copy the folder into your Apache `/var/www/html/` directory in order to make everything accessible through the web. Run the following commands below which will copy the folder, create an `uploads` directory and adjust permissions to ensure the `www-data` group for web servers has access.
```
# Copy the wordpress folder and update ownership
cp -R wordpress /var/www/html/
chown -R www-data:www-data /var/www/html/wordpress/

# Create uploads directory
mkdir /var/www/html/wordpress/wp-content/uploads

# Adjust file permissions
chmod -R 755 /var/www/html/wordpress/
chown -R www-data:www-data /var/www/html/wordpress/wp-content/uploads/
```

And with this done, WordPress should be installed. Access the WordPress setup wizard via: `http://[your_ipaddress]/wordpress`

### Setup Wizard

Through the setup wizard, you can now configure WordPress which is the final step in the installation process. At first you will be prompted to select your language. 

Following this you will have to configure the database settings. You have already prepared this through MySQL in the first part of the installation process, thus you should utilise the same credentials and values here. If you followed our examples, you should fill out the options as following, replacing `[your_password]` with the password that you inputted earlier.

![](https://screensaver01.zap-hosting.com/index.php/s/4ZmA43WMjf2bBxB/preview)

And with this step complete, you will now be prompted to run the installation. This is the last part of the setup process.

![](https://screensaver01.zap-hosting.com/index.php/s/7kfjz8p2cCzoD8S/preview)

On the following page, you will be prompted to input various information including the site title, an email address and a username and password for the root WordPress account to access the panel. You may also decide on the search engine visibility, whether you want your website to be indexed or have it discouraged.

:::tip
Make sure to select a strong password and save the credentials so that you do not lose access to your WordPress panel!
:::

Once you are ready, select the **Install WordPress** button to complete the installation process.

![](https://screensaver01.zap-hosting.com/index.php/s/BZwxEpQAs3sKcc7/preview)

You will be taken to a success page which redirects you to the **Log In** page. Select this and then use the credentials to login to your WordPress panel for the very first time!

![](https://screensaver01.zap-hosting.com/index.php/s/qEGcRQFWBcLDosj/preview)

And just like that, upon successful login you will now be on your WordPress panel, with a complete installation.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

## Conclusion

Congratulations, you have successfully installed and configured WordPress! As the next step, we **highly recommend** setting up a domain and **SSL certificate** to ensure that data is transmitted securely and make the WordPress panel easier to access. Please view our [Certbot guide](dedicated-linux-certbot.md) with a focus on the **Apache Plugin** and follow the interactive setup to quickly and easily setup a certificate for your chosen domain.

For future reading and further setup, we highly recommend having a browse through our [WordPress Plugins](webspace-wordpress-plugins.md) and [WordPress Elementor](webspace-wordpress-elementor.md) guides which explore the process of installing plugins and using a popular user-friendly page builder named Elementor.

For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂


