---
id: dedicated-linux-lamp-stack
title: "Dedicated Server: Setup LAMP stack - Linux, Apache, MySQL, PHP"
description: Information on how to setup a LAMP (Linux, Apache, MySQL, PHP) stack on your Linux Dedicated Server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Web LAMP stack
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

The **LAMP** stack is a popular selection of open-source software which are setup together to allow for simple dynamic website hosting, with a particular focus on PHP websites and apps. The acronym stands for: **L**inux as the OS (operating system), **A**pache as the web server, **M**ySQL as the database and lastly **P**HP for processing. In this guide, we will cover the process of setting up a LAMP stack on a Linux Dedicated Server, with a detailed breakdown and example of setting up a to-do list website. 

<InlineVoucher />

## Preparation

Begin by connecting to your server via SSH. If you don't know how to do this, please have a look at our [Initial access (SSH)](vserver-linux-ssh.md) guide.

In this guide, we will be using Ubuntu as the Linux distribution. The instructions are the same for Debian and should be similar for other distributions, but the syntax of commands for example may vary slightly. Ensure that you have an OS installed and are connected to the server via SSH.

As always, before proceeding with the installation, ensure that all packages are up to date via the following command:
```
// Ubuntu & Debian
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper up

// Fedora
sudo dnf upgrade --refresh
```

## Installation

The installation can be split up easily into each core LAMP dependency, beginning with the Apache web server, followed by MySQL database and lastly PHP. Throughout the installation, we will setup a test website which is written in PHP and will access the MySQL database. Lastly each web request will be processed and served through the Apache web server.

### Setting up Apache

Apache is the web server that will be used to process incoming web requests and serve responses. Install it with the following command.
```
sudo apt install apache2
```

Once installed, you should ensure that the appropriate firewall rules are created to ensure that the web server is accessible to the internet. In this example, we will use the **UFW Firewall** since Apache has a registered application for this. 

If you are using a different firewall, ensure that you allow port 80 (HTTP) through the firewall. You can learn more about firewalls in Linux via our [Manage Firewall](vserver-linux-firewall.md) guide.

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

### Setting up MySQL

Now you will install and setup a MySQL server which will act as your database to persistently store data in a relational manner. Install it with the following command.
```
sudo apt install mysql-server
```

After this is finished, it is recommended to run a secure installation script which ensures that your MySQL server instance remains secure. This is optional but highly recommended. You can run this via the `sudo mysql_secure_installation` command.

This will take you through an interactive setup. At first, you will be prompted about password validation. We recommend selecting `Y` to ensure only secure passwords in the future are allowed and then selecting either `MEDIUM` via `1` or `STRONG` via `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Next you will be prompted about removing the `anonymous` user and disallowing root login remotely. For both we strongly recommend accepting via `Y` for security implications. This ensures that the test user is removed and that the master `root` user can only be used locally via SSH and not anywhere else, reducing risk.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Finally, you will be prompted about removing the `test` database and reloading the privilege tables. Once again we recommend accepting via `Y` since the test table is not needed and you need to reload the privilege table for adjustments to take place.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Now check if the MySQL database is running using the following command to attempt to login: `sudo mysql -u root`. If successful, you should see a welcome message appear. You can exit it using the `quit` command once ready.

### Setting up PHP

The final LAMP dependency is PHP and this is quite simple to install. The following command installs PHP alongside a plugin for Apache and MySQL, to allow for Apache to work with PHP and to allow PHP to use MySQL.
```
sudo apt install php libapache2-mod-php php-mysql
```

Confirm that the installation was successful by checking the version. If you see a version output, this means that PHP is functioning correctly.
```
php -v
```

:::tip PHP Extensions
For advanced use cases, you may require additional PHP extensions to allow for extra functionality. You can view a list of these by running the `apt search php- | less` command.

Use the arrow keys to scroll and press `Q` once ready to quit. Now to install an extension package, simply use the apt install command as following. You can enter multiple extensions at once, separated by a space to make the installation faster.

```
sudo apt install [php_extension] [...]
```
:::

We recommend adjusting the directory index to ensure that `index.php` files take precedence over the default `.html`. Open the file using the following command.
```
sudo nano /etc/apache2/mods-enabled/dir.conf
```

In the nano editor, remove `index.php` and move it to the front of the list, as following:
```
DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
```

Save the file and quit nano by using `CTRL + X`, followed by `Y` to confirm and lastly `ENTER`. Now restart Apache for this to take effect using `sudo systemctl restart apache2`.

### Creating Test Website

With the installation of each LAMP dependency now complete, we will now create a test website to present how the LAMP stack works together to form a great dynamic website solution. This is completely optional, but it is useful to understand how you can utilise these tools to setup your own websites.

In this example, we will create a small to-do list website via PHP which will fetch and return to-do entries. This will be stored on a MySQL database table and will be served through Apache.

We will also be using a test domain of `zapdocs.example.com` throughout, since in a real-world scenario you would likely utilise a domain. You **must** setup an `A` type DNS record for the domain which points at the IP Address of your server. If you require help with this, please browse our [Domain Records](domain-records.md#a-records) guide.

:::note
You can choose not to use a domain and replace mentions of `[your_domain]` with a regular name. You would then access the website via the IP address. However, do note that when creating the virtual host file later on, you should remove the `ServerName` parameter.
:::

#### Setting up Apache

Typically across web servers, all website files and data is stored under the `/var/www` directory. By default, Apache usually comes with a `html` directory which contains a default page. To ensure that everything is organised especially when hosting many websites on a single Apache instance, we recommend setting up each website in an individual directory or folder.

To do this, you can simply create a new folder in the `/var/www/[your_domain]` directory for each website domain. In this example, this will be `/var/www/zapdocs.example.com`.
```
sudo mkdir /var/www/[your_domain]
```

Now you will create a new Apache virtual host configuration file in the `sites-available` directory for this domain and folder.
```
sudo nano /etc/apache2/sites-available/[your_domain].conf
```

Use the template below and copy it into the nano editor, replacing `[your_domain]` with the domain you are using.
```
<VirtualHost *:80>
    ServerName [your_domain]
    ServerAlias www.[your_domain]
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/[your_domain]
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

This new virtual host file handles port 80 (HTTP) requests and checks whether the request matches the `ServerName` specified, in this case your domain. It also points that the `/var/www/[your_domain]` folder that you created previously should be used to serve files.

Save the file and quit nano by using `CTRL + X`, followed by `Y` to confirm and lastly `ENTER`. We recommend using the `sudo apache2ctl configtest` command to ensure that the file doesn't contain any syntax errors.

The final step for Apache configuration is to enable the new virtual host by using `a2ensite`.
```
sudo a2ensite [your_domain]
```

:::note No Domain Used
If you are **not** using a domain, remove the `ServerName` line or uncomment by prefixing it with a `#` hashtag. You will also have to disable the default virtual host by using the `sudo a2dissite 000-default` command.
:::

Finally restart Apache for the new virthual host to take effect using the following command: `sudo systemctl restart apache2`.

#### Creating Website

Now that you have configured Apache through the new virtual host and document folder, it is time to create the actual website that will be served. At the moment, the folder is empty therefore nothing will be served. We will be creating a small to-do website as previously mentioned for this domain.

##### Preparing Database

To begin, let's create a new database and table to store each list item. Login to your MySQL server.
```
sudo mysql -u root
```

Now let's create a new `todowebsite` database and a `todoitems` table within it.
```
# Create database
CREATE DATABASE todowebsite;

# Use the new database
USE todowebsite;

# Create a new items table in the database
CREATE TABLE todoitems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

With the table ready, let's create a few sample entries for now.
```
INSERT INTO todoitems (name, is_completed) VALUES ('Create ZAP-Docs Guide', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Buy a ZAP-Hosting Server', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Join ZAP-Hosting Discord', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Have a great day!', 0);
```

Lastly, let's create a dedicated `todo` user which will be used specific for this website.
```
# Create a dedicated user
# Replace [your_password] with your own password
CREATE USER todo@localhost IDENTIFIED BY '[your_password]';

# Set privilages for the user (copy as one)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# Reload privileges
FLUSH PRIVILEGES;
```

With the database now prepared and the user ready, you can exit the MySQL terminal via the `quit` command once ready.

##### PHP Website Files

The final part of this example is setting up the actual PHP website file for the to-do page. This will be done through a new `index.php` file in the `/var/www/[your_domain]` directory that you have created earlier. Open the nano editor to create a file there.
```
sudo nano /var/www/[your_domain]/index.php
```

Now below we have prepared a simple code snippet that you can place into the nano editor for a basic to-do page which returns the items that are stored in the database. The first PHP section established a MySQL connection to your database.

:::important
You must change the `[your_password]` field to the password you have set for the `todo` user earlier.
:::

The subsequent HTML section contains the main web page which create an unordered list, looping through each of the results.

```
<?php
// Prepare MySQL Connection
$servername = "localhost";
$username = "todo";
$password = "[your_password]";
$dbname = "todowebsite";

// Create Connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check whether the connection was successful, if not return an error
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Run an SQL query to return entries from the table and set it as the result variable
$sql = "SELECT id, name, is_completed, creation_date FROM todoitems ORDER BY creation_date DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF--8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>To-Do List</title>
  </head>
  <body>
      <h1>Awesome To-Do List :D</h1>
      <p>For our awesome ZAP-Hosting guide: <a href="https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack</a></p>
      <ul>
          <?php
          // Check whether there are any results
          if ($result->num_rows > 0) {
              // Loop through each item of the returned array from the query
              foreach ($result as $entry) {
                  echo "<li>";
                  // Display the name and use htmlspecialchars to prevent XSS (cross-site scripting)
                  echo htmlspecialchars($entry["name"]);

                  // Display the completion status
                  if ($entry["is_completed"]) {
                      echo " <strong>(Completed)</strong>";
                  } else {
                      echo " <strong>(Incomplete)</strong>";
                  }

                  // Display creation date
                  echo " - Creation Date: " . htmlspecialchars($entry['creation_date']);
                  echo "</li>";
              }
          } else {
              // If none are found, return a default message
              echo "<li>No to-do items found.</li>";
          }
          ?>
      </ul>
  </body>
</html>

<?php
// Close database connection
$conn->close();
?>
```

Once you have copied this into the nano editor, save the file and quit nano by using `CTRL + X`, followed by `Y` to confirm and lastly `ENTER`.

#### Testing the Website

You have successfully followed along and setup a test to-do website which utilises all of the aspects of the LAMP stack!

You should now be able to access the website via the domain (using `http`/port 80) you have defined previously in the virtual host file, with this being `zapdocs.example.com` in this example. The end result should look like the following:

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## Conclusion

Congratulations, you have successfully installed and setup the LAMP stack! As the next step, we **highly recommend** setting up a domain and **SSL certificate** to ensure that data is transmitted securely to your websites. Please view our [Certbot guide](vserver-linux-certbot.md#webroot-plugin) with a focus on the **Apache Plugin** and follow the interactive setup to quickly and easily setup a certificate for your chosen domain.

For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
