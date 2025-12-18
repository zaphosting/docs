---
id: dedicated-ilo
title: "Dedicated Server: iLO"
description: "Discover how to fully manage your Enterprise Dedicated Server with iLO for seamless control and monitoring → Learn more now"
sidebar_label: iLO
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
On our Enterprise Dedicated Servers we use the management interface iLo, it allows unrestricted full manageability of your server.
Its functionalities include server start/stop/reboot, management console via Java or HTML5, mounting of boot media (ISOs).
You should modify the settings carefully, in case of wrong changes it can cause big problems.



## iLO access
Open the server dashboard of your ZAP Dedicated Server with a browser of your choice. There you will already find the most important information about your iLO.
To activate the iLO simply click on "Activate iLO".
![](https://screensaver01.zap-hosting.com/index.php/s/grj9PxttLKiZg6m/preview)

Please mention that it may take a few seconds until your iLO is fully available. 
When the system has started the management interface and it is accessible, you will see the login informations.
To open the iLO click on the displayed IP address and use the login credentials to log in.

![](https://screensaver01.zap-hosting.com/index.php/s/MJeEW2LLrjxsAGN/preview)

After a short moment you are now logged in to the administration interface of your dedicated server. 
Here you will find a lot of important informations:

![](https://screensaver01.zap-hosting.com/index.php/s/BGWGXDRgS9A74dB/preview)

### Overview
* **System Health**
Should usually be green, at every server startup the hardware of your server is checking itself, if there are any issues, the system reports them immediately.
Possible variants are: green (OK), yellow (Degraded) and red (Critical) it can happen that the server shows your SSD as degraded, usually thats not a problem.
Of course you can inform the support, then we will check for you if there is a need for action. If the system status is red ("Critical"), support should be informed immediately.
The first step to solve the problem should always be a complete reboot of the server.

* **iLO Health**
Shows more information about the iLO parameters, there should be no significant changes.
It is not necessary to modify something in this tab.

* **Server Power**
Shows you the status of your server, as example "ON" means that your server is running.

* **Integrated Remote Console**
Here you have the possibility to visually look at your server and execute commands there.
The remote consoles differ in two aspects. 
HTML5 is started directly in your webbrowser and does not require any kind of third party software.
Java Web Start, as the name suggests, uses Java to open the management console.
Any security warnings that appear can be safely clicked away.
How to connect step by step to your server with a remote console, you can read in the detailed instructions for it.

* **Active Sessions**
You can see all users currently connected to iLO here. 

### iLO Event Log
Saves all changes made via the iLO, e.g. logins or server starts/stops as well as changes to the settings.

### Integrated Management Log
The Integrated Management Log stores all hardware relevant information, for example the results of the POST (Power on Self Test) which is executed at every server start.
If there are any problems with the hardware of your dedicated server, then it will be showed here.

### Virtual Media
The integration of own boot media (ISOs) is done by the submenu "Connect CD/DVD-ROM".
The boot order of the server is configured so that it would always boot a registered ISO first by default.
The order can also be changed in the menu called "Boot Order".

![](https://screensaver01.zap-hosting.com/index.php/s/6ezDgt2dsCMwEam/preview)

At "Scriptes Media URL" you have to enter the full link of the ISO you want to mount, as example: http://mydomain.com/bootimage.iso
Your entry must point directly to the ISO, so it must also end with .iso.
Then click on "Insert Media" and restart your server in "Power Management".
The server will now load your inserted ISO.

### Power Management
In this menu item you can do everything concerning starting & stopping your ZAP Dedicated Server. 

![](https://screensaver01.zap-hosting.com/index.php/s/NHW8iafC3zjcsJG/preview)

* **Gracefull Power Off**
Gracefully shuts down your server, the same result as pressing the power button of your notebook/computer once.
All applications are shut down correctly and the server shuts down in a scheduled manner.
Of course this can take some time depending on the applications.

* **Force Power Off**
If your server needs to be turned off immediately without waiting, this is the right option. It is equivalent to pulling the power cord.
The system goes off immediately without any delay.

* **Force System Reset**
Causes an immediate reboot of your system.

### Power Meter
Shows you the average power consumption of your system, basically the higher the power consumption, the higher the load on your system.

### Network
Shows you the network configuration of your iLO, please mention that this settings are not related to the network configurations of your server itself.

:::info
To setup your server or if the access via the network does not work. You always have the possibility to look directly at your server
:::

## Remote Consoles (Display)
The iLO offers you two different types of remote consoles by default:

![](https://screensaver01.zap-hosting.com/index.php/s/cozRqRt9KLTMCkd/preview)

### The HTML5 Console
With a simple click you are already on your server, you don't need any other third party software and it is launched directly in your webbrowser.
It offers you lots of useful tools:

![](https://screensaver01.zap-hosting.com/index.php/s/G8DjtHYnJosiQBy/preview)

* 1 - power management settings (start, stop, reboot) of the server
* 2 - Sending keyboard shortcuts (as example CTRL + ALT + DEL)
* 3 - Including ISOs > CD/DVD > Scripted Media URL
* 4 - System Health
* 5 - Server Power Status (ON / OFF)

If your server has a graphical user interface (gui), you can use your mouse as usual, input from your keyboard will also be transferred.

### The Java Console
To use the Java Console you need to have Java installed. (Can be downloaded from java.com)
:::info
Any messages that appear regarding security concerns can be ignored.
:::

After opening the file we get the following message, confirm it with "Continue".
![](https://screensaver01.zap-hosting.com/index.php/s/nByYm3X8DXNHXmP/preview)

We acknowledge the risk and confirm with "Run".

![](https://screensaver01.zap-hosting.com/index.php/s/eWzpyXgQPWWz4J4/preview)

Now the Java console opens.
:::info
The application often changes the keyboard layout to "EN".
:::

![](https://screensaver01.zap-hosting.com/index.php/s/kAp5rddEDjdLNwi/preview)

* 1 - Settings of the power management (start, stop, reboot) of the server
* 2 - Including ISOs > URL CD/DVD-ROM
* 3 - Sending key combinations (e.g. CTRL + ALT + DEL)
* 4 - System Health
* 5 - Server Power Status (ON / OFF)

If your server has a graphical user interface (gui), you can use your mouse as usual, input from your keyboard will also be transferred.

## Common Problems, Tips & Tricks

* The server stucks in POST (Power on Self Test) on does not boot anymore.
Connect to a remote console and check where exactly your server stucks. Does it show errors there?
Switch off the server in Power Management for a few seconds (Force Power Off) and then start it again (Momentary Press).
If your server still does not boot, contact the support.

* ISO is not loaded.
Check if the link to your ISO is really correct, the easiest test is to paste the link in your webbrowser, if a download starts everything is correct.
Make sure that the link is correctly entered in Virtual Media and that the server has been restarted. Also take a look at the boot order and see if CD/DVD Drive is at the top.

* My server takes a long time to boot.
The used Enterprise hardware takes a long time to boot, this is fully normal. It can take up to 10-15 minutes.

* I can't open the iLO anymore
Make sure that the iLO is enabled in your server dashboard, for security reasons the management interface will automatically shut down after some time.
You can of course disable the iLO again and enable it again. (Wait at least 5 minutes after activating)



## Conclusion

This should make your administration a lot easier once you have read through everything in detail. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂


