---
id: fivem_mastodon
title: FiveM: Setting up an activity feed for your server
description: Information on how to set up an activity feed for your FiveM server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Configure Activity Feed
---

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

![image](https://user-images.githubusercontent.com/13604413/159167537-e15fe091-0a65-4d72-ac06-690c7d64bcae.png)

Now we save the file and restart our server, after ~20 minutes the "Feed" tab will be available after your server is opened.

