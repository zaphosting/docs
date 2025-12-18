---
id: fivem-mastodon
title: "FiveM: Setting up an activity feed for your server"
description: "Discover how to integrate a Mastodon activity feed into your server for real-time updates and enhanced community engagement → Learn more now"
sidebar_label: Configure Activity Feed
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Preparation

To set up an activity feed on our server, we first need to register an account on Mastodon.

## Setup

Now we open our Mastodon Profile and copy our username, in our case this is `zaphosting@mstdn.instance`

Now we can open our "Configs" on our FiveM server and edit the server.cfg.

We now insert the following line at the very bottom:

```
sets activitypubFeed username
```

"username" should be replaced with your Mastodon username.

![](https://screensaver01.zap-hosting.com/index.php/s/oQWC9pxrweM8FsY/preview)

Now we save the file and restart our server, after ~20 minutes the "Feed" tab will be available after your server is opened.


<InlineVoucher />
