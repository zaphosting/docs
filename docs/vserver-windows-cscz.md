---
id: vserver-windows-cscz
title: "VPS: Counter-Strike: Condition Zero Dedicated Server Windows Setup"
description: "Information about setting up a Counter-Strike: Condition Zero Dedicated Server on a Windows VPS from ZAP-Hosting - ZAP-Hosting.com documentation"
sidebar_label: "Counter-Strike: Condition Zero"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Got a VPS or dedicated server and want to install game servers on it? For example an Counter-Strike: Condition Zero Dedicated Server? Then you are at the right place! In the following we will explain step by step how you can install such a service on your server.

<InlineVoucher />

## Preparation

For the setup of a Counter-Strike: Condition Zero server the SteamCMD is needed. The SteamCMD is the **command line edition of the Steam client**. This tool can be used to quickly and easily download the dedicated server applications of popular Steam games. You will find the SteamCMD on the official Valve developer website: https://developer.valvesoftware.com/wiki/SteamCMD. 

Following this, the download takes place. This will contain the **steamcmd.zip** file, which must first be unpacked. It is recommended to create a separate folder, where the file can be unzipped. You should see the **steamcmd.exe** as a result. Execute it and wait until the installation process has been completed.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

As soon as the message **Loading Steam API.... OK** is displayed, the process has been completed successfully and you can start with the installation of the Counter-Strike: Condition Zero server.



## Installation

After the installation you should be able to execute commands in the **Steam command line (steamcmd.exe)**. There you need to login. This is done with the **anonymous** user. Execute the following command: `login anonymous`

The next step will be the installation. This is done with the `app_update 90` command. The App ID **90** stands for the **Counter-Strike: Condition Zero Dedicated Server** application.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Please be patient as the download completes, it can take some time for games with larger sizes. Once successful, you will see a success message appear confirming this.

To make the server visible and accessible externally, the server ports used must be enabled/forwarded in the firewall. To do this, open the Windows Firewall settings.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Additional rules must be added in the settings. To do this, click on the incoming and outgoing rules as described below and add them for the following ports: 27015-27020 for the TCP/UDP protocols.



## Configuration

By this stage, you have finished the setup for your Counter-Strike: Condition Zero server. You can perform further server configuration by directing editing the launch file. Head over to your root directory. Inside this directory navigate to the cfg directory and open the `server.cfg` file. There you can edit server options.

```
../steamapps/common/cs-ds/cstrike/cfg/server.cfg
```



## Starting & Connecting to your server

Now it is time to start your server. Head over to the main game directory and execute the following launch command:

```
hlds.exe -console -game cstrike +maxplayers 8 +map de_dust
```

You should now see logs appear in your command prompt which signals that the start up was successful. Please note that first time start up could take some time as everything is setup. Alternatively, you will be able to connect directly by using the bottom search bar on the server list and searching for: `[your_ip_address]:2456`.


## Conclusion

Congratulations, you have successfully installed and configured the Counter-Strike: Condition Zero server on your VPS! For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
