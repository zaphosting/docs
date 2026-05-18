---
id: humanitz-change-pvp-mode
title: "HumanitZ: Change PvP Mode"
description: "Learn how to enable or disable PvP on your HumanitZ server → Learn more now"
sidebar_label: "Change PvP Mode"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

Player versus Player (PvP) combat is a core mechanic in survival games like HumanitZ. Enabling or disabling PvP changes how players can interact in combat, whether they can damage one another, and whether they can interact with player-owned items such as vehicles or containers.

<InlineVoucher />



## Configuration

The PvP mode is controlled in the `GameServerSettings.ini` file. You can access this file in your server management panel under **Configs**. Inside the config file, locate the following parameter:

```
;false/true=Off/On. This will also affect the ability to interact with player items such as cars and containers
PVP=true
```

- `PVP=true` – Enables Player versus Player combat  
- `PVP=false` – Disables Player versus Player combat

To change the PvP mode, simply set the value to either `true` (On) or `false` (Off), depending on how you want PvP to behave on your server.

Example – PvP disabled:

```
PVP=false
```

After editing the file, save your changes and restart the server for the new setting to take effect.



## Conclusion

Congratulations! By modifying the `PVP` value in the `GameServerSettings.ini`, you have successfully changed the PvP mode on your HumanitZ server. For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
