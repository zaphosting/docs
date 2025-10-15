---
id: factorio-mods
title: "Factorio: Installing Mods/DLCs to your Factorio server"
description: "Discover how to enhance your Factorio gameplay by enabling DLCs and adding mods for a customized experience → Learn more now"
sidebar_label: Install Mods/DLCs
services:
  - gameserver-factorio
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/factorio-mods.json';

## Introduction

Factorio has native modding support allowing you to easily add a wide variety of mods to your game and server, alongside purchased game DLCs. In this guide, we will cover the process of enabling DLCs and installing mods to your client and Factorio server.

<InlineVoucher />

## Preparation

You can access the [official Factorio mods](https://mods.factorio.com/) website to browse mods. On this site, you can find a huge library of free mods made by the community across a wide variety of categories.

:::tip
Ensure that the mods you browse and download support the version of your Factorio server.
:::

## Enabling DLCs

With the Factorio 2.0 update, the first ever DLC was introduced named Space Age. To accommodate this, a new configuration option was introduced into the web interface panel to allow you to toggle whether the DLC is activated.

<YouTube videoId="i9CuAsCxUsk" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/BRa5saY3L76xe5F/preview" title="Activate Factorio Space Age DLC" description="Feel like you understand better when you see things in action? We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>

Head over to your product's web interface panel and access the **Settings** section. Scroll down and find the **Space Age DLC** option, which should be enabled by default.

![](https://screensaver01.zap-hosting.com/index.php/s/T5G5GrEzwoxM3Xk/preview)

Toggle the feature and use the green **Save** button at the bottom of the page. You have now successfully enabled a Factorio DLC.

## Adding & Uploading Mods

Now with the mods of your choice downloaded, you will have to upload them to your Factorio server via FTP. Please use our [FTP Access](gameserver-ftpaccess.md) guide as further assistance to connect to your server.

:::note
The server must be stopped before adding or editing mods, otherwise any edits may become undone.
:::

Once ready, navigate to the following directory and upload your downloaded mods, which should be in `.zip` format.

```
../factorio/saves/mods
```

![](https://screensaver01.zap-hosting.com/index.php/s/APFEnmg29jBCFKn/preview)

:::tip
When modding, the mods must be synced between the client and the server. Factorio makes this very simple. When you join the server for the first time after adjusting mods, your game will prompt you to synchronize your mods automatically.
:::

Finally, restart your server in order to automatically activate and install the mods on your Factorio server. If you are facing any errors, such as the server automatically shutting down, please check the **Information->Event Log** section on your web interface to view any errors. It is likely that a version mismatch could such issues.



## Popular Mods

Still looking for the perfect mods for your server? Browse through our carefully curated list of the most popular and highly recommended mods to enhance your gameplay and give your server the finishing touch it deserves. Get inspired and find exactly the additions that fit your project.

<SearchableItemList items={items} />



## Conclusion

Congratulations, you have successfully installed mods to your Factorio server. For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
