---
id: fivem-steam-web-api-key
title: "FiveM: Steam Web API Key setup"
description: Information on setting up a Steam Web API key from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Steam Web API Key
---



## Introduction

A Steam Web API key has important uses for FiveM. This includes authentication by the API Key when Steam is used as identifier by different scripts and/or resources.

## Prerequisites

A non-limited Steam account is required to request an API key. Restricted Steam accounts have limited access to Steam's features, so without full access it is not possible to request an API key. You have to spend at least **5.00 USD** in the Steam store to unlock your account and its features.




## Request an API key

Once you have your Steam account ready, you should be able to request your own Steam Web API key. You can do this by signing up [on Steam's website](https://steamcommunity.com/dev/apikey) with your Steam account name and password.

![image](https://github.com/zaphosting/docs/assets/42719082/56be5337-a458-425b-86b0-e0c5fa94abab)

Once logged in, you will have to enter a domain name, confirm the terms of use for the Steam Web API and click on the **Register** button. The domain should be set to your **Server IP** *(without port)*, so enter it there.

![image](https://github.com/zaphosting/docs/assets/42719082/334e89a9-0eef-4ea5-b100-5a1e4b8cdc31)

If everything is successful, you should be able to see your own Steam Web API Key, as shown below.

![image](https://github.com/zaphosting/docs/assets/42719082/a99f463b-93ae-408b-b038-29e366b30256)

## Activation of an API key

Now that you have your Steam Web API Key, you must place it into your server configuration (`server.cfg`) file on your FiveM game server. You can access your `server.cfg` file either through FTP (as seen above), or via the **Configs** section on your game server's webinterface.

![image](https://github.com/zaphosting/docs/assets/42719082/43793138-db0c-4824-827e-c50abf6e76e4)

Find an existing line or create a new one if it doesn't exist, and add the following, replacing `YOUR_KEY_HERE` with the key you generated: 
```
set steam_webApiKey "YOUR_KEY_HERE"
```

Finally, you can restart your server. Your Steam Web API key will be loaded the next time your server has fully started.

You have successfully added a Steam Web API Key into your FiveM game server!
