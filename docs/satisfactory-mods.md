---
id: satisfactory-mods
title: "Satisfactory: Installing Mods to your Satisfactory server"
description: "Discover how to enhance your Satisfactory gameplay with unofficial mods and improve your server experience → Learn more now"
sidebar_label: Install Mods
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/satisfactory-mods.json';

## Introduction

Satisfactory does not offer official modding, however the game is built with modding in mind, which has caused the growth of a strong modding community ever since early access. These mods allow you to add a wide variety of improvements and additions to play through making it more exciting and fun. In this guide, we will cover the process of installing unofficial mods to your client and Satisfactory server.

<InlineVoucher />

## Preparation

To begin, you will need to find mods that you wish to use. In this guide, we will be utilizing the [Satisfactory Mod Manager](https://ficsit.app/) tool, which is a popular open-source mod manager allowing you to easily manage mods for both your local game and your game server.

Some of the key benefits of this tool include automatic mod management, easily "one-click" mod installation, filtering for multiplayer compatbility and the platform being the most popular repository for mods.

Once you have installed the application from the [Satisfactory Mod Manager](https://ficsit.app/) website, open the application and complete the quick first-time setup. We recommend keeping the settings as default to ensure that you can browse and select mods together, before installing them.

## Adding Server

Satisfactory Mod Manager has a very useful feature which allows you to easily upload mods to your game server automatically, simply by providing FTP Credentials.

Head over to the **Tools->FTP-Browser** section on your server's web interface to find the credentials to your server.

![](https://screensaver01.zap-hosting.com/index.php/s/bmEiCgJ56N6KeJ6/preview)

Now open the **Manage Servers** tab on the Satisfactory Mod Manager application and fill in the FTP Credentials. You may need to search the path to find the Satisfactory game server folder, which is displayed with a server icon.

![](https://screensaver01.zap-hosting.com/index.php/s/9RqoD845JWfFCYT/preview)

Once ready, use the green **Add** button to add the server. If you receive an error regarding too many clients, please wait up to a few minutes and try again. Upon success, you should see the server added in the same section.

![](https://screensaver01.zap-hosting.com/index.php/s/iS4j2RyxJNYZc85/preview)

## Installing Mods

With your Satisfactory server now connected, use the menu in the top-left to switch to the server as your game installation. Ensure that the **Mods on** toggle is highlighted.

![](https://screensaver01.zap-hosting.com/index.php/s/dn9qpR24pm37727/preview)

Now use the middle panel to browse for mods that you wish to install. You can use the filter and sort buttons to help out find specific cool new mods.

You can use the download button besides each mod to either install it directly, or to prepare it as a change if you used the default settings during first-time setup. We also recommend adding a star for your favourite mods to make them much easier to find in the future.

![](https://screensaver01.zap-hosting.com/index.php/s/9984GJDTkpZjLXW/preview)

Once you have the mods ready, you will have to apply the changes using the red button in the bottom-left if you used the default settings during first-time setup.

![](https://screensaver01.zap-hosting.com/index.php/s/Tjnkoo5bYgAB86M/preview)

This will start downloading the necessary files directly to your Satisfactory server. You can view the progress besides each of the mods as they are being installed. Upon success, you should see a notification and green icons besides each of the mods you downloaded.

![](https://screensaver01.zap-hosting.com/index.php/s/gE5qrazYq9wm2Sa/preview)

## Connecting to the Server

At this stage, we recommend restarting your Satisfactory server to ensure that all the mods are active and have started successfully.

Once ready, switch the game installation profile on the Satisfactory Mod Manager application back to your Satisfactory game install on your local system. Now use the **Play Satisfactory** button in the bottom-left to launch your game automatically with the same mods enabled as on your server. You can confirm that the mods are working in-game by checking the bottom-left section on the main menu.

![](https://screensaver01.zap-hosting.com/index.php/s/NaRPTMRydm74Eor/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/AfwKqcTetZgTQim/preview)

You should now be able to connect to your server as usual, using the **Server Manager** area of the main menu.



## Popular Mods

Still looking for the perfect mods for your server? Browse through our carefully curated list of the most popular and highly recommended mods to enhance your gameplay and give your server the finishing touch it deserves. Get inspired and find exactly the additions that fit your project.

<SearchableItemList items={items} />



## Conclusion

You have successfully setup mods onto your Satisfactory server using the Satisfactory Mod Manager tool. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
