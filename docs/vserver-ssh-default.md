---
id: vserver-ssh-default
title: "VPS: Manage default SSH Keys in Profile"
description: "Discover how to automate SSH Key setup for faster server access and streamlined product installations with ZAP-Hosting → Learn more now"
sidebar_label: Default SSH Keys
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
One of our latest additions to our ZAP-Hosting webinterface, is the ability to add default SSH Keys to your ZAP-Hosting account through our website. The awesome benefit of this is that the SSH Keys setup in your Profile page, will be automatically setup by default and used during first product setup or OS reinstallation. This saves you time as you won't have to manually setup your SSH Keys.

<InlineVoucher />

## Requirements
In order to use this feature, you must have an SSH Key generated. If you have an SSH Key ready, you can proceed to the next section.

To generate an SSH Key, we recommend heading over to the **Information->Access & Security** section in your vServer's webinterface. 

![](https://screensaver01.zap-hosting.com/index.php/s/N9FxTpdfibwCWSD/preview)

Here, you will be able to see a green **Generate SSH Key** button. Once you press this button, your SSH Private Key will be automatically downloaded to your PC. This is the key that you will use to connect to your server once SSH is setup.

![](https://screensaver01.zap-hosting.com/index.php/s/tdYfxJYNBFC2R9k/preview)

You should now store the Public Key found in the prompt as this is what you will need to submit when creating the SSH Key in your profile.

![](https://screensaver01.zap-hosting.com/index.php/s/Tc9MEGamAC9dDF3/preview)

Head over to the next section once you are ready.

## Managing Profile SSH Key
Managing your default SSH Keys in your account is simple. head over to your **[ZAP-Hosting Profile page](https://zap-hosting.com/en/customer/home/profile/)** and scroll down until you reach the **Standard SSH Keys** section.

![](https://screensaver01.zap-hosting.com/index.php/s/QzefcYZWPGz3rJr/preview)

### Adding new key
To add a key, first press the green plus icon to open the creation prompt. In this prompt, first select an appropriate name that you wish to add to your SSH Key.

Next, paste your SSH Public key into the second field. Your SSH Key should be in the OpenSSH format, starting with `ssh-rsa` and ending with a suffix. Once ready, presss the green **Save** button to add the key.

![](https://screensaver01.zap-hosting.com/index.php/s/CBTcDSiBLfNYi2R/preview)

:::tip
Ensure that you submit your **SSH Public Key** and not the SSH Private Key. The SSH Private Key is used during login to authenticate with your Public Key.
:::

You have successfully added a default SSH Key to your ZAP-Hosting account.

### Editing or removing a key
To edit a key, simply press the blue eye icon which will open up a prompt. In this prompt, you can view the currently set details and you can directly edit and save as you wish.

Similarly, to delete a key you can press the red bin icon which will that specific key.

![](https://screensaver01.zap-hosting.com/index.php/s/56mPcDswpZBaHms/preview)

<InlineVoucher />
