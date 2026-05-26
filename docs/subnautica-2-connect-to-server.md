---
id: subnautica-2-connect-to-server
title: "Subnautica 2: Connect to server"
description: "Learn how to connect to your Subnautica 2 server using the correct server details and establish a smooth connection without common issues -> Learn more now"
sidebar_label: "Connect to server"
services:
  - gameserver-subnautica-2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Not sure how to connect to your **Subnautica 2** server or what information you need to get started? This guide shows you how to obtain the required server details, establish the connection, and troubleshoot common connection issues.

:::info Early Access Notice
Subnautica 2 may still be in active development depending on the current release stage. As a result, multiplayer features, server browser behavior, and connection workflows can change over time.
:::

<InlineVoucher />

## Obtain server details

You will require all relevant information necessary to connect to your server. You can find the details for your server in the dashboard of your game server's web interface panel. Important information includes the following:

- IP address and port
- Server name
- Server password

Using the information mentioned above, you should be able to identify your server and ensure that you connect to the correct one.

| Detail | Description |
| --- | --- |
| `IP address` | The public address of your Subnautica 2 server |
| `Port` | The game port used for the connection |
| `Server name` | The name shown in-game if a server list or session browser is available |
| `Server password` | Required only if your server is password protected |

![img](https://screensaver01.zap-hosting.com/index.php/s/tSHRbW66eDXBxJn/preview)

## Establish server connection

The exact way you connect to a **Subnautica 2** server depends on the multiplayer options currently available in the game version you are using. In general, you will need the server's **IP address** and **Port**, and in some cases also the **server password**.

### Join using the in-game multiplayer menu

Start **Subnautica 2** and open the multiplayer or server join section from the main menu. If the game provides a direct connect option, enter your server's `IP address` and `Port` exactly as shown in your ZAP-Hosting web interface. If a password is configured, enter the `server password` when prompted.

After confirming the details, the game should attempt to establish the connection to your server.

:::note Direct Connection Availability
The exact wording of menus and buttons can vary depending on the current game version. If you do not see a direct connect option, check whether the game currently requires joining through a server list, invite system, or session browser instead.
:::

### Join using a server list or session browser

If **Subnautica 2** uses a built-in server browser instead of a manual direct connect field, search for your server using the configured `server name`. This is why checking the server name in your web interface is important before you try to connect.

Once you find the correct server in the list:

1. Select the server entry
2. Verify that the displayed name matches your server
3. Join the server
4. Enter the password if requested

:::tip Use Unique Server Names
If your server does not appear easy to identify in a list, assign a clear and unique server name in your server configuration. This makes it easier to find the correct entry and avoid connecting to the wrong server.
:::

### If the server is not immediately visible

If your server does not appear in the in-game browser, this does not always mean the server is offline. In some cases, server lists take time to refresh, or the game may only display servers after successful initialization.

You should verify the following:

- The server is online in the ZAP-Hosting web interface
- The correct game port is being used
- The server has fully started
- The server name is configured correctly
- A password is entered if one is required

![img](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Potential issues and solutions

The connection to a game server can often be affected by several factors. The most common issues and solutions are described below.

### Not visible

A lack of visibility of the server can occur if the initialization was not completed successfully. This may, for example, be due to a faulty configuration or corrupted files. Further information can usually be found in the server console or log files.

:::caution Server Startup Required
Do not try to connect before the server has completed its startup process. If the server is still loading or restarting, players may not be able to connect or the server may not yet appear in any list.
:::

### Wrong connection details

If you cannot establish a connection, verify that you are using the correct `IP address`, `Port`, and `server password`. Even a small typing mistake can prevent a successful connection.

| Check | What to verify |
| --- | --- |
| `IP address` | Matches the address shown in your server dashboard |
| `Port` | Matches the assigned game port |
| `Password` | Entered exactly as configured, including uppercase and lowercase letters |
| `Server name` | Matches the configured server name if you are searching in a browser |

### Server is online but connection fails

If the server appears to be online but you still cannot connect, review the server console and logs in your web interface. Errors there can indicate whether the server failed to load correctly or whether a configuration problem is blocking player connections.

:::tip Check Logs First
The server console and log files are usually the fastest way to identify why a connection fails. They can help you confirm whether the server is listening correctly and whether join attempts are reaching the server.
:::

### Missing solution or unhelpful

Still facing issues after troubleshooting? In this case, our support team is available daily to provide assistance. Simply create a **[Ticket](https://zap-hosting.com/en/customer/support/)** on our website and explain your issue with as much detail as possible. Include your server IP, port, and a short description of what happens when you try to connect.

## Conclusion

Congratulations, you have successfully connected to your Subnautica 2 server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!