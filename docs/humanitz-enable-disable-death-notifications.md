---
id: humanitz-enable-disable-death-notifications
title: "HumanitZ: Enable/Disable Death Notifications"
description: "Learn how to enable or disable player death notifications on your HumanitZ server → Learn more now"
sidebar_label: "Enable/Disable Death Notifications"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

Death notifications inform players when someone on the server has died. While this can be useful for tracking activity, some servers prefer a more immersive or competitive experience without public death messages.

HumanitZ allows you to enable or disable player death notifications directly through the server configuration file.

<InlineVoucher />

## Configuration

Death notification settings are controlled in the `GameServerSettings.ini` file. You can access this file in your server management panel under **Configs**. 
Inside the config file, locate the following parameter:

```
;If set to true notification about dead players will be disabled. Admins will still be able to see them.
NoDeathFeedback=true
```

- `NoDeathFeedback=true` – Disables death notifications for regular players. Administrators will still see them. 
- `NoDeathFeedback=false` – Enables death notifications for all players.

If you want death notifications to be visible to everyone, set the value to:

```
NoDeathFeedback=false
```

After editing the file, save your changes and restart the server for the new setting to take effect.

## Conclusion

Congratulations! By modifying the `NoDeathFeedback` value in the `GameServerSettings.ini`, you have successfully configured the death notification settings on your HumanitZ server. For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
