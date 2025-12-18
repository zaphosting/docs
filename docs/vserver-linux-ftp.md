---
id: vserver-linux-ftp
title: "VPS: FTP service unavailable (GS/TS3 Interface)"
description: "Understand how to troubleshoot and restore FTP access on your VPS when game or Teamspeak servers are unreachable → Learn more now"
sidebar_label: FTP service unavailable
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Gameserver and Teamspeak 3 services created via the GS/TS3 interface are fully managed services. FTP access is provided through the interface and the underlying infrastructure. If FTP access is not possible, the cause is usually related to the service state, internal configuration, or infrastructure side issues rather than local FTP client settings.



:::warning FTP service provided by the GS/TS3 interface
This guide applies only to the FTP service that is automatically installed and managed when the GS/TS3 interface feature is used. If the GS/TS3 interface is not installed, no FTP server is set up by default on the system. In that case, FTP access is not available unless an FTP service is installed manually.
:::

<InlineVoucher />



## Check ProFTPD status via SSH

Connect to the server via SSH or the console and check the current status of the FTP service using the following command:

```
service proftpd status
```

The output shows whether the ProFTPD service is currently running. If the service is reported as active or running, the FTP service itself is available and should accept incoming connections. In this case, the cause of the problem is usually not the FTP daemon itself but may be related to access data, firewall rules, or the client configuration.

If the status is shown as inactive, dead, or stopped, the FTP service is not running. While the service is stopped, no FTP connections can be established.

## Restart the FTP service

If the ProFTPD service is not running, it can be started manually. To do so, execute the following command:

```
service proftpd restart
```

After starting or restarting the service, the status should always be checked again to confirm that ProFTPD is running correctly. If the service is shown as active after the restart, FTP access should be available again.



## Common causes of FTP issues

FTP access problems are often caused by the FTP service not running or being stopped during a system reboot or update. Configuration errors can also prevent ProFTPD from starting successfully. In some cases, another service may already be using port 21, which prevents the FTP service from binding to the required port. Temporary system or service level issues can also lead to the FTP service stopping unexpectedly.

If ProFTPD cannot be started or stops again immediately after being started, further investigation is required. In such cases, reviewing system logs or contacting support is recommended.



## Conclusion



FTP access for GS/TS3 gameserver services is managed exclusively through the GS/TS3 interface. If standard checks do not resolve the issue, escalation to support is required. Providing complete and accurate information helps ensure faster resolution. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂



<InlineVoucher />
