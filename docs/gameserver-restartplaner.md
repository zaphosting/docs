---
id: gameserver-restartplaner
title: 'Game server: Restartplaner - Perform server restarts automatically'
description: Information on how to use the restart planner to have your ZAP-Hosting.com game server restarted automatically at predefined intervals - ZAP-Hosting.com documentation
sidebar_label: Restart planner
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
The restart planner is a feature offered for game servers which allows you to create an automatic restart to restart the server automatically at the same time every day.

<YouTube videoId="bcsAePevPnY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pNsgKBQQGEC3tPj/preview" title="How to setup a RESTART PLANNER for your Server!" description="Feel like you understand better when you see things in action? We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>


:::info
This feature is only available for game servers.
:::

This feature can be found in the interface of the game server.

![image](https://screensaver01.zap-hosting.com/index.php/s/doBQoGw3kTj8o6r/preview)

<InlineVoucher />

## Create new entries

:::info
***Note:*** Changes made to the restart planner are only applied once the server has been restarted.
:::

If you want to add an automatic restart, then you need to click on the grey "**+**" button.

Within the next window you can now choose between Weekly and Daily restarts. In our example, we want four restarts per day with an interval of 6 hours. Therefore we select "**Daily**" and set "**06:00**". Confirm the entry with "**Save**".

This procedure is now repeated for each desired automatic restart. If "**24:00**" occurs, the system displays an error message. To avoid this error, "**00:00**" needs to be used instead.

![image](https://screensaver01.zap-hosting.com/index.php/s/j4nyS4efsKTinBS/preview)

###  Start offline server

If this option is enabled, then a stopped server will be started automatically at this point of time. If this option remains disabled, then the game server will only be restarted by our system if it was "**Online**" before.

## Command option

The command option among the specified automatic restarts is intended to be used to execute commands automatically just before the restart occurs.The amount of available commands which can be used depends on the game. Not all games offer an option for this.

If you want to warn players beforehand, then you can use the *say* command in Minecraft

![image](https://screensaver01.zap-hosting.com/index.php/s/bcRJQprM2BFeR75/preview)

### Delay

The Delay field defines the interval between the execution of the command and the restart of the server. This delay is defined in **seconds**. For example, if a delay of 5 minutes should be set, then the value 300 needs to be set in this case. 
