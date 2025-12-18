---
id: vserver-windows-manage-users
title: "VPS: Manage Users on Windows Server"
description: "Discover how to manage multiple user accounts on Windows Server for secure, simultaneous remote access and personalized desktops → Learn more now"
sidebar_label: Add & Manage Users
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Windows OS provides built-in user management allowing you to easily manage additional users. Some of the benefits of using individual users include simulataneous (up to 2) remote desktop access through own credentials, individual desktop and file access as well as an easy permission system. In this guide, we will cover the process of managing users on your Windows server.

<InlineVoucher />

## Preparation

Begin by connecting to your Windows server via RDP. If you need help doing this, please refer to our [Initial Access (RDP)](vserver-windows-userdp.md) guide.

:::important Administrative Privileges
Ensure that you use the **Administrator** user or any user with administrative privileges  to login to your Windows server, otherwise you will not be able to manage users.
:::

Each user that you create on your Windows server, will be able to use their own credentials to connect to the server through Remote Desktop. Similarly, each user will have their very own desktop, files and programs which are independent of others and can only be viewed by any user with administrative privileges . Programs that were installed for all users specifically, will be accessible globally.

With the regular Windows Server license, **2** accounts will be able to login and use the server simultanously. If this is exceeded and another user connects, the user that connected first will be disconnected in favour of the connecting user. Otherwise, there is no limit to how many user accounts can be created.

## Accessing User Management

Managing user accounts is done through the settings via the Control Panel. Begin by opening the Windows start menu on your Windows server and selecting **Control Panel**. Select the **User Accounts** option which should take you to another sub-menu.

![](https://screensaver01.zap-hosting.com/index.php/s/zePaY2rcCwTgaCo/preview)

Once again, select the **User Accounts** option on the menu which should take you to an overview area.

![](https://screensaver01.zap-hosting.com/index.php/s/rafwZP8rDnycjpa/preview)

On the overview page, select the **Manage another account** option to access the **Manage Accounts** section primarily used for managing users.

![](https://screensaver01.zap-hosting.com/index.php/s/iyQ9ZXoFLdMTNSZ/preview)

You are now ready to manage the users on your Windows server, proceed with one of the following sections based on the action that you wish to perform.

## Creating New User

To begin the user creation process, select the **Add a user account** option found on the **Manage Accounts** section.

![](https://screensaver01.zap-hosting.com/index.php/s/x4EpREF5FJoLycw/preview)

This will open up a prompt on your screen, which requires you to fill out a few details for the account, which includes the username, password and a password clue. Ensure that your password strong otherwise you may receive a validation error.

![](https://screensaver01.zap-hosting.com/index.php/s/dAyCkyAA2BLwNNe/preview)

Once ready, simply select the next button and your new user will be created.

![](https://screensaver01.zap-hosting.com/index.php/s/zEZGXQH9ErcCbgD/preview)

Lastly, you will have to add the new user to the remote desktop connection list to ensure that the server accepts RDP connections from it. Head over to the **Control Panel** and access **System and Security**.

![](https://screensaver01.zap-hosting.com/index.php/s/NtNg7sRRgDdnffr/preview)

From here locate **Allow remote access** and select it which will open a new menu.

![](https://screensaver01.zap-hosting.com/index.php/s/diBL57HtffpNAGX/preview)

On the menu, press **Select Users...** at the bottom which will display a new menu displaying current users with remote desktop access.

![](https://screensaver01.zap-hosting.com/index.php/s/TP7LW2pWboFKixy/preview)

On the the display menu, select **Add...**  to open a new user selector prompt and pick **Advanced...** on it.

![](https://screensaver01.zap-hosting.com/index.php/s/MTinLT9PDA45TAS/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/SNd89fxNXKbfBBt/preview)

This will expand the window to make your user easy to find. Use the **Find Now** button to return a list of users and find your new user, in this example this is `ZAP-Docs`.

![](https://screensaver01.zap-hosting.com/index.php/s/spQL9fTNd778bry/preview)

Select the user and use the **OK** buttons to close all the menus down and confirm changes.

You have successfully created a new user on your Windows server with access to remote desktop. You should try accessing the server via RDP using the credentials of the new user that you have created to ensure that everything is functional.

## Managing Users

You can easily manage all users through the **Manage Accounts** section. Simply select a user that you wish to manage.

:::important Administrative Privileges
In order to manage users, you must be using the main **Administrator** account or a user with the administrator account type which contains all the necessary privileges  to allow this.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/yJPTWKieZNZXifH/preview)

Now on the page, you will be able to use a variety of functions to manage the user which includes adjusting the username, password, account type as well as deleting the user.

![](https://screensaver01.zap-hosting.com/index.php/s/tkPtbrmfsnK3TcG/preview)

<InlineVoucher />
