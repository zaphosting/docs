---
id: vserver-linux-sftp
title: "VPS: Establish connection via SFTP"
description: "Discover how to securely transfer files using SFTP and protect your data with encrypted connections → Learn more now"
sidebar_label: SFTP Connection
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';





## Introduction

SFTP is a secure protocol for transferring files between computers via the Internet or a network. It stands for **“SSH File Transfer Protocol ”** or **“Secure File Transfer Protocol ”** and is based on the **SSH protocol (Secure Shell)**.

In contrast to FTP (File Transfer Protocol), where data is transferred unencrypted, SFTP ensures that all data is encrypted and therefore protected from unauthorized access.

<InlineVoucher />



## Establish connection

For the connection via **SFTP**, the login details of the root user are used. This example shows the connection setup with the WinSCP application. Create a **New session** in WinSCP.

![img](https://screensaver01.zap-hosting.com/index.php/s/HDsMr5mnJpC7FtM/download)

Choose `SFTP` as **transfer protocol** in the configuration window of the new session. Next, enter the **IP address** of your server and the port **22**. For the username and password, use the login details of your `root` user.

![img](https://screensaver01.zap-hosting.com/index.php/s/Wq59YHDnirKYkDr/download)

:::warning Use of SSH keys
If you are using an SSH key instead of the simple password option, click on **Advanced** and navigate to **SSH -> Authentication**. You can save your SSH key there.
:::

The first time you connect via SFTP, this message appears because your computer does not yet know the server. Confirm with **“Yes ”** if you trust the server. This will save its security key and you will not be asked again for future connections. This is a normal step when connecting to a new server for the first time.

![img](https://screensaver01.zap-hosting.com/index.php/s/DxErsePZJnkxyCp/download)





## Conclusion

Provided that you have followed all the steps, you have successfully established an SFTP connection to your server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
