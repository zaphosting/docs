---
id: redm-server-customisation
title: "RedM: Customise server details"
description: Information on how to customise server details displayed in the server list for RedM servers - ZAP-Hosting.com - Documentation
sidebar_label: Customise Server Details
---

Are you looking to customise your server to display custom information in the server list? This can be done easily! In this guide you will learn how to set a range of different customisations that are available to make your server stand out in the server list!

## Accessing your server's configuration

There are multiple ways available to access your `server.cfg` configuration file for your RedM game server. Editing this file is needed in order to allow you to set customisations.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>
The most user-friendly method is by heading over to the **Settings** section on your game server's webinterface and searching for the appropriate settings there, as seen below:

![image](https://github.com/zaphosting/docs/assets/42719082/01d7bf1c-6524-46e4-8c3d-7b54aaf6cf92)
</TabItem>

<TabItem value="configs" label="Via WI Config file">
Alternatively, for users who wish to directly edit the raw file, you can access this by heading over to the **Configs** section on your game server's webinterface and pressing the blue edit file button, as seen below:

![image](https://github.com/zaphosting/docs/assets/42719082/43793138-db0c-4824-827e-c50abf6e76e4)

This will open up a text editor directly on the site to enable you to edit it.
</TabItem>

<TabItem value="ftp" label="Via FTP">
The final method of accessing the raw file, is through FTP. If you are not familiar with using FTP, we recommend you to have a look at the [FTP file access](gameserver-ftpaccess.md) guide. However, this method takes longer and if you wish to directly edit the file contents, we recommend simply using the **Configs** section on your game server's webinterface as mentioned.
</TabItem>
</Tabs>

## Custom Server Name

### Color Codes

There are a range of colors that you can add to your server name. These can be specified through the use of a prefix when wanting to change color. The list of colours that are available can be viewed in the table below.

:::info
In order to use colours in your server name, you must have a valid [FiveM Patreon tier](https://www.patreon.com/FiveM/posts) which has the benefit. If you do but it still doesn't work, ensure that you have set a [custom license key, more info can be found on our guide](fivem-licensekey.md).
:::

Now you can change your server's name, through one of the three methods described in the accessing configuration section. Here is an example of using colors and the outcome they produce:
```
sv_hostname "^2ZAP-Hosting ^0| ^4Official Community Server ^0- ^1Events coming ^8soon^1!"
```

![image](https://github.com/zaphosting/docs/assets/42719082/32bbf492-9ee0-4c78-a391-9c44120369c2)

#### Colour Codes Table

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

RedM also allows you to place emojis directly into your server name.

Simply place any emojis you wish into the `sv_hostname` parameter within your server configuration and it will work. You do not need a RedM Patreon tier for this.

Here is an example of adding emojis via your game server's webinterface:

![image](https://github.com/zaphosting/docs/assets/42719082/01d7bf1c-6524-46e4-8c3d-7b54aaf6cf92)

Likewise, you can add this directly to your `server.cfg` file via FTP or the **Configs** section on your game server's webinterface.

## Setting Project Details

### Server Description

Setting a server description is useful for providing a short and to the point overview of your server.You can easily set a small project server description for your RedM game server, which will display besides your server name on the server list.

Here is an example of setting a project name and the outcome it produces:
```
sets sv_projectDesc "Join our Discord to stay updated on latest events! discord.gg/zaphosting"
```

![image](https://github.com/zaphosting/docs/assets/42719082/32bbf492-9ee0-4c78-a391-9c44120369c2)

### Server Tags

Setting server tags can be beneficial to narrowing down what your server is about, and allow potential players to view your server when filtering out servers based on their likings. Once you set tags, these will be visible on your server's server list page and will also be used to filter your server.

Here is an example of setting project tags and the outcome it produces:
```
sets tags "zap, zap-hosting, official, community, zap-community, zap-community-server"
```

![image](https://github.com/zaphosting/docs/assets/42719082/33407e9f-9e28-4264-9b13-e946ed5b434a)

### Other Misc. Details

You can also change a few miscellaneous server details to your liking.

#### Gametype

Setting the gametype parameter changes what is displayed on your server's server list page. This does **not** change the gamemode on the server itself.

You can change the gametype through your game server's webinterface, or by setting a tag:
```
sets gametype "Freeroam"
```

#### Language

Finally, you can change the language of your server which is displayed on your server's server list page. We have a dedicated page for setting localisation which you can view here: [Change language / location (flag)](redm-locale.md).

This can be done through your game server's webinterface, or by setting a tag:
```
sets locale "en-GB"
```

You can get a list of all locale tags by viewing [this resource](https://github.com/TiagoDanin/Locale-Codes#locale-list) or anything similar.

You have successfully customised your RedM game server!