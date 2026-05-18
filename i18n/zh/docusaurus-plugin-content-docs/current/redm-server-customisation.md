---
id: redm-server-customisation
title: "RedM：自定义服务器详情"
description: "了解如何用颜色和表情符号自定义你的服务器名称，让它在服务器列表中脱颖而出 → 立即了解更多"
sidebar_label: 自定义服务器详情
services:
  - gameserver-redm
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
想让你的服务器在服务器列表中显示自定义信息吗？这很简单！本指南将教你如何设置多种可用的自定义选项，让你的服务器在列表中更抢眼！

<InlineVoucher />

## 自定义服务器名称

### 颜色代码

你可以为服务器名称添加多种颜色。通过在想要更改颜色的地方使用前缀即可指定颜色。下面的表格展示了可用的颜色列表。

:::info
要在服务器名称中使用颜色，你必须拥有有效的包含此功能的 [Cfx.re 订阅](https://portal.cfx.re/subscriptions)。如果你已经有订阅但颜色仍无法显示，请确保你已设置了 [专属许可证密钥](redm-licensekey.md)。
:::

你可以通过访问配置部分介绍的三种方法之一来更改服务器名称。下面是使用颜色的示例及其效果：
```
sv_hostname "^2ZAP-Hosting ^0| ^4官方社区服务器 ^0- ^1活动即将 ^8上线^1!"
```

![](https://screensaver01.zap-hosting.com/index.php/s/F5TYfEGQkGjXger/preview)

| 代码 | 颜色       | 十六进制代码 |
| ---- | ---------- | ----------- |
| ^0   | 白色       | #F0F0F0     |
| ^1   | 红色       | #F44336     |
| ^2   | 绿色       | #4CAF50     |
| ^3   | 黄色       | #FFEB3B     |
| ^4   | 蓝色       | #42A5F5     |
| ^5   | 浅蓝色     | #03A9F4     |
| ^6   | 紫色       | #9C27B0     |
| ^7   | 白色       | #F0F0F0     |
| ^8   | 橙色       | #FF5722     |
| ^9   | 灰色       | #9E9E9E     |

### 表情符号

RedM 也支持直接在服务器名称中添加表情符号。只需将你想用的表情放入服务器配置中的 `sv_hostname` 参数即可生效。此功能无需 Cfx.re 订阅。

## 设置项目详情

### 服务器描述

设置服务器描述有助于简洁明了地介绍你的服务器。你可以轻松为你的 RedM 游戏服务器设置简短的项目描述，它会显示在服务器列表中服务器名称旁边。下面是设置项目描述的示例及其效果：

```
sets sv_projectDesc "加入我们的 Discord，随时了解最新活动！discord.gg/zaphosting"
```

![](https://screensaver01.zap-hosting.com/index.php/s/F5TYfEGQkGjXger/preview)

### 服务器标签

设置服务器标签有助于精准描述你的服务器内容，让潜在玩家在筛选服务器时更容易找到你。设置标签后，它们会显示在服务器列表页面，并用于筛选服务器。下面是设置项目标签的示例及其效果：

```
sets tags "zap, zap-hosting, 官方, 社区, zap-社区, zap-社区服务器"
```

![](https://screensaver01.zap-hosting.com/index.php/s/oS2Y3dbPZDFDJPj/preview)

### 其他杂项详情

你还可以根据喜好更改一些其他服务器详情。

#### 游戏类型

设置 gametype 参数会改变服务器列表页面显示的内容，但**不会**更改服务器内的游戏模式。你可以通过游戏服务器的网页面板或设置标签来更改：

```
sets gametype "自由漫游"
```

#### 语言

最后，你可以更改服务器列表页面显示的服务器语言。我们有一个 [语言 / 地区（国旗）](redm-locale.md) 用于设置本地化。你可以通过游戏服务器的网页面板或设置标签来完成：

```
sets locale "en-GB"
```

你可以通过查看 [这个资源](https://github.com/TiagoDanin/Locale-Codes#locale-list) 或类似内容获取所有语言标签列表。

## 结语

只要你按照以上步骤操作，就成功自定义了你的 RedM 游戏服务器。如有任何疑问或需要帮助，欢迎随时联系在线客服，我们每天都在线为你服务！🙂

<InlineVoucher />