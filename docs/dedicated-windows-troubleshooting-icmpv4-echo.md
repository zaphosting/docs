---
id: dedicated-windows-troubleshooting-icmpv4-echo
title: "Dedicated: Network Troubleshooting - ICMPv4 Echo missing – Server appears offline"
description: "Discover how to allow ICMPv4 Echo requests in the Windows Firewall so your server can be detected correctly by monitoring systems → Learn more now"
sidebar_label: ICMPv4 Echo missing
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

In some situations a Windows server may appear **offline in the control panel** even though the system itself is running normally. This behavior is usually related to firewall settings that block **ICMPv4 Echo requests**. These requests are used by the well known `ping` command and are commonly used by monitoring systems to determine whether a server or IP address is reachable.

If the Windows Firewall blocks ICMP Echo requests, the monitoring system cannot receive a response from the server. As a result, the control panel may show the server or the assigned IP addresses as offline even though the server itself is running without issues.

![img](https://screensaver01.zap-hosting.com/index.php/s/EBAybY5LRfk89kN/preview)



## Cause

The most common reason for this issue is a missing rule in the **Windows Defender Firewall** that allows incoming ICMPv4 Echo requests. Without this rule, the firewall blocks ping requests by default. 

Monitoring systems rely on these responses to determine server availability, which is why the system may appear offline even though the services on the server continue to operate normally.



## Solution

To resolve this issue, a firewall rule must be created that allows ICMPv4 Echo requests. Start by establishing a connection via the HTML5 console in the iLO dashboard. To do this, click on **HTML5** in the dashboard and log in with your usual login credentials.

![img](https://screensaver01.zap-hosting.com/index.php/s/PE87d8gZSB7c9gk/download)

Once you are logged in, continue by opening the **Windows Defender Firewall with Advanced Security** interface. Press `Windows + R`, enter the following command and confirm with Enter:

```
wf.msc
```
The advanced firewall configuration window will open. In the left navigation menu select **Inbound Rules**, since the server must accept incoming ICMP requests. On the right side choose **New Rule** to create a new firewall rule.

During the rule creation process choose **Custom** as the rule type. In the next step select the protocol type **ICMPv4**. After selecting the protocol, open the **Customize** settings and enable the option for **Echo Request**, which allows the server to respond to ping requests.

Continue through the wizard and select **Allow the connection** as the action for this rule. In the profile selection step you can usually enable the rule for all profiles so it works regardless of whether the server is in a public, private, or domain network environment.

Finally assign a clear name to the rule, for example `Allow ICMPv4 Echo Requests`. After finishing the wizard, the new rule will immediately allow incoming ICMP Echo requests.

![img](https://screensaver01.zap-hosting.com/index.php/s/iciYwqAkYLTMkgC/download)



## Verification

Once the rule has been created, you can verify that the server responds to ping requests. From another system, run the following command:
```
ping <YOUR_SERVER_IP>
```
If the server responds successfully, the monitoring system will also be able to detect it again. After a short moment the server status in the panel should change from offline to online.



## Conclusion

Congratulations! By creating the ICMPv4 Echo rule in the Windows Firewall, you have successfully ensured that your Windows Dedicated Server can respond to ping requests again.

This allows monitoring systems to correctly detect the availability of your server and prevents it from appearing offline in the control panel.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

