---
id: gameserver-server-down-what-now
title: 'Game server: Server down - What now?'
description: "Learn how to diagnose game server crashes by analyzing log files to identify errors and find effective solutions → Learn more now"
sidebar_label: Server crash - What to do?
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

If your game server is down, this can have many reasons. **It is important that you don't try to restart it directly, but take a look at the log file first. There are usually **error messages** which describe why exactly the server crashed. **If you restart the server directly, the log is regenerated and the old one is deleted. Then unfortunately you can't see any more errors.**

<InlineVoucher />

## View the log file

The log file can be easily accessed via the menu on the left.

![](https://screensaver01.zap-hosting.com/index.php/s/rTMjGQPGoijMCXQ/preview)

Afterwards you can view them via the green eye. **The important thing is that you always open the latest log.
You can recognize it by the date or the name.

![](https://screensaver01.zap-hosting.com/index.php/s/Hc4cYQSj3c9Enpi/preview)

Once you have opened them, you must check them for errors (**Errors usually contain something like "Error" "Cant find" "Couldnt load "**)

In the following screenshot I have an example of a FivemServer with a wrong server license key.

![](https://screensaver01.zap-hosting.com/index.php/s/pAwzNkHZBTtHds9/preview)

You could then enter this error e.g. at Google and see if it is known. Usually you can find the reason for this error quite quickly.

If you don't find anything about the error, you can go to the Live Chat and send in the error as text or screenshot.

## Log file without content

Unfortunately, this can also happen. If the log file is empty, then it could not be created because the server went down directly or was deleted due to a restart. In this case you can only try to restart it in the hope that the error is generated again or the server is running again.

## No solution in live chat

If you did not find a solution on Google and in the live chat, then there are 2 possibilities. The first would be to open a ticket and leave the server as it is, so that the support can check it more closely.

The second solution would be to install a backup or reinstall the server.

### Variant 1 - Restoring a backup

To restore a backup, simply go to Backups on the left and import the latest backup using the green arrow. Afterwards your server should run as usual.

![](https://screensaver01.zap-hosting.com/index.php/s/j9C396QXtq8Pytx/preview)

### Variant 2 - Reinstall the server

The reinstallation can be started under "Settings" on the left side. Afterwards the complete server will be reset to the first day (additionally the settings can also be reset "**Reset all options**")

![](https://screensaver01.zap-hosting.com/index.php/s/2edwoTrn3We67SB/preview)

## Reinstallation without success

Unfortunately, this is the worst case that can happen. Then it is unfortunately only possible to have the server checked via chat or a ticket, because then it is a more serious problem. In this case we will do our best to solve the problem as soon as possible so that you can use your service as usual.

<InlineVoucher />
