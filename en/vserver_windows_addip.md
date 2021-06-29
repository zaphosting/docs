---
id: vserver_windows_addip
title: VPS: Adding additional IPs to a Windows server
description: Information on how to add additional IPs to your Windows VPS from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Add additional IPs
---

## 🆕 Determine the new extra IPs
First you have to find out what your extra IP is. To do this, you can click on the "IP addresses" tab in the interface of your server. All the IPs that are available to your server are displayed here. You can also directly see which IP has already been entered and which is not yet working.

![](https://screensaver01.zap-hosting.com/index.php/s/3WPJ3kzFrGTZSa3/preview)

## 🖥 Connect to the server
To add the extra IPs to your server, you first need to connect to them. How this is done is explained in detail in our separate instructions: https://docs.zap-hosting.com/docs/en/vserver_windows_userdp/#-remotedesktopverbindung

##  Open network adapter
So that you can enter your own IPs, you first have to open your adapter on your server. To do this, right-click on the internet symbol from your server, which you can find at the bottom right of the screen (right next to the time):

![](https://screensaver01.zap-hosting.com/index.php/s/3bNTmtjqDkJHqHP/preview)

Now click on the "Open Network and Internet Settings" option. The following window should now open:

![](https://screensaver01.zap-hosting.com/index.php/s/PoqqZDNHN2JDawC/preview)

Here you can click on "Change adapter options".

### Edit network adapter
Now another window opens with your adapter. Right click on the adapter and select properties:

![](https://screensaver01.zap-hosting.com/index.php/s/qnZLdB9gr99E9jZ/preview)

Once here you have to click on "Internet Protocol, Version 4 (TCP / IPv4) and then click on" Properties "at the bottom right, because we want to assign an additional IPv4 address to your server.

![](https://screensaver01.zap-hosting.com/index.php/s/Ea3FPcxx2q2iLL8/preview)

Now you see the already entered IP on your server. Which one you are currently connected to your server with. To enter a new IP, you have to click on "extended":

![](https://screensaver01.zap-hosting.com/index.php/s/BGepFNLs2LCZkcX/preview)

### Assign additional IP to the adapter
Now you can click on "Add .." in the "IP addresses" option to enter your own IP address:

![](https://screensaver01.zap-hosting.com/index.php/s/jkcGRkAQD6YPEBj/preview)

Now enter the IP of your server in the first field, which you determined in the first step. In the field below (subnet mask) you enter "255.255.255.0". This is a fixed value, which is identical for every IP. This looks like this in our example:

![](https://screensaver01.zap-hosting.com/index.php/s/KHqrSLW3MHL7Dky/preview)

Now click on "Add". The IP is now displayed in the list of IP addresses. 

In the same way we add our "default gateway", the gateway is always the same ip with a 1 in the end.
As example: 11.12.13.14 is our ip, then would 11.12.13.1 our gateway.

Now click on "Ok".

![](https://screensaver01.zap-hosting.com/index.php/s/cpaMYHrE6EDfBWq/preview)

In the next window, click on "Ok" for the changes to take effect:

### ✅ Check your own IP
The IP has now been added correctly to your server. You can now go to the "IP addresses" tab in the interface of your server and look for the status of the IP address. If everything was done correctly, the IP is now displayed as "IP reachable". With the IP you can now also connect to your server via RDP, for example:

![](https://screensaver01.zap-hosting.com/index.php/s/f4dpYppDrqSc9R3/preview)



