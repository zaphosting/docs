---
id: windrose-firststeps-connect
title: "Windrose: Connect to the server"
description: "Learn how to connect to your Windrose server using the correct invite code and establish a reliable server connection without common connection issues -> Learn more now"
sidebar_label: Connect to server
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Not sure how to connect to your **Hytale** server or what you need to get started? No worries, we’ve got you covered! We will walk you through everything you need. From the required tools and information to the actual connection process, along with key considerations to ensure a smooth and trouble-free connection experience. Follow our guide and you'll be connected in no time!


## Obtain server details
Before you connect, you need to collect the relevant server information from your ZAP-Hosting game server web interface. For Windrose, the most important detail is the **invite code**.

You can find the invite code in your game server management under the server configuration files in `InviteCode.txt`.

:::info Invite Code Requirement
For Windrose, the invite code is the key value used to connect to the server. If you use the wrong code or an outdated code, the connection may fail.
:::

The following information is useful before you begin:

| Information | Purpose |
| --- | --- |
| `InviteCode.txt` content | Required to connect to the Windrose server |
| Server name | Helps you identify the correct server |
| Optional server password | May be required depending on your configuration |

![](https://screensaver01.zap-hosting.com/index.php/s/boTwmEC5HSjbKYK/preview)

## Establish server connection
Once you have your invite code, you can connect to the Windrose server directly through the game.

### Find the invite code in the server management
Open your ZAP-Hosting game server web interface and navigate to the server configuration area. Locate the file named `InviteCode.txt` and open it.

Inside this file, you will find the current invite code for your server. Copy this value exactly as shown.

:::note Placeholder Values
If you see a value such as `[your_invite_code]` in this guide, replace it with the actual code from your own `InviteCode.txt` file.
:::

### Join the server in Windrose
Start Windrose and open the game's server connection or multiplayer menu. Look for the option that allows you to join a server using an invite code.

Enter the invite code from `InviteCode.txt` into the required field and confirm the connection. If your server is protected, you may also be asked to enter a password during this step.

| Field | What to enter |
| --- | --- |
| Invite code | `[your_invite_code]` |
| Password | `[your_server_password]` if configured |

After submitting the invite code, the game should establish the connection to your Windrose server.

:::tip Copy the Code Exactly
To avoid connection problems, copy and paste the invite code directly from `InviteCode.txt` if possible. Even a small typo can prevent a successful connection.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/t3R6by5GrswnZsQ/download)

## Potential issues and solutions
If the server connection does not work immediately, you can check the most common causes below.

### Invite code does not work
If the invite code is rejected, first verify that you copied the full content of `InviteCode.txt` correctly. Make sure there are no extra spaces before or after the code.

It is also possible that the invite code has changed after a server restart, update, or configuration adjustment. In that case, reopen `InviteCode.txt` and use the current value.

### Server is not ready yet
If the server is still starting or has not completed initialization, players may not be able to connect even with the correct invite code.

Check the server console and logs in your game server management to confirm that the server has started successfully and is fully online.

:::caution Wait for Full Startup
Do not try to connect while the server is still loading or restarting. This can result in failed connection attempts even if the invite code is correct.
:::

### Configuration or file problems
If the server remains unreachable, there may be a configuration issue or corrupted files preventing proper startup. In this case, review recent changes you made to the server and inspect the logs for errors.

If needed, restore a working backup or undo recent configuration changes.

### Missing solution or unhelpful
If you are still unable to connect after checking the invite code, server status, and configuration, contact the ZAP-Hosting support team through the official [support page](https://zap-hosting.com/en/customer/support/).

When creating a request, include as much detail as possible, such as:

- The exact issue you are experiencing
- Whether the server starts successfully
- Whether the invite code in `InviteCode.txt` is visible
- Any relevant error messages from the console or logs

## Conclusion
Congratulations, you have successfully connected to your Windrose server using the invite code. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂