---
id: dedicated-linux-ubuntu-1804
title: "Dedicated Server: Installation of Ubuntu 18.04"
description: "Discover how to install and configure Ubuntu on your dedicated server for optimal performance and long-term support → Learn more now"
sidebar_label: Ubuntu 18.04
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

The following will explain to you step by step how to install and configure the Ubuntu operating system on your dedicated server. Follow these instructions carefully to ensure that you set up the operating system successfully and utilize it optimally.



:::warning Newer version available / EOL details

The latest version of Ubuntu is the [24.04](dedicated-linux-ubuntu.md) version. We recommend using the latest version for long-term projects.

Support for older Ubuntu versions will be discontinued sooner or later. The following deadlines are scheduled for the 18.04 version:

- End of Standard Support: 01.03.2023
- End of Ubuntu Pro Support: 01.04.2028
- End of Legacy Support: 01.04.2030

More information can be found on the [official website](https://ubuntu.com/about/release-cycle).
:::




## Preparation

For the installation and configuration of an operating system, it is initially important to mount the corresponding ISO of the operating system. There are several possible ways to mount it:

1. Mounting via the initial setup
2. Mounting via iLO (Virtual Media)
3. Mounting via iLO (Remote Console)

If you are not familiar with mounting an ISO file yet, it's best to refer to our [Initial setup](dedicated-setup.md) or [Own ISO](dedicated-iso.md) guide.



## Installation

Once the ISO has been successfully mounted and loaded, the server should be in the setup process. The language you want to use for your OS will be defined at the beginning of the setup. Select one of the available languages and confirm the selection with the `Enter` key. 

![](https://screensaver01.zap-hosting.com/index.php/s/yrHMNzstM23XZH6/preview)

Next, the appropriate keyboard layout must be selected and set for the language. Select the keyboard layout that is suitable for you here too. 

![](https://screensaver01.zap-hosting.com/index.php/s/x9kYGEWS5fy7Wjp/preview)

Following this, the network configuration takes place. The server is configured via DHCP by default. The default network adapter is `eno1`. Confirm the default settings and continue. 

![](https://screensaver01.zap-hosting.com/index.php/s/6mr5kAKJQ39iJt5/preview)

An additional proxy can be configured as an option. However, this is not essential. If you do not need this, simply skip this step. 

![](https://screensaver01.zap-hosting.com/index.php/s/tz97Ee8ZQkxAGGb/preview)

Now the Ubuntu Archive Mirror (download server for packages) is defined. Our dedicated servers are located in Germany, so it's recommended to choose the German mirror location to achieve the best possible download speed rates.

![](https://screensaver01.zap-hosting.com/index.php/s/xNknNyWAbd5DnsZ/preview)

The partitions can now be defined in the storage configuration. You can either use one large partition or subdivide it if needed. If you'd like to use just the whole SSD as one partition just pick `Use an entire disk` and continue.

![](https://screensaver01.zap-hosting.com/index.php/s/2dJ9oeMGjpWn6cZ/preview)

The setup automatically creates the volumes and you can proceed by choosing  the `Done` option.

![](https://screensaver01.zap-hosting.com/index.php/s/WXfzt57Rtm2SQLD/preview)

Before the process is initiated, you will be informed that this process will delete all existing data. This message must be confirmed with the `Continue` option. 

![](https://screensaver01.zap-hosting.com/index.php/s/L3YcGNbYWpMmaDj/preview)

Please configure your user account to your like, you can also use the root account in the end by changing the password.
You can navigate through the options with tab or your arrow keys. When you're done proceed by ticking `Done`.

![](https://screensaver01.zap-hosting.com/index.php/s/mqrjmF2ZmA2Qj9z/preview)





The installation of the SSH setup is recommended. If you want to manage the server via SSH, select the option to install and confirm the process.

![](https://screensaver01.zap-hosting.com/index.php/s/Xz3zzMdZ6C523ip/preview)

​	Ubuntu offers a few default snaps, if you'd like to use some of them, just tick the ones your like.

![](https://screensaver01.zap-hosting.com/index.php/s/wcGiSwX935jXeex/preview)

To complete the process, the ISO must be ejected to prevent it from being reloaded when the server is restarted. Restart the server once to finish the process. 

![](https://screensaver01.zap-hosting.com/index.php/s/SzrxCtJTx2S8Nef/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/x3BRLSepSDFnYGA/preview)



## Configuration



### Changing the password of the root user

You can easily change the password of the root user. Execute `sudo su`, and enter your password. After this, execute `sudo passwd` to change the password. Now enter the new desired password for the root user. That's it, you can now login with your user account `root`



## Conclusion

Congratulations, you have successfully installed the Ubuntu 18.04 operating system on your dedicated server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂







