---
id: fivem-resolve-dbconnection
title: "FiveM：解决数据库连接问题"
description: "了解如何修复 FiveM 服务器数据库连接问题，恢复与数据库的无缝通信 → 立即了解更多"
sidebar_label: 解决数据库连接
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Oxmysql 是一个非常实用的开源 FiveM 资源，预装在你的 FiveM 服务器中，用于实现服务器与数据库之间的通信。在开发过程中，你可能会进行一些更改（比如刷新数据库凭据），这就需要修改 oxmysql 的连接字符串。数据库连接问题示例：

![](https://screensaver01.zap-hosting.com/index.php/s/G5zACEEErfP4EHG/preview)

本指南将带你了解如何通过调整服务器配置文件中的连接字符串，解决 FiveM 服务器上的数据库连接问题。

<InlineVoucher />

## 自动方法

首先，打开你服务器的网页控制面板，进入 **设置**（Settings）页面。

![img](https://screensaver01.zap-hosting.com/index.php/s/nizHMSk7oXCsJS4/download)

在页面底部，你会看到 **操作**（Actions）按钮。只需点击 **重新配置 MySQL 连接字符串**（Reconfigure MySQL connection string）按钮，点击后重启服务器，确保更改生效。

![](https://screensaver01.zap-hosting.com/index.php/s/eZoSBJcbCr7422K/preview)

这会自动用正确的当前凭据更新你的 `server.cfg` 文件，数据库连接就会恢复正常。

## 手动方法

如果你想手动解决，需要访问你的 `server.cfg` 文件，手动用网页控制面板提供的凭据修改连接字符串。登录 txAdmin 界面，打开 CFG 编辑器。然后在另一个标签页，进入 **工具 -> 数据库**（Tools->Databases）页面，查看现有的数据库凭据。

![](https://screensaver01.zap-hosting.com/index.php/s/7JJgtatLzZRXCDM/preview)

在你的 `server.cfg` 文件中，添加以下行（如果已存在则替换），用你在网页面板看到的数据库凭据替换对应内容：

```
set mysql_connection_string "mysql://USER:PASSWORD@SERVER:3306/DATABASE"
```

![](https://screensaver01.zap-hosting.com/index.php/s/sf9sMJoZyJttHBE/preview)

完成后，保存文件并重启服务器。

## 总结

下次服务器启动时，数据库应该能被正常访问，服务器功能也会恢复正常。你已经成功解决了数据库连接问题。如有更多疑问或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />