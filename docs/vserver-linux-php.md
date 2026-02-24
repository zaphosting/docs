---
id: vserver-linux-php
title: 'Setup PHP on a Linux Server - Power Dynamic Web Applications'
description: "Learn how to install PHP on your Linux server for web development and optimize your setup for Apache or standalone use → Learn more now"
sidebar_label: Install PHP
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

PHP is a popular general-purpose programming language with significant usage in web development. In this guide, we cover the process of installing PHP to your server.

<InlineVoucher />

## Preparation

Begin by connecting to your server via SSH. If you don't know how to do this, please have a look at our [Initial access (SSH)](vserver-linux-ssh.md) guide.

Once logged in, it is recommended to run the update command corresponding to your operating system to keep your server secure and up to date with latest features.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  sudo apt update
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  sudo yum update
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  sudo zypper update
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  sudo dnf update
```

</TabItem>
</Tabs>

## Installation

There are two main ways of installing PHP to your Linux server, either standalone or as an additional package for Apache. If you are utilising your own web server that isn't Apache or for general purpose tasks, we recommend using the standalone method. Otherwise for usage with the Apache web server, use the Apache method to install PHP as an extra package.

## Standalone

Use the following command to install the latest version of PHP. If you wish to install specific versions, you can use the `-y` flag followed by the version.
```
# Latest
sudo apt install php

# Specific Version (e.g. php7.4)
sudo apt -y install php[version]
```

Verify that the installation was successful using the `php -v` command. You have successfully installed PHP onto your server. We recommend reading the **PHP Extensions** section to ensure that you install any extensions you may require.

## Using Apache

To begin, you should install Apache onto your server if you have not already. This can be done using the following command.
```
sudo apt install apache2
```

Once installed, you should ensure that the appropriate firewall rules are created to ensure that the web server is accessible to the internet. In this example, we will use the **UFW Firewall** since Apache has a registered application for this. If you are using a different firewall, ensure that you allow port 80 (HTTP) through the firewall.
```
sudo ufw allow in "Apache"
```

Your server should now be accessible. You can test this by entering `http://[your_serverip]` into an internet browser.

With Apache now ready, you can install the PHP package for Apache using the following command.
```
sudo apt install php libapache2-mod-php
```

Verify that the installation was successful using the `php -v` command. You have successfully installed PHP alongside your Apache web server. We recommend reading the **PHP Extensions** section to ensure that you install any extensions you may require.

## PHP Extensions

PHP comes with a wide selection of extensions that are optional and can be installed to extend the functionality. To view a list of available extensions, run the following command, which will return the results of the search command into console by pipelining the results to the `less` command.

```
apt search php- | less
```

Use the arrow keys to scroll and press `Q` once ready to quit. Now to install an extension package, simply use the apt install command as following. You can enter multiple extensions at once separated by a space to make the installation faster.

```
sudo apt install [php_extension] [...]
```

## Conclusion

You have successfully installed PHP to your Linux server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
