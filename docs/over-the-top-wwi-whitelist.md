---
id: over-the-top-wwi-whitelist
title: "Over the Top WWI: Configure Whitelist"
description: "Learn how to enable and manage a whitelist on your Over the Top WWI server → Learn more now"
sidebar_label: Whitelist
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

A whitelist allows you to restrict access to your **Over the Top WWI** server so that only approved players can join. This is especially useful for private servers, communities, or testing environments where access should be controlled.

By enabling the whitelist, only players listed in the whitelist file will be able to connect to the server.

<InlineVoucher />

## Configuration

The whitelist is configured inside the server configuration file. You can access and edit this file in your **gameserver management panel** under **Configs**. Locate and open the `ServerConfiguration.ini` configuration file. Inside this file, find the following parameter:

```
WhiteListIsEnabled = True
WhiteListPathString = Whitelist.txt
```


- `WhiteListIsEnabled` enables or disables the whitelist system

- `False` → Disabled
- `True` → Enabled

- `WhiteListPathString` defines the file used for storing allowed player IDs

When the whitelist is enabled, only players listed in the specified file will be able to join the server.

## Managing the whitelist

The whitelist file is typically located in your server directory and contains a list of allowed player IDs.

Each player must be added on a new line inside the file:

```
SteamID1
SteamID2
SteamID3
```


Make sure to use the correct player identifiers, otherwise access will be denied. After updating the whitelist file or modifying the `ServerConfiguration.ini`, save your changes and restart the server. The whitelist will then be enforced.

## Conclusion

Congratulations! You have successfully configured the whitelist on your **Over the Top WWI server**. This allows you to control who can access your server and maintain a private or moderated environment.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />