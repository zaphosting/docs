---
id: beammp-addon-map
title: "BeamMP：安装地图插件"
description: "了解如何通过自定义地图插件提升你的 BeamMP 服务器，实现更棒的多人游戏体验 → 立即了解"
sidebar_label: 安装地图插件
services:
  - gameserver-beammp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

BeamNG.Drive 原生支持 mod，拥有庞大的社区，让你可以和朋友一起扩展和增强游戏体验。由于 BeamMP 只是一个多人联机的修改器，大多数地图插件都应该兼容你的 BeamMP 服务器。本指南将带你完成在 BeamMP 服务器上安装并激活自定义地图插件的流程。

<InlineVoucher />

## 准备工作

要给你的 BeamMP 服务器安装地图插件，你需要通过 FTP 连接服务器。如果你不熟悉这部分，建议先看看我们的 [FTP 访问指南](gameserver-ftpaccess.md)。

在安装之前，你还需要找到想要安装到服务器上的地图插件。推荐你浏览 [官方 BeamNG.Drive 论坛](https://www.beamng.com/resources/categories/terrains-levels-maps.9/)，这里有社区制作的大量 mod 和地图插件资源。

:::tip
由于 BeamMP 是 BeamNG.Drive 的多人联机修改器，大多数地图插件都应该兼容你的 BeamMP 服务器。但也有可能某些特定地图无法正常运行，所以你需要逐个测试。
:::

## 安装步骤

首先，确保你已经下载了想要添加到服务器的地图插件，文件格式应为 `.zip`。

### 确认地图名称

在继续之前，务必确认使用的是正确的地图名称。你下载的 `.zip` 文件通常会带有正确的名称，但不一定总是如此，所以建议你再确认一遍。

打开下载的 `.zip` 文件，找到并打开 `levels` 文件夹，里面就是地图文件。

![](https://screensaver01.zap-hosting.com/index.php/s/8cGobQaKBJmexwK/preview)

复制该目录下地图插件文件夹的具体名称。右键点击文件夹，选择“属性”，然后用 `CTRL + C` 复制高亮的名称。

![](https://screensaver01.zap-hosting.com/index.php/s/D4AnY5zbfHMgMwR/preview)

### 配置地图

确认地图名称后，需要修改配置文件，调整当前激活的地图参数。

#### 关闭配置覆盖

首先，需要在设置中禁用默认地图选择，否则会覆盖你的修改。

在游戏服务器的网页面板中，进入 **设置** 页面。

![](https://screensaver01.zap-hosting.com/index.php/s/SJ5L6APTFzyZKTC/preview)

关闭“地图”选项。

![](https://screensaver01.zap-hosting.com/index.php/s/kHSybw6rw5jMaE3/preview)

然后在页面底部保存设置。

#### 修改配置文件中的地图

接着，进入网页面板的 **配置** 页面。

![](https://screensaver01.zap-hosting.com/index.php/s/sBj4CFQ3yKmMy8d/preview)

找到并打开 `ServerConfig.toml` 配置文件，搜索这一行：
`Map = "/levels/gridmap_v2/info.json"`

![](https://screensaver01.zap-hosting.com/index.php/s/JQg3EzkszXDrGFQ/preview)

将其替换为：
`Map = "/levels/[你的地图名]/info.json"`
用之前确认的地图名称替换 `[你的地图名]`，然后保存配置。

![](https://screensaver01.zap-hosting.com/index.php/s/oNKN34KTAxrSxYX/preview)

:::info
极少数情况下，地图格式可能不同。如果按照步骤操作后地图无法使用，可能需要将路径改为：
`Map = "/levels/[你的地图名]/[你的地图名].mis"`
:::

:::tip
随时可以通过重新启用设置中的默认地图选项，选择游戏自带的地图：
![](https://screensaver01.zap-hosting.com/index.php/s/8SSceQj373GQ3sw/preview)
:::

### 上传地图

最后一步，通过 FTP 将之前下载的 `.zip` 地图文件上传到你的 BeamMP 服务器。如果需要帮助，请参考我们的 [FTP 访问指南](gameserver-ftpaccess.md)。

在 FTP 客户端中找到路径：
```
../beammp/Resources/Client
```

将地图插件的 `.zip` 文件拖拽到该目录上传。配置文件修改完成且地图文件上传后，你的地图插件就准备好了。

## 总结

完成以上步骤后，重启你的 BeamMP 服务器。恭喜你，已经成功在 BeamMP 服务器上安装了地图插件！如果有任何问题或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />