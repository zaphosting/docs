---
id: humanitz-airdrop-management
title: "HumanitZ: Airdrop Management"
description: "Learn how to enable, disable, and configure airdrops on your HumanitZ server → Learn more now"
sidebar_label: "Airdrop Management"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

Airdrops in HumanitZ provide valuable loot and can significantly influence player movement, conflict zones, and overall server dynamics. Depending on your server’s playstyle, you may want frequent supply drops to increase action or disable them entirely for a more resource-scarce survival experience.

<InlineVoucher />



## Configuration

Airdrop settings are controlled in the `GameServerSettings.ini` file. You can access this file in your server management panel under **Configs**. Inside the config file, locate the following parameters:

```
; Set whether air drops are enabled or not
AirDrop=true
;How many game days between each AirDrop
AirDropInterval=1
```

The configuration works as follows:

- `AirDrop=true` – Enables airdrops  
- `AirDrop=false` – Disables airdrops entirely  
- `AirDropInterval` – Defines how many in-game days pass between each airdrop  

For example, if you want airdrops to occur every three in-game days:

```
AirDrop=true
AirDropInterval=3
```

If you want to completely disable airdrops:

```
AirDrop=false
```


After editing the file, save your changes and restart the server for the new settings to take effect.



## Conclusion

Congratulations! By modifying the `AirDrop` and `AirDropInterval` values in the `GameServerSettings.ini`, you have successfully configured airdrop behavior on your HumanitZ server. For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
