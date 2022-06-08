---
id: rust_becomeadmin
title: Rust: Become an admin on your own server
description: Information on how to become an admin on your Rust server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Become Admin 
---

## 🖥️ Using RCON to Become Admin

Using RCON, you can run a command directly to make yourself admin.
Firstly, you must [Connect via RCON](rust_connectrcon.md).

Once you are connected, please navigate to where you can run console commands. In our example, we are using RustAdmin.

![](https://screensaver01.zap-hosting.com/index.php/s/Lm7yJJz8BXQfMHN/preview)

Here you would run the respecive command:
`ownerid Steam64ID`

> Please replace **Steam64ID** with your actual steam 64ID. You can find your steam64 id using this [Tool](https://steamid.io/)

Then you will be made directly in admin. 

> If you are ingame when running that, you should relog simply into the server.

Then you are now an administrator! :)

## ↕️ Using FTP to Become Admin

Alternatively, you can assign your self admin directly through FTP.
Firstly, you must connect using [FTP](gameserver_ftpaccess.md).

Once you are successfully connected, you will then navigate to the following directory:

`/g#####/rust/server/<your_server_save>/cfg`

In this folder, you will need to **create** a **new file**. You will name it **users.cfg**

In this file, you will add your respective entries using the format:

`<role> <Steam64ID> <reason/user>`

> Please replace **Steam64ID** with your actual steam 64ID. You can find your steam64 id using this [Tool](https://steamid.io/)

An example entry can be found below:

```
ownerid 76561198114248380 "You can write anything here for reference"
moderatorid 76561198114248380 "Testing  Person"
```
> You will have to restart your server for it to take affect.

Then you are now an administrator! :)
