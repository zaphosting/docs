---
id: fivem-qbcore-admin
title: "FiveM: Become admin using QBCore"
description: "Discover how to assign administrator permissions for full server control and enhanced in-game management → Learn more now"
sidebar_label: Become admin
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
The assignment of administrator permissions allows you simple and comprehensive administration with full control of your server. As an administrator, you have the option of using all available options and functions provided by the game directly in the game. All the steps you need to take to assign administrator permissions for your server will be described below. 

<InlineVoucher />



## Configuration

The configuration of the administrator permissions is done via the ``server.cfg`` configuration file. To do this, log into the txAdmin interface and open the CFG Editor. Then navigate to the end of the configuration file until you reach `Permissions`.

![img](https://screensaver01.zap-hosting.com/index.php/s/KPRTmPoYdsCWjGd/preview)

QBCore supports several player identifiers, including FiveM IDs (`identifier.fivem:`), Rockstar licenses (`identifier.license:`), and Discord IDs (`identifier.discord:`). These identifiers can be retrieved directly from your txAdmin interface. In doing so, you can decide whether you want to give them GOD, Admin or Mod status.

Once you have obtained the identifiers and decided that status you want to set, you can assign individual player permissions by adding them to your `server.cfg`. To do this, add one of these three available options as a new entry under the permissions section:

```
add_principal identifier.license:xxxxxx qbcore.god   # Player Name
add_principal identifier.license:xxxxxx qbcore.admin # Player Name
add_principal identifier.license:xxxxxx qbcore.mod   # Player Name
```

The final result could look like this, for example:

```
## Permissions ##
add_ace group.admin command allow # allow all commands
# Deployer Note: this admin master has no identifiers to be automatically added.
# add_principal identifier.discord:111111111111111111 group.admin #example

add_principal identifier.fivem:16219250 qbcore.admin # Player Name
```



## Conclusion

Provided that you have successfully followed all the steps, you are now an admin on your own server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
