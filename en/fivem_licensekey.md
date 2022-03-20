---
id: fivem_licensekey
title: FiveM: Add your own license key (Patreon) to the server
description: Information on how to create your own license key (from Patreon) for FiveM servers from ZAP-Hosting and add it to your server - ZAP-Hosting.com documentation
sidebar_label: Own License Key
---

## Why would I need a key?

A key is required if, for example, the [FiveM Patreon](https://patreon.com/fivem) benefits were purchased to unlock Onesync, or if the Nucleus interface shows the wrong game server.

## Preparation
To create your own license key, we first log in at https://keymaster.fivem.net. If no FiveM Forum account has been created yet, one must be created here.

![image](https://user-images.githubusercontent.com/13604413/159167431-44672d55-c5a2-458c-9849-b2f7275d3cdf.png)

After we are logged in, we click on "New" at the top, which takes us to the Create license key menu:

![image](https://user-images.githubusercontent.com/13604413/159167435-0e204772-57bf-406f-ba33-e13737fad42d.png)


## Specify data

Now we can fill the data as follows:

- **Label:** Description of the server, e.g. the name.
- **Server IP Address:** The server IP, without port
- **Server Type:** The server type, in our case "Server Provider (rented server)"


### Enter IP

You will find the IP of your server in the "FTP-Browser" tab

You need to enter the IP without port.

## Generate Key

After all our data is filled, the Keymaster page should look something like this:

![image](https://user-images.githubusercontent.com/13604413/159167479-a5964ac5-a6de-43a9-bd12-a459bb94e002.png)

Now we click on "Generate", a key will now be generated.

On the homepage of the keymaster we can now see our new key:

![image](https://user-images.githubusercontent.com/13604413/159167482-70076a07-9f9a-48cf-ad21-68a0907f5d87.png)

## Configure Key

> ⚠️ on txAdmin servers the key must be defined in server.cfg at sv_licensekey!

Now we open the settings of our game server and scroll down, here we can enter our own key under "Own license key (optional)", the final result should look like this.

![image](https://user-images.githubusercontent.com/13604413/159167488-29414748-f743-47ff-a52e-8d6e7154090d.png)

Now we save the settings and restart the server.

Done! The key is now applied.
