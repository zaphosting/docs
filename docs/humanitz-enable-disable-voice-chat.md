---
id: humanitz-enable-disable-voice-chat
title: "HumanitZ: Enable or Disable Voice Chat"
description: "Learn how to enable or disable voice chat on your HumanitZ server → Learn more now"
sidebar_label: "Enable/Disable Voice Chat"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

Voice communication can significantly change the atmosphere of a HumanitZ server. Enabling voice chat allows players to communicate directly in proximity, enhancing immersion and cooperation. Disabling it may encourage external communication platforms or create a quieter, more isolated survival experience.

In HumanitZ, voice chat is configured directly inside the server configuration file.

<InlineVoucher />



## Configuration

Voice chat settings are controlled in the `GameServerSettings.ini` file. You can access this file in your server management panel under **Configs**. Inside the config file, locate the following parameter:

```
;When set to 1 or true voice chat will be enabled, set 0 or false to disable
Voip=true
```

The configuration works as follows:

- `Voip=true` or `Voip=1` – Enables voice chat  
- `Voip=false` or `Voip=0` – Disables voice chat  

To change the voice chat setting, simply modify the value according to your preference. After editing the file, save your changes and restart the server for the new setting to take effect.



## Conclusion

Congratulations! By modifying the `Voip` value in the `GameServerSettings.ini`, you have successfully enabled or disabled voice chat on your HumanitZ server. For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
