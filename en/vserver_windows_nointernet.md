---
id: vserver_windows_nointernet
title: VPS: No internet access on Windows Server. What now?
description: Information on how to solve problems when your Windows VPS from ZAP-Hosting does not show Internet access - ZAP-Hosting.com documentation
sidebar_label: No Internet what now?
---


## 🖥 No internet, what now?

As a rule, the server is "started" when it has no active internet connection as shown below:

![image](https://user-images.githubusercontent.com/13604413/159165538-4c9c7858-ce7a-44eb-982e-fe614f731dfa.png)

But if he is online and still has no internet, you can check this via the serial console: 

![image](https://user-images.githubusercontent.com/13604413/159165541-d23bfcaf-d745-4b98-96bb-5960a113723c.png)


## 🖥 How do I re-establish the connection?

First of all, we connect to the server via the serial console as shown below and log into it. 

![image](https://user-images.githubusercontent.com/13604413/159165545-bb459a8b-f900-4d7c-95b6-c73b10d494ef.png)

Then, we proceed to open the adapter settings. For this, we do a left click on the internet connection as shown here:

![image](https://user-images.githubusercontent.com/13604413/159165546-ce7eedcc-2761-4109-a72b-a41ef19f4b5e.png)

Then, we would click on **change adapter options** as shown here:

![image](https://user-images.githubusercontent.com/13604413/159165551-c3d6190f-f9cf-4b0c-8e09-14d6c55b02b8.png)

Now, we will open the **properties** of the adapter via **right clicking** the Ethernet adapter as shown here:

![image](https://user-images.githubusercontent.com/13604413/159165554-6c7e2ff3-c4ab-42bc-ba9a-b34d1974e3b4.png)

Then, we will **double click** on the **IPv4 connection** as shown here:

![image](https://user-images.githubusercontent.com/13604413/159165558-e73e6c72-5c7f-4218-8fbd-7879ea9858b3.png)

Then, we will check whether the **server's** IP address from the control panel is entered there. In the following, you see an example of how it should be with the IP of "45.146.254.252" in order to work properly:

![image](https://user-images.githubusercontent.com/13604413/159165560-ca15c764-dc9e-460d-a5ac-2cd4eee8bf5f.png)

> Make sure that you enter **your** Server IP under "IP Address"

> It is important here that the subnet mask is always a type C network and is therefore always set as "255.255.255.0".

> The default gateway is always the IP itself with the "1" at the end.

> As a DNS server, you usually use the Google DNS as in the screenshot above.

Then, take over the settings and restart the server if necessary.

