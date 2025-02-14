---
id: redm-licensekey
title: "RedM: Add Custom License Key"
description: Information on creating a custom license key and adding it to your RedM server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Own License Key
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

By default, your RedM Game Server will come with an automatically generated license key. Adjusting this and utilising your own RedM license key can be beneficial for various reasons including accessing your RedM element club subscription benefits such as Onesync, changing the server owner to your name and much more. In this guide, we will cover the process of creating and adding your own license key to your RedM Game Server.

<InlineVoucher />

## Preparation

To begin with the key creation process, you must head over to the official **[Cfx.re Portal](https://portal.cfx.re/)** website and login with your Cfx.re Forum account. If you do not have an account yet, you can select the register option to create a new one.

![](https://screensaver01.zap-hosting.com/index.php/s/j5onRjCSN42dbie/preview)

:::info New Cfx.re Portal
The Cfx.re Portal is the new home for everything RedM related, replacing the old RedM Keymaster and Patreon solutions. On this new portal, you can now manage your server license keys, access any assets you have purchased and manage your RedM subscription all in one place.

We highly recommend reading the [official blog post](https://forum.cfx.re/t/introducing-the-cfx-re-portal/5287316/) for information about migrating Patreon subscriptions to the new Cfx.re Portal to maintain your benefits.
:::

## Generating License Key

Once logged in to the portal, navigate to the **Servers** section via the top navigation bar to access the main key management area. This replaces the legacy RedM Keymaster website in a nice all-in-one portal. You can also refresh any license key by using the **Re-Activate** option on this page.

Select the **Generate Key** button to open the registration prompt.

![](https://screensaver01.zap-hosting.com/index.php/s/JQ6dkNHZcBD4e4B/preview)

Into the prompt enter a useful name for the key to help you easily identify it in the future. Select the generate button once ready.

![](https://screensaver01.zap-hosting.com/index.php/s/3cYyRo7pgzQraz2/preview)

You should now see a new entry in the table with a key that you have just generated. Copy the key using the action buttons on the right-hand side and keep this ready for the next section.

![](https://screensaver01.zap-hosting.com/index.php/s/3Hd8tQqJA4xPKWk/preview)

## Adding Key to Server

With the license key now prepared, you will now have to adjust the existing license key on your RedM game server and replace it with the newly created key. If you are utilising the **txAdmin RedM** game version, you should utilise the [dedicated txAdmin](#txadmin-redm-version) section, as the instructions are slightly different.

### General RedM Servers

The easiest way to set your own custom license key is through the **Settings** section on the web interface panel. You could also adjust the `server.cfg` file manually through FTP or via the **Configs** section on the web interface, but we recommend and thus present the easier option below.

Head over to your RedM game server's web interface panel and head over to the **Settings** section on the left-hand side. Browse the page and find the **Custom License Key** field. Place your custom license key into there and press the green save button to confirm the changes.

![](https://screensaver01.zap-hosting.com/index.php/s/J6BY5k4B2jAabFw/preview)


### txAdmin RedM Version

For readers using the **RedM: txAdmin** game version, you will have to access the txAdmin panel for your RedM game server to perform the necessary adjustments. This can be found on your game server's web interface dashboard. Use the credentials on the page to login to the panel.

![](https://screensaver01.zap-hosting.com/index.php/s/yNLQrfrDrAYHcEY/preview)

Once on the txAdmin interface, navigate to the **CFG Editor** on the left-hand side to access the `server.cfg` file. In the editor, find the line with the `sv_licensekey` parameter and edit this with your custom license key. Press the save button once done to save the changes.

![](https://screensaver01.zap-hosting.com/index.php/s/2E8j9jtykcjwF7L/preview)

## Conclusion

After you have setup the custom license key, restart your server to start utilising it. You have successfully added a custom license key to your RedM game server.