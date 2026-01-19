---
id: fivem-installeup
title: "FiveM：安装 EUP（紧急制服包）"
description: "了解如何为自由模式角色设置紧急制服包，需订阅 Element Club → 立即了解更多"
sidebar_label: 安装 EUP
services:
  - gameserver-fivem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';



## 介绍

**EUP**，也就是紧急制服包，能让你的自由模式角色穿上紧急服务制服。下面会详细讲解如何安装它。

:::warning 需要 Element Club 订阅
安装和使用 EUP 需要订阅 Element Club。快去 [Cfx.re 门户](https://portal.cfx.re/subscriptions/element-club) 获取你的专属订阅吧！
:::

<InlineVoucher />



## 准备工作

开始安装 **EUP** 前，需要先做一些准备。你需要先下载并解压 [EUP](https://forum.cfx.re/t/emergency-uniform-pack-client-server-sided-easy-install-update-5-0-announcement/97599) 和 [NativeUI](https://github.com/FrazzIe/NativeUILua/archive/master.zip) 到你的电脑上。下载完成后，你应该会拿到以下压缩包：

- `eup-ui.7z`
- `eup-stream.7z` 
- `NativeUI-master.zip`

现在把这些文件解压到本地电脑。解压后应该包含 `__resource.lua` 或 `fxmanifest.lua` 文件，以及脚本文件夹/文件。

**eup-ui**
![](https://screensaver01.zap-hosting.com/index.php/s/PjXPtC49ZAkiD87/preview)

**eup-stream**
![](https://screensaver01.zap-hosting.com/index.php/s/y4HNTngCjkg8n44/preview)

**NativeUI**
![](https://screensaver01.zap-hosting.com/index.php/s/EwdgkfA5qjWNAYj/preview)

:::info
NativeUI 需要先打开 “NativeUI-master” 文件夹，里面才是正确的脚本文件。如果没看到，可能在子文件夹里，通常名字是一样的。
:::

## 安装步骤
现在可以开始安装了。通过 [FTP](gameserver-ftpaccess.md) 连接你的服务器，把文件上传到 `resources` 目录。路径一般是：

```
/gxxxxxx/fivem/YourFramework/resources/
```

![](https://screensaver01.zap-hosting.com/index.php/s/qFtS6sJHy67Y773/preview)



## 配置

为了让安装的资源生效，需要在服务器配置文件里声明它们。登录 txAdmin 界面，进入 CFG 编辑器进行配置。

![img](https://screensaver01.zap-hosting.com/index.php/s/xQgkC5npHji4ArM/download)



## 总结

你已经成功在 FiveM 服务器上安装了 EUP。如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂


<InlineVoucher />