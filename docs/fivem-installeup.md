---
id: fivem-installeup
title: "FiveM: Install EUP (Emergency Uniform Pack)"
description: "Discover how to set up Emergency Uniform Pack for free mode characters with Element Club subscription required → Learn more now"
sidebar_label: Install EUP
services:
  - gameserver-fivem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

**EUP** also known as Emergency Uniform Pack allows you to have Emergency Services Uniforms on a free mode character. The following explains in detail how exactly you can install this. 

:::warning Element Club Subscription required
In order to install and use EUP, an Element Club subscription is required. Get your own subscription at the [Cfx.re Portal](https://portal.cfx.re/subscriptions/element-club)! 
:::

<InlineVoucher />



## Preparation

To start the installation of **EUP**, a few preparations must first be made. To do this, [EUP](https://forum.cfx.re/t/emergency-uniform-pack-client-server-sided-easy-install-update-5-0-announcement/97599) and [NativeUI](https://github.com/FrazzIe/NativeUILua/archive/master.zip) must be downloaded and unpacked on your own computer. Once you have downloaded the files, you should have received the following ZIP files:

- `eup-ui.7z`
- `eup-stream.7z` 
- `NativeUI-master.zip`

Now unpack these files locally on your computer. It should now contain a `__resource.lua` or `fxmanifest.lua` and `script files/folders`.

**eup-ui**
![](https://screensaver01.zap-hosting.com/index.php/s/PjXPtC49ZAkiD87/preview)

**eup-stream**
![](https://screensaver01.zap-hosting.com/index.php/s/y4HNTngCjkg8n44/preview)

**NativeUI**
![](https://screensaver01.zap-hosting.com/index.php/s/EwdgkfA5qjWNAYj/preview)

:::info
For NativeUI, you have to open the "NativeUI-master" folder first, there you will find the correct scripts. If this is not the case, they may be in a subfolder, usually with the same name.
:::

## Installation
Now you are ready to start the installation. To do this, connect to your server via [FTP](gameserver-ftpaccess.md) and upload the files. The files/folders must be uploaded to the `resources` directory. You will find the directory under the following directory structure: 

```
/gxxxxxx/fivem/YourFramework/resources/
```

![](https://screensaver01.zap-hosting.com/index.php/s/qFtS6sJHy67Y773/preview)



## Configuration

In order for the installed resources to be loaded, they must be specified in the server configuration file. To do this, log into the txAdmin interface and navigate to the CFG Editor. 

![img](https://screensaver01.zap-hosting.com/index.php/s/xQgkC5npHji4ArM/download)



## Conclusion

You have successfully installed EUP on your FiveM server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂


<InlineVoucher />
