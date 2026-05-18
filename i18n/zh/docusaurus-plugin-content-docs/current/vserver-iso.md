---
id: vserver-iso
title: "VPS：挂载 ISO 文件"
description: "了解如何使用你喜欢的 ISO 自定义 VPS，全面掌控你的服务器环境 → 立即了解更多"
sidebar_label: 挂载 ISO 文件
services:
  - vserver
---



import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/vserver-iso-files-en.json';

## 介绍
想要在选择系统时拥有更多自由吗？除了我们的操作系统模板外，你当然也可以挂载自己的 ISO 文件。使用我们的 VPS 产品，这超级简单。这样你就能在服务器上安装你真正想要的操作系统！

<InlineVoucher />



## 可用的 ISO 文件

除了我们预配置的标准操作系统模板外，我们还提供挂载额外 ISO 文件的选项。这让你在搭建和管理服务器环境时更加灵活。我们的 VPS 产品目前支持以下 ISO 文件：

<SearchableItemList items={items} />





## 上传自定义 ISO

如果默认列表中没有你需要的 ISO 镜像，可以通过公开的源 URL 上传自定义 ISO。URL 必须支持 HTTP 或 HTTPS 访问，且不能需要认证或使用限时下载链接。

在 **添加自定义 ISO** 输入框中填写 URL，点击 **上传 ISO** 后，ISO 会自动导入，并可用于服务器安装。

![img](https://screensaver01.zap-hosting.com/index.php/s/E93dLjnpnBPFiH7/preview)

最多可同时存储三个自定义 ISO 镜像。每个上传的 ISO 仅保留 72 小时，之后会自动删除。如果超过时间仍需使用，需重新上传。客户需自行负责所提供 ISO 的内容、授权和安全性。









## 挂载 ISO 文件
要挂载 ISO，进入你的 VPS 管理面板，打开 **设置 → ISO**。选择你想要的 ISO 文件，调整启动顺序，然后重启服务器。

![img](https://screensaver01.zap-hosting.com/index.php/s/tszMKbqDSa3AaLy/download)

重启后，你可以通过 VNC 客户端连接服务器，开始安装和配置操作系统。

![img](https://screensaver01.zap-hosting.com/index.php/s/q6WoDMq8pxn72oG/download)

:::warning 挂载 ISO 后的在线状态和远程连接

挂载 ISO 后，服务器尚未完成设置。因此面板中不会显示**在线状态**，且**RDP**或**SSH 连接**暂不可用。只有操作系统成功安装并配置后，这些功能才会开放。

:::




## 总结
恭喜你，已成功选择并挂载了 ISO 文件。如有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂



<InlineVoucher />