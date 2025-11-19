---
id: dedicated-windows-addip
title: "Dedicated Server: Configure additional IP addresses on Windows"
description: "Discover how to optimize server performance and security by using multiple IP addresses effectively → Learn more now"
sidebar_label: Additional IP addresses
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Having multiple IP addresses on a server can be beneficial for several reasons, especially in complex network environments or to meet specific prerequisites for network performance, security, and management. Assigning different IP addresses to different services or applications on the same server can achieve better isolation.




## Preparation

The use of multiple IP addresses assumes that your server package includes them. If you haven't booked any additional IP addresses by default, you would need to add them via an upgrade first. Then, connect to your server via [RDP](dedicated-windows-userdp).




## Configuration



### Gathering Information

First, you need information about the available IP addresses. Additional IP addresses can be viewed in the server management under IP addresses.

![img](https://screensaver01.zap-hosting.com/index.php/s/zAfKskX42rMSRmb/preview)





### Accessing Network Configuration

There are various methods to access the network configuration on a Windows Server. For example, you can access the network configuration via the Control Panel under **Network and Sharing Center**.

Open the **Control Panel**, click on **Network and Internet**, and then on **Network and Sharing Center**. Then, go to "Change adapter settings" and double-click on the network adapter (Ethernet 2). This opens the network adapter, where the properties must be accessed.

Now in the **Properties** of the network adapter, select the **Internet Protocol Version 4 (TCP/IPv4)** option. There, you will see information about the main IP address, subnet mask, default gateway, and the DNS servers. Click on the **Advanced** button to add the additional IP address(es).

![](https://screensaver01.zap-hosting.com/index.php/s/KtBawR89RASs4Jc/preview)



### Adding IP Address(es)

Now, the additional IP address is added via the **Advanced TCP/IP Settings**. To do this, click on the **Add** button under IP addresses and fill in the fields for the **IP Address** and **Subnet Mask**. In the field for the IP address, enter the additional IP address. The subnet mask used is 255.255.255.0.

![](https://screensaver01.zap-hosting.com/index.php/s/gsaceiYPqdiMC7x/preview)



## Conclusion

The IP address has now been successfully configured and added. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂


