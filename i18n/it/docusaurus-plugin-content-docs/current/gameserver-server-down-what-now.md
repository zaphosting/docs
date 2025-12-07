---
id: gameserver-server-down-what-now
title: 'Game server: Server offline – What now?'
description: "Learn how to diagnose game server crashes by analyzing log files to spot errors and find solid fixes → Check it out now"
sidebar_label: Server crash – What to do?
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

If your game server is offline, there can be tons of reasons why. **The key is: don’t just restart it right away! First, check out the log file. Usually, there are **error messages** that explain exactly why the server crashed. **If you restart the server immediately, the log gets overwritten and the old one is deleted. Then you won’t be able to see any errors anymore.**

<InlineVoucher />

## Check the log file

You can easily access the log file via the menu on the left.

![](https://screensaver01.zap-hosting.com/index.php/s/rTMjGQPGoijMCXQ/preview)

Then open it by clicking the green eye icon. **Make sure you always open the latest log file.  
You can tell by the date or the filename.**

![](https://screensaver01.zap-hosting.com/index.php/s/Hc4cYQSj3c9Enpi/preview)

Once opened, scan it for errors (**Errors usually include words like "Error", "Can’t find", "Couldn’t load"**).

In the screenshot below, you see an example from a FivemServer with a wrong server license key.

![](https://screensaver01.zap-hosting.com/index.php/s/pAwzNkHZBTtHds9/preview)

You can then Google this error to see if it’s a known issue. Usually, you’ll find the cause pretty fast.

If you can’t find anything about the error, hit up our Live Chat and send the error as text or screenshot.

## Log file empty?

Yeah, that can happen too. If the log file is empty, it might not have been created because the server crashed immediately or got deleted after a restart. In this case, your only option is to try restarting the server and hope the error pops up again or the server runs fine.

## No fix in Live Chat?

If Google and Live Chat didn’t help, you’ve got two options. First, open a support ticket and leave the server as is so our team can take a deeper look.

The second option is to restore a backup or reinstall the server.

### Option 1 – Restore a backup

To restore a backup, just go to Backups on the left and import the latest backup using the green arrow. After that, your server should be back up and running like before.

![](https://screensaver01.zap-hosting.com/index.php/s/j9C396QXtq8Pytx/preview)

### Option 2 – Reinstall the server

You can start the reinstall under "Settings" on the left. This will reset your entire server to day one (you can also reset all settings with "**Reset all options**").

![](https://screensaver01.zap-hosting.com/index.php/s/2edwoTrn3We67SB/preview)

## Reinstall didn’t fix it?

That’s the worst case scenario. Then the only option is to have the server checked by support via chat or ticket, because it’s probably a more serious issue. We’ll do everything we can to fix it ASAP so you can get back to gaming without hassle.

<InlineVoucher />