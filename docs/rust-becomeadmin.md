---
id: rust-becomeadmin
title: "Rust: Become an admin on your own server"
description: "Discover how to assign administrator permissions for full server control and manage your game effectively → Learn more now"
sidebar_label: Become admin 
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
The assignment of administrator permissions allows you simple and comprehensive administration with full control of your server. As an administrator, you have the option of using all available options and functions provided by the game directly in the game. All the steps you need to take to assign administrator permissions for your server will be described below. 
<InlineVoucher />

## Using RCON to Become Admin

Using RCON, you can run a command directly to make yourself admin.
Firstly, you must [Connect via RCON](rust-connectrcon.md).

Once you are connected, please navigate to where you can run console commands. In our example, we are using RustAdmin.

![](https://screensaver01.zap-hosting.com/index.php/s/zpJH32AHCySP8qT/preview)

Here you would run the respecive command:
`ownerid Steam64ID`

:::info
Please replace **Steam64ID** with your actual steam 64ID. You can find your steam64 id using this [Tool](https://steamid.io/)
:::

Then you will be made directly in admin. 

:::info
If you are ingame when running that, you should relog simply into the server.
:::

Then you are now an administrator! :)

## Using FTP to Become Admin

Alternatively, you can assign your self admin directly through FTP.
Firstly, you must connect using [Access via FTP](gameserver-ftpaccess.md).

Once you are successfully connected, you will then navigate to the following directory:

`/g#####/rust/server/<your_server_save>/cfg`

In this folder, you will need to **create** a **new file**. You will name it **users.cfg**

In this file, you will add your respective entries using the format:

`<role> <Steam64ID> <reason/user>`

:::info
Please replace **Steam64ID** with your actual steam 64ID. You can find your steam64 id using this [Tool](https://steamid.io/)
:::

An example entry can be found below:

```
ownerid 76561198114248380 "You can write anything here for reference"
moderatorid 76561198114248380 "Testing  Person"
```
:::info
You will have to restart your server for it to take affect.
:::

## Conclusion

Congratulations, you have successfully configured the administrator permissions. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
