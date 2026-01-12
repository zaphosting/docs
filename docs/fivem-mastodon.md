---
id: fivem-mastodon
title: "FiveM: Setting up an activity feed by using Mastodon"
description: "Discover how to integrate a Mastodon activity feed into your server for real-time updates and enhanced community engagement → Learn more now"
sidebar_label: Configure Activity Feed
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

An activity feed helps keep players informed directly within your FiveM server. By connecting a Mastodon account, server updates, announcements, and short messages can be displayed in real time, without requiring players to check external platforms.

This integration creates a clear communication channel between the server and its community and ensures that important information is always visible in one central place.

## Preparation

Before configuring the activity feed, a Mastodon account is required. This account will be used to publish updates that later appear on the server.

If no account exists yet, register on a [Mastodon](https://joinmastodon.org/) instance of your choice. After registration, make sure the profile is accessible and ready to post updates, as these posts will be shown in the activity feed.



## Setup

Open your Mastodon profile and copy your full username. 
The username usually follows this format:

```
username@instance.domain
```

In this example, the username is `zaphosting@mstdn.instance`. Next, open the **Configs** section of your FiveM server and edit the `server.cfg` file. Scroll to the very bottom of the file and add the following line:

```
sets activitypubFeed username
```

Replace `username` with your own Mastodon username.

![](https://screensaver01.zap-hosting.com/index.php/s/oQWC9pxrweM8FsY/preview)

Save the file and restart the server. After the restart, it can take up to 20 minutes until the activity feed becomes available. Once active, a new **Feed** tab will appear when opening the server, showing posts from the linked Mastodon account.



## Conclusion

With the activity feed configured, server updates and announcements are displayed directly to players in a clear and accessible way. This setup improves transparency, strengthens community interaction, and provides an efficient method to share news and information without relying on external links or platforms.



For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

