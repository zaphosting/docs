---
id: vserver-linux-ssh-server
title: Linux SSH Server installation
description: Information on how to install SSH Server on your Linx VPS from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Linux SSH Server installation
---

##

## What is SSH?

Secure Shell (SSH) is a secure protocol that enables safe and encrypted access to remote systems. It ensures the confidentiality and integrity of data transmitted across networks.


## Installation

To start the installation process, access your server via VNC. You can follow these steps using the [VNC Console](https://zap-hosting.com/guides/docs/vserver-vnc).


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<!---  Guide for CentOS  -->

<Tabs>
<TabItem value="CentOS" label="CentOS">
<br/>
:::info
In case you want to re-install the SSH server, make sure that you uninstall it first.
:::

```
yum remove openssh
```

Before installing the SSH server, make sure your system is up to date. Run the following command:

```
yum update
```

Now proceed to install the SSH server using following command:

```
yum install openssh-server
```

Now start the SSH server with the following command:

```
systemctl start sshd
```

To automatically start SSH server on system boot run following command:
```
systemctl enable sshd
``` 

## Enabling root login

To enable root login, you need to edit the openssh configuration file. In this guide, we will use "nano" as editor.

:::info
If "nano" is not already installed, it must be installed first. To do so, use the following command:
:::

```
yum install nano
```

Now let's open the configuration file

```
nano /etc/ssh/sshd_config 
```

We are looking for the following line

```
#PermitRootLogin prohibit-password
```

Now change it to

```
PermitRootLogin yes
```

Finally restart the ssh server with the following command

```
systemctl restart sshd
```


<!---  Guide for Debian  -->

<Tabs>
<TabItem value="Debian" label="Debian">
<br/>

:::info
In case you want to re-install the SSH server, make sure that you uninstall it first.
:::

```
apt remove openssh
```

Before installing the SSH server, make sure your system is up to date. Run the following command:

```
apt update
```

Now proceed to install the SSH server using following command:

```
apt install openssh-server
```

Now start the SSH server with the following command:

```
systemctl start sshd
```

To automatically start SSH server on system boot run following command:
```
systemctl enable sshd
```

## Enabling root login

To enable root login, you need to edit the openssh configuration file. In this guide, we will use "nano" as editor.

:::info
If you do not already have "nano" installed, you will need to install it.
:::

```
apt install nano
```

Now let's open the configuration file

```
nano /etc/ssh/sshd_config 
```

We are looking for the following line

```
#PermitRootLogin prohibit-password
```

Now change it to

```
PermitRootLogin yes
```

Finally restart the ssh server with the following command

```
systemctl restart sshd
```


<!---  Guide for Ubuntu   -->

<Tabs>
<TabItem value="Ubuntu" label="Ubuntu">
<br/>


:::info
In case you want to re-install the SSH server, make sure that you uninstall it first.
:::

```
apt remove openssh
```

Before installing the SSH server, make sure your system is up to date. Run the following command:

```
apt update
```

Now proceed to install the SSH server using following command:

```
apt install openssh-server
```

Now start the SSH server with the following command:

```
systemctl start sshd
```

To automatically start SSH server on system boot run following command:
```
systemctl enable sshd
```


## Enabling root login

To enable root login, you need to edit the openssh configuration file. In this guide, we will use "nano" as editor.

:::info
If you do not already have "nano" installed, you will need to install it.
:::

```
apt install nano
```

Now let's open the configuration file

```
nano /etc/ssh/sshd_config 
```

We are looking for the following line

```
#PermitRootLogin prohibit-password
```

Now change it to

```
PermitRootLogin yes
```

Finally restart the ssh server with the following command

```
systemctl restart sshd
```


<!---  Guide for Fedora   -->

<Tabs>
<TabItem value="Fedora" label="Fedora">
<br/>

:::info
In case you want to re-install the SSH server, make sure that you uninstall it first.
:::

```
dnf remove openssh
```

Before installing the SSH server, make sure your system is up to date. Run the following command:

```
dnf update
```

Now proceed to install the SSH server using following command:

```
dnf install openssh-server
```

Now start the SSH server with the following command:

```
systemctl start sshd
```

To automatically start SSH server on system boot run following command:

```
systemctl enable sshd
```

## Enabling root login

To enable root login, you need to edit the openssh configuration file. In this guide, we will use "nano" as editor.

:::info
If you do not already have "nano" installed, you will need to install it.
:::

```
dnf install nano
```

Now let's open the configuration file

```
sudo nano /etc/ssh/sshd_config 
```

We are looking for the following line

```
#PermitRootLogin prohibit-password
```

Now change it to

```
PermitRootLogin yes
```

Finally restart the ssh server with the following command

```
systemctl restart sshd
```

<br>

That's it. Now you can access your server via SSH.