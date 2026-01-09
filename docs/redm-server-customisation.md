---
id: redm-server-customisation
title: "RedM: Customise server details"
description: "Discover how to customize your server name with colors and emojis to make it stand out in the server list → Learn more now"
sidebar_label: Customise Server Details
services:
  - gameserver-redm
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Are you looking to customise your server to display custom information in the server list? This can be done easily! In this guide you will learn how to set a range of different customisations that are available to make your server stand out in the server list!



<InlineVoucher />



## Custom Server Name

### Color Codes

There are a range of colors that you can add to your server name. These can be specified through the use of a prefix when wanting to change color. The list of colours that are available can be viewed in the table below.

:::info
In order to use colours in your server name, you must have a valid [Cfx.re subscription](https://portal.cfx.re/subscriptions) which includes the benefit. If you do but it still doesn't work, ensure that you have set a [Own License Key](redm-licensekey.md).
:::

Now you can change your server's name, through one of the three methods described in the accessing configuration section. Here is an example of using colors and the outcome they produce:
```
sv_hostname "^2ZAP-Hosting ^0| ^4Official Community Server ^0- ^1Events coming ^8soon^1!"
```

![](https://screensaver01.zap-hosting.com/index.php/s/F5TYfEGQkGjXger/preview)



| Code | Color      | Hex Code |
| ---- | ---------- | -------- |
| ^0   | White      | #F0F0F0  |
| ^1   | Red        | #F44336  |
| ^2   | Green      | #4CAF50  |
| ^3   | Yellow     | #FFEB3B  |
| ^4   | Blue       | #42A5F5  |
| ^5   | Light Blue | #03A9F4  |
| ^6   | Purple     | #9C27B0  |
| ^7   | White      | #F0F0F0  |
| ^8   | Orange     | #FF5722  |
| ^9   | Grey       | #9E9E9E  |

### Emojis

RedM also allows you to place emojis directly into your server name. Simply place any emojis you wish into the `sv_hostname` parameter within your server configuration and it will work. You do not need a Cfx.re Subscription for this.



## Setting Project Details

### Server Description

Setting a server description is useful for providing a short and to the point overview of your server. You can easily set a small project server description for your RedM game server, which will display besides your server name on the server list. Here is an example of setting a project name and the outcome it produces:

```
sets sv_projectDesc "Join our Discord to stay updated on latest events! discord.gg/zaphosting"
```

![](https://screensaver01.zap-hosting.com/index.php/s/F5TYfEGQkGjXger/preview)

### Server Tags

Setting server tags can be beneficial to narrowing down what your server is about, and allow potential players to view your server when filtering out servers based on their likings. Once you set tags, these will be visible on your server's server list page and will also be used to filter your server. Here is an example of setting project tags and the outcome it produces:

```
sets tags "zap, zap-hosting, official, community, zap-community, zap-community-server"
```

![](https://screensaver01.zap-hosting.com/index.php/s/oS2Y3dbPZDFDJPj/preview)

### Other Misc. Details

You can also change a few miscellaneous server details to your liking.

#### Gametype

Setting the gametype parameter changes what is displayed on your server's server list page. This does **not** change the gamemode on the server itself. You can change the gametype through your game server's webinterface, or by setting a tag:

```
sets gametype "Freeroam"
```

#### Language

Finally, you can change the language of your server which is displayed on your server's server list page. We have a [Language / location (flag)](redm-locale.md) for setting localisation. This can be done through your game server's webinterface, or by setting a tag:

```
sets locale "en-GB"
```

You can get a list of all locale tags by viewing [this resource](https://github.com/TiagoDanin/Locale-Codes#locale-list) or anything similar.



## Conclusion

Provided that you have followed all the steps, you have successfully customised your RedM game server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
