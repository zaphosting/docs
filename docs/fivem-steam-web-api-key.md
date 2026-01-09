---
id: fivem-steam-web-api-key
title: "FiveM: Steam Web API Key setup"
description: "Discover how to obtain and activate a Steam Web API key for FiveM to enable authentication and enhance server functionality → Learn more now"
sidebar_label: Steam Web API Key
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

A Steam Web API key has important uses for FiveM. This includes authentication by the API Key when Steam is used as identifier by different scripts and/or resources.

<InlineVoucher />

## Preparation

A non-limited Steam account is required to request an API key. Restricted Steam accounts have limited access to Steam's features, so without full access it is not possible to request an API key. You have to spend at least **5.00 USD** in the Steam store to unlock your account and its features.

## Request an API key

Once you have your Steam account ready, you should be able to request your own Steam Web API key. You can do this by signing up [on Steam's website](https://steamcommunity.com/dev/apikey) with your Steam account name and password.

![](https://screensaver01.zap-hosting.com/index.php/s/jLiPP3NYDfc7S8z/preview)

Once logged in, you will have to enter a domain name, confirm the terms of use for the Steam Web API and click on the **Register** button. The domain should be set to your **Server IP** *(without port)*, so enter it there.

![](https://screensaver01.zap-hosting.com/index.php/s/PYec2E6ksaY39p9/preview)

If everything is successful, you should be able to see your own Steam Web API Key, as shown below.

![](https://screensaver01.zap-hosting.com/index.php/s/smYn5GbQj73etRt/preview)

## Activation of an API key

Now that you have your Steam Web API Key, you must place it into your server configuration (`server.cfg`) file on your FiveM game server. You can access your `server.cfg` through the **txAdmin interface** under **CFG Editor**. Find an existing line or create a new one if it doesn't exist, and add the following, replacing `YOUR_KEY_HERE` with the key you generated: 

```
set steam_webApiKey "YOUR_KEY_HERE"
```

![img](https://screensaver01.zap-hosting.com/index.php/s/ED4QbkP8aaeF92B/preview)



## Conclusion

Finally, you can restart your server. Your Steam Web API key will be loaded the next time your server has fully started. You have successfully added a Steam Web API Key into your FiveM game server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
