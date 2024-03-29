---
id: discordbot-setup
title: Set up your Discord Bot
description: Information on how to set up your own Discord Bot - ZAP-Hosting.com documentation
sidebar_label: Setup
---

import YouTube from '@site/src/components/YouTube/YouTube';

import Advertisements from '@site/src/components/Advertisements/Advertisements';



## Introduction

With a **Discord bot server**, you can run Discord bots continuously, which can, for example, automatically moderate your Discord channel, play music, conduct giveaways and polls, and much more. A Discord bot server from ZAP-Hosting is configurable by simply **uploading your required files via FTP**. ZAP-Hosting’s Discord bot servers support the languages **NodeJS**, **Java** and **Python**.

<YouTube videoId="OoKA8UJ_N5A" title="How to set up a Discord bot server and upload bot files!" description="Feel like you understand better when you see things in action?  We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>



## Preparation

In order to be able to set up your Bot, the [FTP access](gameserver-ftpaccess.md) needs to be configured. Once you are connected using FTP, you need to open the`discordbot` folder, this is where the files of the bot have to be uploaded:

![image](https://user-images.githubusercontent.com/26007280/194344357-7966f7f4-85b7-4cc6-97ca-1b182d978d45.png)


Provided you have opened the folder, you can now simply upload the bot files into the empty folder:

![image](https://user-images.githubusercontent.com/26007280/194344407-73c20665-1221-4ec2-a0ff-52d1637f0b89.png)



## Configuration

To be able to run your bot using the Dashboard, the bot needs to be configured using the "Settings" Page:

![image](https://user-images.githubusercontent.com/26007280/194344447-5504d230-bf89-4102-b439-2ae6f2208653.png)

Here you now have to configure which programming language the Bot uses, and how it's main file is called. In our case this will be Python 3 Programming Language and the main.py start file.

![image](https://user-images.githubusercontent.com/26007280/194344479-a45969a3-135d-47f3-8057-431fc1ff8042.png)



## Test bot functionality

After saving the Settings, the bot can simply be started using the green start button at the top of the page. In the Live-Console you can then check if the bot has successfully started!
