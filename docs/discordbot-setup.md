---
id: discordbot-setup
title: Set up your Discord Bot
description: "Discover how to run and manage Discord bots for moderation, music, giveaways, and more with seamless server hosting → Learn more now"
sidebar_label: Setup
services:
  - discord-bot
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduction

A **Discord bot server** allows you to run your Discord bots seamlessly and continuously. These bots can perform a variety of tasks, such as automatically moderating your Discord channel, playing music, organizing giveaways and polls, and much more. 

<YouTube videoId="OoKA8UJ_N5A" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/ffjmn3snRrkoeoK/preview" title="How to set up a Discord bot server and upload bot files!" description="Feel like you understand better when you see things in action? We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>

<InlineVoucher />



## Supported languages

Discord bots can be programmed in different languages. Our product supports Discord Bots written in one of the following supported programming languages: 

- Java
- Python
- NodeJS

  
  

## Preparation



### Obtain Bot

To get started, you’ll need a fully functional Discord bot. You can either create one yourself or download a pre-built bot from the internet. Save it to your computer so you can easily upload it to your service afterwards.

### Upload files

The files for your Discord bot need to be uploaded. This can be done using FTP. If you're unsure how to use FTP, we recommend checking out the [Access via FTP](gameserver-ftpaccess.md) guide for detailed instructions.

![](https://screensaver01.zap-hosting.com/index.php/s/x4WPiNS6xQcWQrp/preview)


Provided you have opened the folder, you can now simply upload the bot files into the empty folder:

![](https://screensaver01.zap-hosting.com/index.php/s/t7DDaF684PZkXjn/preview)



## Configuration

To be able to run your bot using the Dashboard, the bot needs to be configured in the Discord Bot Dashboard under the **Settings** page. 

![](https://screensaver01.zap-hosting.com/index.php/s/HoPpfJKsTC6ozNy/preview)

There you now have to configure which programming language the Bot uses, and how it's main file is called. Python 3 is used in this example and the name of the file of the Discord to be executed is specified. The file name is `main.py`. 

![](https://screensaver01.zap-hosting.com/index.php/s/ixfz2xKYCepS9Ek/preview)



:::danger Dependencies
Discord bots often contain additional dependencies for their functionality. Make sure that all of them are present and correctly configured in the Discord bot. These are defined in the following files: 

- Python: Dependencies in `requirements.txt`.
- Node.js: Dependencies in `package.json`.
- Java: Dependencies in `pom.xml` (Maven) or `build.gradle` (Gradle).

:::



## Testing functionality

After saving the Settings, the bot can simply be started using the green start button at the top of the page. In the live console you can then check if the bot has successfully started. 



## Conclusion

Congratulations, you have successfully installed and configured your Discord Bot. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂






<InlineVoucher />
