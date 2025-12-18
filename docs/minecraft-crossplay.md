---
id: minecraft-crossplay
title: "Minecraft: Setting up crossplay between Minecraft Java & Bedrock Editions"
description: "Discover how to enable seamless Minecraft Java and Bedrock crossplay with GeyserMC and Floodgate plugins for an enhanced multiplayer experience → Learn more now"
sidebar_label: Java & Bedrock Crossplay
services:
  - gameserver-minecraft
---

## Introduction

Traditionally playing together across both Minecraft Java and Bedrock editions has not been possible as both editions are considered complete separate platforms. Luckily in modern times you can make crossplay possible by utilising specific plugins for Java Edition servers which enable Bedrock edition players to play. In this guide, we will explore the process of installing and setting up the GeyserMC plugin alongside the Floodgate plugin to make crossplay between both platforms possible and simple.

## Preparation

In order to set up crossplay, you need to have a Minecraft server running one of the compatible Java server software. We recommend using either Paper, Spigot or Bukkit which are the most popular options.

You should have a Minecraft Game Server ready with one of these games installed and activated. If you need help doing this, view our [Game Change](gameserver-gameswitch.md) guide.

## Installation

To begin installation, head over to your game server's web interface dashboard and navigate to the **Settings->Plugins** section. On this page locate the **GeyserMC** drop down menu and select it. Use the install button to automatically install the plugin to your server and wait until the progress bar is complete.

We also recommend installing the **Floodgate** plugin which is located in the same section, because it provides various benefits such as:
- Allowing Bedrock Edition players to join without needing a Java account.
- Ability to see Bedrock Edition skins on Java edition.
- Various developer-related benefits.

:::note
The Floodgate plugin is optional, but we highly recommend it as it makes crossplay much easier for Bedrock players.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/cagcHmzwR2yBZSo/preview)

With the plugins now installed to your server, head over to the following section to configure settings.

## Configuring Plugins

In the same **Plugins** section on the web interface, select the blue settings icon located besides the GeyserMC plugin, which will automatically take you to the appropriate area in the **Settings** section.

![](https://screensaver01.zap-hosting.com/index.php/s/RAZKNSdePa5wBs4/preview)

Here on this page you can customise the server name and MOTD lines which will be displayed for Bedrock Edition players specifically.

![](https://screensaver01.zap-hosting.com/index.php/s/kBzxQkmNgdsWgZb/preview)

If you scroll down to the bottom of the page, you will also be able to see the ports that are assigned to your server.

- The **Game Port** is the main server port which should be used when connecting on regular Java Edition clients.
- The **Port 5** is the port that will be used by the GeyserMC plugin. You should utilise this when connecting on Bedrock Edition clients.

When connecting from a client, ensure that you utilise the correct port based on the Minecraft client edition.

:::tip
For customers with the **Own IP** server configuration option, a custom port assignment is possible upon request to customise the port to your likings. You can [contact support](https://zap-hosting.com/en/customer/support/) via a ticket to request this.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/joA62kWeJ5crCmY/preview)

<!--

### Floodgate Plugin

If you decided to install the floodgate plugin, you will have to adjust the GeyserMC configuration file to enable it as the main authentication method. Please ensure that your server is turned off before editing configuration files, otherwise changes may be overwritten.

Head over to the **Configs** section on your game server's web interface panel and open the `plugins/Geyser-[your_servertype]/config.yml` file using the blue edit button.

![](https://screensaver01.zap-hosting.com/index.php/s/ixCtkQ5WWWacfGe/preview)

In this file, locate the `auth-type` parameter found inside of the `remote` section and change this value from **online** to **floodgate** before saving the file.

![](https://screensaver01.zap-hosting.com/index.php/s/c6JRFxPfjGBSWZi/preview)

GeyserMC will now utilise the Floodgate plugin for user authentication, providing you with various benefits that were discussed previously.
-->

## Connecting & Troubleshooting

With the plugin now configured, restart your server to ensure new settings take effect. Now proceed with attempting to connect to the server from both game editions to ensure that everything is functional.

Ensure that you utilise the correct ports depending on the game edition. This should be **Port 5** for Bedrock players and the **Game Port** for Java edition players, found under the **Settings** tab. You can also find these by hovering over the information icon on the dashboard of your web interface.

![](https://screensaver01.zap-hosting.com/index.php/s/M42ZkamKHieRcEz/preview)

Upon success, you should now be able to crossplay and easily connect from clients across both game editions.

![](https://screensaver01.zap-hosting.com/index.php/s/oMRWkaSs5KKbkzy/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/xyMaENLFx4BCSPF/preview)

If you are facing troubles connecting to the server, attempt the following troubleshooting steps which should help resolve most common issues.

#### Client Outdated - Server Outdated

This error suggests that the server and client have mismatched game versions. If you are facing this issue on Java Edition, simply change to the correct game version via the launcher.

Unfortunately, you cannot easily change game versions on Bedrock editions. Therefore if you are facing this issue on a Minecraft Bedrock Edition client, ensure that you update the app and the server to the latest versions.

We can also recommend utilising ViaVersion and ViaBackwards plugins which expands the game versions that the server is accessible from, meaning users with a lower or higher game version can still connect to the server. Similarly to before, head over to the **Plugins** section on the web interface and under the **All Plugins** drop down menu, locate **ViaVersion** and **ViaBackwards**. Use the green download icon to install them to your server.

:::note
If you are facing issues with installing the plugin via the web interface, it is possible that the plugin does not have a stable latest version release. In such scenarios, we recommend manually downloading a beta version of the plugin from the website and uploading it via FTP. Learn more about how to do this by reading our [FTP Access](gameserver-ftpaccess.md) guide.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/QCcndf6TGMsrw7x/preview)

Once the plugins are installed, attempt to connect again which should now be possible from a wider variety of game versions.

#### Unable to connect to world

The common reason for this error is the use of the wrong port when adding the server in your client. Ensure that you use the port found under **Port 5** in your **Settings** section of your game server's web interface when connecting from Bedrock Edition clients. Likewise for Java Edition clients, use the main **Game Port** value.

If the issue persists, we recommend viewing the GeyserMC plugin configuration file to ensure that the correct ports have been automatically set. Head over to the **Configs** section on your web interface and open the `plugins/Geyser-[your_servertype]/config.yml` file using the blue edit button.

In this file, locate the `port` parameters found under the `bedrock` and `remote` sections. Ensure that the bedrock port is set to the value found under **Port 5** in the **Settings** section and that the remote port is set to either **25565** or the **Game Port**.

![](https://screensaver01.zap-hosting.com/index.php/s/AcZ5JAasBcKQpCm/preview)

## Conclusion 

Congratulations, you have successfully installed and configured the GeyserMC plugin on your Minecraft server which has introduced crossplay between Java and Bedrock editions! For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂