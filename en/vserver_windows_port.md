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

## 🔓 Port forwarding with Windows Firewall

First the "**Windows Defender Firewall with extended security**" must be opened.
This can be searched for by clicking on the Windows logo:

![](https://screensaver01.zap-hosting.com/index.php/s/Xqem7HXHXYTn8TJ/preview)

With the incoming rule, the ports are forwarded for applications that try to communicate with the server from outside.
In the outbound rule, the ports are forwarded for applications that want to communicate from the server to the outside.

The port forwarding for the "**Outgoing Rule**" works the same way as for the "**Incoming Rule**", so in this example we only show the port forwarding for the "**Incoming Rule**".

As soon as the "**Inbound Rule**" or "**Outbound Rule**" is selected in the firewall administration, a "**New Rule**" must be created for it.

![](https://screensaver01.zap-hosting.com/index.php/s/da2GeLR29Cbqcon/preview)

With this new rule, the "**Port**" is selected as the "**Rule type**" and confirmed with "**Next >**

![](https://screensaver01.zap-hosting.com/index.php/s/TGDrfJyiBW5qQj7/preview)

Depending on the application "**TCP**" or "**UDP**" must now be selected. 
As soon as you have found out and selected which of the two is to be used for the desired application, you must now enter the port which is to be forwarded under "**Determined local ports:**".
This is confirmed again with "**Next >**".

![](https://screensaver01.zap-hosting.com/index.php/s/6Xzt9e3espHAiGX/preview)

Now you can choose whether the server should allow, allow only under certain conditions or block the connection with the port.
This is confirmed again with "**Next >**".

![](https://screensaver01.zap-hosting.com/index.php/s/N8nFzK24atn4NSq/preview)

In the "**Profile**" you can now select whether this rule should only be active for certain networks or for all networks. 
This is confirmed again with "**Next >**".

![](https://screensaver01.zap-hosting.com/index.php/s/6YL7qjCqd5bNK6w/preview)

With "**Name**" only a name for this new "**Rule**" must be entered, this can be freely selected.

> You should choose a name that is still unused and unique so that it can be found under "**Incoming rule**" or "**Outgoing rule**".

![](https://screensaver01.zap-hosting.com/index.php/s/kdi5NMsfi5RgcGm/preview)

As soon as "**Finish**" is confirmed with the button, the rule is activated and the port is forwarded.

![](https://screensaver01.zap-hosting.com/index.php/s/qDzZMkkMSF7m3Rk/preview)
