---
id: voiceserver_query
title: Teamspeak Query Login
sidebar_label: Teamspeak Query Login
---

## Teamspeak Query Login

### Self-hosted Teamspeak Server

If the Teamspeak server has been installed on your own vServer or root server via the web interface, the normal "Server Admin Query" can be used. 
The login data can be found in the web interface of the Teamspeak instance. 

### Rented Teamspeak Server from ZAP-Hosting

For security reasons, the "Server Admin Query" login is not available for a directly rented Teamspeak server. 
But you can create your own Query Login as follows, if you have admin rights on your Teamspeak server. 

>Important: The functions such as import snapshot, change slots/ports and similar are not available for security reasons.

## Step 1️⃣: 
To create your own Query Login, you have to click on "Server Query Login" in the Teamspeak Client under Tools.
Afterwards you have to enter a name for the login, this is also the login name e.g. "MyQueryLogin":

![](https://screensaver01.zap-hosting.com/index.php/s/RxPDWX2k6oo8Zpq/preview)

After this has been confirmed with "OK", a password is displayed. 
This must be saved, it cannot be changed later. 

![](https://screensaver01.zap-hosting.com/index.php/s/y8NjPRobt566xbH/preview)

## Step 2️⃣
With the now created login data a connection can be established e.g. via [YaTQA](https://yat.qa). 
For this purpose, the server IP, the Query port, the server port and the Query login name and password are required. 
The Server IP, the Query Port and the Server Port can be viewed on the Dashboard in the web interface: 

![](https://screensaver01.zap-hosting.com/index.php/s/nY6dS6XGRW8ZYJe/preview)

The data can then be entered into YaTQA: 

![](https://screensaver01.zap-hosting.com/index.php/s/AbQaPd7HR3JgCDY/preview)

>If an error occurs when changing the Query port, this must be allowed in the settings. 
Error:

>![](https://screensaver01.zap-hosting.com/index.php/s/KCtaLW7NxtJERmy/preview)

>Setting:

>![](https://screensaver01.zap-hosting.com/index.php/s/937BXJRXbf55byf/preview)

With a click on "Connect", a connection to the Teamspeak server can be established:

![](https://screensaver01.zap-hosting.com/index.php/s/kGq8Acj9RNKCLfg/preview)

Ready ✅
