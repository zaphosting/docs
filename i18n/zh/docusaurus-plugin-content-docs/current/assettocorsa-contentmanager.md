---
id: assettocorsa-contentmanager
title: "Assetto Corsa：用 Content Manager 配置服务器"
description: "了解如何高效配置和管理你的游戏服务器设置，实现最佳性能和个性化 → 立即了解更多"
sidebar_label: 用 Content Manager 配置服务器
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
**重要提示** 要用 Content Manager 管理服务器，必须是完整版，Lite 版*无法*管理服务器。
:::

<InlineVoucher />


## 准备工作

首先，打开 Content Manager，点击右上角的汉堡菜单，选择“Server”：

![](https://screensaver01.zap-hosting.com/index.php/s/LGKdDPSCMCEMEZj/preview)

接着新建一个预设并选中它：

![](https://screensaver01.zap-hosting.com/index.php/s/XLTcJkwrAAwB65o/preview)

## 设置服务器槽位

先设置服务器容量，我们的服务器只有10个槽位，所以选择“10”作为容量：

![](https://screensaver01.zap-hosting.com/index.php/s/XreNRjbpSJJqEsQ/preview)

## 选择地图

默认选中的是 Imola 地图，点击地图可以选择你想要的地图：

![](https://screensaver01.zap-hosting.com/index.php/s/B87ywSwXHL6qzFD/preview)



## 设置赛车

切换到“Entry List”标签页，这里可以添加新的赛车：

![](https://screensaver01.zap-hosting.com/index.php/s/bY5Q5WB7nDq7f8q/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/w6oxDfGJifFZbd7/preview)

:::info
注意所有赛车槽位都要填满，且不要超过服务器可用槽位数。

![](https://screensaver01.zap-hosting.com/index.php/s/tSZn2QJLzfDx4r9/preview)
:::

## 配置 FTP 上传

通过“Advanced”菜单可以配置 FTP 上传器，这样你就能一键上传服务器配置。

![](https://screensaver01.zap-hosting.com/index.php/s/7TmdJPGKAbAJnDP/preview)

现在输入你的 FTP 信息：

![](https://screensaver01.zap-hosting.com/index.php/s/7R9xNeEbDQpF4BD/preview)

:::info
“Folder”里必须填写你游戏服务器的 ID，ID 就是你在游戏服务器 URL 里看到的数字，比如：

> https://zap-hosting.com/en/customer/gameserver/show/**427814**/ftpBrowser/
:::

我们这里的写法是：

```
/g427814/assetto-corsa/
```

AssettoServer 的写法是：

```
/g427814/assettoserver/
```

配置好后点击“Upload Content”，配置文件、赛道和赛车会自动上传，之后只需启动服务器即可！

<InlineVoucher />