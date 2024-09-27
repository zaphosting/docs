---
id: fivem-txadmin-setup
title: "FiveM: txAdmin Setup"
description: Information on how to set up the TxAdmin interface for FiveM game servers from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: txAdmin Setup
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

txAdmin is a completely free to use, full-featured web panel to Manage & Monitor your FiveM server. It offers a wide range of features designed to make managing a FiveM server as easy as anything. Setting up txAdmin is completely free, begin your journey on using the most simplistic, yet functional FiveM server web panel.

<YouTube videoId="n3RoiExrvN0" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/AeKiyc9Jtat5ygE/preview" title="Setup a txAdmin Server" description="Feel like you understand better when you see things in action? We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>

<InlineVoucher />

## Access

Über das Dashboard deines Game-Servers findest du im txAdmin-Bereich einen Link sowie die Zugangsdaten zum Zugriff auf txAdmin. Dies gibt dir die notwendigen Informationen, um einfach auf die txAdmin-Oberfläche zuzugreifen und mit der Einrichtung zu beginnen.

![](https://screensaver01.zap-hosting.com/index.php/s/aTQeF69ojtqM9iX/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/wzcQqB3MY7k28rZ/preview)

Kopiere die Informationen zum Benutzer und Passwort und klicke auf den Link (IP-Adresse:Port), um das txAdmin Interface aufzurufen und dich einzuloggen. Im Anschluss öffnet sich das txAdmin Interface in einem neuen Fenster, wo du dich mit den vorgegebenen Zugangsdaten einloggen musst. 

![](https://screensaver01.zap-hosting.com/index.php/s/pp8GLQBoX4LoqTA/preview)



## Setup

Now that you have successfully logged in, you can start setting up txAdmin and your server. You should now see the txAdmin homepage (Dashboard). In the top left corner, you will notice a message indicating that your server still needs to be configured. Click on **Go to the setup page** to begin the setup process.

![](https://screensaver01.zap-hosting.com/index.php/s/oXakf3qoJaim7ex/download)



### Welcome and server name

Next, define a server name that you would like to use for your project. This name is not intended for the server list but is solely for use within the txAdmin interface and for chat/Discord messages.

![](https://screensaver01.zap-hosting.com/index.php/s/FCmd5xQ89wSPHfe/preview)



### Deployment Type

Under Deployment Type, you now need to choose how you would like to set up your server. You have the following options: **Popular Recipes**, Existing Server Data, **Remote URL Template**, and **Custom Template**. Each of these options will be explained in more detail below, so you can decide which one best suits your needs.

![](https://screensaver01.zap-hosting.com/index.php/s/52HfyJSNLscApNE/preview)



### Popular Template

Popular Templates are pre-made packages that can be used immediately, making this the easiest way to get your FiveM server up and running. If this is your first server, this option is highly recommended. These templates include all the necessary configurations and resources to quickly set up a functional server, allowing you to focus on customization and gameplay rather than initial setup. Simply choose a template that fits your needs.

![](https://screensaver01.zap-hosting.com/index.php/s/PSsf22NeebNBRw7/preview)



### Existing Server Data

You should use this option if you have already operated a server with txAdmin and now wish to host it with us. In this case, you can simply upload the server data via FTP and specify the path during the setup process. If you're not yet familiar with how to use FTP in general, it would be worthwhile to take a look at our [Access via FTP](gameserver-ftpaccess.md) guide. This guide will walk you through the steps to ensure a smooth transfer of your server files, allowing you to get your server up and running quickly on our platform.

![](https://screensaver01.zap-hosting.com/index.php/s/DJtoBPqmBLSDdXZ/preview)





### Remote URL Template

If you want to apply a template that is not linked within txAdmin itself, this feature allows you to specify a custom recipe via a remote URL. This recipe will be fetched and executed on your server. This option is particularly useful for deploying custom server configurations or specific setups that aren't included in the default txAdmin options. By providing the URL, txAdmin will download and apply the template automatically, ensuring your server is set up according to your precise requirements.

![](https://screensaver01.zap-hosting.com/index.php/s/jrGzTGp9FwLc82i/preview)

### Custom Template

This option is intended for users who have already created their own recipe and wish to reload it. It allows you to quickly and easily apply your custom configurations without having to set everything up from scratch again. Simply select your existing recipe, and txAdmin will handle the rest, ensuring your server is configured exactly as you intended.

![](https://screensaver01.zap-hosting.com/index.php/s/Z75q5RKakwfpHGy/preview)



### Recipe Deployer

After deciding on a Deployment Type and following the specified steps, you can finish by clicking on **Go to Recipe Deployer**. There, you'll need to complete the final steps: **Review Recipe**, **Input Parameters**, **Run Recipe**, and **Configure server.cfg**.

In the first step, you have the option to further customize the selected or added recipe. If no further adjustments are necessary, proceed to Step 2. Here, you can enter your own [Own License Key](fivem-licensekey.md) and review the database information. Once everything is in order, click on **Run Recipe**. This process may take a moment. Finally, you can adjust the server configuration file (`server.cfg`) as needed.

![](https://screensaver01.zap-hosting.com/index.php/s/wFMD576sBQAAdxZ/download)

Finally, click on **Save & Run Server**. This completes the txAdmin setup, and you can now connect to your server.


## Additional support

For txAdmin-specific support, please contact the txAdmin team through their [official website](https://txadm.in/) or join the community on [Discord](https://discord.gg/txAdmin/). The community and support team are ready to assist with any questions or issues you might encounter while using txAdmin, ensuring you have the best possible experience managing your server.
