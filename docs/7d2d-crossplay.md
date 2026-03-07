---
id: 7d2d-crossplay
title: "7 Days to Die: Enable Crossplay for Console and PC Players"
description: "Learn how to configure your 7 Days to Die server to support crossplay between PC and console players → Learn more now"
sidebar_label: Enable Crossplay
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

With the newer versions of **7 Days to Die**, crossplay allows players from **PC and supported console platforms** to join the same server. This enables communities to play together regardless of the platform they are using.

To make crossplay possible, certain settings must be configured on the server. These settings ensure that the server is compatible with console connections and correctly registered through Epic Online Services.

<InlineVoucher />



## Configuration

The crossplay configuration is located in the `serverconfig-zap.xml` file. To edit this file, open your **gameserver administration** and navigate to **Configs**. Locate and open the `serverconfig-zap.xml` configuration file.

Inside the file, ensure the following configuration values are set correctly:

```
<property name="ServerMaxPlayerCount" value="8"/> 
<property name="ServerAllowCrossplay" value="true"/> 
<property name="EACEnabled" value="true"/> 
<property name="IgnoreEOSSanctions" value="false"/> 
```

These parameters are required for crossplay compatibility. The `ServerMaxPlayerCount` must not exceed **8 players**, as console crossplay currently supports a maximum of eight participants. The `ServerAllowCrossplay` option must be enabled so that console players are allowed to join the server.

Additionally, `EACEnabled` must remain enabled because crossplay relies on **Epic Online Services and Easy Anti-Cheat** for authentication and matchmaking. The `IgnoreEOSSanctions` value must remain set to `false` so that EOS restrictions are properly enforced for cross-platform sessions.

After modifying the configuration values, save the file and **restart your server** so the new settings are applied.



## Important notes

Crossplay support requires all players to run a compatible game version. Servers using unsupported modifications or heavily customized configurations may prevent console players from connecting. If console players cannot find or join the server, verify that the crossplay settings are correct and that the server is running the latest supported version.



## Conclusion

Congratulations! You have successfully configured your **7 Days to Die server for crossplay**, allowing both PC and console players to join the same world. With the correct server settings in place, your community can play together across different platforms.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />