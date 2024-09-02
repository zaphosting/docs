---
id: assettocorsa-contentmanager
title: "Assetto Corsa: Configure Server with Content Manager"
description: Information on how to configure your Assetto Corsa server from ZAP-Hosting using the Content Manager - ZAP-Hosting.com documentation
sidebar_label: Configure Server with Content Manager
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
**Important** To manage the server with Content Manager, the full version is required, the lite version can *not* manage servers.
:::

<InlineVoucher />


## Preparation

First, we open our Content Manager and click on the sandwich menu at the top right, where we select "Server":

![image](https://screensaver01.zap-hosting.com/index.php/s/LGKdDPSCMCEMEZj/preview)

Here we now create a new preset and select it:

![image](https://screensaver01.zap-hosting.com/index.php/s/XLTcJkwrAAwB65o/preview)

## Set Server Slots

We first need to set how much capacity our server has, in our case our server is only 10 slots, so we select '10' for Capacity:

![image](https://screensaver01.zap-hosting.com/index.php/s/XreNRjbpSJJqEsQ/preview)

## Set Map

Here Imola is selected as map by default, by clicking on the map we can select our own map:

![image](https://screensaver01.zap-hosting.com/index.php/s/B87ywSwXHL6qzFD/preview)



## Set Cars

Now we change to the tab "Entry List", here we can now add new cars:


![image](https://screensaver01.zap-hosting.com/index.php/s/bY5Q5WB7nDq7f8q/preview)


![image](https://screensaver01.zap-hosting.com/index.php/s/w6oxDfGJifFZbd7/preview)


:::info
Note that all car slots are filled and no more than the amount of available slots are set.

![image](https://screensaver01.zap-hosting.com/index.php/s/tSZn2QJLzfDx4r9/preview)
:::

## Configure FTP Upload

Via the "Advanced" menu we can configure an FTP uploader so that you can upload your server config with one click.

![image](https://screensaver01.zap-hosting.com/index.php/s/7TmdJPGKAbAJnDP/preview)


Now enter your FTP data here:

![image](https://screensaver01.zap-hosting.com/index.php/s/7R9xNeEbDQpF4BD/preview)

:::info
In the "Folder" you must enter the ID of your game server as you see it in the URL of your game server, for example:

> https://zap-hosting.com/en/customer/gameserver/show/**427814**/ftpBrowser/
:::

In our case, the whole thing would be:

```
/g427814/assetto-corsa/
```

For AssettoServer: 

```
/g427814/assettoserver/
```

After that you can click on "Upload Content", the config, track and cars that have been configured will be uploaded automatically, then you only need to start your server!
