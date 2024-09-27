---
id: discordbot-setup
title: Set up your Discord Bot
description: Information on how to set up your own Discord Bot - ZAP-Hosting.com documentation
sidebar_label: Setup
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduction

With a **Discord bot server**, you can run Discord bots continuously, which can, for example, automatically moderate your Discord channel, play music, conduct giveaways and polls, and much more. A Discord bot server from ZAP-Hosting is configurable by simply **uploading your required files via FTP**. ZAP-Hosting’s Discord bot servers support the languages **NodeJS**, **Java** and **Python**.

<YouTube videoId="OoKA8UJ_N5A" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/ffjmn3snRrkoeoK/preview" title="How to set up a Discord bot server and upload bot files!" description="Feel like you understand better when you see things in action? We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>

<InlineVoucher />

## Preparation

In order to be able to set up your Bot, the [Access via FTP](gameserver-ftpaccess.md) needs to be configured. Once you are connected using FTP, you need to open the`discordbot` folder, this is where the files of the bot have to be uploaded:

![](https://screensaver01.zap-hosting.com/index.php/s/x4WPiNS6xQcWQrp/preview)


Provided you have opened the folder, you can now simply upload the bot files into the empty folder:

![](https://screensaver01.zap-hosting.com/index.php/s/t7DDaF684PZkXjn/preview)



## Configuration

To be able to run your bot using the Dashboard, the bot needs to be configured using the "Settings" Page:

![](https://screensaver01.zap-hosting.com/index.php/s/HoPpfJKsTC6ozNy/preview)

Here you now have to configure which programming language the Bot uses, and how it's main file is called. In our case this will be Python 3 Programming Language and the main.py start file.

![](https://screensaver01.zap-hosting.com/index.php/s/ixfz2xKYCepS9Ek/preview)



## Test bot functionality

After saving the Settings, the bot can simply be started using the green start button at the top of the page. In the Live-Console you can then check if the bot has successfully started!
