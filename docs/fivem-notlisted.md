---
id: fivem-notlisted
title: "FiveM: Server does not appear in the server list"
description: "Discover how to troubleshoot server listing issues and ensure your server appears correctly in the list → Learn more now"
sidebar_label: Server not in Serverlist
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

If the server does not appear in the server list, this can be due to several reasons, if this guide does not fix the problem, we would ask you to contact our [Support](https://zap-hosting.com/en/customer/support/).

<InlineVoucher />

## Configuration error

Often it is simple configuration errors which causes this problem, first we should check if our server has disabled the listing, for this we check the `sv_master1` line:

![](https://screensaver01.zap-hosting.com/index.php/s/KBH8deTbXxfrWtB/preview)

:::info
This line should **always** be commented out with a #, if this is not the case, the server will not be listed.
:::


Also the server name (`sv_hostname`) should be checked:

![](https://screensaver01.zap-hosting.com/index.php/s/9KyEj4tNQWRYxdB/preview)


In this case the quotation mark at the end of the line is missing, with some server names there may also be problems due to formatting, we would recommend to remove them in this case, e.g. [DE], special characters like ä, ü, ö.

## Problematic resources

It is also possible that resources prevent the server from being listed, in this case we recommend to remove the last installed resources and then leave the server online for ~1h, in most cases it should be displayed again.


## Reinstallation

If none of this helps, a fresh install is recommended, this will reset all server files to default.

:::info
Be sure to make a backup before reinstalling, otherwise the data on the server will be lost.
:::

<InlineVoucher />
