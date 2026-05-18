---
id: vserver-windows-ip-configuration
title: "VPS: IP Configuration (Windows)"
description: "Learn how to configure IP settings on a Windows VPS → Learn more now"
sidebar_label: Configure IP Addresses
services:
- vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Configuring IP addresses on your Windows VPS allows you to control how your server communicates within the network. This includes assigning IP addresses, defining the default gateway, and configuring DNS servers required for network connectivity.

Correct IP configuration is important for servers running services such as game servers, web servers, databases, or remote access systems, as it ensures stable network communication and reliable accessibility.

:::warning Server unreachable due to missing internet connection?
In case your server becomes unreachable due to an incorrect network configuration or missing internet connection, remote access via RDP may no longer work. Use the [VNC console](vserver-vnc.md) in the web interface to connect to your server and fix the network configuration.
:::

<InlineVoucher />

## Preparation

Before configuring IP addresses, ensure you have the following information available:

- IP address you want to assign
- Subnet mask
- Default gateway
- DNS servers

This information can be found in the web interface. To do this, open your **VPS management** and navigate to **IP addresses**.

## Configuration

Connect to your VPS using **Remote Desktop (RDP)**. Once connected, open the **Control Panel**. Navigate to **Control Panel → Network and Internet → Network and Sharing Center**.

Click on **Change adapter settings** on the left side. You will see the available network interfaces. Right-click your active network adapter (usually **Ethernet**) and select **Properties**. In the list, select **Internet Protocol Version 4 (TCP/IPv4)** and click **Properties**.

![img](https://screensaver01.zap-hosting.com/index.php/s/3EpqZXg5pgWHoLK/download)

Choose **Use the following IP address** and enter the required values:

- **IP address** → Your assigned IP address
- **Subnet mask** → Your subnet mask
- **Default gateway** → Your gateway
- **DNS servers →** 1.1.1.1, 8.8.8.8

Then configure the DNS servers by selecting **Use the following DNS server addresses** and entering your preferred DNS servers. After entering all values, confirm the configuration with **OK** and close the remaining windows.



## Verification

To verify the configuration, open **Command Prompt** and run:
```
ipconfig
```
![img](https://screensaver01.zap-hosting.com/index.php/s/AK8F3jppqL8xnsx/download)

This command displays all network interfaces and their current IP configuration. Look for your active network adapter and check that the **IPv4 Address** matches the IP address you configured earlier. If the correct IP address appears, the configuration has been successfully applied.





## Conclusion

Congratulations! You have successfully configured the IP settings on your Windows VPS. If you have further questions or need assistance, our support team is available daily to help you.

<InlineVoucher />

