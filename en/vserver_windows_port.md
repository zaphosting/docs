---
id: vserver_windows_port
title: VPS: Forwarding ports on Windows servers
description: Information on how to forward ports on your Windows VPS from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Port Forwarding
---

## 📝 Port Forwarding

A firewall controls the incoming and outgoing traffic between the server and the Internet.
Opened ports can be a security risk, due to which not every port is automatically opened.

If opened ports are needed for a game server or certain applications, a port forward must be performed.

First the "**Windows Defender Firewall with extended security**" must be opened.
This can be searched for by clicking on the Windows logo:

![](https://screensaver01.zap-hosting.com/index.php/s/7XNio37KeCjEj59/preview)

With the incoming rule, the ports are forwarded for applications that try to communicate with the server from outside.
In the outbound rule, the ports are forwarded for applications that want to communicate from the server to the outside.

<!--DOCUSAURUS_CODE_TABS-->

<!--💾 Allowing programs in the Windows firewall-->

## 💾 Allowing programs in the Windows firewall

The release for the "**Outgoing rule**" works in the same way as for the "**Incoming rule**", so in this example we only show the release of a programme for the "**Incoming rule**".

As soon as the "**Incoming rule**" or "**Outgoing rule**" has been selected in the firewall administration, a "**New rule**" must be created for it.

![](https://screensaver01.zap-hosting.com/index.php/s/g5g8W8CwAaDxmgN/preview)

For this new rule, "**Program**" is selected as the "**Rule type**" and confirmed with "**Next >**".

![](https://screensaver01.zap-hosting.com/index.php/s/QW7ktzgFPbcan5H/preview)

Here you can search directly for our programme, in our case we take Chrome for example:

![](https://screensaver01.zap-hosting.com/index.php/s/9kkxDjfcJNfsFCe/preview)

Now you can choose whether the server should allow the connection to the programme, only allow it under certain conditions or block it.

![](https://screensaver01.zap-hosting.com/index.php/s/K8NgTKaSCR6W6FC/preview)

This is confirmed again with "**Continue >**".

In the "**Profile**" you can now choose whether this rule should only be active for certain networks or for all. 

![](https://screensaver01.zap-hosting.com/index.php/s/HdMqPRML2nSTYb2/preview)

At "**Name**" only a name for this new "**Rule**" must be entered, this is freely selectable.

> A name should be chosen that is still unused and unique so that it can be found again under "**Incoming rule**" or "**Outgoing rule**".

![](https://screensaver01.zap-hosting.com/index.php/s/cfRpq3zA9on2aoW/preview)

As soon as you confirm with the button "**Complete**", the rule is activated and the port is released.


<!--🔓 Port forwarding with Windows Firewall-->

## 🔓 Port forwarding with Windows Firewall


The port forwarding for the "**Outgoing Rule**" works the same way as for the "**Incoming Rule**", so in this example we only show the port forwarding for the "**Incoming Rule**".

As soon as the "**Inbound Rule**" or "**Outbound Rule**" is selected in the firewall administration, a "**New Rule**" must be created for it.

![](https://screensaver01.zap-hosting.com/index.php/s/g5g8W8CwAaDxmgN/preview)

With this new rule, the "**Port**" is selected as the "**Rule type**" and confirmed with "**Next >**

![](https://screensaver01.zap-hosting.com/index.php/s/bcF3AA3SGymHMPJ/preview)

Depending on the application "**TCP**" or "**UDP**" must now be selected. 
As soon as you have found out and selected which of the two is to be used for the desired application, you must now enter the port which is to be forwarded under "**Determined local ports:**".
This is confirmed again with "**Next >**".

![](https://screensaver01.zap-hosting.com/index.php/s/SHmYamANJYTBa7y/preview)

Now you can choose whether the server should allow, allow only under certain conditions or block the connection with the port.
This is confirmed again with "**Next >**".

![](https://screensaver01.zap-hosting.com/index.php/s/K8NgTKaSCR6W6FC/preview)

In the "**Profile**" you can now select whether this rule should only be active for certain networks or for all networks. 
This is confirmed again with "**Next >**".

![](https://screensaver01.zap-hosting.com/index.php/s/HdMqPRML2nSTYb2/preview)

With "**Name**" only a name for this new "**Rule**" must be entered, this can be freely selected.

> You should choose a name that is still unused and unique so that it can be found under "**Incoming rule**" or "**Outgoing rule**".

![](https://screensaver01.zap-hosting.com/index.php/s/cfRpq3zA9on2aoW/preview)

As soon as "**Finish**" is confirmed with the button, the rule is activated and the port is forwarded.

<!--END_DOCUSAURUS_CODE_TABS-->
