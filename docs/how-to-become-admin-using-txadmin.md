---
id: how-to-become-admin-using-txadmin
title: "How to become admin using txadmin"
description: "Learn the simple steps to grant yourself admin rights using txAdmin on your FiveM server to manage your community effectively. -> Learn more now"
sidebar_label: Become Admin (txAdmin)
services:
 - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

In this guide, you will learn how to become an admin on your FiveM server using txAdmin. Having admin privileges allows you to manage players, resources, and server settings directly through the txAdmin interface.

## Prerequisites

Before you begin, ensure you have:

- Access to your ZAP-Hosting FiveM server with txAdmin enabled.
- Your ZAP-Hosting Panel login credentials.
- Basic knowledge of navigating the txAdmin web interface.

## How to Become Admin Using txAdmin

### Step 1: Access txAdmin Dashboard

1. Log in to your ZAP-Hosting Panel at [https://zap-hosting.com](https://zap-hosting.com).
2. Navigate to your FiveM server instance.
3. Click the **"Manage"** button to open the txAdmin dashboard.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

### Step 2: Open the Admin Management Section

1. In the txAdmin dashboard sidebar, click on **"Users"**.
2. Select the **"Admin Permissions"** tab to view current admins and add new ones.

### Step 3: Add Your Steam Hex Identifier as Admin

To gain admin rights, you need to add your Steam Hex identifier to the admin list.

#### Find your Steam Hex Identifier

- You can find your Steam Hex by visiting [https://steamid.io/](https://steamid.io/) and entering your Steam profile URL or SteamID.
- Copy the **SteamID64** and convert it to Hex using the tool on the same page or use the SteamID64 directly if txAdmin supports it.

:::tip
If you are not using Steam, you must use your Rockstar Social Club ID or other supported identifiers depending on your server configuration.
:::

#### Add Admin Identifier in txAdmin

1. In the **Admin Permissions** tab, click **"Add Admin"**.
2. Enter your Steam Hex identifier in the input field.
3. Assign the desired admin group or permissions level.
4. Click **"Save"** to apply changes.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

### Step 4: Verify Admin Access In-Game

1. Launch your FiveM client and connect to your server.
2. Once connected, open the in-game console by pressing the `F8` key.
3. Type the following command to check your admin status:

```bash
txa
```

This command opens the txAdmin menu if you have admin rights.

:::info
If the menu does not appear, double-check your Steam Hex identifier and permissions in txAdmin.
:::

### Optional: Configure Admin Groups and Permissions

You can customize admin permissions by editing the `server.cfg` or through the txAdmin interface.

| Permission Group | Description                     |
|------------------|---------------------------------|
| superadmin       | Full access to all commands     |
| admin            | Access to most admin commands   |
| moderator        | Limited administrative commands |

Adjust the group assignment when adding or editing admin users.

## Conclusion

Congratulations, you have successfully become an admin using txAdmin on your FiveM server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!