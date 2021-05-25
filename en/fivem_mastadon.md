---
id: fivem_mastadon
title: FiveM: Setting up an activity feed for your server
description: Information on how to set up an activity feed for your FiveM server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Configure Activity Feed
---

## Preparation

To set up an activity feed on our server, we first need to register an account on [Mastadon](https://mstdn.social/about).

## Setup

Now we open our [Mastadon Profile](https://mstdn.social/settings/profile) and copy our username, in our case this is `zaphosting@mstdn.social`

Now we can open our "Configs" on our FiveM server and edit the server.cfg:

[](https://screensaver01.zap-hosting.com/index.php/s/PaQHqny89EFXNYK/preview)


We now insert the following line at the very bottom:

```
sets activitypubFeed username
```

"username" should be replaced with your mastadon username.

![](https://screensaver01.zap-hosting.com/index.php/s/JkwaEpJbDqqPmjK/preview)

Now we save the file and restart our server, after ~20 minutes the "Feed" tab will be available after your server is opened.

![](https://screensaver01.zap-hosting.com/index.php/s/ZwsnnABibqZncEx/preview)
