---
id: redm-steam-web-api-key
title: Steam Web API Key setup
description: Information on setting up a Steam Web API key from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Steam Web API Key
---

## Requirements

A Steam Web API key has important uses for RedM. This includes authentication by the API Key when Steam is used as identifier by different scripts and/or resources.

:::note
A non-limited Steam account is required to request an API key. Restricted Steam accounts have limited access to Steam's features, so without full access it is not possible to request an API key. You have to spend at least **5.00 USD** in the Steam store to unlock your account and its features.
:::

## Requesting an API Key

Once you have your Steam account ready, you should be able to request your own Steam Web API key. You can do this by signing up [on Steam's website](https://steamcommunity.com/dev/apikey) with your Steam account name and password.

![image](https://user-images.githubusercontent.com/115637675/195389732-939c0a8e-f011-4242-8048-97bb51122a58.png)

Once logged in, you will have to enter a domain name, confirm the terms of use for the Steam Web API and click on the **Register** button. The domain should be set to your **Server IP** *(without port)*, so enter it there.

![image](https://user-images.githubusercontent.com/115637675/195401735-0615a6e3-ea01-4a77-97ce-f91d3d753bee.png)


If everything is successful, you should be able to see your own Steam Web API Key, as shown below.

![image](https://user-images.githubusercontent.com/115637675/195397282-c79aff45-2e38-49f9-bf1a-3efd563b3294.png)


## Activation

Now that you have your Steam Web API Key, you must place it into your server configuration (`server.cfg`) file on your RedM gameserver.

You can access your `server.cfg` file either through FTP (as seen above), or via the **Configs** section on your gameserver's webinterface.

![image](https://github.com/zaphosting/docs/assets/42719082/e3c7392c-7246-4133-be2e-383dac4b0327)

Find an existing line or create a new one if it doesn't exist, and add the following, replacing `YOUR_KEY_HERE` with the key you generated: 
```
set steam_webApiKey "YOUR_KEY_HERE"
```

Finally, you can restart your server. Your Steam Web API key will be loaded the next time your server has fully started.

You have successfully added a Steam Web API Key into your RedM gameserver!
