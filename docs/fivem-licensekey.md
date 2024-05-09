---
id: fivem-licensekey
title: "FiveM: Add your own license key (Patreon) to the server"
description: Information on how to create your own custom license key (from Patreon) and add it to your FiveM server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Own License Key
---

## Why would you need a custom key?

You would require your own license key, primarily if you wish to use your [FiveM Patreon](https://www.patreon.com/fivem/posts) benefits including items such as Onesync, coloured server name and more. Alternatively, you may want a custom license key to change the listed owner on the server list or if you receive an error that the automatically generated ZAP key is invalid.

## Preparation

To create your own license key, you should first login to the [Cfx.re Keymaster website](https://keymaster.fivem.net). If you do not have an existing Cfx.re Forum account, you must create one in order to to be able to login and proceed. 

![image](https://github.com/zaphosting/docs/assets/42719082/4c5bd4d9-ea1a-49aa-b70c-b5d7f07682c2)

After you are logged in, click on the **New server** button on the left navigation bar, which will take you to the key creation page:

![image](https://github.com/zaphosting/docs/assets/42719082/8562c10c-3453-4fb8-bb1f-ed65219580a9)

## Configuration

### Specify data

You must now fill the requested data as follows:
- **Label:** Description label, e.g. the name.
- **Server IP Address:** The server IP, without port
- **Server Type:** The server type, in your case "Server Provider (rented server)"

### Enter IP address

You will find the IP of your server on your game server's webinterface panel, or in the **FTP-Browser** section on the webinterface.

:::note
You need to enter the IP **without** the port.
:::

## Generate license key

Once you have inputted all of the necessary information, you should be able to generate a key. Your page should look similar to below. Now, press the **Generate** button and a key will be created.

![image](https://github.com/zaphosting/docs/assets/42719082/5a543db9-e604-451f-9426-52c986fd61d2)

Return back to the home page, and you will be able to see your newly registered license key.

## Add license key

Finally, you must head over to the **Settings** section on your game server's webinterface, and head over to the **Custom license key** field. In this field, paste the code that was generated.

![image](https://github.com/zaphosting/docs/assets/42719082/c0475d70-bed9-4eaa-8d4c-c7cf121703d5)

:::info
**For txAdmin:**
If you are using txAdmin version of the game server, you must instead define the key under the `sv_licensekey` parameter. You can access your `server.cfg` file either via your txAdmin interface panel, the **Configs** section on your game server's webinterface or directly through FTP access.
:::

After you have set your custom license key, proceed to restart your FiveM server. You have successfully set a custom license key for your FiveM game server!
