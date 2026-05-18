---
id: dedicated-linux-fivem
title: "独立服务器：FiveM 独立服务器 Linux 设置（GS/TS3 界面）"
description: "了解如何使用 txAdmin 设置并运行自己的 FiveM 独立服务器，实现无缝多人游戏体验 → 立即了解更多"
sidebar_label: FiveM
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## 介绍
你拥有独立服务器，想用 txAdmin 安装并运营自己的 FiveM 独立服务器吗？来对地方了！下面我们会详细讲解安装配置的所有必要步骤，以及你需要注意的事项。

:::warning  已选并安装操作系统
这里假设你已经为你的独立服务器选择并安装好了操作系统。如果还没完成这一步，先去看看我们的[初始设置](dedicated-setup.md)指南，跟着步骤走。
:::



## 准备工作

要搭建 FiveM 服务器，需要先完成一些准备工作，这些步骤必须在真正开始搭建 FiveM 独立服务器之前完成。


### 设置数据库

对于我们的 GS/TS3 界面选项，我们已经内置了自己的数据库。不过，如果你想自己搭建数据库服务器和数据库，建议参考我们的[数据库安装](dedicated-linux-databases.md)指南。

:::warning
如果你使用自己的数据库，txAdmin 设置时需要用你自己的数据库信息替换预设的数据库信息。
:::



### 安装 GS/TS3 界面
借助用户友好的 GS/TS3 界面，你只需几次点击就能安装 FiveM 独立服务器。安装过程无需任何先验知识，所有必需的软件包、服务器文件和安装步骤都自动完成，帮你省时省力。

:::warning
GS/TS3 界面功能支持以下操作系统：

- Debian: 10, 11
- Ubuntu: 20.04

(*) 我们正在努力支持更多更高版本的操作系统，敬请期待。
:::

如果你还不熟悉 GS/TS3 界面，建议先看看我们的[GS/TS3 界面](dedicated-linux-gs-interface.md)指南。

确认已安装 GS/TS3 界面后，打开新创建的游戏服务器服务。进入后，先选择游戏。进入 **Games** 页面，点击可用游戏，搜索 txAdmin，然后点击安装按钮。

![img](https://screensaver01.zap-hosting.com/index.php/s/jJaHrkd7LQAHx46/download)




### 创建 FiveM 服务器授权密钥

每个 FiveM 服务器都需要自己的授权密钥，管理入口是新的 [Cfx.re 门户](http://portal.cfx.re/)。授权密钥与你的 Cfx.re 账号绑定。登录网站，进入 **Server** 分类，点击 **Generate Key** 按钮生成。

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## 配置

现在可以开始配置 FiveM 服务器和 txAdmin 了。打开你的游戏服务器控制面板，txAdmin 区域会有链接和登录信息。打开它并登录。

![img](https://screensaver01.zap-hosting.com/index.php/s/W5xoFtgfZkeZFgQ/preview)

### txAdmin 设置

txAdmin 设置会在五个步骤内安装并配置你的 FiveM 服务器。按照 txAdmin 界面指示操作，先定义一个 **服务器名称**，然后选择想要的 **服务器类型**。本例展示的是带预装 QBCore 的 FiveM 服务器安装。

在 **Deployment Type** 步骤选择 **Popular Recipes**，然后选中 **QBCore Framework Template**。确认 **数据目录** 后，启动 **Recipe Deployer** 完成安装。

![img](https://screensaver01.zap-hosting.com/index.php/s/i7mSNNs29b6QLjz/download)




### 防火墙配置

通过 GS/TS3 界面安装 FiveM 服务器时，所有必要的端口转发都会在防火墙中**自动**设置。如果遇到问题，也可以通过 SSH 手动执行以下命令设置端口转发：

```
iptables -A INPUT -p tcp --dport 30120 -j ACCEPT
iptables -A INPUT -p udp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p tcp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p udp --dport 30120 -j ACCEPT 
```



## 总结

你已经成功在独立服务器上安装并配置了 FiveM 独立服务器服务。还有疑问或需要帮助？别犹豫，随时联系在线客服，我们每天都在线为你服务！🙂



