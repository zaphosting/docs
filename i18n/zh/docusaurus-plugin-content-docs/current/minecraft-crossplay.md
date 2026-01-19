---
id: minecraft-crossplay
title: "Minecraft：设置 Minecraft Java 与基岩版跨平台联机"
description: "了解如何通过 GeyserMC 和 Floodgate 插件实现 Minecraft Java 与基岩版的无缝跨平台联机，提升多人游戏体验 → 立即了解更多"
sidebar_label: Java 与基岩跨平台联机
services:
  - gameserver-minecraft
---

## 介绍

传统上，Minecraft Java 版和基岩版是两个完全独立的平台，无法实现跨平台联机。幸运的是，现在你可以通过在 Java 版服务器上使用特定插件，让基岩版玩家也能加入游戏，实现跨平台联机。在本指南中，我们将介绍如何安装和配置 GeyserMC 插件及 Floodgate 插件，让两个平台的玩家轻松联机。

## 准备工作

要设置跨平台联机，你需要运行兼容的 Minecraft Java 版服务器软件。我们推荐使用 Paper、Spigot 或 Bukkit，这些是最受欢迎的选择。

你应该已经有一台安装并激活了上述任一游戏的 Minecraft 游戏服务器。如果你需要帮助，请查看我们的[游戏切换](gameserver-gameswitch.md)指南。

## 安装

首先，登录你的游戏服务器网页控制面板，进入 **设置->插件** 页面。在这里找到 **GeyserMC** 下拉菜单并选择它。点击安装按钮，自动将插件安装到服务器，等待进度条完成。

我们也强烈建议安装同一页面中的 **Floodgate** 插件，因为它带来多种好处，比如：
- 允许基岩版玩家无需 Java 账号即可加入。
- Java 版玩家可以看到基岩版的皮肤。
- 其他开发者相关的便利功能。

:::note
Floodgate 插件是可选的，但我们强烈推荐，因为它让基岩版玩家的跨平台体验更加顺畅。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/cagcHmzwR2yBZSo/preview)

插件安装完成后，继续下一节进行配置。

## 插件配置

在网页控制面板的 **插件** 页面，点击 GeyserMC 插件旁的蓝色设置图标，会自动跳转到 **设置** 页面对应位置。

![](https://screensaver01.zap-hosting.com/index.php/s/RAZKNSdePa5wBs4/preview)

在这里，你可以自定义服务器名称和 MOTD（消息）行，这些信息会专门显示给基岩版玩家。

![](https://screensaver01.zap-hosting.com/index.php/s/kBzxQkmNgdsWgZb/preview)

向下滚动页面底部，你还能看到服务器分配的端口信息。

- **游戏端口** 是主服务器端口，Java 版客户端连接时使用。
- **端口 5** 是 GeyserMC 插件使用的端口，基岩版客户端连接时使用。

连接时，请根据客户端版本使用对应端口。

:::tip
如果你购买了 **自定义 IP** 服务器配置，可以申请自定义端口。只需通过工单联系[客服支持](https://zap-hosting.com/en/customer/support/)即可。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/joA62kWeJ5crCmY/preview)

<!--

### Floodgate 插件

如果你安装了 Floodgate 插件，需要修改 GeyserMC 配置文件，将其设置为主要认证方式。请确保服务器关闭状态下编辑配置文件，避免更改被覆盖。

进入游戏服务器网页控制面板的 **配置** 页面，打开 `plugins/Geyser-[你的服务器类型]/config.yml` 文件，点击蓝色编辑按钮。

![](https://screensaver01.zap-hosting.com/index.php/s/ixCtkQ5WWWacfGe/preview)

找到 `remote` 部分的 `auth-type` 参数，将其值从 **online** 改为 **floodgate**，保存文件。

![](https://screensaver01.zap-hosting.com/index.php/s/c6JRFxPfjGBSWZi/preview)

这样 GeyserMC 就会使用 Floodgate 插件进行用户认证，享受之前提到的各种好处。
-->

## 连接与故障排查

插件配置完成后，重启服务器以应用新设置。然后尝试用两个版本的客户端连接服务器，确认功能正常。

连接时务必使用正确端口：基岩版玩家用 **端口 5**，Java 版玩家用 **游戏端口**，这些信息都在 **设置** 标签页可查，也可在网页面板仪表盘的信息图标上查看。

![](https://screensaver01.zap-hosting.com/index.php/s/M42ZkamKHieRcEz/preview)

连接成功后，你就可以实现 Java 与基岩版的跨平台联机啦！

![](https://screensaver01.zap-hosting.com/index.php/s/oMRWkaSs5KKbkzy/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/xyMaENLFx4BCSPF/preview)

如果遇到连接问题，试试以下排查步骤，通常能解决大部分常见问题。

#### 客户端版本过旧或服务器版本不匹配

这个错误说明服务器和客户端游戏版本不一致。Java 版遇到此问题，只需在启动器中切换到正确版本即可。

基岩版则不太方便切换版本，遇到此问题请确保客户端和服务器都更新到最新版本。

我们还推荐安装 ViaVersion 和 ViaBackwards 插件，扩展服务器支持的游戏版本范围，让不同版本的玩家都能连接。方法同前，进入 **插件** 页面，在 **所有插件** 下拉菜单中找到 ViaVersion 和 ViaBackwards，点击绿色下载图标安装。

:::note
如果网页面板无法安装插件，可能是插件没有稳定的最新版本。此时建议手动从官网下载安装测试版插件，通过 FTP 上传。详情请参考我们的[FTP 访问](gameserver-ftpaccess.md)指南。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/QCcndf6TGMsrw7x/preview)

插件安装完成后，再次尝试连接，应该能支持更多版本的客户端。

#### 无法连接到世界

常见原因是客户端添加服务器时使用了错误端口。基岩版客户端连接时请使用 **端口 5**，Java 版客户端使用主 **游戏端口**。

如果问题依旧，建议查看 GeyserMC 配置文件，确认端口设置正确。进入网页面板 **配置** 页面，打开 `plugins/Geyser-[你的服务器类型]/config.yml` 文件。

找到 `bedrock` 和 `remote` 部分的 `port` 参数，确保 bedrock 端口与 **端口 5** 一致，remote 端口为 **25565** 或主 **游戏端口**。

![](https://screensaver01.zap-hosting.com/index.php/s/AcZ5JAasBcKQpCm/preview)

## 结语

恭喜你成功安装并配置了 GeyserMC 插件，实现了 Minecraft Java 与基岩版的跨平台联机！如果有任何疑问或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂