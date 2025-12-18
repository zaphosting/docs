---
id: vserver-windows-nointernet
title: "VPS: Troubleshoot No Internet"
description: "Discover how to troubleshoot and fix internet connection issues on your Windows VPS effectively → Learn more now"
sidebar_label: Troubleshoot No Internet
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

An interrupted or faulty internet connection can be caused by various reasons, such as incorrect IP address, subnet mask, gateway, DNS server or firewall settings. In this guide, we will explain how you can troubleshoot and resolve potential network issues.

<YouTube videoId="VfZyNge5ikA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pqpjBWoHGJWztQG/preview" title="How to Fix Internet Connection Issues on Windows VPS" description="Feel like you understand better when you see things in action? We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>



<InlineVoucher />

## VNC Access without Internet

In case you aren't able to connect to your server through RDP (Remote Desktop) due to a non-functional internet connection, an alternative is to use the VNC (Virtual Network Computing) console which is available on our website.

This option allows you to access your server and resolve issues even if the internet connection is not functional. You can access it by heading over to the **Tools->VNC-Console** section on your server's web interface panel.

On this page, you will be able to activate the console by using the **Open Web Client** button and logging in with your usual credentials.

![](https://screensaver01.zap-hosting.com/index.php/s/L9ZPLHEXbydc6ZS/preview)

## Troubleshooting Methods

### Check IP address, Subnet Mask, Gateway Settings

The first troubleshooting step is to ensure that the technical configuration for the network adapter on your server is all correct, which includes the IP address, subnet mask and the gateway.

Begin by heading over to the **Settings->IP-Addresses** section on your server's web interface panel where you will be able to view all of the IP Addresses that you currently rent with your service.

![](https://screensaver01.zap-hosting.com/index.php/s/8gF7Qsq5k5aYxbq/preview)

Now access your server via RDP or the VNC Console if you are facing issues. Head over into your Windows Network Adapter Settings by going into: 
```
Settings -> Network and Internet -> Change Adapter Options -> Network Adapter
```

Find the **Internet Protocol, Version 4 (TCP/IPv4)** option in the list and select **Properties**.

![](https://screensaver01.zap-hosting.com/index.php/s/xYSSa2txkRkM4bx/preview)

#### Configuring Adapter

Compare the information found in the adapter and ensure that they are set to the following:
- IP Address: This should be the IP Address found on the **IP-Addresses** page on the web interface.
- Subnet Mask: This should usually be `255.255.255.0` as our network uses network class C.
- Default Gateway: This should be your IP Address the same as the first value with the last octet (`.xxx`) removed and replaced with a `.1` instead.

#### Example Setup

:::info
Please note this is an **example** that we provide to make it easier to understand. You should replace the IP Address with your **own** server's IP address.
:::

With an IP address of `185.223.28.163`, your configuration should look like the following:

| Setting         | Value          |
| --------------- | -------------- |
| IP address      | 185.223.28.163 |
| Subnet mask     | 255.255.255.0  |
| Default gateway | 185.223.28.1   |

![](https://screensaver01.zap-hosting.com/index.php/s/PTjQZc5gqP2okAC/preview)

Once ready, press **Ok** to apply the changes. We recommend restarting the server in order to complete the troubleshooting process.



### DNS Server settings

Another troubleshooting step if you continue to face issues with using the internet is to ensure that the DNS Server is configured correctly. You should replace the missing or existing DNS server values with a known host.

We recommend using either Google's or Cloudflare's DNS servers as they are widely-used and reliable.

| DNS Provider | DNS Server Values                     |
| ------------ | ------------------------------------- |
| Google       | Preferred: 8.8.8.8 / Alternate: 8.8.4.4 |
| Cloudflare   | Preferred: 1.1.1.1 / Alternate: 1.0.0.1 |

![](https://screensaver01.zap-hosting.com/index.php/s/oqcR5BHBKLa3ink/preview)

Once ready, press **Ok** again to apply the changes. Here we also recommend restarting the server in order to complete the troubleshooting process.

:::tip
You can open the command prompt (cmd.exe) on your server and execute the following command to set the DNS servers fast and simple: 
```
powershell “Get-NetAdapter | Get-NetIPAddress | ForEach-Object { netsh interface ip set dns name=”$($_.InterfaceAlias)“ static 8.8.8.8; netsh interface ip add dns name=”$($_.InterfaceAlias)“ 1.1.1.1 index=2 }”
```
:::



### Firewall Settings

The final troubleshooting step is to ensure that the Windows Firewall is configured appropriately. 

We recommend attempting to disable the entire Windows Firewall temporarily to see if the issues persist. Use the search function on Windows to open up **Windows Defender Firewall Settings** and select the **Turn Windows Defender Firewall on or off** option on the left section.

![](https://screensaver01.zap-hosting.com/index.php/s/bWcPqHcCZ7ajJSA/preview)

If the issues are resolved when the firewall is disabled, it is likely that the root cause of your issue will be a firewall misconfiguration.

The solution for the firewall is highly dependant on the issue that you are facing. Please use our [Port Forwarding (Firewall)](vserver-windows-port.md) guide if you need further assistance managing firewall rules.



## Reset network configuration

You can reset the network configuration in the web interface administration of your VPS by clicking on the **Reset network configuration** button on the settings page. During this process, the configurations for the IP address, subnet mask, gateway and DNS server are reset to its original state. 

![img](https://screensaver01.zap-hosting.com/index.php/s/YsLZZJZEaf3pemt/preview)


## Conclusion
If you have followed all the steps, the connection should be possible again as usual. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
