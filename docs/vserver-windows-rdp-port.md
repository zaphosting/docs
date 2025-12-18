---
id: vserver-windows-rdp-port
title: "VPS: Change Windows RDP port"
description: "Explore how to change the Windows RDP port  → Learn more now"
sidebar_label: Change RDP port
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

Remote Desktop Protocol uses port 3389 by default. This port is widely known and frequently targeted by automated scans. Changing the RDP port can reduce unwanted connection attempts and improve basic security exposure.

<InlineVoucher />



## Change RDP port in the registry

Log in to the server locally or through an existing Remote Desktop connection. Open the Run dialog using **Win + R**, enter `regedit`, and confirm to open the Registry Editor. Navigate to the following registry path:

```
HKEY_LOCAL_MACHINE
 └─ SYSTEM
    └─ CurrentControlSet
       └─ Control
          └─ Terminal Server
             └─ WinStations
                └─ RDP-Tcp
```

Locate the registry entry named **PortNumber**. Change the value format to **Decimal** and enter the desired new port number. A port above 1024 that is not already used by another service is recommended. After applying the change, close the Registry Editor.

## Adjust Windows Firewall rules

The new RDP port must be allowed through Windows Firewall. Open **Windows Defender Firewall with Advanced Security** and navigate to the inbound rules section.

Modify the existing Remote Desktop rule or create a new inbound rule that allows TCP traffic on the newly configured port. Ensure the rule allows the connection and is applied to the required network profiles.

## Restart service to apply changes

The port change becomes active only after restarting the Remote Desktop Services or rebooting the system. A full server restart is recommended to ensure the configuration is applied consistently.

## Connect using the new port

When establishing a new Remote Desktop connection, the port must be specified explicitly by appending it to the IP address or hostname. Example:

```
203.0.113.10:3390
```

## Conclusion

Changing the Windows RDP port reduces exposure to automated scans and unauthorized connection attempts. The process involves updating the Windows Registry, allowing the new port in the firewall, and restarting the system or services.

After completion, access should be verified immediately and the configured port should be documented to avoid future connection issues.  For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
