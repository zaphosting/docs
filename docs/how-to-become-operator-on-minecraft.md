---
id: how-to-become-operator-on-minecraft
title: "How to become operator on minecraft"
description: "Learn how to grant yourself operator status on your Minecraft server hosted with ZAP-Hosting, enabling full administrative control and commands -> Learn more now"
sidebar_label: Become Admin
services:
 - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduction

This guide explains how to become an operator (admin) on your Minecraft server hosted by ZAP-Hosting. Operators have full access to all server commands, allowing you to manage your world and players effectively.

## Prerequisites

Before you start, make sure you have the following:

- Access to your ZAP-Hosting Webinterface/Panel
- Your Minecraft server is running
- Your Minecraft username (the exact in-game name)
- Basic knowledge of the ZAP-Hosting server dashboard

## How to Become Operator on Minecraft

### Step 1: Log into the ZAP-Hosting Webinterface

1. Open your web browser and go to [https://zap-hosting.com](https://zap-hosting.com).
2. Log in using your account credentials.
3. Navigate to **Services > Gameserver** and select your Minecraft server.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

### Step 2: Access the Server Console or FTP

You can grant operator status either via the console or by editing the ops.json file.

#### Option 1: Using the Server Console

1. Go to the **Console** tab in your Minecraft server panel.
2. Enter the following command, replacing `<YourMinecraftUsername>` with your exact Minecraft in-game name:

```bash
op <YourMinecraftUsername>
```

3. Press **Enter** to execute the command.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

#### Option 2: Editing the ops.json File

1. Navigate to the **FTP File Access** section in the server panel.
2. Open the `ops.json` file located in the root directory of your Minecraft server.
3. Add your Minecraft username in JSON format as shown below:

```json
[
  {
    "uuid": "your-uuid-here",
    "name": "<YourMinecraftUsername>",
    "level": 4,
    "bypassesPlayerLimit": false
  }
]
```

> **Tip:** You can find your UUID at [https://mcuuid.net/](https://mcuuid.net/) by entering your Minecraft username.

4. Save the file and restart your server to apply changes.

### Step 3: Verify Operator Status

1. Join your Minecraft server using your Minecraft client.
2. Open the chat and test an operator command, for example:

```minecraft
/time set day
```

3. If the command works without errors, you have successfully become an operator.

## Operator Permission Levels

Minecraft uses different operator levels to control command access. Below is a quick reference:

| Level | Permissions                               |
|-------|-------------------------------------------|
| 1     | Can bypass spawn protection               |
| 2     | Can use cheat commands (e.g., /clear)     |
| 3     | Can use more advanced commands (e.g., /ban) |
| 4     | Full operator privileges (all commands)   |

> **Note:** By default, using the `op` command grants level 4.

## Troubleshooting

:::caution
- Ensure your Minecraft username is spelled exactly as it appears in-game.
- If commands do not work, try restarting the server to apply operator changes.
- If you lose operator privileges, you can always reapply them via the console or ops.json.
:::

## Conclusion

Congratulations, you have successfully become an operator on your Minecraft server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!