---
id: dedicated-linux-databases
title: "Setup Databases on a Linux Server - Deploy and Manage Database Services"
description: "Explore how to install and set up various databases on Ubuntu and other Linux distros for enhanced performance and security → Learn more now"
sidebar_label: Install Databases
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

This guide provides steps for the installation of various types of databases. For this example, Ubuntu 20.04 is used as the operating system, however, equivalent commands for other Linux distros that we provide on our website are also specified. These commands must be executed via SSH, if you don't know how to connect to your server via SSH, please have a look here: [Initial access (SSH)](vserver-linux-ssh.md).



## Preparation

Before you begin with the installation of a database, it is firstly necessary to ensure that the system is up to date. To do this, you need to update the packages from your system package manager with the following command, depending on your operating system:

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

## Database types

Depending on which database service you want to install, follow the corresponding guide:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="mariadb" label="MariaDB (MySQL)" default>

## What is MariaDB?

MariaDB is an open-source relational database management system, originally forked from MySQL. It ensures enhanced performance, security, and continuous development. Notably, MariaDB offers improved storage engines, and its architecture provides full compatibility with MySQL. We recommend MariaDB over MySQL.

## MariaDB Installation

First of all, you need to ensure that the latest MariaDB version is being installed. Some old operating systems like Debian 9 or Ubuntu 18.04 don't come by default with the latest MariaDB version in its package manager, thus by executing the following command you are making sure that the latest version is retrieved.

```
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

After installing the repo, update your package manager cache by following the steps provided in the preparation step section.

:::info
The MariaDB repo installation (step above) can be safely ignored in modern operating systems like Ubuntu 22.04 or Debian 11.
:::

Once the repo setup has been completed, the installation of MariaDB can now begin by installing the `mariadb-server` package. Depending on the operating system, the following commands must be executed for this:

```
// Ubuntu & Debian
sudo apt install mariadb-server

// CentOS
sudo yum install mariadb-server

// OpenSUSE
sudo zypper install mariadb

// Fedora
sudo dnf install mariadb-server
```

## MariaDB Configuration

Once the installation is complete, type in the following command to start the configuration of the server: 

```
mysql_secure_installation
```

Now you can configure your MariaDB (MySQL) server by following the prompts and setting a password for your server. On the following prompt, you can skip the input for now by pressing **Enter**.

![](https://screensaver01.zap-hosting.com/index.php/s/sYDegXcMZwCoZzJ/preview)

:::info
The user root is the main user of your MariaDB (MySQL) server!
:::

Next, you will be asked if you want to set a password for the root user, confirm this with **y** for yes. Afterwards, you have to type in the new password for the user root.

:::note
While typing in the password, you won't be able to see it. However, this behavior is normal and your password will still be stored. Make sure you use a secure password for your root user and keep it in a safe place. 
:::

Now you will be asked if you want to remove anonymous users from your server, you should do this in any case for security reasons. Confirm this with a **y** for yes:

![](https://screensaver01.zap-hosting.com/index.php/s/9rnHy9dJmezjemq/preview)

In the following prompt, you define if the user root is allowed to connect to the server externally. For security reasons, you should also deactivate this option and confirm this therefore with **y**:

![](https://screensaver01.zap-hosting.com/index.php/s/cEozmgcXDBgaRwY/preview)

In the next step, you can also confirm to remove the test database provided by MariaDB (MySQL) with **y**, because it is not needed and can be easily deleted:

![](https://screensaver01.zap-hosting.com/index.php/s/kGHT3tm78dNBTRo/preview)

At the end of the configuration process, you will be asked if you want to update the permissions of the database. Confirm this with **y** to activate the previously set password for the root user:

![](https://screensaver01.zap-hosting.com/index.php/s/kGNDZkRS4QrpEfF/preview)

Your MariaDB (MySQL) server is now ready for use!

![](https://screensaver01.zap-hosting.com/index.php/s/nFxJoiYeCp7MYXN/preview)
</TabItem>

<TabItem value="redis" label="Redis">

## What is Redis?

Redis is an in-memory data structure store, mainly used to store data with key-value structure, although it supports other formats such as lists, JSON and more. It is characterized by its speed, providing answers to queries in milliseconds.

## Redis Installation

Firstly, you must add a repo that allows us to install Redis. This step is not necessary for all Linux distributions, only for the Linux distros listed below. Execute the following command that corresponds to your operating system and version:

```
// Ubuntu (any version) and Debian (only Debian 10)
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

// CentOS (only CentOS 7)
sudo yum install epel-release

// CentOS (only CentOS 8)
sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
```

After installing the repo, update your package manager cache by following the steps in the preparation step section.

:::info
If your operating system is not listed above, then you can avoid this step.
:::

After installing the corresponding repo, you will proceed to the installation of the Redis Server package. Run the command that corresponds to the operating system you are using.

```
// Ubuntu and Debian
sudo apt install redis-server

// CentOS
sudo yum install redis

// OpenSUSE
sudo zypper install redis

// Fedora
sudo dnf install redis
```

After the installation, your Redis server is ready to use! By default, it runs in 127.0.0.1:6379 with no password.

:::caution 
For Debian/Ubuntu users:
Remember to enable the `redis-server` service after the installation to make sure it automatically starts on server boot. You can do this with the following command:
```
sudo systemctl enable --now redis-server
```
:::

</TabItem>

<TabItem value="mongodb" label="MongoDB">

## What is MongoDB?
MongoDB is a document-oriented NoSQL database, designed for scalability and developer agility. It stores data in JSON-like BSON format, enabling the storage of diverse data types. It contains the possibility of using indexes to reduce response time and is characterized by not having a predefined schema as MySQL or SQLite would, providing agility and flexibility.

## MongoDB Installation

Select your operating system from the tabs below to display the corresponding guide.

<Tabs>
<TabItem value="mongodb-ubuntu-debian" label="Ubuntu & Debian">

### Installation on Ubuntu & Debian

Firstly, you should execute the following command to import the MongoDB public GPG Key:

```
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor
```

Afterwards, you need to add the MongoDB source to the source list of your operating system. To do that, you can execute the following command:

```
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/$(lsb_release -si | awk '{print tolower($0)}') $(lsb_release -sc)/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

Now the package manager can install MongoDB Community Edition, but beforehand you need to update the repositories with the command: `sudo apt update`. Finally, you can install MongoDB using:

```
sudo apt install mongodb-org
```

Your MongoDB installation should be working now!

</TabItem>
<TabItem value="mongodb-centos-fedora" label="CentOS & Fedora">

### Installation on CentOS & Fedora

First, you need to set up the MongoDB repo for Red Hat systems.

Create a file named `/etc/yum.repos.d/mongodb-org-6.0.repo`, and paste the following content inside of it:

```
[mongodb-org-6.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/6.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
```

Now, you are able to install MongoDB. There is a small difference in the install command between CentOS and Fedora, so you should use the appropriate one below:

```
// CentOS
sudo yum install -y mongodb-org

// Fedora
sudo dnf install -y mongodb-org
```

Your MongoDB installation should be working now, it is much simpler compared to other Linux distros!

</TabItem>
<TabItem value="mongodb-suse" label="OpenSUSE">

### Installation on OpenSUSE

Firstly, you need to import the MongoDB public key for the MongoDB repository through the command:

```
sudo rpm --import https://www.mongodb.org/static/pgp/server-6.0.asc
```

Subsequently, to add the MongoDB repository you need to execute the following command:

```
sudo zypper addrepo --gpgcheck "https://repo.mongodb.org/zypper/suse/15/mongodb-org/6.0/x86_64/" mongodb
```

And finally, you can install the latest MongoDB version using:

```
sudo zypper -n install mongodb-org
```

Your MongoDB installation should be working now!

</TabItem>
</Tabs>

</TabItem>
</Tabs>


