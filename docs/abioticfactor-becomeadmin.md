---
id: abioticfactor-becomeadmin
title: "Abiotic Factor: Become admin"
description: "Discover how to grant admin rights to players for full server control and enhanced gameplay management → Learn more now"
sidebar_label: Become admin
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

In **Abiotic Factor**, server administrators require elevated permissions to manage players, execute server commands, or modify settings during gameplay. 

<InlineVoucher />



## Configuration

The configuration is done through the `admin.ini` configuration file. To access it, open the **Configs** section in the game server administration and locate the `admin.ini`. By default, the file should contain the following entry, where administrators can be defined. Replace the `ExampleID` values with the corresponding **SteamID64** of the players you want to grant admin rights to.

```
[Moderators]
Moderator=ExampleID1
Moderator=ExampleID2
```



## Conclusion

Once the information has been correctly added and the server has been restarted, the specified player will have full admin access in-game. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂




<InlineVoucher />
