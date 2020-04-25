---
id: vserver_windows_port
title: Ports freigeben
sidebar_label: Port forwarding
---

## 📝 Port forwarding

A firewall controls the incoming and outgoing traffic between the server and the Internet.
Opened ports can be a security risk, due to which not every port is automatically opened.

If opened ports are needed for a game server or certain applications, a port forward must be performed.

## 🔓 Port forwarding with Windows Firewall

First the "**Windows Defender Firewall with extended security**" must be opened.
This can be searched for by clicking on the Windows logo:

![](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/HEP3S6odP6Ns2D6?x=1600&y=439&a=true&file=ApplicationFrameHost_AODliwqeB0.png&scalingup=0)

With the incoming rule, the ports are forwarded for applications that try to communicate with the server from outside.
In the outbound rule, the ports are forwarded for applications that want to communicate from the server to the outside.

The port forwarding for the "**Outgoing Rule**" works the same way as for the "**Incoming Rule**", so in this example we only show the port forwarding for the "**Incoming Rule**".

As soon as the "**Inbound Rule**" or "**Outbound Rule**" is selected in the firewall administration, a "**New Rule**" must be created for it.

![](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/rqskQbAodSyP9XA?x=1600&y=439&a=true&file=ApplicationFrameHost_4WMoW2MuyA.png&scalingup=0)

With this new rule, the "**Port**" is selected as the "**Rule type**" and confirmed with "**Next >**

![](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/MSGYz6r2xYoJ6jt?x=1600&y=439&a=true&file=ApplicationFrameHost_gROrMf74OM.png&scalingup=0)

Depending on the application "**TCP**" or "**UDP**" must now be selected. 
As soon as you have found out and selected which of the two is to be used for the desired application, you must now enter the port which is to be forwarded under "**Determined local ports:**".
This is confirmed again with "**Next >**".

![](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/WLLyPRnaoEaKcrR?x=1920&y=562&a=true&file=ApplicationFrameHost_YMRsNuK0K7.png&scalingup=0)

Now you can choose whether the server should allow, allow only under certain conditions or block the connection with the port.
This is confirmed again with "**Next >**".

![](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/rYLWwDG4gsEFa6j?x=1920&y=562&a=true&file=ApplicationFrameHost_toEEUaSbEi.png&scalingup=0)

In the "**Profile**" you can now select whether this rule should only be active for certain networks or for all networks. 
This is confirmed again with "**Next >**".

![](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/MieGpgXiwdnDyHC?x=1920&y=562&a=true&file=ApplicationFrameHost_MxGG9O9Tqe.png&scalingup=0)

With "**Name**" only a name for this new "**Rule**" must be entered, this can be freely selected.

> You should choose a name that is still unused and unique so that it can be found under "**Incoming rule**" or "**Outgoing rule**".

![](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/iS3MyjM2wfe2scs?x=1920&y=562&a=true&file=ApplicationFrameHost_bi4C03LP7e.png&scalingup=0)

As soon as "**Finish**" is confirmed with the button, the rule is activated and the port is forwarded.

![](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/Mg8Dm9dmjEasG8R?x=1920&y=562&a=true&file=ApplicationFrameHost_n6AiQeBlHU.png&scalingup=0)
