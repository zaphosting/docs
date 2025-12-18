---
id: voiceserver-ts3backup
title: "Voiceserver: Create, download and import backups"
description: "Discover how to easily create and manage backups with free storage and upgrade options for secure data protection → Learn more now"
sidebar_label: Backups
services:
  - voiceserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

We offer the possibility to create individual backups per click. This allows you to create backups easily and without much effort as well as import them at any time later. All backups are stored on your storage server, which includes 10GB free storage space by default. If you need more, then you can also upgrade to Premium Storage.

<InlineVoucher />

## Create Backups

<Tabs>

<TabItem value="Webinterface" label="TeamSpeak Server Product" default>

To create a backup on our website, you must open your Voiceserver service in the web interface and navigate to **Snapshots** in the administration. Once there, click on the green **Create snapshot** button to create a backup.

![img](https://screensaver01.zap-hosting.com/index.php/s/G2EfYtMnqGzrjpC/download)

:::warning External Backups
The import of external backups (snapshots) is not possible for security reasons. Exceptions are excluded. 
:::

</TabItem>
<TabItem value="self_hosted" label="Self hosted (VPS/Dedicated Server)">

As with the TeamSpeak Server product, if you use the GS/TS3 interface, you can create a backup (snapshot) with a click via the TeamSpeak Server service administration. However, you can also create a backup manually using the login details of the TeamSpeak instance (Query) and the external application YatQA. 

![](https://screensaver01.zap-hosting.com/index.php/s/GNak6s26sFcX4bA/preview)

To create a snapshot in YatQA, you have to go to **Miscellaneous** at the top of the application and then click on **Create and save snapshot**. 

![](https://screensaver01.zap-hosting.com/index.php/s/CZWZRYSXpCTi4j3/preview)

</TabItem>
</Tabs>

## Download Backups

Created backups (snapshots) can be downloaded from your storage server via FTP. The login details can be found in the web interface in your storage server service. If you do not know how to use FTP, we recommend that you use our general [FTP access](gameserver-ftpaccess.md) guide.

![img](https://screensaver01.zap-hosting.com/index.php/s/NTR5oygagD6M6mY/preview)

![img](https://screensaver01.zap-hosting.com/index.php/s/MiX4GG2zoe5mkSc/preview)

## Conclusion

You have successfully created a backup if you have followed all the steps mentioned. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
