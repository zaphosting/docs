---
id: domain-gameserver-srv-link
title: "域名：设置游戏服务器转发"
description: "了解如何将您的域名或子域名转发到游戏服务器，实现轻松访问和更佳连接体验 → 立即了解更多"
sidebar_label: 游戏服务器转发
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
您可以选择将整个域名或仅子域名转发到您的游戏服务器。这非常实用，因为它允许玩家通过域名连接游戏服务器，而无需记住复杂的纯数字 IP 地址。在本指南中，我们将介绍如何通过 DNS 记录设置域名转发到游戏服务器的流程。

<InlineVoucher />

:::info
请注意，DNS 记录的更改可能需要最长 24 小时才能生效！
:::

## 功能说明

转发 IP 地址时，可以创建一个子域名，将其转发到游戏服务器的 IP 地址，或者直接转发整个域名（无子域名）。如果游戏服务器使用游戏的默认端口，这样就足够了。如果游戏服务器使用非默认端口，则需要额外的 **SRV 记录** 来将子域名转发到游戏服务器。

:::info
并非所有游戏都支持通过 SRV 记录将域名转发到游戏端口，使用前请确认您的游戏是否支持 SRV 记录。
:::

### SRV 服务名

服务名取决于游戏，且总是以 **下划线** 开头。例如，Minecraft 游戏服务器的服务名始终是 **_minecraft**，FiveM 游戏服务器则是 **_cfx**。

### SRV 协议

协议指定连接所用的互联网协议。这里可选 **UDP** 和 **TCP**。具体使用哪个协议也取决于游戏，协议名同样以 **下划线** 开头，分别是 **_udp** 或 **_tcp**。

## 准备工作

如果想将域名转发到游戏服务器且不创建子域名，首先在控制面板打开您的域名，然后从左侧菜单进入 DNS 管理。

![](https://screensaver01.zap-hosting.com/index.php/s/X8q3jdigEdZrRaB/preview)

这里可以看到该域名所有现有的 DNS 记录。

![](https://screensaver01.zap-hosting.com/index.php/s/zRzCnwbqYxaeSiJ/preview)

## 域名转发（Minecraft）

首先需要确认您想转发的 Minecraft 服务器的 IP 和端口。拿到这些信息后，按以下步骤操作。

本示例中，我们使用 `testserver-domain.de` 作为域名，`123.123.123.123` 作为服务器 IP，端口为 `25500`。

### 创建 A 记录

点击 **新建条目** 按钮创建新记录。

弹出窗口有四个字段需要填写：

![](https://screensaver01.zap-hosting.com/index.php/s/BYNiFMMwdwjEHwZ/preview)

**名称** 是主域名或子域名，用于转发到 IP，名称可自由选择。此步骤中 **类型** 保持为 **A**。**值** 填写之前查到的 Minecraft 服务器 IP。示例中如下：

![](https://screensaver01.zap-hosting.com/index.php/s/aRYpxgrySQqzton/preview)

保存后，记录显示如下：

![](https://screensaver01.zap-hosting.com/index.php/s/eFLm8oqbo4cLtn8/preview)

### 创建 SRV 记录

接下来创建 SRV 记录，用于端口转发（非默认端口时必需）。

再次点击 **新建条目**。

**名称** 需填写协议和连接域名，后续连接服务器时会用到该域名。**类型** 选择下拉菜单中的 **SRV**：

![](https://screensaver01.zap-hosting.com/index.php/s/pH9F5kZins8wHn4/preview)

**值** 需要填写三个参数：优先级（默认可填 0）、游戏服务器端口（示例中为 `25500`）、以及刚创建的 **A 记录** 的域名。

示例：

![](https://screensaver01.zap-hosting.com/index.php/s/Gf8kkc5srHEbC2N/preview)

### 故障排查 & 结果

:::important
条目末尾必须加上一个点，否则系统会尝试自动拼接域名。
:::

如果不加点，系统会把 `minecraft.testserver-domain.de` 转成 `minecraft.testserver-domain.de.testserver-domain.de`，导致转发失败。

## 域名转发（FiveM）

首先确认您想转发的 FiveM 服务器的 IP 和端口。拿到这些信息后，按以下步骤操作。

本示例中，我们使用 `testserver-domain.de` 作为域名，`123.123.123.123` 作为服务器 IP，端口为 `30300`。

### 创建 A 记录

点击 **新建条目** 按钮创建新记录。

弹出窗口有四个字段需要填写：

![](https://screensaver01.zap-hosting.com/index.php/s/FigmCXEc3eJYz78/preview)

**名称** 是主域名或子域名，用于转发到 IP，名称可自由选择。此步骤中 **类型** 保持为 **A**。**值** 填写之前查到的 FiveM 服务器 IP。示例中如下：

![](https://screensaver01.zap-hosting.com/index.php/s/7dBKaJ4xomTiS9C/preview)

保存后，记录显示如下：

![](https://screensaver01.zap-hosting.com/index.php/s/5DppfyXsADTT85t/preview)

### 创建 SRV 记录

接下来创建 SRV 记录，用于端口转发（非默认端口时必需）。

再次点击 **新建条目**。

**名称** 需填写协议和连接域名，后续连接服务器时会用到该域名。**类型** 选择下拉菜单中的 **SRV**：

![](https://screensaver01.zap-hosting.com/index.php/s/Yab6ksJNJFTLAeB/preview)

**值** 需要填写三个参数：优先级（默认可填 0）、游戏服务器端口（示例中为 `30300`）、以及刚创建的 **A 记录** 的域名。

示例：

![](https://screensaver01.zap-hosting.com/index.php/s/te4LJ3yKRpTSi5W/preview)

### 故障排查 & 结果

:::important
条目末尾必须加上一个点，否则系统会尝试自动拼接域名。
:::

如果不加点，系统会把 `fivem.testserver-domain.de` 转成 `fivem.testserver-domain.de.testserver-domain.de`，导致转发失败。

<InlineVoucher />