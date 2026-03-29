---
id: over-the-top-wwi-configure-chat-settings
title: "Over the Top WWI: Configure Chat Settings"
description: "Learn how to configure chat and communication settings on your Over the Top WWI server → Learn more now"
sidebar_label: Chat Settings
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Chat settings in **Over the Top WWI** control how players communicate via text during gameplay. Adjusting these settings allows you to enable global communication, restrict chat usage, or fully mute players if necessary.

Proper chat configuration can help maintain order on the server and improve the overall player experience.

<InlineVoucher />

## Configuration

Chat settings are configured inside the server configuration file. You can access and edit this file in your **gameserver management panel** under **Configs**. Locate and open the `ServerConfiguration.ini` configuration file. Inside this file, find the following parameters:

```
AllowAllChat = 1
ServerMuteAll = 0
BannedWordsPathString = BannedWords.txt
```


- `AllowAllChat` enables or disables global chat communication

- `0` → Disabled
- `1` → Enabled

- `ServerMuteAll` disables all player chat when enabled

- `0` → Disabled
- `1` → Enabled

- `BannedWordsPathString` defines the file used for filtering restricted words. The file contains a list of blocked terms that will not be allowed in chat

Adjust these settings to control how players communicate and to enforce chat moderation rules on your server.

After modifying the `ServerConfiguration.ini`, save the file and restart your server. The updated chat settings will be applied automatically.

## Conclusion

Congratulations! You have successfully configured chat settings on your **Over the Top WWI server**. This allows you to manage player communication and maintain a controlled and enjoyable environment.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />