---
id: dedicated-linux-ftp
title: "独立服务器：FTP 服务无法使用 - 故障排查"
description: "了解如何排查 VPS 上的 FTP 访问问题，恢复服务器连接，轻松管理你的游戏或 Teamspeak 服务器 → 了解更多 no"
sidebar_label: FTP 服务无法使用
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 游戏服务器或 Teamspeak 服务器无法通过 FTP 访问时该怎么办？

:::info
注意：以下步骤仅适用于已安装 ZAP 面板的 VPS！
:::

如果创建的服务器无法通过 FTP 访问，通常是因为 FTP 服务（ProFTPD）未启动。极少数情况下，也可能是配置错误或端口被占用，比如 FTP 默认端口 21 被其他程序占用。



## 更深入地检查 FTP 问题：

### 检查可用性
你可以通过面板内置的 FTP 浏览器轻松检测。在对应服务器的菜单中点击“工具”下的“FTP 浏览器”。

![](https://screensaver01.zap-hosting.com/index.php/s/G394GJkDc9WXEzs/preview)

然后点击“直接连接”按钮。

![](https://screensaver01.zap-hosting.com/index.php/s/KLCmb8A4xSjWmy9/preview)

你很可能会看到如下画面：

![](https://screensaver01.zap-hosting.com/index.php/s/FFJo8XeEJcX7RTM/preview)

既然通过 WebFTP 或 FTP 工具无法连接，那就得重点检查 VPS 上的 FTP 服务了。

### 检查 ProFTPD 状态

连接到你的服务器，使用 SSH 或控制台，输入命令：

```
service proftpd status
```

系统会返回当前服务状态：

![](https://screensaver01.zap-hosting.com/index.php/s/zsg8qwFJsWEAZkA/preview)

这里显示状态为“dead”，说明服务已离线，无法访问。


### 重启 FTP 服务
用下面的命令重启 FTP 服务：

```
service proftpd start
```

执行后如果没有报错，说明服务通常已经重新上线。

你可以用命令 `service proftpd status` 再次确认，应该会看到：

![](https://screensaver01.zap-hosting.com/index.php/s/8QNNnoMFYG4rt2D/preview)

状态显示为“active”而非“dead”，说明 FTP 服务已恢复，接下来可以用 FTP 工具或 WebFTP 再试试连接。

### 再次检查连接
现在你应该能成功连接并查看你的数据了。

### 问题解决
✅ FTP 服务（ProFTPD）已启动/激活，数据交换畅通无阻！