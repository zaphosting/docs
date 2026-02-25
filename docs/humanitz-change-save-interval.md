---
id: humanitz-change-save-interval
title: "HumanitZ: Change Save Interval"
description: "Learn how to adjust the automatic world save interval on your HumanitZ server → Learn more now"
sidebar_label: "Change Save Interval"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

The save interval determines how often your HumanitZ server automatically saves the world state. Regular saving helps prevent data loss in case of crashes or unexpected shutdowns, while longer intervals may slightly reduce disk activity.

<InlineVoucher />

## Configuration

The world save interval is controlled in the `GameServerSettings.ini` file. You can access this file in your server management panel under **Configs**. Inside the config file, locate the following parameter:

```
;The interval in seconds at which the server saves the world. Set to 0 to disable auto-saving.
SaveIntervalSec=300
```

- `SaveIntervalSec=300` – The server saves the world every 300 seconds (5 minutes).  
- `SaveIntervalSec=0` – Disables automatic world saving.  

The value is defined in **seconds**. For example:

- `600` = 10 minutes
- `900` = 15 minutes

If you want to increase the interval to 10 minutes:

```
SaveIntervalSec=600
```

After editing the file, save your changes and restart the server for the new setting to take effect.

## Conclusion

Congratulations! By modifying the `SaveIntervalSec` value in the `GameServerSettings.ini`, you have successfully adjusted the automatic world save interval on your HumanitZ server.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />

