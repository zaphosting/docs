---
id: vserver_windows_addip
title: VPS: Adding additional IPs to a Windows server
description: Information on how to add additional IPs to your Windows VPS from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Add additional IPs
---

## 🆕 Determine the new extra IPs
First you have to find out what your extra IP is. To do this, you can click on the "IP addresses" tab in the interface of your server. All the IPs that are available to your server are displayed here. You can also directly see which IP has already been entered and which is not yet working.

![image](https://user-images.githubusercontent.com/13604413/159172829-7297f0a3-4678-4690-a303-0a17dda275e6.png)

## 🖥 Connect to the server
To add the extra IPs to your server, you first need to connect to them. How this is done is explained in detail in our separate instructions: https://docs.zap-hosting.com/docs/en/vserver_windows_userdp/#-remotedesktopverbindung

##  Open network adapter
So that you can enter your own IPs, you first have to open your adapter on your server. To do this, right-click on the internet symbol from your server, which you can find at the bottom right of the screen (right next to the time):

![image](https://user-images.githubusercontent.com/13604413/159172836-9df0c9b3-cd37-43f0-8ec9-8c10f78ac623.png)

Now click on the "Open Network and Internet Settings" option. The following window should now open:

![image](https://user-images.githubusercontent.com/13604413/159172840-0b856022-81b9-43dc-ac73-9b1823265e61.png)

Here you can click on "Change adapter options".

### Edit network adapter
Now another window opens with your adapter. Right click on the adapter and select properties:

![image](https://user-images.githubusercontent.com/13604413/159172842-e2c440a8-1e9f-4862-b6da-543f76dfc426.png)

Once here you have to click on "Internet Protocol, Version 4 (TCP / IPv4) and then click on" Properties "at the bottom right, because we want to assign an additional IPv4 address to your server.

![image](https://user-images.githubusercontent.com/13604413/159172847-c1619f77-3e8e-4ffb-8f19-2d6f60676459.png)

Now you see the already entered IP on your server. Which one you are currently connected to your server with. To enter a new IP, you have to click on "extended":

![image](https://user-images.githubusercontent.com/13604413/159172853-20154d14-695b-4ddb-87f3-3abf23bd8c82.png)

### Assign additional IP to the adapter
Now you can click on "Add .." in the "IP addresses" option to enter your own IP address:

![image](https://user-images.githubusercontent.com/13604413/159172855-f47d3c23-6a7d-47d2-888e-61b39f3ef804.png)

Now enter the IP of your server in the first field, which you determined in the first step. In the field below (subnet mask) you enter "255.255.255.0". This is a fixed value, which is identical for every IP. This looks like this in our example:

![image](https://user-images.githubusercontent.com/13604413/159172857-85b4fe79-853f-4438-90ac-7abcbccdda05.png)

Now click on "Add". The IP is now displayed in the list of IP addresses. 

In the same way we add our "default gateway", the gateway is always the same ip with a 1 in the end.
As example: 11.12.13.14 is our ip, then would 11.12.13.1 our gateway.

Now click on "Ok".

![image](https://user-images.githubusercontent.com/13604413/159172859-3713b40f-cf8e-4cbb-b95d-d797e911770c.png)

In the next window, click on "Ok" for the changes to take effect:

![image](https://user-images.githubusercontent.com/13604413/159172866-0afd8b75-a90a-49bf-92f4-4447dbcdb697.png)


### ✅ Check your own IP
The IP has now been added correctly to your server. You can now go to the "IP addresses" tab in the interface of your server and look for the status of the IP address. If everything was done correctly, the IP is now displayed as "IP reachable". With the IP you can now also connect to your server via RDP, for example:

![image](https://user-images.githubusercontent.com/13604413/159172869-04429e1f-96c5-4e68-9add-0c08e22ad714.png)


