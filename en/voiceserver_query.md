---
id: voiceserver_query
title: Teanspeak Server: Teamspeak query login setup
description: Information on how to set up a TS query login for your Teamspeak server from ZAP-Hosting - ZAP-Hosting.com documentation
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

![image](https://user-images.githubusercontent.com/13604413/159177367-e085ff23-c3e1-4afc-b4a5-44d2c3bc9fd3.png)

After this has been confirmed with "OK", a password is displayed. 
This must be saved, it cannot be changed later. 

![image](https://user-images.githubusercontent.com/13604413/159177369-80ce4ec5-e9b5-4ff4-a3e5-2afac1aabdfd.png)

## Step 2️⃣
With the now created login data a connection can be established e.g. via [YaTQA](https://yat.qa). 
For this purpose, the server IP, the Query port, the server port and the Query login name and password are required. 
The Server IP, the Query Port and the Server Port can be viewed on the Dashboard in the web interface: 

![image](https://user-images.githubusercontent.com/13604413/159177371-139b9e2f-b7ab-46dd-92df-ac3785958b48.png)

The data can then be entered into YaTQA: 

![image](https://user-images.githubusercontent.com/13604413/159177374-86e07d75-d065-4c5b-99e1-aada760e7b75.png)

>If an error occurs when changing the Query port, this must be allowed in the settings. 
Error:
>![image](https://user-images.githubusercontent.com/13604413/159177378-68e3638a-098f-4a6b-9903-3525e773d87f.png)

Solution:
>![image](https://user-images.githubusercontent.com/13604413/159177381-9ec4269c-e05e-44c4-b0ae-662ff2f580ca.png)

With a click on "Connect", a connection to the Teamspeak server can be established:

![image](https://user-images.githubusercontent.com/13604413/159177383-0dcccdcd-cc45-46e5-a6ed-27dc167aca5e.png)

Ready ✅
