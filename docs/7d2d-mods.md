---
id: 7d2d-mods
title: "7 Days to Die: Installation of mods"
description: "Discover how to customize your server with popular mods and enhance gameplay for a unique experience → Learn more now"
sidebar_label: Install mods
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

With mads you have the possibility to customize your server even more. In the following, we will explain where you can find the most popular server mads and how to set them up. With the introduction of Alpha 17 Experimental, the concept of modlets was introduced. Modlets are smaller mads that do not overwrite the vanilla XML files, but are loaded from the mads folder. 

![](https://screensaver01.zap-hosting.com/index.php/s/McQLetfwmEMbo6N/preview)

<InlineVoucher />

## Preparation

The first thing you need to do is to download the mads that you want to install on your server. You can find a large selection of mads at [7daystodiemods.com](https://7daystodiemods.com/). There you will find more than 1000 mads and more are added regularly. If you have downloaded a mad, then it should contain the following file structure:

```
  Config/
  ItemIcons/
  Resources/
  ModInfo.xml
```



## Installation

Once the desired mads have been downloaded, you can start with the actual installation of the mads. The setup of the mads is done via FTP. You need a FTP client to be able to upload files to your server. If you don't know what FTP is and how it works, then you should have a look at the following guide: [Access via FTP](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/9Q86iArComw55cH/preview)



Under the ``/gXXXXX4/7dtd-linux-exp/`` directory you have to create a folder named **Mads**. To do this, right-click and click on **Create directory**. 

![](https://screensaver01.zap-hosting.com/index.php/s/RE2n6WodsWq38Pr/preview)



Afterwards the files of the mad have to be uploaded to the mads directory:

![](https://screensaver01.zap-hosting.com/index.php/s/WjNY5tMnAt7jfga/preview)



This already completes the installation of the mad. The next time you start the server, the mads should then be loaded automatically. 

<InlineVoucher />

## Conclusion

Congratulations, you have successfully installed mads on your 7 Days to Die server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂