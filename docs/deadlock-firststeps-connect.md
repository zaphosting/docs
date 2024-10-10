---
id: deadlock-firststeps-connect
title: "Deadlock: Connect to server"
description: Information about how to connect to a Deadlock server from ZAP-Hosting - ZAP-Hosting.com Documentation
sidebar_label: Connect to server
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Are you looking for a way to connect to your Deadlock server but you are unsure how this works and what you need to consider? There's no need to worry! We'll show you how you can connect to your server with ease and what you should keep in mind.

<InlineVoucher />



## Server information

To establish the connection to your server, the IP address and the port is required. This information can be viewed and copied in the dashboard of your game server administration.

![img](https://screensaver01.zap-hosting.com/index.php/s/LEieX839x8TJ8Cd/download)



## Establishing connection

Deadlock doesn't support any form of server list at the moment, which is why a connection to your server is only possible via the developer console. The key assignment for this is the **F7** key by default. Open it and execute the following command with your own server information: 

```
connect <ip-address:port>
```

Once the command has been executed, the connection to the server is established and the console can be closed again. 

![img](https://screensaver01.zap-hosting.com/index.php/s/Mdm4w6eGQg7ng8c/download)



## Potential issues and solutions

The establishment of the connection does not work as expected? This may happen in certain situations, when the connection fails due to a technical problem. We have listed the most common problems and their solutions below:

### Not visible

A lack of visibility of the server can occur if the initialization was not completed successfully for some reason. This may for example be due to a faulty configuration or corrupted files. Further information can usually be traced in the server console or log files.



The mentioned solutions have not solved your problem yet or do not apply in your case? In this case, we are also available to you daily in support. Simply create a **[Ticket](https://zap-hosting.com/en/customer/support/)** and explain your issue to us. We will have a look at it as quickly as possible and assist you in solving the issue accordingly! 🙂