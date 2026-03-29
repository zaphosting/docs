---
id: over-the-top-wwi-configure-time-and-environment
title: "Over the Top WWI: Configure Time and Environment"
description: "Learn how to adjust time of day and environmental settings on your Over the Top WWI server → Learn more now"
sidebar_label: Time & Environment
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Time and environmental settings in **Over the Top WWI** influence visibility, atmosphere, and overall gameplay conditions. By adjusting these values, you can create bright daytime battles, darker scenarios, or varied seasonal environments.

These settings allow you to customize the look and feel of your server and enhance immersion for your players.

<InlineVoucher />

## Configuration

Time and environment settings are configured inside the server configuration file. You can access and edit this file in your **gameserver management panel** under **Configs**. Locate and open the `ServerConfiguration.ini` configuration file. Inside this file, find the following parameters:

```
TimeOfDay = 8
Season = 0
TemperatureinCelcius = 0
```


- `TimeOfDay` defines the in-game hour
- `Season` controls the current season

- `0` → Default
- `1` → Spring
- `2` → Summer
- `3` → Fall
- `4` → Winter

- `TemperatureinCelcius` adjusts the environmental temperature
- This can influence atmosphere and environmental effects

These settings allow you to create different scenarios, such as early morning battles, night combat, or seasonal environments.

After modifying the `ServerConfiguration.ini`, save the file and restart your server. The new environment settings will be applied automatically.

## Conclusion

Congratulations! You have successfully configured time and environmental settings on your **Over the Top WWI server**. This allows you to customize the atmosphere and create unique gameplay experiences for your players.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />