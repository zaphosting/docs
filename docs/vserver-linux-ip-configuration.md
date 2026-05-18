---
id: vserver-linux-ip-configuration
title: "VPS: IP Configuration (Ubuntu/Debian)"
description: "Learn how to configure a static IP address on a Linux server running Ubuntu or Debian → Learn more now"
sidebar_label: Configure IP Addresses
services:
- vserver
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

Configuring IP addresses on your Linux VPS allows you to control how your server communicates within the network. This includes assigning IP addresses, defining the default gateway, and configuring DNS servers required for network connectivity.

:::warning Server unreachable due to missing internet connection?
In case your server becomes unreachable due to an incorrect network configuration or missing internet connection, remote access via SSH may no longer work. Use the [VNC console](vserver-vnc.md) in the web interface to connect to your server and fix the network configuration.
:::

<InlineVoucher />

## Preparation

Before configuring a static IP address, ensure you have the following information available:

- IP address you want to assign  
- Subnet mask  
- Default gateway  
- DNS servers  

This information can be found in the web interface. To do this, open your **VPS management** and navigate to **IP addresses**.

## Configuration

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

Ubuntu installations use **Netplan** for network configuration. Connect to your VPS via SSH and locate the Netplan configuration file in the `/etc/netplan/` directory. Open the configuration file:

```bash
nano /etc/netplan/50-cloud-init.yaml
```

Modify the configuration to define a static IP address:
```
network:
  version: 2
  ethernets:
    eth0:
      match:
        macaddress: "bc:24:11:5f:5c:34"
      addresses:
      - "109.230.238.45/24"
      nameservers:
        addresses:
        - 8.8.8.8
        - 1.1.1.1
      set-name: "eth0"
      routes:
      - to: "default"
        via: "109.230.238.1"
```

Adjust the following values to match your network configuration:

- 109.230.238.45 → Your static IP address
- 109.230.238.1 → Your gateway
- DNS addresses → Your preferred DNS servers

Save the file and apply the configuration:

```
sudo netplan apply
```

</TabItem> <TabItem value="debian" label="Debian">

Debian commonly uses the network interfaces configuration file instead of Netplan. Connect to your VPS via SSH and open the network interfaces configuration file:

```
nano /etc/network/interfaces
```

Add or modify the configuration for your network interface. Example configuration:

```bash
auto lo
iface lo inet loopback

# The primary network interface
allow-hotplug ens18
iface ens18 inet static
        address 134.255.219.160/24
        gateway 134.255.219.1
        # dns-* options are implemented by the resolvconf package, if installed
        dns-nameservers 1.1.1.1
```

Adjust the values according to your network configuration:
- address → Your static IP address
- netmask → Your subnet mask
- gateway → Your default gateway
- dns-nameservers → Your preferred DNS servers

After saving the configuration file, restart the networking service:

```
systemctl restart networking
```

</TabItem> </Tabs>



## Verification

After applying the configuration, it is recommended to verify that the new IP address has been applied correctly. To do this, run the following command in your terminal:

```
ip a
```


This command displays all **network interfaces** available on the system along with their current configuration details. In the output, locate the interface that was configured earlier, usually named `eth0`, `ens18`, or a similar identifier depending on the system.

Within the interface section, look for the **`inet` entry**, which represents the IPv4 address assigned to the interface. The output should contain the static IP address you configured earlier. For example:

```
inet 109.230.238.45/24
```

![img](https://screensaver01.zap-hosting.com/index.php/s/TmaCRcfLgiabTBp/preview)

If the correct address appears in the output, the static IP configuration has been successfully applied. If the new IP address does not appear, verify the configuration file again and ensure that the changes were saved correctly before reapplying the configuration with:

```
sudo netplan apply
```



## Conclusion

Congratulations! You have successfully configured your IP address on your Linux server. For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
