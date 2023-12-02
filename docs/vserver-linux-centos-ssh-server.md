---
id: vserver-linux-centos-ssh
title: CentOS SSH Server installation
description: Information on how to install SSH Server on your Linx VPS from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: CentOS SSH Server installation
---

##

## What is SSH?

Secure Shell (SSH) is a secure protocol that enables safe and encrypted access to remote systems. It ensures the confidentiality and integrity of data transmitted across networks.



## Installation

To start the installation process, access your server via VNC. You can follow these steps using the [VNC Console](https://zap-hosting.com/guides/docs/vserver-vnc).

Before installing the SSH server, make sure your system is up to date. Run the following command:

```
sudo yum update
```

Now proceed to install the SSH server using following command:

```
sudo yum –y install openssh-server openssh-clients
```

Now start the SSH server with the following command:

```
sudo systemctl start sshd
```

To automatically start SSH server on system boot run following command:
```
sudo systemctl enable sshd
``` 

That's it. Now you can access your server via SSH