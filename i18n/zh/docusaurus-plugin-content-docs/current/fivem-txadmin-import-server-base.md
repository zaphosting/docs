---
id: fivem-txadmin-import-server-base
title: "FiveM：txAdmin 导入服务器基础"
description: "了解如何使用 txAdmin 将现成的服务器基础导入到您的服务器，实现快速设置和无缝集成 → 立即了解更多"
sidebar_label: 导入服务器基础
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## 介绍

你在网上找到了一个现成的服务器，想上传到自己的服务器上？没问题！借助 txAdmin，你可以快速轻松地导入现成的服务器基础——前提是你注意几个重要的要求和细节。在本指南中，我们将展示如何导入服务器基础。



<InlineVoucher />

## 准备工作

要开始设置流程，你需要先从网上下载好一个现成的服务器基础到你的电脑，并且文件已经解压。

服务器基础的内容可能会根据服务器类型和内容有所不同，文件结构也会有所差异。但一般来说，你的服务器基础应该包含以下内容：

- **服务器配置 - `server.cfg`（必需）：** 服务器配置文件，包含服务器的所有相关命令和设置。
- **资源文件夹 - `resource`（必需）：** 资源文件夹包含服务器基础中使用的所有资源。
- **SQL 文件 - `filenameXY.sql`（可选）：** 该文件包含完成的数据库结构，用于资源与数据库之间的通信（如果使用数据库的话）。

你下载的服务器基础中的**数据（`server.cfg`、`resources`）**必须上传到你的游戏服务器。**SQL 文件**则需要导入到我们提供的 ZAP 数据库中。

### 服务器文件
服务器基础数据的上传是通过 FTP 实现的。如果你还不太清楚怎么操作，可以看看这篇指南：[FTP 访问](gameserver-ftpaccess.md)

通过 FTP 连接到你的游戏服务器，进入 `fivem` 文件夹。如果还没有为你的服务器基础创建文件夹，现在就创建一个。这里以 **ExampleServer** 作为示例服务器基础的文件夹名。

![img](https://screensaver01.zap-hosting.com/index.php/s/HzDrADKgK3rqfKm/download)



创建好文件夹后，就可以上传服务器基础数据了。进入你刚创建的文件夹，上传资源文件夹和服务器配置文件。上传完成后应该是这样：

![img](https://screensaver01.zap-hosting.com/index.php/s/xyAZyt8W5XcxGaF/preview)

 

### 数据库

如果你的服务器基础需要使用数据库，那么提供的 SQL 文件也必须导入到你的 ZAP 数据库中。如果你还不清楚怎么操作，可以参考这篇指南：[导入 SQL 文件](fivem-sql-file-import.md)

按照指南将 SQL 文件导入数据库之前，先确保你已经修改了 SQL 文件内容，指定了正确的 ZAP 数据库名称。方法是将 SQL 文件中 Use '...' 命令里的原始数据库名替换成你的 ZAP 数据库名。

:::warning 导入前务必仔细检查 SQL 文件内容
请确保 SQL 文件内容已经正确修改且无误后再导入。否则会出现如下错误：

`Access denied for user ‘zapXXXXX-X’@’%’ to database ’originalDatabaseName’` 
:::



## txAdmin 设置

服务器准备工作完成后，接下来通过 txAdmin 界面进行服务器的安装、配置和设置。下面的指南详细说明了如何访问 txAdmin 以及具体的设置步骤：[txAdmin 设置](fivem-txadmin-setup.md)



### 欢迎界面

为你的项目定义一个名称。这个名称不会显示在服务器列表中，只会在 txAdmin 界面和聊天/Discord 消息中使用。然后继续下一步“部署类型”。

![img](https://screensaver01.zap-hosting.com/index.php/s/FCmd5xQ89wSPHfe/preview)

### 部署类型

在部署类型中，你需要选择如何设置服务器。可选项有：**热门配置**、**现有服务器数据**、**远程 URL 模板** 和 **自定义模板**。针对你的需求，选择 **现有服务器数据**。

![img](https://screensaver01.zap-hosting.com/index.php/s/oMSBwf6jmHMwtYn/preview)

### 选择路径

接下来指定服务器基础所在的路径。文件夹结构起始为 `/home/zapXXXXX/gXXXXXXXX/fivem/ExampleServer`，其中 `ExampleServer` 是你之前创建的服务器基础文件夹名。

你可以直接复制截图中的路径结构，然后加上你创建的服务器基础文件夹名。最终路径应该是这样：

![img](https://screensaver01.zap-hosting.com/index.php/s/eDPeDzSqfMbk7Tg/download)



点击 **下一步**。现在应该能识别到服务器配置文件 `server.cfg`。确认后通过 **保存并启动** 按钮完成常规设置。



## 配置

服务器很可能无法直接启动，因为部分必要信息不正确，比如 IP 地址和端口、数据库连接信息缺失，或者缺少授权密钥。因此还需要对服务器配置进行最终调整。

### 服务器详情

默认情况下，IP 地址和端口信息可能不存在或不正确。请确保服务器配置文件中有正确的端点信息，格式如下：

```
endpoint_add_tcp "0.0.0.0:30120"
endpoint_add_udp "0.0.0.0:30120"
```

将 IP 地址（0.0.0.0）和端口（30120）替换成你服务器的实际信息。你可以在游戏服务器管理后台找到这些信息。

:::warning IP 地址/端口错误
如果配置错误，会出现如下错误提示：

```
Line XX: [ZAP-Hosting] the 'endpoint_add_tcp' interface MUST be 'XXX.XXX.XXX.XXX'
Line XX: [ZAP-Hosting] the 'endpoint_add_udp' interface MUST be 'XXX.XXX.XXX.XXX'
```
:::


### 数据库

为了让服务器能连接数据库，必须在 `server.cfg` 配置文件中指定 MySQL 连接字符串，格式通常如下：

```sql
set mysql_connection_string "mysql://username:password@dataBaseHostname/databaseName?charset=utf8mb4"
```

是否已有该连接字符串取决于你使用的服务器基础。如果没有，或者没有正确的数据库信息，你需要添加并调整它。数据库信息可以在游戏服务器管理后台的数据库栏目查看。示例：

```sql
set mysql_connection_string "mysql://zapXXXXXXX-X:yourDatabasePassword@mysql-mariadb-XX-XXX.zap-hosting.com/zapXXXXXX-X?charset=utf8mb4"
```

:::tip 简化操作
如果想省去这一步，可以在游戏服务器管理后台设置页底部点击 **[重新配置 MySQL 连接字符串](https://screensaver01.zap-hosting.com/index.php/s/zZSmQex6ropFK3X/preview)** 按钮。
:::


### Onesync

如果你的服务器基础的 `server.cfg` 文件中包含有关 **Onesync** 的配置，必须删除它。Onesync 现在通过 txAdmin 界面设置管理，开启选项在 **设置 ⟶ FXServer** 中。

![img](https://screensaver01.zap-hosting.com/index.php/s/Y4LKM8ZRn4ZSFzp/download)

### 授权密钥

运行服务器需要你自己的 CFX 授权密钥。如何创建授权密钥请看这篇指南：[专属授权密钥](fivem-licensekey.md)

将授权密钥添加到服务器配置文件：

```
sv_licenseKey "yourLicenseKeyGoesHere"
```



## 总结

恭喜你！成功上传文件、完成 txAdmin 设置并调整好服务器配置后，就可以启动服务器，使用你的服务器基础畅玩了。

<InlineVoucher />