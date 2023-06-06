---
id: fivem-steam-web-api-key
title: Steam Web API Key setup
description: Information on Steam Web Api key setup - ZAP-Hosting.com documentation
sidebar_label: Steam Web API Key
---

## Requirements

A Steam Web API key has important uses for FiveM. This includes authentication by the API Key when Steam is used as identifier by different scripts and/or resources.

A non-limited Steam account is required to request an API key. Restricted Steam accounts have limited access to Steam's features, so without full access it is not possible to request an API key. You have to spend at least **5.00 USD** in the Steam store to unlock your account and its features.

## API Key request

Once you have a Steam account and already spent more than **5.00 USD** in the store, you should be able to request your own Steam API key. To do so, sign up [here](https://steamcommunity.com/dev/apikey) with your Steam account name and password.
![image](https://user-images.githubusercontent.com/115637675/195389732-939c0a8e-f011-4242-8048-97bb51122a58.png)

You will now have to enter a domain name, confirm the terms of use for the Steam API and click on *"Register "*. The domain will be your **server IP** *(without port)*, so enter it there.

![image](https://user-images.githubusercontent.com/115637675/195401735-0615a6e3-ea01-4a77-97ce-f91d3d753bee.png)

If everything went well, you should be able to see your own Steam Web API Key, as shown below.

![image](https://user-images.githubusercontent.com/115637675/195397282-c79aff45-2e38-49f9-bf1a-3efd563b3294.png)


## API Key einfügen

So now that we have our API key, we just need to add it to **server.cfg**.Open the *server.cfg* via **Configs** and insert the key at the line **set steam_webApiKey ""**.
![image](https://user-images.githubusercontent.com/115637675/195388724-bdbf700a-a636-45d2-9a21-92b1e2af304a.png)

If you do not have this line/command, you can easily add it later on:
```
set steam_webApiKey "KEYS"
```

Restart your server once to apply the change. 
