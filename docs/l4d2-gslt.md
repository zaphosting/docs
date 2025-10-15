---
id: l4d2-gslt
title: "Left 4 Dead 2: Create a GSLT (Steam Game Server Login Token)"
description: "Discover how to authenticate game servers with Steam's GSLT for public listing and VAC protection → Learn more now"
sidebar_label: Create GSLT
services:
  - gameserver-l4d2
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

The **GSLT (Game Server Login Token)** is a login token required by Steam/Valve for running dedicated servers for certain games. It is linked to a Steam account and ensures that the server is properly authenticated. 

Without a valid GSLT, affected servers may not show up in the public server list or may not be able to use VAC protection.

<InlineVoucher />



## Requirements

To use a Game Server Login Token (GSLT), your Steam account must not be limited, banned, or excluded from the community. It must be linked to a verified smartphone, and you must own the game you want to host. You can create up to 1000 tokens per account.

Keep in mind that you are fully responsible for your tokens. If a token is misused or banned, you may lose access to the linked game permanently. Never share your tokens, if you have, delete them immediately. When your Steam password is reset, all tokens are automatically regenerated. Tokens that remain unused for a long time will expire but can be recreated at any time.



## Create GSLT
In order to create a Game Server Login Token, sign in with your Steam account and access the [Steam Game Server Account Management](https://steamcommunity.com/dev/managegameservers).


![img](https://screensaver01.zap-hosting.com/index.php/s/WaMsyscboqCtNHA/preview)

Once logged in, you have the possibility to create a new token using the form displayed on the page. In the **App ID** field, enter the App ID `550` which belongs to **Left 4 Dead 2**. Make sure to enter the correct ID, as the token will not work with an incorrect value.

For the **Memo** field, you can add a description of your choice. This helps you identify the purpose of the token later, such as the name or role of the server. After entering both values, click on **Create** to generate the token. The token will then be displayed and can be used in your server’s launch configuration.

![img](https://screensaver01.zap-hosting.com/index.php/s/fTgmTPA7q8k9TAd/download)

## Server configuration

The login token now needs to be added to your server configuration. To do this, open the management interface of your game server and navigate to the **Settings** section. Enter the token in the field labeled **GSL Token** and press save.

![img](https://screensaver01.zap-hosting.com/index.php/s/tzJiT4nTZo2nWMz/preview)

:::info Operating multiple Left 4 Dead 2 servers
When operating multiple **Left 4 Dead 2** servers, you will need a GSLT for each server. It is <u>**not**</u> possible to operate multiple game servers via one single GSLT.
:::



## Conclusion

The GSLT has been created and applied to your server configuration. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
