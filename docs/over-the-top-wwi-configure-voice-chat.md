---
id: over-the-top-wwi-configure-voice-chat
title: "Over the Top WWI: Configure Voice Chat"
description: "Learn how to enable and configure voice chat on your Over the Top WWI server → Learn more now"
sidebar_label: Voice Chat
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Voice chat allows players on your **Over the Top WWI** server to communicate directly during gameplay. This can improve coordination, teamwork, and overall immersion, especially in tactical scenarios.

By configuring voice chat settings, you can control whether communication is allowed, adjust quality, and define how voice chat behaves during matches.

<InlineVoucher />

## Configuration

Voice chat settings are configured inside the server configuration file. You can access and edit this file in your **gameserver management panel** under **Configs**. Locate and open the `ServerConfiguration.ini` configuration file. Inside this file, find the following parameters:

```
VoipAllowed = 1
VoipQuality = 0
VoipDelay = 0
```


- `VoipAllowed` enables or disables voice chat on the server
- `VoipQuality` controls the voice quality level
- `VoipDelay` adds a delay in seconds before players can use voice chat after spawning

Adjust these values depending on your server preferences and performance requirements. Lower quality settings may be beneficial for servers with many players or limited bandwidth.

After modifying the `ServerConfiguration.ini`, save the file and restart your server. The voice chat settings will then be applied automatically.

## Conclusion

Congratulations! You have successfully configured voice chat on your **Over the Top WWI server**. This allows players to communicate effectively and enhances teamwork during matches.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />