---
id: voiceserver-query
title: "Voiceserver: Access TeamSpeak Query"
description: "Discover how to manage your TeamSpeak server externally using Query Login for efficient server control and administration → Learn more now"
sidebar_label: Query Login
services:
  - voiceserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

The query login of TeamSpeak allows you to access the server query interface, where you can manage your TeamSpeak server externally via commands.

:::warning Server Admin Query Access
Our Teamspeak Server products do not include Server Admin Query access. 
:::

<InlineVoucher />

## Login details

<Tabs>
<TabItem value="Webinterface" label="TeamSpeak Server Product" default>

For security purposes, the **Server Admin Query** login is not available with the **TeamSpeak server product**. However, if you have admin rights on your Teamspeak server, you can create your own Query Login using the following steps.

:::info
Features such as import snapshot, change slots/ports and similar are not available. These settings are predefined by us and cannot be adjusted manually. 
:::

To create your own Query Login, you have to click on "Server Query Login" in the Teamspeak Client under Tools.
Afterwards you have to enter a name for the login, this is also the login name e.g. "MyQueryLogin":

![](https://screensaver01.zap-hosting.com/index.php/s/gMeQtSTkrtRzbk7/preview)

After this has been confirmed with "OK", a password is displayed. This must be saved, it cannot be changed later. 

![](https://screensaver01.zap-hosting.com/index.php/s/c7W3mzRMJ4EP23E/preview)


With the now created login data a connection can be established e.g. via [YaTQA](https://yat.qa). For this purpose, the server IP, the Query port, the server port and the Query login name and password are required. 

The Server IP, the Query Port and the Server Port can be viewed on the Dashboard in the web interface: 

![](https://screensaver01.zap-hosting.com/index.php/s/RGsk8wfBkoCPzA4/preview)

</TabItem>
<TabItem value="self_hosted" label="Self hosted (VPS/Dedicated Server)">

If the Teamspeak server has been installed on your own VPS or Dedicated Server via the web interface, the normal "Server Admin Query" can be used. The login data can be found in the web interface of the Teamspeak instance. 

</TabItem>
</Tabs>

## Access Query

Fill in the provided/self-created login details for your Query Login under Quick Connect in the **YatQA** application and then click on the **Connect button**. 

![](https://screensaver01.zap-hosting.com/index.php/s/ZaBNRaQxfSjHKwT/download)

:::warning Custom Query Port Error
By default, an error should occur after an initial installation if you specify a port other than the default query port. This is normal and can be solved as follows: 

![img](https://screensaver01.zap-hosting.com/index.php/s/3mofjG5RKPM9yBW/download)
:::

## Conclusion

You have successfully established a connection to the query by using YatQA. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
