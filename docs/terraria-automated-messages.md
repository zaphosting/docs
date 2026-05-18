---
id: terraria-automated-messages
title: "Terraria: Automated Server Messages - Keep your players informed about news, social links and more!"
description: "Set up automated server messages using scheduled tasks to display recurring announcements"
sidebar_label: Automated Server Messages
services:
- gameserver-terraria
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Automated server messages are a simple but effective way to communicate important information to players directly in-game. They can be used to display server rules, announce events, share helpful tips, or provide reminders at regular intervals without requiring manual input from administrators.

Using **Scheduled Tasks**, server messages can be sent automatically into the **Terraria** in-game chat by executing predefined commands on a recurring schedule. 

<InlineVoucher />



## How automated messages work

Automated messages are created by scheduling a task that executes a server command at a defined time or interval. The command can be used to send a chat message, broadcast or server notification.

Once configured, the task runs automatically in the background and displays the message to all connected players. This ensures consistent communication without the need for staff to be online.



## Creating an automated message

To create automated server messages, open your game server dashboard and navigate to the **Scheduled Tasks** section. Create a new scheduled task and choose the option to execute a **command**. In the command field, enter the message command supported by your game server. 

```
<message command> <your message text>
```

Replace the command with the game command or command from an extension that you want to use to trigger messages and `<your message text>` with the message you want players to see.

You can then define how often the message should be sent, such as every few minutes, hourly, or at specific times of the day. For detailed instructions on creating scheduled tasks, refer to the [Sheduled tasks](gameserver-scheduled-tasks.md) guide.

![img](https://screensaver01.zap-hosting.com/index.php/s/Z9ocneecsLikyRF/preview)



## Customizing message intervals

Scheduled tasks allow full control over when and how often messages appear. Common use cases include:

- Displaying server rules every few minutes
- Announcing upcoming events at fixed times
- Sending gameplay tips to new or returning players
- Reminding players about Discord or website links

The interval can be adjusted at any time without restarting the server, allowing flexible changes as your server grows.



## Important notes

The functionality of automated server messages depends on the capabilities of the game and its available commands. While basic scheduled messages can be implemented using standard server commands, this approach may be limited in terms of formatting, conditions, or advanced customization.

If the game supports additional plugins, mods, or extensions that provide more flexibility and customization options, using those solutions may be worthwhile. In such cases, specialized messaging systems can offer richer features than the default game commands and may be better suited for complex or highly customized server setups.



## Conclusion

Automated server messages provide a reliable way to keep players informed and engaged without manual effort. By using scheduled tasks to execute message commands, server administrators can ensure consistent communication across their server.

Once set up, automated messages run independently and can be easily reused by simply adjusting the game-specific message command and text.

For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
