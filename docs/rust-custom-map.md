---
id: rust-custom-map
title: "Rust: Use a Custom Map on Your Server"
description: "Learn how to configure and run a custom map on your Rust server using the Level URL setting → Learn more now"
sidebar_label: Custom Map
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Custom maps allow Rust server owners to create unique gameplay experiences that go beyond the default procedural maps. Many communities use custom maps to introduce new monuments, altered terrain layouts, special events, or entirely redesigned environments.

These maps are typically created using tools such as **RustEdit** and are distributed through platforms like **Lone Design**, **Codefling**, or community map repositories. Once you have a map file or map download link, it can be configured directly in your server settings.

<InlineVoucher />



## Preparation

Before configuring a custom map, you need a valid **map download URL**. Custom maps are usually hosted on map distribution platforms or provided by map creators.

The URL typically points to a `.map` file or downloadable map package. Make sure the link is publicly accessible so the Rust server can download it during startup. Example map URL:

```
https://example-map-host.com/maps/custommap.map
```



## Configuration

To configure a custom map on your Rust server, open your **gameserver management panel** and navigate to **Settings**.

Locate the configuration field named **Level URL**. This setting allows the server to download and load a custom Rust map during startup. Paste your custom map URL into the **Level URL** field. For example:

```
https://example-map-host.com/maps/custommap.map
```

Once the URL is entered, save the settings in the panel. When the server starts, Rust will automatically download the map from the provided URL and load it instead of generating a procedural map.

If your custom map requires additional configuration parameters (for example specific seeds or world sizes), these are usually provided by the map creator and may need to be added to the server configuration as well.

After saving the configuration, **restart the server** so the custom map can be downloaded and loaded.



## Important notes

Custom maps must be compatible with the Rust server version you are running. If the map file is outdated or corrupted, the server may fail to start or revert to a procedural map.

Large custom maps may also increase server startup time because the server must download and prepare the map before it becomes available to players.

If players are unable to connect after switching maps, ensure that the map URL is correct and accessible from the internet.



## Conclusion

Congratulations! You have successfully configured a custom map for your Rust server. For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
