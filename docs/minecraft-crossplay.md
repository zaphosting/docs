---
id: minecraft-crossplay
title: "Minecraft: Setting Up Crossplay"
description: Information about setting up crosssplay on your minecraft server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Server crossplay
services:
  - gameserver
---

## Introduction

Setting up a crossplay server allows players on both Java and Bedrock editions of Minecraft to join and play together. This guide will walk you through the process step-by-step using GeyserMC and Floodgate.

## Prerequisites

- A Minecraft gameserver 
- A compatible Minecraft server software, such as Paper, Spigot, or Bukkit
- Basic knowledge of managing a Minecraft server

## Step 1: Preparing Minecraft Gameserver

Start by renting a gameserver from our [Minecraft gamserver hosting](https://zap-hosting.com/en/minecraft-server-hosting/). Next, make sure you're running a plugin compatible Minecraft server software, such as Paper, Spigot, or Bukkit.

:::note
If you're already using a plugin supported software, you can skip this part and move into the next step.

If you're running an unsupported software of Minecraft then install a supported software by opening your gamserver admin panel and heading over to the Games section and then install the plugin supported software.

![Tutorial on installing a supported software](https://i.imgur.com/Bj1r2pk.png)
![Tutorial on installing a supported software](https://i.imgur.com/oWKlWdG.png)

## Step 2: Install GeyserMC

In order to install GeyserMC plugin, navigate to the Plugin section and find the GeyserMC plugin and install it.

![GeyserMC install](https://i.imgur.com/gNRIJaV.png)
![GeyserMC installieren](https://i.imgur.com/1O2gly6.png)

## Step 3: Install Floodgate (Optional but Recommended)

Floodgate allows Bedrock players to join without needing a Java account.

To install the Floodgate plugin, follow the same instructions as mentioned earlier to install GeyserMC plugin.

![Floogate install](https://i.imgur.com/24MGhy9.png)
![Floodgate installieren](https://i.imgur.com/pi0Ca66.png)

## Step 4: Configure GeyserMC

To enter the configuration page of GeyserMC, click on the settings button which is at the right side of the GeyserMC plugin.

![GeyserMC settings](https://i.imgur.com/9VsLhVk.png)
![GeyserMC einstellungen](https://i.imgur.com/xWDDvmR.png)

Here you can customize your Minecraft gamserver name and motd here limited the bedrock edition players.

![GeyserMC server name customization](https://i.imgur.com/u21jpfU.png)
![Anpassung des GeyserMC servernamens](https://i.imgur.com/s8NDVpL.png)

After scrolling down a bit, you'll see the ports assigned to your server.

The first port indicates the main port of the server while the fifth port indicates the GeyserMC port of your server.

![GeyserMC port](https://i.imgur.com/C8PJvyv.png)
![GeyserMC port](https://i.imgur.com/9Sk9U2L.png)

:::Info
Your gameserver's GeyserMC port can be different than the main port of your server, so make sure you use correct port while connecting to the server.

:::tip
A custom port assignment is possible upon request, please [contact support](https://zap-hosting.com/en/customer/support/) and we can customize the port of your server according to your choice but you must have purchased the Own IP addon in order to get an custom port.

## Step 5: Test Your Server

After finishing the configuration of the GeyserMC plugin, it's time to test your server by joining the server from your PE or Bedrock edition.

![In-game screenshot](https://i.imgur.com/4OjIyc9.jpeg)

:::info
You server should be accessable now from your PE or Bedrock edition but still, if you're still encountering some issues, follow the Troubleshooting instructions below.

## Troubleshooting

### Unable to connect to world

If you aren't using the Own IP addon, there is a change that your port might not be configured automatically which you may need to configure manually, To do that, open the config section at the dashboard and find the ``plugins/Geyser-Spigot/config.yml`` file which can be misconfigured, now manually change the ports and change the auth-type to floodgate to fix the problem.

```

bedrock:
  port: ( Your GeyserMC port )
  clone-remote-port: false
  motd1: "GeyserMC Crossplay Server"
  motd2: "Hosted by ZAP-Hosting.com"
  server-name: "Geyser"
  compression-level: 6
  enable-proxy-protocol: false
remote:
  address: auto
  port: ( You main port )
  auth-type: ( Change it to [ floodgate ] )
  allow-password-authentication: true
  use-proxy-protocol: false
  forward-hostname: false
floodgate-key-file: key.pem

```

### Client Outdated - Server Outdated

If you're facing this kind of server version mismatch issue, you're required to install two plugins on your minecraft server in order to solve the issue.

Simply headover to the Plugin section of your server and install these two plugins named -

- ViaVersion
- ViaBackwards

![ViaVersion and ViaBackwards install](https://i.imgur.com/e1WwF6h.png)
![ViaVersion und ViaBackwards installieren](https://i.imgur.com/vjrKt2Z.png)

## Conclusion 

Congratulations, you have successfully installed and configured the GeyserMC plugin on your Minecraft server! If you have any further questions or problems, please contact our support team, who are available to help you every day!
