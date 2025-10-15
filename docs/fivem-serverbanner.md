---
id: fivem-serverbanner
title: "FiveM: Configure your own server banner"
description: "Discover how to enhance your FiveM server's appearance with a custom banner for a unique, professional look → Learn more now"
sidebar_label: Configure server banner
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

A custom server banner is a simple but effective way to make your FiveM server stand out. It gives your server a unique look in the server list and adds a professional touch when players connect. 

Whether you use a custom screenshot or a designed graphic, setting up a banner helps your community recognize your server at a glance and makes a strong first impression.

<InlineVoucher />



## Configuration

To set up a custom server banner for your FiveM server, you first need a suitable image. We recommend taking a screenshot in-game that represents your server well. You can create an ingame screenshot quickly by pressing the **F8** key while playing and using the `screenshot` command.

Once you have your screenshot, upload it to an image hosting service that provides a **direct link** to the image file (for example, ending with `.jpg` or `.png`). Make sure the image is accessible via a direct URL. 

![img](https://screensaver01.zap-hosting.com/index.php/s/4sCEeKkyGEm3EXd/preview) 

To add the banner, open your txAdmin dashboard and go to your server’s configuration settings. Look for the **Server banner URL** field and paste your direct image link there. Save the changes. Your custom banner will now appear in your server details when players see your server in the server list.

```
# Set an optional server info and connecting banner image url.
# Size doesn't matter, any banner sized image will be fine.
sets banner_detail "https://url.to/image.png"
sets banner_connecting "https://url.to/image.png"
```

Replace the example URLs with the direct link to your uploaded image. Save the file in the CFG Editor and restart your server to apply the changes.



## Conclusion

Your custom banner will now appear in the server list and during the connecting screen, making your server look more unique and professional. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
