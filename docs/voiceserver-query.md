---
id: voiceserver-query
title: "Voiceserver: Teamspeak Query Login setup"
description: Information on how to set up a TS query login for your Teamspeak server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Query Login
services:
  - voiceserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Teamspeak Query Login

<InlineVoucher />

### Self-hosted Teamspeak Server

If the Teamspeak server has been installed on your own VPS or root server via the web interface, the normal "Server Admin Query" can be used. 
The login data can be found in the web interface of the Teamspeak instance. 

### Rented Teamspeak Server from ZAP-Hosting

For security reasons, the "Server Admin Query" login is not available for a directly rented Teamspeak server. 
But you can create your own Query Login as follows, if you have admin rights on your Teamspeak server. 

>Important: The functions such as import snapshot, change slots/ports and similar are not available for security reasons.

### Create Query Login
To create your own Query Login, you have to click on "Server Query Login" in the Teamspeak Client under Tools.
Afterwards you have to enter a name for the login, this is also the login name e.g. "MyQueryLogin":

![image](https://screensaver01.zap-hosting.com/index.php/s/gMeQtSTkrtRzbk7/preview)

After this has been confirmed with "OK", a password is displayed. 
This must be saved, it cannot be changed later. 

![image](https://screensaver01.zap-hosting.com/index.php/s/c7W3mzRMJ4EP23E/preview)

### Using YaTQA
With the now created login data a connection can be established e.g. via [YaTQA](https://yat.qa). 
For this purpose, the server IP, the Query port, the server port and the Query login name and password are required. 
The Server IP, the Query Port and the Server Port can be viewed on the Dashboard in the web interface: 

![image](https://screensaver01.zap-hosting.com/index.php/s/RGsk8wfBkoCPzA4/preview)

The data can then be entered into YaTQA: 

![image](https://screensaver01.zap-hosting.com/index.php/s/EiwpzsPCiK5cPRJ/preview)

>If an error occurs when changing the Query port, this must be allowed in the settings. 
Error:
>![image](https://screensaver01.zap-hosting.com/index.php/s/R3sMLJ8QYPYJ7MC/preview)

Solution:
>![image](https://screensaver01.zap-hosting.com/index.php/s/s98diC6eZmaZH5i/preview)

With a click on "Connect", a connection to the Teamspeak server can be established:

![image](https://screensaver01.zap-hosting.com/index.php/s/3sxtEfCLF4A2ZC9/preview)

Ready ✅
