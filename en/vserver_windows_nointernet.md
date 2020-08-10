---
id: vserver_windows_nointernet
title: No Internet what now?
sidebar_label: No Internet what now?
---


## 🖥 No internet, what now?

As a rule, the server is "started" when it has no active internet connection as shown below:

![](https://screensaver01.zap-hosting.com/index.php/s/36Fw6TP8JCiwAia/preview)

But if he is online and still has no internet, you can check this via the serial console: 

![](https://screensaver01.zap-hosting.com/index.php/s/aq37j3XG72meGH9/preview)


## 🖥 How do I re-establish the connection?

First of all, we connect to the server via the serial console as shown below and log into it. 

![](https://screensaver01.zap-hosting.com/index.php/s/2WjFgoyE5fdstd6/preview)

Then, we proceed to open the adapter settings. For this, we do a left click on the internet connection as shown here:

![](https://screensaver01.zap-hosting.com/index.php/s/jsRoZdbYLBeFpp7/preview)

Then, we would click on **change adapter options** as shown here:

![](https://screensaver01.zap-hosting.com/index.php/s/KKPJp6QQRjaHNKe/preview)

Now, we will open the **properties** of the adapter via **right clicking** the Ethernet adapter as shown here:

![](https://screensaver01.zap-hosting.com/index.php/s/ciF26AKKyKed8gA/preview)

Then, we will **double click** on the **IPv4 connection** as shown here:

![](https://screensaver01.zap-hosting.com/index.php/s/eNedHmYkAgJARNi/preview)

Then, we will check whether the **server's** IP address from the control panel is entered there. In the following, you see an example of how it should be with the IP of "45.146.254.252" in order to work properly:

![](https://screensaver01.zap-hosting.com/index.php/s/ZnLC26QHDBMi3c9/preview)

> Make sure that you enter **your** Server IP under "IP Address"

> It is important here that the subnet mask is always a type C network and is therefore always set as "255.255.255.0".

> The default gateway is always the IP itself with the "1" at the end.

> As a DNS server, you usually use the Google DNS as in the screenshot above.

Then, take over the settings and restart the server if necessary.

