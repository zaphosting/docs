---
id: vserver-windows-nointernet
title: "VPS:  No Internet what now?"
description: Information on how to solve issues with non existing internet connection on windows vRootserver from ZAP-Hosting does not show Internet access - ZAP-Hosting.com documentation
sidebar_label: No Internet what now?
---



## Introduction

An interrupted or faulty Internet connection can be caused by various reasons, such as incorrect IP address, subnet mask, gateway, DNS server or firewall settings. In the following, we will explain how you can check, identify and fix these possible issues.



## Access without Internet

In case you don't have RDP access due to a non-functional Internet connection, an alternative is to use the VNC (Virtual Network Computing) console. This option allows you to access the service and solve issues even if the Internet connection is not functional. You can access it by opening the **Tools** section in your Dashboard and selecting the **VNC Console**. There you can activate the console by using the green "Open Web Client" button and then logging in with your usual credentials.

![img](https://screensaver01.zap-hosting.com/index.php/s/y3S4Gw7scwZnHwy/preview)



## Troubleshooting

### Step 1: IP address, subnet mask, gateway settings

If the Internet connection is not functional, this may be due to incorrect configuration of the IP address, subnet mask, and gateway. In this case, make sure that the correct information is entered. You can see the information about your IP address, subnet mask and gateway in your dashboard under Settings at IP Addresses. 

Now open the network settings of your server's operating system. You can find them under Windows Settings -> Network and Internet -> Change Adapter Options -> Network Adapter -> Properties -> Internet Protocol, Version 4 (TCP/IPv4).

![img](https://screensaver01.zap-hosting.com/index.php/s/xYSSa2txkRkM4bx/preview)



Compare the information with the information from the web interface and correct those if necessary. In our network we normally use network class C with a subnet mask of 255.255.255.0. For the default gateway you use the information of your IP address. However, the last octet must be changed to the value 1 (XXX.XXX.XXX.XXX -> XXX.XXX.XXX.1).



**Example**

If for example a service has the IP address "185.223.28.163", then the configuration would look like this: 

| Setting         | Value          |
| --------------- | -------------- |
| IP address      | 185.223.28.163 |
| Subnet mask     | 255.255.255.0  |
| Default gateway | 185.223.28.1   |



![img](https://screensaver01.zap-hosting.com/index.php/s/PTjQZc5gqP2okAC/preview)



Click on "Ok" to apply the changes. In certain situations, it may be necessary to restart the service in order to complete the troubleshooting process.



### Step 2: DNS server settings

If the Internet connection is still not functional, then this may also be due to a non-functional DNS server. Try replacing the missing or existing DNS server if it is not functional. There are several DNS server options available, for example, the well-known DNS server solutions from Google and Cloudflare.

| DNS-Server | IP-Adresses                                 |
| ---------- | ------------------------------------------- |
| Google     | Preferred: 8.8.8.8 Alternate: 8.8.4.4<br /> |
| Cloudflare | Preferred: 1.1.1.1 Alternate: 1.0.0.1<br /> |

![img](https://screensaver01.zap-hosting.com/index.php/s/oqcR5BHBKLa3ink/preview)



Click on "Ok" to apply the changes. In certain situations, it may be necessary to restart the service in order to complete the troubleshooting process.



### Step 3: Firewall settings

Another possibility for a missing or faulty Internet connection can be caused by an incorrect configuration of the firewall. This can usually be quickly identified by temporarily disabling the firewall. If the problem does not occur afterwards, a specific firewall rule will prevent the necessary exchange of information. 

![img](https://screensaver01.zap-hosting.com/index.php/s/zpfaByLkxPj8XtH/preview)

In this case, you need to make sure that you check the latest changes in detail and fix them. Alternatively, you can reset the Windows Firewall rules by clicking Restore Default Policy under Actions.



