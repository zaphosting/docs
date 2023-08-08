---
id: vserver-linux-databases
title: Installation of Databases
description: Information on how to install databases on your VPS from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Install Databases
---

This guide provides steps for the installation of various types of databases. For this example, Ubuntu 20.04 is used as the operating system, however the equivalent commands for each operating system provided by us are specified. These commands must be executed via SSH, if you don't know how to connect to your server via SSH, have a look here:

[Initial access (SSH)](https://zap-hosting.com/guides/docs/en/vserver_linux_ssh/)

## Preparation

Before the actual installation of any database can begin, it's necessary to make sure that the system is up to date. To do this, we need to update the packages from your system package manager with the following command, depending on your operating system:

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

MariaDB is an open-source relational database management system, originally forked from MySQL. It ensures enhanced performance, security, and continuous development. Notably, MariaDB offers greater storage engines, and its architecture provides full compatibility with MySQL. We do recommend MariaDB over MySQL.

## MariaDB Installation

First of all, we need to ensure that the lastest MariaDB version is being installed. Some old systems like Debian 9 or Ubuntu 18.04 doesn't come by default with the lastest MariaDB version in its package manager, by executing the following command we're making sure that the lastest version is retreived.

```
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

After installing the repo, update your package manager cache by following the steps on the [preparation step](#preparation)

:::info
The MariaDB repo installation (step above) can be safely ignored in modern operating systems like Ubuntu 22.04 or Debian 11
:::

Once the repo setup has been completed (if necessary), the installation of MariaDB can now begin. Depending on the operating system, the following commands must be executed for this:

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

Once the installation is complete, type in the following command to start the configuration of the server: **mysql_secure_installation**

Now configure your MariaDB (MySQL) server and set a password for your server.

![](https://user-images.githubusercontent.com/61839701/165694493-b113409b-3f2a-41ba-8113-59f86ded31b8.png)

There you skip the input for now by pressing **Enter**.

:::info
The user root is the main user of your MariaDB (MySQL) server!
:::

Now you are being asked if you want to set a password for the root user, confirm this with **y** for yes.

Afterwards, you have to type in the new password for the user root.

:::info
While typing in the password, you won't be able to see it. However, this behavior is normal and your password will still be stored. Make sure you use a secure password for your root user and keep it in a safe place. 
:::

![image](https://user-images.githubusercontent.com/13604413/159171942-82667636-b148-4248-a95d-ad3d9ed3ab47.png)

Now you will be asked if you want to remove anonymous users from your server, you should do this in any case for security reasons. Confirm this with a **y** for yes:

![image](https://user-images.githubusercontent.com/13604413/159171944-d897a99a-a0f4-421b-bfb9-92c0640f2db0.png)

In the following prompt you define if the user root is allowed to connect to the server externally. For security reasons you should also deactivate this option and confirm this therefore with **y**:

![image](https://user-images.githubusercontent.com/13604413/159171945-e7b4f9ef-1ec0-409f-ad5f-dff05f42c561.png)

In the next step you can also confirm to remove the test database provided by MariaDB (MySQL) with **y**, because it's not needed and can be easily deleted:

![image](https://user-images.githubusercontent.com/13604413/159171948-625983b8-897f-4b47-a8a8-e47cc72b90f4.png)


At the end of the configuration process you will be asked if you want to update the permissions of the database. Confirm this with **y** to activate the previously set password for the root user:

![image](https://user-images.githubusercontent.com/13604413/159171953-8a6cb526-6fac-47fd-be04-eb752f57b1a1.png)


Your MariaDB (MySQL) server is now ready for use!

![](https://user-images.githubusercontent.com/61839701/165694518-162f9567-e95e-43e8-98b2-c2450f26c975.png)
</TabItem>

<TabItem value="redis" label="Redis">

## What is Redis?

Redis is an in-memory data structure store, mainly used to store data with key-value structure, although it supports other formats such as lists, JSON and more. It is characterized by its speed, providing answers to queries in microns of a second.

## Redis Installation

First, we must add a repo that allows us to install redis. This step is not necessary in all Linux distributions. Execute the following command that corresponds to your operating system and version:
```
// Ubuntu (any version) and Debian (only Debian 10)
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

// CentOS (only CentOS 7)
sudo yum install epel-release

// CentOS (only CentOS 8)
sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
```

After installing the repo, update your package manager cache by following the steps on the [preparation step](#preparation)

:::info
If your operating system is not listed above, then you can avoid this step.
:::

After installing the corresponding repo, we proceed to the installation of the redis server. Run the command that corresponds to the operating system you are using.

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

After the installation, your redis server is ready to use! By default, it runs in 127.0.0.1:6379 with no password.

:::caution For Debian/Ubuntu users
Remember to enable redis-server service after the installation to make sure it autoloads on boot:
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
<TabItem value="mongodb-ubuntu" label="Ubuntu">

### MongoDB Ubuntu Installation

First, execute the following command to import the MongoDB public GPG Key

```
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor
```

Afterwards, create the list file for MongoDB using the following command:

```
touch /etc/apt/sources.list.d/mongodb-org-6.0.list
```

Next, we need to add the MongoDB source to the previously created file. To do that, you can execute the following command:
:::warning
Replace {{your_os_alias}} with the "Alias" from the following table that corresponds to your Ubuntu version:

| Ubuntu Version | Alias  |
|----------------|--------|
| 22.04          | jammy  |
| 20.04          | focal  |
| 18.04          | bionic |
:::

```
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/ubuntu {{your_os_alias}}/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

Now, the package manager can install MongoDB Community Edition, but first we need to update the repositories with `sudo apt update`. Finally, we can install MongoDB using:
```
sudo apt install mongodb-org
```

Your MongoDB installation should be working now!

</TabItem>
<TabItem value="mongodb-debian" label="Debian">

### MongoDB Debian Installation

The way to install MongoDB in Debian is almost the same as on Ubuntu, so you can follow the guide on the "Ubuntu" tab above. However, note that the repo varies.

When you reach the third step of the guide, you must use the following repo and not the Ubuntu repo:
:::warning
Replace {{your_os_alias}} with the "Alias" from the following table that corresponds to your Debian version:

| Debian Version | Alias    |
|----------------|----------|
| 11             | bullseye |
| 10             | buster   |

Debian 9 is no longer supported by MongoDB
:::

```
echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg] http://repo.mongodb.org/apt/debian {{your_os_alias}}/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

</TabItem>
<TabItem value="mongodb-centos" label="CentOS">

### MongoDB CentOS Installation

First, we need to set up the MongoDB repo for Red Hat systems.

Create a file named `/etc/yum.repos.d/mongodb-org-6.0.repo`, and paste the following content inside of it:

```
[mongodb-org-6.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/6.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
```

Now, we are able to install MongoDb using `yum`:
```
sudo yum install -y mongodb-org
```

Your MongoDB installation should be working now!

</TabItem>
<TabItem value="mongodb-fedora" label="Fedora">

### MongoDB Fedora Installation

The process is very similar to CentOS, however, the only difference is that the package is installed with `sudo dnf install -y mongodb-org`.
The rest is exactly the same, therefore you can follow that guide.

</TabItem>
<TabItem value="mongodb-suse" label="OpenSUSE">

### OpenSUSE Fedora Installation

First, we need to import the MongoDB public key for the MongoDB repository:

```
sudo rpm --import https://www.mongodb.org/static/pgp/server-6.0.asc
```

Subsequently, to add the MongoDB repository you need to execute the following command:

```
sudo zypper addrepo --gpgcheck "https://repo.mongodb.org/zypper/suse/15/mongodb-org/6.0/x86_64/" mongodb
```

And finally, you can install the lastest MongoDB version using:

```
sudo zypper -n install mongodb-org
```

Your MongoDB installation should be working now!

</TabItem>
</Tabs>

</TabItem>

</Tabs>