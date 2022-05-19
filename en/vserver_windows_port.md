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

![](https://user-images.githubusercontent.com/61839701/166197502-2350fe8a-3965-4ba0-8237-66f1d7b2e94a.png)

With the incoming rule, the ports are forwarded for applications that try to communicate with the server from outside.
In the outbound rule, the ports are forwarded for applications that want to communicate from the server to the outside.


***

<!--DOCUSAURUS_CODE_TABS-->

<!--💾 Allowing programs in the Windows firewall-->

## 💾 Allowing programs in the Windows firewall

The release for the "**Outgoing rule**" works in the same way as for the "**Incoming rule**", so in this example we only show the release of a programme for the "**Incoming rule**".

As soon as the "**Incoming rule**" or "**Outgoing rule**" has been selected in the firewall administration, a "**New rule**" must be created for it.

![](https://user-images.githubusercontent.com/61839701/166197531-984726dd-befc-4488-bcc3-c140e7229076.png)

For this new rule, "**Program**" is selected as the "**Rule type**" and confirmed with "**Next >**".

![](https://user-images.githubusercontent.com/61839701/166197550-e9e0e472-40d0-4c42-ab80-00271aff2628.png)

Here you can search directly for our programme, in our case we take Chrome for example:

![](https://user-images.githubusercontent.com/61839701/166197577-3d2f4116-2fc4-4c35-a169-c94cd7871d9d.png)

Now you can choose whether the server should allow the connection to the programme, only allow it under certain conditions or block it.

![](https://user-images.githubusercontent.com/61839701/166197598-1af69566-40b4-46e9-8ec9-17f5aea8a393.png)

This is confirmed again with "**Continue >**".

In the "**Profile**" you can now choose whether this rule should only be active for certain networks or for all. 

![](https://user-images.githubusercontent.com/61839701/166197624-8883a2d4-da7a-482b-9939-79cd15d6ac64.png)

At "**Name**" only a name for this new "**Rule**" must be entered, this is freely selectable.

> A name should be chosen that is still unused and unique so that it can be found again under "**Incoming rule**" or "**Outgoing rule**".

![](https://user-images.githubusercontent.com/61839701/166197676-0e575fa1-5ae7-48be-b5fc-b9d1ddad0d8c.png)

As soon as you confirm with the button "**Complete**", the rule is activated and the port is released.


<!--🔓 Port forwarding with Windows Firewall-->

## 🔓 Port forwarding with Windows Firewall


The port forwarding for the "**Outgoing Rule**" works the same way as for the "**Incoming Rule**", so in this example we only show the port forwarding for the "**Incoming Rule**".

As soon as the "**Inbound Rule**" or "**Outbound Rule**" is selected in the firewall administration, a "**New Rule**" must be created for it.

![](https://user-images.githubusercontent.com/61839701/166197550-e9e0e472-40d0-4c42-ab80-00271aff2628.png)

With this new rule, the "**Port**" is selected as the "**Rule type**" and confirmed with "**Next >**

![](https://user-images.githubusercontent.com/61839701/166197723-8952c3d0-939b-4120-a6c7-79a6e37399cc.png)

Depending on the application "**TCP**" or "**UDP**" must now be selected. 
As soon as you have found out and selected which of the two is to be used for the desired application, you must now enter the port which is to be forwarded under "**Determined local ports:**".
This is confirmed again with "**Next >**".

![](https://user-images.githubusercontent.com/61839701/166197748-71fdb9ee-c113-4cc9-b80d-bdb6c7f14205.png)

Now you can choose whether the server should allow, allow only under certain conditions or block the connection with the port.
This is confirmed again with "**Next >**".

![](https://user-images.githubusercontent.com/61839701/166197773-c4b16bf2-579b-4f8b-890a-0618d836f93a.png)

In the "**Profile**" you can now select whether this rule should only be active for certain networks or for all networks. 
This is confirmed again with "**Next >**".

![](https://user-images.githubusercontent.com/61839701/166197793-7888540c-27bf-4daa-9160-fe9bfc961117.png)

With "**Name**" only a name for this new "**Rule**" must be entered, this can be freely selected.

> You should choose a name that is still unused and unique so that it can be found under "**Incoming rule**" or "**Outgoing rule**".
![715-570-max](https://screensaver01.zap-hosting.com/index.php/s/cfRpq3zA9on2aoW/preview)

As soon as "**Finish**" is confirmed with the button, the rule is activated and the port is forwarded.

<!--END_DOCUSAURUS_CODE_TABS-->
