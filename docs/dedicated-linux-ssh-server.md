---
id: dedicated-linux-ssh-server
title: "Setup SSH on a Linux Server - Enable Secure Remote Server Access"
description: "Discover how to securely install and manage SSH servers on Linux server to ensure safe remote access and enhanced server protection → Learn more now"
sidebar_label: Install SSH
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Secure Shell (SSH) is a secure protocol that enables safe and encrypted access to remote systems. It ensures the confidentiality and integrity of data transmitted across networks.

In this guide, you will understand how to install or reinstall the SSH Server for a range of Linux Distributions that we currently offer across our VPS/Dedicated Server servers. Most Linux Distros offered through our VPS/Dedicated Server servers, are equipped with an SSH Server by default which means you can easily manage it through the product's webinterface. You can view how to do this via our guide: [Initial access (SSH)](vserver-linux-ssh.md)

If you wish to learn more about improving your security on your server, we highly recommend viewing our [Security Tips](vserver-linux-security-tips.md) guide which promotes a range of tools and services that can help secure your server further.



## Installation

To start the installation process, access your server via VNC. You can follow these steps using the [VNC console](vserver-vnc.md).


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="CentOS" label="CentOS" default>

:::info
If you want to re-install the SSH server, make sure that you uninstall it first. You can do so through the command: `yum remove openssh`.
:::

Before installing the SSH server, make sure your system is up to date. Run the following command:
```
yum update
```

Now proceed to install the SSH server using following command:
```
yum install openssh-server
```

Once it has finished installing, you can start the SSH server service with the following command:
```
systemctl start sshd
```

Ensure that you enable the service to automatically start on system boot. You can do this through the following command:
```
systemctl enable sshd
```

## Enabling root login

To enable root login, you need to edit the openssh configuration file. In this guide, we will use "nano" as editor.

:::info
If "nano" is not already installed, it must be installed first. To do so, use the following command: `yum install nano`
:::

Proceed to open the configuration file by running:
```
nano /etc/ssh/sshd_config 
```

Using arrows keys to navigate, search for the following line:
```
#PermitRootLogin prohibit-password
```

Change this to the following, which enables remote root login:
```
PermitRootLogin yes
```

Finally, restart the SSH Server in order to apply the new configuration by using the following command:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Debian" label="Debian">

:::info
If you want to re-install the SSH server, make sure that you uninstall it first. You can do so through the command: `apt remove openssh`.
:::

Before installing the SSH server, make sure your system is up to date. Run the following command:
```
apt update
```

Now proceed to install the SSH server using following command:
```
apt install openssh-server
```

Once it has finished installing, you can start the SSH server service with the following command:
```
systemctl start sshd
```

Ensure that you enable the service to automatically start on system boot. You can do this through the following command:
```
systemctl enable sshd
```

## Enabling root login

To enable root login, you need to edit the openssh configuration file. In this guide, we will use "nano" as editor.

:::info
If you do not already have "nano" installed, you will need to install it. To do so, use the following command: `apt install nano`
:::

Proceed to open the configuration file by running:
```
nano /etc/ssh/sshd_config 
```

Using arrows keys to navigate, search for the following line:
```
#PermitRootLogin prohibit-password
```

Change this to the following, which enables remote root login:
```
PermitRootLogin yes
```

Finally, restart the SSH Server in order to apply the new configuration by using the following command:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Ubuntu" label="Ubuntu">

:::info
If you want to re-install the SSH server, make sure that you uninstall it first. You can do so through the command: `apt remove openssh`.
:::

Before installing the SSH server, make sure your system is up to date. Run the following command:
```
apt update
```

Now proceed to install the SSH server using following command:
```
apt install openssh-server
```

Once it has finished installing, you can start the SSH server service with the following command:
```
systemctl start sshd
```

Ensure that you enable the service to automatically start on system boot. You can do this through the following command:
```
systemctl enable sshd
```

## Enabling root login

To enable root login, you need to edit the openssh configuration file. In this guide, we will use "nano" as editor.

:::info
If you do not already have "nano" installed, you will need to install it. To do so, use the following command: `apt install nano`
:::

Proceed to open the configuration file by running:
```
nano /etc/ssh/sshd_config 
```

Using arrows keys to navigate, search for the following line:
```
#PermitRootLogin prohibit-password
```

Change this to the following, which enables remote root login:
```
PermitRootLogin yes
```

Finally, restart the SSH Server in order to apply the new configuration by using the following command:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Fedora" label="Fedora">

:::info
If you want to re-install the SSH server, make sure that you uninstall it first. You can do so through the command: `dnf remove openssh`.
:::

Before installing the SSH server, make sure your system is up to date. Run the following command:
```
dnf update
```

Now proceed to install the SSH server using following command:
```
dnf install openssh-server
```

Once it has finished installing, you can start the SSH server service with the following command:
```
systemctl start sshd
```

Ensure that you enable the service to automatically start on system boot. You can do this through the following command:
```
systemctl enable sshd
```

## Enabling root login

To enable root login, you need to edit the openssh configuration file. In this guide, we will use "nano" as editor.

:::info
If you do not already have "nano" installed, you will need to install it. To do so, use the following command: `dnf install nano`
:::

Proceed to open the configuration file by running:
```
sudo nano /etc/ssh/sshd_config 
```

Using arrows keys to navigate, search for the following line:
```
#PermitRootLogin prohibit-password
```

Change this to the following, which enables remote root login:
```
PermitRootLogin yes
```

Finally, restart the SSH Server in order to apply the new configuration by using the following command:
```
systemctl restart sshd
```
</TabItem>
</Tabs>

You have now successfully installed the SSH Service on your server and can now access your server via SSH.



