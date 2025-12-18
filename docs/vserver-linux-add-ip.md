---
id: vserver-linux-add-ip
title: "VPS: Configurate IP address(es)"
description: "Learn how to configure and manage primary and additional IP addresses on Debian and Ubuntu systems for optimized network setup → Learn more now"
sidebar_label: Configure IP address(es)
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Are you looking to configure your network configuration and specify IP addresses?

<InlineVoucher />



## Configuring IP address

This section describes how to define and determine the main IP address.

<Tabs>
  <TabItem value="debian" label="Debian" default>

The network configuration in Debian takes place via the network interfaces. Execute the `sudo nano /etc/network/interfaces` command to open the network configuration. By default, the content of the network configuration should look like this: 

```
auto lo
iface lo inet loopback

allow-hotplug eth0
iface eth0 inet static
        address XXX.XXX.XXX.XXX
        netmask 255.255.255.0
        gateway XXX.XXX.XXX.1
```

If this is not yet available, the content must look as shown. Replace the IP address placeholder (XXX.XXX.XXX.XXX) with your own server IP address, displayed in the server administration in the dashboard. Use `255.255.255.0` (class C network) as subnet and make sure that the last octet only contains the 1 for the gateway. 

Save the changes by pressing CTRL+X and confirm the changes with the Enter key. The network module must now be restarted so that the new IPv4 address becomes active, this is done with the following command:

```
sudo service networking restart
```



  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu">

```
[Match]
Name = eth0

[Network]
Description = Interface eth0 autoconfigured by PVE
Address = 185.223.31.234/24
Gateway = 185.223.31.1
DHCP = no
IPv6AcceptRA = false
```

 </TabItem>
</Tabs>

## Configuring additional IP addresses
<Tabs>
  <TabItem value="debian" label="Debian" default>

```
allow-hotplug eth0:1
iface eth0 inet static
        address XXX.XXX.XXX.XXX
        netmask 255.255.255.0
        gateway XXX.XXX.XXX.1
```

  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu">

   Placeholder

</TabItem>
</Tabs>

## Testing the configuration
To check the correctness and functionality of a configured IP address, a ping test can be carried out. You can do this for example on your own computer by opening the command prompt (cmd.exe) and executing the following command: 

```
ping <your_server_ip>
```

After executing the command and with the assumption that you have configured the IP address correctly, the result should look like this:

```
Pinging XXX.XXX.XXX.XX with 32 bytes of data:
Reply from XXX.XXX.XXX.XX: bytes=32 time=25ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=22ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=22ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=23ms TTL=56

Ping statistics for XXX.XXX.XXX.XX:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 22ms, Maximum = 25ms, Average = 23ms
```



## Conclusion

Congratulations, you have successfully configured your network configuration. For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
