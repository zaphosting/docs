---
id: humanitz-enable-disable-permadeath
title: "HumanitZ: Enable/Disable Permadeath"
description: "Learn how to enable or disable permadeath on your HumanitZ server → Learn more now"
sidebar_label: "Enable/Disable Permadeath"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

Permadeath significantly increases the difficulty and tension of survival gameplay in HumanitZ. When enabled, players permanently lose their character upon death and must create a new one. This setting is commonly used on hardcore or high-risk survival servers.

<InlineVoucher />



## Configuration

Permadeath is controlled in the `GameServerSettings.ini` file. You can access this file in your server management panel under **Configs**. Inside the config file, locate the following parameter:

```
;When set to true the player that died will lose their character and have to create a new one
PermaDeath=false
```

- `PermaDeath=true` – Enables permadeath. Players permanently lose their character when they die.  
- `PermaDeath=false` – Disables permadeath. Players can respawn with their existing character.

If you want to activate permadeath, change the value to:

```
PermaDeath=true
```

After editing the file, save your changes and restart the server for the new setting to take effect.



## Conclusion

Congratulations! By modifying the `PermaDeath` value in the `GameServerSettings.ini`, you have successfully enabled or disabled permadeath on your HumanitZ server. For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />

