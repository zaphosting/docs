---
id: dedicated-linux-plex
title: "Setup Plex on a Linux Server - Stream Your Personal Media Library"
description: "Discover how to manage and stream your personal media library seamlessly with Plex for easy access across devices → Learn more now"
sidebar_label: Install Plex
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Plex is a platform for managing and streaming media content such as movies, TV shows, music, and photos from a central location. With the Plex Media Server, libraries can be organized, automatically enriched with metadata, and streamed to various devices both on the local network and over the internet. This makes Plex a flexible solution for accessing personal media collections with ease and convenience.

![img](https://screensaver01.zap-hosting.com/index.php/s/68xdESEHimoY9Jp/preview)

Considering about hosting this service yourself? We’ll walk you through every step on how to set it up and configure it, along with everything you need to keep in mind.





## Prerequisites

Before installing **Plex**, ensure that your hosting environment meets the following requirements to guarantee a smooth installation and optimal performance.

| Hardware   | Minimum      | ZAP-Hosting Recommendation |
| ---------- | ------------ | -------------------------- |
| CPU        | 4 vCPU Cores | 8 vCPU Cores               |
| RAM        | 4 GB         | 8 GB                       |
| Disk space | 25GB         | 25 GB                      |

The software requires that all necessary dependencies are installed and that it is running on a supported operating system. Make sure your server meets the following requirements before proceeding with the installation:

**Dependencies:** None

**Operating System:** Ubuntu (16.04+) / Debian (8+) - Intel/AMD 64-bit

Ensure all dependencies are installed and the correct operating system version is in use to avoid compatibility issues during the installation of Plex.



## Installation

The official Plex Media website provides the current Linux version of the Plex Media Server for download. Use the 64-bit variant to ensure compatibility with all modern Linux editions. Run the following command to download the `.deb` file

```
wget https://downloads.plex.tv/plex-media-server-new/1.42.1.10060-4e8b05daf/debian/plexmediaserver_1.42.1.10060-4e8b05daf_amd64.deb
```

After downloading, the installer can be executed to set up the Plex Media Server. Once installed, configuration is handled through the web interface in the browser, allowing you to create libraries and manage your media collection. Run the following command to start the installation:

```
sudo dpkg -i plexmediaserver_1.42.1.10060-4e8b05daf_amd64.deb
```

To setup Plex Media Server, on the same machine you installed the server on, open a browser window, and go to `http://127.0.0.1:32400/web`.  At this stage, you will be prompted to log in with an existing Plex account or create a new one if you don’t already have one. 

This login step is required to link the server to your personal account, enabling features such as remote access, user management, and synchronization across devices. After successful authentication, you will be inside your own Plex Media instance. From there, you can create libraries for movies, TV shows, music, or photos, automatically fetch metadata, and share content with other users on your local network or over the internet.

After setup, you can also access your Plex Media Server externally by opening the web interface in a browser via `http://<ip-address>:32400`. Replace `<ip-address>` with either the public of your server. 

Port 32400 is the default port for Plex web access and may need to be allowed through your firewall or router if you want to connect over the internet. 

Once the address is reached, you will be redirected to the Plex login page and can then manage your libraries and settings. For secure external access, it is recommended to enable Remote Access in the Plex settings, as this ensures an encrypted connection and relays traffic through the Plex service.

![img](https://screensaver01.zap-hosting.com/index.php/s/jfQxZ6e4BGMfen5/preview)



## Conclusion and more Resources

Congratulations! You have now successfully installed and configured Plex on your VPS/Dedicated Server. We also recommend taking a look at the following resources, which could provide you with additional help and guidance during your server configuration process

- [Plex.com](https://Plex.com/) - Official Website
- [support.plex.tv/articles/](https://support.plex.tv/articles/) - Plex Help Center (Documentation)

Got specific questions that aren't covered here? For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂



