---
title: "Over the Top WWI: Configure Server Messages"
description: "Learn how to set up automated server messages on your Over the Top WWI server → Learn more now"
sidebar_label: Server Messages
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Automated server messages are a useful way to communicate important information to players during gameplay. These messages can be used to share rules, promote your Discord server, or provide helpful tips.

On an **Over the Top WWI** server, messages can be displayed at regular intervals, ensuring that all players receive important information without manual interaction.

<InlineVoucher />

## Configuration

Server messages are configured inside the server configuration file. You can access and edit this file in your **gameserver management panel** under **Configs**. Locate and open the `ServerConfiguration.ini` configuration file. Inside this file, find the following parameters:

```
ShowServerTimedMessages = 1
AddServerMessage = Join the official Discord! discord.gg/example
AddServerMessage = Please report any bugs on our Discord.
ServerMessagesTimer = 120
```


- `ShowServerTimedMessages` enables or disables automated messages. Set it to `1` to enable messages or `0` to disable them.
- `AddServerMessage` defines the messages that will be displayed. You can add multiple lines to rotate different messages during gameplay.
- `ServerMessagesTimer` defines the interval between messages in seconds. For example, `120` will display a message every 2 minutes.

You can freely customize and extend your messages by adding additional lines:

```
AddServerMessage = Welcome to the server!
AddServerMessage = Follow the rules and respect other players.
AddServerMessage = Join our Discord for updates.
```


After modifying the `ServerConfiguration.ini`, save the file and restart your server. The messages will automatically appear in-game at the configured interval.

## Conclusion

Congratulations! You have successfully configured automated messages on your **Over the Top WWI server**. This helps you keep players informed and improves overall communication on your server.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />