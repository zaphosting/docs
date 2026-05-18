---
id: sunkenland-setup-server
title: "Sunkenland：Sunkenland 服务器设置"
description: "了解如何设置你的 Sunkenland 游戏服务器，确保流畅游戏体验和正常运行 → 立即了解更多"
sidebar_label: 服务器设置
services:
  - gameserver-sunkenland
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Sunkenland 服务器首次使用时需要快速设置，才能保证服务器正常运行。本指南将带你一步步完成 Sunkenland 游戏服务器的设置。

<InlineVoucher />

## 准备工作
开始之前，你需要先启动 Sunkenland 并创建一个世界存档。确保在继续之前保存好世界。

为了后续访问服务器文件，你还需要一个 FTP 客户端，比如 [WinSCP](https://winscp.net/eng/index.php) 或 [FileZilla](https://filezilla-project.org/)，它们都是开源且免费下载的。

## 访问本地数据
第一步是访问你的 Sunkenland 存档数据。

只需按下键盘上的 `CTRL+R`，在 Windows 运行窗口输入：
```
%localappdata%low\Vector3 Studio\Sunkenland\
```

这里你会看到一个 `Worlds` 文件夹，里面包含了你所有的本地存档文件。选择你想要托管到服务器上的存档，或者如果是新建的，就选择你在开始本指南前生成的新存档。

:::tip
没看到任何文件？请确认你已经启动过 Sunkenland 并创建了一个世界存档，这样才会生成对应的文件夹。
:::

## 上传存档
接下来，使用 FTP 客户端连接到你的游戏服务器，并上传上一步选中的存档。

先用游戏服务器网页后台的 **工具->FTP浏览器** 中提供的账号信息连接服务器。需要帮助的话，可以参考我们的 [通过 FTP 访问](gameserver-ftpaccess.md) 指南。

连接成功后，进入 Sunkenland 文件夹，打开 "AppData" 文件夹，再进入 "Worlds" 文件夹，将之前选中的存档上传到这里。

文件夹结构应该像这样，`Marvin's World~cef76ff5-447a-48df-b3a8-74b9ea5b7a86` 是你的存档名。
![](https://screensaver01.zap-hosting.com/index.php/s/eFg6Ek3giFM3DLs/preview)

:::important
这一步，请复制存档世界名后面的 GUID，后续步骤需要用到它来让服务器正常运行。

GUID 格式示例：
```
ZAP-Hosting's World~cef76ff5-447a-48df-b3a8-74b9ea5b7a86 # 完整世界名
cef76ff5-447a-48df-b3a8-74b9ea5b7a86 # 你需要的 GUID
```
:::

## 激活服务器
最后，进入游戏服务器网页后台的 **设置** 页面。

找到 **World GUID** 选项，在这里粘贴你刚才复制的 GUID。

别忘了点击页面底部的绿色 **保存** 按钮。然后尝试启动服务器，应该能正常启动啦。

恭喜你，Sunkenland 游戏服务器设置完成！

<InlineVoucher />